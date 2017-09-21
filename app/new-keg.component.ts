import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
    <h1>New Keg</h1>
    <div>
      <label>Enter the New Keg's Name (e.g. RPM IPA)</label>
      <input #newName>
      <label>Enter the New Keg's Brand (e.g. Boneyard)</label>
      <input #newBrand>
      <label>Enter the New Keg's ABV (7.4)</label>
      <input #newAlcoholContent>
      <label>Enter the Price per Pint</label>
      <input #newPrice type="number" name="price" min="0" max="15">
      <button (click)="submitForm(newName.value, newBrand.value, newAlcoholContent.value, newPrice.value);"> Add </button>
    </div>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, brand: string, alcoholContent: number, price: number) {
    var newKegToAdd: Keg = new Keg(name, brand, alcoholContent, price);
    this.newKegSender.emit(newKegToAdd);
  }
}
