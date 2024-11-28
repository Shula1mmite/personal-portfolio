import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';  // Import CommonModule for *ngFor
import { MatCardModule } from '@angular/material/card';  // Import Angular Material Card module
import { MatButtonModule } from '@angular/material/button';  // Import Angular Material Button module

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('600ms 200ms', style({ opacity: 1 }))
      ])
    ])
  ],
  standalone: true,  // Make the component standalone
  imports: [
    CommonModule,     // Add CommonModule to use *ngFor
    MatCardModule,    // Add MatCardModule for card components
    MatButtonModule   // Add MatButtonModule for buttons
  ]
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      title: 'Citizens Report App',
      description: 'A comprehensive web-based application for reporting and managing incidents. It features geolocation, real-time updates, and secure user authentication, designed to enhance community safety and engagement.'
    },
    {
      title: 'Chatbot: Layken',
      description: 'An AI-powered travel assistant chatbot that provides destination suggestions, travel tips, and real-time updates. Includes an intuitive user interface styled with Tailwind CSS and robust session management.'
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio designed with a purple-and-black aesthetic, showcasing skills and projects with seamless navigation and interactive animations for a captivating user experience.'
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  viewProject(project: any) {
    console.log('Viewing project:', project);
  }
}
