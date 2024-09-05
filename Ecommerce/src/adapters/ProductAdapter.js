export const createProductAdaptedFromFirebase = (doc) => {
    const data = doc.data()

    return {
        id: data.id,
        name: data.name,
        price: data.price,
        category: data.category,
        img: data.img,
        stock: data.stock,
        description: data.description
    }
}