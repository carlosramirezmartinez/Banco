import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { IngresarGastoComponent } from './components/gastos/ingresar-gasto/ingresar-gasto.component';
import { GastosComponent } from './components/gastos/gastos.component';

/*renderizar componentes*/
const routes: Routes = [
  {path: '', redirectTo: '/ingresarGasto', pathMatch: 'full'},
  {path: 'ingresarGasto', component: IngresarGastoComponent},
  {path: 'gastos', component: GastosComponent},
  /*{path: '**', redirectTo: '/ingresarGasto', pathMatch: 'full'}*/
];
/*faltan las rutas, que se ponen en el html con la directiva <router-outlet>*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
