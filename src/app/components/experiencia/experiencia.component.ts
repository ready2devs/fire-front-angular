import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  isUserLogged: Boolean = false;

  experienciaForm: FormGroup;



  constructor(private experienciaService:ExperienciaService,
    private authService: AuthService,
    private formBuilder: FormBuilder) { 
      this.experienciaForm = this.formBuilder.group({
        id: [''],
        title: ['', [Validators.required]],
        detail: ['', [Validators.required]],
        start: ['', [Validators.required]],
        end: ['', [Validators.required]],
        institution: ['', [Validators.required]],
        imgEdu: ['', [Validators.required]],
      });

 }



  ngOnInit(): void {

    this.getdatosExp();

    this.isUserLogged = this.authService.isUserLogged();

  }
    // traigo experiencias en lista

  public getdatosExp():void{
    this.experienciaService.getExperiencia().subscribe({
      next:(Response: Experiencia[]) =>{
        this.experiencias=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })


  }




}
