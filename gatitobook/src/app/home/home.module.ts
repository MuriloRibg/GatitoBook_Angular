import { MenuModule } from './../componentes/menu/menu.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, LoginComponent, NovoUsuarioComponent],
  imports: [CommonModule, HomeRoutingModule, FormsModule, SharedModule, MenuModule],
  exports: [HomeComponent],
})
export class HomeModule {}
