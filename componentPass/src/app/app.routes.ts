import { Routes } from '@angular/router';
import { HidenPasswordComponent } from './hiden-password/hiden-password.component';

export const routes: Routes = [  {
    path: 'hiden-password',
    component: HidenPasswordComponent,
    children:[
        {path:'prova-hiden-password', component : HidenPasswordComponent},
    ],
 


}];
