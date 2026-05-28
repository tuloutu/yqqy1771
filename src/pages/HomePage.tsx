import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import { products } from "../data/products";
import { ChevronRight, Award, Clock, Star } from "lucide-react";

const HomePage = () => {
  return (
    <div className="pt-20">
      <Carousel />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#333333] font-['PingFang_SC']">核心卖点</h2>
            <p className="text-xl text-gray-600">品质统一,即刻出杯</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#862828] to-[#6b1f1f] rounded-2xl p-8 text-white transform hover:-translate-y-2 transition-all duration-300 shadow-xl">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-['PingFang_SC']">品质统一</h3>
              <p className="text-white/90 leading-relaxed">
                每一杯都经过标准化流程,配比误差不超过1%,确保品质高度一致
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#862828] to-[#6b1f1f] rounded-2xl p-8 text-white transform hover:-translate-y-2 transition-all duration-300 shadow-xl">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-['PingFang_SC']">即刻出杯</h3>
              <p className="text-white/90 leading-relaxed">
                平均30秒即可完成一杯鸡尾酒制作,快速响应顾客需求
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#862828] to-[#6b1f1f] rounded-2xl p-8 text-white transform hover:-translate-y-2 transition-all duration-300 shadow-xl">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-['PingFang_SC']">技术革新</h3>
              <p className="text-white/90 leading-relaxed">
                机打技术引领行业变革,无需专业调酒师也能出品高品质鸡尾酒
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8F8F8]">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4 text-[#333333] font-['PingFang_SC']">热门产品</h2>
              <p className="text-xl text-gray-600">精选鸡尾酒,品质保证</p>
            </div>
            <Link
              to="/products"
              className="hidden md:flex items-center text-[#862828] font-bold hover:underline"
            >
              查看全部 <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, 6).map(product => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-[#862828] font-medium">{product.category}</span>
                  <h3 className="text-2xl font-bold mt-2 mb-3 text-[#333333] font-['PingFang_SC']">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Link
                    to="/products"
                    className="text-[#862828] font-medium hover:underline inline-flex items-center"
                  >
                    了解更多 <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              to="/products"
              className="inline-flex items-center text-[#862828] font-bold hover:underline"
            >
              查看全部 <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-[#333333] font-['PingFang_SC']">为什么选择机打鸡尾酒?</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                传统鸡尾酒制作依赖调酒师个人技术,品质难以统一。机打鸡尾酒通过自动化技术,
                实现了标准化生产,让每一杯都达到相同的品质标准。
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-[#862828] bg-opacity-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-[#862828] font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#333333] mb-1">出杯效率提升300%</h4>
                    <p className="text-gray-600">从传统2-3分钟缩短至30秒</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-[#862828] bg-opacity-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-[#862828] font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#333333] mb-1">品质标准统一</h4>
                    <p className="text-gray-600">配比误差控制在1%以内</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-[#862828] bg-opacity-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-[#862828] font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#333333] mb-1">降低运营成本</h4>
                    <p className="text-gray-600">无需专业调酒师,普通服务员即可操作</p>
                  </div>
                </li>
              </ul>
              <Link
                to="/contact"
                className="inline-block bg-[#862828] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#6b1f1f] transition-colors"
              >
                联系我们,开启合作
              </Link>
            </div>
            <div className="bg-gradient-to-br from-[#862828] to-[#6b1f1f] rounded-2xl p-12 text-white">
              <div className="text-center">
                <div className="text-6xl font-bold mb-4">50+</div>
                <div className="text-2xl mb-8 opacity-90">合作商家</div>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-4xl font-bold mb-2">10万+</div>
                    <div className="text-lg opacity-80">累计出杯</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">98%</div>
                    <div className="text-lg opacity-80">客户满意度</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#862828] to-[#6b1f1f] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 font-['PingFang_SC']">开启机打鸡尾酒新时代</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            品质统一,即刻出杯,让我们共同创造鸡尾酒行业的美好未来
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-[#862828] px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-colors"
          >
            立即联系我们
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
