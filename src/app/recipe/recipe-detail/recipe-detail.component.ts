import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  selectedRecipe: Recipe;
  recipeId: number;

  private subscription: Subscription;

  constructor(
    private recipeService: RecipeService, 
    private shoppingListService: ShoppingListService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  onEdit() {
    this.router.navigate(['/rezepte', this.recipeId, 'bearbeiten']);
  }

  onAddToList() {
    this.shoppingListService.addIngredients(this.selectedRecipe.ingredients);
  }

  onDelete() {
    this.router.navigate(['/rezepte']);
    this.recipeService.deleteRecipe(this.recipeId);
  }

  ngOnInit(): void {
    this.subscription = this.activatedRoute.params.subscribe(
      params => {
        this.recipeId = +params['id'];
        this.selectedRecipe = this.recipeService.getRecipe(this.recipeId);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
