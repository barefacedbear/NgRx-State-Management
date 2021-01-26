import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { zeroValidator, expiryDate } from '../custom-validators/custom-validators';
import * as CardActions from '../actions/card.actions';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-fill-card-details',
  templateUrl: './fill-card-details.component.html',
  styleUrls: ['./fill-card-details.component.css']
})
export class FillCardDetailsComponent implements OnInit {

  constructor(private fb: FormBuilder, private store: Store<AppState>, private toastr: ToastrService) { }

  cardDetails: FormGroup;

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.cardDetails = this.fb.group({
      cardHolder: ['', Validators.required], cardNumber: ['', Validators.required],
      expirationDate: ['', [Validators.required, expiryDate]], secuirityCode: ['', Validators.min(3)],
      amount: [0, [Validators.required, zeroValidator]]
    });
  }

  keyupcard() {
    let trimmed = this.cardDetails.get('cardNumber').value;
    if (trimmed.length > 19) {
      trimmed = trimmed.substr(0, 19);
    }
    if(trimmed.length === 4 || trimmed.length === 9 || trimmed.length === 14) {
      trimmed = `${trimmed} `;
    }
    this.cardDetails.patchValue({
      cardNumber: trimmed
    });
  }

  expiryDate() {
    const input = this.cardDetails.get('expirationDate');
    let trimmed = input.value.replace(/\s+/g, '');
    if (trimmed.length > 7) {
      trimmed = trimmed.substr(0, 7);
    }
    if(trimmed.length === 2) {
      trimmed = `${trimmed}/`;
    }
    this.cardDetails.patchValue({
      expirationDate: trimmed
    });
  }

  async submitDetails() {
    try {
      await this.store.dispatch(new CardActions.AddDetail(this.cardDetails.value));
      this.toastr.success('Data submitted successfully');
    } catch(error) {
      this.toastr.error('Data not submitted');
    }
  }

}
