import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;

  /**
   * 
   * @param shoppingService 
   */
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
  }

  onAddItem() {
    console.log(this.nameInputRef.nativeElement.value);
    console.log(this.amountInputRef.nativeElement.value);
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.shoppingService.onIngredientAdded(newIngredient)
    // this.ingredientAdded.emit(newIngredient);
  }

}
