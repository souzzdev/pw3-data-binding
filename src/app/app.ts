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

    frase: any = [
    "Siga os bons e aprenda com eles.",
    "O bom-senso vale mais do que muito conhecimento.",
    "O riso é a menor distância entre duas pessoas.",
    "Deixe de lado as preocupações e seja feliz.",
    "Realize o óbvio, pense no improvável e conquiste o impossível.",
    "Acredite em milagres, mas não dependa deles.",
    "A maior barreira para o sucesso é o medo do fracasso.",
  ];

  biscoito = "biscoito.png"
  fechado: boolean = true;
  mensagem = "";

  abrir(){
    if(this.fechado == true){
      this.fechado = false; 
      this.biscoito = "quebrado.png";
      //Let - declarar variavel
      let indice = Math.floor(Math.random() * this.frase.length);
      this.mensagem = this.frase[indice];
    }
  }

  fechar(){
    if(!this.fechado){
      this.fechado = true; 
      this.biscoito = "biscoito.png";
    }
  }
  Gerar_frase_nova(){
     let indice = Math.floor(Math.random() * this.frase.length);
      this.mensagem = this.frase[indice];
  }
  

}