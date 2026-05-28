# Realiza Empréstimos — Landing Page

> Landing page de alta conversão para captação de leads de **Empréstimo com Garantia de Veículo**, desenvolvida com React 18 + Tailwind CSS seguindo padrões de produção fintech.

---

## Objetivo

Converter visitantes em leads qualificados para os produtos:

- **Empréstimo com Garantia de Veículo**
- **Refinanciamento de Veículo**
- **Portabilidade de Crédito**
- **Crédito com Garantia**

Conversões rastreadas: clique no WhatsApp, envio de formulário e captação de leads via Meta Pixel + Google Analytics 4.

---

## Stack

| Camada | Tecnologia |
|---|---|
| UI | React 18 |
| Estilos | Tailwind CSS 3 |
| Build | Vite 4 |
| Linting | ESLint |
| Fontes | Inter (Google Fonts) |

---

## Estrutura do Projeto

```
src/
├── assets/          # Imagens, ícones e recursos estáticos
├── components/
│   └── ui/          # Componentes atômicos reutilizáveis (Button, Card, Input…)
├── config/          # Constantes de aplicação (empresa, links, copy)
├── hooks/           # Custom hooks (formulário, tracking, intersection observer)
├── layouts/         # Wrappers de layout (MainLayout)
├── pages/           # Composição de páginas
├── sections/        # Seções da landing (Hero, Benefits, HowItWorks…)
├── styles/          # CSS global
└── utils/           # Utilitários puros (formatters, validators, sanitizers, tracking)
```

---

## Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/realiza-emprestimos-lp.git
cd realiza-emprestimos-lp

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
cp .env.example .env
# Edite o .env com os valores reais

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

---

## Scripts

```bash
npm run dev      # Servidor de desenvolvimento (http://localhost:5173)
npm run build    # Build de produção em /dist
npm run preview  # Preview do build de produção
npm run lint     # Análise estática com ESLint
```

---

## Deploy

### Vercel (recomendado)

```bash
npm i -g vercel
vercel --prod
```

### Netlify

```bash
npm run build
# Arraste a pasta /dist para app.netlify.com/drop
```

### VPS / cPanel

```bash
npm run build
# Faça upload do conteúdo de /dist para o diretório public_html
```

---

## Variáveis de Ambiente

Consulte `.env.example` para a lista completa. As principais:

| Variável | Descrição |
|---|---|
| `VITE_WHATSAPP_NUMBER` | Número WhatsApp sem formatação (ex: 5542999548966) |
| `VITE_GTM_ID` | ID do Google Tag Manager |
| `VITE_FB_PIXEL_ID` | ID do Meta (Facebook) Pixel |
| `VITE_API_BASE_URL` | URL base da API/CRM para envio de leads |

> **Nunca** comite o arquivo `.env` no repositório.

---

## Boas Práticas Adotadas

- **Mobile-first** — todos os componentes partem do mobile
- **Segurança** — inputs sanitizados, sem dados sensíveis no código, suporte a CSP
- **SEO** — meta tags, Open Graph, estrutura semântica HTML5
- **Performance** — code splitting com Vite, lazy loading de imagens
- **LGPD** — aviso de cookies, política de privacidade, termos de uso
- **Tracking** — Meta Pixel `Lead` event + GTM data layer prontos para produção

---

## Padrão de Commits

```
feat:     nova funcionalidade
fix:      correção de bug
style:    ajustes de estilo/CSS sem lógica
refactor: refatoração sem alteração de comportamento
perf:     melhoria de performance
chore:    configuração, dependências, build
docs:     documentação
test:     testes
```

**Exemplo:**
```
feat: adiciona seção de prova social com contadores animados
fix: corrige validação de telefone no formulário de lead
style: ajusta espaçamento do hero em mobile
```

---

## Empresa

**Realiza Empréstimos**  
CNPJ: 24.133.165/0001-08  
Av. Paraná, 462, Centro — Telêmaco Borba/PR — CEP: 84261-060  
📧 contato@realizaemprestimos.com.br  
📱 (42) 99954-8966  
☎️ (42) 3272-0172

---

## Licença

Código proprietário — Todos os direitos reservados © 2024 Realiza Empréstimos.
