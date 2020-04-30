import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PessoasService} from '../pessoas.service';

@Component({
  selector: 'app-pessoas-detalhe',
  templateUrl: './pessoas-detalhe.component.html',
  styleUrls: ['./pessoas-detalhe.component.css']
})
export class PessoasDetalheComponent implements OnInit {
  @Input() Pessoa;
  @Output() atualizarDado = new EventEmitter();
  constructor(private pessoasService: PessoasService) { }

  ngOnInit(): void {
  }

  atualizarDados(id: number){
    let name: String = "Joao Vitor";
    let pessoa = {id, name};
    this.atualizarDado.emit(pessoa);
  }
}
