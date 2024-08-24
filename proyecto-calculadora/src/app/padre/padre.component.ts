import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {


  valueOne: number = 0;
  valueTwo: number = 0;
  sumar: string = '';
  restar: string = '';
  multiplicar: string = '';
  dividir: string = '';
  potencia: string = '';



  @Output() eventoEntrada = new EventEmitter<any>();

  getValoresEntrada() {
    this.eventoEntrada.emit(this.valueOne);
    this.eventoEntrada.emit(this.valueTwo);
    this.eventoEntrada.emit(this.sumar);
    this.eventoEntrada.emit(this.restar);
    this.eventoEntrada.emit(this.multiplicar);
    this.eventoEntrada.emit(this.dividir);
    this.eventoEntrada.emit(this.potencia);

  }


  getResultado() {





  }


}
