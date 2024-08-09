import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mos',
  templateUrl: './mos.component.html',
  styleUrls: ['./mos.component.css']
})
export class MosComponent {
  constructor(
    private http: HttpClient){}
  cityName!:string
cityData:any
loaddata(cityName: string) {
  
  // Check if cityName is empty
  if (!cityName) {
    alert('Please enter a city name');
    return; // Exit the function if cityName is empty
  }

  console.log("Booking id is ", cityName);
  
  // Make an HTTP request to fetch prediction data using cityName
  this.http.get(`http://localhost:5000/api/prediction?city=${cityName}`)
    .subscribe(
      (data: any) => {
        // Handle the response data here
        console.log('selected city--------------------------------:', data);
        this.cityData = data;
      },
      (error: any) => {
        // Handle error if HTTP request fails
        console.error('Error fetching prediction data:', error);
      }
    );
}

// getPercentageColor(percentage: number): string {
//   if (percentage < 15) {
//       return 'green';
//   } else if (percentage >= 15 && percentage < 25) {
//       return 'yellow'; // Change to the desired color
//   } else if (percentage >= 25 && percentage < 50) {
//       return 'orange';
//   } else {
//       return 'red';
//   }
// }


}
