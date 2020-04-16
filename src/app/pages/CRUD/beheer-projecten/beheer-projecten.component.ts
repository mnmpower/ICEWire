import {Component} from '@angular/core';
import {Project} from '../../../models/project.model';
import {ProjectService} from '../../../services/project.service';


@Component({
  selector: 'app-beheer-projecten',
  templateUrl: './beheer-projecten.component.html',
  styleUrls: ['./beheer-projecten.component.scss']
})
export class BeheerProjectenComponent {

  constructor(
    private projectService: ProjectService
  ) {
  }

}
