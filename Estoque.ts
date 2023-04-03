import { Produto } from "./Produto";

export class Estoque {
    private _id : number;
    private _produto : Produto;
    private _quantidade : number;

    get Id(){
        return this._id;
    }

    set Id(id) {
        this._id = id;
    }

    get Produto() {
        return this._produto;
    }

    set Produto(produto) {
        this._produto = produto;
    }

    get Quantidade(){
        return this._quantidade;
    }

    set Quantidade(quantidade){
        if(quantidade > 0){
            this._quantidade = quantidade;
        } else {
            console.log("Informe uma quantidade maior que 0(zero)!");
        }
    }
}