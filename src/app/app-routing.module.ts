import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ExampleComponent } from './components/example/example.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'example', component: ExampleComponent },
  { path: '**', redirectTo: 'home'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
