import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingService } from "../shopping-list/shopping.service";

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe({
      name: 'Big Fat Hamburger',
      description: 'Fresh, ground, 100% pure lean beef Hamburger.',
      imagePath: 'https://images7.alphacoders.com/103/1033300.jpg',
      ingredients: [
        new Ingredient('Buns', 15),
        new Ingredient('Beef', 40),
        new Ingredient('Onion', 10),
        new Ingredient('Tomato', 10),
        new Ingredient('Lattuce', 10),
        new Ingredient('Cheese', 25),
      ]
    }),
    new Recipe({
      name: 'Bombay Sandwich',
      description: 'Indian Style Club Sandwich',
      imagePath: 'https://b.zmtcdn.com/data/pictures/chains/0/19080920/147ff6d880f34516d9d6ae70824c5ae3.jpg',
      ingredients: [
        new Ingredient('Bread', 15),
        new Ingredient('Potato', 15),
        new Ingredient('Tomato', 10),
        new Ingredient('Spinach', 10),
        new Ingredient('Onion', 10),
        new Ingredient('Lattuce', 5),
        new Ingredient('Beetroot', 5),
        new Ingredient('Butter', 25),
        new Ingredient('Coriander', 2),
      ]
    })
  ];

  constructor(private shoppingService: ShoppingService) {
  }

  getRecipes = () => this.recipes.slice();

  addToShoppingList = (ingredients: Ingredient[]) => this.shoppingService.onIngredientsAdded(ingredients)
}