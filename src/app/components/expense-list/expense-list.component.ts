import { Component, OnInit } from '@angular/core';
import { Expenses } from 'src/app/models/expenses';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {

  constructor(private budgetServ:BudgetService) { }

  allAddedExpenses: Expenses[] = [];
  ngOnInit(): void {
    this.allAddedExpenses = this.budgetServ.getAllExpenses() ;
  }

}
