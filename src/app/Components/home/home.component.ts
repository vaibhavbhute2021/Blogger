import { CommonModule, JsonPipe } from '@angular/common';
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import ImagesliderComponent from '../imageslider/imageslider.component';
import { animate, style, transition, trigger } from '@angular/animations';
import { BlogService } from '../../Services/blog.service';
import { Blog } from '../../Models/blog';
import { error } from 'console';
import { ToastService } from '../../Services/toast.service';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import FeaturesComponent from '../features/features.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule, FeaturesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
   animations: [
    trigger('fadeInAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1.5s ease-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export default class HomeComponent implements OnInit{

 


  blogService = inject(BlogService);
  toastService = inject(ToastService);
  blogs : Blog[] = [];

  ngOnInit(): void {
    this.getAllBlogs();
  }

  getAllBlogs(){
    
    this.blogService.getBlogs().subscribe((result) => {
     if (result.blogs.length > 0) {
        this.blogs = result.blogs;
     } else {
        console.timeLog(result.message);
     }
    })
  }


 

}

