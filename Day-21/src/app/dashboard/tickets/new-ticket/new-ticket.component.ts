import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomButtonComponent } from "../../../Shared/custom-button/custom-button.component";
import { ControlComponent } from "../../../Shared/control/control.component";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ReactiveFormsModule, CustomButtonComponent, ControlComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

  form= new FormGroup({
    title:new FormControl('',{
      validators:[Validators.required]
    }),
    request:new FormControl('',{
      validators:[Validators.required]
    })
  })

  onSubmit(inputName:CustomButtonComponent){
    console.log(inputName);
    
    console.log(this.form.value );
    
  }

}
