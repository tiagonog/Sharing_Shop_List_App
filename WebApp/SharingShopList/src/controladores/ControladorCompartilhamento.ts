import CadastroUsuario = require('../models/negocios/CadastroUsuario');
import CadastroLista = require('../models/negocios/CadastroLista');
import Usuario = require('../models/entidades/Usuario');
import Lista = require('../models/entidades/Lista');
import CompartilhamentoLista = require('../models/entidades/CompartilhamentoLista');
import CompartilhamentoUsuario = require('../models/entidades/CompartilhamentoUsuario');
import PermissaoEnum = require('../models/entidades/PermissaoEnum');
import IListaModificacaoObservable = require('../models/entidades/IListaModificacaoObservable');
class ControaladorCompartilhamento{
	private cadastroLista : CadastroLista;
	private cadastroUsuario : CadastroUsuario;
	
	public compartilhar(emailsUsuarios :{[email: string] : PermissaoEnum}, listas : Array<IListaModificacaoObservable>){
		//TODO API comunicação email
		
	}
	
	public getLista(idLista:number){
		return this.cadastroLista.getListaById(idLista);
	}
	public criarLista(lista:Lista,usuario:Usuario){
		var cLista = new CompartilhamentoLista(PermissaoEnum.ADMINISTRADOR,usuario);
		var cUsuario = new CompartilhamentoUsuario(PermissaoEnum.ADMINISTRADOR,lista);
		
		usuario.addCompartilhamento(cUsuario);
		lista.adicionarObservador(cLista);
		
		this.cadastroLista.save(lista);
		this.cadastroUsuario.save(usuario);
		
	}
	public cadastrarUsuario(usuario:Usuario){
		this.cadastroUsuario.save(usuario);
	}
	public getListas(idUsuario:number){
		return this.cadastroUsuario.getUsuarioById(idUsuario).getListas();
	}
	
	
}
export = ControaladorCompartilhamento;