import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,  Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { FileI } from 'src/app/shared/models/file.interface';
import { UserI } from 'src/app/shared/models/user.interface';
import { AuthService } from 'src/app/shared/servicios/auth.service';
import { UserService } from 'src/app/shared/servicios/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  public image: FileI;
  public currentImage: string = 'https://www.tuplanweb.com/proyecto/Plantilla/img/user/edwin.jpg';
  public user$: Observable<UserI>;
  public idUser: string;
  constructor(private authSvc: AuthService) { }
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
    this.authSvc.preSaveProfile(user, this.image, this.idUser);

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
      description: user.description
    })
  }
  handleImage(image: FileI): void {
    this.image = image;
  }

}

