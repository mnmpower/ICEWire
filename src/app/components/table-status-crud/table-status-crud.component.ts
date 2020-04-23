import {Component, OnInit} from '@angular/core';
import {AdminService} from '../../services/admin.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Status} from '../../models/status.model';
import {StatusService} from '../../services/status.service';

@Component({
  selector: 'app-table-status-crud',
  templateUrl: './table-status-crud.component.html',
  styleUrls: ['./table-status-crud.component.scss']
})
export class TableStatusCrudComponent implements OnInit {

  config: any;
  collection = {count: 0, data: []};

  tonen = false;
  invalideForm = false;

  statusen: Status[] = [];
  status: Status = new Status();

  constructor(
    private adminService: AdminService,
    private statusService: StatusService,
    private activatedroute: ActivatedRoute,
    private router: Router,
  ) {
    this.adminService.getIdOfCurrentAdmin().subscribe(r => {
      if (r !== parseInt(this.activatedroute.snapshot.paramMap.get('id'))) {
        this.router.navigate(['/forbidden']);
      }
    });
    this.loadStatuses();

    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.collection.count
    };
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  loadStatuses() {
    this.statusService.getStatusen().subscribe(r => {
      this.statusen = r;
      this.collection = {count: this.statusen.length, data: this.statusen};
    });
  }

  ngOnInit(): void {

  }

  newStatus() {
    this.status.statusID = 0;
    this.status.name = null;
    this.openPopup();
  }

  edit(statusID: number) {
    this.statusService.getStatus(statusID).subscribe(r => {
      this.status = r;
      this.openPopup();
    });
  }

  delete(statusID: number) {
    this.statusService.getStatus(statusID).subscribe(r => {
      const answer = confirm('Bent u zeker dat u "' + r.name + '" wilt verwijderen?');
      if (answer === true) {
        this.statusService.delete(statusID).subscribe(re => {
          this.loadStatuses();
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
      this.status.name === ''
      || this.status.name === null
    ) {
      this.invalideForm = true;
      return;
    }
    this.invalideForm = false;

    if (this.status.statusID === 0) {
      this.statusService.addStatus(this.status).subscribe(r => {
        this.status.statusID = r.statusID;
        this.loadStatuses();
      });
    } else {
      this.statusService.updateStatus(this.status).subscribe(r => {
        this.loadStatuses();
      });
    }

    this.closePopup();
  }

}
