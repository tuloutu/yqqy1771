import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import { products } from "../data/products";
import { ChevronRight, Award, Clock, Star } from "lucide-react";
import { useT } from "../i18n/LanguageContext";

const HomePage = () => {
  const { t } = useT();
  const h = t.home;

  return (
    <div className="pt-20">
      <Carousel />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#333333] font-['PingFang_SC']">{h.coreAdvantage}</h2>
            <p className="text-xl text-gray-600">{h.coreAdvantageSub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#862828] to-[#6b1f1f] rounded-2xl p-8 text-white transform hover:-translate-y-2 transition-all duration-300 shadow-xl">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-['PingFang_SC']">{h.quality}</h3>
              <p className="text-white/90 leading-relaxed">{h.qualityDesc}</p>
            </div>

            <div className="bg-gradient-to-br from-[#862828] to-[#6b1f1f] rounded-2xl p-8 text-white transform hover:-translate-y-2 transition-all duration-300 shadow-xl">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-['PingFang_SC']">{h.quickOut}</h3>
              <p className="text-white/90 leading-relaxed">{h.quickOutDesc}</p>
            </div>

            <div className="bg-gradient-to-br from-[#862828] to-[#6b1f1f] rounded-2xl p-8 text-white transform hover:-translate-y-2 transition-all duration-300 shadow-xl">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-['PingFang_SC']">{h.techInnovation}</h3>
              <p className="text-white/90 leading-relaxed">{h.techInnovationDesc}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8F8F8]">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4 text-[#333333] font-['PingFang_SC']">{h.hotProducts}</h2>
              <p className="text-xl text-gray-600">{h.hotProductsSub}</p>
            </div>
            <Link
              to="/products"
              className="hidden md:flex items-center text-[#862828] font-bold hover:underline"
            >
              {h.viewAll} <ChevronRight className="w-5 h-5 ml-2" />
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
                    {h.learnMore} <ChevronRight className="w-4 h-4 ml-1" />
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
              {h.viewAll} <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-[#333333] font-['PingFang_SC']">{h.whyChoose}</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">{h.whyChooseDesc}</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-[#862828] bg-opacity-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-[#862828] font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#333333] mb-1">{h.efficiencyUp}</h4>
                    <p className="text-gray-600">{h.efficiencyUpDesc}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-[#862828] bg-opacity-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-[#862828] font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#333333] mb-1">{h.qualityStandard}</h4>
                    <p className="text-gray-600">{h.qualityStandardDesc}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-[#862828] bg-opacity-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-[#862828] font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#333333] mb-1">{h.lowerCost}</h4>
                    <p className="text-gray-600">{h.lowerCostDesc}</p>
                  </div>
                </li>
              </ul>
              <Link
                to="/contact"
                className="inline-block bg-[#862828] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#6b1f1f] transition-colors"
              >
                {h.contactUs}
              </Link>
            </div>
            <div className="bg-gradient-to-br from-[#862828] to-[#6b1f1f] rounded-2xl p-12 text-white">
              <div className="text-center">
                <div className="text-6xl font-bold mb-4">50+</div>
                <div className="text-2xl mb-8 opacity-90">{h.partners}</div>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-4xl font-bold mb-2">10万+</div>
                    <div className="text-lg opacity-80">{h.totalCups}</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">98%</div>
                    <div className="text-lg opacity-80">{h.satisfaction}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#862828] to-[#6b1f1f] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 font-['PingFang_SC']">{h.newEra}</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">{h.newEraDesc}</p>
          <Link
            to="/contact"
            className="inline-block bg-white text-[#862828] px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-colors"
          >
            {h.contactNow}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
