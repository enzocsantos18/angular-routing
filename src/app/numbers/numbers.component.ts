import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css'],
})
export class NumbersComponent implements OnInit {
  public selectedNumber = 5;
  public multiplyNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  constructor() {}

  ngOnInit() {}
}
