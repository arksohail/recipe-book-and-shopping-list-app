import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
  name: string;
  description: string;
  imagePath: string;
  ingredients: Ingredient[] = [];

  constructor(recipe) {
    this.name = recipe.name || '';
    this.description = recipe.description || '';
    this.imagePath = recipe.imagePath || '';
    this.ingredients = recipe.ingredients || [];
  }
}
