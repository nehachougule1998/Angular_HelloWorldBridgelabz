import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "HelloWorldBridgelabz";
  imgUrl="../assets/BL.jpeg";

  ngOnInit(): void {
    this.title = "Hello From Bridgelabz";
  }
}
