import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoImage from "../images/brand/logo.jpg";
import { useT } from "../i18n/LanguageContext";

const Navbar = () => {
  const { t, lang, setLang } = useT();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: t.nav.home },
    { path: "/products", label: t.nav.products },
    { path: "/technology", label: t.nav.technology },
    { path: "/contact", label: t.nav.contact },
  ];

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#862828] shadow-lg">
      <nav className="container mx-auto px-4 md:px-8 py-3 md:py-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={logoImage} 
              alt="Logo" 
              className="h-10 w-auto"
            />
            <div className="text-lg md:text-xl font-bold font-['PingFang_SC'] text-white whitespace-nowrap">
              {t.nav.brandName}
            </div>
          </Link>

          {/* Desktop nav + lang toggle */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-12">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-base xl:text-lg font-medium transition-colors whitespace-nowrap ${
                  location.pathname === item.path
                    ? "text-[#D4AF37]"
                    : "text-white hover:text-[#D4AF37]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            {/* Language Toggle */}
            <div className="flex items-center rounded-full bg-white/15 p-0.5 ml-2">
              <button
                onClick={() => setLang("zh")}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                  lang === "zh"
                    ? "bg-white text-[#862828] shadow-sm"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {t.lang.zh}
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                  lang === "en"
                    ? "bg-white text-[#862828] shadow-sm"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {t.lang.en}
              </button>
            </div>
          </div>

          {/* Mobile: menu button + lang toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <div className="flex items-center rounded-full bg-white/15 p-0.5">
              <button
                onClick={() => setLang("zh")}
                className={`px-2 py-1 text-[11px] font-medium rounded-full transition-all ${
                  lang === "zh"
                    ? "bg-white text-[#862828] shadow-sm"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {t.lang.zh}
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-2 py-1 text-[11px] font-medium rounded-full transition-all ${
                  lang === "en"
                    ? "bg-white text-[#862828] shadow-sm"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {t.lang.en}
              </button>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1"
            >
              {isMobileMenuOpen ? (
                <X className="w-9 h-9 text-white" />
              ) : (
                <Menu className="w-9 h-9 text-white" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-4 text-lg font-medium ${
                  location.pathname === item.path
                    ? "text-[#D4AF37]"
                    : "text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
