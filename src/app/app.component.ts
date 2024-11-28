import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'; // For icons
import { MatButtonModule } from '@angular/material/button'; // For buttons
import { CommonModule } from '@angular/common'; // Import CommonModule


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-project';
  isMenuOpen = false; // Track menu state
  isMobile = false; // Track if screen is mobile size

   // Update `isMobile` on window resize
   @HostListener('window:resize', ['$event'])
   onResize(event: Event): void {
     this.isMobile = window.innerWidth <= 768; // Consider mobile if width <= 768px
   }
 
   // Toggle menu visibility
   toggleMenu(): void {
     this.isMenuOpen = !this.isMenuOpen;
   }
 
   ngOnInit(): void {
     // Set initial `isMobile` state
     this.isMobile = window.innerWidth <= 768;
   }
 }