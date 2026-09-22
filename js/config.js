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
  // IMAGENS DEMONSTRATIVAS (Unsplash). Substitua pelas fotos reais em:
  // assets/images/portfolio/corte-01/ ... corte-04/
  {
    tag: "Corte",
    titulo: "Corte Masculino",
    descricao: "Corte personalizado, moderno e com acabamento impecável.",
    imagem: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1000&q=70",
    imagens: [
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1000&q=70",
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1000&q=70",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=70"
    ],
    categoria: "Corte"
  },
  {
    tag: "Barba",
    titulo: "Barba Estilizada",
    descricao: "Modelagem e acabamento de barba com atenção ao detalhe.",
    imagem: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=1000&q=70",
    imagens: [
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=1000&q=70",
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1000&q=70"
    ],
    categoria: "Barba"
  },
  {
    tag: "Combo",
    titulo: "Combo Corte + Barba",
    descricao: "Visual completo: corte e barba no mesmo atendimento.",
    imagem: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1000&q=70",
    imagens: [
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1000&q=70",
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1000&q=70"
    ],
    categoria: "Combo"
  },
  {
    tag: "Estilo",
    titulo: "Corte Degradê",
    descricao: "Degradê preciso e finalização impecável, no estilo que você procura.",
    imagem: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1000&q=70",
    imagens: [
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1000&q=70",
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=1000&q=70",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=70"
    ],
    categoria: "Estilo"
  }
];