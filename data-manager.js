// data-manager.js - общие функции для работы с данными
class DataManager {
    static async loadProducts() {
        try {
            const response = await fetch('products.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log('Загружено товаров:', data.products.length);
            return data.products;
        } catch (error) {
            console.error('Ошибка загрузки товаров:', error);
            // Возвращаем тестовые данные если файл не загрузился
            return this.getFallbackProducts();
        }
    }

    static getFallbackProducts() {
        return [
            {
                "id": "1",
                "category": "Верхняя одежда",
                "price": 595500,
                "brand": "Bottega Veneta",
                "sizes": ["M", "L", "XL"],
                "name": "BOTTEGA VENETTA Кожанный бомбер",
                "img": "bottega-puffer.jpg",
                "description": "Стильный кожаный бомбер от Bottega Veneta."
            },
            {
                "id": "2",
                "category": "Джинсы и брюки",
                "price": 78600,
                "brand": "Maison Margiela",
                "sizes": ["S", "M", "L"],
                "name": "MAISON MARGIELA Спортивные брюки",
                "img": "margiela-pants.jpg",
                "description": "Удобные спортивные брюки Maison Margiela."
            },
            {
                "id": "3",
                "category": "Футболки и лонгсливы",
                "price": 59950,
                "brand": "Maison Margiela",
                "sizes": ["XS", "S", "M", "L", "XL"],
                "name": "MAISON MARGIELA Футболка \"Distressed Logo\"",
                "img": "margiela-t-shorts.jpg",
                "description": "Классическая футболка с логотипом Maison Margiela."
            }
        ];
    }

    static searchProducts(products, searchTerm, filters = {}) {
        return products.filter(product => {
            const nameMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
            const categoryMatch = !filters.category || filters.category === 'all' || product.category === filters.category;
            const brandMatch = !filters.brands || filters.brands.length === 0 || filters.brands.includes(product.brand);
            const priceMatch = !filters.maxPrice || product.price <= filters.maxPrice;
            
            return nameMatch && categoryMatch && brandMatch && priceMatch;
        });
    }

    static saveToCart(product, size) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItemIndex = cart.findIndex(
            item => item.id === product.id && item.size === size
        );
        
        if (existingItemIndex !== -1) {
            cart[existingItemIndex].quantity += 1;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                img: product.img,
                size: size,
                quantity: 1
            });
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        return cart;
    }

    static getCart() {
        return JSON.parse(localStorage.getItem('cart')) || [];
    }

    static clearCart() {
        localStorage.removeItem('cart');
    }
}