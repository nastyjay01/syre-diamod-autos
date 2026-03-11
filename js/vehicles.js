/**
 * Syre Diamond Autos - Vehicle Loader
 * Loads vehicles from JSON and displays them
 */

(function() {
    'use strict';

    // Syre Diamond Autos - Vehicle Inventory
    // Edit this array to add/update your vehicles
    // Each vehicle needs: id, title, price, currency, year, mileage, transmission, fuel, brand, image, badge
    const vehicles = [
        {
            id: 1,
            title: 'Toyota Demio 2020',
            price: 1250000,
            currency: 'KSh',
            year: 2020,
            mileage: 45000,
            transmission: 'Automatic',
            fuel: 'Petrol',
            brand: 'toyota',
            image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=600&h=400&fit=crop',
            badge: 'In Stock'
        },
        {
            id: 2,
            title: 'Mazda CX-5 2019',
            price: 2800000,
            currency: 'KSh',
            year: 2019,
            mileage: 62000,
            transmission: 'Automatic',
            fuel: 'Petrol',
            brand: 'mazda',
            image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=600&h=400&fit=crop',
            badge: 'In Stock'
        },
        {
            id: 3,
            title: 'Mercedes-Benz C-Class 2021',
            price: 5500000,
            currency: 'KSh',
            year: 2021,
            mileage: 28000,
            transmission: 'Automatic',
            fuel: 'Petrol',
            brand: 'mercedes',
            image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&h=400&fit=crop',
            badge: 'Premium'
        },
        {
            id: 4,
            title: 'BMW X3 2020',
            price: 4900000,
            currency: 'KSh',
            year: 2020,
            mileage: 38000,
            transmission: 'Automatic',
            fuel: 'Diesel',
            brand: 'bmw',
            image: 'https://images.unsplash.com/photo-1556189250-72ba954e6061?w=600&h=400&fit=crop',
            badge: 'In Stock'
        },
        {
            id: 5,
            title: 'Nissan X-Trail 2018',
            price: 2100000,
            currency: 'KSh',
            year: 2018,
            mileage: 75000,
            transmission: 'Automatic',
            fuel: 'Petrol',
            brand: 'nissan',
            image: 'https://images.unsplash.com/photo-1580273916550-e323be2ebdd9?w=600&h=400&fit=crop',
            badge: 'In Stock'
        },
        {
            id: 6,
            title: 'Subaru Forester 2019',
            price: 2600000,
            currency: 'KSh',
            year: 2019,
            mileage: 55000,
            transmission: 'Automatic',
            fuel: 'Petrol',
            brand: 'subaru',
            image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=600&h=400&fit=crop',
            badge: 'AWD'
        },
        {
            id: 7,
            title: 'Honda Fit 2020',
            price: 1450000,
            currency: 'KSh',
            year: 2020,
            mileage: 42000,
            transmission: 'Automatic',
            fuel: 'Hybrid',
            brand: 'honda',
            image: 'https://images.unsplash.com/photo-1596711692663-55f8a04a8f34?w=600&h=400&fit=crop',
            badge: 'Hybrid'
        },
        {
            id: 8,
            title: 'Audi A4 2021',
            price: 4200000,
            currency: 'KSh',
            year: 2021,
            mileage: 22000,
            transmission: 'Automatic',
            fuel: 'Diesel',
            brand: 'audi',
            image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop',
            badge: 'Premium'
        }
    ];

    function formatPrice(price, currency) {
        return currency + ' ' + price.toLocaleString();
    }

    function createVehicleCard(vehicle) {
        return `
            <a href="vehicle-detail.html?id=${vehicle.id}" class="vehicle-card">
                <div class="vehicle-image">
                    <img src="${vehicle.image}" alt="${vehicle.title}" loading="lazy">
                    ${vehicle.badge ? `<span class="vehicle-badge">${vehicle.badge}</span>` : ''}
                </div>
                <div class="vehicle-content">
                    <h3 class="vehicle-title">${vehicle.title}</h3>
                    <div class="vehicle-price">${formatPrice(vehicle.price, vehicle.currency)}</div>
                    <div class="vehicle-meta">
                        <span>${vehicle.year}</span>
                        <span>${vehicle.mileage.toLocaleString()} km</span>
                        <span>${vehicle.transmission}</span>
                    </div>
                </div>
            </a>
        `;
    }

    function displayVehicles(vehicleList, container) {
        if (!container) return;
        container.innerHTML = vehicleList.map(createVehicleCard).join('');
    }

    function filterVehicles(query, brand, minPrice, maxPrice) {
        return vehicles.filter(v => {
            const matchesQuery = !query || v.title.toLowerCase().includes(query.toLowerCase());
            const matchesBrand = !brand || v.brand === brand;
            const matchesMinPrice = !minPrice || v.price >= parseInt(minPrice);
            const matchesMaxPrice = !maxPrice || v.price <= parseInt(maxPrice);
            return matchesQuery && matchesBrand && matchesMinPrice && matchesMaxPrice;
        });
    }

    document.addEventListener('DOMContentLoaded', function() {
        // Load featured vehicles on homepage
        const featuredContainer = document.getElementById('featured-vehicles');
        if (featuredContainer) {
            displayVehicles(vehicles.slice(0, 8), featuredContainer);
        }

        // Handle search on vehicles page
        const urlParams = new URLSearchParams(window.location.search);
        const query = urlParams.get('q');
        const brand = urlParams.get('brand');
        const minPrice = urlParams.get('min_price');
        const maxPrice = urlParams.get('max_price');

        if (query || brand || minPrice || maxPrice) {
            const filtered = filterVehicles(query, brand, minPrice, maxPrice);
            const vehiclesContainer = document.getElementById('vehicles-list');
            if (vehiclesContainer) {
                if (filtered.length > 0) {
                    displayVehicles(filtered, vehiclesContainer);
                } else {
                    vehiclesContainer.innerHTML = '<p style="text-align: center; padding: 2rem; color: var(--color-gray-500);">No vehicles found matching your criteria.</p>';
                }
            }
        }
    });

    // Expose for external use
    window.SyreVehicles = {
        getAll: () => vehicles,
        getById: (id) => vehicles.find(v => v.id === parseInt(id)),
        filter: filterVehicles
    };

})();
