import {Component, OnInit} from '@angular/core';
import {AdminService} from '../../services/admin.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Admin} from '../../models/admin.model';
import {UserLogin} from '../../models/user-login.model';

@Component({
  selector: 'app-table-admin-crud',
  templateUrl: './table-admin-crud.component.html',
  styleUrls: ['./table-admin-crud.component.scss']
})
export class TableAdminCrudComponent implements OnInit {

  config: any;
  collection = {count: 0, data: []};

  passwordError = '';
  validePassword = true;
  passwordRepeat = '';
  decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

  emaiError = '';
  valideEmail = true;

  tonen = false;
  invalideForm = false;

  admins: Admin[] = [];
  admin: Admin = new Admin();
  ingelogdeAdmin: Admin = new Admin();
  user: UserLogin = new UserLogin(null, null);

  constructor(
    private adminService: AdminService,
    private activatedroute: ActivatedRoute,
    private router: Router
  ) {
    this.adminService.getIdOfCurrentAdmin().subscribe(r => {
      if (r !== parseInt(this.activatedroute.snapshot.paramMap.get('id'))) {
        this.router.navigate(['/forbidden']);
      }
      console.log('na forbidden');
      this.adminService.getAdmin(r).subscribe(result => {
        this.ingelogdeAdmin = result;
        console.log('admind lmaden ');
        this.loadAdmins();
      });
    });


    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.collection.count
    };
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  loadAdmins() {
    this.adminService.getAdmins().subscribe(r => {
      this.admins = r;
      if (this.activatedroute.snapshot.paramMap.get('id') !== '1') {
        this.admins = [];
        this.admins.push(this.ingelogdeAdmin);
      }
      this.collection = {count: this.admins.length, data: this.admins};
    });
  }

  ngOnInit(): void {

  }

  newAdmin() {
    this.admin.adminID = 0;
    this.admin.firstName = null;
    this.admin.lastName = null;
    this.admin.email = null;
    this.admin.password = null;
    this.admin.token = null;
    this.passwordRepeat = null;
    this.passwordRepeat = null;
    this.openPopup();
  }

  edit(adminID: number) {
    this.adminService.getAdmin(adminID).subscribe(r => {
      this.passwordRepeat = null;
      this.admin = r;
      console.log(r);
      this.openPopup();
    });
  }

  delete(adminID: number) {
    this.adminService.getAdmin(adminID).subscribe(r => {
      const answer = confirm('Bent u zeker dat u ' + r.firstName + ' ' + r.lastName + ' wilt verwijderen?');
      if (answer === true) {
        this.adminService.delete(adminID).subscribe(re => {
          this.loadAdmins();
        });
      }
    });
  }

  closePopup() {
    this.invalideForm = false;
    this.tonen = false;
  }

  openPopup() {
    this.invalideForm = false;
    this.tonen = true;
  }

  onSubmit() {
    console.log(this.ingelogdeAdmin.adminID);
    if (!this.admin.email.includes('@')) {
      this.emaiError = 'Geen geldige emial!';
      this.valideEmail = false;
      return;
    }
    this.valideEmail = true;
    console.log(this.admin.password, this.passwordRepeat);

    // PASSWORD CHECKS DOEN
    if (this.passwordRepeat !== this.admin.password) {
      this.passwordError = 'Wachtwoorden komen niet overeen';
      this.validePassword = false;
      return;
    }
    if (this.admin.password.length < 8
      || this.admin.password.length > 15) {
      this.passwordError = 'Wachtwoord moet tussen 8 en 15 tekens bevatten';
      this.validePassword = false;
      return;
    }
    if (this.admin.password.toUpperCase() === this.admin.password
      || this.admin.password.toLowerCase() === this.admin.password) {
      this.passwordError = 'Wachtwoord moet minstens een character van a-z en A-Z bevatten';
      this.validePassword = false;
      return;
    }

    if (!this.admin.password.match(this.decimal)) {
      this.passwordError = 'Wachtwoord moet minstens een speciaal karakter en een nummer bevatten';
      this.validePassword = false;
      return;
    }

    this.validePassword = true;

    if (
      this.admin.firstName === ''
      || this.admin.lastName === ''
      || this.admin.password === ''
      || this.admin.password === null
      || this.admin.lastName === null
      || this.admin.firstName === null
    ) {
      this.invalideForm = true;
      return;
    }
    this.invalideForm = false;

    if (this.admin.adminID === 0) {
      this.adminService.addAdmin(this.admin).subscribe(result => {
          this.admin.adminID = result.adminID;
          alert('succesvol Toegevoegd');
          this.loadAdmins();
        },
        error => {
          alert(error.toString());
        });
    } else {
      this.adminService.updateAdmin(this.admin).subscribe(r => {
        this.loadAdmins();
      });
    }

    this.closePopup();
  }


}
