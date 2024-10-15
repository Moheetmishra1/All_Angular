import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route } from '@angular/router';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit , OnDestroy {
  user: {id: number, name: string};
  // @Input({required:true}) id :string;
  private paramsSubscription:Subscription

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.user=
    {
      id:this.route.snapshot.params['id'],
      name:this.route.snapshot.params['name']
    }
   this.paramsSubscription= this.route.params
    .subscribe(
      (parmas:Params)=>{
        this.user={id:parmas['id'],name:parmas['name']}
      }
    )
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe()
  }

}
