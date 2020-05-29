import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Schnitzel', 
      'Lecker Schnitzel', 
      'https://static.essen-und-trinken.de/bilder/e9/b1/7321/galleryimage/ed956d4fa02f282fabdb282aa6bc6447.jpg',
      [
        new Ingredient('Fleisch', 10),
        new Ingredient('Semmelbrösel', 1),
        new Ingredient('Eier', 2),
        new Ingredient('Mehl', 100)
      ]
    ),
    new Recipe(
      'Salat', 
      'Gesund', 
      'https://images.lecker.de/rasanter-salat-mit-ei-und-feta-lecker-07-2018-F8498901,id=4dba2952,b=lecker,w=610,cg=c.jpg',
      []
    )

  ];
  selectedRecipe: Recipe;
  constructor() { }

  ngOnInit(): void {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
