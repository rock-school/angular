import {AbstractControl} from "@angular/forms";

export class AppValidators {
  static emailPattern = /^\S+@\S+\.\S+/;

  static email(control: AbstractControl): { [key: string]: boolean } | null {
    debugger;
    if (!control.value) {
      return null;
    }
    const isCorrectEmail = AppValidators.emailPattern.test(control.value);
    return !isCorrectEmail ? {email: true} : null;
  }
}
