import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg }  from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
  <div *ngIf="selectedKeg">
    <h3>{{selectedKeg.brand}} {{selectedKeg.name}}</h3>
    <p>Keg Complete? {{selectedKeg.done}}</p>
    <h3>Edit Keg </h3>
    <br>
    <label>Enter Keg Brand:</label>
    <input [(ngModel)]="selectedKeg.brand">
    <br>
    <br>
    <label>Enter Keg Name:</label>
    <input [(ngModel)]="selectedKeg.name">
    <br>
    <br>
    <label>Enter Keg ABV:</label>
    <input [(ngModel)]="selectedKeg.alcoholContent">
    <br>
    <br>
    <label>Enter Price:</label>
    <br>
    <br>
    <form>
      <input type="range" name="price" min="0" max="15">
    </form>
    <button (click)="doneButtonClicked()">Done</button>
  </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
