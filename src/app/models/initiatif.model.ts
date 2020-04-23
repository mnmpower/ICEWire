import {Category} from './category.model';
import {Person} from './person.model';
import {Status} from './status.model';

export class Initiatif {

  public initiatifID: number;
  public title: string;
  public startDate: string;
  public about: string;
  public taskDescription: string;
  public confirmed: boolean;
  public location: string;
  public personID: number;
  public statusID: number;
  public categoryID: number;

  public person: Person;
  public status: Status;
  public category: Category;

  constructor() {
  }
}
