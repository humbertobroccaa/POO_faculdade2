class Veiculo {
    protected velocidade: number;

    constructor(velocidade: number) {
        this.velocidade = velocidade;
    }

    public verificarVelocidade(): void {
        const limiteVelocidade = 100;
        const tolerancia = limiteVelocidade * 0.05;

        if (this.velocidade > limiteVelocidade + tolerancia) {
            this.notificarInfracao();
        } else {
            console.log('Velocidade dentro do limite da via.');
        }
    }

    protected notificarInfracao(): void {
    
    }
}

class Carro extends Veiculo {
    private _modelo: string
    private _ano: number
    private _placa: string

      constructor(velocidade: number, modelo: string, ano: number, placa: string) {
        super(velocidade);
        this._modelo = modelo
        this._modelo = modelo
        this._ano = ano
        this._modelo = modelo
        this._placa = placa
    }

    public acelerar(velocidade: number): void {
        this.velocidade += velocidade;
        this.verificarVelocidade();
    }

    protected notificarInfracao(): void {
        console.log(`Seu carro modelo ${this._modelo}, ano ${this._ano}, placa ${this._placa} foi multado por excesso de velocidade, ${this.velocidade} km, em uma via que o permitido era de 100 km mais 5% de tolerância!`);
    }
}

class Caminhao extends Veiculo {
    private _modelo: string
    private _ano: number
    private _placa: string

    constructor(velocidade: number, modelo: string, ano: number, placa: string) {
        super(velocidade);
        this._modelo = modelo
        this._ano = ano
        this._modelo = modelo
        this._placa = placa
    }

    public acelerar(velocidade: number): void {
        this.velocidade += velocidade;
        this.verificarVelocidade();
    }

    protected notificarInfracao(): void {
        console.log(`Seu caminhão modelo ${this._modelo}, ano ${this._ano}, placa ${this._placa} foi multado por excesso de velocidade, ${this.velocidade} km, em uma via que o permitido era de 100 km mais 5% de tolerância!`);
    }
}

const carro = new Carro(100, 'Gol', 2009, 'MGO3B84');
carro.acelerar(30);

const caminhao = new Caminhao(100, 'Volvo FH16', 2013, 'RSX693');
caminhao.acelerar(5);
