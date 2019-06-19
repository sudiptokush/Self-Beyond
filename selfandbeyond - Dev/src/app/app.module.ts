import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { GalleryComponent } from './gallery/gallery.component';
import {GalleryDetailsComponent} from './gallery-details/gallery-details.component';
import { Routing } from './router';
import { TrainingComponent } from './training/training.component';
import { TrainingDetailsComponent } from './training-details/training-details.component';

import {CarouselModule} from 'ngx-bootstrap/carousel';
import { SessionsComponent } from './sessions/sessions.component';
import { SessionDetailsComponent } from './session-details/session-details.component';
import { RegisterComponent } from './register/register.component';
import {EmailHelperService} from './email-helper.service';
import { BlogsComponent } from './blogs/blogs.component';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    EventsComponent,
    GalleryComponent,
    GalleryDetailsComponent,
    SessionsComponent,
    SessionDetailsComponent,
    RegisterComponent,
    TrainingComponent,
    TrainingDetailsComponent,
    BlogsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    CarouselModule
  ],
  providers: [EmailHelperService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
