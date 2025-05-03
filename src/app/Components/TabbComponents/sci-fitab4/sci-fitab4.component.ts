import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BlogService } from '../../../Services/blog.service';

@Component({
  selector: 'app-sci-fitab4',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sci-fitab4.component.html',
  styleUrl: './sci-fitab4.component.css'
})
export class SciFitab4Component implements OnInit{

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
        //console.log(result.blogs);
        this.blogs = result.blogs.filter(blog => blog.blogCatagory === 'Friction and Story');
        
     } else {
        console.timeLog(result.message);
     }
    })
  }


  viewBlog(id : string) {
      this.router.navigate(['/viewBlog/'+id])
    }

}
