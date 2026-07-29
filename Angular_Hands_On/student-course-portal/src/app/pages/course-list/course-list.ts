import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {

  selectedCourseId: number | null = null;

  courses =[
  {
    id: 1,
    name: 'Angular',
    code: 'CS101',
    credits: 4,
    fee: 15000,
    startDate: new Date('2026-08-01'),
    available: true
  },
  {
    id: 2,
    name: 'Java',
    code: 'CS102',
    credits: 3,
    fee: 12000,
    startDate: new Date('2026-08-05'),
    available: false
  },
  {
    id: 3,
    name: 'Python',
    code: 'CS103',
    credits: 4,
    fee: 14000,
    startDate: new Date('2026-08-10'),
    available: true
  }
];

  onEnroll(courseId: number) {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }
}