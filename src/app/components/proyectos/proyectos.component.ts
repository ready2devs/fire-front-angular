import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos.model';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})


export class ProyectosComponent implements OnInit {

  public proyectos:Proyectos[]=[];

  constructor(private proyectosService:ProyectosService,)  { }

  ngOnInit(): void {

    this.getdatosPro();

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




}
