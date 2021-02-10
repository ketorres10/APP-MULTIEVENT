import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController, NavController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { firebase } from '@firebase/app';
import { AuthService } from './shared/servicios/auth.service';
import { UserI } from 'src/app/shared/models/user.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public image: string;
  public idUser: string;
  public email: string;
  public name: string;
  public currentImage: string = 'https://www.tuplanweb.com/proyecto/Plantilla/img/user/edwin.jpg';
  public selectedIndex = 0;
  public user$: Observable<UserI>;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    private navController: NavController,
    private alertCtrl: AlertController,
    private authSvc: AuthService,
  ) {
    this.initializeApp();
  }
  ngOnInit() {
    this.authSvc.userData$.subscribe(user => {
      this.user$ = this.authSvc.getUser(user.uid);
      this.user$.subscribe(us => {
        this.initValuesForm(us);
      })
      this.email = user.email;
      this.name= user.displayName;
    });
  }
  onSaveUser(user: UserI): void {
    this.authSvc.preSaveProfile(user, this.image, this.idUser);

  }
  private initValuesForm(user: UserI) {
    console.log(user);
    if (user.urlImage) {
      this.currentImage = user.urlImage;
    }
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  login() {
    this.menu.close();
    this.navController.navigateForward(['login']);
  }
  perfil() {
    this.menu.close();
    this.navController.navigateForward(['perfil']);
  }
  irEventos() {
    this.menu.close();
    this.navController.navigateForward(['eventos']);
  }
  agenda() {
    this.menu.close();
    this.navController.navigateForward(['agenda']);
  }
  deteccion() {
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
            this.authSvc.logout();
          }
        }

      ]
    });
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);

  }
}

