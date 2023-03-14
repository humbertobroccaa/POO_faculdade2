//Criando a classe principal Animal
class Animal {
    public nome: string;  // público, o que significa que pode ser acessada de qualquer lugar do código
    private idade: number; // privado, o que significa que só pode ser acessada dentro da própria classe Animal
    protected tipo: string; // protegida, o que significa que só pode ser acessada dentro da classe Animal e suas subclasses.

    //Definindo o construtor da classe Animal
    constructor(nome: string, idade: number, tipo: string) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    public fazerBarulho() {
        console.log(`O ${this.tipo} ${this.nome} fez barulho!`);
    }

    private contarIdade() {
        console.log(`${this.nome} tem ${this.idade} anos.`);
    }

    protected mostrarTipo() {
        console.log(`Este é um animal do tipo ${this.tipo}.`);
    }
}

// a classe Gato é uma subclasse de Animal
class Gato extends Animal {
    constructor(nome: string, idade: number) {
        super(nome, idade, 'gato');
    }

    public miar() {
        console.log(`O ${this.tipo} ${this.nome} está miando!`);
    }

    public mostrarDetalhes() {
        // acesse o método protegido da classe pai
        this.mostrarTipo();
    }
}

//instanciando um novo gato a partir de Gato
let gato = new Gato('Paçoquinha', 2);
gato.fazerBarulho(); // O gato Paçoquinha fez barulho!
gato.miar(); // O gato Paçoquinha está miando!
gato.mostrarDetalhes(); // Paçoquinha tem 2 anos. Este é um animal do tipo gato.


//a classe Cachorro é uma subclasse de Animal
class Cachorro extends Animal {
    constructor(nome: string, idade: number) {
        super(nome, idade, 'cachorro');
    }

    public latir() {
        console.log(`O ${this.tipo} ${this.nome} está latindo!`);
    }

    public mostrarDetalhes() {
        // acesse o método protegido da classe pai
        this.mostrarTipo();
    }
}

//instanciando um novo cachorro a partir de Cachorro
let cachorro = new Cachorro('Bob', 5);
cachorro.fazerBarulho(); // O cachorro Bob fez barulho!
cachorro.latir(); // O cachorro Bob está latindo!
cachorro.mostrarDetalhes(); // Bob tem 5 anos. Este é um animal do tipo cachorro.