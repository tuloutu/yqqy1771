import { useState } from "react";
import { Phone, MessageCircle, MapPin, MessageCircleMore, X, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useT } from "../i18n/LanguageContext";

const FloatingContact = () => {
  const { t } = useT();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const f = t.floating;

  const contactItems = [
    {
      icon: Phone,
      label: f.phone,
      tip: f.phoneTip,
      action: () => navigate("/contact"),
      color: "#862828",
    },
    {
      icon: MessageCircle,
      label: f.whatsapp,
      tip: f.whatsappTip,
      href: "https://wa.me/message/C2SODE3IHJDMM1",
      color: "#25D366",
      isExternal: true,
    },
    {
      icon: MapPin,
      label: f.address,
      tip: f.addressTip,
      href: "https://maps.google.com/?q=长沙市开福区万达广场C2座3914",
      color: "#D4AF37",
      isExternal: true,
    },
    {
      icon: MessageCircleMore,
      label: f.wechat,
      tip: f.wechatTip,
      href: "./foreign-wechat.png",
      color: "#07C160",
      isExternal: true,
    },
  ];

  return (
    <>
      {/* ====== Mobile: two fixed bottom buttons ====== */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[70] flex">
        {/* WhatsApp button */}
        <a
          href="https://wa.me/message/C2SODE3IHJDMM1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-[#25D366] text-white font-medium text-sm active:bg-[#1ebe57] transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          <span>{f.whatsapp}</span>
        </a>
        {/* WeChat button */}
        <a
          href="./foreign-wechat.png"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-[#07C160] text-white font-medium text-sm active:bg-[#06ad56] transition-colors"
        >
          <MessageCircleMore className="w-5 h-5" />
          <span>{f.wechat}</span>
        </a>
      </div>

      {/* Mobile bottom padding spacer */}
      <div className="lg:hidden h-14" />

      {/* ====== Desktop: right side slide-in ====== */}
      <div className="hidden lg:block fixed right-0 top-1/2 -translate-y-1/2 z-[70]">
        <div className="flex">
          {/* Slide panel */}
          <div
            className="bg-white/95 backdrop-blur-xl rounded-l-2xl shadow-2xl border border-gray-100 transition-all duration-300 ease-out overflow-hidden"
            style={{
              width: isOpen ? 220 : 0,
              opacity: isOpen ? 1 : 0,
              pointerEvents: isOpen ? "auto" : "none",
            }}
          >
            <div className="p-4 space-y-2" style={{ minWidth: 220 }}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-[#862828] font-['PingFang_SC']">
                  {f.contactUs}
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X className="w-4 h-4 text-gray-400" />
                </button>
              </div>
              {contactItems.map((item) => {
                if (item.action) {
                  return (
                    <button
                      key={item.label}
                      onClick={item.action}
                      className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 transition-colors group w-full text-left"
                    >
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${item.color}15` }}
                      >
                        <item.icon className="w-5 h-5" style={{ color: item.color }} />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-medium text-gray-800">{item.label}</div>
                        <div className="text-xs text-gray-400">{item.tip}</div>
                      </div>
                    </button>
                  );
                }
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 transition-colors group"
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${item.color}15` }}
                    >
                      <item.icon className="w-5 h-5" style={{ color: item.color }} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-medium text-gray-800">{item.label}</div>
                      <div className="text-xs text-gray-400">{item.tip}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Trigger tab */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col items-center justify-center gap-1.5 w-12 bg-[#862828] text-white rounded-l-xl shadow-lg hover:bg-[#6b1f1f] transition-colors group cursor-pointer"
            style={{ writingMode: "vertical-rl" }}
          >
            <MessageCircleMore className="w-5 h-5" style={{ writingMode: "horizontal-tb" }} />
            <span
              className="text-xs font-medium tracking-wider py-3"
              style={{ letterSpacing: "0.2em" }}
            >
              {f.contactUs}
            </span>
            <ChevronRight
              className="w-4 h-4 transition-transform duration-300"
              style={{
                writingMode: "horizontal-tb",
                transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default FloatingContact;
