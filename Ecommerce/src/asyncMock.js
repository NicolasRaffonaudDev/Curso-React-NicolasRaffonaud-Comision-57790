const products = [
    {
      id: "1",
      name: "Procesador AMD RYZEN 3 3200G",
      price: 99000,
      category: "Procesadores",
      img: "../src/assets/AMD_RYZEN_3_3200G_4.0GHz_Turbo_Radeon_Vega_8.jpg",
      stock: 15,
      description: "4.0GHz Turbo + Radeon Vega 8 AM4 Wraith Stealth Cooler",
    },
    {
      id: "2",
      name: "Procesador AMD RYZEN 5 3600G",
      price: 149000,
      category: "Procesadores",
      img: "../src/assets/AMD_RYZEN_5_3600_4.2GHz_Turbo_AM4.jpg",
      stock: 9,
      description: "4.2GHz Turbo + Radeon Vega 8 AM4 Wraith Stealth Cooler",
    },
    {
      id: "3",
      name: "Procesador Intel Core i5 10400",
      price: 169900,
      category: "Procesadores",
      img: "../src/assets/Intel_Core_i5_10400F_4.3GHz_Turbo_1200.jpg",
      stock: 22,
      description: "4.3GHz Turbo Socket 1200 Comet Lake",
    },
    {
      id: "4",
      name: "Procesador Intel Core i7 12700F",
      price: 381900,
      category: "Procesadores",
      img: "../src/assets/Intel_Core_i7_12700F_4.9GHz_Turbo_Socket_1700.jpg",
      stock: 11,
      description: "4.9GHz Turbo Socket 1700 Alder Lake",
    },
    {
      id: "5",
      name: "Procesador AMD RYZEN 7 7700 5.3GHz Turbo AM5",
      price: 379000,
      category: "Procesadores",
      img: "../src/assets/AMD_Ryzen_7_7700_5.3GHz_Turbo_AM5.jpg",
      stock: 4,
      description: "5.3GHz Turbo AM5",
    },
    {
      id: "6",
      name: "Procesador AMD RYZEN 7 7700X",
      price: 425000,
      category: "Procesadores",
      img: "../src/assets/AMD_Ryzen_7_7700X_5.4GHz_Turbo_AM5_No_incluye_Cooler.jpg",
      stock: 33,
      description: "5.4GHz Turbo AM5 - No incluye Cooler - C/Video",
    },
    {
      id: "7",
      name: "ASUS-Rog-Strix-B350-F-Gaming",
      price: 99000,
      category: "Motherboard",
      img: "../src/assets/asus_rog_strix_b350_f_gaming_1344792.jpg",
      stock: 12,
      description: "Descripcion ASUS",
    },
    {
      id: "8",
      name: "GIGABYTE-Z170",
      price: 149000,
      category: "Motherboard",
      img: "../src/assets/gigabyteZ170.jpeg",
      stock: 15,
      description: "Descripcion GIGABYTE",
    },
    {
      id: "9",
      name: "MSI-Z490",
      price: 169900,
      category: "Motherboard",
      img: "../src/assets/msiZ490.jpeg",
      stock: 22,
      description: "Descripcion de MSI",
    },
    {
      id: "10",
      name: "ASUS-ROG-STRIX-X99-Gaming",
      price: 381900,
      category: "Motherboard",
      img: "../src/assets/ASUS-ROG-STRIX-X99-Gaming-Motherboard.jpg",
      stock: 29,
      description: "Descripcion de ASUS",
    },
    {
      id: "11",
      name: "GIGABYTE-X299-AORUS-Gaming-9",
      price: 379000,
      category: "Motherboard",
      img: "../src/assets/GIGABYTE-X299-AORUS-Gaming-9-Motherboard.jpg",
      stock: 16,
      description: "Descripcion de GIGABYTE",
    },
    {
      id: "12",
      name: "MSI-MPG-X570-GamingEdge",
      price: 425000,
      category: "Motherboard",
      img: "../src/assets/msi-mpg-x570-gaming-edge-motherboard.jpg",
      stock: 7,
      description: "Descripcion de MSI",
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
  