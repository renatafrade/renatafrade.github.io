# Renata Frade - Portfolio Multilíngue

Site profissional em Português, Inglês e Espanhol com todas as seções organizadas.

## 📁 Estrutura Completa do Site

```
renatafrade-portfolio/
├── index.html                  # Página principal com detecção de idioma
├── css/
│   └── style.css              # Estilos globais para todas as páginas
├── js/
│   └── main.js                # JavaScript para menu mobile e interações
├── pt/                        # Versão em Português
│   ├── index.html            # Página inicial PT
│   ├── biografia.html        # Biografia completa
│   ├── expertise.html        # Áreas de expertise
│   ├── projetos.html         # Projetos em destaque
│   ├── publicacoes.html      # Publicações científicas
│   └── contato.html          # Informações de contato
├── en/                        # English Version
│   ├── index.html            # Homepage EN
│   ├── biography.html        # Full biography
│   ├── expertise.html        # Expertise areas
│   ├── projects.html         # Featured projects
│   ├── publications.html     # Scientific publications
│   └── contact.html          # Contact information
├── es/                        # Versión en Español
│   ├── index.html            # Página de inicio ES
│   ├── biografia.html        # Biografía completa
│   ├── experiencia.html      # Áreas de experiencia
│   ├── proyectos.html        # Proyectos destacados
│   ├── publicaciones.html    # Publicaciones científicas
│   └── contacto.html         # Información de contacto
└── README.md                  # Este arquivo
```

## 🎨 Características do Site

### Design e Funcionalidades
- ✅ Design clean e profissional
- ✅ Totalmente responsivo (desktop, tablet, mobile)
- ✅ Navegação em 3 idiomas (PT/EN/ES)
- ✅ Ícones de redes sociais fixos em todas as páginas
- ✅ Menu mobile interativo
- ✅ Animações suaves ao scroll
- ✅ SEO otimizado
- ✅ Paleta de cores profissional

### Ícones de Contato (Fixos em Todas as Páginas)
- Email: frade.renata@gmail.com
- LinkedIn: linkedin.com/in/renatafrade
- ORCID: 0000-0002-8367-5577
- ResearchGate: researchgate.net/profile/Renata_Frade
- Google Scholar
- Instagram Portfolio: @lovelacers

### Seções Incluídas

#### 1. Página Inicial (Home)
- Hero section com título e estatísticas
- Resumo sobre mim
- Áreas de expertise em destaque
- Projetos principais
- Call-to-action

#### 2. Biografia
- Trajetória completa acadêmica e profissional
- Posições atuais
- Formação
- Experiência internacional
- Linha do tempo da carreira

#### 3. Expertise
- 6 áreas principais de atuação:
  - Comunicação e Ética em IA
  - Investigação e Design UX
  - Storytelling Digital e Transmedia
  - Comunicação Científica
  - DEI e Tecnofeminismo
  - Comunicação Estratégica
- Skills específicas de cada área
- Ferramentas e metodologias

#### 4. Projetos
- Technofeminism Book (2023)
- Pesquisa Doutoralobre 247 Comunidades (2019-2025)
- LitGirlsBr (2015-2018)
- WeColloquium - ISEG (2019)
- Pop Junctions Website (2021-presente)
- Punch! Comunicação (2010-2019)
- Detalhes de impacto e reconhecimento

#### 5. Publicações
- Livros
- Capítulos de livro
- Artigos em revistas científicas
- Papers em conferências
- Entrevistas e conteúdo editorial
- Links para repositórios (Scopus, WoS)

#### 6. Contato
- Informações de contato
- Localização
- Idiomas
- Links profissionais (LinkedIn, ORCID, etc.)
- Formulário de contato (opcional)

## 🚀 Deployment no GitHub Pages

### Opção 1: Upload Direto via GitHub Web

1. Acesse: https://github.com/renatafrade/renatafrade-portfolio
2. Clique em "Add file" → "Upload files"
3. Arraste TODOS os arquivos e pastas
4. Commit: "Add multilingual portfolio website"
5. Aguarde 2-3 minutos
6. Acesse: https://renatafrade.github.io/renatafrade-portfolio/

### Opção 2: Git Command Line

```bash
# Clone o repositório
git clone https://github.com/renatafrade/renatafrade-portfolio.git
cd renatafrade-portfolio

# Copie todos os arquivos do portfolio para este diretório

# Adicione, commit e push
git add .
git commit -m "Add complete multilingual portfolio website"
git push origin main
```

### Opção 3: GitHub Desktop

1. Abra GitHub Desktop
2. Clone o repositório
3. Copie todos os arquivos do portfolio para a pasta
4. Commit changes
5. Push to origin

## ⚙️ Configurando GitHub Pages

1. Vá em Settings → Pages
2. Source: Deploy from a branch
3. Branch: main
4. Folder: / (root)
5. Save
6. Aguarde o deploy (1-3 minutos)

## 🔧 Customização

### Alterar Cores

Edite as variáveis CSS no arquivo `css/style.css`:

```css
:root {
    --primary-dark: #1a1a2e;      /* Cor escura principal */
    --primary-accent: #c7522a;    /* Cor de destaque (botões) */
    --secondary-accent: #e5c4a0;  /* Cor secundária */
    --text-main: #2d2d2d;         /* Texto principal */
    --text-light: #666;           /* Texto claro */
    --bg-light: #f8f6f2;          /* Fundo claro */
    --bg-white: #ffffff;          /* Fundo branco */
}
```

### Atualizar Conteúdo

Para atualizar texto, fotos ou informações:

1. Abra o arquivo HTML correspondente (ex: `pt/biografia.html`)
2. Edite o conteúdo dentro das tags
3. Salve o arquivo
4. Commit e push para GitHub

### Adicionar Novas Páginas

1. Copie um arquivo existente como template
2. Altere o conteúdo
3. Adicione link no menu de navegação
4. Repita para os 3 idiomas

## 📱 Responsividade

O site se adapta automaticamente a:
- Desktop (>968px)
- Tablet (768px - 968px)
- Mobile (<768px)

Em mobile:
- Menu hambúrguer
- Ícones sociais no rodapé
- Colunas empilhadas
- Fonte e espaçamento ajustados

## 🌍 Idiomas

### Português (PT)
- Idioma padrão para visitantes de Portugal e Brasil
- URL: `/pt/`

### English (EN)
- Default for international visitors
- URL: `/en/`

### Español (ES)
- Predeterminado para visitantes de España y Latinoamérica
- URL: `/es/`

O site detecta automaticamente o idioma do navegador e redireciona.

## 📊 Analytics (Opcional)

Para adicionar Google Analytics:

1. Crie uma conta em analytics.google.com
2. Obtenha seu ID de tracking (G-XXXXXXXXXX)
3. Adicione antes do `</head>` em cada HTML:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🔍 SEO

Cada página inclui:
- Meta tags otimizados
- Estrutura semântica HTML5
- Descrições únicas
- Alt text em imagens
- URLs amigáveis
- Open Graph tags (para compartilhamento em redes sociais)

Para melhorar SEO:
1. Adicione sitemap.xml
2. Configure robots.txt
3. Adicione schema.org markup
4. Otimize imagens

## 🎯 Próximos Passos Sugeridos

1. **Adicionar fotos profissionais**: Coloque na pasta `/images/`
2. **Criar favicon**: Gere em favicon.io e adicione
3. **Blog/Artigos**: Crie seção `/blog/` (opcional)
4. **Testemunhos**: Adicione seção com recomendações
5. **Galeria de fotos**: Para eventos e palestras
6. **Downloads**: Seção com CV em PDF
7. **Newsletter**: Integração com Mailchimp (opcional)

## 📄 Licença

© 2026 Renata Loureiro Frade. Todos os direitos reservados.

## 🤝 Suporte

Para questões ou sugestões:
- Email: frade.renata@gmail.com
- LinkedIn: [linkedin.com/in/renatafrade](https://linkedin.com/in/renatafrade)

---

## ✅ Checklist de Deploy

- [ ] Todos os arquivos copiados para o repositório
- [ ] Links testados (navegação entre páginas)
- [ ] Ícones sociais funcionando
- [ ] Menu mobile testado
- [ ] Responsividade verificada
- [ ] GitHub Pages ativado
- [ ] Site acessível via URL
- [ ] Teste em diferentes navegadores
- [ ] Teste em mobile
- [ ] SEO básico configurado

---

**Última Atualização**: Fevereiro 2026  
**Versão**: 1.0  
**Arquivos**: 22 (index + 6 páginas × 3 idiomas + CSS + JS + README)
