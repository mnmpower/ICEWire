import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  // templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  template: `
    <div class="card">
      <img src="{{img}}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{title}}</h5>
        <div class="card-subtitle mb-1 text-right">{{time}}</div>
        <p class="card-text">{{description}}</p>
        <a href="{{link}}" target="_blank" type="button" class="btn btn-danger mt-3 bottom-left"><i class="fab fa-youtube"></i> Bekijk op
          Youtube</a>
      </div>
      <div class="card-footer">
        <small class="text-muted float-right">{{age}}</small>
        <small class="text-muted float-left">Posted on {{date}}</small>
      </div>
    </div>
  `
})
export class CardComponent implements OnInit {

  @Input() description: string;
  @Input() link: string;
  @Input() title: string;
  @Input() img: string;
  @Input() date: string;
  @Input() time: number;
  @Input() age: string;


  constructor() {
  }

  ngOnInit(): void {
  }

}
