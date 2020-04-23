import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {pre} from '../../services/project.service';
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
  config: any;
  collection = {count: 0, data: []};

  imageError = '';
  isImageSaved = false;
  valideImage = true;

  tonen = false;
  invalideForm = false;

  projects: Project[] = [];
  categories: Category[] = [];
  persons: Person[] = [];
  project: Project = new Project();

  constructor(
    private projectService: pre,
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

    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.collection.count
    };
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  loadProjects() {
    this.projectService.getProjects().subscribe(r => {
      this.projects = r;
      this.collection = {count: this.projects.length, data: this.projects};
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
      const answer = confirm('Bent u zeker dat u ' + r.title + ' wilt verwijderen?');
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
    if (!this.valideImage) {
      return;
    }
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

  fileChangeEvent(fileInput: any) {
    this.imageError = null;
    if (fileInput.target.files && fileInput.target.files[0]) {
      // Size Filter Bytes
      // const max_size = 20971520;
      const max_size = 409600;
      const allowed_types = ['image/png', 'image/jpeg', 'image/jpg'];
      const max_height = 360 *2;
      const max_width = 640 *2;

      console.log('size:', fileInput.target.files[0].size);
      console.log('MAX-size:', max_size);

      if (fileInput.target.files[0].size > max_size) {
        this.imageError =
          'Maximum size allowed is ' + max_size / 1024 + 'Kb';
        this.isImageSaved = false;
        return;
      }

      if (!allowed_types.includes(fileInput.target.files[0].type)) {
        this.imageError = 'Only Images are allowed ( JPG | PNG )';
        this.isImageSaved = false;
        return;
      }
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          const img_height = rs.currentTarget['height'];
          const img_width = rs.currentTarget['width'];

          if (img_height > max_height || img_width > max_width) {
            this.imageError =
              'Maximum dimentions allowed ' +
              max_height +
              '*' +
              max_width +
              'px';

            this.isImageSaved = false;
            return false;
          } else {
            this.project.img = e.target.result;
            this.isImageSaved = true;
          }
        };
      };

      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }
}
