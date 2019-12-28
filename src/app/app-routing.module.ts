import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  //{path:'news',loadChildren:()=>import('./news/news.module').then(m=>m.NewsModule)},
  {path:'marketplace',loadChildren:()=>import('./marketplace/marketplace.module').then(m=>m.MarketplaceModule)},
//  {path:'home',loadChildren:()=>import('./core/core.module').then(m=>m.CoreModule)},

  //    {path:'news', component: NewsComponent},
  //    {path:'learning-center', component: LearningCenterComponent},
  //    {path:'market-place', component: MarketPlaceComponent},
  //    {path:'pricing', component: PricingComponent},
  //    {path:'home',loadChildren:()=>import('./core/core.module').then(m=>m.CoreModule)},
  //    path:'home', component: HomeComponent},
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'marketplace', loadChildren: () => import('./marketplace/marketplace.module').then(m => m.MarketplaceModule) },
  { path: 'news', loadChildren: () => import('./news/news.module').then(m => m.NewsModule) },
  { path: 'home', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: 'learning-center', loadChildren: () => import('./learning-center/learning-center.module').then(m => m.LearningCenterModule) },
  { path: 'pricing', loadChildren: () => import('./pricing/pricing.module').then(m => m.PricingModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
