import {Component, OnInit} from '@angular/core';
import {InitiatifService} from '../../../services/initiatif.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Initiatif} from '../../../models/initiatif.model';
import {Person} from '../../../models/person.model';
import {PersonService} from '../../../services/person.service';

@Component({
  selector: 'app-intiatif-details',
  templateUrl: './intiatif-details.component.html',
  styleUrls: ['./intiatif-details.component.scss']
})
export class IntiatifDetailsComponent implements OnInit {

  initiatifID: number;
  initiatif: Initiatif;
  person: Person;


  constructor(
    private initiatifService: InitiatifService,
    private activatedroute: ActivatedRoute,
    private personService: PersonService
  ) {
    this.initiatifID = parseInt(this.activatedroute.snapshot.paramMap.get('id'));
    this.initiatifService.getInitiatifForUsers(this.initiatifID).subscribe(r => {
      this.initiatif = r;
      this.personService.getPersonForUsers(r.personID).subscribe( re => {
        this.person = re;
      });
    });
  }

  ngOnInit(): void {
  };

}
