export class Recipe {
  name: string;
  description: string;
  imagePath: string;

  constructor(recipe) {
    this.name = recipe.name || '';
    this.description = recipe.description || '';
    this.imagePath = recipe.imagePath || '';
  }
}
