import Produto = require('Produto');
interface BuscarProdutoLoja{
	
	buscarProduto(parametros:string):Array<Produto>;
}
export = BuscarProdutoLoja;