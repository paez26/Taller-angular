import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-listarSeries',
  templateUrl: './listarSeries.component.html',
  styleUrls: ['./listarSeries.component.css']
})
export class ListarSeriesComponent implements OnInit {

  public series: Array<Serie> = [];

  public promedio: number = 0;

  constructor(private servicio: SerieService) { }

  ngOnInit() {
    this.getSeries();
  }

  getSeries():void {
    this.servicio.getSeries().subscribe((series => {
      this.series = series
      this.promedio = this.actualizarPromedio();
    }));
  }

  actualizarPromedio(): number{
    let suma: number = 0;
    this.series.forEach((serie) => suma+= serie.seasons);
    let promedio: number = suma/this.series.length;
    return promedio;
  }

}
