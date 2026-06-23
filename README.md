# ISP Landing Page

Landing page moderna para provedores de internet desenvolvida com **Next.js**, **TypeScript**, **Tailwind CSS** e **Framer Motion**.

O projeto foi criado com foco em performance, experiência do usuário, responsividade e futura integração com um painel administrativo para gerenciamento de conteúdo.

---

## Demonstração

Em breve.

---

## Funcionalidades

* Landing page totalmente responsiva
* Hero section com imagem em destaque
* Consulta de cobertura (simulada via JSON)
* Exibição de planos de internet
* Sessão de promoções
* Benefícios do serviço
* Sobre a empresa
* Central do assinante
* Depoimentos de clientes
* Perguntas frequentes (FAQ)
* Formulário de contato
* Rodapé completo
* Animações utilizando Framer Motion
* Ícones modernos com Lucide React

---

## Tecnologias Utilizadas

* Next.js 15
* React
* TypeScript
* Tailwind CSS
* Framer Motion
* Lucide React

---

## Estrutura do Projeto

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   │
│   └── sections/
│       ├── HeroInternet.tsx
│       ├── CoverageSearch.tsx
│       ├── PlansSection.tsx
│       ├── PromotionsSection.tsx
│       ├── BenefitsSection.tsx
│       ├── AboutCompanySection.tsx
│       ├── CustomerPortalSection.tsx
│       ├── TestimonialsSection.tsx
│       ├── FAQSection.tsx
│       └── ContactSection.tsx
│
├── data/
│   ├── plans.ts
│   ├── promotions.ts
│   ├── benefits.ts
│   ├── testimonials.ts
│   ├── faqs.ts
│   ├── company.ts
│   ├── contactInfo.ts
│   └── customerPortal.ts
│
└── types/
```

---

## Executando Localmente

Clone o projeto:

```bash
git clone <repositorio>
```

Entre na pasta:

```bash
cd landing-provedor
```

Instale as dependências:

```bash
npm install
```

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

Acesse:

```text
http://localhost:3000
```

---

## Build para Produção

Executar build:

```bash
npm run build
```

Executar versão de produção:

```bash
npm start
```

---

## Qualidade de Código

Verificar problemas de lint:

```bash
npm run lint
```

---

## Próximas Evoluções

* Painel administrativo
* Cadastro de planos
* Cadastro de promoções
* Gerenciamento de FAQ
* Upload de imagens
* Editor visual de seções
* Múltiplos layouts para provedores
* Sistema White Label
* Integração com API e banco de dados

---

## Objetivo

Este projeto faz parte do meu portfólio como desenvolvedor, demonstrando habilidades em:

* Desenvolvimento Front-end
* UX/UI moderno
* Responsividade
* Componentização
* Arquitetura escalável
* Integração futura com CMS/Admin

---

## Licença

Projeto desenvolvido para fins de estudo e portfólio.
