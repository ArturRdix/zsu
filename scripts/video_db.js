const videos = [
  {
    iframe:
      '<iframe src="https://www.youtube.com/embed/HEMzhynSsEY?si=2OqFUdZ7PRVQNskl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    title: "Цілодобово нищимо ворога | ЗСУ 425 ОШБ СКАЛА",
  },
  {
    iframe:
      '<iframe src="https://www.youtube.com/embed/2qsqxa1VqVs?si=Fe2oj0MMPF7d4o2BP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    title: "Зачистка села від окупантів | 425 ОШБ «СКАЛА»",
  },
  {
    iframe:
      '<iframe src="https://www.youtube.com/embed/BGf4dyeJdlQ?si=SsS7hnV_hCPwrCV9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    title: "SKALA - Покровськ",
  },
  {
    iframe:
      '<iframe src="https://www.youtube.com/embed/BaVr_VVFA7c?si=AWjMa9zpNcqVG8H6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    title: "Навідник про бій в оточенні | 425 ОШБ «СКАЛА»",
  },
  {
    iframe:
      '<iframe src="https://www.youtube.com/embed/WInESUyhONw?si=-oOX9X8qUo73-JXm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    title: "Перші хвилини після штурму | 425 ОШБ «СКАЛА»",
  },
  {
    iframe:
      '<iframe src="https://www.youtube.com/embed/LX6PyR1-cbM?si=_F1RYoy878NVpxPI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    title: "Що відбувається з 210 батальйоном ТРО? 425 ОШБ Скала",
  },
  {
    iframe:
      '<iframe src="https://www.youtube.com/embed/pIDZlcgraJ8?si=_P4y0hlN1doPoYfZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    title: "«НАС КИДАЮТ НА МЯСО В ШТУРМ» – росіяни, які потрапили у полон «СКАЛИ»",
  },
];

// Получаем контейнер для слайдов
const swiperWrapper = document.getElementById("swiper-wrapper");

// Генерируем слайды
videos.forEach((video) => {
  const slide = document.createElement("div");
  slide.classList.add("swiper-slide");

  const iframeItem = document.createElement("div");
  iframeItem.classList.add("iframe-item");

  const iframe = document.createElement("div");
  iframeItem.innerHTML = video.iframe;

  const title = document.createElement("h2");
  title.classList.add("title-video");
  title.innerText = video.title;

  const logo = document.createElement("img");
  logo.src = "/assets/img/yt_logo.png";
  logo.width = 50;
  logo.alt = "YouTube logo";

  iframeItem.appendChild(iframe);
  iframeItem.appendChild(title);
  iframeItem.appendChild(logo);

  slide.appendChild(iframeItem);

  swiperWrapper.appendChild(slide);
});
