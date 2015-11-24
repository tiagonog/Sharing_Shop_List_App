import IRepositorioUsuario = require('../IRepositorio/IRepositorioUsuario');
import Usuario = require('../entidades/Usuario');
class CadastroUsuario{
	private repositorioUsuario : IRepositorioUsuario;
	
	public save(usuario:Usuario){
		this.repositorioUsuario.save(usuario);
	}
	public getUsuarioById(idUsuario:number){
		return this.repositorioUsuario.getUsuarioById(idUsuario);
	}
	public getListaFromUsers(idUsuario:number){
		return this.repositorioUsuario.getUsuarioById(idUsuario).getListas();
	}
	public getUsuarioByEmail(email:string){
		return this.repositorioUsuario.getUsuarioByEmail(email);
	}
	constructor(repositorioUsuario : IRepositorioUsuario){
		this.repositorioUsuario = repositorioUsuario;
	}
}
export = CadastroUsuario;