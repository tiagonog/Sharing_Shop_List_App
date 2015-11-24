import Usuario = require('../entidades/Usuario');
interface IRepositorioUsuario{
	getUsuarioById(id:number) : Usuario;	
	save(usuario:Usuario);
	getUsuarioByEmail(email:string) :Usuario;
	
}
export = IRepositorioUsuario;