import { Component, OnInit, Input } from '@angular/core';
import { PessoasService} from '../pessoas.service';

@Component({
  selector: 'app-pessoas-detalhe',
  templateUrl: './pessoas-detalhe.component.html',
  styleUrls: ['./pessoas-detalhe.component.css']
})
export class PessoasDetalheComponent implements OnInit {
  @Input() Pessoa;

  constructor(private pessoasService: PessoasService) { }

  ngOnInit(): void {
  }

}
