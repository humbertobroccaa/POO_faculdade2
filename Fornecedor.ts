export class Fornecedor {
    private _id : number;
    private _nome_razaoSocial : string;
    private _cpf_cnpj : string;
    private _telefone: number;
    private _endereco : string;

    get Id() {
        return this._id;
    }

    set Id(id) {
        this._id = id;
    }

    get Nome_razaoSocial() {
        return this._nome_razaoSocial;
    }

    set Nome_razaoSocial(nome_razaoSocial) {
        this._nome_razaoSocial = nome_razaoSocial;
    }

    get Cpf_Cnpj() {
        return this._cpf_cnpj;
    }

    set Cpf_Cnpj(cpf_cnpj) {
        this._cpf_cnpj = cpf_cnpj;
    }

    get Telefone() {
        return this._telefone;
    }

    set Telefone(telefone) {
        this._telefone = telefone;
    }

    get Endereco() {
        return this._endereco;
    }

    set Endereco(endereco) {
        this._endereco = endereco;
    }
}