import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.page.html',
  styleUrls: ['./post-view.page.scss'],
})
export class PostViewPage {

  constructor() { }

  autorData = [
    {
      imagenAvatar: "../../assets/perfil/mi-foto.jpg",
      autor: "randyax1",
      likes: "435 Me gusta",
      descripcion: "Diseñado con Invision Studio.",
    }
  ];

  slides= [
    {
      imagenes:"../../assets/post2/1.PNG",
    },
    {
      imagenes:"../../assets/post2/2.PNG",
    },
    {
      imagenes:"../../assets/post2/3.PNG",
    }
  ]

}
