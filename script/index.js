addHeader();
addFooter();

function addHeader() {

    let URL = document.URL;
    let path = "";

    if (URL.indexOf("page") == -1) {
        path = ".";
    } else {
        path = "..";
    };

    let header = document.getElementsByTagName('header');

    let div = document.createElement('div');
    div.className = "caixa";
    header[0].appendChild(div);

    let h1 = document.createElement('h1');
    div.appendChild(h1);

    let img = document.createElement('img');
    img.src = path + "/img/logo.png";
    console.log(img.src);
    h1.appendChild(img);

    let nav = document.createElement('nav');
    div.appendChild(nav);

    let ul = document.createElement('ul');
    nav.appendChild(ul);

    let liHome = document.createElement('li');
    liHome.innerHTML = `<a href="${path}/index.html">Home</a>`;
    console.log(liHome.innerHTML);
    ul.appendChild(liHome);

    let liProduto = document.createElement('li');
    liProduto.innerHTML = `<a href="${path}/page/produtos.html">Produtos</a>`;
    ul.appendChild(liProduto);


    let liContato = document.createElement('li');
    liContato.innerHTML = `<a href="${path}/page/contatos.html">Contatos</a>`;
    ul.appendChild(liContato);

    console.log(header[0]);
}

function addFooter() {

    let URL = document.URL;
    let path = "";

    if (URL.indexOf("page") == -1) {
        path = ".";
    } else {
        path = "..";
    };


    let footer = document.getElementsByTagName('footer');

    let img = document.createElement('img');
    img.src = path + "/img/logo-branco.png";

    console.log(img.src);
    footer[0].appendChild(img);

    let p = document.createElement('p');
    p.className = "copyright";
    p.innerText = "&copy; Copyright Barbearia Alura -2019";
    footer[0].appendChild(p);
}