import PermissaoEnum = require('PermissaoEnum');
import Usuario = require('Usuario');
import IListaObserver = require('IListaObserver');

class CompartilhamentoLista implements IListaObserver{
	private permissao : PermissaoEnum;
	private usuario: Usuario;
	
	constructor(permissao:PermissaoEnum,usuario:Usuario){
		this.permissao = permissao;
		this.usuario = usuario;
	}
	public getPermissao() : PermissaoEnum {
		return this.permissao;
	}
	public setPermissao(permissao : PermissaoEnum){
		this.permissao = permissao;
	}
	public getUsuario(): Usuario{
		return this.usuario;
	}
	public setUsuario(usuario : Usuario){
		this.usuario = usuario;
	}
	
	public notificar(){
		//TODO integração com email
	}
}
export = CompartilhamentoLista;