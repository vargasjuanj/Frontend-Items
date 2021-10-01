import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

// La primer ruta predomina, por lo tanto, si solo estuviera 'contar' se mostrarian sus componentes igual, a pesar de que q uno no se redirija ahi
  {path:'', component:HomeComponent},
  //uso la carga eager aca, porque en realidad el componente ya se cargo en el appModule para cargar el cuentaAtras, pero lo dejo porque quiero ir a la ruta cuenta
 {path:'contar', loadChildren:'./observable/observable.module#ObservableModule' /* loadChildren: () => import('./observable/observable.module').then(m => m.ObservableModule)*/},
 
 {path: 'items',
 loadChildren: () => import('./item/item.module').then(m => m.ItemModule)},

 {path: '**', redirectTo:'items/tabla'}

 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
