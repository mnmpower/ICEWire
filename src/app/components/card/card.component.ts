import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  // templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  template: `
    <div class="card m-3">
      <img src="{{img}}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{title}}</h5>
        <p class="card-text">{{description}}</p>
        <a href="{{link}}" target="_blank" type="button" class="btn btn-danger mt-2"><i class="fab fa-youtube"></i> Bekijk op
          Youtube</a>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  `
})
export class CardComponent implements OnInit {

  @Input() description: string;
  @Input() link: string;
  @Input() title: string;
  @Input() img: string;


  constructor() {
  }

  ngOnInit(): void {
  }

}
