import CompartilhamentoUsuario = require('CompartilhamentoUsuario');
class Usuario{
	private id :number;
	private email : string;
	private password : string;
	private listas : Array<CompartilhamentoUsuario>;
	
	constructor(email : string,password:string){
		this.email = email;
		this.password = password;
		this.listas = [];
	}
	
	public getId(){
		return this.id;
	}
	public setId(id : number){
		this.id = id;
	}
	public getEmail(){
		return this.email;
	}
	public setEmail(email : string){
		this.email = email;
	}
	public getPassword(){
		return this.password;
	}
	public setPassword(Password : string){
		this.password = Password;
	}
	public getListas(){
		return this.listas;
	}
	public addCompartilhamento(compartilhamento:CompartilhamentoUsuario){
		this.listas.push();
	}
	public removerCompartilhamento(compartilhamento : CompartilhamentoUsuario){
		this.listas.forEach(element =>{
			if(element.getLista==compartilhamento.getLista){
				delete this.listas[this.listas.indexOf(element)];
			}
		});
	}
}
export = Usuario;