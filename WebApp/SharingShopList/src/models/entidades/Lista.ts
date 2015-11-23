import Produto = require('Produto');
import IListaObserver = require('IListaObserver');
import IListaModificacaoObservable = require('IListaModificacaoObservable');
class Lista implements IListaModificacaoObservable{
	private id : number;
	private nome : string;
	private produtos : Array<Produto>;
	private compartilhamentosLista : Array<IListaObserver>;
	
	constructor(nome : string){
		this.nome = nome;
		this.produtos = [];
		this.compartilhamentosLista = [];
	}
	
	public getId(){
		return this.id;
	}
	public setId(id : number){
		this.id = id;
	}
	public getNome(){
		return this.nome;
	}
	public setNome(nome : string){
		this.nome = nome;
	}
	
	public addProduto(produto : Produto) : void{
		this.produtos.push(produto);
	}
	
	public getProdutos(){
		return this.produtos;
	}
	public setProdutos(produtos:Array<Produto>){
		this.produtos = produtos;
	}
	public notificarTodos(){
		this.compartilhamentosLista.forEach(element => {
			element.notificar();
		});
	}
	public adicionarObservador(usuario: IListaObserver){
		this.compartilhamentosLista.push(usuario);
	}
	public removerObservador(usuario : IListaObserver){

		this.compartilhamentosLista.forEach(element =>{
			if(element.getUsuario==usuario.getUsuario){
				delete this.compartilhamentosLista[this.compartilhamentosLista.indexOf(element)];
			}
		});
	}
	
	
	public toString() : string{
		return " Eu sou a lista "+this.nome+" e tenho: "+this.produtos.length+" produtos";
	}
	
	
}
export = Lista;