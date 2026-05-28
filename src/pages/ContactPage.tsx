function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="bg-[#862828] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 font-['PingFang_SC']">联系我们</h1>
          <p className="text-xl opacity-90">期待与您合作,共创美好未来</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-[#333333] font-['PingFang_SC']">联系方式</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#862828] bg-opacity-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-[#862828]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-[#333333]">联系人</h3>
                  <p className="text-gray-600 text-lg">郭经理</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#862828] bg-opacity-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-[#862828]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-[#333333]">电话</h3>
                  <p className="text-gray-600 text-lg">15526386298</p>
                  <p className="text-gray-500">(微信同号)</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#862828] bg-opacity-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-[#862828]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-[#333333]">邮箱</h3>
                  <p className="text-gray-600 text-lg">gxh15526386298@163.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#862828] bg-opacity-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-[#862828]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-[#333333]">地址</h3>
                  <p className="text-gray-600 text-lg">长沙市开福区万达广场C2座3914</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-[#333333] font-['PingFang_SC']">关注我们</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg text-center">
                <div className="w-32 h-32 md:w-48 md:h-48 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  <img 
                    src="./Official Account.jpg" 
                    alt="微信公众号二维码"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-bold text-base md:text-lg text-[#333333]">微信公众号</h3>
              </div>
              <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg text-center">
                <div className="w-32 h-32 md:w-48 md:h-48 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  <img 
                    src="./redbook.png" 
                    alt="小红书二维码"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-bold text-base md:text-lg text-[#333333]">小红书</h3>
              </div>
              <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg text-center col-span-2 md:col-span-1">
                <div className="w-32 h-32 md:w-48 md:h-48 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  <img 
                    src="./foreign-wechat.png" 
                    alt="海外客户联系微信"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-bold text-base md:text-lg text-[#333333]">海外客户微信</h3>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <a 
                href="https://wa.me/message/C2SODE3IHJDMM1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <div>
                  <span className="font-bold text-lg">WhatsApp</span>
                  <p className="text-sm opacity-90">海外客户专线</p>
                </div>
              </a>
              <a 
                href="https://wa.me/message/C2SODE3IHJDMM1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#862828] to-[#6b1f1f] text-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <div>
                  <span className="font-bold text-lg">WhatsApp 咨询</span>
                  <p className="text-sm opacity-90">点击即可联系</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#862828] to-[#6b1f1f] rounded-2xl p-12 text-white mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center font-['PingFang_SC']">合作商家</h2>
          <div className="text-center mb-8">
            <div className="text-6xl font-bold mb-4">100+</div>
            <p className="text-xl opacity-90">已有上百家酒水合作商家</p>
            <p className="text-lg opacity-80 mt-4">覆盖清吧、精酿酒馆、烧烤城、火锅店等多种业态</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-sm opacity-90">客户满意度</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10万+</div>
              <div className="text-sm opacity-90">累计出杯数</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">30秒</div>
              <div className="text-sm opacity-90">平均出杯时间</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">12款</div>
              <div className="text-sm opacity-90">产品风味</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#862828]/10 to-[#6b1f1f]/10 rounded-2xl p-6 md:p-12">
          <h2 className="text-3xl font-bold mb-8 text-center font-['PingFang_SC']">关于"一起去也"</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#862828]">品牌故事</h3>
              <p className="text-lg leading-relaxed text-gray-700">
                "一起去也"是国内首个机打鸡尾酒品牌,致力于通过自动化技术革新传统鸡尾酒制作方式。
                我们相信,品质统一、即刻出杯的鸡尾酒,能够让更多人享受高品质的调酒体验。
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mt-4">
                拥有4家线下门店进行产品测试和迭代更新,确保选品基于大数据测试,
                为合作伙伴提供经过市场验证的优质产品。
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#862828]">品牌理念</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">★</span>
                  <span>品质统一:每一杯都达到相同标准</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">★</span>
                  <span>即刻出杯:30秒快速响应需求</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">★</span>
                  <span>技术革新:机打技术引领行业</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">★</span>
                  <span>服务至上:客户满意是我们的追求</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
