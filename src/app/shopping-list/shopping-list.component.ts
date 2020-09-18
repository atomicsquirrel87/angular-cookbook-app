import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  selectedIngredient: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  onSelectItem(ingredient: Ingredient) {
    this.selectedIngredient = ingredient;
  }

  onCleared() {
    this.selectedIngredient = null;
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
  }

}
