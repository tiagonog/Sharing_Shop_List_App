import IBuscarProdutoLoja = require('IBuscarProdutoLoja');
import Produto = require('Produto');
class BuscarProdutoAdapter implements IBuscarProdutoLoja{
	
	public buscarProduto(parametros:string){
		return [];
	}
}
export = BuscarProdutoAdapter;