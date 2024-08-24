import { Component, EventEmitter, Input } from '@angular/core';
import { PadreComponent } from '../padre/padre.component';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [PadreComponent],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {

  @Input() valoresInput = new EventEmitter<any>();

  valoresInput = 

  valueOne: number = 0;
  valueTwo: number = 0;
  sumar: string = '';
  restar: string = '';
  multiplicar: string = '';
  dividir: string = '';
  potencia: string = '';


  getValoresParaOperacion() {


    if(this.valoresInput.emit.)


  }

}
