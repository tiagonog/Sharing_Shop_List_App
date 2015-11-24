import Usuario = require('Usuario');
import PermissaoEnum = require('PermissaoEnum');
interface IListaObserver{
	getUsuario() : Usuario;	
	getPermissao() : PermissaoEnum;	
	notificar();
}
export = IListaObserver;