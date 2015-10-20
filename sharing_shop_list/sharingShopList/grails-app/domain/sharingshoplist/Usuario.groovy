package sharingshoplist

class Usuario {

    String email;
    String password;

    static hasMany = [listas: Lista];
    static constraints = {
      email( email: true, blank: false, unique: true)
      password(blank: false)
    }
}
