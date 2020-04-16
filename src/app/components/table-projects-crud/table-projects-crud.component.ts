import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProjectService} from '../../services/project.service';
import {Project} from '../../models/project.model';
import {AdminService} from '../../services/admin.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-table-projects-crud',
  templateUrl: './table-projects-crud.component.html',
  styleUrls: ['./table-projects-crud.component.scss']
})
export class TableProjectsCrudComponent implements OnInit {

  tonen = false;
  invalideForm = false;

  projects: Project[] = [];
  project: Project = new Project();

  constructor(
    private projectService: ProjectService,
    private adminService: AdminService,
    private activatedroute: ActivatedRoute,
    private router: Router,
  ) {
    this.adminService.getIdOfCurrentAdmin().subscribe(r => {
      if (r !== parseInt(this.activatedroute.snapshot.paramMap.get('id'))) {
        this.router.navigate(['/forbidden']);
      }
    });
    this.loadProjects();
  }

  loadProjects() {
    this.projectService.getProjects().subscribe(r => {
      this.projects = r;
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
    this.project.personID = null;
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
      let antwoord = confirm('Bent u zeker dat u ' + r.title + 'wilt verwijderen?');
      if (antwoord === true) {
        this.projectService.delete(projectID).subscribe(re => {
          this.loadProjects();
        });
      }
    });
  }

  closePopup() {
    this.tonen = false;
  }

  openPopup() {
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
    ) {
      this.invalideForm = true;
      return;
    }
    this.invalideForm = false;

    if (this.project.projectID === 0) {
      console.log('POST:', this.project);
      this.projectService.addProject(this.project).subscribe(r => {
        this.project.projectID = r.projectID;
        console.log('type: ', this.project);
        this.loadProjects();
      });
    } else {
      this.projectService.updateProject(this.project).subscribe(r => {
        console.log('succes');
        this.loadProjects();
      });
    }

    this.closePopup();
  }
}
