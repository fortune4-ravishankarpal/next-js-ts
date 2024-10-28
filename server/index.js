// Import dependencies
const { faker } = require("@faker-js/faker");
const fs = require("fs");

// Helper function to generate random semantic version
const generateVersion = () => `${faker.number.int({ min: 1, max: 3 })}.${faker.number.int({ min: 0, max: 9 })}.${faker.number.int({ min: 0, max: 9 })}`;

// Generate products and variants data
const generateData = () => {
    const products = [];
    const variants = [];

    for (let i = 1; i <= 10; i++) {
        // Create a product with status and version
        const product = {
            id: i.toString(),
            name: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            category: faker.commerce.department(),
            price: parseFloat(faker.commerce.price()),
            stock: faker.number.int({ min: 1, max: 100 }),
            rating: parseFloat((Math.random() * 5).toFixed(1)),
            status: faker.helpers.arrayElement(["published", "draft"]), // Product status
            version: generateVersion(), // Product version
        };
        products.push(product);

        // Create 2-3 variants for each product with status and version
        const variantCount = faker.number.int({ min: 2, max: 3 });
        for (let j = 1; j <= variantCount; j++) {
            const variant = {
                id: `${i}-${j}`,
                color: faker.color.human(),
                size: faker.helpers.arrayElement(["S", "M", "L", "XL"]),
                material: faker.commerce.productMaterial(),
                sku: `SKU-${i}-${j}`,
                productId: product.id,
                status: faker.helpers.arrayElement(["published", "draft"]), // Variant status
                version: generateVersion(), // Variant version
            };
            variants.push(variant);
        }
    }

    return { products, variants };
};

// Write the data to db.json
const data = generateData();
fs.writeFileSync("db.json", JSON.stringify(data, null, 2));
console.log("Dummy data generated in db.json");
