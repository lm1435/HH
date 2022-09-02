import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodsafetyRoutingModule } from './foodsafety-routing.module';
import { FoodsafetyComponent } from './foodsafety.component';


@NgModule({
  declarations: [
    FoodsafetyComponent
  ],
  imports: [
    CommonModule,
    FoodsafetyRoutingModule
  ]
})
export class FoodsafetyModule { }
