import Usuario = require('../entidades/Usuario');
interface IRepositorioUsuario{
	getUsuarioById(id:number) : Array<Usuario>;	
	save(usuario:Usuario);
	
}