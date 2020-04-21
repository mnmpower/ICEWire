import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  weaklyChallange: string;

  constructor() {
  }

  ngOnInit(): void {
    this.weaklyChallange = 'Maak een drie gangen menu voor iemand van jou famillie. Maak een leuke ' +
      'sfeerfoto tijdens elke menugang van het eten en stuur deze door. Wij maken van alle inzendingen een leuk' +
      'filmpje zodat je ook kan zien wat andere mensen gedaan hebben.';
  }

}
