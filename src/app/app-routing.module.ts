import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './modules/user/detail/detail.component';
import { ListComponent } from './modules/user/list/list.component';

const routes: Routes = [
  {
    path: 'home',
    component: ListComponent,
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
