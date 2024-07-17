const products = [
    {
      id: "1",
      name: "Procesador AMD RYZEN 3 3200G 4.0GHz Turbo + Radeon Vega 8 AM4 Wraith Stealth Cooler",
      price: 99000,
      category: "Procesadores",
      img: "../src/assets/AMD_RYZEN_3_3200G_4.0GHz_Turbo_Radeon_Vega_8.jpg",
      stock: 115,
      description: "Descripcion de Iphone 12",
    },
    {
      id: "2",
      name: "Procesador AMD RYZEN 5 3600G 4.2GHz Turbo + Radeon Vega 8 AM4 Wraith Stealth Cooler",
      price: 149000,
      category: "Procesadores",
      img: "../src/assets/AMD_RYZEN_5_3600_4.2GHz_Turbo_AM4.jpg",
      stock: 93,
      description: "Descripcion de Samsung s21",
    },
    {
      id: "3",
      name: "Procesador Intel Core i5 10400 4.3GHz Turbo Socket 1200 Comet Lake",
      price: 169900,
      category: "Procesadores",
      img: "../src/assets/Intel_Core_i5_10400F_4.3GHz_Turbo_1200.jpg",
      stock: 85,
      description: "Descripcion de Ipad",
    },
    {
      id: "4",
      name: "Procesador Intel Core i7 12700F 4.9GHz Turbo Socket 1700 Alder Lake",
      price: 381900,
      category: "Procesadores",
      img: "../src/assets/Intel_Core_i7_12700F_4.9GHz_Turbo_Socket_1700.jpg",
      stock: 45,
      description: "Descripcion de Iphone 12",
    },
    {
      id: "5",
      name: "Procesador AMD RYZEN 7 7700 5.3GHz Turbo AM5",
      price: 379000,
      category: "Procesadores",
      img: "../src/assets/AMD_Ryzen_7_7700_5.3GHz_Turbo_AM5.jpg",
      stock: 60,
      description: "Descripcion de Samsung s21",
    },
    {
      id: "6",
      name: "Procesador AMD RYZEN 7 7700X 5.4GHz Turbo AM5 - No incluye Cooler - C/Video",
      price: 425000,
      category: "Procesadores",
      img: "../src/assets/AMD_Ryzen_7_7700X_5.4GHz_Turbo_AM5_No_incluye_Cooler.jpg",
      stock: 50,
      description: "Descripcion de Ipad",
    },
  ];
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });
  };
  
  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter((prod) => prod.category === categoryId));
      }, 1000);
    });
  };
  
  export const getProductById = (productoId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((prod) => prod.id === productoId));
      }, 1000);
    });
  };
  