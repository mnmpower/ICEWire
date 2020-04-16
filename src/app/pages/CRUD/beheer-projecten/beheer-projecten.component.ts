import {Component} from '@angular/core';
import {Project} from '../../../models/project.model';
import {ProjectService} from '../../../services/project.service';


@Component({
  selector: 'app-beheer-projecten',
  templateUrl: './beheer-projecten.component.html',
  styleUrls: ['./beheer-projecten.component.scss']
})
export class BeheerProjectenComponent {

  projects: Project[] = [];
  headers: string[] = [];
  keys: string[] = [];
  project: Project = new Project();

  constructor(
    private projectService: ProjectService
  ) {
    this.projectService.getProjects().subscribe(r => {
      this.projects = r;
      this.keys = Object.keys(this.project);
    });
  }

}
