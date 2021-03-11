import { Injectable } from '@angular/core';

@Injectable()
export class StudentsService {

  constructor() { }
  getMessage() {
    return 'Student works form student service';
  }
}
