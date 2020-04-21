import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AdminService} from '../../../../services/admin.service';
import {AuthenticateService} from '../../../../services/authenticate.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-beheer-challange',
  templateUrl: './beheer-challange.component.html',
  styleUrls: ['./beheer-challange.component.scss']
})
export class BeheerChallangeComponent implements OnInit {


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
    localStorage.clear();
    this.authenticateService.isLoggedin = new BehaviorSubject( false);
    this.router.navigate(['admin'], {replaceUrl: true});
  }

  ngOnInit(): void {
  }

}
