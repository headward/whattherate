import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rated',
  templateUrl: './rated.component.html',
  styleUrls: ['./rated.component.scss']
})
export class RatedComponent implements OnInit {

  title = 'google-places-autocomplete';
  userAddress: string = ''
  rating: number = 0
  reviews: any[] = []


  handleAddressChange(address: any) {
    console.log(address)
    this.userAddress = address.formatted_address
    this.rating = address.rating;
    this.reviews = address.reviews;
  }

  ngOnInit(): void {
  }
}
