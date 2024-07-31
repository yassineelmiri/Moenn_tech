import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CategoryComponent } from './Components/category/category.component';
import { ContactusComponent } from './Components/contactus/contactus.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { CategoryDetailComponent } from './Components/category-detail/category-detail.component';
import { RegistreComponent } from './Components/registre/registre.component';
import { LoginComponent } from './Components/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'category', component: CategoryComponent, title: 'category' },
  {
    path: 'category/:id',
    component: CategoryDetailComponent,
    title: 'category detail',
  },
  { path: 'contact', component: ContactusComponent, title: 'Contact Us' },
  { path: 'registre', component: RegistreComponent, title: 'Sign_up' },
  { path: 'login', component: LoginComponent, title: 'Sign_in' },

  { path: '**', component: NotFoundComponent, title: 'Not found 404' },
];
