import CadastroLista = require('../models/negocios/CadastroLista');
import Produto = require('../models/entidades/Produto');
import Lista = require('../models/entidades/Lista');
class ControladorLista{
	private cadastroLista : CadastroLista;
	
	public getLista(idLista:number){
		return this.cadastroLista.getListaById(idLista);
	}
	public adicionarProdutoLista(produtos:Array<Produto>,lista:Lista){
		produtos.forEach(produto => {
			lista.addProduto(produto);
		});
		
		this.cadastroLista.save(lista);
	}
	constructor(cadastroLista: CadastroLista){
		this.cadastroLista = cadastroLista;
	}
}
export = ControladorLista;