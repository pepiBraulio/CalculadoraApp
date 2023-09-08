import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  resultado: number = 0;

  agregandoResultado(resultadoS: number){
    this.resultado = resultadoS;
  }
}
