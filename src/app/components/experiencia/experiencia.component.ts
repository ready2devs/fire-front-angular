import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Experiencia } from 'src/app/model/experiencia.model';
import { AuthService } from 'src/app/service/auth.service';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  public experiencias:Experiencia[]=[];

  public editExperiencia!: Experiencia;
  public deleteExperiencia!: Experiencia;

  isUserLogged: Boolean = false;





  constructor(private experienciaService:ExperienciaService,
    private authService: AuthService,) { }



  ngOnInit(): void {

    this.getdatosExp();

    this.isUserLogged = this.authService.isUserLogged();

  }


    // traigo experiencias en lista

  public getdatosExp(): void {
    this.experienciaService.getExperiencia().subscribe({
      next:(Response: Experiencia[]) =>{
        this.experiencias=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }



  // seteo de rutas de los modals

  public onOpenModal(experiencia:Experiencia, mode:string): void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.type = 'button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if(mode==='add'){
      button.setAttribute('data-target','#addExperienceModal');
    }
    else if(mode==='delete'){
      this.deleteExperiencia=experiencia;
      button.setAttribute('data-target','#deleteExperienceModal');
    }
    else if(mode==='edit'){
      this.editExperiencia=experiencia;
      button.setAttribute('data-target','#editExperienceModal');
    }

    container!.appendChild(button);
    button.click();


  }


  // seteo de funciones de los modals

  public onAddExperience(addForm: NgForm): void{
    document.getElementById('add-experience-form')?.click();
    this.experienciaService.addExperiencia(addForm.value).subscribe({
      next: (response:Experiencia) => {
        console.log(response);
        this.getdatosExp();
        addForm.reset();
      },
      error: (error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      }

    })

  }

  public onUpdateExperience(experiencia:Experiencia):void{
    this.experienciaService.updateExperiencia(experiencia).subscribe({
      next: (response:Experiencia) => {
        console.log(response);
        this.getdatosExp();
        
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
      
  }


  public onDeleteExperience(id: number):void{
    
    this.experienciaService.deleteExperiencia(id).subscribe({
      next: (response:void) => {
        console.log(response);
        this.getdatosExp();
        
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
     
  }



     
  




}





