import { Routes } from '@angular/router';
import { AboutComponent } from './pages/general/about/about.component';
import { FriendsComponent } from './pages/general/friends/friends.component';
import { HomePageComponent } from './pages/general/home-page/home-page.component';
import { LogInComponent } from './pages/general/log-in/log-in.component';
import { NotFoundComponent } from './pages/general/not-found/not-found.component';
import { ProfileComponent } from './pages/general/profile/profile.component';
import { SettingsComponent } from './pages/general/settings/settings.component';

export const routes: Routes = [

  {path: '', component: HomePageComponent},
  {path: 'MyProfile',component: ProfileComponent},
  {path: 'About',component: AboutComponent},
  {path: 'Subscriptions',component: FriendsComponent},
  {path: 'Settings',component: SettingsComponent},
  {path: 'LogIn', component: LogInComponent},

  {path: '**', component: NotFoundComponent},
];
