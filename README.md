# Quirino Barbearia

Site institucional profissional e responsivo da **Quirino Barbearia** — barbearia
moderna e premium em Santa Felicidade, Curitiba. Atendimento por ordem de chegada
(sem agendamento) e geração de avaliações no Google.

Desenvolvido com **HTML5, CSS3 e JavaScript ES6+** (projeto 100% estático,
pronto para hospedagem gratuita em GitHub Pages, Netlify, Vercel e
Cloudflare Pages).

---

## Estrutura

```text
quirino-barbearia/
├── index.html
├── robots.txt
├── sitemap.xml
├── llms.txt
├── .gitignore
├── css/
│   └── style.css
├── js/
│   ├── config.js        <- CONFIGURAÇÃO CENTRALIZADA (dados da empresa)
│   └── script.js        <- funcionalidades do site
└── assets/
    └── images/
        ├── logo/        <- logo e favicon
        ├── hero/        <- foto de fundo da primeira tela
        ├── sobre/       <- foto da seção "Sobre"
        ├── servicos/    <- fotos dos serviços (reserva)
        └── portfolio/   <- trabalhos (corte-01/ ... corte-04/)
```

> As imagens atuais são **demonstrativas (Unsplash)** e devem ser substituídas
> por fotos reais da barbearia antes da publicação.

---

## Como executar

Opção 1 — Python:

```bash
python -m http.server 8000
```

Opção 2 — Node:

```bash
npx serve .
```

Depois acesse: <http://localhost:8000>

---

## Como alterar dados

As principais informações da empresa ficam centralizadas em **`js/config.js`**:

```javascript
const CONFIG = {
  empresa: "Quirino Barbearia",
  whatsapp: "",      // 55 + DDD + número (somente dígitos)
  telefone: "",
  cidade: "",
  endereco: "",
  atendimento: "",
  horario: "",
  avaliacaoUrl: "",  // link de avaliação no Google ("Nos avalie")
  instagram: "",
  // mensagens do WhatsApp...
};
```

Edite apenas esse arquivo — o restante do site é preenchido automaticamente.

## Como alterar imagens

Coloque as fotos reais nas pastas e atualize os caminhos:

```text
assets/images/hero/      -> foto de fundo do Hero (atual: url do Unsplash no index.html)
assets/images/sobre/     -> foto da seção "Sobre" (idem)
assets/images/servicos/  -> fotos dos serviços (se usadas)
assets/images/portfolio/ -> fotos dos trabalhos (usadas via js/config.js)
```

**Atenção:** as imagens de fundo do Hero e da seção "Sobre" apontam para URLs
da Unsplash dentro do `index.html`. Para usar imagens locais, troque o
`src` da imagem correspondente por `assets/images/hero/...` e
`assets/images/sobre/...`.

## Como adicionar novo trabalho

Em **`js/config.js`**, edite o array `PORTFOLIO`:

```javascript
const PORTFOLIO = [
  {
    tag: "Corte",
    titulo: "Corte Masculino",
    descricao: "Descrição do trabalho.",
    imagem: "assets/images/portfolio/corte-05/imagem-01.jpg",
    imagens: [
      "assets/images/portfolio/corte-05/imagem-01.jpg",
      "assets/images/portfolio/corte-05/imagem-02.jpg"
    ],
    categoria: "Corte"   // Corte | Barba | Combo | Estilo (para os filtros)
  }
];
```

A galeria (Coverflow + Lightbox) é montada automaticamente.

## Como alterar WhatsApp

Em **`js/config.js`**:

```javascript
CONFIG.whatsapp = "5541999999999";
```

Formato: **55 + DDD + número**, somente dígitos.

## Como alterar o link de avaliação no Google

Os botões "Nos avalie" (cabeçalho, hero e botão flutuante)
apontam para o link em **`js/config.js`**:

```javascript
CONFIG.avaliacaoUrl = "https://g.page/r/XXXX/review";
```

Para obtê-lo: no Google Maps, abra o perfil do negócio → **Compartilhar** →
copie o link (ou use o link do formulário de "Avaliar").

---

## Recursos

- Hero cinematográfico com Ken Burns, partículas e título animado
  (reveal + blur + shimmer, inspirado no 21st.dev)
- Menus desktop e mobile responsivos
- Cards de diferenciais e serviços com hover elegante
- Galeria **Coverflow 3D** com autoplay, setas, dots, swipe e teclado
- **Lightbox** com contador, miniaturas e navegação
- Filtros de galeria (Todos, Cortes, Barbas, Combos, Estilos)
- Botões "Nos avalie" (cabeçalho, hero e botão flutuante) para avaliação no Google
- Botão flutuante em vidro fosco (fundo cinza) com ícone de estrela
- Botão "Como chegar" com mapa OpenStreetMap
- SEO: Schema.org, Open Graph, Twitter Cards, sitemap, robots e llms.txt
- Acessibilidade: ARIA, navegação por teclado, ESC para fechar e
  suporte a `prefers-reduced-motion`

---

## Publicação no GitHub Pages

```bash
git init
git add .
git commit -m "feat: cria site institucional da Quirino Barbearia"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
git push -u origin main
```

Depois, no GitHub: **Settings → Pages → Branch: main** (pasta `/root`).

O site estará disponível em `https://SEU_USUARIO.github.io/SEU_REPOSITORIO/`.
Nesse caso, atualize `<link rel="canonical">`, `robots.txt` e `sitemap.xml`
com o endereço real.

---

## Observações

- Nenhum dado de contato, endereço, horário ou preço foi inventado:
  informações desconhecidas aparecem como `[INSERIR ...]` e devem ser
  preenchidas pela empresa.
- Nenhum segredo, chave ou credencial está incluído no projeto.