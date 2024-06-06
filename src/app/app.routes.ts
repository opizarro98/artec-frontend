import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from './pages/main/main.component';
import {LoginComponent} from './pages/login/login.component';
import {RegistroComponent} from './pages/registro/registro.component';
import {NosotrosComponent} from './pages/nosotros/nosotros.component';
import {PromocionateComponent} from './pages/promocionate/promocionate.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'promocionate', component: PromocionateComponent },
    { path: 'inicio',component: MainComponent  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })

  export class AppRoutingModule {}