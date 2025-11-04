// language-manager.js - общая система перевода для всех страниц
class LanguageManager {
    static translations = {
        ru: {
            // Общие элементы
            title: "Legit Store - Магазин одежды",
            clothing: "Одежда",
            shoes: "Обувь",
            accessories: "Аксессуары",
            bags: "Сумки",
            cart: "Корзина",
            newArrivals: "Новинки",
            copyright: "© 2025 Legit Storeee. Все права защищены.",
            
            // Товары
            jacketDesc: "Кожанный бомбер",
            shoesDesc: "Низкие кеды Replica \"Painted\"",
            bagDesc: "Сумка Cassette",
            hatDesc: "Хлопковая бейсболка",
            
            // Каталоги
            catalogClothing: "Каталог одежды",
            catalogShoes: "Каталог обуви",
            catalogAccessories: "Каталог аксессуаров",
            catalogBags: "Каталог сумок и портфелей",
            
            // Фильтры
            filter: "Фильтр",
            clothingType: "Вид одежды",
            shoesType: "Вид обуви",
            accessoryType: "Тип аксессуара",
            bagType: "Тип сумки",
            brand: "Бренд",
            priceRange: "Диапазон цены",
            size: "Размер",
            color: "Цвет",
            material: "Материал",
            maximum: "Максимум",
            
            // Категории
            allClothing: "ОДЕЖДА (ВСЕ)",
            outerwear: "ВЕРХНЯЯ ОДЕЖДА",
            tshirts: "ФУТБОЛКИ И ЛОНГСЛИВЫ",
            pants: "ДЖИНСЫ И БРЮКИ",
            shorts: "ШОРТЫ",
            sweatshirts: "СВИТШОТЫ И ХУДИ",
            
            allShoes: "ОБУВЬ (ВСЕ)",
            sneakers: "КРОССОВКИ",
            boots: "БОТИНКИ",
            sandals: "САНДАЛИИ",
            tufli: "ТУФЛИ",
            moccasins: "МОКАСИНЫ",
            sneakersLow: "КЕДЫ",
            
            allAccessories: "ВСЕ",
            belts: "РЕМНИ",
            glasses: "ОЧКИ",
            hats: "ГОЛОВНЫЕ УБОРЫ",
            
            allBags: "ВСЕ СУМКИ",
            backpacks: "РЮКЗАКИ",
            briefcases: "ПОРТФЕЛИ",
            shoulderBags: "СУМКИ ЧЕРЕЗ ПЛЕЧО",
            sportBags: "СПОРТИВНЫЕ СУМКИ",
            waistBags: "ПОЯСНЫЕ СУМКИ",
            
            // Корзина
            product: "Товар",
            name: "Название",
            price: "Цена",
            quantity: "Количество",
            total: "Итого",
            totalAmount: "Общая сумма:",
            checkout: "Оформить заказ",
            emptyCart: "Ваша корзина пуста.",
            remove: "Удалить",
            
            // Товар
            addToCart: "Добавить в корзину",
            
            // Заказ
            fullName: "ФИО *",
            email: "Электронная почта *",
            phone: "Телефон *",
            address: "Адрес доставки *",
            paymentMethod: "Способ оплаты *",
            confirmOrder: "Подтвердить заказ"
        },
        en: {
            // Common elements
            title: "Legit Store - Clothing Shop",
            clothing: "Clothing",
            shoes: "Shoes",
            accessories: "Accessories",
            bags: "Bags",
            cart: "Cart",
            newArrivals: "New Arrivals",
            copyright: "© 2025 Legit Storeee. All rights reserved.",
            
            // Products
            jacketDesc: "Leather bomber jacket",
            shoesDesc: "Low-top Replica \"Painted\" sneakers",
            bagDesc: "Cassette bag",
            hatDesc: "Cotton baseball cap",
            
            // Catalogs
            catalogClothing: "Clothing Catalog",
            catalogShoes: "Shoes Catalog",
            catalogAccessories: "Accessories Catalog",
            catalogBags: "Bags and Briefcases Catalog",
            
            // Filters
            filter: "Filter",
            clothingType: "Clothing Type",
            shoesType: "Shoes Type",
            accessoryType: "Accessory Type",
            bagType: "Bag Type",
            brand: "Brand",
            priceRange: "Price Range",
            size: "Size",
            color: "Color",
            material: "Material",
            maximum: "Maximum",
            
            // Categories
            allClothing: "CLOTHING (ALL)",
            outerwear: "OUTERWEAR",
            tshirts: "T-SHIRTS & LONGSLEEVES",
            pants: "JEANS & PANTS",
            shorts: "SHORTS",
            sweatshirts: "SWEATSHIRTS & HOODIES",
            
            allShoes: "SHOES (ALL)",
            sneakers: "SNEAKERS",
            boots: "BOOTS",
            sandals: "SANDALS",
            tufli: "SHOES",
            moccasins: "MOCCASINS",
            sneakersLow: "SNEAKERS",
            
            allAccessories: "ALL",
            belts: "BELTS",
            glasses: "GLASSES",
            hats: "HATS",
            
            allBags: "ALL BAGS",
            backpacks: "BACKPACKS",
            briefcases: "BRIEFCASES",
            shoulderBags: "SHOULDER BAGS",
            sportBags: "SPORT BAGS",
            waistBags: "WAIST BAGS",
            
            // Cart
            product: "Product",
            name: "Name",
            price: "Price",
            quantity: "Quantity",
            total: "Total",
            totalAmount: "Total amount:",
            checkout: "Checkout",
            emptyCart: "Your cart is empty.",
            remove: "Remove",
            
            // Product
            addToCart: "Add to Cart",
            
            // Order
            fullName: "Full Name *",
            email: "Email *",
            phone: "Phone *",
            address: "Delivery Address *",
            paymentMethod: "Payment Method *",
            confirmOrder: "Confirm Order"
        }
    };

    static init() {
        // Загружаем сохраненный язык или используем русский по умолчанию
        this.currentLang = localStorage.getItem('preferredLanguage') || 'ru';
        this.translatePage(this.currentLang);
        this.setupLanguageToggle();
    }

    static translatePage(lang) {
        // Обновляем title страницы
        document.title = this.translations[lang].title;
        
        // Обновляем все элементы с data-key атрибутом
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (this.translations[lang][key]) {
                element.textContent = this.translations[lang][key];
            }
        });
        
        // Обновляем визуальное состояние кнопки
        const langToggle = document.getElementById('lang-toggle');
        if (langToggle) {
            if (lang === 'en') {
                langToggle.classList.add('en');
            } else {
                langToggle.classList.remove('en');
            }
        }
    }

    static setupLanguageToggle() {
        const langToggle = document.getElementById('lang-toggle');
        if (langToggle) {
            langToggle.addEventListener('click', function() {
                LanguageManager.currentLang = LanguageManager.currentLang === 'ru' ? 'en' : 'ru';
                LanguageManager.translatePage(LanguageManager.currentLang);
                localStorage.setItem('preferredLanguage', LanguageManager.currentLang);
            });
        }
    }

    static getTranslation(key) {
        return this.translations[this.currentLang][key] || key;
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    LanguageManager.init();
});    