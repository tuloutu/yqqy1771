import { useState } from "react";
import { products, categories, categoriesEn } from "../data/products";
import ProductModal from "../components/ProductModal";
import { useT } from "../i18n/LanguageContext";

function ProductsPage() {
  const { t, lang } = useT();
  const isZh = lang === "zh";
  const p = t.products;
  const catList = isZh ? categories : categoriesEn;
  const [selectedCategory, setSelectedCategory] = useState(catList[0]);
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  const filteredProducts = selectedCategory === catList[0]
    ? products
    : products.filter(prod => (isZh ? prod.category : prod.categoryEn) === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      <div className="bg-[#862828] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 font-['PingFang_SC']">{p.title}</h1>
          <p className="text-xl opacity-90">{p.subtitle}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap gap-4 mb-8">
          {catList.map((cat: string) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-[#862828] text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {cat}
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
                <span className="text-sm text-[#862828] font-medium">
                  {isZh ? product.category : product.categoryEn}
                </span>
                <h3 className="text-2xl font-bold mt-2 mb-2 text-[#333333] font-['PingFang_SC']">
                  {isZh ? product.name : product.nameEn}
                </h3>
                <p className="text-gray-600">
                  {isZh ? product.description : product.descriptionEn}
                </p>
                <button className="mt-4 text-[#862828] font-medium hover:underline">
                  {p.learnMore}
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
