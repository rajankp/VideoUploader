import { Routes } from '@angular/router';
import { LoginComponent } from './login.component';

export const vuRoutes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent}
];