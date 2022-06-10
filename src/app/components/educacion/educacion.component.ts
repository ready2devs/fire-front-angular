import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Educacion } from 'src/app/model/educacion.model';
import { AuthService } from 'src/app/service/auth.service';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})

export class EducacionComponent implements OnInit {


  public educaciones:Educacion[]=[];

  public editEducacion!: Educacion;
  public deleteEducacion!: Educacion;


  isUserLogged: Boolean = false;

  // educationForm: FormGroup;



  constructor(
    private educacionService:EducacionService,
    private authService: AuthService,
    // private formBuilder: FormBuilder
    
    
    ) { 
     
    //   this.educationForm = this.formBuilder.group({
    //     id: [''],
    //     title: ['', [Validators.required]],
    //     detail: ['', [Validators.required]],
    //     start: ['', [Validators.required]],
    //     end: ['', [Validators.required]],
    //     institution: ['', [Validators.required]],
    //     imgEdu: ['', [Validators.required]],
    // });


    }

    

  ngOnInit(): void {

    this.getdatosEdu();

    
    this.isUserLogged = this.authService.isUserLogged();
    
    
    // this.reloadData();
    

  }


  // private reloadData() {
  //   this.educacionService.getEducacion().subscribe(
  //     (data) => {
  //       this.educaciones = data;
  //     }
  //   );
  // }


  // traigo datos en lista

  public getdatosEdu():void{
    this.educacionService.getEducacion().subscribe({
      next:(Response: Educacion[]) =>{
        this.educaciones=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }







  // seteo de funciones de los modals

  public onOpenModal(educacion:Educacion, mode:string): void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.type = 'button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if(mode==='add'){
      button.setAttribute('data-target','#addEducationModal');
    }
    else if(mode==='delete'){
      this.deleteEducacion=educacion;
      button.setAttribute('data-target','#deleteEducationModal');
    }
    else if(mode==='edit'){
      this.editEducacion=educacion;
      button.setAttribute('data-target','#editEducationModal');
    }

    container!.appendChild(button);
    button.click();


  }




  public onAddEducation(addForm: NgForm): void{
    document.getElementById('add-education-form')?.click();
    this.educacionService.addEducacion(addForm.value).subscribe({
      next: (response:Educacion) => {
        console.log(response);
        this.getdatosEdu();
        addForm.reset();
      },
      error: (error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      }

    })
     
  }



  // public onEditEducacion(educacion: Educacion){
  //   this.educacionService.updateEducation(educacion).subscribe({
  //     next: (response: Educacion) => {
  //       console.log(response);
  //       this.getdatosEdu();
  //     },
  //     error: (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   });
  // }


  public onUpdateEducation(educacion:Educacion):void{
    // this.editEducacion=educacion;
    // document.getElementById('add-education-form')?.click();
    this.educacionService.updateEducacion(educacion).subscribe({
      next: (response:Educacion) => {
        console.log(response);
        this.getdatosEdu();
        
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
     
  }


  public onDeleteEducation(id: number):void{
    
    this.educacionService.deleteEducacion(id).subscribe({
      next: (response:void) => {
        console.log(response);
        this.getdatosEdu();
        
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
     
  }






  // carga de modales educacion

  // private clearForm() {
  //   this.educationForm.setValue({
    
  //     id: '',
  //     title: '',
  //     detail: '',
  //     start: '',
  //     end: '',
  //     institution: '',
  //     imgEdu: '',



  //   })
  // }

  // private loadForm(educacion: Educacion) {
  //   this.educationForm.setValue({
  //     id: educacion.id,
  //     title: educacion.title,
  //     detail: educacion.detail,
  //     start: educacion.start,
  //     end: educacion.end,
  //     institution: educacion.institution,
  //     imgEdu: educacion.imgEdu,
  //   })
  // }

  // onSubmit(id: number) {
    

    // public addEducacion(addFormEdu: NgForm): void {
    //   this.infoService.addInfo(this.pathEdu, addFormEdu.value ).subscribe({
    //     next: () => {
    //       this.getEducaciones();
    //       addFormEdu.reset();
    //     },
    //     error: (error: HttpErrorResponse) => {
    //       (alert(error.message));
    //       addFormEdu.reset();
    //     }
    //   })
    // }






   
      // let education: Educacion = this.educationForm.value;
      // if (this.educationForm.get('id')?.value == '') {
      //   this.educacionService.addEducacion(education).subscribe(
      //     (newEducation: Educacion) => {
      //       this.educaciones.push(newEducation);
      //     }
      //   );
      // } else {
      //   this.educacionService.updateEducacion(id, education).subscribe(
      //     () => {
      //       this.reloadData();
      //     }
      //   )
      // }







    // let education: Educacion = this.educationForm.value;
    // if (this.educationForm.get('id')?.value == '') {
    //   this.educacionService.addEducacion(education).subscribe(
    //     (newEducation: Educacion) => {
    //       this.educaciones.push(newEducation);
    //     }
    //   );
    // } else {
    //   this.educacionService.updateEducacion(id, education).subscribe(
    //     () => {
    //       this.reloadData();
    //     }
    //   )
    // }
    









    // let education: Educacion = this.educationForm.value;
    // this.educacionService.addEducacion(education).subscribe(
    //     (newEducation: Educacion) => {
    //       this.educaciones.push(newEducation);
    //     }
    // );
    
    // let educacion: Educacion = this.educationForm.value;
    // if (this.educationForm.get('id')?.value == '') {
    //   this.educacionService.addEducacion(educacion).subscribe(
    //     (newEducation: Educacion) => {
    //       this.educaciones.push(newEducation);
    //     }
    //   );
    // } else {
    //   this.educacionService.updateEducacion(educacion).subscribe(
    //     () => {
    //       this.getdatosEdu();
    //     }
    //   )
    // }


  // }

  // onNewEducation() {
  //   this.clearForm();
  // }

  // onEditEducation(index: number) {
  //   let educacion: Educacion = this.educaciones[index];
  //   this.loadForm(educacion);
  // }

  // onDeleteEducation(index: number) {
  //   let educacion: Educacion = this.educaciones[index];
  //   if (confirm("¿Está seguro que desea borrar la educación seleccionada?")) {
  //     this.educacionService.deleteEducacion(id).subscribe(
  //       () => {
  //         this.reloadData();
  //       }
  //     )
  //   }
  // }

}
