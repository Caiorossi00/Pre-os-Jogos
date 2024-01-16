let jogos = [
  {
    nome: "Dark Souls - Japanese",
    precoTotal: 150,
    precoDesejado: 100,
    imagem:
      "https://darksouls-portuguese.wiki.fextralife.com/file/Dark-Souls---Portuguese/capa_dark_souls_ps3_japao2.jpg",
    comprado: "nao",
  },
  {
    nome: "Dark Souls Remastered",
    precoTotal: 80,
    precoDesejado: 50,
    imagem: "https://m.media-amazon.com/images/I/71+qNsYZgEL._AC_SX569_.jpg",
    comprado: "sim",
  },
  {
    nome: "Dark Souls II",
    precoTotal: 150,
    precoDesejado: 100,
    imagem:
      "https://d3tvwjfge35btc.cloudfront.net/Assets/07/123/L_p0027012307.jpg",
    comprado: "nao",
  },
  {
    nome: "Dark Souls II",
    precoTotal: 100,
    precoDesejado: 60,
    imagem: "https://m.media-amazon.com/images/I/91f3S5K+QnL._AC_SX569_.jpg",
    comprado: "sim",
  },
  {
    nome: "Dark Souls II",
    precoTotal: 150,
    precoDesejado: 100,
    imagem: "https://m.media-amazon.com/images/I/81cE54LtHML._AC_SX569_.jpg",
    comprado: "nao",
  },
  {
    nome: "Dark Souls III",
    precoTotal: 80,
    precoDesejado: 50,
    imagem: "https://m.media-amazon.com/images/I/718rBrnOR5L._AC_SX425_.jpg",
    comprado: "sim",
  },
  {
    nome: "Dark Souls III",
    precoTotal: 150,
    precoDesejado: 80,
    imagem:
      "https://d3tvwjfge35btc.cloudfront.net/Assets/97/340/L_p0063834097.jpg",
    comprado: "nao",
  },
  {
    nome: "Dark Souls Trilogy",
    precoTotal: 250,
    precoDesejado: 180,
    imagem: "https://m.media-amazon.com/images/I/71G4xW5VmxL._AC_SX569_.jpg",
    comprado: "nao",
  },
  {
    nome: "Demon's Souls",
    precoTotal: 80,
    precoDesejado: 40,
    imagem:
      "https://i5.walmartimages.com/seo/Demon-s-Souls-Greatest-Hits-PlayStation-3_ba3af0a4-6c69-4436-8034-e526a9bdf43f.788ecd945215fd03775278208045b070.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    comprado: "nao",
  },
  {
    nome: "Demon's Souls - Black Phantom Edition",
    precoTotal: 250,
    precoDesejado: 180,
    imagem:
      "https://images.pushsquare.com/a87af9ece044c/demons-souls-cover.cover_large.jpg",
    comprado: "nao",
  },
  {
    nome: "Demon's Souls - Greatest Hits",
    precoTotal: 80,
    precoDesejado: 40,
    imagem: "https://m.media-amazon.com/images/I/710hbMLSvNL.jpg",
    comprado: "sim",
  },
  {
    nome: "Demon's Souls - Favoritos",
    precoTotal: 600,
    precoDesejado: 300,
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_784734-MLB52047415355_102022-O.webp",
    comprado: "nao",
  },
  {
    nome: "Demon's Souls - PS3",
    precoTotal: 80,
    precoDesejado: 40,
    imagem:
      "https://cdn.awsli.com.br/600x450/1175/1175062/produto/75094671/559b1a3518.jpg",
    comprado: "nao",
  },
  {
    nome: "Demon's Souls - Japanese",
    precoTotal: 150,
    precoDesejado: 80,
    imagem: "https://m.media-amazon.com/images/I/51WOy7otHHL._SL500_.jpg",
    comprado: "nao",
  },
  {
    nome: "Demon's Souls - PS5",
    precoTotal: 100,
    precoDesejado: 60,
    imagem: "https://m.media-amazon.com/images/I/81dV2v47vpL._AC_SX679_.jpg",
    comprado: "nao",
  },
  {
    nome: "Bloodborne - Playstation Hits",
    precoTotal: 50,
    precoDesejado: 30,
    imagem: "https://m.media-amazon.com/images/I/71TlDBQytOL._AC_SX679_.jpg",
    comprado: "sim",
  },
  {
    nome: "Bloodborne - GOTY Edition",
    precoTotal: 130,
    precoDesejado: 100,
    imagem:
      "https://www.cdiscount.com/pdt2/4/4/3/1/550x550/son0711719843443/rw/playstation-4-bloodborne-game-of-the-year-editio.jpg",
    comprado: "nao",
  },
  {
    nome: "Bloodborne - The Old Hunter Edition",
    precoTotal: 330,
    precoDesejado: 150,
    imagem: "https://img.ws.mms.shopee.ph/9f425c7eb7089b3816b10f7e658efb23",
    comprado: "nao",
  },
  {
    nome: "Sekiro",
    precoTotal: 150,
    precoDesejado: 80,
    imagem: "https://m.media-amazon.com/images/I/81awoHeF4DL._AC_SX679_.jpg",
    comprado: "nao",
  },
  {
    nome: "Sekiro - GOTY Edition",
    precoTotal: 200,
    precoDesejado: 120,
    imagem: "https://m.media-amazon.com/images/I/81DK-nYLmLL._AC_SX522_.jpg",
    comprado: "nao",
  },
  {
    nome: "Elden Ring - PS4",
    precoTotal: 120,
    precoDesejado: 80,
    imagem: "https://m.media-amazon.com/images/I/61xj58FOB+L._AC_SX679_.jpg",
    comprado: "nao",
  },
  {
    nome: "Elden Ring - PS5",
    precoTotal: 130,
    precoDesejado: 80,
    imagem: "https://m.media-amazon.com/images/I/6161slXZUTL._AC_SX679_.jpg",
    comprado: "nao",
  },
];

function displayJogos() {
  let vitrine = document.querySelector("#vitrine");

  for (let jogo of jogos) {
    let jogoHTML = `
        <div class="${jogo.comprado === "sim" ? "comprado" : ""}">
          <h2>${jogo.nome}</h2>
          <p>Preço: R$ ${jogo.precoTotal.toFixed(2)}</p>
          <p>Preço Desejado: R$ ${jogo.precoDesejado.toFixed(2)}</p>
          <img src="${jogo.imagem}" alt="${jogo.nome}"/>
         <br><br><br><br><br><br><br><br>
        </div>
      `;

    vitrine.innerHTML += jogoHTML;
  }
}

displayJogos();
