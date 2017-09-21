import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template:`
    <select (change)="onChange($event.target.value)">
      <option value="allKegs">All Kegs</option>
      <option value="completedKegs">Completed Kegs</option>
      <option value="incompleteKegs" selected="selected">Incomplete Kegs</option>
    </select>

    <ul>
     <li (click)="isDone(currentKeg)" *ngFor="let currentKeg of childKegList | completeness">{{currentKeg.brand}} {{currentKeg.name}} <button (click)="editButtonHasBeenClicked(currentKeg)">Edit</button></li>
    </ul>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  priceIndex(currentKeg){
    if (currentKeg.price >= 7){
      return "bg-danger";
    } else if (currentKeg.price <= 3) {
      return "bg-info";
    } else {
      return "bg-warning";
    }
  }

  isDone(clickedKeg: Keg) {
    if(clickedKeg.done === true) {
      alert("This task is done!");
    } else {
      alert("This task is not done. Better get to work!");
    }
  }
}
