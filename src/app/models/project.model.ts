import {Person} from './person.model';
import {Category} from './category.model';
import {Duration} from './duration.model';
import {AgeCategory} from './age-category.model';

export class Project {

  public projectID: number;
  public description: string;
  public link: string;
  public img: string;
  public title: string;
  public datum: string;
  public personID: number;
  public categoryID: number;
  public ageCategoryID: number;
  public durationID: number;
  public show: boolean;

  public person: Person;
  public category: Category;
  public ageCategory: AgeCategory;
  public duration: Duration;

  constructor() {
  }
}
