export class persona{
    id?: Number;
    nombre: String;
    apellido: String;
    titulo: String;
    about: String;
    fotoPerfil: String;

    constructor(nombre: String, apellido: String, titulo: String, about: String, fotoPerfil: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.titulo = titulo;
        this.about = about;
        this.fotoPerfil = fotoPerfil;

    }
}
