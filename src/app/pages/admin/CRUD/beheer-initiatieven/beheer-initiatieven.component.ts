import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AdminService} from '../../../../services/admin.service';
import {AuthenticateService} from '../../../../services/authenticate.service';

@Component({
  selector: 'app-beheer-initiatieven',
  templateUrl: './beheer-initiatieven.component.html',
  styleUrls: ['./beheer-initiatieven.component.scss']
})
export class BeheerInitiatievenComponent implements OnInit {


  adminID: number;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private adminService: AdminService,
    private authenticateService: AuthenticateService,
    private activatedroute: ActivatedRoute
  ) {
    this.adminService.getIdOfCurrentAdmin().subscribe(r => {
      if (r !== parseInt(this.activatedroute.snapshot.paramMap.get('id'))) {
        this.router.navigate(['/forbidden']);
      }
      this.adminID = parseInt(this.activatedroute.snapshot.paramMap.get('id'));
    });
  }

  toAdminMenu(){
    this.router.navigate(['adminMenu/' + this.adminID], {replaceUrl: true});
  }

  signOut() {
    this.router.navigate(['admin'], {replaceUrl: true});
    localStorage.clear();
  }

  ngOnInit(): void {
  }

}
