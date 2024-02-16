import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-emp-form',
  standalone: true,
  imports: [ NgFor,ReactiveFormsModule],
  styleUrls: ['./emp-form.component.scss'],
  templateUrl: './emp-form.component.html',
})
export class EmployeeFormComponent {
  // @ViewChildren('empid') employeeId: ElementRef;


  //fetch department data and attach it to front end
  constructor(private http: HttpClient){

  }
  departmentList :{
    ID: number,
    DEPT_NAME:string
  }[] = [
  ];
  ngOnInit(): void {
    this.fetchDepartments();
  }
  fetchDepartments(): void {
    this.http.get<any>('https://localhost:44332/api/departmentsValue').subscribe(
      (response) => {
        this.departmentList = response.Results;
      },
      (error) => {
        alert('Error fetching departments:');
      }
    );
  }

  //form validation
  regForm = new FormGroup({
    empId: new FormControl(""),
    firstName: new FormControl(""),
    lastName : new FormControl(""),
    emailId :new FormControl(""),
    gender: new FormControl(""),
    address: new FormControl(""),
    phoneNumber: new FormControl(""),
    dateOfBirth: new FormControl(""),
    dateOfJoining : new FormControl(""),
    departmentId: new FormControl("")
  });
  validateForm() : boolean{
    if(this.regForm.value.departmentId == ''){
      alert("department should not be empty");
      document.getElementsByName("Department")[0]?.focus()
      return false;
    }else if(this.regForm.value.empId?.length == 0){
      alert("employee id cannot be null");
      document.getElementById("EmpIdTextBox")?.focus()
      return false;
    }else if(this.regForm.value.firstName?.length == 0){
      alert("first name should not be null");
      document.getElementById("FirstNameTextBox")?.focus();
      return false;
    }else if(this.regForm.value.lastName?.length == 0){
      alert("last name cannot be null");
      document.getElementById("LastNameTextBox")?.focus();
      return false;
    }else if(this.regForm.value.emailId?.length == 0){
      alert("email cannot be null");
      document.getElementById("EmailTextBox")?.focus();
      return false;
    }else if(this.regForm.value.gender?.length == 0){
      alert("gender cannot be null");
      document.getElementById("maleRadioBtn")?.focus();
      return false;
    }else if(this.regForm.value.address?.length == 0){
      alert("address cannot be null");
      document.getElementById("AddressTextArea")?.focus();
      return false;
    }else if(this.regForm.value.phoneNumber?.length == 0){
      alert("phone number cannot be null");
      document.getElementById("PhoneNumberTextBox")?.focus();
      return false;
    }else if(this.regForm.value.dateOfBirth?.length == 0){
      alert("date of birth cannot be null");
      document.getElementById("DateOfBirthTextField")?.focus();
      return false;
    }else if(this.regForm.value.dateOfJoining?.length == 0){
      alert("date of joining cannot be null");
      document.getElementById("DateOfJoiningTextField")?.focus();
      return false;
    }
    return true;
  }
  testApp(){
    if(this.validateForm()){
      this.http.post<any>('https://localhost:44332/api/createEmployee' , this.regForm.value).subscribe(
      (response) => {
        console.log("Success");
        alert("Succesfully Added Employee");
        location.reload();
      },
      (error) => {
        alert('Error fetching departments:');
      }
    );
    }
  }
 

}
