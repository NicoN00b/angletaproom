import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentFocus}}</h3>

    <ul>
     <li [class]="priorityColor(currentKeg)" (click)="isDone(currentKeg)" *ngFor="let currentKeg of kegs">{{currentKeg.description}} <button (click)="editKeg(currentKeg)">Edit</button></li>
    </ul>
    <hr>
    <div *ngIf="selectedKeg">
      <h3>{{selectedKeg.description}}</h3>
      <p>Keg Complete? {{selectedKeg.done}}</p>
      <h3>Edit Keg </h3>
      <br>
      <label>Enter Keg Description:</label>
      <input [(ngModel)]="selectedKeg.description">
      <br>
      <br>
      <label>Enter Keg Priority (1-3):</label>
      <br>
      <br>
      <input type="radio" [(ngModel)]="selectedKeg.priority" [value]="1">1 (Low Priority)<br>
      <input type="radio" [(ngModel)]="selectedKeg.priority" [value]="2">2 (Medium Priority)<br>
      <input type="radio" [(ngModel)]="selectedKeg.priority" [value]="3">3 (High Priority)<br>
      <button (click)="finishedEditing()">Done</button>
    </div>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  kegs: Keg[] = [
    new Keg('RPM IPA', 'Boneyard', 7.4, 5.00),
    new Keg('Kolsch', 'Double Mountain', 6.8, 5.00),
    new Keg('Sour Fresh Hopped', 'NanoCrypto Brewery', 12, 9.00),
    new Keg('Lager', 'Rainer', 4.8, 3.00)
  ];
  selectedKeg = null;

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  isDone(clickedKeg: Keg) {
    if(clickedKeg.done == true) {
      alert("This task is done!");
    } else {
      alert("This task is not done. Better get to work!")
    }
  }

  priorityColor(currentKeg){
    if (currentKeg.priority === 3){
      return "bg-danger";
    } else if (currentKeg.priority === 2) {
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }

  finishedEditing(){
    this.selectedKeg = null;
  }
}

export class Keg {
  public done: boolean = false;
  constructor(public name: string, public brand: string, public alcoholContent: number, public price: number) {}
}
