import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {

  images: string[] = ["assets/images/homePages1.png", "assets/images/homePages2.png",  /* Add more images */];
  currentFrame: number = 0;
  imageSrc: string = this.images[this.currentFrame];  // Initial image source

  ngOnInit() {
    this.changeImage();  // Start animation on initialization
    setInterval(() => this.changeImage(), 5000);  // Use arrow function for context
  }

  changeImage(): void {
    
    this.currentFrame = (this.currentFrame + 1) % this.images.length;
    this.imageSrc = this.images[this.currentFrame];
    console.log(this.imageSrc)
    if (this.currentFrame == this.images.length){
      this.currentFrame = 0;
    }
  }
}
