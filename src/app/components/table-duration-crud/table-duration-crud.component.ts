import {Component, OnInit} from '@angular/core';
import {AdminService} from '../../services/admin.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Duration} from '../../models/duration.model';
import {DurationService} from '../../services/duration.service';

@Component({
  selector: 'app-table-duration-crud',
  templateUrl: './table-duration-crud.component.html',
  styleUrls: ['./table-duration-crud.component.scss']
})
export class TableDurationCrudComponent implements OnInit {

  config: any;
  collection = {count: 0, data: []};

  tonen = false;
  invalideForm = false;

  durations: Duration[] = [];
  duration: Duration = new Duration();

  constructor(
    private adminService: AdminService,
    private durationService: DurationService,
    private activatedroute: ActivatedRoute,
    private router: Router,
  ) {
    this.adminService.getIdOfCurrentAdmin().subscribe(r => {
      if (r !== parseInt(this.activatedroute.snapshot.paramMap.get('id'))) {
        this.router.navigate(['/forbidden']);
      }
    });
    this.loadDurations();

    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.collection.count
    };
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  loadDurations() {
    this.durationService.getDurations().subscribe(r => {
      this.durations = r;
      this.collection = {count: this.durations.length, data: this.durations};
    });

  }

  ngOnInit(): void {

  }

  newDuration() {
    this.duration.durationID = 0;
    this.duration.name = null;
    this.openPopup();
  }

  edit(durationID: number) {
    console.log(durationID);
    this.durationService.getDuration(durationID).subscribe(r => {
      this.duration = r;
      this.openPopup();
    });
  }

  delete(durationID: number) {
    this.durationService.getDuration(durationID).subscribe(r => {
      const answer = confirm('Bent u zeker dat u "' + r.name + '" wilt verwijderen?');
      if (answer === true) {
        this.durationService.delete(durationID).subscribe(re => {
          this.loadDurations();
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
      this.duration.name === ''
      || this.duration.name === null
    ) {
      this.invalideForm = true;
      return;
    }
    this.invalideForm = false;

    if (this.duration.durationID === 0) {
      this.durationService.addDuration(this.duration).subscribe(r => {
        this.duration.durationID = r.durationID;
        this.loadDurations();
      });
    } else {
      this.durationService.updateDuration(this.duration).subscribe(r => {
        this.loadDurations();
      });
    }

    this.closePopup();
  }

}
