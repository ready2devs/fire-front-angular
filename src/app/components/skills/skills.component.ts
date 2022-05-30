import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Skills } from 'src/app/model/skills.model';
import { AuthService } from 'src/app/service/auth.service';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {

  public skills:Skills[]=[];


  isUserLogged: Boolean = false;

  skillsForm: FormGroup;


  constructor(private skillsService:SkillsService,
    private authService: AuthService,
    private formBuilder: FormBuilder) { 
      this.skillsForm = this.formBuilder.group({
        id: [''],
        nombreSkill: ['', [Validators.required]],
        porcentaje: ['', [Validators.required]],
      });
    
    }

  ngOnInit(): void {

    this.getdatosSki();

    this.isUserLogged = this.authService.isUserLogged();

  }

  // traigo skills en lista

  public getdatosSki():void{
    this.skillsService.getSkill().subscribe({
      next:(Response: Skills[]) =>{
        this.skills=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })


  }



}
