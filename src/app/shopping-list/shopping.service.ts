import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingService {

  ingredientsChanges = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients = () => this.ingredients.slice();

  onIngredientAdded = (ingredient: Ingredient) => {
    this.ingredients.push(ingredient);
    this.ingredientsChanges.next(this.ingredients.slice());
  };

  onIngredientsAdded = (ingredients: Ingredient[]) => {
    this.ingredients.push(...ingredients);
    this.ingredientsChanges.next(this.ingredients.slice());
  }

}