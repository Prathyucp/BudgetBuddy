import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Expenses } from '../models/expenses';
import { BehaviorSubject } from 'rxjs';
import { FormsModule } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor() { }
  totalBudget:number=1000;
  
  private allExpenses:Expenses[] = [{
    amount:10,
    description:"Grocery",
    category:"Food"
  }

  ];
  private totalExpenses = new BehaviorSubject<number>(0);

  readonly expenses = this.totalExpenses.asObservable();
  
  setExpenses(newExpense : number){
    // this.totalExpenses.value = newExpense;
    this.totalExpenses.next(newExpense);
    console.log("inside set total expense"+this.totalExpenses.getValue())
  }
  getExpenses() : number{
    return this.totalExpenses.getValue();
  }
  addExpense(newExpense:Expenses):void{
    this.allExpenses.push(newExpense);
    this.calculateExpenses();
  }
  getAllExpenses():Expenses[]{
    return this.allExpenses;
  }
  calculateExpenses(){
    let result:number = 0;
    this.allExpenses.forEach(e=>result+= e.amount);
    console.log("result"+result);
    this.setExpenses(result);
  }
}
