import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticateService} from '../../services/authenticate.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  logInForm: FormGroup;
  submitted = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authenticateService: AuthenticateService
  ) {
  }

  ngOnInit(): void {
    this.logInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get formControls() {
    return this.logInForm.controls;
  }


  onSubmit() {
    this.submitted = true;
    if (this.logInForm.invalid) {
      return;
    }

    this.authenticateService.authenticateAdmin(this.logInForm.value).subscribe(
      result => {
        localStorage.setItem('token', result.token);
        this.router.navigate(['beheerProjecten/' + result.adminID], {replaceUrl: true});
      },
      error => {
        if (error.status === 400) {
          this.error = error.error.message;
          alert(error.error.message);
        }
      },
    );
  }
}
