const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");
/* Kodlar Buradan aşağıya */
let menu = document.querySelectorAll("nav a");
// menu[0].textContent = siteContent.nav["nav-item-1"];
// menu[1].textContent = siteContent.nav["nav-item-2"];
// menu[2].textContent = siteContent.nav["nav-item-3"];
// menu[3].textContent = siteContent.nav["nav-item-4"];
// menu[4].textContent = siteContent.nav["nav-item-5"];
// menu[5].textContent = siteContent.nav["nav-item-6"];

//tek tek yapsaydım yukarıdaki gibi yapardım, veya fereach kullanılır
//eğik tırnak kullanarak içinde index kullanabildim

menu.forEach(
  (item, index) => (item.textContent = siteContent.nav[`nav-item-${index + 1}`])
);

menu.forEach((item) => item.setAttribute("class", "italic"));
//!veya
//! menu.forEach((item) => item.classList.add("italic"));

//!RESİMLERİ EKLEME

//!önce seçip sonra ekleme yapabilirsin noktalarla birleştirerek
document
  .querySelector("img")
  .setAttribute("src", siteContent.images["logo-img"]);

//!olmadı:
// document
//   .querySelector("img")
//   .setAttribute("src", Object.values(siteContent.images["logo-img"]));

//!veya seçtiğine bir isim verirsin sonra ekleme yaparsın
// let logoresmi = document.querySelector("img");
// logoresmi.setAttribute("src", siteContent.images["logo-img"]);

//!foreachle olur mu? olmadı
// let resimler=document.querySelectorAll("img");
// resimler.forEach((item, index)=>item.setAttribute("src", siteContent.values))

document
  .querySelectorAll("img")[1]
  .setAttribute("src", siteContent.images["cta-img"]);
document
  .querySelectorAll("img")[2]
  .setAttribute("src", siteContent.images["accent-img"]);

//!H1
document.querySelector("h1").textContent = siteContent.cta.h1;
//!Buton
document.querySelector("button").textContent = siteContent.cta.button;

//!H4
document.querySelector("h4").textContent =
  siteContent["ana-içerik"]["özellikler-h4"];

document.querySelector("p").textContent =
  siteContent["ana-içerik"]["özellikler-içerik"];

document.querySelectorAll("h4")[1].textContent =
  siteContent["ana-içerik"]["hakkımızda-h4"];

document.querySelectorAll("p")[1].textContent =
  siteContent["ana-içerik"]["hakkımızda-içerik"];

document.querySelectorAll("h4")[2].textContent =
  siteContent["ana-içerik"]["servisler-h4"];

document.querySelectorAll("p")[2].textContent =
  siteContent["ana-içerik"]["servisler-içeriği"];

document.querySelectorAll("h4")[3].textContent =
  siteContent["ana-içerik"]["ürünler-h4"];

document.querySelectorAll("p")[3].textContent =
  siteContent["ana-içerik"]["ürünler-içeriği"];

document.querySelectorAll("h4")[4].textContent =
  siteContent["ana-içerik"]["vizyon-h4"];

document.querySelectorAll("p")[4].textContent =
  siteContent["ana-içerik"]["vizyon-içeriği"];

document.querySelectorAll("h4")[5].textContent =
  siteContent["iletisim"]["iletişim-h4"];

document.querySelectorAll("p")[6].textContent =
  siteContent["iletisim"]["adres"];

document.querySelectorAll("p")[7].textContent =
  siteContent["iletisim"]["telefon"];

document.querySelector("footer a").textContent =
  siteContent["footer"]["copyright"];

document.querySelector("footer a").setAttribute("class", "bold");
