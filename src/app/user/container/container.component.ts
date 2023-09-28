import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './container.component.html',
  styles: [],
})
export class ContainerComponent {}
