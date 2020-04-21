import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProjectService} from '../../services/project.service';
import {Project} from '../../models/project.model';
import {AdminService} from '../../services/admin.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from '../../models/category.model';
import {Person} from '../../models/person.model';
import {CategoryService} from '../../services/category.service';
import {PersonService} from '../../services/person.service';

@Component({
  selector: 'app-table-projects-crud',
  templateUrl: './table-projects-crud.component.html',
  styleUrls: ['./table-projects-crud.component.scss']
})
export class TableProjectsCrudComponent implements OnInit {

  tonen = false;
  invalideForm = false;

  projects: Project[] = [];
  categories: Category[] = [];
  persons: Person[] = [];
  project: Project = new Project();

  constructor(
    private projectService: ProjectService,
    private adminService: AdminService,
    private categoryService: CategoryService,
    private personService: PersonService,
    private activatedroute: ActivatedRoute,
    private router: Router,
  ) {
    this.adminService.getIdOfCurrentAdmin().subscribe(r => {
      if (r !== parseInt(this.activatedroute.snapshot.paramMap.get('id'))) {
        this.router.navigate(['/forbidden']);
      }
    });
    this.loadProjects();
    this.loadCategories();
    this.loadPersons();
  }

  loadProjects() {
    this.projectService.getProjects().subscribe(r => {
      this.projects = r;
    });
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe(r => {
      this.categories = r;
    });
  }

  loadPersons() {
    this.personService.getPersons().subscribe(r => {
      this.persons = r;
    });
  }

  ngOnInit(): void {

  }

  newProject() {
    this.project.projectID = 0;
    this.project.title = null;
    this.project.datum = null;
    this.project.description = null;
    this.project.img = null;
    this.project.link = null;
    this.project.personID = 0;
    this.project.categoryID = 0;
    this.project.show = true;
    this.project.person = null;
    this.project.category = null;
    this.openPopup();
  }

  edit(projectID: number) {
    this.projectService.getProject(projectID).subscribe(r => {
      this.project = r;
      this.openPopup();
    });
  }

  delete(projectID: number) {
    this.projectService.getProject(projectID).subscribe(r => {
      const answer = confirm('Bent u zeker dat u ' + r.title + 'wilt verwijderen?');
      if (answer === true) {
        this.projectService.delete(projectID).subscribe(re => {
          this.loadProjects();
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
    if (this.project.title === ''
      || this.project.datum === ''
      || this.project.img === ''
      || this.project.link === ''
      || this.project.description === ''
      || this.project.title === null
      || this.project.datum === null
      || this.project.img === null
      || this.project.link === null
      || this.project.description === null
      || this.project.personID == 0
      || this.project.categoryID == 0
    ) {
      this.invalideForm = true;
      return;
    }
    this.invalideForm = false;

    if (this.project.projectID === 0) {
      this.projectService.addProject(this.project).subscribe(r => {
        this.project.projectID = r.projectID;
        this.loadProjects();
      });
    } else {
      this.projectService.updateProject(this.project).subscribe(r => {
        this.loadProjects();
      });
    }

    this.closePopup();
  }
}
