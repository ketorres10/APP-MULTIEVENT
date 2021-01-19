import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController, NavController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { firebase } from '@firebase/app';
import { AuthService } from './shared/servicios/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Inicio',
      url: '/home/Inicio',
      icon: 'home'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'people'
    },
    {
      title: 'Perfil de usuario',
      url: '/perfil',
      icon: 'people'
    },
    {
      title: 'Eventos',
      url: '/eventos',
      icon: 'reader'
    },
    {
      title: 'Mi Agenda',
      url: '/agenda',
      icon: 'calendar'
    },

    {
      title: 'Detectar',
      url: '/detection-beacon',
      icon: 'radio',
    },
    {
      title: 'Cerrar sesión',
      url: '/cerrar',
      icon: 'close-circle',
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    private navController: NavController,
    private alertCtrl: AlertController,
    private authservice: AuthService,
  ) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
  inicio(){
    this.menu.close();
    this.navController.navigateForward(['folder/Inicio']);
  }
  login(){
    this.menu.close();
    this.navController.navigateForward(['login']);
  }
  perfil(){
    this.menu.close();
    this.navController.navigateForward(['perfil']);
  }
  irEventos() {
    this.menu.close();
    this.navController.navigateForward(['eventos']);
  }
  agenda(){
    this.menu.close();
    this.navController.navigateForward(['agenda']);
  }
  deteccion(){
    this.menu.close();
    this.navController.navigateForward(['deteccion']);
  }
  async cerrarSesion() {
    this.menu.close();
    const alert = await this.alertCtrl.create({
      header: '¿Está seguro de que quiere cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar',
          handler: (blah) => {
            console.log('Cancelar');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            console.log('Okey');
            this.navController.navigateForward(['folder/Inicio']);
            this.authservice.logout();
          }
        }

      ]
    });
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);

  }
}