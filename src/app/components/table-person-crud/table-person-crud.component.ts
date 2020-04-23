import {Component, OnInit} from '@angular/core';
import {Project} from '../../models/project.model';
import {Category} from '../../models/category.model';
import {Person} from '../../models/person.model';
import {pre} from '../../services/project.service';
import {AdminService} from '../../services/admin.service';
import {CategoryService} from '../../services/category.service';
import {PersonService} from '../../services/person.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-table-person-crud',
  templateUrl: './table-person-crud.component.html',
  styleUrls: ['./table-person-crud.component.scss']
})
export class TablePersonCrudComponent implements OnInit {
  config: any;
  collection = {count: 0, data: []};

  emailError = 'Geen geldig email address!';
  valideEmail = true;

  tonen = false;
  invalideForm = false;

  persons: Person[] = [];
  person: Person = new Person();

  constructor(
    private adminService: AdminService,
    private personService: PersonService,
    private activatedroute: ActivatedRoute,
    private router: Router,
  ) {
    this.adminService.getIdOfCurrentAdmin().subscribe(r => {
      if (r !== parseInt(this.activatedroute.snapshot.paramMap.get('id'))) {
        this.router.navigate(['/forbidden']);
      }
    });
    this.loadPersons();

    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.collection.count
    };
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  loadPersons() {
    this.personService.getPersons().subscribe(r => {
      this.persons = r;
      this.collection = {count: this.persons.length, data: this.persons};
    });
  }

  ngOnInit(): void {

  }

  newProject() {
    this.person.personID = 0;
    this.person.firstName = null;
    this.person.lastName = null;
    this.person.email = null;
    this.person.phoneNumber = null;
    this.openPopup();
  }

  edit(personID: number) {
    this.personService.getPerson(personID).subscribe(r => {
      this.person = r;
      this.openPopup();
    });
  }

  delete(personID: number) {
    this.personService.getPerson(personID).subscribe(r => {
      const answer = confirm('Bent u zeker dat u ' + r.firstName + ' ' + r.lastName + ' wilt verwijderen?');
      if (answer === true) {
        this.personService.delete(personID).subscribe(re => {
          this.loadPersons();
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
    if (!this.person.email.includes('@')) {
      this.valideEmail = false;
      return;
    }
    this.valideEmail = true;

    if (
      this.person.phoneNumber === ''
      || this.person.email === ''

      || this.person.lastName === ''
      || this.person.firstName === ''
      || this.person.phoneNumber === null
      || this.person.email === null
      || this.person.lastName === null
      || this.person.firstName === null
    ) {
      this.invalideForm = true;
      return;
    }
    this.invalideForm = false;

    if (this.person.personID === 0) {
      this.personService.addPerson(this.person).subscribe(r => {
        this.person.personID = r.personID;
        this.loadPersons();
      });
    } else {
      this.personService.updatePerson(this.person).subscribe(r => {
        this.loadPersons();
      });
    }

    this.closePopup();
  }

}
