import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-6 font-['PingFang_SC']">一起去也</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              国内首个机打鸡尾酒品牌,致力于
              <br />
              通过自动化技术革新传统鸡尾酒制作方式。
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-[#862828]" />
                <span>郭经理 15526386298</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-[#862828]" />
                <span className="text-sm">gxh15526386298@163.com</span>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-[#862828] flex-shrink-0 mt-1" />
                <span className="text-sm">长沙市开福区万达广场C2座3914</span>
              </div>
              <a 
                href="https://wa.me/message/C2SODE3IHJDMM1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-[#25D366] transition-colors mt-4"
              >
                <svg className="w-5 h-5 mr-3 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span className="text-sm">WhatsApp: 海外客户专线</span>
              </a>
              <a 
                href="./foreign-wechat.png" 
                target="_blank"
                className="flex items-center text-gray-300 hover:text-[#862828] transition-colors"
              >
                <svg className="w-5 h-5 mr-3 text-[#862828]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span className="text-sm">海外客户微信</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-[#D4AF37]">快速链接</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  首页
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">
                  产品系列
                </Link>
              </li>
              <li>
                <Link to="/technology" className="text-gray-400 hover:text-white transition-colors">
                  技术优势
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  联系我们
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-[#D4AF37]">核心卖点</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center">
                <span className="text-[#862828] mr-2">★</span>
                <span>品质统一,标准出品</span>
              </li>
              <li className="flex items-center">
                <span className="text-[#862828] mr-2">★</span>
                <span>即刻出杯,30秒快速响应</span>
              </li>
              <li className="flex items-center">
                <span className="text-[#862828] mr-2">★</span>
                <span>机打技术,革新传统</span>
              </li>
              <li className="flex items-center">
                <span className="text-[#862828] mr-2">★</span>
                <span>服务至上,客户满意</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              Copyright © {new Date().getFullYear()} 一起去也. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-4 md:mt-0">
              机打鸡尾酒 · 品质统一 · 即刻出杯
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
