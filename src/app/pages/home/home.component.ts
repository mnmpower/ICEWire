import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  weaklyChalange: string;

  constructor() {
  }

  ngOnInit(): void {
    this.weaklyChalange = 'Maak een driegangenmenu voor iemand van jouw famillie. Maak een leuke ' +
      'sfeerfoto tijdens elke menugang van het eten en stuur deze door. Wij maken van alle inzendingen een leuk ' +
      'filmpje zodat je ook kan zien wat andere mensen gedaan hebben.';
  }

}
