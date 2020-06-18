import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
  id: number;
  name: string;
  description: string;
  imagePath: string;
  ingredients: Ingredient[] = [];

  constructor(recipe) {
    this.id = recipe.id || 0;
    this.name = recipe.name || '';
    this.description = recipe.description || '';
    this.imagePath = recipe.imagePath || '';
    this.ingredients = recipe.ingredients || [];
  }
}
