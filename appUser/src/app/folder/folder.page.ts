import { Component, OnInit } from '@angular/core';
//importar la clase auth.service.ts
//importar el servicio
import { AuthService } from "../shared/servicios/auth.service";
//import { ConsoleReporter } from 'jasmine';
import { Router } from "@angular/router";
  import { from } from 'rxjs';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  email:string;
  password: string;
 
  //en ves de authservice
  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit() {
   // this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  onSubmitEntrar(){
    //referencia del AuthService que se inyecto en la clase
   
      this.router.navigate(['/login']);
    
  }

}
