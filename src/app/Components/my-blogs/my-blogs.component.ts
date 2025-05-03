import { Component, inject, OnInit, Pipe } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BlogService } from '../../Services/blog.service';
import { Blog } from '../../Models/blog';
import { json } from 'stream/consumers';
import { CommonModule, JsonPipe } from '@angular/common';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-my-blogs',
  standalone: true,
  imports: [CommonModule, RouterModule, CarouselModule, MatIconModule,ButtonModule, TagModule, CardModule, RippleModule],
  templateUrl: './my-blogs.component.html',
  styleUrl: './my-blogs.component.css'
})
export default class MyBlogsComponent implements OnInit{

  router = inject(Router)
  blogService = inject(BlogService);
  blogs : any = [];
  
  storedUser : any = localStorage.getItem('user');


  ngOnInit(): void {
    const user = JSON.parse(this.storedUser);
    const userName = user.userName;
    this.getAllBlogs(userName);
  }

  getAllBlogs(userName : string) {
    this.blogService.getBlogByUsername(userName).subscribe( (result) =>{
      if (result.blogs.length > 0) {
        this.blogs = result.blogs;
        //  console.log(this.blogs)
     } else {
        console.timeLog(result.message);
     }
    })
  }

  viewBlog(id : string) {
    this.router.navigate(['/viewBlog/'+id])
  }

}
