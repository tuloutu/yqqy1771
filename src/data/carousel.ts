export interface CarouselItem {
  id: string;
  title: string;
  titleEn: string;
  subtitle: string;
  subtitleEn: string;
  description: string;
  descriptionEn: string;
  image: string;
  category: string;
}

export const carouselItems: CarouselItem[] = [
  {
    id: "1",
    title: "一起去也·机打鸡尾酒",
    titleEn: "YIQIQUYE · Machine-Poured Cocktails",
    subtitle: "品牌核心优势",
    subtitleEn: "Core Brand Advantage",
    description: "3秒即刻出杯，品质统一不重样，鲜醇每一口都是标准线。革新传统调酒方式，让每一杯鸡尾酒都拥有精准配比和稳定口感，为门店带来效率革命",
    descriptionEn: "Instant pour, consistent quality every time. Revolutionary machine-pouring technology ensures precise proportions and stable taste, bringing an efficiency revolution to your venue.",
    image: "./images/products/1.jpg",
    category: "brand"
  },
  {
    id: "2",
    title: "20L=120 杯快乐",
    titleEn: "20L = 120 Glasses of Joy",
    subtitle: "品牌核心优势",
    subtitleEn: "Core Brand Advantage",
    description: "高毛利看得见，商家盈利新引擎，性价比拉满的微醺商机。一杯成本仅需3元左右，零售价可达24-52元，高利润空间助您轻松盈利",
    descriptionEn: "High margins you can count on. Each glass costs only ~¥3 to make, retailing at ¥24–52. A profitable, high-value opportunity for your business.",
    image: "./images/products/2.jpg",
    category: "brand"
  },
  {
    id: "3",
    title: "无需等待的自由微醺",
    titleEn: "Instant Freedom, No Waiting",
    subtitle: "品牌核心优势",
    subtitleEn: "Core Brand Advantage",
    description: "机打黑科技减负门店，适配聚会/打卡/夜宵全场景。告别繁琐调酒流程，一键出杯，让顾客即刻享受高品质鸡尾酒，提升翻台率与顾客满意度",
    descriptionEn: "Smart machine-pouring fits parties, check-in spots, and late-night dining. One-tap pour — no bartender needed. Boost table turnover and customer satisfaction instantly.",
    image: "./images/products/3.jpg",
    category: "brand"
  },
  {
    id: "4",
    title: "从芒果清甜到朗姆烈爽",
    titleEn: "From Sweet Mango to Bold Rum",
    subtitle: "产品风味意境",
    subtitleEn: "Flavor Experience",
    description: "12款风味，承包你的夏日清风与深夜温柔。从清爽果香到醇厚烈酒，从低度微醺到冒险挑战，满足不同时段、不同客群的多样化需求",
    descriptionEn: "12 signature flavors — from refreshing fruity notes to rich bold spirits, from light sips to daring challenges. Perfect for any occasion and every crowd.",
    image: "./images/products/4.jpeg",
    category: "flavor"
  },
  {
    id: "5",
    title: "一口坠入蓝色海洋",
    titleEn: "Dive into the Blue Ocean",
    subtitle: "产品风味意境",
    subtitleEn: "Flavor Experience",
    description: "凤梨撞青柠，颜值与口感双在线的打卡神器。热带蔚蓝的视觉冲击，搭配酸甜平衡的果香，每一杯都是拍照发朋友圈的理由",
    descriptionEn: "Pineapple meets lime in a stunning turquoise pour. Tropical visuals and balanced sweet-sour fruit notes make every glass Instagram-worthy.",
    image: "./images/products/5.png",
    category: "flavor"
  },
  {
    id: "6",
    title: "雨后山风 × 热带暖阳",
    titleEn: "Mountain Breeze × Tropical Sun",
    subtitle: "产品风味意境",
    subtitleEn: "Flavor Experience",
    description: "每一杯都是自然风味，机打出来的新鲜仪式感。精选优质原料，结合精密配比技术，让果香、酒香、冰香完美融合，呈现层次分明的味觉体验",
    descriptionEn: "Every glass captures nature's flavors with machine-poured freshness. Premium ingredients meet precision mixing for layered aromas of fruit, spirit, and chill.",
    image: "./images/products/6.jpg",
    category: "flavor"
  },
  {
    id: "7",
    title: "清吧/精酿酒馆/烧烤城/火锅店",
    titleEn: "Lounge Bars · Craft Pubs · BBQ · Hotpot",
    subtitle: "跨界适配 + 引流亮点",
    subtitleEn: "Cross-Industry Fit + Traffic Driver",
    description: "无缝跨界的引流利器，12款风味精准匹配客群。低门槛引入，高回报产出，无需专业调酒师，轻松拓展酒水品类，吸引年轻消费群体",
    descriptionEn: "A seamless cross-category traffic magnet — 12 flavors precisely matched to your clientele. Low barrier to entry, high ROI. Expand your beverage menu and attract younger crowds effortlessly.",
    image: "./images/products/1.jpg",
    category: "business"
  },
  {
    id: "8",
    title: "一起去也",
    titleEn: "YIQIQUYE — Your Partner in Growth",
    subtitle: "跨界适配 + 引流亮点",
    subtitleEn: "Cross-Industry Fit + Traffic Driver",
    description: "不止是鸡尾酒，是即刻拥有的快乐，是稳赚不赔的商机。一站式解决方案，从设备供应到原料配送，从技术培训到营销支持，全程助力商家成功",
    descriptionEn: "More than cocktails — it's instant joy and a reliable business opportunity. One-stop solution: equipment, ingredients, training, and marketing support to fuel your success.",
    image: "./images/products/2.jpg",
    category: "business"
  }
];
