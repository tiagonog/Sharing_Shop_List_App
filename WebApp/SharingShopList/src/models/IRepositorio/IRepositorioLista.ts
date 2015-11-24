import Lista = require('../entidades/Lista');
interface IRepositorioLista{
	getListaById(id:number) : Array<Lista>;	
	save(lista:Lista);
	
}