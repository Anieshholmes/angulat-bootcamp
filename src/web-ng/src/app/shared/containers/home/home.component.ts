import { Component, OnInit } from '@angular/core';
import { SelectEvent } from '@progress/kendo-angular-layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public onTabSelect(e: SelectEvent) {
    console.log(e);
  }

}
