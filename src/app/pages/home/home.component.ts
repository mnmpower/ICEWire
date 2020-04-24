import {Component, OnInit} from '@angular/core';
import {ChalangeService} from '../../services/chalange.service';
import {Chalange} from '../../models/chalange.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  weaklyChalange: Chalange = new Chalange();

  constructor(
    private chalangeService: ChalangeService,
  ) {
    this.chalangeService.getActiveChalange().subscribe(
      result => {
        this.weaklyChalange = result;
      },
      error => {
        this.weaklyChalange.text = 'Er is geen chalange beschikbaar momenteel';
      });
  }

  ngOnInit(): void {
  }

}
