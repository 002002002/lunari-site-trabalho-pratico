const items = [
  {
    id: 1,
    title: "🏖️LENÇÓIS MARANHENSES",
    image: "assets/img/imagem-01.png", // imagem principal 
    description: "O Parque Nacional dos Lençóis Maranhenses é o destino perfeito para aqueles que buscam aventura e contemplação da natureza!!",
    info: {
      detalhe1: "NOME:Lencois maranhences",
      detalhe2: "Aguas cristalinas",
      detalhe3: "localizados no estado do Maranhão, na região nordeste do Brasil. ",
      detalhe4: "estado: BAHIA",
      detalhe5: "⭐⭐⭐⭐⭐",
    },
    gallery: ["imagem-01.png","gallery-id1-imagem-02.png","gallery-id1-imagem-03.png","",],
    destaque: true, // imagens relacionadas 
  },
  {
    id: 2,
    title: "⛰️CACHOEIRAS DA FUMAÇA",
    image: "assets/img/imagem-02.png",
    description: "A Cachoeira da Fumaça é uma imponente cachoeira brasileira, com queda livre de cerca de 380 metros,",
    info: {
      detalhe1: "NOME:Cachoeira da Fumaça",
      detalhe2: "localizada no município de Palmeiras",
      detalhe3: "O nome Fumaça vem do efeito de névoa que se forma devido à altura da queda e à força do vento, que impede a água de chegar ao chão em sua totalidade. A cachoeira é um dos principais pontos turísticos da região e atrai visitantes que buscam contemplar a paisagem e praticar atividades como trekking.",
      detalhe4: "⭐⭐⭐⭐⭐",

    },
    gallery: ["imagem-02.png","gallery-id2-imagem-03.png","assets/img/gallery-id2-imagem-04.png"],
    destaque: false,
  },
  {
    id: 3,
    title: "🏃🏻‍♂️LAGOA DA PAMPULHA-MG",
    image: "assets/img/imagem-03.png",
    description: "A Lagoa da Pampulha foi criada no início dos anos 1940, durante a gestão do prefeito Juscelino Kubitschek, com o objetivo de ampliar o abastecimento de água de Belo Horizonte",
    info: {
      detalhe1: "NOME:Lagoa da Pampulha",
      detalhe2: "localizada no município Belo Horizonte",
      detalhe3: "estado: Minas Gerais",
      detalhe4: "⭐⭐⭐⭐⭐",

    },
    gallery: ["imagem-03.png", "gallery-id3-imagem-02.png","gallery-id3-imagem-03.png"],
    destaque: true,
  },
  {
    id: 4,
    title: "🥾⛰️SERRA DA MANTIQUEIRA",
    image: "assets/img/gallery-id4-imagem-01.png",
    description: "A Serra da Mantiqueira oferece diversas opções de visita, desde atividades de aventura e contato com a natureza, a opções de lazer e turismo gastronômico. ",
    info: {
      detalhe1: "NOME:Serra da Mantiqueira",
      detalhe2: "se estende por São Paulo, Minas Gerais e Rio de Janeiro",
      detalhe3: "Para quem gosta de serras em São Paulo e proximidades, algumas opções incluem a Serra da Mantiqueira, com destinos como Campos do Jordão, Santo Antônio do Pinhal e São Bento do Sapucaí",
      detalhe4: "⭐⭐⭐⭐⭐",
    },
    gallery: ["gallery-id4-imagem-01.png"],
    destaque: false,
  },
  {
    id: 5,
    title: "🏝️ JERICOACOARA",
    image: "assets/img/gallery-id5-imagem-01.png",
    description: "Explore as dunas, lagoas e o pôr do sol inesquecível no Ceará.",
    info: {
      detalhe1: "NOME:Serra da Mantiqueira",
      detalhe2: "Jericoacoara é acessível apenas por veículos 4x4, preservando sua natureza intocada.",
      detalhe3: "A melhor época para visitar Jericoacoara é durante o segundo semestre, de julho a dezembro, quando as chuvas são menos frequentes e o clima é mais seco, ideal para aproveitar as praias e atividades ao ar livre. Além disso, a temporada de vento, que é favorável para esportes como kitesurf e windsurf, também ocorre nesse período. ",
      detalhe4: "⭐⭐⭐⭐⭐",
    },
    gallery: ["gallery-id5-imagem-02.png", "gallery-id5-imagem-02.png","gallery-id5-imagem-03.png","gallery-id5-imagem-04.png",],
    destaque: true,
  },
  {
    id: 6,
    title: "🏞️ CHAPADA DIAMANTINA",
    image: "assets/img/gallery-id6-imagem-01.png",
    description: "Cachoeiras, trilhas e cânions no coração da Bahia.",
    info: {
      detalhe1: "NOME:Serra da Mantiqueira",
      detalhe2: "A Chapada abriga a famosa Cachoeira da Fumaça, uma das mais altas do Brasil.",
      detalhe3: "A Chapada Diamantina fica bem no coração da Bahia, sertão onde nascem alguns dos principais rios da bacia hidrográfica baiana. A região de serras é protegida ainda pelo belo Parque Nacional da Chapada Diamantina e é um dos melhores destinos de ecoturismo do Brasil.",
      detalhe4: "⭐⭐⭐⭐⭐",
    },
    
    gallery: ["gallery-id6-imagem-01.png", "gallery-id6-imagem-02.png","gallery-id6-imagem-03.png","gallery-id6-imagem-04.png"],
    destaque: false,
  }
];

// Home
if (document.getElementById("carouselItems")) {
  const carousel = document.getElementById("carouselItems");
  const cards = document.getElementById("allItems");

  const destaques = items.filter(i => i.destaque);
  destaques.forEach((item, i) => {
    carousel.innerHTML += `
      <div class="carousel-item ${i === 0 ? "active" : ""}">
        <img src="${item.image}" class="d-block w-100" alt="${item.title}">
        <div class="carousel-caption d-none d-md-block">
          <h5>${item.title}</h5>
          <p>${item.description}</p>
        </div>
      </div>
    `;
  });

  items.forEach(item => {
    cards.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card h-100" onclick="location.href='detalhe.html?id=${item.id}'" style="cursor:pointer;">
          <img src="${item.image}" class="card-img-top" alt="${item.title}">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">${item.description}</p>
          </div>
        </div>
      </div>
    `;
  });
}

// Detalhe
if (document.getElementById("itemDetails")) {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const item = items.find(i => i.id === id);

  if (item) {
    document.getElementById("itemDetails").innerHTML = `
      <h2>${item.title}</h2>
      <p>${item.description}</p>
      <ul>
        <li>${item.info.detalhe1}</li>
        <li>${item.info.detalhe2}</li>
        <li>${item.info.detalhe3}</li>
        <li>${item.info.detalhe4}</li>
        <li>${item.info.detalhe5}</li>
      </ul>
    `;

    const gallery = document.getElementById("itemGallery");
    item.gallery.forEach(img => {
      gallery.innerHTML += `
        <div class="col-md-3 mb-3">
          <img src="assets/img/${img}" class="img-fluid rounded" alt="">
        </div>
      `;
    });
  }
}
