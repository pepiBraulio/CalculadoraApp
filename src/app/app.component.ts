import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numA: number = 0;
  numB: number = 0;
  resultado: number = 0;

  suma():void{
    this.resultado = this.numA + this.numB;
  }
}
