/* ==========================================================================
   CONSENTIMENTO DE COOKIES — LGPD
   --------------------------------------------------------------------------
   Substitua GA_MEASUREMENT_ID pelo seu ID do Google Analytics 4 (ex: G-XXXXXXXXXX)
   ========================================================================== */

const GA_MEASUREMENT_ID = "G-NFJFE2Q8B6"; // ID do Google Analytics 4 configurado

const COOKIE_NAME = "quirino_cookie_consent";
const CONSENT_GRANTED = "granted";
const CONSENT_DENIED = "denied";

const cookieBanner = document.getElementById("cookie-banner");
const btnAceitar = document.getElementById("cookie-btn-aceitar");
const btnRecusar = document.getElementById("cookie-btn-recusar");

// Verifica se o usuário já deu consentimento
function obterConsentimento() {
  const valor = localStorage.getItem(COOKIE_NAME);
  return valor === CONSENT_GRANTED || valor === CONSENT_DENIED ? valor : null;
}

// Salva o consentimento no localStorage
function salvarConsentimento(valor) {
  localStorage.setItem(COOKIE_NAME, valor);
}

// Carrega o Google Analytics apenas após o consentimento
function carregarGoogleAnalytics() {
  if (GA_MEASUREMENT_ID === "G-XXXXXXXXXX") {
    console.warn("Google Analytics: ID de medição não configurado em js/cookie-consent.js");
    return;
  }

  // Cria a camada de dados
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID);

  // Injeta o script do Google Analytics
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
}

// Exibe o banner se não houver consentimento
if (!obterConsentimento()) {
  cookieBanner.classList.add("ativo");
}

// Evento: aceitar cookies
btnAceitar.addEventListener("click", () => {
  salvarConsentimento(CONSENT_GRANTED);
  cookieBanner.classList.remove("ativo");
  carregarGoogleAnalytics();
});

// Evento: recusar cookies (apenas não carrega o GA, mas salva a escolha)
btnRecusar.addEventListener("click", () => {
  salvarConsentimento(CONSENT_DENIED);
  cookieBanner.classList.remove("ativo");
});

// Se já houver consentimento concedido, carrega o GA imediatamente
if (obterConsentimento() === CONSENT_GRANTED) {
  carregarGoogleAnalytics();
}
