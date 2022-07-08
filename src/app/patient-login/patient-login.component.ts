import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  dobControl = new FormControl('', {
    validators: [Validators.required, Validators.pattern('[0-9]')],
    asyncValidators: [this.userService.uniqueDobValidator()]
  })

  zipcodeControl = new FormControl('',{
    validators: [Validators.required, Validators.pattern('[0-9]')]
  })
}
