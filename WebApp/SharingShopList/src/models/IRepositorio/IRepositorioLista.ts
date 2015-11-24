import Lista = require('../entidades/Lista');
interface IRepositorioLista{
	getListaById(id:number) : Lista;	
	save(lista:Lista);
	
}
export = IRepositorioLista;