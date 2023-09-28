import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calculation.component.html',
  styles: [],
})
export class CalculationComponent implements OnInit {
  quantityA: number = 1;
  quantityB: number = 1;
  qtyAvailable: number[] = [1, 2, 3, 4, 5, 6];
  addition!: number;
  subtract!: number;
  multiply!: number;
  division!: number;

  ngOnInit(): void {
    this.addition = Number(this.quantityA) + Number(this.quantityB);
    this.subtract = Number(this.quantityA) - Number(this.quantityB);
    this.multiply = Number(this.quantityA) * Number(this.quantityB);
    this.division = Number(this.quantityA) / Number(this.quantityB);
  }

  onQuantityA(qty: number): void {
    this.quantityA = qty;
  }

  onQuantityB(qty: number): void {
    this.quantityB = qty;
  }

  // onAddition(): void {
  //   this.addition = Number(this.quantityA) + Number(this.quantityB);
  // }

  // onSubtraction(): void {
  //   this.addition = Number(this.quantityA) + Number(this.quantityB);
  // }

  // onMultiplication(): void {
  //   this.addition = Number(this.quantityA) + Number(this.quantityB);
  // }

  // onDivision(): void {
  //   this.addition = Number(this.quantityA) + Number(this.quantityB);
  // }
}
