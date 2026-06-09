window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if(loader){
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.transition = "0.8s ease";

            setTimeout(() => {
                loader.style.display = "none";
                document.body.classList.add("ready");
            }, 800);
        }, 1200);
    }
});


// 🌐 BOTÓN PRINCIPAL
function startEffect(){
    document.body.style.transform = "scale(1.01)";

    setTimeout(() => {
        document.body.style.transform = "scale(1)";
    }, 200);

    alert("🌐 Aureonex Studio iniciado");
}


// 🎮 EFECTO MOUSE (LUZ DINÁMICA)
document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    document.documentElement.style.setProperty("--x", x + "px");
    document.documentElement.style.setProperty("--y", y + "px");
});


// ✨ ANIMACIÓN DE ENTRADA PARA CARDS
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

cards.forEach(card => {
    card.classList.add("hide");
    observer.observe(card);
});