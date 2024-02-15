import { Component } from '@angular/core';
import { SalaryFormComponent } from '../salary-form/salary-form.component';

@Component({
  selector: 'app-salary-page',
  standalone: true,
  imports: [SalaryFormComponent],
  templateUrl: './salary-page.component.html',
  styleUrl: './salary-page.component.scss'
})
export class SalaryPageComponent {

}
