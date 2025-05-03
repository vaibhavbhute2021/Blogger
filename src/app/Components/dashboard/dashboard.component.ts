import { CommonModule } from '@angular/common';
import { Component,ViewEncapsulation,  inject, OnInit } from '@angular/core';
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
import {MatTabsModule} from '@angular/material/tabs';
import { Techtab1Component } from "../TabbComponents/techtab1/techtab1.component";
import { Historytab2Component } from "../TabbComponents/historytab2/historytab2.component";
import { Healthcaretab3Component } from "../TabbComponents/healthcaretab3/healthcaretab3.component";
import { SciFitab4Component } from "../TabbComponents/sci-fitab4/sci-fitab4.component";


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, CarouselModule, MatTabsModule, MatIconModule, ButtonModule, TagModule, CardModule, RippleModule, TruncatePipe, Techtab1Component, Historytab2Component, Healthcaretab3Component, SciFitab4Component],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  encapsulation: ViewEncapsulation.None
})
export default class DashboardComponent implements OnInit{

  router = inject(Router)
  blogService = inject(BlogService);
  toastService = inject(ToastService);
  blogs : Blog[] = [];

  ngOnInit(): void {
    //this.getAllBlogs();
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


  viewBlog(id : string) {
      this.router.navigate(['/viewBlog/'+id])
    }


}
