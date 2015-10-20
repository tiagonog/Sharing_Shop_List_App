package sharingshoplist

class Lista {

    int id;
    String name;

    static hasMany = [produtos: Produto];
    String toString(){ "$name" }

    static constraints = {
      id(blank: false, unique: true)
      name(blank: false)
    }
}
