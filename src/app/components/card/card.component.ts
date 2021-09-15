import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DetailPeople } from '../../models/detail.people';
import { ModalInfoComponent } from '../modal-info/modal-info.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() people!: DetailPeople;
  constructor(
    private modalService: BsModalService,
    public bsModalRef: BsModalRef
  ) {}

  ngOnInit(): void {}

  showMore() {
    this.bsModalRef = this.modalService.show(ModalInfoComponent, {
      initialState: {
        name: this.people.name.first,
        lastName: this.people.name.last,
        gender: this.people.gender,
        nat: this.people.nat,
        email: this.people.email,
      },
    });
  }
}
