import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe({
      name: 'Hamburger',
      description: 'The burger that made us famous. Fresh, ground, 100% pure lean beef, grilled to perfection and built-to-order. Served on a freshly toasted sponge-dough bun.',
      imagePath: 'https://www.stephenconroy.com/images/GALLERYVIEW_333_SC_BurgerDayCombo.jpg'
    }),
    new Recipe({
      name: 'A Test Recipe',
      description: 'This is for testing purpose',
      imagePath: 'https://www.oyorooms.com/blog/wp-content/uploads/2018/07/shutterstock_1095799145.jpg'
    })
  ];


  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected = (recipe: Recipe) => this.selectedRecipe.emit(recipe);

}
