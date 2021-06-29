import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-configuraciones',
  templateUrl: './configuraciones.page.html',
  styleUrls: ['./configuraciones.page.scss'],
})
export class ConfiguracionesPage {

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController) { }

  configData = [
    {
      icon:"person-add-sharp",
      configOpcion:"Seguir e invitar a amigos"
    },
    {
      icon:"notifications-sharp",
      configOpcion:"Notificaciones"
    },
    {
      icon:"lock-closed-sharp",
      configOpcion:"Privacidad"
    },
    {
      icon:"shield-checkmark-sharp",
      configOpcion:"Seguridad"
    },
    {
      icon:"megaphone-sharp",
      configOpcion:"Anuncios"
    },
    {
      icon:"person-sharp",
      configOpcion:"Cuenta"
    },
    {
      icon:"help-sharp",
      configOpcion:"Ayuda"
    },
    {
      icon:"information-sharp",
      configOpcion:"Información"
    },{
      icon:"color-palette-sharp",
      configOpcion:"Tema"
    }
  ];

  openNavDetailPage(){
    this.navCtrl.navigateForward('/home/tabLogOut')
  }
  
}
