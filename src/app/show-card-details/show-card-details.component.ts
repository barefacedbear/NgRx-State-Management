import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { CardDetails } from '../model/card-details.model';

@Component({
  selector: 'app-show-card-details',
  templateUrl: './show-card-details.component.html',
  styleUrls: ['./show-card-details.component.css']
})
export class ShowCardDetailsComponent implements OnInit {

  details: Observable<CardDetails[]>;

  constructor(private store: Store<AppState>) {
    this.details = store.select('details');
  }

  ngOnInit(): void {
  }
}
