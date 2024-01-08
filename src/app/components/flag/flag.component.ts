import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flag',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flag.component.html',
  styleUrl: './flag.component.css'
})
export class FlagComponent {
  @Input() code: string = "";
  @Input() name: string = "";
}
