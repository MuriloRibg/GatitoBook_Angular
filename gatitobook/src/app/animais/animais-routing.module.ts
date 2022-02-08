import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovoAnimalComponent } from './novo-animal/novo-animal.component';
import { ListaAnimaisResolver } from './lista-animais/lista-animais.resolver';
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';
import { DetalheAnimalComponent } from './detalhe-animal/detalhe-animal.component';

const routes: Routes = [
  {
    path: '',
    component: ListaAnimaisComponent,
  },
  {
    path: "novo",
    component: NovoAnimalComponent
  },
  {
    path: ':animalId',
    component: DetalheAnimalComponent,
    resolve: {
      animais: ListaAnimaisResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimaisRoutingModule {}
