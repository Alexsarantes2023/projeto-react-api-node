import express from "express"
import cors from "cors"
import { produtos } from "./produtos"
import { ProdutosInterface } from "./produtos"

const app = express();

app.use(express.json());
app.use(cors());
//até aqui fizemos a configuração para trabalhar com express e cors

//criando endpoint
//http://localhost:3000/produtos
app.get("/produtos", (req, res) => {
    res.status(200).json(produtos);
    //res.send({ nome: "Gabriel" });
})

app.get("/produtos-promocao", (req, res) => {
    const produtosPromocao = produtos.filter((produto) => {
        return produto.promocao === true
    })
    res.status(200).json(produtosPromocao);
})
app.post("/criar-produto", (req, res) => {
    //console.log(req.body)
    const { nome, descricao, promocao, preco } = req.body

    const id = Math.random().toString();

    const novoProduto: ProdutosInterface = {
        id,
        nome,
        descricao,
        promocao,
        preco,
    };
    produtos.push(novoProduto)

    res.status(201).json(produtos)
})

app.put("/atualiza-produto/:id", (req, res) => {
    const params = req.params.id
    //console.log("params", params)
    const body = req.body

    const atualizaProduto = produtos.find((produto) => {
        return produto.id === params;
    })
    /*
    if (!atualizaProduto) {
        return res.status(404).send({ message: "Produto nao encontrado" })
    }

    //console.log(atualizaProduto)
    atualizaProduto.nome = body.nome || atualizaProduto.nome
    atualizaProduto.descricao = body.descricao || atualizaProduto.descricao;
    atualizaProduto.preco = body.preco || atualizaProduto.preco;
    atualizaProduto.promocao = body.promocao || atualizaProduto.promocao;

    res.status(200).json(produtos)*/

})

app.listen(3000, () => {
    console.log("Servidor esta rodando na porta http://localhost:3000");

})


/*console.log("Rodando Javascript no backEnd")

const nota = 10
console.log("O valor da nota é", nota)

//const nota:number[] = [10,5,9,2,4]
//const nome:string = "José da Silva"
//const aprovado:boolean = true

const aluno: { nome: String, idade: Number, aprovado: boolean } = {
    nome: "Jose",
    idade: 18,
    aprovado: true
}



interface AlunoInterface {
    nome: String;
    idade: Number;
    aprovado: Boolean;
    nota: number;
}

const aluno: AlunoInterface = {
    nome: "Jose",
    idade: 17,
    aprovado: true,
    nota: 10,
};
const aluno2: AlunoInterface = {
    nome: "Maria",
    idade: 17,
    aprovado: true,
    nota: 10,
};


const alunos: AlunoInterface[] = [aluno, aluno2];

function cadastrarAluno(aluno: AlunoInterface, nota: number) {
    console.log(aluno, " Sua nota é: ", nota);
};



cadastrarAluno(aluno, 9);*/