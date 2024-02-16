import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';




@Component({
  selector: 'app-employee-table',
  standalone: true,
  imports: [MatTableModule ],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.scss'
})
export class EmployeeTableComponent {
  constructor(private http: HttpClient){

  }
  ngOnInit(): void {
    this.fetchEmployees()
  }
  ELEMENT_DATA = [
    
  ];
  fetchEmployees(): void {
    this.http.get<any>('https://localhost:44332/api/selectEmployee').subscribe(
      (response) => {
        this.ELEMENT_DATA =  response.Results;
        // console.log(this.ELEMENT_DATA);
      },
      (error) => {
        alert('Error fetching Employees:');
        console.log(error);
      }
    );
  }
  
  
  displayedColumns: string[] = ['EMP_ID','FIRST_NAME', 'LAST_NAME', 'GENDER' , 'EMP_ADDRESS' , 'DEPT_NAME' , 'PHONE_NO' , 'EMAIL_ID' , 'DATEOFBIRTH' , 'DATEOFJOINING'];
}
