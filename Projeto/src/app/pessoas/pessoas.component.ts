import { Component, OnInit } from '@angular/core';
import { pessoas } from './pessoas.model';
import { PessoasService} from '../pessoas.service';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {

  pessoasArray: pessoas[];
  detalhePessoa: boolean = false;
  pessoa: pessoas;

  constructor(private pessoasService: PessoasService) { }

  ngOnInit(): void {
    this.pessoasArray = this.pessoasService.getPessoas();
  }

  detalhes(id: number) {
    this.detalhePessoa = true;
    this.pessoa = this.pessoasService.getPessoa(id); 
    console.log(this.pessoa);
  }
  alterarNomePessoa(id: number, name: string){
    this.pessoasArray.forEach( pessoa => {
      if(pessoa.id == id){
        pessoa.name = name;
      }
    })
  }
}
