import { Component, Input, OnInit } from '@angular/core';

import { Firestore, collectionData, collection, query, limit, getDocs, orderBy, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Place } from '../../models/place.model';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  @Input() placeId = 'empty';

  loading: boolean = true;
  depth: number;
  place$: Observable<Place[]>;
  refUrl: string = "";
  documentUrl: Observable<string | null>;

  private firestore: Firestore;
  constructor(firestore: Firestore) {
    this.firestore = firestore;
    this.place$ = new Observable<Place[]>();
    this.depth = 0; //zero is the front of the place, outside
    this.documentUrl = new Observable<string | null>();
   }

  ngOnInit(): void {
    const col = collection(this.firestore, 'places');
    const q = query(col, where('slug', '==', this.placeId), limit(1));
    this.place$ = collectionData(q) as Observable<Place[]>;
  }

  move(direction: number): void {
    if(direction > 0){
      //move in
      this.depth += direction
    } else if (direction < 0){
      if(this.depth > 0){
        //move out, as long as we are in deeper than 0
        this.depth += direction;
      }
    }
    if(this.depth !== 0){

    } else {
      this.refUrl = "";
    }
  }
}
