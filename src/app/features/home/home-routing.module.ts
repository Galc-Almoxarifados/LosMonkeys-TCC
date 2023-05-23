import { PedidoComponent } from './../../pedido/pedido.component';
import { InicioComponent } from './../../views/inicio/inicio.component';
import { ManutencaoComponent } from './../../manutencao/manutencao.component';
import { EstoqueComponent } from './../../estoque/estoque.component';
import { ItensCreateComponent } from './../../shared/itens/itens-create/itens-create.component';
import { ItensCrudComponent } from './../../views/itens-crud/itens-crud.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'inicio',
        component: InicioComponent
      },
      {
        path: 'itens',
        component: ItensCrudComponent
      },
      {
      path: 'itens/create',
      component: ItensCreateComponent
      },
      {
        path: 'estoque',
        component: EstoqueComponent
      },
      {
        path: 'manutençao',
        component: ManutencaoComponent
      },
      {
        path: 'pedidos',
        component: PedidoComponent
      }

    ]
  },
  // {
  //   path: 'itens/create',
  //   component: ItensCreateComponent
  // },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
