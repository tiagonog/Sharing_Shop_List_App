import PermissaoEnum = require('PermissaoEnum');
import Lista = require('Lista');
class CompartilhamentoUsuario{
	private permissao:PermissaoEnum;
	private lista:Lista;
	
	constructor(permissao:PermissaoEnum,lista:Lista){
		this.permissao = permissao;
		this.lista = lista;
	}
	
	public getPermissao(){
		return this.permissao;
	}
	public setPermissao(permissao : PermissaoEnum){
		this.permissao = permissao;
	}
	public getLista(){
		return this.lista;
	}
	public setLista(lista : Lista){
		this.lista = lista;
	}
	
}
export = CompartilhamentoUsuario;