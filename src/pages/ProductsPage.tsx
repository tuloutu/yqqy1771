import { useState } from "react";
import { products, categories } from "../data/products";
import ProductModal from "../components/ProductModal";

function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("全部");
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  const filteredProducts = selectedCategory === "全部"
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      <div className="bg-[#862828] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 font-['PingFang_SC']">产品系列</h1>
          <p className="text-xl opacity-90">精心调制,品质统一,即刻出杯</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? "bg-[#862828] text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-[#862828] font-medium">{product.category}</span>
                <h3 className="text-2xl font-bold mt-2 mb-2 text-[#333333] font-['PingFang_SC']">
                  {product.name}
                </h3>
                <p className="text-gray-600">{product.description}</p>
                <button className="mt-4 text-[#862828] font-medium hover:underline">
                  了解更多 →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
}

export default ProductsPage;
