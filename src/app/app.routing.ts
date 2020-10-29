import { Routes, RouterModule } from "@angular/router";
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './home.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'rezepte', loadChildren: () => import('./recipe/recipe.module').then(m => m.RecipeModule) },
    { path: 'einkaufsliste', component: ShoppingListComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);