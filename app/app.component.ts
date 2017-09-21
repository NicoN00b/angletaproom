import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Angle Tap Room</h1>
    <h3>{{currentKeg}}</h3>

    <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)"></keg-list>
    <hr>
    <edit-keg [childSelectedKeg]='selectedKeg' (doneButtonClickedSender)='finishedEditing()'></edit-keg>
    <new-keg (newKegSender)='addKeg($event)'></new-keg>
  </div>
  `
})

export class AppComponent {

  selectedKeg = null;

  masterKegList: Keg[] = [
    new Keg('RPM IPA', 'Boneyard', 7.4, 5.00),
    new Keg('Kolsch', 'Double Mountain', 6.8, 5.00),
    new Keg('Sour Fresh Hopped', 'NanoCrypto Brewery', 12, 9.00),
    new Keg('Lager', 'Rainer', 4.8, 3.00)
  ];

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
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

  finishedEditing(){
    this.selectedKeg = null;
  }

  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }
}
