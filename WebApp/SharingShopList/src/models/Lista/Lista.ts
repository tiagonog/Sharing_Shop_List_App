import Produto = require('../Produto/Produto');

class Lista{
	private id : number;
	private nome : string;
	private produtos:Array<Produto>;
	
	constructor(nome : string){
		this.nome = nome;
		this.produtos = [];
	}
	//todo get setters
	
	private adicionarProduto(produto : Produto) : void{
		this.produtos.push(produto);
	}
	
	public toString() : string{
		return " Eu sou a lista "+this.nome+" e tenho: "+this.produtos.length+" produtos";
	}
	
	
}

export = Lista;