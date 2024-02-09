import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-form',
  standalone: true,
  styleUrls: ['./emp-form.component.scss'],
  templateUrl: './emp-form.component.html',
})
export class EmployeeFormComponent {
  clickSubmit = (): void => {
    return alert('submit button clicked');
  };
  clickReset = (): void =>{
    return alert('reset button clicked')
  }
}
