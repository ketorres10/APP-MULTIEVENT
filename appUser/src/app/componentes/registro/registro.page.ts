import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/servicios/auth.service";
import { Router } from '@angular/router';
import { UserI } from 'src/app/shared/models/user.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FileI } from 'src/app/shared/models/file.interface';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController, LoadingController, MenuController, NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],

})
export class RegistroPage implements OnInit {

  public user: UserI;
  public currentImage: string = 'https://www.tuplanweb.com/proyecto/Plantilla/img/user/edwin.jpg';
  public image: any;
  clickedImage: string;
  public base64Image: any;

  constructor(private auth: AuthService, private AFauth: AngularFireAuth, private router: Router, private storage: AngularFireStorage, public camara: Camera, private alertCtrl: AlertController, private navController: NavController, private authservice: AuthService) {

  }
  newUserForm = new FormGroup({
    displayName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
  })
  ngOnInit() {
  }

onUploadGaleria() {
  console.log("sdsd");
  this.camara.getPicture({
    sourceType: this.camara.PictureSourceType.PHOTOLIBRARY,
    destinationType: this.camara.DestinationType.DATA_URL,
    mediaType: this.camara.MediaType.PICTURE,
    allowEdit: false,
    encodingType: this.camara.EncodingType.JPEG,
    targetHeight: 1024,
    targetWidth: 1024,
    correctOrientation: true,
    saveToPhotoAlbum: true,
  }).then((res) => {
    this.base64Image = 'data:image/png;base64,' + res;
    this.clickedImage = res;
    //this.handleImage(this.clickedImage);
  }).catch(error => {
    console.log(error);
  })
}

onUploadCamera() {
  this.camara.getPicture({
    destinationType: this.camara.DestinationType.DATA_URL,
    encodingType: this.camara.EncodingType.JPEG,
    mediaType: this.camara.MediaType.PICTURE,
    allowEdit: false,
    targetHeight: 1024,
    targetWidth: 1024,
    correctOrientation: true,
    saveToPhotoAlbum: true,
  }).then(res => {
    this.base64Image = 'data:image/png;base64,' + res;
    this.clickedImage = res;
    //this.handleImage(this.clickedImage);
  }).catch(error => {
    console.log(error);
  })
}

//metodo retorna una promesa
onSubmitRegister(user: UserI) {
  console.log('image', this.clickedImage);
  if(this.base64Image){
    this.auth.preSaveProfile(user, this.base64Image);
  }else{
    this.auth.preSaveProfile(user);
  }
  
  /*     console.log("entro aqui", user);
      this.auth.register(user).then(auth => {
        console.log(user);
        this.router.navigate(['../eventos/']);
      }).catch(err => console.log(err)) */
}
  /*  handleImage(image: string): void {
       this.image = image;
     } */

}
