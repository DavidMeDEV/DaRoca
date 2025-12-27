import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent:()=>import('./features/home/home').then(m=>m.Home),
        
    },
    {
        path:'login',
        loadComponent:()=>import('./features/auth/login/login').then(m=>m.Login),
        
    },
    {
        path:'products/:data',
        loadComponent:()=>import('./features/products/products').then(m=>m.Products)
    }
];
