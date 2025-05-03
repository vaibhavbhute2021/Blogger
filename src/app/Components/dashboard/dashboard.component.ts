import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BlogService } from '../../Services/blog.service';
import { ToastService } from '../../Services/toast.service';
import { Blog } from '../../Models/blog';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule  } from "primeng/button";
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { RippleModule } from 'primeng/ripple';

import {MatIconModule} from '@angular/material/icon';
import { TruncatePipe } from '../../Pipes/truncate.pipe';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, CarouselModule, MatIconModule, ButtonModule, TagModule, CardModule, RippleModule, TruncatePipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export default class DashboardComponent implements OnInit{

  router = inject(Router)
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
