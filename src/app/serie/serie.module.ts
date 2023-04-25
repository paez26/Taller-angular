import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarSeriesComponent } from './listarSeries/listarSeries.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListarSeriesComponent],
  exports: [ListarSeriesComponent]
})
export class SerieModule { }
