import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { carouselItems } from "../data/carousel";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  };

  return (
    <div className="relative h-[600px] overflow-hidden">
      {carouselItems.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl">
                <div className="text-[#D4AF37] text-xl font-medium mb-4">
                  {item.subtitle}
                </div>
                <h1 className="text-6xl font-bold text-white mb-6 font-['PingFang_SC'] leading-tight">
                  {item.title}
                </h1>
                <p className="text-2xl text-white/90 mb-8 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex gap-4">
                  <Link
                    to="/products"
                    className="bg-[#862828] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#6b1f1f] transition-colors"
                  >
                    查看全部产品
                  </Link>
                  <Link
                    to="/contact"
                    className="bg-white/20 backdrop-blur text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-colors"
                  >
                    联系我们
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/40 backdrop-blur p-3 rounded-full shadow-lg hover:bg-white/60 transition-colors"
      >
        <ChevronLeft className="w-8 h-8 text-[#862828]" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/40 backdrop-blur p-3 rounded-full shadow-lg hover:bg-white/60 transition-colors"
      >
        <ChevronRight className="w-8 h-8 text-[#862828]" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-white w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
