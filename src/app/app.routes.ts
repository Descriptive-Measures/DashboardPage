import { Routes } from '@angular/router';
import { DashboardIndexComponent } from './dashboard/dashboard-index/dashboard-index.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth/auth.guard';


export const routes: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {
        path: 'login', component: LoginComponent, 
        title: 'Business Driver Dashboard Login @ Descriptive Measures',
    },
    {
        path: 'dashboard', 
        title: 'Business Driver Dashboard @ Descriptive Measures',
        component: DashboardIndexComponent, 
        // canActivate: [authGuard]
        
    },

];