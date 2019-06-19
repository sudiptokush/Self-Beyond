import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';
import {AboutComponent} from './about/about.component';
import {EventsComponent} from './events/events.component';
import {GalleryComponent} from './gallery/gallery.component';
import {ContactComponent} from './contact/contact.component';
import {SessionsComponent} from './sessions/sessions.component';
import {TrainingComponent} from './training/training.component';
import {BlogsComponent} from './blogs/blogs.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'showHome',
        pathMatch: 'full'
    },
    {
        path: 'showHome',
        component: HomeComponent
    },
    {
        path: 'showAbout',
        component: AboutComponent
    },
    {
        path: 'showEvents',
        component: EventsComponent
    },
    {
        path: 'showGallery',
        component: GalleryComponent
    },
    {
        path: 'showContact',
        component: ContactComponent
    },
    {
        path: 'showSessions',
        component: SessionsComponent
    },
    {
        path: 'showTraining',
        component: TrainingComponent
    },
    {
        path: 'blogs',
        component: BlogsComponent
    },
    {
        path: '**',
        redirectTo: 'showHome',
        pathMatch: 'full'
    }
];
export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);