import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-total-expense',
  templateUrl: './total-expense.component.html',
  styleUrls: ['./total-expense.component.css']
})
export class TotalExpenseComponent implements OnInit {

  constructor(private budgetServ:BudgetService) { }
  totalBudget:number=0
  totalExpense:number=0
  ngOnInit(): void {
    this.budgetServ.calculateExpenses();
    this.totalBudget = this.budgetServ.totalBudget;
    
    this.budgetServ.expenses.subscribe((response:number) => {
              this.totalExpense = response;
            });
    
    this.totalExpense = this.budgetServ.getExpenses();
    console.log("inside comp"+this.totalExpense);
  }

}
