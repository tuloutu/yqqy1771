function TechnologyPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="bg-[#862828] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 font-['PingFang_SC']">技术优势</h1>
          <p className="text-xl opacity-90">机打技术,引领鸡尾酒行业革新</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#333333] font-['PingFang_SC']">自动化制作,精准控制</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              我们的机打系统采用先进的自动配比技术,通过精密传感器和智能算法,
              实现对酒水、果汁、冰块等原料的精准控制。每一杯鸡尾酒的配比误差不超过1%,
              确保了品质的高度统一。
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-[#862828] rounded-full mr-3"></div>
                <span className="text-gray-700">多原料精准配比,误差&lt;1%</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-[#862828] rounded-full mr-3"></div>
                <span className="text-gray-700">温度自动调节,±1°C精确控制</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-[#862828] rounded-full mr-3"></div>
                <span className="text-gray-700">搅拌速度智能调控,口感稳定</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-[#862828] to-[#6b1f1f] rounded-2xl p-12 text-white">
            <div className="text-6xl font-bold mb-2">30秒</div>
            <div className="text-xl opacity-90">平均出杯时间</div>
            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-xl opacity-90">出品合格率</div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#333333] font-['PingFang_SC']">生产车间与存储环境</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/cases/背景1.jpg"
                alt="标准化工艺流程"
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2 font-['PingFang_SC']">标准化工艺流程</h3>
                <p className="text-white/90">严格的质量控制体系,确保产品一致性</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/cases/背景2.jpg"
                alt="专业生产车间"
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2 font-['PingFang_SC']">专业生产车间</h3>
                <p className="text-white/90">现代化生产设备,确保每一批次的品质稳定</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/cases/背景3.jpg"
                alt="精密的生产仪器"
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2 font-['PingFang_SC']">精密生产仪器</h3>
                <p className="text-white/90">高精度传感器和智能算法实现精准配比</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/cases/背景4 .jpg"
                alt="存储环境"
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2 font-['PingFang_SC']">专业存储环境</h3>
                <p className="text-white/90">恒温恒湿存储,保持原料最佳状态</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#862828]/10 to-[#6b1f1f]/10 rounded-2xl p-12 mb-20">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#333333] font-['PingFang_SC']">线下门店测试体系</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-[#862828] mb-4">4家</div>
              <h3 className="text-xl font-bold mb-3 text-[#333333]">自营线下门店</h3>
              <p className="text-gray-600 leading-relaxed">
                拥有4家线下门店作为产品测试基地,真实场景验证产品质量和口感
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-[#862828] mb-4">大数据</div>
              <h3 className="text-xl font-bold mb-3 text-[#333333]">数据驱动选品</h3>
              <p className="text-gray-600 leading-relaxed">
                通过门店销售数据和客户反馈,进行产品更新迭代,确保选品符合大众口味
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-[#862828] mb-4">持续优化</div>
              <h3 className="text-xl font-bold mb-3 text-[#333333]">迭代创新</h3>
              <p className="text-gray-600 leading-relaxed">
                根据测试结果不断优化配方和工艺,为市场提供更优质的产品
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-[#862828] bg-opacity-10 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-[#862828]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#333333] font-['PingFang_SC']">品质保证</h3>
            <p className="text-gray-600 leading-relaxed">
              每一杯都经过标准化流程,从原料配比到出品检验,确保每一杯都达到最高品质标准。
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-[#862828] bg-opacity-10 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-[#862828]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#333333] font-['PingFang_SC']">高效出品</h3>
            <p className="text-gray-600 leading-relaxed">
              平均30秒即可完成一杯鸡尾酒制作,高峰期也能快速响应顾客需求,提升运营效率。
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-[#862828] bg-opacity-10 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-[#862828]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#333333] font-['PingFang_SC']">操作简便</h3>
            <p className="text-gray-600 leading-relaxed">
              触屏操作界面简单直观,无需专业调酒师培训,普通服务员也能快速上手。
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#862828] to-[#6b1f1f] rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-8 text-center font-['PingFang_SC']">核心数据</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">300%</div>
              <div className="text-sm opacity-90">出杯效率提升</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">100+</div>
              <div className="text-sm opacity-90">酒款配方库</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">0.1%</div>
              <div className="text-sm opacity-90">配比误差</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-sm opacity-90">客户满意度</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnologyPage;
