import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-diy',
  templateUrl: './diy.component.html',
  styleUrls: ['./diy.component.scss']
})
export class DIYComponent implements OnInit {
  projecten: any;

  constructor() {
    this.projecten = [
      {
        description: 'Het eerste filmpje in de reeks "Origami". We laten hier zien hoe je een konijn kan maken met behulp van enkel een vierkant blaadje papier.',
        link: 'https://youtu.be/1eojwlsq5o0',
        img: './assets/img/origami-konijn.png',
        title: 'Origami - konijn'
      }
    ];
  }

  ngOnInit(): void {
  }

}
