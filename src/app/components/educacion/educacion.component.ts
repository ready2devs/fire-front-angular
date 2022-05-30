import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  isUserLogged: Boolean = false;

  educationForm: FormGroup;



  constructor(
    private educacionService:EducacionService,
    private authService: AuthService,
    private formBuilder: FormBuilder) { 
      this.educationForm = this.formBuilder.group({
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

    this.getdatosEdu();

    
    this.isUserLogged = this.authService.isUserLogged();
    
    

  }

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

  // onSubmit() {
  //   let educacion: Educacion = this.educationForm.value;
  //   if (this.educationForm.get('id')?.value == '') {
  //     this.educacionService.addEducacion(educacion).subscribe(
  //       (newEducation: Educacion) => {
  //         this.educaciones.push(newEducation);
  //       }
  //     );
  //   } else {
  //     this.educacionService.updateEducacion(educacion).subscribe(
  //       () => {
  //         this.getdatosEdu();
  //       }
  //     )
  //   }
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
  //     this.educacionService.deleteEducacion(educacion.id).subscribe(
  //       () => {
  //         this.getdatosEdu();
  //       }
  //     )
  //   }
  // }

}
