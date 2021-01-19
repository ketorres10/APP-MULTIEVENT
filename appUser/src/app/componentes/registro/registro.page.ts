import { Component, OnInit } from '@angular/core';
import { AuthService} from "../../shared/servicios/auth.service";
import { Router } from '@angular/router';
import { UserI } from 'src/app/shared/models/user.interface';
import { FormGroup, FormControl,  Validators} from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators'; 
import { Observable, Subscription } from 'rxjs';
import { Camera } from '@ionic-native/camera/ngx'
import { runInThisContext } from 'vm';
import { FileI } from 'src/app/shared/models/file.interface';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  providers: [Camera],

})
export class RegistroPage implements OnInit {

  public user: UserI;
  image;

  constructor( private auth: AuthService,private AFauth : AngularFireAuth, private router: Router,private storage: AngularFireStorage, private camara: Camera) { }
  newUserForm = new FormGroup({ 
    name: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })
  ngOnInit() {
  }
  onUploadCamera(){
    this.camara.getPicture({
      destinationType: this.camara.DestinationType.FILE_URI, 
      sourceType: this.camara.PictureSourceType.CAMERA,
      mediaType: this.camara.MediaType.PICTURE,
      allowEdit: false, 
      encodingType: this.camara.EncodingType.JPEG,
      targetHeight: 1024, 
      targetWidth: 1024,
      correctOrientation: true,
      saveToPhotoAlbum: true,
    }).then(res=>{
      this.image = res;
    }).catch(error =>{
      console.log(error);
    })
    
  }
  onUploadGaleria(){
    this.camara.getPicture({
      sourceType: this.camara.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camara.DestinationType.DATA_URL, 
    }).then((res) =>{
      this.image = 'data:image/jpeg;base64,' + res;
    }).catch(error =>{
      console.log(error);
    })
  }

  //metodo retorna una promesa
  onSubmitRegister(user: UserI){
    console.log("entro aqui", user);
    this.auth.register(user).then(auth =>{
      console.log(auth)
      this.router.navigate(['../eventos/']);
    }).catch(err=>console.log(err))
  }

}
