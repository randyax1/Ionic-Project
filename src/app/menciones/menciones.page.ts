import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menciones',
  templateUrl: './menciones.page.html',
  styleUrls: ['./menciones.page.scss'],
})
export class MencionesPage implements OnInit {

  constructor() { }

  mencionNowData = [
    {
      imagenAvatar:"../../assets/post1/Avatar.jpg",
      descripcion:"blxcKell te mencionó en un comentario: @randyax1 gran publicación",
      imagenPublicacion:"../../assets/post1/4.PNG"
    },
    {
      imagenAvatar:"../../assets/post2/Avatar.jpg",
      descripcion:"blxcKell te mencionó en un comentario: @randyax1 gran publicación",
      imagenPublicacion:"../../assets/post2/2.PNG"
    },
    {
      imagenAvatar:"../../assets/post1/Avatar.jpg",
      descripcion:"blxcKell te mencionó en un comentario: @randyax1 gran publicación",
      imagenPublicacion:"../../assets/post1/2.PNG"
    }
  ];

  mencionWeekData = [
    {
      imagenAvatar:"../../assets/post1/Avatar.jpg",
      descripcion:"blxcKell te mencionó en un comentario: @randyax1 gran publicación",
      imagenPublicacion:"../../assets/post1/4.PNG"
    },
    {
      imagenAvatar:"../../assets/post2/Avatar.jpg",
      descripcion:"blxcKell te mencionó en un comentario: @randyax1 gran publicación",
      imagenPublicacion:"../../assets/post2/2.PNG"
    },
    {
      imagenAvatar:"../../assets/post1/Avatar.jpg",
      descripcion:"blxcKell te mencionó en un comentario: @randyax1 gran publicación",
      imagenPublicacion:"../../assets/post1/2.PNG"
    }
  ];

  mencionMonthData = [
    {
      imagenAvatar:"../../assets/post1/Avatar.jpg",
      descripcion:"blxcKell te mencionó en un comentario: @randyax1 gran publicación",
      imagenPublicacion:"../../assets/post1/4.PNG"
    },
    {
      imagenAvatar:"../../assets/post2/Avatar.jpg",
      descripcion:"blxcKell te mencionó en un comentario: @randyax1 gran publicación",
      imagenPublicacion:"../../assets/post2/2.PNG"
    },
    {
      imagenAvatar:"../../assets/post1/Avatar.jpg",
      descripcion:"blxcKell te mencionó en un comentario: @randyax1 gran publicación",
      imagenPublicacion:"../../assets/post1/2.PNG"
    }
  ];

  ngOnInit() {
  }

}
