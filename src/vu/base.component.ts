import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'vu-base',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './base.component.html',
  styles: ``
})
export class BaseComponent {

}
