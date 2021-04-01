import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [ListComponent, DetailComponent],
  imports: [CommonModule, BrowserModule, RouterModule],
  exports: [ListComponent, DetailComponent],
})
export class UserModule {}
