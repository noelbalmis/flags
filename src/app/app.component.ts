import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FlagComponent } from './components/flag/flag.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FlagComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'flags';
  originalCountries: any;
  countries: any;

  constructor(private http: HttpClient) { }

  filterCountries(inputText: string): void {
    console.log(this.countries);
    this.countries = this.originalCountries.filter((country: any) => {
      const lowercaseName = country.name.toLowerCase();
      return lowercaseName.startsWith(inputText.toLowerCase()) || lowercaseName.includes(inputText.toLowerCase());
    });
  }

  ngOnInit(): void {
    this.http
      .get<any>('https://flagcdn.com/en/codes.json')
      .subscribe((data) => {
        this.originalCountries = Object.entries(data).map(([code, name]) => ({
          code,
          name,
        }));
        this.countries = [...this.originalCountries];
      });
  }
}
