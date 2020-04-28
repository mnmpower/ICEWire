import {Component, OnInit} from '@angular/core';
import {Project} from '../../models/project.model';
import {ProjectService} from '../../services/project.service';
import {Category} from '../../models/category.model';
import {CategoryService} from '../../services/category.service';
import {PersonService} from '../../services/person.service';
import {Person} from '../../models/person.model';
import {ZoekProject} from '../../models/zoek-project.model';
import {AgeCategoryService} from '../../services/age-category.service';
import {DurationService} from '../../services/duration.service';
import {Duration} from '../../models/duration.model';
import {AgeCategory} from '../../models/age-category.model';



@Component({
  selector: 'app-diy',
  templateUrl: './diy.component.html',
  styleUrls: ['./diy.component.scss']
})
export class DIYComponent implements OnInit {
  search = false;

  categories: Category[] = [];
  persons: Person[] = [];
  projecten: Project[] = [];
  durations: Duration[] = [];
  ageCategories: AgeCategory[] = [];
  zoekobject: ZoekProject = new ZoekProject();

  constructor(
    private projectService: ProjectService,
    private personService: PersonService,
    private ageCategoryService: AgeCategoryService,
    private durationService: DurationService,
    private categoryService: CategoryService
  ) {
    this.projectService.getProjectsWhereShowIsTrue().subscribe(r => {
      this.projecten = r.reverse();
    });
    this.loadCategories();
    this.loadPersons();
    this.loadDurations();
    this.loadAceGategories();
  }

  ngOnInit(): void {
    this.zoekobject.categoryID = 0;
    this.zoekobject.personID = 0;
    this.zoekobject.ageCategoryID = 0;
    this.zoekobject.durationID = 0;
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe(r => {
      this.categories = r;
    });
  }

  loadPersons() {
    this.personService.getPersonsWhereDiy().subscribe(r => {
      this.persons = r;
    });
  }

  private loadAceGategories() {
    this.ageCategoryService.getAgeCategories().subscribe(r => {
      this.ageCategories = r;
    });
  }

  private loadDurations() {
    this.durationService.getDurations().subscribe(r => {
      this.durations = r;
    });
  }

  zoek(){
    console.log(this.zoekobject);
    this.projectService.zoek(this.zoekobject).subscribe(r => {
      this.projecten = r;
      console.log(r);
    });
  }

}
