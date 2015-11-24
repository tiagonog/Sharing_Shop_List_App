import IRepositorioUsuario = require('../IRepositorio/IRepositorioUsuario');
import Usuario = require('../entidades/Usuario');
class MRepositorioUsuario implements IRepositorioUsuario{
	
	private usuarios : Array<Usuario>;
	
	public getUsuarioById(id:number){
		var retorno = null;
		
		this.usuarios.forEach(element => {
			if(element.getId() == id){
				retorno = element;
			}
		});
		
		return retorno;
		
	}
	public getUsuarioByEmail(email:string){
			var retorno = null;
		
		this.usuarios.forEach(element => {
			if(element.getEmail() == email){
				retorno = element;
			}
		});
		
		return retorno;
		}	
	public save(usuario:Usuario){
		this.usuarios.push(usuario);
	}
	
	constructor(){
		this.usuarios = [];
	}
}
export = MRepositorioUsuario;