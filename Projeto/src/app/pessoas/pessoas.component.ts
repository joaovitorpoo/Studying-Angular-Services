import { Component, OnInit } from '@angular/core';
import { pessoas } from './pessoas.model';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {

  pessoasArray: pessoas[] = [];
  detalhePessoa: boolean = false;
  pessoa: pessoas;

  constructor() { }

  ngOnInit(): void {
  }

  alterarNomePessoa(id: number, name: string){
    this.pessoasArray.forEach( pessoa => {
      if(pessoa.id == id){
        pessoa.name = name;
      }
    })
  }
}
