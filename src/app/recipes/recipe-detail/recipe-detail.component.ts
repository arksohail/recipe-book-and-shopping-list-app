import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe

  /**
   * 
   * @param recipeService 
   */
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  // onAddShoppingList = () => this.recipe.ingredients.forEach((ingredient: Ingredient) => {
  //   this.recipeService.onIngredientAdded(ingredient);
  // });

  onAddToShoppingList = () => this.recipeService.addToShoppingList(this.recipe.ingredients);
}
