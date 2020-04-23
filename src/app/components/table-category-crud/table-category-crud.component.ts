import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../services/admin.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from '../../models/category.model';
import {CategoryService} from '../../services/category.service';

@Component({
  selector: 'app-table-category-crud',
  templateUrl: './table-category-crud.component.html',
  styleUrls: ['./table-category-crud.component.scss']
})
export class TableCategoryCrudComponent implements OnInit {

  config: any;
  collection = {count: 0, data: []};

  tonen = false;
  invalideForm = false;

  categories: Category[] = [];
  category: Category = new Category();

  constructor(
    private adminService: AdminService,
    private categoryService: CategoryService,
    private activatedroute: ActivatedRoute,
    private router: Router,
  ) {
    this.adminService.getIdOfCurrentAdmin().subscribe(r => {
      if (r !== parseInt(this.activatedroute.snapshot.paramMap.get('id'))) {
        this.router.navigate(['/forbidden']);
      }
    });
    this.loadCategories();

    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.collection.count
    };
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe(r => {
      this.categories = r;
      this.collection = {count: this.categories.length, data: this.categories};
    });
  }

  ngOnInit(): void {

  }

  newCategory() {
    this.category.categoryID = 0;
    this.category.name = null;
    this.openPopup();
  }

  edit(categoryID: number) {
    this.categoryService.getCategory(categoryID).subscribe(r => {
      this.category = r;
      this.openPopup();
    });
  }

  delete(categoryID: number) {
    this.categoryService.getCategory(categoryID).subscribe(r => {
      const answer = confirm('Bent u zeker dat u "' + r.name + '" wilt verwijderen?');
      if (answer === true) {
        this.categoryService.delete(categoryID).subscribe(re => {
          this.loadCategories();
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
      this.category.name === ''
      || this.category.name === null
    ) {
      this.invalideForm = true;
      return;
    }
    this.invalideForm = false;

    if (this.category.categoryID === 0) {
      this.categoryService.addCategory(this.category).subscribe(r => {
        this.category.categoryID = r.categoryID;
        this.loadCategories();
      });
    } else {
      this.categoryService.updateCategory(this.category).subscribe(r => {
        this.loadCategories();
      });
    }

    this.closePopup();
  }

}
