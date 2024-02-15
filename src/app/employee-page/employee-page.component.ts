import { Component } from '@angular/core';
import { EmployeeFormComponent } from '../employee-form/emp-form.component';
import { EmployeeTableComponent } from '../employee-table/employee-table.component';

@Component({
  selector: 'app-employee-page',
  standalone: true,
  imports: [EmployeeFormComponent , EmployeeTableComponent],
  templateUrl: './employee-page.component.html',
  styleUrl: './employee-page.component.scss'
})
export class EmployeePageComponent {

}
