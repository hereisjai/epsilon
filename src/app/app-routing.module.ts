import { FormComponent } from './form/form.component';
import { CardComponent } from './card/card.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path:'card',
    component:CardComponent
  },
  {
    path:'form',
    component:FormComponent
  },
  {
    path:'table',
    component:TableComponent
  },
  {
    path:'',
    component:CardComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
