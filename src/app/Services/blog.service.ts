import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Blog } from '../Models/blog';
import { Observable } from 'rxjs';
import { apiUrls } from '../Configs/api_urls';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  http = inject(HttpClient);

  createBlog(blog : Blog) : Observable<any>{
    return this.http.post<any>(`${apiUrls.blogServiceApi}createBlog`, blog);
  }

  getBlogs() : Observable<{ status: boolean; message: string; blogs: Blog[] }>{
    return this.http.get<{ status: boolean; message: string; blogs: Blog[] }>(`${apiUrls.blogServiceApi}blogs`);
  }

  getBlogbyId(id : any) : Observable<any>{
    return this.http.get<any>(`${apiUrls.blogServiceApi}`+id);
  }

  getBlogByUsername(userName : string) : Observable<{ status: boolean; message: string; blogs: any[] }>{
    return this.http.get<{ status: boolean; message: string; blogs: any[] }>(`${apiUrls.blogServiceApi}myBlogs/`+userName);
  }


}
