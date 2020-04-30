import { Component, OnInit } from '@angular/core';
import { pessoas } from './pessoas.model';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {

  pessoasArray: pessoas[] =

  constructor() { }

  ngOnInit(): void {
  }

}
