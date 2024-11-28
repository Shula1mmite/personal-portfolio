import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'; // Import MatCardModule

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [MatCardModule], // Add MatCardModule here
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  // Component logic here
}
