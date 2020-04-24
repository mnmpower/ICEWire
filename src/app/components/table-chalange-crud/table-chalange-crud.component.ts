import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../services/admin.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ChalangeService} from '../../services/chalange.service';
import {Chalange} from '../../models/chalange.model';

@Component({
  selector: 'app-table-chalange-crud',
  templateUrl: './table-chalange-crud.component.html',
  styleUrls: ['./table-chalange-crud.component.scss']
})
export class TableChalangeCrudComponent implements OnInit {

  config: any;
  collection = {count: 0, data: []};

  tonen = false;
  invalideForm = false;

  chalanges: Chalange[] = [];
  chalange: Chalange = new Chalange();

  constructor(
    private adminService: AdminService,
    private chalangeService: ChalangeService,
    private activatedroute: ActivatedRoute,
    private router: Router,
  ) {
    this.adminService.getIdOfCurrentAdmin().subscribe(r => {
      if (r !== parseInt(this.activatedroute.snapshot.paramMap.get('id'))) {
        this.router.navigate(['/forbidden']);
      }
    });
    this.loadChalanges();

    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.collection.count
    };
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  loadChalanges() {
    this.chalangeService.getChalanges().subscribe(r => {
      this.chalanges = r;
      this.collection = {count: this.chalanges.length, data: this.chalanges};
    });
  }

  ngOnInit(): void {

  }

  newChalange() {
    this.chalange.chalangeID = 0;
    this.chalange.text = null;
    this.chalange.active = false;
    this.openPopup();
  }

  edit(chalangeID: number) {
    this.chalangeService.getChalange(chalangeID).subscribe(r => {
      this.chalange = r;
      this.openPopup();
    });
  }

  delete(chalangeID: number) {
    this.chalangeService.getChalange(chalangeID).subscribe(r => {
      const answer = confirm('Bent u zeker dat u "' + r.text + '" wilt verwijderen?');
      if (answer === true) {
        this.chalangeService.delete(chalangeID).subscribe(re => {
          this.loadChalanges();
        });
      }
    });
  }

  closePopup() {
    this.invalideForm = false;
    this.tonen = false;
  }

  openPopup() {
    this.invalideForm = false;
    this.tonen = true;
  }

  onSubmit() {

    if (
      this.chalange.text === ''
      || this.chalange.text === null
    ) {
      this.invalideForm = true;
      return;
    }
    this.invalideForm = false;

    if (this.chalange.chalangeID === 0) {
      this.chalangeService.addChalange(this.chalange).subscribe(r => {
        this.chalange.chalangeID = r.chalangeID;
        this.loadChalanges();
      });
    } else {
      this.chalangeService.updateChalange(this.chalange).subscribe(r => {
        this.loadChalanges();
      });
    }

    this.closePopup();
  }

}
