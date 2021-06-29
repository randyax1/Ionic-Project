import { Component } from '@angular/core';
import { AlertController } from "@ionic/angular";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {

  constructor(public alertCtrl: AlertController) { }

  autorData = [
    {
      imagenAvatar: "../../assets/post1/Avatar.jpg",
      autor: "ux.base",
      likes: "49 Me gusta",
      descripcion: "¡Te damos 6 consejos para diseñar mejores tarjetas UI! Espero que hayas aprendido algo valioso.",
      imagenes: "../../assets/post1/1.PNG",
    },
    {
      imagenAvatar: "../../assets/post2/Avatar.jpg",
      autor: "interfacely",
      likes: "453 Me gusta",
      descripcion: "Pagina diseñada por: Pixabuddy. ¡Compartenos tu diseño a nuestra pagina web!",
      imagenes: "../../assets/post2/1.PNG",
    },
    {
      imagenAvatar: "../../assets/post3/9812.jpg",
      autor: "ui_gradient",
      likes: "13 Me gusta",
      descripcion: "UX no es UI. En el siguiente post te comentamos porque!",
      imagenes: "../../assets/post3/post1.PNG",
    }
  ];


  async leaveMessage() {
    let alert = await this.alertCtrl.create({
      message: "Indique el comentario a su compañero:",
      inputs: [
        {
          placeholder:"Excelente publicacion!"
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
          
          }
        },
        {
          text: 'Enviar',
          handler: inputs => {
            window.alert("Mensaje Enviado.")
          }
        }
      ]
    });
    alert.present();
  }

  async sharePost() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: '¿Con quien deseas compartir la publicación?',
      inputs: [
        {
          name: 'checkbox1',
          type: 'checkbox',
          label: 'ux.kello',
          value: 'ux.kello'
        },
        {
          name: 'checkbox2',
          type: 'checkbox',
          label: 'Alexander_Dev',
          value: 'Alexander_Dev'
        },
        {
          name: 'checkbox3',
          type: 'checkbox',
          label: 'Schurch_Dev',
          value: 'Schurch_Dev'
        },
        {
          name: 'checkbox4',
          type: 'checkbox',
          label: 'Optiplex_Design',
          value: 'Optiplex_Design'
        },
        {
          name: 'checkbox5',
          type: 'checkbox',
          label: 'Albert_Huxley',
          value: 'Albert_Huxley'
        },
        {
          name: 'checkbox6',
          type: 'checkbox',
          label: 'Richard_UI',
          value: 'Richard_UI'
        },
        {
          name: 'checkbox7',
          type: 'checkbox',
          label: 'Michael_Front',
          value: 'Michael_Front'
        },
        {
          name: 'checkbox8',
          type: 'checkbox',
          label: 'Julio_Iglesias',
          value: 'Julio_Iglesias'
        },
        {
          name: 'checkbox9',
          type: 'checkbox',
          label: 'Steve_Jobs',
          value: 'Steve_Jobs'
        },
        {
          name: 'checkbox10',
          type: 'checkbox',
          label: 'Mamberroy',
          value: 'Mamberroy'
        },
        {
          name: 'checkbox11',
          type: 'checkbox',
          label: 'Killer_Dev',
          value: 'Killer_Dev'
        }

      ],

      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log("Usted cancelo el formulario")
          }
        },
        {
          text: 'Enviar',
          handler: inputs => {
            window.alert("La publicacion se compartio con: " + " " + inputs + " ")
          }
        }
      ]
    });
    await alert.present();
  }


}
