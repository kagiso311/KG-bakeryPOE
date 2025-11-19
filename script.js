/* ===========================
   LIGHTBOX GALLERY
=========================== */
const images = document.querySelectorAll(".lightbox-img");
const lightbox = document.getElementById("lightbox");
const lightboxContent = document.getElementById("lightbox-content");
const closeBtn = document.querySelector(".close");

images.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxContent.src = img.src;
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

/* ===========================
   MENU SEARCH FILTER
=========================== */
const search = document.getElementById("search");
const menuList = document.getElementById("menu-list");

if (search) {
    search.addEventListener("keyup", () => {
        let filter = search.value.toLowerCase();
        let items = menuList.getElementsByTagName("li");

        for (let i of items) {
            let text = i.textContent.toLowerCase();

            if (text.includes(filter)) {
                i.style.display = "block";
            } else {
                i.style.display = "none";
            }
        }
    });
}

/* ===========================
   CONTACT FORM VALIDATION
=========================== */
const contactForm = document.getElementById("contactForm");
const contactResponse = document.getElementById("contact-response");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let type = document.getElementById("messageType").value.trim();
        let message = document.getElementById("message").value.trim();

        if (!name || !email || !type || !message) {
            contactResponse.textContent = "❌ Please fill in all fields.";
            contactResponse.style.color = "red";
            return;
        }

        contactResponse.textContent = "✅ Your message has been sent!";
        contactResponse.style.color = "lightgreen";
    });
}

/* ===========================
   ENQUIRY FORM (PRICE CALCULATOR)
=========================== */
const enquiryForm = document.getElementById("enquiryForm");
const costOutput = document.getElementById("cost-output");

if (enquiryForm) {
    enquiryForm.addEventListener("submit", (e) => {
        e.preventDefault();

        let price = document.getElementById("product").value;
        let qty = document.getElementById("qty").value;

        if (!price || !qty || qty <= 0) {
            costOutput.textContent = "❌ Please select a product and valid quantity.";
            costOutput.style.color = "red";
            return;
        }

        let total = price * qty;
        costOutput.textContent = `Estimated Cost: R${total}`;
        costOutput.style.color = "lightgreen";
    });
}
