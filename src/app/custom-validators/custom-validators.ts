import { AbstractControl } from "@angular/forms";

export function expiryDate(control: AbstractControl): { [key: string]: any } | null {
    const check = (control.value.trim()).split('/');
    const expiry = new Date(`${check[1]}-${check[0]}-01`);
    return expiry > new Date() ? null : { 'expiryDate': { value: control.value } };
}

export function zeroValidator(control: AbstractControl): { [key: string]: any } | null {
    return parseFloat(control.value) > 0 ? null : { 'aboveZero': { value: control.value } };
}

