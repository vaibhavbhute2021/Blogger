import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, ReactiveFormsModule, Validators, MinLengthValidator } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { EditorComponent, EditorModule } from '@tinymce/tinymce-angular';
import { BlogService } from '../../Services/blog.service';
import { Console, error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-blog',
  standalone: true,
  imports: [CommonModule, EditorModule, ReactiveFormsModule, MatIcon],
  templateUrl: './create-blog.component.html',
  styleUrl: './create-blog.component.css'
})
export default class CreateBlogComponent implements OnInit{

  /* This code relates to the the tinymce config, which will help to set the toolbar and other options
  Also it has the logic to change the images alignment which user will add in editor */

  editorConfig ={
    height : 600,
    base_url: '/tinymce',
    suffix: '.min',
    plugins: 'paste code image image editimage link lists wordcount table codesample emoticons preview',
    toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright | bullist numlist | code | image | wordcount | table | codesample | emoticons | preview',
    // plugins: [
    //   'advlist autolink lists link image charmap print preview anchor',
    //   'searchreplace visualblocks code fullscreen',
    //   'insertdatetime media table paste code help wordcount'
    // ],
    // toolbar: 'undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',

    image_advtab: true,
    paste_data_images: true,
    content_style: `
      img {
        max-width: 100%;
        height: auto;
      }
      pre {
        background: #f4f4f4;
        padding: 1rem;
        border-radius: 4px;
      }
    `
  }

  updateImageStyles(editor: any) {
    const content = editor.getContent();
    const updatedContent = this.addResponsiveStylesToImages(content);
    editor.setContent(updatedContent); // Update the editor content
    
  }

  addResponsiveStylesToImages(htmlContent: string): string {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    const images = doc.querySelectorAll('img');

    images.forEach((img) => {
      // Add responsive styles
      img.style.maxWidth = '50%';
      img.style.height = '50%';
    });

    return doc.body.innerHTML;
  }


  /* End chancges of Tinymce Editor */
  

  editorForm !: FormGroup;
  fb = inject(FormBuilder);
  blogSerice = inject(BlogService);
  Storeduser : any = localStorage.getItem('user') 
  user = JSON.parse(this.Storeduser);
  router = inject(Router);


  ngOnInit(): void {
    this.editorForm = this.fb.group({
      blogTitle : ['', Validators.required],
      blogShortDesc : ['', [Validators.required, Validators.minLength(180), Validators.maxLength(200)] ],
      blogCatagory : ['', Validators.required],
      blogContent : ['', Validators.required],
      userName : this.user.userName,
      tags : this.fb.array([])
    });
  }

  get tags(): FormArray {
    return this.editorForm.get('tags') as FormArray;
  }

  // Method to add a tag
  addTag(): void {
    this.tags.push(this.fb.control('', Validators.required));
  }

  // Method to remove a tag by index
  removeTag(index: number): void {
    this.tags.removeAt(index);
  }

  addBlog() {
   
    // this.blogSerice.createBlog(this.editorForm.value).subscribe( 
    //   (result) =>{
    //       console.log(result);
          
    //     },
    //   (error) => {
    //     console.log(error.message);
    //   })

    try {

      if(this.editorForm.valid){

        this.blogSerice.createBlog(this.editorForm.value).subscribe(
          (result) =>{
            alert(result.message);
            this.editorForm.reset();
            this.router.navigate(['/myblogs'])
          },
          (error) =>{
            alert(error.error.message)
            console.log(error.message);
          }
        )

      }else{
        alert("Invalid Form, Please check if all the details are added.")
      }
      
    } catch (error) {
      
    }


    }

}
