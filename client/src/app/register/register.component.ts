import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})

export class RegisterComponent implements OnInit {
  @Output() cancelRegistation = new EventEmitter();

  model: any = {}
  constructor(public accountService: AccountService, private toastr: ToastrService ) {

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
      this.toastr.error(err)
    })
  }
}
