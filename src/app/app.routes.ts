import { Routes } from '@angular/router';
import { EmployeeFormComponent } from './employee-form/emp-form.component';
import { SalaryPageComponent } from './salary-page/salary-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';

export const routes: Routes = [
    {path:"" , component: HomePageComponent},
    {path:"employee" , component: EmployeeFormComponent},
    {path:"salary" , component: SalaryPageComponent},
    {path:"table" , component: EmployeeTableComponent}
];
