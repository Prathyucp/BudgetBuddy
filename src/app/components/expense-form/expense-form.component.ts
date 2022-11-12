import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Expenses } from 'src/app/models/expenses';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css']
})
export class ExpenseFormComponent implements OnInit {
  newExpenses: Expenses = {} as Expenses;
  optionsCategory:FormGroup;
  descr:FormGroup;
  amt:FormGroup;
  constructor(private budgetServ:BudgetService) {
    this.optionsCategory = new FormGroup({
      category: new FormControl('', [Validators.required])
    });
    this.descr = new FormGroup({
      desc : new FormControl('',[Validators.required])
    })
    this.amt = new FormGroup({
      amount : new FormControl('',[Validators.required])
    })
   }

  
  ngOnInit(): void {
    
  }
  addExpense(){
    let result:Expenses = { ...this.newExpenses };
    this.budgetServ.addExpense(result);
    this.newExpenses = {} as Expenses;
    
  }
}
