import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';
// import { ProductoComponent } from './pages/productos/pages/producto/producto.component';s
// import { ProductosComponent } from './pages/productos/productos.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'quienes-somos',
    component: QuienesSomosComponent
  },
  {
    path:'productos',
    loadChildren: () => import('./pages/productos/productos.module').then( m => m.ProductosModule )
  },
  {
    path:'contacto',
    component: ContactoComponent
  },
  {
    path:'**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
