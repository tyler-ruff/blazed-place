import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { HomeComponent } from './pages/home/home.component';
import { UnknownComponent } from './pages/unknown/unknown.component';
import { ViewComponent } from './pages/view/view.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'browse', component: BrowseComponent },
  { path: 'view', component: ViewComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: UnknownComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
