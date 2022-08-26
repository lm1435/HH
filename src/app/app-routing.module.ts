import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CropiqComponent } from './cropiq/cropiq.component';

const routes: Routes = [
  { path: 'cropiq', component: CropiqComponent },
  { path: '', redirectTo: '/cropiq', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
