import { Routes } from '@angular/router';
import { AboutComponent } from './pages/general/about/about.component';
import { FriendsComponent } from './pages/general/friends/friends.component';
import { HomePageComponent } from './pages/general/home-page/home-page.component';
import { NotFoundComponent } from './pages/general/not-found/not-found.component';
import { ProfileComponent } from './pages/general/profile/profile.component';

export const routes: Routes = [

  {path: '', component: HomePageComponent},
  {path: 'MonProfile',component: ProfileComponent},
  {path: 'About',component: AboutComponent},
  {path: 'Friends',component: FriendsComponent},

  {path: '**', component: NotFoundComponent},
];
