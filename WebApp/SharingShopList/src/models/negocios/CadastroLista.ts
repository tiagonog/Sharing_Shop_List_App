import IRepositorioLista = require('../IRepositorio/IRepositorioLista');
import MRepositorioLista = require('../Repositorio/MRepositorioLista');
import Lista = require('../entidades/Lista');
class CadastroLista{
	private repositorioLista : IRepositorioLista;
	
	public save(lista:Lista){
		this.repositorioLista.save(lista);
	}
	public getListaById(idLista:number){
		return this.repositorioLista.getListaById(idLista);
	}
	public getUsersFromLista(idLista:number){
		return this.getListaById(idLista).getCompartilhamentoLista();
	}
	constructor(){
		this.repositorioLista = new MRepositorioLista();
	}

}
export = CadastroLista;