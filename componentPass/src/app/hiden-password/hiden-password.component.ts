import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hiden-password',
  standalone: true,
  imports: [],
  templateUrl: './hiden-password.component.html',
  styleUrl: './hiden-password.component.css'
})
export class HidenPasswordComponent implements OnInit{
  APYKEY = 'SPERIAMO RIESCO A NASCONDERLA :';  // Dichiarato come proprietà della classe

  constructor() {
    // Il costruttore può essere vuoto o contenere logica di inizializzazione
  }

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    console.log('NASCONDO API KEY : ', this.apiKey); 
  }
}
