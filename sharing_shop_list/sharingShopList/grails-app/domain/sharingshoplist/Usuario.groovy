package sharingshoplist

class Usuario {

    String email;
    String password;

    String toString(){ "$email" }
    
    static hasMany = [listas: Lista];
    static constraints = {
      email( email: true, blank: false, unique: true)
      password(blank: false)
    }
}
