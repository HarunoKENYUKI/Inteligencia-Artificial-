const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia...",
        alternativas: [
            { texto: "Isso é assustador!", afirmacao: "No início ficou com medo do que essa tecnologia pode fazer." },
            { texto: "Isso é maravilhoso!", afirmacao: "Quis saber como usar IA no seu dia a dia." }
        ]
    },
    {
        enunciado: "Um robô está ajudando na sua casa. Como você reage?",
        alternativas: [
            { texto: "Fico desconfiado.", afirmacao: "Observou cada movimento do robô antes de confiar." },
            { texto: "Aproveito a ajuda!", afirmacao: "Ficou feliz em deixar o robô fazer as tarefas." }
        ]
    },
    {
        enunciado: "No trabalho, um software inteligente começa a sugerir ideias para seus projetos...",
        alternativas: [
            { texto: "Prefiro minhas próprias ideias.", afirmacao: "Decidiu confiar mais na própria criatividade." },
            { texto: "Ouço o que ele tem a dizer.", afirmacao: "Usou a IA para melhorar ainda mais seus projetos." }
        ]
    },
    {
        enunciado: "Você vê uma notícia dizendo que IA criou uma cura para uma doença rara...",
        alternativas: [
            { texto: "Que incrível!", afirmacao: "Sentiu esperança no futuro da medicina." },
            { texto: "Será que é seguro?", afirmacao: "Decidiu pesquisar muito antes de confiar." }
        ]
    },
    {
        enunciado: "No futuro, quase todos usam óculos de realidade aumentada...",
        alternativas: [
            { texto: "Quero um também!", afirmacao: "Mergulhou no mundo da realidade aumentada." },
            { texto: "Prefiro o mundo real.", afirmacao: "Continuou vivendo sem depender da tecnologia." }
        ]
    }
];

let atual = 0;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    const perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = "";

    perguntaAtual.alternativas.forEach(alternativa => {
        const botao = document.createElement("button");
        botao.textContent = alternativa.texto;
        botao.addEventListener("click", () => {
            historiaFinal += alternativa.afirmacao + " ";
            atual++;
            mostraPergunta();
        });
        caixaAlternativas.appendChild(botao);
    });
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    caixaAlternativas.innerHTML = "";
    escreverTexto(historiaFinal);
}

// Efeito de digitação no resultado
function escreverTexto(texto) {
    let i = 0;
    textoResultado.textContent = "";
    const intervalo = setInterval(() => {
        textoResultado.textContent += texto.charAt(i);
        i++;
        if (i >= texto.length) clearInterval(intervalo);
    }, 50);
}

mostraPergunta();
