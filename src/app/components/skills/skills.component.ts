import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
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

  public editSkill!: Skills;
  public deleteSkill!: Skills;
  isUserLogged: Boolean = false;

 


  constructor(private skillsService:SkillsService,
    private authService: AuthService,) { }

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


  // seteo de rutas de los modals

  public onOpenModal(skill:Skills, mode:string): void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.type = 'button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if(mode==='add'){
      button.setAttribute('data-target','#addSkillModal');
    }
    else if(mode==='delete'){
      this.deleteSkill=skill;
      button.setAttribute('data-target','#deleteSkillModal');
    }
    else if(mode==='edit'){
      this.editSkill=skill;
      button.setAttribute('data-target','#editSkillModal');
    }

    container!.appendChild(button);
    button.click();


  }


 // seteo de funciones de los modals

 public onAddSkill(addForm: NgForm): void{
  document.getElementById('add-skill-form')?.click();
  this.skillsService.addSkill(addForm.value).subscribe({
    next: (response:Skills) => {
      console.log(response);
      this.getdatosSki();
      addForm.reset();
    },
    error: (error:HttpErrorResponse)=>{
      alert(error.message);
      addForm.reset();
    }

  })

}

public onUpdateSkill(skill:Skills):void{
  this.skillsService.updateSkill(skill).subscribe({
    next: (response:Skills) => {
      console.log(response);
      this.getdatosSki();
      
    },
    error:(error:HttpErrorResponse)=>{
      alert(error.message);
    }
  })
    
}


public onDeleteSkill(id: number):void{
  
  this.skillsService.deleteSkill(id).subscribe({
    next: (response:void) => {
      console.log(response);
      this.getdatosSki();
      
    },
    error:(error:HttpErrorResponse)=>{
      alert(error.message);
    }
  })
   
}



}
