import {Project} from './project.model';
import {Initiatif} from './initiatif.model';

export class Category {

  public categoryID: number;
  public name: string;

  public initiatifs: Initiatif[];
  public projects: Project[];

  constructor() {
  }
}
