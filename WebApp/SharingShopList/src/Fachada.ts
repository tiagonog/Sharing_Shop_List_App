import ControladorCompartilhamento = require('controladores/ControladorCompartilhamento');
import ControladorLista = require('controladores/ControladorLista');
import ControladorBuscaProdutos = require('controladores/ControladorBuscaProdutos');
import CadastroUsuario = require('models/negocios/CadastroUsuario');
import CadastroLista = require('models/negocios/CadastroLista');
import Produto = require('models/entidades/Produto');
import Usuario = require('models/entidades/Usuario');
import Lista = require('models/entidades/Lista');
import PermissaoEnum = require('models/entidades/PermissaoEnum');

class Fachada{
	private controladorCompartilhamento : ControladorCompartilhamento;
	private controladorLista : ControladorLista;
	private controladorBuscaProdutos : ControladorBuscaProdutos;
	
	private root : Usuario;
	
	constructor(){
		//User Root
		this.root = new Usuario("123@abc.com", "123")
		
		var cUsuario = new CadastroUsuario();
		var cLista = new CadastroLista();
		
		this.controladorCompartilhamento = new ControladorCompartilhamento(cLista,cUsuario);
		this.controladorLista = new ControladorLista(cLista);
		this.controladorBuscaProdutos = new ControladorBuscaProdutos(null);
		//TODO
	}
	
	public buscarProduto(params:string){
		return this.controladorBuscaProdutos.buscarProduto(params);
	}
	public compartilharListas(){
		//TODO
	}
	public criarLista(lista:Lista,usuario:Usuario){
		if(usuario == null){
			this.controladorCompartilhamento.criarLista(lista,this.root);
		}else{
			this.controladorCompartilhamento.criarLista(lista,usuario)
		}

	}
	public atualizarLista(lista:Lista){
		this.controladorCompartilhamento.editarLista(lista);
	}
	public getListasByUser(idUsuario:number){
		return this.controladorCompartilhamento.getListas(idUsuario);
	}
	public criarUsuario(usuario:Usuario){
		this.controladorCompartilhamento.cadastrarUsuario(usuario);
	}
	public adicionarProdutoLista(produtos: Array<Produto>,lista:Lista){
		this.controladorLista.adicionarProdutoLista(produtos,lista);
	}
	
	
}
export = Fachada;