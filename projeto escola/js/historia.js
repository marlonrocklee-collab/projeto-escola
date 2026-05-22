function mostrar(num){

    const discipulos = [
        { titulo: "Pedro", texto: "Pedro foi um dos discípulos mais próximos de Jesus e é lembrado por sua liderança entre os apóstolos." },
        { titulo: "André", texto: "André era irmão de Pedro e foi um dos primeiros discípulos chamados por Jesus." },
        { titulo: "Tiago", texto: "Tiago, filho de Zebedeu, fazia parte do grupo mais próximo de Jesus junto com Pedro e João." },
        { titulo: "João", texto: "João, irmão de Tiago, é lembrado como o discípulo amado e acompanhou momentos importantes do ministério de Jesus." },
        { titulo: "Filipe", texto: "Filipe foi chamado por Jesus e também ajudou a apresentar outras pessoas ao Mestre." },
        { titulo: "Bartolomeu", texto: "Bartolomeu é tradicionalmente identificado com Natanael, reconhecido por sua sinceridade." },
        { titulo: "Mateus", texto: "Mateus era cobrador de impostos antes de seguir Jesus e é associado ao Evangelho de Mateus." },
        { titulo: "Tomé", texto: "Tomé ficou conhecido por desejar ver as marcas de Jesus ressuscitado para crer." },
        { titulo: "Tiago, filho de Alfeu", texto: "Tiago, filho de Alfeu, também fez parte dos doze apóstolos escolhidos por Jesus." },
        { titulo: "Tadeu", texto: "Tadeu, também chamado Judas Tadeu, foi um dos discípulos de Jesus." },
        { titulo: "Simão, o Zelote", texto: "Simão, o Zelote, recebeu esse nome provavelmente por sua ligação com um grupo zeloso da época." },
        { titulo: "Judas Iscariotes", texto: "Judas Iscariotes foi o discípulo que traiu Jesus, entregando-o às autoridades." }
    ];

    const discipulo = discipulos[num - 1];
    const card = document.getElementById("card");
    const titulo = document.getElementById("titulo");
    const texto = document.getElementById("texto");

    if(!discipulo || !card || !titulo || !texto){
        return;
    }

    titulo.innerText = discipulo.titulo;
    texto.innerText = discipulo.texto;
    card.style.display = "block";
}

function abrirHistoria(num){

    let titulo = "";
    let texto = "";

    switch(num){

        case 0:

            titulo = "Acesso";

            texto = `
            A entrada da Nova Jerusalém marca o início da trajetória dos visitantes pelos cenários bíblicos.

            Esse acesso simboliza a chegada à antiga Jerusalém, preparando o público para acompanhar os momentos mais importantes da vida, morte e ressurreição de Jesus.

            Ao atravessar os portões, o visitante inicia uma jornada de fé, reflexão e conhecimento histórico.
            `;

        break;

        case 1:

            titulo = "Sermão da Montanha";

            texto = `
            O Sermão da Montanha é um dos ensinamentos mais importantes de Jesus, registrado no Evangelho de Mateus.

            Ele foi pregado em uma montanha para uma grande multidão que o seguia, e nele Jesus ensinou princípios fundamentais do Reino de Deus.

            Nesse sermão, Jesus apresenta as Bem-aventuranças, ensinando que são felizes aqueles que são humildes, misericordiosos, puros de coração e que buscam a justiça.

            Jesus também ensina sobre o amor ao próximo, o perdão e a confiança em Deus.

            O Sermão da Montanha é considerado um resumo da ética cristã.
            `;

        break;

        case 2:

            titulo = "Templo";

            texto = `
            Após ser preso, Jesus foi levado ao Sinédrio, tribunal religioso dos judeus formado por líderes e sacerdotes.

            O julgamento aconteceu em meio a falsas acusações e testemunhos contraditórios.

            Mesmo sem provas concretas, Jesus foi acusado de blasfêmia ao afirmar ser o Filho de Deus.

            Depois disso, ele foi entregue às autoridades romanas para continuação do julgamento.
            `;

        break;

        case 3:

            titulo = "Cenáculo";

            texto = `
            O Cenáculo foi o local onde Jesus celebrou a Última Ceia com seus discípulos.

            Nesse momento, ele anunciou que seria traído e instituiu a Santa Ceia.

            Jesus partiu o pão e compartilhou o vinho, representando seu corpo e sangue.

            Também lavou os pés dos discípulos, ensinando humildade e serviço ao próximo.
            `;

        break;

        case 4:

            titulo = "Horto das Oliveiras";

            texto = `
            O Horto das Oliveiras, também chamado Getsêmani, foi o local onde Jesus orou antes de ser preso.

            Em profunda angústia, ele pediu forças a Deus para enfrentar o sofrimento que viria.

            Enquanto orava, Judas chegou acompanhado de soldados romanos e o traiu com um beijo.

            Esse momento marca o início da prisão de Jesus.
            `;

        break;

        case 5:

            titulo = "Palácio de Herodes";

            texto = `
            Jesus foi levado até Herodes Antipas durante o julgamento.

            Herodes queria vê-lo realizar milagres, mas Jesus permaneceu em silêncio diante das perguntas e acusações.

            Os soldados zombaram dele, vestindo roupas luxuosas como forma de humilhação.

            Depois disso, Herodes o enviou novamente a Pilatos.
            `;

        break;

        case 6:

            titulo = "Fórum de Pilatos";

            texto = `
            No Fórum de Pilatos aconteceu o julgamento romano de Jesus.

            Pilatos não encontrou culpa suficiente para condená-lo, mas sofreu pressão da multidão.

            Mesmo reconhecendo sua inocência, autorizou a crucificação.

            Antes disso, lavou as mãos diante do povo, tentando demonstrar que não queria se responsabilizar pela sentença.
            `;

        break;

        case 7:

            titulo = "Via Sacra";

            texto = `
            A Via Sacra representa o caminho percorrido por Jesus carregando a cruz até o Calvário.

            Após sofrer açoites e humilhações, Jesus caminhou pelas ruas de Jerusalém em meio à multidão.

            Em determinado momento, Simão de Cirene foi obrigado a ajudá-lo a carregar a cruz.

            Esse percurso simboliza sofrimento, entrega e perseverança.
            `;

        break;

        case 8:

            titulo = "Calvário";

            texto = `
            O Calvário foi o local da crucificação de Jesus.

            Após ser condenado, ele foi pregado na cruz entre dois criminosos.

            Mesmo sofrendo, Jesus pronunciou palavras de perdão e amor.

            Sua morte representa, para os cristãos, o sacrifício pela humanidade e o símbolo máximo da redenção.
            `;

        break;

        case 9:

            titulo = "Túmulo";

            texto = `
            Após a crucificação, Jesus foi colocado em um túmulo escavado na rocha.

            Uma grande pedra fechava a entrada e soldados romanos faziam a guarda do local.

            Segundo os evangelhos, no terceiro dia o túmulo foi encontrado vazio.

            Esse acontecimento deu origem à crença na ressurreição de Jesus.
            `;

        break;

        case 10:

            titulo = "Lago de Betesda";

            texto = `
            O tanque de Betesda era conhecido pelas águas consideradas milagrosas.

            Segundo a tradição, um homem enfermo há muitos anos foi curado por Jesus nesse local.

            O episódio demonstra o poder de cura e a compaixão de Jesus pelas pessoas sofridas.
            `;

        break;

        case 11:

            titulo = "Palácio dos Asmoneus";

            texto = `
            O Palácio dos Asmoneus fazia parte da antiga estrutura política e administrativa de Jerusalém.

            O local representa o contexto histórico e político vivido durante a época de Jesus.

            Era símbolo de autoridade e poder na antiga cidade.
            `;

        break;

        case 12:

            titulo = "Praça das Ovelhas";

            texto = `
            A Praça das Ovelhas era uma região próxima ao templo onde animais eram comercializados para sacrifícios religiosos.

            O local faz parte do cenário econômico e religioso da Jerusalém antiga.

            Também representa o ambiente frequentado diariamente pelo povo da cidade.
            `;

        break;
    }

    document.getElementById("titulo-historia").innerText = titulo;

    document.getElementById("texto-historia").innerText = texto;

    document.getElementById("card-historia").style.display = "block";
}

/* FECHAR CARD */

function fecharHistoria(){

    document.getElementById("card-historia").style.display = "none";

}

/* FECHAR CLICANDO FORA */

window.addEventListener("click", function(event){

    let card = document.getElementById("card-historia");

    if(!card){
        return;
    }

    let clicouNoCard = card.contains(event.target);

    let clicouNaArea = event.target.classList.contains("area");

    if(card.style.display == "block" && !clicouNoCard && !clicouNaArea){

        card.style.display = "none";

    }

});
