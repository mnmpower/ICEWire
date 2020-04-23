import {Component, OnInit} from '@angular/core';
import {Project} from '../../models/project.model';
import {pre} from '../../services/project.service';

@Component({
  selector: 'app-diy',
  templateUrl: './diy.component.html',
  styleUrls: ['./diy.component.scss']
})
export class DIYComponent implements OnInit {
  projecten: Project[] = [];
  project: Project = new Project();

  constructor(
    private projectService: pre,
  ) {
    this.projectService.getProjectsWhereShowIsTrue().subscribe(r => {
      this.projecten = r;
    });
  }

  ngOnInit(): void {

  }

}
