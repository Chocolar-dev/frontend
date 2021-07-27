import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';
import { ProductoComponent } from './pages/producto/producto.component';

const routes: Routes = [
  {
    path:'',
    // component: ListadoComponent,
    children: [
      { path:'', component: ListadoComponent},
      { path:'producto', component: ProductoComponent },
    ]
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
