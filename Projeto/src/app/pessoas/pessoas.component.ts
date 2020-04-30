import { Component, OnInit } from '@angular/core';
import { pessoas } from './pessoas.model';
import { PessoasService} from '../pessoas.service';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {

  pessoasArray: pessoas[];
  detalhePessoa: boolean = true;
  pessoa: pessoas;

  constructor(private pessoasService: PessoasService) { }

  ngOnInit(): void {
    this.pessoasArray = this.pessoasService.getPessoas();
  }
  
  alterarNomePessoa(id: number, name: string){
    this.pessoasArray.forEach( pessoa => {
      if(pessoa.id == id){
        pessoa.name = name;
      }
    })
  }
}
