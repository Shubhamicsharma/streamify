import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { SignupComponent } from './signup/signup.component';
import { CategoryComponent } from './category/category.component';
import { DocumentaryComponent } from './documentary/documentary.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AuthGuard } from './shared/authguard.guard';

export const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : "login", component : LoginComponent},
  {path : 'subscribe', component : SubscribeComponent},
  {path : 'home', component : HomeComponent},
  {path : 'signup', component : SignupComponent},
  {path : 'category', component : CategoryComponent},
  {path : "documentary", component : DocumentaryComponent},
  {path : "access-denied", component : AccessDeniedComponent},
  {path : 'user-account', component : UserAccountComponent, canActivate : [AuthGuard]},
  {path : 'contact-us', component : ContactUsComponent},
  {path : "**", component : PageNotFoundComponent}
];
