import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatmoduleModule } from './cat-api/catmodule.module';

const routes: Routes = [
  {
    path: 'cat-api',
    loadChildren: () => import ('./cat-api/catmodule.module').then(m => m.CatmoduleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
