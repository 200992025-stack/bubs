document.addEventListener("DOMContentLoaded", function() {
    
    // 1. ANIMAÇÃO AO ROLAR (REVEAL)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // 2. CARROSSEL DE EVENTOS (Seu original)
    var swiperEventos = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1400: { slidesPerView: 4 }
        }
    });

    // 3. NOVO: CARROSSEL DO CARDÁPIO (O que faltava)
    // Note que usamos o nome da classe ".swiperCardapio" que colocamos no HTML
    var swiperCardapio = new Swiper(".swiperCardapio", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            600: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1200: { slidesPerView: 4 }
        }
    });

    // 4. LÓGICA DO MODAL DE COMPRA
    const modal = document.getElementById("modalCompra");
    const btnFechar = document.getElementById("btnFechar");
    const nomeEvento = document.getElementById("eventoNome");
    const dataEvento = document.getElementById("eventoData");

    document.querySelectorAll('.ingresso').forEach(botao => {
        botao.addEventListener('click', function() {
            const card = this.closest('.event-info');
            nomeEvento.innerText = "Ingresso: " + card.querySelector('h3').innerText;
            dataEvento.innerText = card.querySelector('.data').innerText;
            modal.style.display = "flex";
        });
    });

    if(btnFechar) {
        btnFechar.onclick = () => modal.style.display = "none";
    }
    
    window.onclick = (event) => { 
        if (event.target == modal) modal.style.display = "none"; 
    }
});