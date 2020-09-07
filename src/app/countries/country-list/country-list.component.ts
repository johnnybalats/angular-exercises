import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { CountryService } from '../country.service';
import { FormControl } from "@angular/forms";
import { Observable, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap
} from "rxjs/operators";

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  title = 'Countries of the world';
  // countries: Country[];
  loading: boolean = false;
  searchField: FormControl;
  countries: Observable<Country[]>;
  private searchTerms = new Subject<string>();

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {

    // First task of the assignment to show all the countries
    // this.countryService.getCountries().subscribe(countries => {
    //   this.countries = countries;
    // });

    // One step further made a live search bar that searches by country name
    this.countries = this.searchTerms.pipe(
      tap(_ => (this.loading = true)),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => this.countryService.searchCountry(term)),
      tap(_ => (this.loading = false))
    );
  }

  search(term: string) {
    this.searchTerms.next(term);
  }
}
