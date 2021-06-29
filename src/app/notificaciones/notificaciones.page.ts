import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
})
export class NotificacionesPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  notificacionNowData = [
    {
      imagenAvatar:"../../assets/notifications/emma-watson.jpg",
      descripcion:"emma_watson, chelsey.lee.oakley y 5 personas más comenzaron a seguirte.",
      imagenPublicacion:"../../assets/post1/4.PNG"
    },
    {
      imagenAvatar:"../../assets/notifications/billy.jpg",
      descripcion:"immohades & chelsey.lee les gusto tu publicación.",
      imagenPublicacion:"../../assets/post1/2.PNG"
    },
    {
      imagenAvatar:"../../assets/post1/Avatar.jpg",
      descripcion:"ux.base compartio tu publicación.",
      imagenPublicacion:"../../assets/post1/1.PNG"
    }
  ];

  notificacionWeekData = [
    {
      imagenAvatar:"../../assets/post1/Avatar.jpg",
      descripcion:"immohades_, chelsey.lee.oakley y 5 personas más comenzaron a seguirte.",
      imagenPublicacion:"../../assets/post1/4.PNG"
    },
    {
      imagenAvatar:"../../assets/post2/Avatar.jpg",
      descripcion:"immohades_, chelsey.lee.oakley y 5 personas más comenzaron a seguirte.",
      imagenPublicacion:"../../assets/post2/2.PNG"
    },
    {
      imagenAvatar:"../../assets/post1/Avatar.jpg",
      descripcion:"immohades_, chelsey.lee.oakley y 5 personas más comenzaron a seguirte.",
      imagenPublicacion:"../../assets/post1/2.PNG"
    }
  ];

  notificacionMonthData = [
    {
      imagenAvatar:"../../assets/post1/Avatar.jpg",
      descripcion:"immohades_, chelsey.lee.oakley y 5 personas más comenzaron a seguirte.",
      imagenPublicacion:"../../assets/post1/4.PNG"
    },
    {
      imagenAvatar:"../../assets/post2/Avatar.jpg",
      descripcion:"immohades_, chelsey.lee.oakley y 5 personas más comenzaron a seguirte.",
      imagenPublicacion:"../../assets/post2/2.PNG"
    },
    {
      imagenAvatar:"../../assets/post1/Avatar.jpg",
      descripcion:"immohades_, chelsey.lee.oakley y 5 personas más comenzaron a seguirte.",
      imagenPublicacion:"../../assets/post1/2.PNG"
    }
  ];

  openNavDetailPage(){
    this.navCtrl.navigateForward('/home/tabPostLike')
  }

  ngOnInit() {
  }

}
