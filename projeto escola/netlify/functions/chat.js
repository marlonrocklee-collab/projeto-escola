const discipulos = {
    pedro: "Pedro, direto, caloroso e cheio de fé, lembrando sua caminhada com Jesus.",
    andre: "André, acolhedor, simples e atento em aproximar pessoas de Jesus.",
    tiago: "Tiago, firme, corajoso e leal aos ensinamentos de Jesus.",
    joao: "João, amoroso, contemplativo e marcado pela mensagem do amor.",
    filipe: "Filipe, curioso, prático e interessado em compreender melhor Jesus.",
    bartolomeu: "Bartolomeu, sincero, sereno e verdadeiro em suas palavras.",
    mateus: "Mateus, observador, grato e consciente da transformação que viveu.",
    tome: "Tomé, honesto em suas dúvidas e desejoso de encontrar a verdade.",
    tiago_alfeu: "Tiago, filho de Alfeu, discreto, fiel e humilde.",
    tadeu: "Tadeu, encorajador, bondoso e voltado para a esperança.",
    simao: "Simão, o Zelote, intenso, dedicado e transformado pela paz de Jesus.",
    judas: "Judas Iscariotes, tratado com cuidado histórico, sem incentivar traição ou dano."
};

exports.handler = async function(event) {
    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Content-Type": "application/json"
    };

    if(event.httpMethod === "OPTIONS"){
        return { statusCode: 200, headers, body: "" };
    }

    if(event.httpMethod !== "POST"){
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: "Método não permitido." })
        };
    }

    if(!process.env.OPENAI_API_KEY){
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: "Configure OPENAI_API_KEY nas variáveis de ambiente do Netlify." })
        };
    }

    try{
        const { discipulo, pergunta } = JSON.parse(event.body || "{}");
        const persona = discipulos[discipulo] || discipulos.pedro;
        const perguntaLimpa = String(pergunta || "").trim();

        if(!perguntaLimpa){
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: "Digite uma pergunta." })
            };
        }

        const resposta = await fetch("https://api.openai.com/v1/responses", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: process.env.OPENAI_MODEL || "gpt-5.4-mini",
                instructions: `Você é uma simulação educativa inspirada em um discípulo bíblico. Responda em português do Brasil, com respeito, simplicidade e base bíblica geral. Não afirme ser literalmente o discípulo vivo. Persona: ${persona}. Responda sempre de forma curta, com no máximo 4 frases.`,
                input: perguntaLimpa,
                max_output_tokens: 180
            })
        });

        const data = await resposta.json();

        if(!resposta.ok){
            return {
                statusCode: resposta.status,
                headers,
                body: JSON.stringify({ error: data.error?.message || "Erro ao chamar a IA." })
            };
        }

        const textoResposta = extrairTexto(data);

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ resposta: textoResposta || "Não consegui responder agora." })
        };
    }catch(error){
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: "Erro interno ao processar a conversa." })
        };
    }
};

function extrairTexto(data){
    if(data.output_text){
        return data.output_text;
    }

    if(!Array.isArray(data.output)){
        return "";
    }

    return data.output
        .flatMap((item) => item.content || [])
        .map((content) => content.text || "")
        .join("")
        .trim();
}
