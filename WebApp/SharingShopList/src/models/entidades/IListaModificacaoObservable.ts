import IListaObserver = require('IListaObserver');
interface IListaModificacaoObservable{
	notificarTodos();
	adicionarObservador(usuario: IListaObserver);
	removerObservador(usuario : IListaObserver);
}
export = IListaModificacaoObservable;