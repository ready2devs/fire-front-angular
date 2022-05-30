import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { persona } from 'src/app/model/persona.model';
import { AuthService } from 'src/app/service/auth.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona: persona = new persona("","","","","");
  
  
  isUserLogged: Boolean = false;

  personaForm: FormGroup;

  // personaForm: FormGroup;
 

  constructor(
    public personaService: PersonaService,
    private authService: AuthService,
    private formBuilder: FormBuilder) { 
      this.personaForm = this.formBuilder.group({
        id: [''],
        nombre: ['', [Validators.required]],
        apellido: ['', [Validators.required]],
        titulo: ['', [Validators.required]],
        about: ['', [Validators.required]],
        fotoPerfil: ['', [Validators.required]],
      });
   


  }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data})

    this.isUserLogged = this.authService.isUserLogged();

  
  }

}
