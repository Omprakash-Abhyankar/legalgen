import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { DashboardComponent } from './components/dashboard-page/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { ViewTaskComponent } from './components/view-task/view-task.component';
import { UpdateTaskComponent } from './components/update-task/update-task.component';
import { DeleteTaskComponent } from './components/delete-task/delete-task.component';
import { FilterTaskComponent } from './components/filter-task/filter-task.component';
import { SortTaskComponent } from './components/sort-task/sort-task.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SearchComponent } from './components/search/search.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
//configure the routing in the app module
// we need router outlet for these
const routes: Routes = [
{path:'', redirectTo:'login', pathMatch:'full'},
{path:'login', component: LoginComponent},
{path:'signup', component: SignupComponent},
{path:'view-task', component: ViewTaskComponent},
{path:'update-task', component: UpdateTaskComponent},
{path:'delete-task', component: DeleteTaskComponent},
{path:'filter-task', component: FilterTaskComponent},
{path:'sort-task', component: SortTaskComponent},
{path:'create-task', component: CreateTaskComponent},
{path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
{path: 'home-page', component : HomePageComponent},
{path: 'search', component : SearchComponent},
{path:'search-result', component : SearchResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
