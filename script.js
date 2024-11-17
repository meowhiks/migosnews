const button = document.querySelector("#scrollback");
const gate = 500;

const onScroll = () => {
    if (window.scrollY > gate) {
        button.style.opacity = "1";
    } else {
        button.style.opacity = "0";
    }
};

window.addEventListener("scroll", onScroll);
onScroll();

const scrollBack = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

button.addEventListener("click", scrollBack);