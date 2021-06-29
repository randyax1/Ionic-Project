import { Component } from '@angular/core';

@Component({
  selector: 'app-post-like',
  templateUrl: './post-like.page.html',
  styleUrls: ['./post-like.page.scss'],
})
export class PostLikePage {

  constructor() { }
  
  autorData = [
    {
      imagenAvatar: "../../assets/perfil/mi-foto.jpg",
      autor: "randyax1",
      likes: "69 Me gusta",
      descripcion: "¡Te doy 6 consejos para diseñar mejores tarjetas UI! Espero que hayas aprendido algo valioso.",
    }
  ];

  slides= [
    {
      imagenes:"../../assets/post1/1.PNG",
    },
    {
      imagenes:"../../assets/post1/2.PNG",
    },
    {
      imagenes:"../../assets/post1/3.PNG",
    },
    {
      imagenes:"../../assets/post1/4.PNG",
    }
  ]

}
