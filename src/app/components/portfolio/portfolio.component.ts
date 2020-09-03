import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  page:number = 3; 
  post:any = [
    {
      titulo: 'Events By Asher',
      language: 'html, css, php, js',
      img: 'assets/images/portfolio/events.PNG'
    },
    {
      titulo: 'Vipez mzt',
      language: 'html, css, VueJs, PHP',
      img: 'assets/images/portfolio/vipez.PNG'
    },
    {
      titulo: 'CakeShop',
      language: 'c#',
      img: 'assets/images/portfolio/cake.PNG'
    },
    {
      titulo: 'laundry ',
      language: 'c#',
      img: 'assets/images/portfolio/wash.PNG'
    },
    {
      titulo: 'DeliveryApp',
      language: 'Graphql, node, express, Flutter',
      img: 'assets/images/portfolio/delivery.png'
    },
    {
      titulo: 'Find jobs',
      language: 'Ionic 4, laravel',
      img: 'assets/images/portfolio/job.png'
    },
    {
      titulo: 'News App',
      language: 'Ionic 4',
      img: 'assets/images/portfolio/news.png'
    },
    {
      titulo: 'Find Events',
      language: 'Flutter, graphql, nodeJs',
      img: 'assets/images/portfolio/fevents.png'
    },
    {
      titulo: 'Imdesu',
      language: 'html, css, php, js',
      img: 'assets/images/portfolio/imdesu.PNG'
    },
    {
      titulo: 'LabDreams',
      language: 'Angular(PWA), Java ',
      img: 'assets/images/portfolio/dreams.PNG'
    },
  ];
  newPost:any = [];

  constructor() {

    

   }

  ngOnInit(): void {
    
  }
  ngAfterViewInit(){
     for(let i = 0; i < 4; i++){
        this.newPost.push(this.post[i]);
     }
  }
  seemore(){
    this.newPost = [];
    this.page = this.page + 3;
    
    if(this.page >= this.post.length){
      //console.log("ya es mayor")
      let n:number = this.post.length;
      for(let i = 0; i < n; i++){
        this.newPost.push(this.post[i]);
      }
      }else{
        for(let i = 0; i < this.page + 1; i++){
          this.newPost.push(this.post[i]);
        }
        
      }
    } 

}
