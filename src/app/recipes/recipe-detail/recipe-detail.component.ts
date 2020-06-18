import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { relative } from 'path';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe
  recipe_id: number;

  /**
   * 
   * @param recipeService 
   */
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (param: Params) => {
          this.recipe_id = +param['id'];
          this.recipe = this.recipeService.getRecipe(this.recipe_id);
        }
      )
  }

  onAddToShoppingList = () => this.recipeService.addToShoppingList(this.recipe.ingredients);

  onEditRecipe = () => this.router.navigate(['edit'], { relativeTo: this.route })
}
