const form = document.querySelector('.email-box');
const email = document.querySelector('#email');
const message = document.querySelector('.form-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  message.classList.remove('error');
  const isEnglish = document.documentElement.lang === 'en';

  if (!email.validity.valid) {
    message.textContent = isEnglish ? 'Enter a valid email address to continue.' : 'Digite um e-mail válido para continuar.';
    message.classList.add('error');
    email.focus();
    return;
  }

  message.textContent = isEnglish ? 'All set! You will be able to create your account soon.' : 'Tudo certo! Em breve você poderá criar sua conta.';
  form.reset();
});

const movieRow = document.querySelector('.movie-row');
const previousButton = document.querySelector('.carousel-button.previous');
const nextButton = document.querySelector('.carousel-button.next');

if (movieRow && previousButton && nextButton) {
  const scrollMovies = (direction) => {
    const firstCard = movieRow.querySelector('.movie-card');
    const gap = 13;
    const distance = firstCard ? firstCard.offsetWidth * 2 + gap * 2 : 400;
    movieRow.scrollBy({ left: distance * direction, behavior: 'smooth' });
  };

  previousButton.addEventListener('click', () => scrollMovies(-1));
  nextButton.addEventListener('click', () => scrollMovies(1));
}

const languageSelect = document.querySelector('#language');
const translate = (selector, texts) => document.querySelectorAll(selector).forEach((element, index) => {
  element.textContent = texts[index];
});

const pageCopy = {
  'pt-BR': {
    title: 'MarlonFlix', heroTitle: 'Filmes, séries e muito mais,\nsem limites.', heroSubtitle: 'Assista onde quiser. Cancele quando quiser.',
    heroText: 'Quer assistir? Informe seu e-mail para criar ou reiniciar sua assinatura.', email: 'E-mail', start: 'Vamos lá ›', login: 'Entrar',
    benefits: ['Conteúdo para cada momento.', 'Leve suas histórias com você.', 'Assista onde quiser.'],
    benefitTexts: ['Descubra filmes, séries e produções selecionadas para uma experiência que é sempre sua.', 'Baixe seus favoritos e assista quando quiser, mesmo quando estiver sem conexão.', 'Use sua TV, notebook, tablet ou celular. A MarlonFlix acompanha sua rotina.'],
    catalogLabel: 'TOP 10', catalogTitle: 'Em alta na MarlonFlix',
    movieDescriptions: ['Uma cena de ficção científica em Marte, com um astronauta olhando para as dunas ao pôr do sol.', 'Um drama sombrio em uma vila de pescadores litorânea sob um céu tempestuoso.', 'Um suspense tecnológico, com um agente digitando em um computador que exibe códigos de segurança vermelhos.', 'Um romance acolhedor em uma cabana de montanha coberta de neve.', 'Uma aventura de escalada, mostrando a perspectiva de um alpinista no topo de uma montanha sobre um vale de névoa.', 'Em uma cidade tomada por uma neblina misteriosa e dias cinzentos intermináveis, um homem cético descobre que cada gota de chuva parece apagar memórias embaraçosas do passado. O problema começa quando ele tenta usar isso a seu favor para consertar o próprio relacionamento e acaba criando situações bizarras e hilárias.', 'Escondidas no porão de um antigo estúdio de cinema prestes a ser demolido, latas de filme sem identificação guardam gravações perturbadoras de um crime jamais solucionado. Quando um arquivista obsessivo decide restaurar o Arquivo 27, ele começa a perceber que a pessoa por trás das câmeras sabe exatamente quem ele é.', 'Sob as luzes de neon e as ruas molhadas de uma metrópole vibrante, uma jovem vocalista tenta fazer sua banda emergir do circuito subsolo. Entre paixões conturbadas, noites em branco e escolhas difíceis na indústria da música.', 'A bordo da última nave de exploração rumo ao limite da galáxia conhecida, a tripulação se depara com uma anomalia espacial hipnotizante: uma tempestade estelar cósmica. Enquanto o tempo ao redor deles começa a dobrar de forma imprevisível, eles precisam tomar uma decisão impossível.', 'Nas profundezas de uma selva inexplorada cercada por montanhas colossais e ruínas esquecidas, uma expedição busca um artefato lendário capaz de mudar a história. Conforme o grupo avança pelo território hostil, eles descobrem que o verdadeiro perigo não é apenas a natureza implacável.'],
    genres: ['Ficção científica · 1h 52min', 'Drama · 1h 46min', 'Suspense · 1h 58min', 'Romance · 1h 39min', 'Aventura · 2h 04min', 'Comédia / Drama · 1h 35min', 'Mistério / Suspense · 1h 49min', 'Musical / Drama Urbano · 1h 42min', 'Ficção Científica · 2h 08min', 'Aventura / Ação · 1h 55min'],
    planLabel: 'ESCOLHA SEU RITMO', planTitle: 'Um plano para você.', plans: ['Essencial', 'Completo', 'Família'], qualities: ['Qualidade HD', 'Qualidade Full HD', 'Qualidade Ultra HD'], planButtons: ['Começar agora', 'Começar agora', 'Começar agora'], planItems: ['1 tela por vez|Assista no celular e tablet|Cancele a qualquer momento', '2 telas ao mesmo tempo|Todos os dispositivos|Downloads para assistir offline', '4 telas ao mesmo tempo|Todos os dispositivos|Perfis para toda a família'], tag: 'MAIS ESCOLHIDO', download: 'Disponível offline|Download concluído',
    faqLabel: 'PRECISA DE AJUDA?', faqTitle: 'Perguntas frequentes', faqQuestions: ['O que é a MarlonFlix?', 'Quanto custa a assinatura?', 'Onde posso assistir?', 'Posso cancelar quando quiser?'], faqAnswers: ['Uma plataforma de entretenimento feita para você descobrir e curtir histórias incríveis em qualquer tela.', 'Você escolhe o plano que combina com a sua rotina. Não há taxa de adesão e você pode cancelar quando quiser.', 'Na TV, notebook, tablet ou celular. Basta entrar com sua conta em um dispositivo compatível.', 'Sim. Sua assinatura é flexível e pode ser cancelada diretamente pela sua conta.'], cta: 'Pronto para começar? Informe seu e-mail para criar sua conta.', ctaButton: 'Criar minha conta ›', footer: 'Dúvidas? Fale com a gente: ', footerLinks: ['Perguntas frequentes', 'Termos de uso', 'Privacidade', 'Central de ajuda']
  },
  en: {
    title: 'MarlonFlix', heroTitle: 'Movies, series and so much more,\nwith no limits.', heroSubtitle: 'Watch anywhere. Cancel anytime.',
    heroText: 'Ready to watch? Enter your email to create or restart your membership.', email: 'Email address', start: 'Get started ›', login: 'Sign In',
    benefits: ['Stories for every moment.', 'Take your stories with you.', 'Watch anywhere.'],
    benefitTexts: ['Discover movies, series and curated productions for an experience that is always yours.', 'Download your favorites and watch whenever you want, even without an internet connection.', 'Use your TV, laptop, tablet or phone. MarlonFlix fits your routine.'],
    catalogLabel: 'TOP 10', catalogTitle: 'Trending on MarlonFlix',
    movieDescriptions: ['A science fiction scene on Mars, with an astronaut looking at the dunes at sunset.', 'A dark drama in a coastal fishing village under a stormy sky.', 'A tech thriller, with an agent typing on a computer displaying red security codes.', 'A cozy romance in a snow-covered mountain cabin.', 'A climbing adventure, showing the perspective of a mountaineer at the top of a mountain over a valley of mist.', 'In a city taken over by mysterious fog and endless grey days, a skeptical man discovers that each drop of rain seems to erase embarrassing memories from the past. The problem begins when he tries to use this to his advantage to fix his own relationship and ends up creating bizarre and hilarious situations.', 'Hidden in the basement of an old film studio about to be demolished, unidentified film cans hold disturbing recordings of an unsolved crime. When an obsessive archivist decides to restore File 27, he begins to realize that the person behind the camera knows exactly who he is.', 'Under the neon lights and wet streets of a vibrant metropolis, a young vocalist tries to make her band emerge from the underground circuit. Between turbulent passions, sleepless nights, and difficult choices in the music industry.', 'Aboard the last exploration ship heading to the edge of the known galaxy, the crew encounters a hypnotic spatial anomaly: a cosmic star storm. As time around them begins to bend unpredictably, they must make an impossible decision.', 'In the depths of an unexplored jungle surrounded by colossal mountains and forgotten ruins, an expedition searches for a legendary artifact capable of changing history. As the group advances through hostile territory, they discover that the true danger is not only the relentless nature.'],
    genres: ['Science fiction · 1h 52m', 'Drama · 1h 46m', 'Thriller · 1h 58m', 'Romance · 1h 39m', 'Adventure · 2h 04m', 'Comedy / Drama · 1h 35m', 'Mystery / Thriller · 1h 49m', 'Musical / Urban Drama · 1h 42m', 'Science Fiction · 2h 08m', 'Adventure / Action · 1h 55m'],
    planLabel: 'CHOOSE YOUR PACE', planTitle: 'A plan for you.', plans: ['Essential', 'Complete', 'Family'], qualities: ['HD quality', 'Full HD quality', 'Ultra HD quality'], planButtons: ['Get started', 'Get started', 'Get started'], planItems: ['1 screen at a time|Watch on phone and tablet|Cancel anytime', '2 screens at the same time|All devices|Downloads to watch offline', '4 screens at the same time|All devices|Profiles for the whole family'], tag: 'MOST POPULAR', download: 'Available offline|Download complete',
    faqLabel: 'NEED HELP?', faqTitle: 'Frequently asked questions', faqQuestions: ['What is MarlonFlix?', 'How much does a membership cost?', 'Where can I watch?', 'Can I cancel anytime?'], faqAnswers: ['An entertainment platform made for you to discover and enjoy amazing stories on any screen.', 'Choose the plan that fits your routine. There is no sign-up fee and you can cancel whenever you want.', 'On your TV, laptop, tablet or phone. Just sign in to your account on a compatible device.', 'Yes. Your membership is flexible and can be cancelled directly from your account.'], cta: 'Ready to start? Enter your email to create your account.', ctaButton: 'Create my account ›', footer: 'Questions? Talk to us: ', footerLinks: ['Frequently asked questions', 'Terms of use', 'Privacy', 'Help center']
  }
};

function setLanguage(language) {
  const copy = pageCopy[language];
  document.documentElement.lang = language;
  document.title = copy.title;
  document.querySelector('.hero-content h1').innerHTML = copy.heroTitle.replace('\n', '<br>');
  document.querySelector('.hero-content h2').textContent = copy.heroSubtitle;
  document.querySelector('.hero-content > p').textContent = copy.heroText;
  email.placeholder = copy.email;
  document.querySelector('.email-box button').textContent = copy.start;
  document.querySelector('.login').textContent = copy.login;
  translate('.feature-copy h2', copy.benefits);
  translate('.feature-copy p', copy.benefitTexts);
  document.querySelector('.catalog-heading p').textContent = copy.catalogLabel;
  document.querySelector('.catalog-heading h2').textContent = copy.catalogTitle;
  translate('.movie-info p', copy.movieDescriptions);
  translate('.movie-info span', copy.genres);
  document.querySelector('.plans .section-heading p').textContent = copy.planLabel;
  document.querySelector('.plans .section-heading h2').textContent = copy.planTitle;
  translate('.plan h3', copy.plans);
  translate('.plan .quality', copy.qualities);
  translate('.plan a', copy.planButtons);
  document.querySelector('.tag').textContent = copy.tag;
  document.querySelectorAll('.plan ul').forEach((list, index) => {
    list.innerHTML = copy.planItems[index].split('|').map((item) => `<li>${item}</li>`).join('');
  });
  const downloadCopy = copy.download.split('|');
  document.querySelector('.download-card b').textContent = downloadCopy[0];
  document.querySelector('.download-card small').textContent = downloadCopy[1];
  document.querySelector('.faq .section-heading p').textContent = copy.faqLabel;
  document.querySelector('.faq .section-heading h2').textContent = copy.faqTitle;
  translate('.faq summary', copy.faqQuestions);
  document.querySelectorAll('.faq summary').forEach((summary) => summary.insertAdjacentHTML('beforeend', '<span>+</span>'));
  translate('.faq details p', copy.faqAnswers);
  document.querySelector('.faq-cta p').textContent = copy.cta;
  document.querySelector('.faq-cta a').textContent = copy.ctaButton;
  document.querySelector('.footer-inner > p').innerHTML = `${copy.footer}<a href="mailto:contato@marlonflix.com">contato@marlonflix.com</a>`;
  translate('.footer-links a', copy.footerLinks);
  localStorage.setItem('marlonflix-language', language);
}

const savedLanguage = localStorage.getItem('marlonflix-language') || 'pt-BR';
languageSelect.value = savedLanguage;
setLanguage(savedLanguage);
languageSelect.addEventListener('change', () => setLanguage(languageSelect.value));

const movieModal = document.querySelector('#movie-modal');
const modalPoster = document.querySelector('#modal-poster-img');
const modalTitle = document.querySelector('#modal-title');
const modalGenre = document.querySelector('#modal-genre');
const modalSynopsis = document.querySelector('#modal-synopsis');

document.querySelectorAll('.movie-card').forEach((card) => {
  const openModal = () => {
    const isEnglish = document.documentElement.lang === 'en';
    const prefix = isEnglish ? 'en' : '';
    modalPoster.src = card.dataset.poster;
    modalPoster.alt = card.dataset[prefix ? 'enTitle' : 'title'] || card.dataset.title;
    modalTitle.textContent = card.dataset[prefix ? 'enTitle' : 'title'] || card.dataset.title;
    modalGenre.textContent = card.dataset[prefix ? 'enGenre' : 'genre'] || card.dataset.genre;
    modalSynopsis.textContent = card.dataset[prefix ? 'enSynopsis' : 'synopsis'] || card.dataset.synopsis;
    movieModal.classList.add('open');
    movieModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  card.addEventListener('click', openModal);
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(); }
  });
});

movieModal.querySelectorAll('[data-close]').forEach((el) => {
  el.addEventListener('click', () => {
    movieModal.classList.remove('open');
    movieModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && movieModal.classList.contains('open')) {
    movieModal.classList.remove('open');
    movieModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
});
