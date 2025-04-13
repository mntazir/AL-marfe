const translations = {
    ar: {
        headerTitle: "منتجاتنا المميزة",
        contactTitle: "تواصل معنا الآن",
        contactDesc: "للطلب أو الاستفسار، يمكنك التواصل معنا مباشرة عبر الواتساب",
        whatsappBtn: "تواصل عبر الواتساب",
        footerText: "جميع الحقوق محفوظة &copy; 2025 - مكتبة المعارف",
        products: [
            {
                id: 1,
                title: "كوب فاخر",
                description: "تصميم مميز ومتين للاستخدام اليومي.",
                image: "path/to/cup-image.jpg"
            },
            {
                id: 2,
                title: "ملابس أنيقة",
                description: "خامة عالية الجودة ومناسبة لجميع الفصول.",
                image: "path/to/clothing-image.jpg"
            },
            {
                id: 3,
                title: "كتاب تعليمي",
                description: "مصدر قيم للمعلومات والمعرفة.",
                image: "path/to/book-image.jpg"
            }
        ]
    }
};

let currentLang = 'ar';

function displayProducts() {
    const gallery = document.getElementById('productGallery');
    gallery.innerHTML = '';
    const products = translations[currentLang].products;

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="product-image" onclick="openModal('${product.image}')">
            <h3>${product.title}</h3>
            <p>${product.description}</p>
        `;
        gallery.appendChild(productItem);
    });
}

function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modal.style.display = "flex";
    modalImg.src = imageSrc;
}

function closeModal() {
    document.getElementById('imageModal').style.display = "none";
}

window.onload = function () {
    displayProducts();
    window.onclick = function (event) {
        const modal = document.getElementById('imageModal');
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
};