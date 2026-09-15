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
  whatsapp: "",                // Formato: 55 + DDD + número (somente dígitos). Ex.: 5541999999999
  telefone: "[INSERIR TELEFONE]",       // Ex.: (41) 99999-9999
  email: "[INSERIR E-MAIL]",           // Ex.: contato@quirinobarbearia.com.br

  /* Localização ---------------------------------------------------------- */
  cidade: "[INSERIR CIDADE]",          // Ex.: Curitiba
  endereco: "[INSERIR ENDEREÇO]",      // Ex.: Rua Exemplo, 123 - Bairro
  atendimento: "[INSERIR ÁREA DE ATENDIMENTO]", // Ex.: Curitiba

  /* Funcionamento -------------------------------------------------------- */
  horario: "[INSERIR HORÁRIO]",        // Ex.: Ter a Sáb: 09h às 20h

  /* Redes Sociais -------------------------------------------------------- */
  instagram: "",
  facebook: "",

  /* Mensagens do WhatsApp ------------------------------------------------ */
  mensagemPadrao:
    "Olá! Gostaria de agendar um horário na Quirino Barbearia.",

  mensagemCorte:
    "Olá! Gostaria de agendar um corte na Quirino Barbearia.",

  mensagemBarba:
    "Olá! Gostaria de agendar um serviço de barba na Quirino Barbearia.",

  mensagemCombo:
    "Olá! Gostaria de agendar um combo de corte e barba na Quirino Barbearia.",

  mensagemAcabamento:
    "Olá! Gostaria de agendar um serviço de acabamento na Quirino Barbearia.",

  mensagemSobrancelha:
    "Olá! Gostaria de agendar um serviço de sobrancelha na Quirino Barbearia.",

  mensagemLavagem:
    "Olá! Gostaria de agendar um serviço de lavagem/finalização na Quirino Barbearia."
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