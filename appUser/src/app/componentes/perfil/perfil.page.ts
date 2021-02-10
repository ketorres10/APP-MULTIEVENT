import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,  Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { FileI } from 'src/app/shared/models/file.interface';
import { UserI } from 'src/app/shared/models/user.interface';
import { AuthService } from 'src/app/shared/servicios/auth.service';
import { UserService } from 'src/app/shared/servicios/user.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  public image: any;
  public currentImage: string = 'https://www.tuplanweb.com/proyecto/Plantilla/img/user/edwin.jpg';
  public user$: Observable<UserI>;
  public idUser: string;
  clickedImage: string;
  public base64Image: any;
  //public image2: any;

  constructor(private authSvc: AuthService, public camara: Camera) { }
  profileForm = new FormGroup({
    displayName: new FormControl('', Validators.required),
    email: new FormControl({ value: '', disable: true }, Validators.required),
    photoURL: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  })
  ngOnInit() {
    this.authSvc.userData$.subscribe(user => {
      this.user$ = this.authSvc.getUser(user.uid);
      this.user$.subscribe(us => {
        this.initValuesForm(us);
      })
      this.idUser = user.uid;
    });
  }
  onSaveUser(user: UserI): void {
    this.authSvc.preSaveProfile(user, this.base64Image, this.idUser);
  }
  private initValuesForm(user: UserI) {
    console.log(user);
    if (user.urlImage) {
      this.currentImage = user.urlImage;
    }
    this.profileForm.patchValue({
      displayName: user.displayName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      description: user.description,
    })
  }

  handleImage(image: string): void {
    this.image = image;
  }
  onUploadGaleria() {
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
    }).catch(error => {
      console.log(error);
    })
  }

}

