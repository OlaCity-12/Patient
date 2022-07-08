import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import {  delay, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  dobExists(dob: any): Observable<boolean> {
    return of(dob).pipe(
      delay(500),
      map((dob) => {
        const dobs = ['09-12- 1999'];
        return dobs.includes(dob);
      })
    );
  }

  uniqueDobValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.dobExists(control.value).pipe(
        map((exists) => (exists ? null : { dobExists: true }  ))
      );
    };
  }
}
