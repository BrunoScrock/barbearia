/* ==========================================================================
   CONFIGURAÇÃO CENTRALIZADA — QUIRINO BARBEARIA
   --------------------------------------------------------------------------
   Altere aqui as informações da empresa em um único lugar.
   Sempre que precisar atualizar dados (WhatsApp, endereço, horário, etc.),
   edite este arquivo.
   ========================================================================== */

const CONFIG = {

  /* Nome e identidade ---------------------------------------------------- */
  empresa: "Quirino Barbearia",
  logoNome: "Quirino",
  subtitulo: "Barbearia",
  tagline: "Estilo, precisão e personalidade",
  slogan: "Cortes masculinos, barba e cuidados para quem valoriza seu estilo.",

  /* Contato -------------------------------------------------------------- */
  whatsapp: "5541995205096",          // Formato: 55 + DDD + número (somente dígitos). Ex.: 5541999999999
  telefone: "(41) 99520-5096",        // Ex.: (41) 99999-9999

  /* Avaliação no Google -------------------------------------------------- */
  // Link do botão "Nos avalie" (perfil da barbearia no Google Maps).
  // No Google Maps: Perfil do negócio → Compartilhar → Copiar link e incluir /reviews,
  // ou use o link direto do formulário de avaliação (ex.: https://g.page/r/XXXX/review)
  avaliacaoUrl: "https://search.google.com/local/writereview?placeid=ChIJA28EHt3h3JQRwd1M0D8Tixs",

  /* Localização ---------------------------------------------------------- */
  cidade: "Curitiba",                 // Ex.: Curitiba
  endereco: "Rua José Valle, 1334 - Santa Felicidade", // Ex.: Rua Exemplo, 123 - Bairro
  atendimento: "Santa Felicidade, Curitiba", // Ex.: Curitiba

  /* Funcionamento -------------------------------------------------------- */
  horario: "Seg a Sex: 09h às 19h | Sáb: 09h às 17h30 | Dom: fechado", // horário completo (seção Onde estamos)
  horarioResumo: "Seg a Sex 09h–19h · Sáb 09h–17h30", // horário resumido (badge do Hero)

  /* Redes Sociais -------------------------------------------------------- */
  instagram: "https://www.instagram.com/quirino.barbearia/",

  /* Mensagens do WhatsApp ------------------------------------------------ */
  // A barbearia não trabalha com agendamento: o atendimento é por ordem de
  // chegada. As mensagens abaixo são usadas para tirar dúvidas, não marcar.
  mensagemPadrao:
    "Olá! Gostaria de mais informações sobre o atendimento da Quirino Barbearia.",

  mensagemCorte:
    "Olá! Gostaria de mais informações sobre os cortes da Quirino Barbearia.",

  mensagemBarba:
    "Olá! Gostaria de mais informações sobre o serviço de barba da Quirino Barbearia.",

  mensagemCombo:
    "Olá! Gostaria de mais informações sobre o combo corte + barba da Quirino Barbearia.",

  mensagemAcabamento:
    "Olá! Gostaria de mais informações sobre o serviço de acabamento da Quirino Barbearia.",

  mensagemSobrancelha:
    "Olá! Gostaria de mais informações sobre o serviço de sobrancelha da Quirino Barbearia.",

  mensagemLavagem:
    "Olá! Gostaria de mais informações sobre o serviço de lavagem/finalização da Quirino Barbearia."
};

/* ==========================================================================
   PORTFÓLIO — TRABALHOS REALIZADOS
   --------------------------------------------------------------------------
   Para adicionar/alterar um trabalho, edite um item abaixo.
   - tag: categoria exibida no cartão
   - titulo: nome do serviço/trabalho
   - descricao: resumo curto
   - imagem: foto principal (capa)
   - imagens: lista de fotos da galeria lightbox
   - categoria: filtro (Corte / Barba / Combo / Estilo)
   ========================================================================== */

const PORTFOLIO = [
  // Pasta: corte-01  ->  categoria CORTES
  {
    tag: "Corte",
    titulo: "Cortes",
    descricao: "Cortes personalizados, modernos e com acabamento impecável.",
    imagem: "assets/images/portfolio/corte-01/corte-02.png",
    imagens: [
      "assets/images/portfolio/corte-01/corte-02.png",
      "assets/images/portfolio/corte-01/corte-03.png",
      "assets/images/portfolio/corte-01/corte-04.png",
      "assets/images/portfolio/corte-01/corte-08.png",
      "assets/images/portfolio/corte-01/corte-14.png",
      "assets/images/portfolio/corte-01/corte-22.jpg",
      "assets/images/portfolio/corte-01/corte-24.png"
    ],
    categoria: "Corte"
  },
  // Pasta: corte-02  ->  categoria BARBAS
  {
    tag: "Barba",
    titulo: "Barbas",
    descricao: "Modelagem e acabamento de barba com atenção ao detalhe.",
    imagem: "assets/images/portfolio/corte-02/corte-09.png",
    imagens: [
      "assets/images/portfolio/corte-02/corte-09.png",
      "assets/images/portfolio/corte-02/corte-13.png",
      "assets/images/portfolio/corte-02/corte-15.png",
      "assets/images/portfolio/corte-02/corte-20.jpg"
    ],
    categoria: "Barba"
  },
  // Pasta: corte-03  ->  categoria COMBOS
  {
    tag: "Combo",
    titulo: "Combos",
    descricao: "Visual completo: corte e barba no mesmo atendimento.",
    imagem: "assets/images/portfolio/corte-03/corte-12.png",
    imagens: [
      "assets/images/portfolio/corte-03/corte-12.png",
      "assets/images/portfolio/corte-03/corte-17.png",
      "assets/images/portfolio/corte-03/corte-18.png",
      "assets/images/portfolio/corte-03/corte25.png"
    ],
    categoria: "Combo"
  },
  // Pasta: corte-04  ->  categoria ESTILOS
  {
    tag: "Estilo",
    titulo: "Estilos",
    descricao: "Degradê preciso e finalização impecável, no estilo que você procura.",
    imagem: "assets/images/portfolio/corte-04/corte-01.png",
    imagens: [
      "assets/images/portfolio/corte-04/corte-01.png",
      "assets/images/portfolio/corte-04/corte-05.png",
      "assets/images/portfolio/corte-04/corte-06.png",
      "assets/images/portfolio/corte-04/corte-07.png",
      "assets/images/portfolio/corte-04/corte-10.png",
      "assets/images/portfolio/corte-04/corte-11.png",
      "assets/images/portfolio/corte-04/corte-16.png",
      "assets/images/portfolio/corte-04/corte-19.png",
      "assets/images/portfolio/corte-04/corte-21.png",
      "assets/images/portfolio/corte-04/corte-23.png"
    ],
    categoria: "Estilo"
  }
];