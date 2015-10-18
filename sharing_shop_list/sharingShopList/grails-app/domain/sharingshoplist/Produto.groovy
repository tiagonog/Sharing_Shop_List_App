package sharingshoplist

class Produto {

    String status;
    String categoria;
    Double preco;
    String regiao;
    String marca;
    String nome;

    String toString(){ "$nome" }


    static constraints = {
      preco(blank: false)
      nome(blank: false)
      marca(blank: false)
    }
}
