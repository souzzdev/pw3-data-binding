import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pw3-data-binding');
  mensagem : any = [
    "A",
    "B",
    "C",
  ];

  biscoito = "biscoito.png"
  fechado: boolean = true;

  abrir(){
    if(this.fechado == true){
      this.fechado = false; 
      this.biscoito = "quebrado.png";
    }
  }

  fechar(){
    if(!this.fechado){
      this.fechado = true; 
      this.biscoito = "biscoito.png";
    }
  }

  

}