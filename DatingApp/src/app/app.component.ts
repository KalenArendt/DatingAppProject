import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppUser } from './models/app-user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  http = inject(HttpClient);

  title = 'DatingApp';

  // users!: AppUser;
  users: any;

  constructor() { }

  ngOnInit(): void {
    // this.http.get<AppUser>('https://localhost:5001/services/users').subscribe({
    // 	next: (response: AppUser) => {
    // 		this.users = response;
    // 		console.log(response);
    // 	},
    // 	error: error => {
    // 		console.log(error);
    // 	},
    // 	complete: () => {
    // 		console.log('complete')
    // 	}
    // });

    this.http.get('https://localhost:5001/services/users').subscribe({
      next: (response) => {
        this.users = response;
        console.log(response);
      },
      error: error => {
        console.log(error);
      },
      complete: () => {
        console.log('complete')
      }
    });
  }
}
