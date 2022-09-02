import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodsafetyComponent } from './foodsafety.component';

const routes: Routes = [{ path: '', component: FoodsafetyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodsafetyRoutingModule { }
