import IBuscarProdutoLoja = require('../models/entidades/IBuscarProdutoLoja');
class ControladorBuscaProdutos{
	private buscarProdutoLoja: IBuscarProdutoLoja;
	
	public buscarProduto(parametros:string){
		return this.buscarProdutoLoja.buscarProduto(parametros);
	}	
	constructor(buscarProdutoLoja: IBuscarProdutoLoja){
		this.buscarProdutoLoja = buscarProdutoLoja;
	}
	
}
export = ControladorBuscaProdutos;