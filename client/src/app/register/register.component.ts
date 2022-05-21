import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from 'src/services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})

export class RegisterComponent implements OnInit {
  @Output() cancelRegistation = new EventEmitter();

  model: any = {}
  constructor(public accountService: AccountService ) {

   }

  ngOnInit(): void {
  }

  cancel() {
    this.cancelRegistation.emit();
  }

  register() {
    this.accountService.register(this.model).subscribe(response => {
      console.log(response)
    }, err => {
      console.error(err)
    })
  }
}
