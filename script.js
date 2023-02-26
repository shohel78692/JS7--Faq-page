var faqs = document.querySelectorAll(".faq");

for (var i = 0; i < faqs.length; i++) {
    faqs[i].addEventListener("click", function() {
        this.classList.toggle("active");
    });
}