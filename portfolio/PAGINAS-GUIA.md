# GUIA COMPLETO - Criar Todas as Páginas do Portfolio

Este guia contém o conteúdo completo para todas as 18 páginas restantes (6 páginas × 3 idiomas).

## ✅ ARQUIVOS JÁ PRONTOS

1. `/index.html` - Detecção de idioma
2. `/css/style.css` - Estilos completos
3. `/js/main.js` - JavaScript
4. `/pt/index.html` - Homepage português
5. `/README.md` - Instruções

## 📝 COMO CRIAR AS PÁGINAS RESTANTES

### Método 1: Copiar e Adaptar
1. Copie o arquivo `/pt/index.html`
2. Renomeie para o nome da página desejada
3. Substitua apenas o conteúdo da seção `<section>`
4. Mantenha: header, navigation, social icons, footer

### Método 2: Upload Direto
Use os templates abaixo e crie os arquivos direto no GitHub:
1. No GitHub, clique em "Add file" → "Create new file"
2. Digite o caminho: `pt/biografia.html`
3. Cole o conteúdo do template
4. Commit

---

## 🇵🇹 PÁGINAS EM PORTUGUÊS

### pt/biografia.html

Use o template pt/index.html e substitua a seção <section id="sobre"> por:

```html
<section id="biografia" style="background: white; padding-top: 8rem;">
    <div class="container">
        <div class="section-header">
            <h2>Biografia</h2>
            <p>Uma jornada interdisciplinar abrangendo tecnologia, comunicação e impacto social</p>
        </div>
        
        <div class="bio-content">
            <div class="bio-text">
                <h3 style="color: var(--primary-accent); margin-bottom: 1.5rem;">Trajetória Acadêmica e Profissional</h3>
                
                <p>Sou investigadora interdisciplinar nas Ciências da Comunicação, Ciência da Informação e Tecnologias Digitais, com foco nas interações entre tecnologia, IHC (Interação Humano-Computador), transmedia, género, feminismo e sociedade. A minha trajectória, especialmente nos últimos dez anos, tem estado dedicada a investigar as relações entre digital, inclusão e justiça social, sobretudo na liderança e análise de comunidades de mulheres em tecnologia no Brasil e em Portugal.</p>

                <p>Aos 17 anos, iniciei a licenciatura em Comunicação Social na Pontifícia Universidade Católica do Rio de Janeiro (Brasil), no mesmo ano em que a Web foi aberta à sociedade. Apesar de não ter computador em casa, nem acesso à internet, devido ao elevado custo, decidi inscrever-me num curso de internet em um dos laboratórios de informática mais avançados da América Latina, o RioDatacentro. Sem saber usar rato ou funções básicas do computador, fui uma das primeiras pessoas a comunicar-se pela Internet no Brasil.</p>

                <p>Mantive uma carreira profissional híbrida (mercado de trabalho e Academia) até ao doutoramento, sempre procurando aliar o estudo científico aplicado à inovação e o contributo para a sociedade nas funções desempenhadas. Como repórter de Ciência e Saúde, dos jornais brasileiros Extra e O Globo, desenvolvi competências em comunicação de ciência. Fui também colunista durante dois anos sobre mulheres em tecnologia no Mídia Ninja, o maior veículo de jornalismo independente da América Latina.</p>

                <p>Realizei um Mestrado em Letras na Universidade do Estado do Rio de Janeiro com dissertação sobre o mercado editorial brasileiro aprovada com distinção. A experiência de quase 20 anos no mercado editorial destaca-se pela conceção, desenvolvimento e publicação do projeto editorial Technofeminism (UA Editora), durante o doutoramento.</p>

                <p>Há oito anos investi em exclusivo na vocação para a investigação. Durante o doutoramento no Programa em Informação e Comunicação em Plataformas Digitais (Universidade de Aveiro e Universidade do Porto), mapeei e classifiquei 247 comunidades brasileiras e portuguesas de mulheres em tecnologia, conduzindo 25 entrevistas, estudando quatro organizações em profundidade, realizando etnografia digital e design participativo para criar uma campanha transmedia e um protótipo de tecnologia ativista.</p>

                <p>Durante o doutoramento, envolvi-me em projetos nacionais e internacionais competitivos, produção científica de referência, coordenação editorial, participação em redes globais e promoção ativa de uma literacia digital crítica centrada no empoderamento feminino, na ética da IA e na justiça de género.</p>
            </div>

            <div class="bio-highlights">
                <h3>Posições Atuais</h3>
                <ul>
                    <li>Investigadora em Inteligência Artificial, Cátedra Oscar Sala, Instituto de Estudos Avançados da USP (2021-presente)</li>
                    <li>Editora, Pop Junctions - Dr. Henry Jenkins, USC (2021-presente)</li>
                    <li>Investigadora, Teorias Críticas do Digital, Universidade de Aveiro (2024-presente)</li>
                    <li>Keynote Speaker (IEEE, Gartner)</li>
                </ul>

                <h3 style="margin-top: 2rem;">Formação Académica</h3>
                <ul>
                    <li><strong>Doutoramento</strong> (2019-2025): Informação e Comunicação em Plataformas Digitais - Universidade de Aveiro & Universidade do Porto. Aprovada com Distinção e Louvor</li>
                    <li><strong>Mestrado em Letras</strong> (2003-2005): Universidade do Estado do Rio de Janeiro. Aprovada com Distinção</li>
                    <li><strong>Licenciatura em Comunicação Social</strong> (1995-1999): Pontifícia Universidade Católica do Rio de Janeiro</li>
                </ul>

                <h3 style="margin-top: 2rem;">Prémios e Reconhecimentos</h3>
                <ul>
                    <li>Troféu Roseli Doleski Pretto - Universidade de Passo Fundo (2017)</li>
                    <li>Bolsa FCT - Fundação para a Ciência e a Tecnologia (2019-2025)</li>
                    <li>Distinção e Louvor no Doutoramento (2025)</li>
                </ul>
            </div>
        </div>

        <div style="margin-top: 4rem; background: var(--bg-light); padding: 3rem; border-radius: 8px;">
            <h3 style="margin-bottom: 2rem; text-align: center;">Linha do Tempo Profissional</h3>
            <div style="display: grid; gap: 2rem;">
                <div style="border-left: 4px solid var(--primary-accent); padding-left: 2rem;">
                    <h4 style="color: var(--primary-accent);">2021 - Presente</h4>
                    <p><strong>Investigadora em IA</strong> - Instituto de Estudos Avançados da USP<br>
                    <strong>Editora</strong> - Pop Junctions (Dr. Henry Jenkins, USC)</p>
                </div>
                <div style="border-left: 4px solid var(--primary-accent); padding-left: 2rem;">
                    <h4 style="color: var(--primary-accent);">2019 - 2025</h4>
                    <p><strong>Investigadora Doutoral</strong> - Universidade de Aveiro & Universidade do Porto<br>
                    Mapeamento de 247 comunidades de mulheres em tecnologia</p>
                </div>
                <div style="border-left: 4px solid var(--primary-accent); padding-left: 2rem;">
                    <h4 style="color: var(--primary-accent);">2010 - 2019</h4>
                    <p><strong>Diretora e Fundadora</strong> - Punch! Comunicação e Tecnologia<br>
                    Projetos transmedia, apps, estratégias digitais</p>
                </div>
                <div style="border-left: 4px solid var(--primary-accent); padding-left: 2rem;">
                    <h4 style="color: var(--primary-accent);">2006 - 2008</h4>
                    <p><strong>Coordenadora de Comunicação Corporativa</strong> - Fresenius Medical Care<br>
                    Comunicação institucional e Fundação do Rim</p>
                </div>
                <div style="border-left: 4px solid var(--primary-accent); padding-left: 2rem;">
                    <h4 style="color: var(--primary-accent);">2000 - 2002</h4>
                    <p><strong>Repórter</strong> - Jornais Extra e O Globo<br>
                    Cobertura de Ciência, Saúde e Tecnologia</p>
                </div>
            </div>
        </div>
    </div>
</section>
```

### pt/expertise.html

Seção principal (6 cards expandidos):

```html
<section id="expertise" style="background: var(--bg-light); padding-top: 8rem;">
    <div class="container">
        <div class="section-header">
            <h2>Áreas de Expertise</h2>
            <p>Capacidades estratégicas desenvolvidas em 25+ anos de experiência internacional</p>
        </div>

        <div class="expertise-grid">
            <!-- Card 1 -->
            <div class="expertise-card">
                <span class="icon">🤖</span>
                <h3>Comunicação e Ética em IA</h3>
                <p>Investigação em IA responsável com foco em género, decolonialidade e interseccionalidade. Desenvolvimento de estratégias de comunicação sobre IA para diversos stakeholders, desde públicos técnicos a comunidades não especializadas.</p>
                <div class="project-highlights" style="margin-top: 1.5rem;">
                    <h4>Competências Específicas</h4>
                    <ul>
                        <li>Ética e governação de IA</li>
                        <li>IA Generativa e seus impactos sociais</li>
                        <li>Perspetivas feministas em IA</li>
                        <li>Literacia em IA para públicos diversos</li>
                        <li>Análise crítica de sistemas algorítmicos</li>
                    </ul>
                </div>
                <div class="skills">
                    <span class="skill-tag">AI Ethics</span>
                    <span class="skill-tag">Generative AI</span>
                    <span class="skill-tag">AI Governance</span>
                    <span class="skill-tag">Feminist AI</span>
                    <span class="skill-tag">Algorithmic Justice</span>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="expertise-card">
                <span class="icon">💻</span>
                <h3>Investigação e Design UX</h3>
                <p>Experiência em investigação de utilizadores, design de interfaces e análise de plataformas digitais. Desenvolvimento de protótipos com metodologias de co-design e testes de usabilidade aplicados a comunidades e contextos diversos.</p>
                <div class="project-highlights" style="margin-top: 1.5rem;">
                    <h4>Competências Específicas</h4>
                    <ul>
                        <li>Investigação qualitativa com utilizadores</li>
                        <li>Design de interfaces e experiências</li>
                        <li>Prototipagem rápida e testes</li>
                        <li>Etnografia digital em plataformas</li>
                        <li>Design participativo com stakeholders</li>
                    </ul>
                </div>
                <div class="skills">
                    <span class="skill-tag">UX Research</span>
                    <span class="skill-tag">UI Design</span>
                    <span class="skill-tag">Prototyping</span>
                    <span class="skill-tag">Figma</span>
                    <span class="skill-tag">User Testing</span>
                    <span class="skill-tag">Digital Ethnography</span>
                </div>
            </div>

            <!-- Card 3 -->
            <div class="expertise-card">
                <span class="icon">📱</span>
                <h3>Storytelling Digital e Transmedia</h3>
                <p>Conceção e execução de narrativas transmedia para educação, cultura e ativismo. Estratégias de conteúdo multiplataforma que integram web, mobile, eventos e redes sociais para máximo engagement e impacto.</p>
                <div class="project-highlights" style="margin-top: 1.5rem;">
                    <h4>Competências Específicas</h4>
                    <ul>
                        <li>Design de narrativas transmedia</li>
                        <li>Estratégia de conteúdo digital</li>
                        <li>Campanhas multiplataforma</li>
                        <li>Branded content e storytelling corporativo</li>
                        <li>Gestão de comunidades online</li>
                    </ul>
                </div>
                <div class="skills">
                    <span class="skill-tag">Transmedia</span>
                    <span class="skill-tag">Content Strategy</span>
                    <span class="skill-tag">Digital Campaigns</span>
                    <span class="skill-tag">Social Media</span>
                    <span class="skill-tag">Community Management</span>
                </div>
            </div>

            <!-- Card 4 -->
            <div class="expertise-card">
                <span class="icon">🔬</span>
                <h3>Comunicação Científica</h3>
                <p>Tradução de investigação complexa para públicos diversos através de artigos, palestras, entrevistas e materiais educativos. Experiência como jornalista científica e em disseminação de conhecimento académico.</p>
                <div class="project-highlights" style="margin-top: 1.5rem;">
                    <h4>Competências Específicas</h4>
                    <ul>
                        <li>Escrita científica e académica</li>
                        <li>Jornalismo científico</li>
                        <li>Apresentações e palestras keynote</li>
                        <li>Gestão do conhecimento</li>
                        <li>Ciência aberta e repositórios</li>
                    </ul>
                </div>
                <div class="skills">
                    <span class="skill-tag">Scientific Writing</span>
                    <span class="skill-tag">Public Engagement</span>
                    <span class="skill-tag">Keynote Speaking</span>
                    <span class="skill-tag">Open Science</span>
                    <span class="skill-tag">Knowledge Transfer</span>
                </div>
            </div>

            <!-- Card 5 -->
            <div class="expertise-card">
                <span class="icon">🌍</span>
                <h3>DEI e Tecnofeminismo</h3>
                <p>Especialização em estudos de género e tecnologia, com foco em inclusão de mulheres em STEM. Desenvolvimento de estratégias de diversidade, equidade e inclusão para organizações e comunidades tecnológicas.</p>
                <div class="project-highlights" style="margin-top: 1.5rem;">
                    <h4>Competências Específicas</h4>
                    <ul>
                        <li>Estudos de género em tecnologia</li>
                        <li>Estratégias de DEI</li>
                        <li>Empoderamento feminino em STEM</li>
                        <li>Abordagens interseccionais</li>
                        <li>Construção de comunidades inclusivas</li>
                    </ul>
                </div>
                <div class="skills">
                    <span class="skill-tag">Gender Studies</span>
                    <span class="skill-tag">DEI Strategy</span>
                    <span class="skill-tag">Community Building</span>
                    <span class="skill-tag">STEM Education</span>
                    <span class="skill-tag">Intersectionality</span>
                </div>
            </div>

            <!-- Card 6 -->
            <div class="expertise-card">
                <span class="icon">📊</span>
                <h3>Comunicação Estratégica</h3>
                <p>Mais de 15 anos em comunicação corporativa, relações públicas e gestão de eventos. Planeamento e execução de campanhas integradas para sectores de saúde, farmacêutico, editorial e organizações sem fins lucrativos.</p>
                <div class="project-highlights" style="margin-top: 1.5rem;">
                    <h4>Competências Específicas</h4>
                    <ul>
                        <li>Comunicação corporativa e institucional</li>
                        <li>Relações públicas e assessoria de imprensa</li>
                        <li>Gestão de eventos internacionais</li>
                        <li>Marketing digital multiplataforma</li>
                        <li>Branding e identidade visual</li>
                    </ul>
                </div>
                <div class="skills">
                    <span class="skill-tag">Corporate Comms</span>
                    <span class="skill-tag">Public Relations</span>
                    <span class="skill-tag">Event Management</span>
                    <span class="skill-tag">Digital Marketing</span>
                    <span class="skill-tag">Brand Strategy</span>
                </div>
            </div>
        </div>

        <div style="background: white; padding: 3rem; margin-top: 4rem; border-radius: 8px; border-left: 4px solid var(--primary-accent);">
            <h3 style="margin-bottom: 1.5rem;">Ferramentas e Metodologias</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem;">
                <div>
                    <h4 style="color: var(--primary-accent); margin-bottom: 1rem;">Design & Prototipagem</h4>
                    <p style="color: var(--text-light);">Figma, Adobe Photoshop, Canva, Miro, InDesign, iMovie, CapCut</p>
                </div>
                <div>
                    <h4 style="color: var(--primary-accent); margin-bottom: 1rem;">Investigação</h4>
                    <p style="color: var(--text-light);">NVivo, Survey Monkey, Typeform, Google Analytics, Notion, Trello</p>
                </div>
                <div>
                    <h4 style="color: var(--primary-accent); margin-bottom: 1rem;">Comunicação Digital</h4>
                    <p style="color: var(--text-light);">WordPress, Social Media Platforms, Mailchimp, Zoom, Microsoft 365, Google Workspace</p>
                </div>
                <div>
                    <h4 style="color: var(--primary-accent); margin-bottom: 1rem;">IA Generativa</h4>
                    <p style="color: var(--text-light);">Claude, ChatGPT, Copilot, Gemini, Simplified, Gamma</p>
                </div>
            </div>
        </div>
    </div>
</section>
```

### pt/projetos.html
### pt/publicacoes.html
### pt/contato.html

Para economizar espaço, vou criar um ficheiro separado com TODOS os templates completos.

---

## 🇬🇧 PÁGINAS EM INGLÊS (en/)

Copie as páginas PT e traduza para EN. Principais diferenças:
- Títulos e navegação em inglês
- Ajustar path dos links: `href="../en/"`
- Traduzir todo o conteúdo mantendo estrutura HTML

---

## 🇪🇸 PÁGINAS EM ESPANHOL (es/)

Copie as páginas PT e traduza para ES. Principais diferenças:
- Títulos e navegação em espanhol
- Ajustar path dos links: `href="../es/"`
- Traduzir todo o conteúdo mantendo estrutura HTML

---

## ⚡ ATALHO RÁPIDO

Para acelerar, você pode:

1. **Criar só as páginas PT primeiro**
2. **Usar tradutor automático** (DeepL ou Google Translate) para EN e ES
3. **Fazer ajustes finais** manualmente

Ou use IA para gerar: "Traduza esta página HTML para inglês/espanhol mantendo todas as tags"

---

## 📤 UPLOAD NO GITHUB

Depois de criar todos os arquivos:

1. Acesse: https://github.com/renatafrade/renatafrade-portfolio
2. Clique "Add file" → "Upload files"
3. Arraste TODA a pasta `portfolio`
4. Commit: "Add complete multilingual portfolio"
5. Aguarde 2-3 min
6. Acesse: https://renatafrade.github.io/renatafrade-portfolio/

---

## ✅ CHECKLIST FINAL

- [ ] Todos os 22 arquivos HTML criados
- [ ] CSS e JS no lugar
- [ ] README.md incluído
- [ ] Testou links de navegação
- [ ] Testou seletor de idiomas
- [ ] Ícones sociais em todas as páginas
- [ ] GitHub Pages ativado
- [ ] Site funcionando online

---

Quer que eu continue criando os templates completos das outras páginas?
