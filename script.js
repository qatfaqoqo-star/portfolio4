// ==========================
// تسجيل الدخول
// ==========================
document.getElementById('login-form')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const msg = document.getElementById('loginMsg');

    // تحقق من اسم المستخدم وكلمة المرور
    if(email === "قطفة" && password === "12345") {
        msg.style.color = "green";
        msg.textContent = "تم تسجيل الدخول بنجاح!";
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);
    } else {
        msg.style.color = "red";
        msg.textContent = "اسم المستخدم أو كلمة المرور غير صحيحة!";
    }
});

// ==========================
// إضافة للسلة
// ==========================
const addCartButtons = document.querySelectorAll('.add-to-cart');
addCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('تم إضافة المنتج إلى السلة بنجاح!');
    });
});

// ==========================
// تحريك العناصر عند النزول بالسكرول (fade-up effect)
// ==========================
const faders = document.querySelectorAll('.fade-up');

const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// ==========================
// نموذج الاتصال
// ==========================
document.getElementById('contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('تم إرسال رسالتك بنجاح، سيتم التواصل معك قريباً');
    this.reset();
});