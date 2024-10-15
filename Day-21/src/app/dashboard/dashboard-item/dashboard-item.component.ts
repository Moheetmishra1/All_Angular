  import { Component, input, InputSignal, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
  // encapsulation:ViewEncapsulation.None,
  // host:{
  //   class:"dashboard-item"
  // }
})
export class DashboardItemComponent {
  obj:InputSignal<{image:string,title:string,alt:string}>=input.required<{image:string,title:string,alt:string}>()


}
