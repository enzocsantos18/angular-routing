import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  public readonly nome = 'Enzo de Carvalho Santos';
  public readonly ra = '0050832011007';
  public readonly gitLink = 'https://github.com/enzocsantos18';

  constructor() {}

  ngOnInit() {}
}
