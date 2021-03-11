import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../shared';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  message;

  constructor(
    private studentsService: StudentsService
  ) {}

  ngOnInit() {
    this.message = this.studentsService.getMessage();
  }
}
