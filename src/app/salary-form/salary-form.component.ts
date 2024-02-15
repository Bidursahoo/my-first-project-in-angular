import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-salary-form',
  standalone: true,
  imports: [NgFor],
  templateUrl: './salary-form.component.html',
  styleUrl: './salary-form.component.scss'
})
export class SalaryFormComponent {
  departmentList: {
    departmentId: number,
    departmentName: string
  }[] = [
    {departmentId: 101, departmentName: "IT"},
    {departmentId: 202, departmentName: "Sales"}
  ];
  yearList: {
    year:
  }[] = [
    {departmentId: 101, departmentName: "IT"},
    {departmentId: 202, departmentName: "Sales"}
  ];
}
