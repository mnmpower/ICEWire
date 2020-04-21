import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticateService} from '../../../services/authenticate.service';
import {AdminService} from '../../../services/admin.service';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.scss']
})
export class AdminMenuComponent implements OnInit {

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

  ngOnInit(): void {
  }

  toProjecten() {
    this.router.navigate(['beheerProjecten/' + this.adminID], {replaceUrl: true});
  }

  toPersonen() {
    this.router.navigate(['beheerPersonen/' + this.adminID], {replaceUrl: true});
  }

  toInitiatieven() {
    this.router.navigate(['beheerInitiatieven/' + this.adminID], {replaceUrl: true});
  }

  toCategorieen() {
    this.router.navigate(['beheerCategorieen/' + this.adminID], {replaceUrl: true});
  }

  toStatussen() {
    this.router.navigate(['beheerStatussen/' + this.adminID], {replaceUrl: true});
  }

  toWeaklyChallange() {
    this.router.navigate(['beheerWeaklyChallange/' + this.adminID], {replaceUrl: true});
  }

  toAdmins() {
    this.router.navigate(['beheerAdmins/' + this.adminID], {replaceUrl: true});
  }

  signOut() {
    this.router.navigate(['admin'], {replaceUrl: true});
    localStorage.clear();
  }
}
