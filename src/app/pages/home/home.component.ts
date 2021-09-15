import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';
import { People } from '../../models/people';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public peopleList!: any;
  public showCard: boolean = false;

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.peopleService
      .getPeopleList()
      .subscribe((data) => (this.peopleList = data.results));
  }

  lookCards() {
    this.showCard = !this.showCard;
  }
}
