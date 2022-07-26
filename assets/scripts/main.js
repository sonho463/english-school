const faqItems = document.querySelectorAll(".js-faq-item");
const faqQuestions = document.querySelectorAll(".p-faq__question");


faqQuestions.forEach((q)=>{
	q.addEventListener('click',function(){
		const next = q.nextElementSibling;
		if(next.classList.contains('open')){
			next.classList.remove('open')
		} else {
			next.classList.add('open')
		}
	})
})
