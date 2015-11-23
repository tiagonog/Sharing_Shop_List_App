class Usuario{
	private id :number;
	private email : string;
	private password : string;
	
	constructor(email : string,password:string){
		this.email = email;
		this.password = password;
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
	
}
export = Usuario;