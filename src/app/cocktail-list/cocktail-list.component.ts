import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';


@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {

  constructor(public cServ : CocktailService) { }

  public cocktails = []

  


  ngOnInit() {
    this.cServ.getCocktails().subscribe((param_message) => {
      this.cocktails = param_message
    })
    console.log(this.cocktails)
  }

}
