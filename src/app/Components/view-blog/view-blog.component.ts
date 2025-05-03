import { AfterViewInit, Component, ElementRef, inject, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../../Services/blog.service';
import { ToastService } from '../../Services/toast.service';
import { Blog } from '../../Models/blog';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { type } from 'node:os';

@Component({
  selector: 'app-view-blog',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './view-blog.component.html',
  styleUrl: './view-blog.component.css'
})
export default class ViewBlogComponent implements OnInit {

  router = inject(ActivatedRoute);
  blogService = inject(BlogService);
  toastService = inject(ToastService);
  blog : Blog[] = [];
  
  ngOnInit(): void {
    let _id= this.router.snapshot.paramMap.get('_id');
    this.blogService.getBlogbyId(_id).subscribe( (result) =>{
     this.blog = ([result.blog]);
     console.log(typeof(this.blog));
    })
  }


 

}


