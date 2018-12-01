import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, AbstractControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-phone-num',
  templateUrl: './phone-num.component.html',
  styleUrls: ['./phone-num.component.css']
})
export class PhoneNumComponent implements OnInit {
  registrationForm: FormGroup;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      username: '',
      phoneNumber: ['', [
        (control: AbstractControl) => {
          // remove anything that isn't a digit
          const numDigits = control.value.replace(/[^\d]+/g, '').length;
          // Only worried about domestic numbers for now
          if (numDigits === 10) { return null; }
          console.log('somthing wrong');
          // Uh oh, something's wrong
          if (numDigits > 10) {
            return {
              tooLong: { numDigits }
            };
          } else {
            return {
              tooShort: { numDigits }
            };
          }
        }
      ]]
    });

    this.registrationForm.valueChanges.subscribe(asdf => console.log('valueChanges', asdf));
  }

  get phoneNumber() {
    return this.registrationForm.get('phoneNumber');
  }
}
