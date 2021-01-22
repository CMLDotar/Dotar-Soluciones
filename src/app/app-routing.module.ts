import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'loguearse',
    loadChildren: () => import('./pages/loguearse/loguearse.module').then( m => m.LoguearsePageModule)
  },
  {
    path: '',
    redirectTo: 'loguearse',
    pathMatch: 'full'
  },
  {
    path: 'formulario',
    loadChildren: () => import('./pages/formulario/formulario.module').then( m => m.FormularioPageModule)
  },
  {
    path: 'verificar',
    loadChildren: () => import('./pages/verificar/verificar.module').then( m => m.VerificarPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
