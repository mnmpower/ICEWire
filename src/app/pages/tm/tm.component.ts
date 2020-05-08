import {Component, OnInit} from '@angular/core';
import {InitiatifService} from '../../services/initiatif.service';
import {Initiatif} from '../../models/initiatif.model';

@Component({
  selector: 'app-tm',
  templateUrl: './tm.component.html',
  styleUrls: ['./tm.component.scss']
})
export class TMComponent implements OnInit {

  initiatives: Initiatif[] = [];

  constructor(
    private initiaticeService: InitiatifService,
  ) {
    this.initiaticeService.getInitiatifsWhereShowIsTrue().subscribe(r => {
      this.initiatives = r.reverse();
    });
  }

  ngOnInit(): void {
  }

}
