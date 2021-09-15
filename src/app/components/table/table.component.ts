import { Component, Input, OnInit } from '@angular/core';
import { DetailPeople } from 'src/app/models/detail.people';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  public peopleList!: any;

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.peopleService
      .getPeopleList()
      .subscribe((data) => (this.peopleList = data.results));
  }
}
