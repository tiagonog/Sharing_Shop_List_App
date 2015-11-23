class Produto{
	private status : string;
	private categoria : string;
	private preco : number;
	private regiao : string;
	private marca : string;
	private nome : string;
	
	constructor(nome : string, status : string, categoria : string, preco : number, regiao :string, marca : string){
		this.nome = nome;
		this.status = status;
		this.categoria = categoria;
		this.preco = preco;
		this.regiao = regiao;
		this.marca = marca;
	}
	
	public getStatus(){
		return status;
	}
	public setStatus(status : string){
		this.status = status;
	}
	public getCategoria(){
		return this.categoria;
	}
	public setCategoria(categoria:string){
		this.categoria = categoria;
	}
	public getPreco(){
		return this.preco;
	}
	public setPreco(preco:number){
		this.preco = preco;
	}
	public getRegiao(){
		return this.regiao;
	}
	public setRegiao(regiao:string){
		this.regiao = regiao;
	}
	public getMarca(){
		return this.marca;
	}
	public setMarca(marca:string){
		this.marca = marca;
	}
	public getNome(){
		return this.nome;
	}
	public setNome(nome:string){
		this.nome = nome;
	}
}

export = Produto;