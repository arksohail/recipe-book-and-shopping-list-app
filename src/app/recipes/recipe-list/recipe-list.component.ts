import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe({
      name: 'A Test Recipe',
      description: 'This is for testing purpose',
      imagePath: 'https://www.oyorooms.com/blog/wp-content/uploads/2018/07/shutterstock_1095799145.jpg'
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

}
