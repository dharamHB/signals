import { Component, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculation-signal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calculation-signal.component.html',
  styles: [],
})
export class CalculationSignalComponent {
  log!: [];
  constructor() {
    effect(() => console.log(this.quantityA()));
  }
  quantityA = signal<number>(1);
  quantityB = signal<number>(1);
  qtyAvailable = signal([1, 2, 3, 4, 5, 6]);
  addition = computed(
    () => Number(this.quantityA()) + Number(this.quantityB())
  );
  subtract = computed(
    () => Number(this.quantityA()) - Number(this.quantityB())
  );
  multiply = computed(
    () => Number(this.quantityA()) * Number(this.quantityB())
  );
  division = computed(
    () => Number(this.quantityA()) / Number(this.quantityB())
  );

  onQuantityA(qty: number): void {
    this.quantityA.set(qty);
  }

  onQuantityB(qty: number): void {
    this.quantityB.set(qty);
  }

  onUpdate(): void {
    this.quantityA.update((qty) => qty * 2);
  }

  onMutate(): void {
    this.qtyAvailable.mutate((qty) => (qty[qty.length - 1] = 10));
  }
}
