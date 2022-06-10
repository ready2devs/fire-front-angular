import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Proyectos } from 'src/app/model/proyectos.model';
import { AuthService } from 'src/app/service/auth.service';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})


export class ProyectosComponent implements OnInit {

  public proyectos:Proyectos[]=[];

  public editProyecto!: Proyectos;
  public deleteProyecto!: Proyectos;

  isUserLogged: Boolean = false;




  constructor(private proyectosService:ProyectosService,
    private authService: AuthService,) { }



  ngOnInit(): void {

    this.getdatosPro();

    this.isUserLogged = this.authService.isUserLogged();

  }

  // traigo proyectos en lista

  public getdatosPro():void{
    this.proyectosService.getProyecto().subscribe({
      next:(Response: Proyectos[]) =>{
        this.proyectos=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })

  }


  // seteo de rutas de los modals

  public onOpenModal(proyecto:Proyectos, mode:string): void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.type = 'button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if(mode==='add'){
      button.setAttribute('data-target','#addProyectoModal');
    }
    else if(mode==='delete'){
      this.deleteProyecto=proyecto;
      button.setAttribute('data-target','#deleteProyectoModal');
    }
    else if(mode==='edit'){
      this.editProyecto=proyecto;
      button.setAttribute('data-target','#editProyectoModal');
    }

    container!.appendChild(button);
    button.click();


  }


  // seteo de funciones de los modals

  public onAddProyecto(addForm: NgForm): void{
    document.getElementById('add-proyecto-form')?.click();
    this.proyectosService.addProyecto(addForm.value).subscribe({
      next: (response:Proyectos) => {
        console.log(response);
        this.getdatosPro();
        addForm.reset();
      },
      error: (error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      }

    })

  }

  public onUpdateProyecto(proyecto:Proyectos):void{
    this.proyectosService.updateProyecto(proyecto).subscribe({
      next: (response:Proyectos) => {
        console.log(response);
        this.getdatosPro();
        
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
      
  }


  public onDeleteProyecto(id: number):void{
    
    this.proyectosService.deleteProyecto(id).subscribe({
      next: (response:void) => {
        console.log(response);
        this.getdatosPro();
        
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
     
  }






}
