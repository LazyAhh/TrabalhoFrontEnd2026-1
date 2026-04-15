const livros = [
  {
    id: 1,
    nome: "A Lista de Schindler",
    autor: "Thomas Keneally",
    paginas: "424",
    genero: ["Drama"],
    descricao: "A Lista de Schindler é um daqueles livros que recusam o conforto do esquecimento. No auge da barbárie nazista, quando trens partiam regularmente para Auschwitz, o industrial alemão Oskar Schindler erguia uma improvável fortaleza de humanidade: sua fábrica, onde centenas de judeus encontravam abrigo — e de onde seriam transferidos em segurança para a Tchecoslováquia. Ter o nome naquela lista significava, simplesmente, continuar vivo. Thomas Keneally reconstrói esse episódio com a paixão de um romancista e a fidelidade de um historiador, após dois anos entrevistando sobreviventes in sete países. O resultado é uma obra que habita a fronteira rara entre o documento e a literatura. Esta edição especial traz capa dura e pintura trilateral.",
    imagem: "/assets/a-lista-de-schindler.webp"
  },
  {
    id: 2,
    nome: "Orgulho e Preconceito",
    autor: "Jane Austen",
    paginas: "576",
    genero: ["Romance"],
    descricao: "Na Inglaterra do final do século XVIII, nascer mulher e sem dote era, quase sempre, uma sentença. Elizabeth Bennet recusa essa lógica. Aos vinte anos, filha de um pai espirituoso e imprudente, Lizzy enfrenta o mundo com a lucidez de uma filósofa e a irreverência de quem não se dobra a convenções — nem mesmo diante do altivo Fitzwilliam Darcy. Jane Austen constrói, neste romance, algo maior do que uma história de amor: é uma crítica precisa à futilidade imposta às mulheres de sua época, narrada pela voz de uma heroína que é, ao mesmo tempo, Cinderela e iluminista. A felicidade que Lizzy conquista ao final não lhe foi dada — foi defendida, argumento por argumento.",
    imagem: "/assets/orgulho-e-preconceito.webp"
  },
  {
    id: 3,
    nome: "É Assim Que Acaba",
    autor: "Colleen Hoover",
    paginas: "368",
    genero: ["Romance", "Drama"],
    descricao: "Lily construiu a vida que queria: saiu do interior do Maine, formou-se em marketing e abriu sua própria floricultura em Boston. Quando conhece Ryle — confiante, teimoso, avesso a relacionamentos — o que começa como atração se transforma em algo muito mais complexo e perturbador. Colleen Hoover narra, com sensibilidade e coragem, como o amor e o abuso podem coexistir numa confusão de sentimentos difícil de nomear e ainda mais difícil de abandonar. É o romance mais pessoal de sua carreira: direto nos temas que a sociedade prefere não encarar — violência doméstica, abuso psicológico — e preciso na pergunta que deixa no ar: quando tudo dói, como se enxerga a saída? Uma obra que já ultrapassou um milhão de exemplares vendidos no Brasil e se tornou fenômeno mundial.",
    imagem: "/assets/e-assim-que-acaba.webp"
  },
  {
    id: 4,
    nome: "Vermelho, Branco e Sangue Azul",
    autor: "Casey McQuiston",
    paginas: "392",
    genero: ["Romance"],
    descricao: "Alex Claremont-Diaz tem tudo mapeado: o charme, a ambição e o sobrenome certo para uma carreira política tão brilhante quanto a de seus pais. O que não estava no roteiro era Henry — o príncipe britânico mais adorado do mundo, com quem Alex não se suporta — e muito menos a foto dos dois caídos sobre o bolo real estampada em todos os jornais do planeta. Para conter o estrago diplomático, uma solução improvável: fingir amizade por um fim de semana. Casey McQuiston constrói, a partir desse encontro acidental, uma história que é ao mesmo tempo comédia política e romance de formação — onde o que estava planejado desmorona, e o que parecia impossível começa, aos poucos, a fazer todo o sentido.",
    imagem: "/assets/vermelho-branco-e-sangue-azul.webp"
  },
  {
    id: 5,
    nome: "O Hobbit",
    autor: "J.R.R. Tolkien",
    paginas: "336",
    genero: ["Aventura"],
    descricao: "Bilbo Bolseiro não queria aventuras. Queria seu cachimbo, sua poltrona e a paz previsível do Condado. Então Gandalf bateu à sua porta. O que começa como um convite improvável — lançado por Thorin Escudo-de-Carvalho, príncipe dos Anãos, em busca de um tesouro perdido — transforma-se numa jornada por toda a extensão perigosa da Terra-média: trols imensos, gobelins nas Montanhas Nevoentas, as sombras antigas da Trevamata e, ao fim do caminho, a Montanha Solitária, onde Smaug, o Dourado, dorme sobre riquezas incalculáveis. Tolkien escreveu em 1937 um livro que recusa ser apenas infantil ou apenas épico — e talvez seja exatamente isso que o faz atravessar décadas e continuar arrebatando leitores de todas as idades.",
    imagem: "/assets/o-hobbit.webp"
  },
  {
    id: 6,
    nome: "O Alquimista",
    autor: "Paulo Coelho",
    paginas: "208",
    genero: ["Aventura", "Drama"],
    descricao: "Santiago é um jovem pastor andaluz com um sonho recorrente e a coragem improvável de levá-lo a sério. Sua jornada rumo ao Egito — em busca de um tesouro escondido entre as Pirâmides — vai revelando, a cada encontro, que o caminho importa tanto quanto o destino: uma cigana, um rei misterioso e um alquimista surgem como guias, cada um apontando não para o ouro, mas para dentro. Com uma prosa que habita a fronteira entre o romance e a parábola, Paulo Coelho construiu em O Alquimista algo raro: um livro que há mais de trinta anos encontra leitores nos momentos em que eles mais precisam ser lembrados de ouvir a si mesmos.",
    imagem: "/assets/o-alquimista.webp"
  },
  {
    id: 7,
    nome: "As Crônicas de Nárnia",
    autor: "C.S. Lewis",
    paginas: "768",
    genero: ["Aventura"],
    descricao: "Um guarda-roupa. Uma passagem. Um mundo inteiro do outro lado. O que começou com O Leão, a Feiticeira e o Guarda-roupa expandiu-se em sete histórias que, juntas, formam um dos universos ficcionais mais duradouros da literatura. Em Nárnia, a magia não é ornamento — é a linguagem do mundo, e por ela passam batalhas épicas, criaturas inesquecíveis e verdades que reaparecem diferentes a cada idade em que se lê. C.S. Lewis construiu algo que transcende o gênero: uma épica que fala à criança e ao adulto com a mesma seriedade. Esta edição reúne os sete volumes em ordem cronológica, conforme preferência do próprio autor, e traz as ilustrações originais de Pauline Baynes.",
    imagem: "/assets/as-cronicas-de-narnia.webp"
  },
  {
    id: 8,
    nome: "Duna",
    autor: "Frank Herbert",
    paginas: "680",
    genero: ["Sci-Fi", "Aventura"],
    descricao: "Vencedor dos prêmios Hugo e Nebula, Duna não é apenas um romance de ficção científica — é um universo inteiro erguido sobre areia, profecia e poder. Em Arrakis, planeta desértico e inclemente, está a especiaria mais preciosa da galáxia, e quem a controla, controla tudo. É nessa disputa que o jovem Paul Atreides se vê lançado, numa narrativa que é ao mesmo tempo aventura épica, parábola política e meditação sobre ecologia e messianismo. Frank Herbert escreveu em 1965 um livro cuja sombra se estende por toda a cultura que veio depois. Esta edição traz introdução de Neil Gaiman.",
    imagem: "/assets/duna.webp"
  },
  {
    id: 9,
    nome: "Project Hail Mary",
    autor: "Andy Weir",
    paginas: "598",
    genero: ["Sci-Fi", "Aventura"],
    descricao: "Ryland Grace acorda sozinho, a milhões de quilômetros de casa, sem memória e com dois cadáveres por companhia. Aos poucos, as lembranças retornam — e com elas, o peso de uma verdade devastadora: ele é o único sobrevivente da última tentativa da humanidade de evitar sua própria extinção. Andy Weir constrói uma aventura interestelar que é, ao mesmo tempo, um exercício brilhante de ficção científica e uma história surpreendentemente humana sobre descoberta, improviso e companhia inesperada. Project Hail Mary leva o leitor a lugares onde a ciência e o maravilhamento se encontram — e onde salvar o mundo depende de resolver, sozinho, o maior quebra-cabeça já imaginado. Ou quase sozinho.",
    imagem: "/assets/project-hail-mary.webp"
  },
  {
    id: 10,
    nome: "Frankenstein",
    autor: "Mary Shelley",
    paginas: "288",
    genero: ["Sci-Fi", "Terror", "Drama"],
    descricao: "Escrito numa noite tempestuosa de 1816 por uma jovem de dezoito anos, Frankenstein carrega desde sua origem algo de sobrenatural. Mary Shelley não inventou apenas um monstro — inventou um espelho. O que o doutor Frankenstein cria em seu laboratório não é simplesmente uma criatura: é a consequência da ambição sem limites, da solidão sem resposta e do orgulho que confunde criação com domínio. Clássico fundador da ficção científica e da literatura gótica, o romance ressoa hoje com a mesma inquietação de sempre — porque a pergunta que ele faz nunca envelheceu. Esta edição especial traz ilustrações de Amanda Miranda e prefácio de Cláudia Fusco.",
    imagem: "/assets/frankeinstein.webp"
  },
  {
    id: 11,
    nome: "It: A Coisa",
    autor: "Stephen King",
    paginas: "1104",
    genero: ["Terror", "Drama"],
    descricao: "Derry parece uma cidade comum — e é exatamente aí que mora o perigo. Em 1958, sete crianças que se chamam a si mesmas de Clube dos Otários descobrem que os monstros que cada um via separadamente eram, na verdade, o mesmo: uma presença antiga e maligna, capaz de assumir qualquer forma e encontrar o medo mais fundo de cada um. Stephen King constrói um romance que é simultaneamente terror e ode à infância — ao que ela tem de luminoso e ao que ela tem de irreversível. Quase trinta anos depois, os sete se reencontram: Derry voltou a sangrar, e a promessa feita no verão de 1958 ainda está de pé. Porque algumas coisas só podem ser enfrentadas por quem já as enfrentou antes.",
    imagem: "/assets/it-a-coisa.webp"
  },
  {
    id: 12,
    nome: "Drácula",
    autor: "Bram Stoker",
    paginas: "648",
    genero: ["Terror", "Romance"],
    descricao: "Drácula desafia a imagem popularizada pelo cinema: esqueça o dândi sedutor de capa preta. O vampiro original de Bram Stoker é um aristocrata sombrio e frequentemente repulsivo, cuja chegada a Londres — viabilizada por um ingênuo agente imobiliário — representa uma ameaça que transcende a mera sobrevivência. No duelo que se desenrola entre o conde e um grupo de adversários determinados, incluindo o professor Van Helsing e a perspicaz Mina Harker, o que está em jogo é nada menos do que a alma do Ocidente. Esta edição enriquecida traz introdução e notas de Maurice Hindle e prefácio de Christopher Frayling.",
    imagem: "/assets/dracula.webp"
  }
];

export default livros;