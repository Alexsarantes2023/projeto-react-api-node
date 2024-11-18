export interface ProdutosInterface {
    id: string
    nome: string
    descricao: string
    preco: number
    promocao: boolean
}

export const produtos: ProdutosInterface[] = [
    {
        id: "1",
        nome: "Mouse Gamer RGB",
        descricao: "Mouse ergonômico com 7 botões programáveis e iluminação RGB.",
        preco: 150.00,
        promocao: true
    },
    {
        id: "2",
        nome: "Teclado Mecânico",
        descricao: "Teclado mecânico com switches Cherry MX e iluminação personalizável.",
        preco: 300.00,
        promocao: false
    },
    {
        id: "3",
        nome: "Monitor 4K UHD",
        descricao: "Monitor de 27 polegadas com resolução 4K e painel IPS.",
        preco: 2000.00,
        promocao: true
    },
    {
        id: "4",
        nome: "Fone de Ouvido Bluetooth",
        descricao: "Fone de ouvido sem fio com cancelamento de ruído ativo.",
        preco: 400.00,
        promocao: false
    },
    {
        id: "5",
        nome: "SSD 1TB",
        descricao: "SSD NVMe de alta velocidade com capacidade de 1TB.",
        preco: 600.00,
        promocao: true
    },
    {
        id: "6",
        nome: "Smartphone Android",
        descricao: "Smartphone com 128GB de armazenamento e câmera tripla.",
        preco: 2500.00,
        promocao: false
    },
    {
        id: "7",
        nome: "Cadeira Gamer",
        descricao: "Cadeira ergonômica com ajuste de altura e suporte lombar.",
        preco: 1200.00,
        promocao: true
    },
    {
        id: "8",
        nome: "Headset Gamer",
        descricao: "Headset com microfone removível e som surround 7.1.",
        preco: 350.00,
        promocao: false
    },
    {
        id: "9",
        nome: "Placa de Vídeo RTX 3070",
        descricao: "Placa de vídeo de última geração com 8GB de memória GDDR6.",
        preco: 3500.00,
        promocao: true
    },
    {
        id: "10",
        nome: "Notebook Ultra Slim",
        descricao: "Notebook leve e fino com processador i7 e 16GB de RAM.",
        preco: 4500.00,
        promocao: false
    }
];
