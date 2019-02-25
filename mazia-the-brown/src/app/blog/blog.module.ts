import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { BlogComponent } from './blog.component';
import { ImageContentComponent, PostFormComponent } from './dash/components';
import { DashComponent } from './dash/dash.component';
import { DashPageComponent } from './dash/pages';
import { HeaderComponent, PostComponent, PostListComponent, UserInteractionsComponent } from './init/components';
import { InitComponent } from './init/init.component';
import { ContactPageComponent, InitPageComponent, LoginPageComponent, PostPageComponent } from './init/pages';
import { NotFoundPageComponent } from './shared';

const blogRoutes: Routes = [
  {
    path: 'init',
    component: BlogComponent,
    children: [
      {
        path: 'mazia-the-brown',
        component: InitComponent,
        children: [
          {
            path: 'blog',
            component: InitPageComponent
          },
          {
            path: 'post/:id',
            component: PostPageComponent
          },
          {
            path: 'contact',
            component: ContactPageComponent
          },
          {
            path: 'login',
            component: LoginPageComponent
          },
          {
            path: '',
            redirectTo: 'blog',
            pathMatch: 'full'
          },
          {
            path: '**',
            component: NotFoundPageComponent
          }
        ]
      },
      {
        path: 'dash',
        component: DashComponent,
        children: [
          {
            path: 'management',
            component: DashPageComponent
          },
          {
            path: '',
            redirectTo: 'management',
            pathMatch: 'full'
          },
          {
            path: '**',
            component: NotFoundPageComponent
          }
        ]
      },
      {
        path: '',
        redirectTo: 'mazia-the-brown',
        pathMatch: 'full'
      },
      {
        path: '**',
        component: NotFoundPageComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'init',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
]

@NgModule({
  declarations: [
    /* Principal Components */
    BlogComponent,
    NotFoundPageComponent,
    InitComponent,
    DashComponent,

    /* Iit Pages */
    ContactPageComponent,
    InitPageComponent,
    LoginPageComponent,
    PostPageComponent,

    /* Init Components */
    HeaderComponent,
    PostComponent,
    PostListComponent,
    UserInteractionsComponent,

    /* Dash Pages */
    DashPageComponent,

    /* Dash Components */
    PostFormComponent,
    ImageContentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(blogRoutes)
  ],
  exports: [
    BlogComponent
  ]
})
export class BlogModule { }
