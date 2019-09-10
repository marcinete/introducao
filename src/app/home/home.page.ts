import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nome = "";
  cor = "primary";
  humor = "sad";
  sexo = "";
  checked_humor = false;


  constructor(private router: Router) { }
  
  trocarCor(): void {
    console.log('Chamou trocarCor!');
    if (this.cor == "primary") {
    this.cor = "danger";
    }
    else if(this.cor == "danger") {
    this.cor = "success";
    }
    else if (this.cor == "success") {
      this.cor = "warning";
    } else{
      this.cor = "primary";
    }
  }
  mudaHumor(): void {
    this.checked_humor = !this.checked_humor;
    console.log("Chamou mudaHumor!");
    if (this.checked_humor == true) {
      this.humor = "happy";
    } else {
      this.humor = "sad";
    }

  }
  selecionaSexo(event): void{
    console.log(event.detail.value);
    this.sexo = event.detail.value;
  }
  defineNome(event): void {
    console.log(event.detail.value);
    this.nome = event.detail.value;
  }
  irParaDetalhes(){
    let extras: NavigationExtras = {
      queryParams: {
      'nome': this.nome,
      'humor': this.humor,
      'sexo': this.sexo,
      'cor': this.cor
    }
  };
    this.router.navigate(['/detalhes']); 
  }
}
