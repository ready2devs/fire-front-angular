import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  isUserLogged: Boolean = false;

  proyectosForm: FormGroup;



  constructor(private proyectosService:ProyectosService,
    private authService: AuthService,
    private formBuilder: FormBuilder) { 
      this.proyectosForm = this.formBuilder.group({
        id: [''],
        title: ['', [Validators.required]],
        detail: ['', [Validators.required]],
        start: ['', [Validators.required]],
        end: ['', [Validators.required]],
        imgProyecto: ['', [Validators.required]],
      });

 }



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




}
