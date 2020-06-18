import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { SelectRecipeComponent } from "./select-recipe/select-recipe.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";

const routes: Routes = [
  { path: '', redirectTo: '/recipe', pathMatch: 'full' },
  {
    path: 'recipe', component: RecipesComponent, children: [
      {
        path: '', component: SelectRecipeComponent, pathMatch: 'full'
      },
      {
        path: 'new', component: RecipeEditComponent
      },
      {
        path: ':id', component: RecipeDetailComponent
      },
      {
        path: ':id/edit', component: RecipeEditComponent
      },
    ]
  },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: '**', redirectTo: '/recipe' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
