import { Component } from '@angular/core';
import { CustomButtonComponent } from '../Shared/custom-button/custom-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CustomButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
