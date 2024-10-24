// Classe Herói
class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome,
        this.idade = idade,
        this.tipo = this.decidirTipo(tipo.toLowerCase());
    }
    // Função para decidir o tipo do herói
    decidirTipo(tipo){
        switch(tipo){
            case "mago":
                return "mago";
            case "guerreiro":
                return "guerreiro";
            case "monge":
                return "monge";
            case "ninja":
                return "ninja";
            default:
                return "Desconhecido";
        }
    }
    atacar(){
        // Dicionário com ataques para cada tipo de herói
        const ataques = {
            mago: "magia",
            guerreiro: "espada",
            monge: "artes marciais",
            ninja: "shuriken"
        };

        // Obtém o ataque baseado no tipo de herói
        const ataque = ataques[this.tipo] || "Ataque desconhecido";

        // Exibe a mensagem do ataque
        console.log(`O ${this.tipo} atacou usando ${ataque}.`)
    }
}

// Exemplos
const heroi1 = new heroi("Arthur", 30, "guerreiro");
heroi1.atacar(); // Saída: O guerreiro atacou usando espada.

const heroi2 = new heroi("Merlin", 50, "Mago");
heroi2.atacar(); // Saída: O mago atacou usando magia.