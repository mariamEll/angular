//ici on a toutes les routes 
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembersComponent } from './members/members.component';
import {MembersFromComponent} from  './members-from/members-from.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolsComponent } from './tools/tools.component';
import { ArticleComponent } from './article/article.component';
import { EventsComponent } from './events/events.component';
import { AffectComponent } from './affect/affect.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'login',
    pathMatch:'full',
    component: LoginComponent,
  },
{
  path: 'members',
  pathMatch:'full',
  component: MembersComponent,
},
{
  path: 'create',
  pathMatch:'full',
  component: MembersFromComponent,
},
{
  path: 'members/:id/edit',  // ki t7ot ay haja ba3d el localhost:4200/ ywali y7otek fil localhost:4200/members
  pathMatch:'full',
  component: MembersFromComponent,
},
{
  path: 'articles/:id/affect',  
  pathMatch:'full',
  component: AffectComponent,
},
{
  path: 'dashboard',  // ki t7ot ay haja ba3d el localhost:4200/ ywali y7otek fil localhost:4200/members
  pathMatch:'full',
 component: DashboardComponent,
},
{
  path: 'tools',  // ki t7ot ay haja ba3d el localhost:4200/ ywali y7otek fil localhost:4200/members
  pathMatch:'full',
 component: ToolsComponent,
},
{
  path: 'articles',  // ki t7ot ay haja ba3d el localhost:4200/ ywali y7otek fil localhost:4200/members
  pathMatch:'full',
 component: ArticleComponent,
},
{
  path: 'Events',  // ki t7ot ay haja ba3d el localhost:4200/ ywali y7otek fil localhost:4200/members
  pathMatch:'full',
 component: EventsComponent,
},

{
  path: '',
  pathMatch:'full',
  redirectTo:'members',
},

{
  path: '**',  // ki t7ot ay haja ba3d el localhost:4200/ ywali y7otek fil localhost:4200/members
  pathMatch:'full',
  redirectTo:'members',
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
