import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HidenPasswordComponent } from "./hiden-password/hiden-password.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HidenPasswordComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'componentPass';
}
