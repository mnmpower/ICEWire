import {Project} from './project.model';
import {Initiatif} from './initiatif.model';

export class Person {

  public personID: number;
  public firstName: string;
  public lastName: string;
  public email: string;
  public phoneNumber: string;

  public projects: Project[];
  public initiatives: Initiatif[];

  constructor() {
  }
}
