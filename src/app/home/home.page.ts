import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nome: string = "Marcinete";
  cor = "primary";
  humor = "sad";
  checked_humor = false;


  constructor() { }
  
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
    console.log(this.checked_humor)
    if (this.checked_humor == true) {
      this.humor = "happy";
    } else {
      this.humor = "sad";
    }

  }

}
