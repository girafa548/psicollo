---
description: Levantamento de Requisitos — Site Psicóloga
---

# 🧠 Levantamento de Requisitos — Site Psicóloga
> Stack: Next.js · React Bits · Antigravity · Copywriting Psicológico

---

## 1. PERFIL DO DEV FULL STACK IDEAL

### Mindset Profissional
- Pensa como **produto**, não como código — cada decisão técnica serve ao negócio
- Tem obsessão por **experiência do usuário**, especialmente em nichos de saúde mental (empatia no design)
- Comunica progresso com clareza, sem jargão técnico desnecessário para o cliente
- Entrega MVPs funcionais antes de perfeições que atrasam o lançamento
- Documenta o que faz — deixa o projeto sustentável para outros e para o futuro

### Hard Skills — Frontend
| Skill | Nível Esperado |
|---|---|
| Next.js 14+ (App Router) | Avançado |
| React com hooks, context, server/client components | Avançado |
| Tailwind CSS | Avançado |
| React Bits (biblioteca de animações) | Intermediário/Avançado |
| Framer Motion / GSAP | Intermediário |
| Responsividade mobile-first | Avançado |
| Acessibilidade (WCAG 2.1) | Intermediário |
| SEO técnico (meta tags, schema, Open Graph) | Intermediário |
| Performance (Core Web Vitals, lazy load, image optimization) | Intermediário |

### Hard Skills — Backend / Infra
| Skill | Nível Esperado |
|---|---|
| API Routes no Next.js | Avançado |
| Formulários com envio de e-mail (Nodemailer / Resend) | Intermediário |
| Integração com CMS (Sanity, Contentful ou Notion API) | Intermediário |
| Deploy na Vercel + domínio customizado | Avançado |
| Variáveis de ambiente e segurança básica | Intermediário |
| Analytics (Google Analytics 4 / Vercel Analytics) | Básico |

### Soft Skills Essenciais
- **Escuta ativa** — entender o que a psicóloga quer comunicar para o público dela
- **Sensibilidade ao nicho** — saúde mental exige tom cuidadoso, sem gatilhos visuais ou textuais inadequados
- **Autonomia criativa** — propor soluções além do que foi pedido
- **Prazos realistas** — não prometer o que não pode entregar
- **Feedback receptivo** — aceitar revisões sem ego

---

## 2. STACK E BIBLIOTECAS

### Core
```
Next.js 14+ (App Router)
React 18+
TypeScript
Tailwind CSS
```

### React Bits (reactbits.dev)
Biblioteca de componentes animados para React. Componentes recomendados para esse projeto:

- **TextAnimations** — Títulos com reveal suave (perfeito para headlines da hero)
- **Backgrounds** — Partículas, gradientes animados (criar atmosfera de acolhimento)
- **Components** — Cards, carrosséis e componentes de UI com animação
- **FadeIn / SlideIn** — Transições de entrada para seções

> ⚠️ Instalar via: `npm install @reactbits/react-bits` ou conforme docs oficiais

### Antigravity
Framework/biblioteca de layout com efeitos gravitacionais e de parallax. Ideal para:
- Hero section com elementos flutuantes
- Separadores de seção com efeito de profundidade
- Elementos decorativos que reagem ao scroll do mouse

### Outras bibliotecas sugeridas
```bash
npm install resend              # envio de e-mail do formulário de contato
npm install react-hook-form     # formulários performáticos
npm install zod                 # validação de dados
npm install @vercel/analytics   # analytics integrado
npm install next-seo            # SEO simplificado
```

---

## 3. ARQUITETURA DO SITE

### Estrutura de Páginas
```
/                   → Home (Landing Page principal)
/sobre              → Sobre a Psicóloga
/servicos           → Serviços oferecidos
/artigos            → Blog (opcional, fase 2)
/contato            → Contato + agendamento
```

### Estrutura de Pastas (Next.js App Router)
```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx              ← Home
│   ├── sobre/page.tsx
│   ├── servicos/page.tsx
│   ├── contato/page.tsx
│   └── api/
│       └── contact/route.ts  ← API de e-mail
├── components/
│   ├── ui/                   ← componentes base
│   ├── sections/             ← seções da landing
│   └── layout/               ← Header, Footer, Nav
├── lib/
│   └── utils.ts
└── styles/
    └── globals.css
```

---

## 4. COPY — ESTRATÉGIA DE COMUNICAÇÃO

### Persona do Público-Alvo
- **Quem é:** adultos entre 25–45 anos, em geral mulheres
- **Dor principal:** ansiedade, burnout, relacionamentos, autoconhecimento
- **Estado emocional ao chegar no site:** hesitante, buscando segurança
- **Barreira:** medo do julgamento, não saber se "precisa mesmo de terapia"
- **Desejo:** ser compreendida, ter clareza mental, qualidade de vida

### Tom de Voz
| Não usar | Usar |
|---|---|
| Clínico / frio | Acolhedor / presente |
| Jargão técnico | Linguagem simples e humana |
| Formal excessivo | Próximo, como uma conversa |
| Genérico | Específico e real |

### Framework de Copy por Seção

#### HERO (primeira dobra)
> **Objetivo:** parar o scroll, gerar identificação imediata

**Estrutura:**
```
HEADLINE → Transformação desejada (o depois, não o antes)
SUBHEADLINE → Reconhecimento da dor + promessa do caminho
CTA → Ação leve, sem pressão
```

**Exemplo de headline:**
> *"Você não precisa carregar tudo sozinha."*

**Subheadline:**
> *Terapia é o espaço que falta na sua vida — para entender o que você sente e descobrir quem você quer ser.*

**CTA:**
> *Agendar uma conversa →*

---

#### SOBRE (credibilidade + conexão humana)
> **Objetivo:** o visitante confiar na psicóloga como pessoa, não só como profissional

**O que incluir:**
- Por que ela escolheu psicologia (motivação humana)
- Abordagem terapêutica (ex: TCC, psicanálise) explicada de forma simples
- CRP + formação (prova social)
- Uma frase pessoal que crie identificação

**Exemplo de abertura:**
> *"Escolhi ser psicóloga porque acredito que toda pessoa merece um espaço seguro para ser quem é — sem julgamentos, sem pressa."*

---

#### SERVIÇOS (o que ela oferece)
> **Objetivo:** clareza + desejo de contratar

**Para cada serviço:**
1. Nome simples (ex: "Terapia Individual")
2. Para quem é (dor específica)
3. O que vai acontecer (processo)
4. Resultado esperado (transformação)

**Exemplo:**
> **Terapia para Ansiedade**
> *Para quem vive com a sensação de que algo vai dar errado — mesmo quando tudo está bem. Juntas, vamos entender de onde vem essa inquietação e construir formas reais de lidar com ela.*

---

#### DEPOIMENTOS (prova social)
> **Objetivo:** quebrar a objeção "será que funciona pra mim?"

- Usar depoimentos reais (com permissão, anônimos se necessário)
- Destacar a transformação, não o elogio genérico
- Evitar: *"Ela é ótima!"* → Preferir: *"Depois de 3 meses, consegui voltar a dormir bem e parar de ter crises no trabalho."*

---

#### CTA FINAL / CONTATO
> **Objetivo:** converter visitante em paciente

**Copy do botão/seção:**
> *"Pronto para começar?"*
> *O primeiro passo é mais simples do que parece. Me manda uma mensagem e a gente conversa.*

**Formulário mínimo:**
- Nome
- WhatsApp ou e-mail
- "Como posso te ajudar?" (campo aberto)

---

## 5. DESIGN — DIRETRIZES VISUAIS

### Paleta sugerida
```css
Ivory
#F5F0EB
Background principal
Stone
#E8E0D5
Superfícies secundárias
Blush
#C9A99A
Acolhimento · Suavidade
Sage
#6B8C7A
Equilíbrio · Saúde
Forest
#2E4E3F
Autoridade · Confiança
Terracotta
#A0705E · Acento quente · CTA
Midnight
#1A2E28 · Tipografia · Dark mode
Gold
#C4A882 · Luxo sutil · Detalhe
```

### Tipografia
- **Display (headlines):** Playfair Display ou Cormorant Garamond — elegante, humano
- **Body:** Lato ou DM Sans — legível, limpo
- **Accent:** Italiana ou similar — para frases de impacto em itálico

### Experiência Visual
- Imagens reais da psicóloga (não stock genérico)
- Fotografias em tons quentes, naturais, luz suave
- Espaços em branco generosos — o silêncio visual comunica calma
- Animações suaves com React Bits (nada que distraia — enriquece)
- Efeito parallax leve com Antigravity nas seções hero e transições

---

## 6. SEO & PERFORMANCE

### SEO On-Page (obrigatório)
- Title tag com nome da psicóloga + cidade + especialidade
- Meta description com CTA
- Schema markup: `LocalBusiness` + `MedicalBusiness`
- Open Graph para compartilhamento social
- URL amigáveis e semânticas
- Alt text em todas as imagens

### Performance
- `next/image` para otimização automática
- Fonts via `next/font` (sem layout shift)
- Core Web Vitals verde no Lighthouse
- Lazy load nas seções abaixo do fold

---

## 7. CHECKLIST DE ENTREGA

### Fase 1 — MVP (obrigatório para lançar)
- [ ] Home com todas as seções
- [ ] Formulário de contato funcionando (e-mail)
- [ ] Responsivo mobile + desktop
- [ ] Deploy na Vercel com domínio
- [ ] SEO básico configurado
- [ ] Google Analytics conectado

### Fase 2 — Pós-lançamento
- [ ] Blog / artigos (CMS integrado)
- [ ] Agendamento online (Cal.com ou Calendly embed)
- [ ] WhatsApp flutuante com mensagem pré-preenchida
- [ ] Página de recursos gratuitos (lead magnet)

---

## 8. LINKS E REFERÊNCIAS

- React Bits: https://reactbits.dev/
- Next.js Docs: https://nextjs.org/docs
- Resend (e-mail): https://resend.com
- Vercel Deploy: https://vercel.com
- Cal.com (agendamento gratuito): https://cal.com
- next-seo: https://github.com/garmeeh/next-seo
- Playfair Display (Google Fonts): https://fonts.google.com/specimen/Playfair+Display

---

*Documento gerado para desenvolvimento do site profissional — Psicóloga*
*Stack: Next.js · React Bits · Antigravity · TypeScript · Tailwind CSS*