import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import  HomeComponent  from './Components/home/home.component';
import JoinusComponent from './Components/joinus/joinus.component';
import LoginFormComponent from './Components/login-form/login-form.component';
import  OTPDialogComponent  from './Components/otp-dialog/otp-dialog.component';
import  ResetPasswordComponent  from './Components/reset-password/reset-password.component';
import { features } from 'process';
import { authGuard } from './Guards/auth.guard';
import path from 'path';

export const routes: Routes = [
    //Lezy Loading
    {path:'', loadComponent: () => import('./Components/home/home.component')},
    {path:'home', loadComponent: () => import('./Components/home/home.component')},
    {path:'joinus', loadComponent:() => import('./Components/joinus/joinus.component')},
    {path:'login', loadComponent:() => import('./Components/login-form/login-form.component')},
    {path:'otp', loadComponent:() => import('./Components/otp-dialog/otp-dialog.component')},
    {path:'resetPassword/:token', loadComponent: () => import('./Components/reset-password/reset-password.component')},
    {path:'features', loadComponent: () => import('./Components/features/features.component')},
    {path:'pricing', loadComponent: () => import('./Components/pricing/pricing.component')},
    {path:'forgetPassword', loadComponent: () => import('./Components/forget-password/forget-password.component')},
    {path:'dashboard', loadComponent: () => import('./Components/dashboard/dashboard.component')},
    {path:'profile', loadComponent:() => import('./Components/profile/profile.component'), canActivate:[authGuard]},
    {path:'viewBlog/:_id', loadComponent:() => import('./Components/view-blog/view-blog.component')},
    {path:'myblogs', loadComponent: () => import('./Components/my-blogs/my-blogs.component')},
    {path:'createBlog', loadComponent: () => import('./Components/create-blog/create-blog.component')}
];
