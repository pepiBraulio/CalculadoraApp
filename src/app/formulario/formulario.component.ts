import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output() resultadoSuma = new EventEmitter<number>();
  numA: number;
  numB: number;

  suma(){
    let resultado = this.numA + this.numB;
    this.resultadoSuma.emit( resultado );
  }
}
