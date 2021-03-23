const pic = document.querySelector('.pic');

const tl = new Timeline();
tl.fromTo(pic, 1, { height: "0%"},{ height: "80%", ease: power2.easeInout });
