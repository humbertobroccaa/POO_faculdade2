import { Estoque } from "./Estoque";
import { Fornecedor } from "./Fornecedor";
import { Produto } from "./Produto";

let fornecedor = new Fornecedor();
fornecedor.Id = 1;
fornecedor.Nome_razaoSocial = 'Nome Teste';
fornecedor.Cpf_Cnpj = '103.095.649-99';
fornecedor.Telefone = 48998296117;
fornecedor.Endereco = 'Rua Teste';

console.table(fornecedor);

let produto = new Produto();

produto.Id = 1;
produto.Descricao = "Milho";
produto.Fornecedor = fornecedor;
produto.ValorUnitario = 10;

console.table(produto);

let estoque = new Estoque();
estoque.Id = 1;
estoque.Produto = produto;
estoque.Quantidade = 50;

produto.valorDoProdutoEmEstoque();

//confirmar que as validações estão funcioando 

let fornecedorDois = new Fornecedor();
fornecedorDois.Id = 2;
fornecedorDois.Nome_razaoSocial = 'Nome Teste Segundo';
fornecedorDois.Cpf_Cnpj = '123.015.619-00';
fornecedorDois.Telefone = 48992355117;
fornecedorDois.Endereco = 'Rua Teste Dois';

let produtoDois = new Produto();

produtoDois.Id = 2;
produtoDois.Descricao = "Soja";
produtoDois.Fornecedor = fornecedorDois;
produtoDois.ValorUnitario = 0;

let estoqueDois = new Estoque();
estoqueDois.Id = 2;
estoqueDois.Produto = produtoDois;
estoqueDois.Quantidade = 0;