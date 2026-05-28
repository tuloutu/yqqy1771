import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { Product } from "../data/products";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

function ProductModal({ product, onClose }: ProductModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="relative">
          <img src={product.image} alt={product.name} className="w-full h-96 object-cover" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-8">
          <span className="inline-block px-4 py-1 bg-[#862828] text-white rounded-full text-sm font-medium mb-4">
            {product.category}
          </span>
          <h2 className="text-4xl font-bold mb-4 text-[#333333] font-['PingFang_SC']">{product.name}</h2>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">{product.detail}</p>
          
          <h3 className="text-2xl font-bold mb-4 text-[#333333] font-['PingFang_SC']">产品特点</h3>
          <ul className="space-y-3 mb-8">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-[#862828] rounded-full mr-3 flex-shrink-0"></div>
                <span className="text-lg">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="bg-gradient-to-r from-[#862828] to-[#6b1f1f] rounded-xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm opacity-90 mb-1">品质保证</div>
                <div className="text-2xl font-bold">30秒即刻出杯</div>
              </div>
              <Link to="/contact" className="bg-white text-[#862828] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                联系合作
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
