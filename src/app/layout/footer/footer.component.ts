import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styles: [
    `
      .footer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 60px;
      }
    `,
  ],
})
export class FooterComponent {}
