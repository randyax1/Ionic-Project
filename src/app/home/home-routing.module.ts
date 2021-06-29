import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'tabInicio',
        loadChildren: () => import('../inicio/inicio.module').then(m => m.InicioPageModule)
      },
      {
        path: 'tabNotificaciones',
        loadChildren: () => import('../notificaciones/notificaciones.module').then(m => m.NotificacionesPageModule)
      },
      {
        path: 'tabMenciones',
        loadChildren: () => import('../menciones/menciones.module').then(m => m.MencionesPageModule)
      },
      {
        path: 'tabPerfil',
        loadChildren: () => import('../perfil/perfil.module').then(m => m.PerfilPageModule)
      },
      {
        path: 'tabConfiguraciones',
        loadChildren: () => import('../configuraciones/configuraciones.module').then(m => m.ConfiguracionesPageModule)
      },
      {
        path: 'tabLogOut',
        loadChildren: () => import('../logout/logout.module').then(m => m.LogoutPageModule)
      },
      {
        path: 'tabPostLike',
        loadChildren: () => import('../post-like/post-like.module').then(m => m.PostLikePageModule)
      },
      {
        path: 'tabPostView',
        loadChildren: () => import('../post-view/post-view.module').then(m => m.PostViewPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
