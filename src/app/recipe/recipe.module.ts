import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './recipe-list/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeStartComponent } from './recipe-start.component';
import { RecipeComponent } from './recipe.component';
import { recipeRouting } from './recipe.routing';

@NgModule({
    declarations: [
        RecipeComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
        RecipeListComponent,
        RecipeEditComponent,
        RecipeStartComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        recipeRouting
    ],
})
export class RecipeModule {

}