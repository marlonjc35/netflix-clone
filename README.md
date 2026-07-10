# MarlonFlix - Netflix Clone Front-End

Um projeto de estudo focado no desenvolvimento front-end para clonar a interface da página principal da Netflix. O projeto conta com um carrossel interativo "Em Alta", exibição de detalhes dos títulos através de um modal dinâmico e suporte nativo a múltiplos idiomas (Português e Inglês).

## 🚀 Tecnologias Utilizadas

- **HTML5:** Estruturação semântica e tratamento de acessibilidade (Padrões ARIA).
- **CSS3:** Estilização moderna, efeitos de overlay, flexbox, grid layout e responsividade (Mobile-First).
- **JavaScript (Vanilla):** Manipulação dinâmica do DOM para o carrossel, modal e sistema de tradução.
- **Google Fonts:** Utilização da fonte institucional _Inter_.

## ⚡ Funcionalidades Principais

- **Seletor de Idiomas Inteligente:** Permite alternar instantaneamente todos os textos da página principal entre Português e Inglês via JavaScript, mantendo a semântica de acessibilidade com `aria-label`.
- **Carrossel Interativo "Em Alta":** Navegação fluida entre os principais títulos com exibição dos badges de numeração gigante sobrepostos nas capas.
- **Setas Inteligentes:** As setas de navegação do carrossel monitoram a posição atual e desaparecem suavemente quando chegam ao início (card 1) ou ao final da listagem.
- **Modal de Detalhes Dinâmico:** Ao clicar em qualquer título do carrossel, um modal é aberto injetando os dados customizados (`data-*`) do HTML direto na interface (título, ano, nota, sinopse e categoria).

## 🛠️ Como Executar o Projeto Localmente

1. Faça o clone deste repositório:

```bash
git clone [https://github.com/marlonjc35/netflix-clone.git](https://github.com/marlonjc35/netflix-clone.git)
```
