// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
  	id: 'com.app',
  	root: '#app',
	theme: 'auto',
	view: {
        pushState: true
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'AppBase',
  	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/contenido/',
    	url: 'contenido.html',
    	name: 'contenido',
  		},
		{
		path: '/categorias/',
    	url: 'categorias.html',
    	name: 'categorias',
  		},
		{
		path: '/perfil/',
    	url: 'perfil.html',
    	name: 'perfil',
  		},
		{
		path: '/shop/',
    	url: 'shop.html',
    	name: 'shop',
  		},
		
	],
	dialog: {
		title: '',
		buttonOk: 'Aceptar',
		buttoncancel: 'Cancelar',
  	},
	popup: {
		closeOnEscape: true,
		backdrop : false
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	}
});



$$('#btnLogin').on('click', function (e) {
	e.preventDefault();
	
	var $valid = $$('#form-login')[0].checkValidity();
	if ($valid){
        $$('#form-login').trigger('reset');	
        app.loginScreen.close('#login');
		
		app.dialog.alert('!Welcome to AppBase !');
    }
	
});



$$(document).on('click', '#btnCarrito', function (e) {
	e.preventDefault();

	
	app.dialog.confirm('¿Seguro desea agregar este producto al carrito?', function () {
      app.dialog.alert('¡Producto agregado al carrito!');
    

        var notification = app.notification.create({
          icon: '<i class="material-icons">check</i>',
          title: 'Waffle Daffle',
          titleRightText: '',
          subtitle: '',
          text: "¡Producto agregado correctamente al carrito!",
          closeTimeout: 3000,
        });
        notification.open();
			
	});
	
	
});

$$(document).on('click', '#btnEnviar', function (e) {
	e.preventDefault();

	
	app.dialog.confirm('¿Seguro desea enviar un mensaje?', function () {
      app.dialog.alert('¡Mensaje enviado!');
    

        var notification = app.notification.create({
          icon: '<i class="material-icons">check</i>',
          title: 'Waffle Daffle',
          titleRightText: '',
          subtitle: '',
          text: "¡Mensaje enviado exitosamente a Waffle Daffle!",
          closeTimeout: 3000,
        });
        notification.open();
			
	});
	
	
});


$$(document).on('click', '#btnComprar', function (e) {
	e.preventDefault();

	
	app.dialog.confirm('¿Seguro desea comprar este producto?', function () {
		app.dialog.alert('Gracias por tu compra !');
		
		var notification = app.notification.create({
		  icon: '<i class="material-icons">check</i>',
		  title: 'Carrito de Compras',
		  titleRightText: '',
		  subtitle: '',
		  text: "Producto agregado correctamente.",
		  closeTimeout: 3000,
		});
		notification.open();

	});
		
});

