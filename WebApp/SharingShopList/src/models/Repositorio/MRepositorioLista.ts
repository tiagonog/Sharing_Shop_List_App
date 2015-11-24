import IRepositorioLista = require('../IRepositorio/IRepositorioLista');
import Lista = require('../entidades/Lista');
class MRepositorioLista implements IRepositorioLista{
	
	private listas : Array<Lista>;
	
	public getListaById(id:number){
		var retorno = null;
		
		this.listas.forEach(element => {
			if(element.getId() == id){
				retorno = element;
			}
		});
		
		return retorno;
		
	}	
	public save(lista:Lista){
		this.listas.push(lista);
	}
	
	constructor(){
		this.listas = [];
	}
}
export = MRepositorioLista;