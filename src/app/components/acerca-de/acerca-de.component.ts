import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona} from 'src/app/model/persona.model';
import { AuthService } from 'src/app/service/auth.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})

export class AcercaDeComponent implements OnInit {
  
  public persona: Persona[]=[]

  public editPersona!:Persona;
  public deletePersona!: Persona;
  
  isUserLogged: Boolean = false;



  constructor(
    public personaService: PersonaService,
    private authService: AuthService,) { }

  ngOnInit(): void {
    this.getPersona();
    
    // this.personaService.getPersona().subscribe(data => {this.persona = data})

    this.isUserLogged = this.authService.isUserLogged();

  }

  // traigo persona de base de datos

  public getPersona(): void {
    this.personaService.getPersona().subscribe({
      next: (response: Persona[]) => {
        this.persona = response;
        console.log(this.persona);
      },
      error:(error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }



   // seteo de rutas de los modals

   public onOpenModal(persona:Persona, mode:string): void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.type = 'button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if(mode==='add'){
      button.setAttribute('data-target','#addPersonaModal');
    }
    else if(mode==='delete'){
      this.deletePersona=persona;
      button.setAttribute('data-target','#deletePersonaModal');
    }
    else if(mode==='edit'){
      this.editPersona=persona;
      button.setAttribute('data-target','#editPersonaModal');
    }

    container!.appendChild(button);
    button.click();


  }


  // seteo de funciones de los modals

  public onUpdatePersona(persona:Persona):void{
    this.personaService.updatePersona(persona).subscribe({
      next: (response:Persona) => {
        console.log(response);
        this.getPersona();
        
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
      
  }



}
