export interface CarouselItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: string;
}

export const carouselItems: CarouselItem[] = [
  {
    id: "1",
    title: "一起去也·机打鸡尾酒",
    subtitle: "品牌核心优势",
    description: "3秒即刻出杯，品质统一不重样，鲜醇每一口都是标准线。革新传统调酒方式，让每一杯鸡尾酒都拥有精准配比和稳定口感，为门店带来效率革命",
    image: "./images/products/1.jpg",
    category: "brand"
  },
  {
    id: "2",
    title: "20L=120 杯快乐",
    subtitle: "品牌核心优势",
    description: "高毛利看得见，商家盈利新引擎，性价比拉满的微醺商机。一杯成本仅需3元左右，零售价可达24-52元，高利润空间助您轻松盈利",
    image: "./images/products/2.jpg",
    category: "brand"
  },
  {
    id: "3",
    title: "无需等待的自由微醺",
    subtitle: "品牌核心优势",
    description: "机打黑科技减负门店，适配聚会/打卡/夜宵全场景。告别繁琐调酒流程，一键出杯，让顾客即刻享受高品质鸡尾酒，提升翻台率与顾客满意度",
    image: "./images/products/3.jpg",
    category: "brand"
  },
  {
    id: "4",
    title: "从芒果清甜到朗姆烈爽",
    subtitle: "产品风味意境",
    description: "12款风味，承包你的夏日清风与深夜温柔。从清爽果香到醇厚烈酒，从低度微醺到冒险挑战，满足不同时段、不同客群的多样化需求",
    image: "./images/products/4.jpeg",
    category: "flavor"
  },
  {
    id: "5",
    title: "一口坠入蓝色海洋",
    subtitle: "产品风味意境",
    description: "凤梨撞青柠，颜值与口感双在线的打卡神器。热带蔚蓝的视觉冲击，搭配酸甜平衡的果香，每一杯都是拍照发朋友圈的理由",
    image: "./images/products/5.png",
    category: "flavor"
  },
  {
    id: "6",
    title: "雨后山风 × 热带暖阳",
    subtitle: "产品风味意境",
    description: "每一杯都是自然风味，机打出来的新鲜仪式感。精选优质原料，结合精密配比技术，让果香、酒香、冰香完美融合，呈现层次分明的味觉体验",
    image: "./images/products/6.jpg",
    category: "flavor"
  },
  {
    id: "7",
    title: "清吧/精酿酒馆/烧烤城/火锅店",
    subtitle: "跨界适配 + 引流亮点",
    description: "无缝跨界的引流利器，12款风味精准匹配客群。低门槛引入，高回报产出，无需专业调酒师，轻松拓展酒水品类，吸引年轻消费群体",
    image: "./images/products/1.jpg",
    category: "business"
  },
  {
    id: "8",
    title: "一起去也",
    subtitle: "跨界适配 + 引流亮点",
    description: "不止是鸡尾酒，是即刻拥有的快乐，是稳赚不赔的商机。一站式解决方案，从设备供应到原料配送，从技术培训到营销支持，全程助力商家成功",
    image: "./images/products/2.jpg",
    category: "business"
  }
];
