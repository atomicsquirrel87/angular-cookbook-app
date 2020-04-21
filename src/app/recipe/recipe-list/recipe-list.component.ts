import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe('Dummy-Rezept', 'Dummy-Beschreibung', 'https://static.turbosquid.com/Preview/2019/02/18__04_59_25/Crash_Test_Dummy_Rigged_mb_00.jpg5B1ADE98-2892-494F-9EB2-F0B49A1BE375DefaultHQ.jpg');
  selectedRecipe: Recipe;
  constructor() { }

  ngOnInit(): void {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
