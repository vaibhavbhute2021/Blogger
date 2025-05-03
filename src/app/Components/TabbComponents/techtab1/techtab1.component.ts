import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BlogService } from '../../../Services/blog.service';
import { Blog } from '../../../Models/blog';

@Component({
  selector: 'app-techtab1',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './techtab1.component.html',
  styleUrl: './techtab1.component.css'
})
export class Techtab1Component implements OnInit{

  router = inject(Router)
  blogService = inject(BlogService);
  blogs : any = [];

  ngOnInit(): void {
    this.getAllBlogs();
  }

  getAllBlogs(){
    this.blogService.getBlogs().subscribe((result) => {
     if (result.blogs.length > 0) {
        // Filter only blogs with category "Technology"
        this.blogs = result.blogs.filter(blog => blog.blogCatagory === 'Technology');
        
     } else {
        console.timeLog(result.message);
     }
    })
  }


  viewBlog(id : string) {
      this.router.navigate(['/viewBlog/'+id])
    }

}
