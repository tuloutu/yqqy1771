import { useT } from "../i18n/LanguageContext";

function TechnologyPage() {
  const { t } = useT();
  const te = t.technology;

  return (
    <div className="min-h-screen pt-20">
      <div className="bg-[#862828] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 font-['PingFang_SC']">{te.title}</h1>
          <p className="text-xl opacity-90">{te.subtitle}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#333333] font-['PingFang_SC']">{te.autoPrecision}</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">{te.autoPrecisionDesc}</p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-[#862828] rounded-full mr-3"></div>
                <span className="text-gray-700">{te.multiIngredient}</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-[#862828] rounded-full mr-3"></div>
                <span className="text-gray-700">{te.tempControl}</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-[#862828] rounded-full mr-3"></div>
                <span className="text-gray-700">{te.stirControl}</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-[#862828] to-[#6b1f1f] rounded-2xl p-12 text-white">
            <div className="text-6xl font-bold mb-2">30秒</div>
            <div className="text-xl opacity-90">{te.avgTime}</div>
            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-xl opacity-90">{te.passRate}</div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#333333] font-['PingFang_SC']">{te.workshop}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group overflow-hidden rounded-2xl shadow-xl">
              <img src="./cases/背景1.jpg" alt={te.standardProcess} className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2 font-['PingFang_SC']">{te.standardProcess}</h3>
                <p className="text-white/90">{te.standardProcessDesc}</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-xl">
              <img src="./cases/背景2.jpg" alt={te.prodWorkshop} className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2 font-['PingFang_SC']">{te.prodWorkshop}</h3>
                <p className="text-white/90">{te.prodWorkshopDesc}</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-xl">
              <img src="./cases/背景3.jpg" alt={te.precisionInstruments} className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2 font-['PingFang_SC']">{te.precisionInstruments}</h3>
                <p className="text-white/90">{te.precisionInstrumentsDesc}</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-xl">
              <img src="./cases/背景4 .jpg" alt={te.storageEnv} className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2 font-['PingFang_SC']">{te.storageEnv}</h3>
                <p className="text-white/90">{te.storageEnvDesc}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#862828]/10 to-[#6b1f1f]/10 rounded-2xl p-12 mb-20">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#333333] font-['PingFang_SC']">{te.testSystem}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-[#862828] mb-4">4家</div>
              <h3 className="text-xl font-bold mb-3 text-[#333333]">{te.selfStores}</h3>
              <p className="text-gray-600 leading-relaxed">{te.selfStoresDesc}</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-[#862828] mb-4">大数据</div>
              <h3 className="text-xl font-bold mb-3 text-[#333333]">{te.dataDriven}</h3>
              <p className="text-gray-600 leading-relaxed">{te.dataDrivenDesc}</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-[#862828] mb-4">持续优化</div>
              <h3 className="text-xl font-bold mb-3 text-[#333333]">{te.continuousOpt}</h3>
              <p className="text-gray-600 leading-relaxed">{te.continuousOptDesc}</p>
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
            <h3 className="text-2xl font-bold mb-4 text-[#333333] font-['PingFang_SC']">{te.qualityAssurance}</h3>
            <p className="text-gray-600 leading-relaxed">{te.qualityAssuranceDesc}</p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-[#862828] bg-opacity-10 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-[#862828]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#333333] font-['PingFang_SC']">{te.highEfficiency}</h3>
            <p className="text-gray-600 leading-relaxed">{te.highEfficiencyDesc}</p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-[#862828] bg-opacity-10 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-[#862828]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#333333] font-['PingFang_SC']">{te.easyOperation}</h3>
            <p className="text-gray-600 leading-relaxed">{te.easyOperationDesc}</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#862828] to-[#6b1f1f] rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-8 text-center font-['PingFang_SC']">{te.coreData}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">300%</div>
              <div className="text-sm opacity-90">{te.efficiencyImprove}</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">100+</div>
              <div className="text-sm opacity-90">{te.recipeLibrary}</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">0.1%</div>
              <div className="text-sm opacity-90">{te.ratioError}</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-sm opacity-90">{te.satisfaction}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnologyPage;
