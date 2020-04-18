import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'insurance-list',
    loadChildren: () => import('./insurance-list/insurance-list.module').then( m => m.InsuranceListPageModule)
  },
  {
    path: 'Dashboard',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'register-policy',
    loadChildren: () => import('./register-policy/register-policy.module').then( m => m.RegisterPolicyPageModule)
  },
  {
    path: 'quote-policy',
    loadChildren: () => import('./quote-policy/quote-policy.module').then( m => m.QuotePolicyPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
