import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-start',
  template: `
    <h1>Bitte ein Rezept auswählen<h1>
  `,
  styles: []
})
export class RecipeStartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
