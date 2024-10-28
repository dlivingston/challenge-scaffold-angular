import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicViewComponent } from "./public-view/public-view.component";
import { LoginComponent } from "./login/login.component";
import { AdminViewComponent } from "./admin-view/admin-view.component";

const routes: Routes = [
  { path: '', component: PublicViewComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
