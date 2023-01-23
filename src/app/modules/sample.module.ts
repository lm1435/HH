import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CropiqComponent } from '../components/cropiq/cropiq.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
  declarations: [CropiqComponent],
  imports: [CommonModule, NzButtonModule, NzTableModule, NzDividerModule],
})
export class SampleModule {}
