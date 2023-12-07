import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function confirmPasswordValidator(field1: string, field2: string): ValidatorFn {
    return (control: AbstractControl) : ValidationErrors | null => {

        const password = control.get(field1)?.value;
        const cPassword = control.get(field2)?.value;

        return password === cPassword ? null : {'matchFields': true};
        
    }
}