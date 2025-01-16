import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatApiComponent } from './cat-api.component';

const routes: Routes = [
  { path: '', component: CatApiComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatmoduleRoutingModule { }
