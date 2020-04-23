import {Component, OnInit} from '@angular/core';
import {Category} from '../../models/category.model';
import {Person} from '../../models/person.model';
import {AdminService} from '../../services/admin.service';
import {CategoryService} from '../../services/category.service';
import {PersonService} from '../../services/person.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Initiatif} from '../../models/initiatif.model';
import {Status} from '../../models/status.model';
import {InitiatifService} from '../../services/initiatif.service';
import {StatusService} from '../../services/status.service';

@Component({
  selector: 'app-table-initiatif-crud',
  templateUrl: './table-initiatif-crud.component.html',
  styleUrls: ['./table-initiatif-crud.component.scss']
})
export class TableInitiatifCrudComponent implements OnInit {
  config: any;
  collection = {count: 0, data: []};

  imageError = '';
  isImageSaved = false;
  valideImage = true;

  tonen = false;
  invalideForm = false;

  initiatifs: Initiatif[] = [];
  categories: Category[] = [];
  persons: Person[] = [];
  statuses: Status[] = [];
  initiatif: Initiatif = new Initiatif();

  constructor(
    private initiatifService: InitiatifService,
    private adminService: AdminService,
    private personService: PersonService,
    private categoryService: CategoryService,
    private statusService: StatusService,
    private activatedroute: ActivatedRoute,
    private router: Router,
  ) {
    this.adminService.getIdOfCurrentAdmin().subscribe(r => {
      if (r !== parseInt(this.activatedroute.snapshot.paramMap.get('id'))) {
        this.router.navigate(['/forbidden']);
      }
    });
    this.loadInitiatifs();
    this.loadCategories();
    this.loadPersons();
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

  loadInitiatifs() {
    this.initiatifService.getInitiatifs().subscribe(r => {
      this.initiatifs = r;
      this.collection = {count: this.initiatifs.length, data: this.initiatifs};
      console.log(this.initiatifs);
    });
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe(r => {
      this.categories = r;
    });
  }

  loadPersons() {
    this.personService.getPersons().subscribe(r => {
      this.persons = r;
    });
  }

  loadStatuses() {
    this.statusService.getStatusen().subscribe(r => {
      this.statuses = r;
    });
  }

  ngOnInit(): void {

  }

  newInitiatif() {
    this.initiatif.initiatifID = 0;
    this.initiatif.title = null;
    this.initiatif.startDate = null;
    this.initiatif.about = null;
    this.initiatif.taskDescription = null;
    this.initiatif.confirmed = true;
    this.initiatif.location = null;
    this.initiatif.personID = 0;
    this.initiatif.categoryID = 0;
    this.initiatif.statusID = 0;
    this.initiatif.person = null;
    this.initiatif.category = null;
    this.initiatif.status = null;
    this.openPopup();
  }

  edit(initiatifID: number) {
    this.initiatifService.getInitiatif(initiatifID).subscribe(r => {
      console.log(r.startDate + 'r');
      this.initiatif = r;
      this.openPopup();
    });
  }

  delete(InitiatifID: number) {
    this.initiatifService.getInitiatif(InitiatifID).subscribe(r => {
      const answer = confirm('Bent u zeker dat u "' + r.title + '" wilt verwijderen?');
      if (answer === true) {
        this.initiatifService.delete(InitiatifID).subscribe(re => {
          this.loadInitiatifs();
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
    console.log(this.initiatif);
    if (!this.valideImage) {
      return;
    }
    if (this.initiatif.title === ''
      || this.initiatif.startDate === ''
      || this.initiatif.about === ''
      || this.initiatif.taskDescription === ''
      || this.initiatif.location === ''
      || this.initiatif.personID == 0
      || this.initiatif.categoryID == 0
      || this.initiatif.statusID == 0
      || this.initiatif.title === null
      || this.initiatif.startDate === null
      || this.initiatif.about === null
      || this.initiatif.taskDescription === null
      || this.initiatif.location === null
    ) {
      this.invalideForm = true;
      return;
    }
    this.invalideForm = false;

    if (this.initiatif.initiatifID === 0) {
      this.initiatifService.addInitiatif(this.initiatif).subscribe(r => {
        this.initiatif.initiatifID = r.initiatifID;
        this.loadInitiatifs();
      });
    } else {
      this.initiatifService.updateInitiatif(this.initiatif).subscribe(r => {
        this.loadInitiatifs();
      });
    }

    this.closePopup();
  }

  // fileChangeEvent(fileInput: any) {
  //   this.imageError = null;
  //   if (fileInput.target.files && fileInput.target.files[0]) {
  //     // Size Filter Bytes
  //     // const max_size = 20971520;
  //     const max_size = 409600;
  //     const allowed_types = ['image/png', 'image/jpeg', 'image/jpg'];
  //     const max_height = 360 *2;
  //     const max_width = 640 *2;
  //
  //     console.log('size:', fileInput.target.files[0].size);
  //     console.log('MAX-size:', max_size);
  //
  //     if (fileInput.target.files[0].size > max_size) {
  //       this.imageError =
  //         'Maximum size allowed is ' + max_size / 1024 + 'Kb';
  //       this.isImageSaved = false;
  //       return;
  //     }
  //
  //     if (!allowed_types.includes(fileInput.target.files[0].type)) {
  //       this.imageError = 'Only Images are allowed ( JPG | PNG )';
  //       this.isImageSaved = false;
  //       return;
  //     }
  //     const reader = new FileReader();
  //     reader.onload = (e: any) => {
  //       const image = new Image();
  //       image.src = e.target.result;
  //       image.onload = rs => {
  //         const img_height = rs.currentTarget['height'];
  //         const img_width = rs.currentTarget['width'];
  //
  //         if (img_height > max_height || img_width > max_width) {
  //           this.imageError =
  //             'Maximum dimentions allowed ' +
  //             max_height +
  //             '*' +
  //             max_width +
  //             'px';
  //
  //           this.isImageSaved = false;
  //           return false;
  //         } else {
  //           this.initiatif.img = e.target.result;
  //           this.isImageSaved = true;
  //         }
  //       };
  //     };
  //
  //     reader.readAsDataURL(fileInput.target.files[0]);
  //   }
  // }

}
