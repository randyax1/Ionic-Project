import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {

  constructor(public navCtrl: NavController) { }

  posts = [
    {
      imagen0:"../../assets/post1/1.PNG",
      imagen1:"../../assets/post1/2.PNG",
      imagen2:"../../assets/post1/4.PNG"
    },
    {
      imagen0:"../../assets/post2/1.PNG",
      imagen1:"../../assets/post2/2.PNG",
      imagen2:"../../assets/post2/3.PNG"
    },
    {
      imagen0:"../../assets/post1/4.PNG",
      imagen1:"../../assets/post1/3.PNG",
      imagen2:"../../assets/post1/2.PNG"
    },
    {
      imagen0:"../../assets/post1/2.PNG",
      imagen1:"../../assets/post1/1.PNG",
      imagen2:"../../assets/post1/4.PNG"
    },
    {
      imagen0:"../../assets/post1/3.PNG",
      imagen1:"../../assets/post1/2.PNG",
      imagen2:"../../assets/post1/1.PNG"
    },
    
  ];

  openNavDetailPage(){
    this.navCtrl.navigateForward('/home/tabPostView')
  }

}
