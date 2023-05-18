    const lista_cursos = [];
    lista_cursos.push({
        titulo: 'veterinaria1',
        texto: 'descripcion de la veterinaria 1',
        imagen:'../img/veterinarias/vete1.jpg',
        enlace:'index2.html'
    }) ;
    lista_cursos.push({
        titulo: 'veterinaria2',
        texto: 'descripcion de la veterinaria 2',
        imagen:'../img/veterinarias/vete2.jpg',
        enlace:'index2.html'
    }) ;
    lista_cursos.push({
        titulo: 'veterinaria3',
        texto: 'descripcion de la veterinaria 3',
        imagen:'../img/veterinarias/vete3.jpg',
        enlace:'index2.html'
    }) ;
    lista_cursos.push({
        titulo: 'veterinaria4',
        texto: 'descripcion de la veterinaria 3',
        imagen:'../img/veterinarias/vete4.jpg',
        enlace:'index2.html'
    }) ;
    lista_cursos.push({
        titulo: 'veterinaria5',
        texto: 'descripcion de la veterinaria 5',
        imagen:'../img/veterinarias/vete5.jpg',
        enlace:'index2.html'
    }) ;
    lista_cursos.push({
        titulo: 'veterinaria6',
        texto: 'descripcion de la veterinaria 6',
        imagen:'../img/veterinarias/vete6.jpg',
        enlace:'index2.html'
    }) ;
    lista_cursos.push({
        titulo: 'veterinaria7',
        texto: 'descripcion de la veterinaria 7',
        imagen:'../img/veterinarias/vete7.jpg',
        enlace:'index2.html'
    }) ;

    const tarjetas = document.createElement('div');
    tarjetas.classList.add('row');

    for(curso of lista_cursos){
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('card');
        const figure = document.createElement('div');
        
        // cuerpo de tarjeta
        const cuerpo = document.createElement('div');
        cuerpo.classList.add('card-body');

        //cuerpo info
        const imagen = document.createElement('img');
        imagen.setAttribute('src', curso.imagen);
        imagen.classList.add('card-img-top');
        const titulo = document.createElement('h5');
        titulo.classList.add('card-title');
        titulo.innerText = curso.titulo;
        const texto = document.createElement('p');
        texto.classList.add('card-text');
        texto.innerText = curso.texto;
        const boton = document.createElement('a');
        boton.classList.add('btn');
        boton.classList.add('btn-primary');
        boton.setAttribute('href',curso.enlace);
        boton.innerText='Ver mas';

        // agregar info
        figure.appendChild(imagen);
        tarjeta.appendChild(figure);
        cuerpo.appendChild(titulo);
        cuerpo.appendChild(texto);
        cuerpo.appendChild(boton);
        tarjeta.appendChild(cuerpo);
        tarjetas.appendChild(tarjeta);

    }

    const contenedor = document.querySelector('.container');
    contenedor.appendChild(tarjetas);

    
    
    
    function iniciarMap(){
        var coord = {lat:-34.5956145 ,lng: -58.4431949};
        var map = new google.maps.Map(document.getElementById('map'),{
          zoom: 10,
          center: coord
        });
        var marker = new google.maps.Marker({
          position: coord,
          map: map
        });
    }


