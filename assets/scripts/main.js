const faqItems = document.querySelectorAll(".js-faq-item");
const faqQuestions = document.querySelectorAll(".p-faq__question");

faqQuestions.forEach((q) => {
  q.addEventListener("click", function () {
    const next = q.nextElementSibling;
    if (next.classList.contains("open")) {
      next.classList.remove("open");
    } else {
      next.classList.add("open");
    }
  });
});

const header = document.querySelector(".l-header");

const navOpen = () => {
  if (header.classList.contains("nav-open")) {
    header.classList.remove("nav-open");
		document.body.style.overflow="";
  } else {
		header.classList.add("nav-open");
		document.body.style.overflow="hidden";
  }
};

// price 横スクロールで矢印消す
const priceTable = document.querySelector(".js-price__table");
console.log(priceTable)
const priceButtonNext = document.querySelector('.js-price-button-next');
console.log(priceButtonNext)

const disappearArrow = () => {
	priceButtonNext.classList.add('u-opacity0');
};
const appearArrow = () => {
	priceButtonNext.classList.remove('u-opacity0');
}

priceTable.addEventListener("scroll",()=>{
	const offsetX = priceTable.scrollLeft;
	console.log(offsetX);
	disappearArrow()
	if(offsetX === 0){
		appearArrow();
	}
});
