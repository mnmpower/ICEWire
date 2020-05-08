import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../../models/person.model';
import {Status} from '../../models/status.model';
import {Category} from '../../models/category.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card-initiatif',
  styleUrls: ['./card-initiatif.component.scss'],
  template: `
    <div class="card">
      <!--      <img src="{{img}}" class="card-img-top" alt="...">-->
      <div class="card-body">
        <h5 class="card-title">{{title}} -<br> {{personName}}</h5>
        <div class="card-subtitle mb-1 text-right">{{location}}</div>
        <p class="card-text">{{about}}</p>
        <p class="card-text">{{taskDescription}}</p>
        <p class="card-text"></p>
        <button  type="button" class="btn btn-danger mt-3 bottom-left" (click)="naarDetail(initiatifID)">
          <i class="fas fa-search"></i> Bekijken</button>
      </div>
      <div class="card-footer">
        <small class="text-muted float-right">{{statusName}}</small>
        <small class="text-muted float-left">Startdatum {{startDate}}</small>
      </div>
    </div>
  `
})
export class CardInitiatifComponent implements OnInit {

  @Input() title: string;
  @Input() startDate: string;
  @Input() about: string;
  @Input() taskDescription: string;
  @Input() location: string;
  @Input() statusName: string;
  @Input() personName: string;
  @Input() categoryName: string;
  @Input() initiatifID: number;

  constructor(
    private _router: Router
  ) {
  }

  ngOnInit(): void {
  }

  naarDetail(initiatifID: number) {
    this._router.navigate(['TM/initiatif/' + initiatifID]);
  }
}
