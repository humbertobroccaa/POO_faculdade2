import { Fornecedor } from "./Fornecedor";

export class Produto {
    private _id : number;
    private _descricao : string;
    protected _fornecedor : Fornecedor;
    private _valorUnitario : number;

    get Id(){
        return this._id;
    }

    set Id(id){
        this._id = id;
    }

    get Descricao(){
        return this._descricao;
    }

    set Descricao(descricao) {
        this._descricao = descricao;
    }

    get Fornecedor() {
        return this._fornecedor;
    }

    set Fornecedor(fornecedor) {
        this._fornecedor = fornecedor;
    }

    get ValorUnitario() {
        return this._valorUnitario;
    }

    set ValorUnitario(valorUnitario){
        if(valorUnitario > 0){
            this._valorUnitario = valorUnitario;
        } else {
            console.log("Insira um valor maior que 0(zero)!");
        }
    }

    valorDoProdutoEmEstoque(){
        console.log(`O produto ${this.Descricao}, tem o valor de R$${this._valorUnitario} no estoque`)
    }
}

