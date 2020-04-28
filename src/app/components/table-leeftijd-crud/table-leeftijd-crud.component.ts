import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../services/admin.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AgeCategory} from '../../models/age-category.model';
import {AgeCategoryService} from '../../services/age-category.service';

@Component({
  selector: 'app-table-leeftijd-crud',
  templateUrl: './table-leeftijd-crud.component.html',
  styleUrls: ['./table-leeftijd-crud.component.scss']
})
export class TableLeeftijdCrudComponent implements OnInit {

  config: any;
  collection = {count: 0, data: []};

  tonen = false;
  invalideForm = false;

  ageCategories: AgeCategory[] = [];
  ageCategory: AgeCategory = new AgeCategory();

  constructor(
    private adminService: AdminService,
    private ageCategeryService: AgeCategoryService,
    private activatedroute: ActivatedRoute,
    private router: Router,
  ) {
    this.adminService.getIdOfCurrentAdmin().subscribe(r => {
      if (r !== parseInt(this.activatedroute.snapshot.paramMap.get('id'))) {
        this.router.navigate(['/forbidden']);
      }
    });
    this.loadAgeCategories();

    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.collection.count
    };
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  loadAgeCategories() {
    this.ageCategeryService.getAgeCategories().subscribe(r => {
      this.ageCategories = r;
      this.collection = {count: this.ageCategories.length, data: this.ageCategories};
    });

  }

  ngOnInit(): void {

  }

  newAgeCategory() {
    this.ageCategory.ageCategoryID = 0;
    this.ageCategory.name = null;
    this.openPopup();
  }

  edit(ageCategoryID: number) {
    console.log(ageCategoryID);
    this.ageCategeryService.getAgeCategory(ageCategoryID).subscribe(r => {
      this.ageCategory = r;
      this.openPopup();
    });
  }

  delete(ageCategoryID: number) {
    this.ageCategeryService.getAgeCategory(ageCategoryID).subscribe(r => {
      const answer = confirm('Bent u zeker dat u "' + r.name + '" wilt verwijderen?');
      if (answer === true) {
        this.ageCategeryService.delete(ageCategoryID).subscribe(re => {
          this.loadAgeCategories();
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
      this.ageCategory.name === ''
      || this.ageCategory.name === null
    ) {
      this.invalideForm = true;
      return;
    }
    this.invalideForm = false;

    if (this.ageCategory.ageCategoryID === 0) {
      this.ageCategeryService.addAgeCategory(this.ageCategory).subscribe(r => {
        this.ageCategory.ageCategoryID = r.ageCategoryID;
        this.loadAgeCategories();
      });
    } else {
      this.ageCategeryService.updateAgeCategory(this.ageCategory).subscribe(r => {
        this.loadAgeCategories();
      });
    }

    this.closePopup();
  }
}
