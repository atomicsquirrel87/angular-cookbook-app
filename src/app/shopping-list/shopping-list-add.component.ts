import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styleUrls: ['./shopping-list-add.component.css']
})
export class ShoppingListAddComponent implements OnInit, OnChanges {
  @Input() selectedIngredient: Ingredient;
  @Output() cleared = new EventEmitter();
  isAdd = true;

  constructor(private shoppingListService: ShoppingListService) { }

  onSubmit(form: NgForm){
    const newIngredient = new Ingredient(form.value.name, form.value.amount);
    if (!this.isAdd){
      this.shoppingListService.editIngredient(this.selectedIngredient, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.onClear(form);
  }

  onDelete(form: NgForm) {
    this.shoppingListService.deleteIngredient(this.selectedIngredient);
    this.onClear(form);
  }

  onClear(form: NgForm) {
    this.cleared.emit(); 
    form.resetForm();
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes) {
    if (changes.selectedIngredient.currentValue == null) {
      this.selectedIngredient = {name: null, amount: null};
      this.isAdd = true;
    } else {
      this.isAdd = false;
    }
  }
}
