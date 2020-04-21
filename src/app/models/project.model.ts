import {Person} from './person.model';
import {Category} from './category.model';

export class Project {

  public projectID: number;
  public description: string;
  public link: string;
  public img: string;
  public title: string;
  public datum: string;
  public personID: number;
  public categoryID: number;
  public show: boolean;

  public person: Person;
  public category: Category;

  constructor() {
  }
}
