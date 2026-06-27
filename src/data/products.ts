export interface Product {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  image: string;
  detail: string;
  detailEn: string;
  features: string[];
  featuresEn: string[];
  category: string;
  categoryEn: string;
  alcohol: string;
  specs: {
    volume: string;
    cups: string;
    cost: string;
    wholesale: string;
    retail: string;
  };
  scene: string;
  sceneEn: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "微醺杨枝甘露",
    nameEn: "Tipsy Mango Pomelo",
    description: "芒果 · 8%vol",
    descriptionEn: "Mango · 8% ABV",
    image: "./images/products/芒芒很快乐.jpg",
    detail: "果香四溢，一口点亮平淡生活的微醺感",
    detailEn: "Bursting with fruity aroma — one sip brightens the everyday",
    features: [
      "伏特加、芒果汁、橙子汁、青柠汁",
      "20L 规格，≥120 杯产出",
      "单杯成本约 ¥2.8，建议零售价 ¥24",
      "果香浓郁，夏日快饮首选"
    ],
    featuresEn: [
      "Vodka, mango juice, orange juice, lime juice",
      "20L format yields ≥120 glasses",
      "Cost per glass ~¥2.8, suggested retail ¥24",
      "Rich fruity aroma, perfect summer sipper"
    ],
    category: "果香系列",
    categoryEn: "Fruity",
    alcohol: "8%",
    specs: {
      volume: "20L",
      cups: "≥120杯",
      cost: "¥2.8",
      wholesale: "¥313",
      retail: "¥24"
    },
    scene: "打卡酒水/活动首杯",
    sceneEn: "Photo-worthy drinks / event opener"
  },
  {
    id: "2",
    name: "空山新雨后",
    nameEn: "Fresh After Rain",
    description: "青瓜柠檬 · 6%vol",
    descriptionEn: "Cucumber & Lemon · 6% ABV",
    image: "./images/products/空山新雨后.jpg",
    detail: "雨后山风般清爽，洗去油腻，酸冽回甘",
    detailEn: "Crisp as a mountain breeze after rain — cuts through grease with a refreshing sour-sweet finish",
    features: [
      "伏特加、气泡水、黄瓜汁、青柠汁",
      "20L 规格，≥120 杯产出",
      "单杯成本约 ¥3，建议零售价 ¥26",
      "清爽解腻，女生畅饮首选"
    ],
    featuresEn: [
      "Vodka, sparkling water, cucumber juice, lime juice",
      "20L format yields ≥120 glasses",
      "Cost per glass ~¥3, suggested retail ¥26",
      "Refreshing & light — a go-to crowd pleaser"
    ],
    category: "清爽系列",
    categoryEn: "Refreshing",
    alcohol: "6%",
    specs: {
      volume: "20L",
      cups: "≥120杯",
      cost: "¥3",
      wholesale: "¥340",
      retail: "¥26"
    },
    scene: "甜品奶茶饮料跨界门店",
    sceneEn: "Dessert & tea shop crossover"
  },
  {
    id: "3",
    name: "蓝色海洋",
    nameEn: "Blue Ocean",
    description: "凤梨、青柠 · 6%vol",
    descriptionEn: "Pineapple & Lime · 6% ABV",
    image: "./images/products/蓝色海洋.jpg",
    detail: "热带蔚蓝颜值款，海风与果香交织，出片率满分",
    detailEn: "Tropical turquoise stunner — sea breeze meets fruity aroma, 100% Instagram-worthy",
    features: [
      "伏特加、白朗姆、凤梨汁、青柠汁",
      "20L 规格，≥120 杯产出",
      "单杯成本约 ¥3.3，建议零售价 ¥38",
      "颜值超高，拍照热点"
    ],
    featuresEn: [
      "Vodka, white rum, pineapple juice, lime juice",
      "20L format yields ≥120 glasses",
      "Cost per glass ~¥3.3, suggested retail ¥38",
      "Stunning presentation, photo magnet"
    ],
    category: "颜值系列",
    categoryEn: "Aesthetic",
    alcohol: "6%",
    specs: {
      volume: "20L",
      cups: "≥120杯",
      cost: "¥3.3",
      wholesale: "¥414",
      retail: "¥38"
    },
    scene: "白天轻饮/咖啡特调",
    sceneEn: "Daytime sipping / coffee crossover"
  },
  {
    id: "4",
    name: "不吃香菜",
    nameEn: "No Cilantro",
    description: "百香果 · 5%vol",
    descriptionEn: "Passion Fruit · 5% ABV",
    image: "./images/products/不吃香菜.jpg",
    detail: "热恋般酸甜碰撞，跨界适配性强",
    detailEn: "Passionate sweet-sour collision, highly adaptable across venues",
    features: [
      "伏特加、白朗姆、百香果、青柠汁",
      "20L 规格，≥120 杯产出",
      "单杯成本约 ¥3.3，建议零售价 ¥38",
      "酸甜平衡，适配性强"
    ],
    featuresEn: [
      "Vodka, white rum, passion fruit, lime juice",
      "20L format yields ≥120 glasses",
      "Cost per glass ~¥3.3, suggested retail ¥38",
      "Balanced sweet-sour, versatile pairing"
    ],
    category: "果酸系列",
    categoryEn: "Fruity Tart",
    alcohol: "5%",
    specs: {
      volume: "20L",
      cups: "≥120杯",
      cost: "¥3.3",
      wholesale: "¥414",
      retail: "¥38"
    },
    scene: "岭南主题/休闲娱乐",
    sceneEn: "Lingnan-themed / leisure venues"
  },
  {
    id: "5",
    name: "香草话梅",
    nameEn: "Vanilla Plum",
    description: "话梅 · 5%vol",
    descriptionEn: "Preserved Plum · 5% ABV",
    image: "./images/products/樱桃小丸子.jpg",
    detail: "香草话梅风味，主成分话梅，经典果酒风味",
    detailEn: "Vanilla and preserved plum notes — a classic fruit wine experience",
    features: [
      "伏特加、话梅汁、香草、乳酸菌",
      "20L 规格，≥120 杯产出",
      "单杯成本约 ¥3.7，建议零售价 ¥42",
      "香草话梅，经典果酒"
    ],
    featuresEn: [
      "Vodka, plum juice, vanilla, lactobacillus",
      "20L format yields ≥120 glasses",
      "Cost per glass ~¥3.7, suggested retail ¥42",
      "Vanilla plum, classic fruit wine"
    ],
    category: "果酸系列",
    categoryEn: "Fruity Tart",
    alcohol: "5%",
    specs: {
      volume: "20L",
      cups: "≥120杯",
      cost: "¥3.7",
      wholesale: "¥460",
      retail: "¥42"
    },
    scene: "居酒屋/青梅特饮",
    sceneEn: "Izakaya / plum specialty"
  },
  {
    id: "6",
    name: "少女的心事",
    nameEn: "Maiden's Whisper",
    description: "草莓 · 3%vol",
    descriptionEn: "Strawberry · 3% ABV",
    image: "./images/products/少女的心事.jpg",
    detail: "泡泡藏着温柔心事，酸涩交织草莓甜",
    detailEn: "Gentle bubbles hiding sweet secrets — tartness woven with strawberry sweetness",
    features: [
      "伏特加、草莓汁、乳酸菌",
      "20L 规格，≥120 杯产出",
      "单杯成本约 ¥3.7，建议零售价 ¥42",
      "温柔酸涩，少女心事"
    ],
    featuresEn: [
      "Vodka, strawberry juice, lactobacillus",
      "20L format yields ≥120 glasses",
      "Cost per glass ~¥3.7, suggested retail ¥42",
      "Soft tartness, a delicate whisper"
    ],
    category: "柔和系列",
    categoryEn: "Mellow",
    alcohol: "3%",
    specs: {
      volume: "20L",
      cups: "≥120杯",
      cost: "¥3.7",
      wholesale: "¥460",
      retail: "¥42"
    },
    scene: "女生畅饮",
    sceneEn: "Ladies' night favorite"
  },
  {
    id: "7",
    name: "溺海",
    nameEn: "Drowning in Blue",
    description: "蓝莓、桑葚 · 5%vol",
    descriptionEn: "Blueberry & Mulberry · 5% ABV",
    image: "./images/products/溺海.jpg",
    detail: "坠入蓝色深海的醇厚，多重莓果层次感",
    detailEn: "Sinking into deep blue richness — layered berry complexity",
    features: [
      "伏特加、蓝莓汁、桑葚汁、树莓汁",
      "20L 规格，≥120 杯产出",
      "单杯成本约 ¥3.7，建议零售价 ¥42",
      "多重莓果，层次丰富"
    ],
    featuresEn: [
      "Vodka, blueberry juice, mulberry juice, raspberry juice",
      "20L format yields ≥120 glasses",
      "Cost per glass ~¥3.7, suggested retail ¥42",
      "Multi-berry blend, rich layers"
    ],
    category: "醇香系列",
    categoryEn: "Rich & Mellow",
    alcohol: "5%",
    specs: {
      volume: "20L",
      cups: "≥120杯",
      cost: "¥3.7",
      wholesale: "¥460",
      retail: "¥42"
    },
    scene: "餐酒/低度数友好",
    sceneEn: "Table wine / low-ABV friendly"
  },
  {
    id: "8",
    name: "柚柚红茶",
    nameEn: "Grapefruit Black Tea",
    description: "西柚 · 6%vol",
    descriptionEn: "Grapefruit · 6% ABV",
    image: "./images/products/孤寂冰川.jpg",
    detail: "清新西柚与红茶的完美融合，主成分西柚",
    detailEn: "A perfect blend of fresh grapefruit and black tea",
    features: [
      "金酒、西柚汁、红茶、薄荷、苏打水、青柠汁",
      "20L 规格，≥120 杯产出",
      "单杯成本约 ¥4.2，建议零售价 ¥52",
      "清冽干净，茶酒混搭"
    ],
    featuresEn: [
      "Gin, grapefruit juice, black tea, mint, soda, lime juice",
      "20L format yields ≥120 glasses",
      "Cost per glass ~¥4.2, suggested retail ¥52",
      "Clean & crisp, tea-spirit fusion"
    ],
    category: "清爽系列",
    categoryEn: "Refreshing",
    alcohol: "6%",
    specs: {
      volume: "20L",
      cups: "≥120杯",
      cost: "¥4.2",
      wholesale: "¥548",
      retail: "¥52"
    },
    scene: "茶酒混搭/中餐搭配",
    sceneEn: "Tea-spirit fusion / Chinese dining"
  },
  {
    id: "9",
    name: "菠萝生椰",
    nameEn: "Pineapple Coconut",
    description: "菠萝、椰汁 · 8%vol",
    descriptionEn: "Pineapple & Coconut · 8% ABV",
    image: "./images/products/菠萝生椰.jpg",
    detail: "热带清爽碰撞椰香尾韵，夜宵解腻神器",
    detailEn: "Tropical freshness meets coconut finish — the ultimate late-night palate cleanser",
    features: [
      "伏特加、菠萝汁、椰汁、青柠汁",
      "20L 规格，≥120 杯产出",
      "单杯成本约 ¥3.9，建议零售价 ¥45",
      "热带风情，解腻神器"
    ],
    featuresEn: [
      "Vodka, pineapple juice, coconut water, lime juice",
      "20L format yields ≥120 glasses",
      "Cost per glass ~¥3.9, suggested retail ¥45",
      "Tropical vibes, cuts through grease"
    ],
    category: "果香系列",
    categoryEn: "Fruity",
    alcohol: "8%",
    specs: {
      volume: "20L",
      cups: "≥120杯",
      cost: "¥3.9",
      wholesale: "¥478",
      retail: "¥45"
    },
    scene: "近水热带氛围场所",
    sceneEn: "Waterside / tropical vibe venues"
  },
  {
    id: "10",
    name: "玛格丽特",
    nameEn: "Margarita",
    description: "龙舌兰（经典烈款） · 20%vol",
    descriptionEn: "Tequila (Classic Strong) · 20% ABV",
    image: "./images/products/莫吉托.jpg",
    detail: "经典龙舌兰烈款，主成分龙舌兰，高端品鉴之选",
    detailEn: "Classic tequila strong pour — a premium tasting experience",
    features: [
      "龙舌兰、橙皮利口酒、青柠汁、柠檬汁",
      "20L 规格，≥120 杯产出",
      "单杯成本约 ¥9.3，建议零售价 ¥98",
      "烈而不冲，高端品鉴"
    ],
    featuresEn: [
      "Tequila, orange liqueur, lime juice, lemon juice",
      "20L format yields ≥120 glasses",
      "Cost per glass ~¥9.3, suggested retail ¥98",
      "Bold yet smooth, premium tasting"
    ],
    category: "烈酒系列",
    categoryEn: "Strong Spirits",
    alcohol: "20%",
    specs: {
      volume: "20L",
      cups: "≥120杯",
      cost: "¥9.3",
      wholesale: "¥1198",
      retail: "¥98"
    },
    scene: "高端与品鉴场所",
    sceneEn: "High-end & tasting venues"
  },
  {
    id: "11",
    name: "荔枝普洱",
    nameEn: "Lychee Pu'er",
    description: "荔枝 · 5%vol",
    descriptionEn: "Lychee · 5% ABV",
    image: "./images/products/妃子笑.jpg",
    detail: "荔枝果香融合普洱底蕴，干净透亮显温柔",
    detailEn: "Lychee fruitiness blended with Pu'er depth — clean, bright, and gentle",
    features: [
      "伏特加、荔枝汁、柠檬汁、苹果汁",
      "20L 规格，≥120 杯产出",
      "单杯成本约 ¥4，建议零售价 ¥48",
      "荔枝清香，普洱底蕴"
    ],
    featuresEn: [
      "Vodka, lychee juice, lemon juice, apple juice",
      "20L format yields ≥120 glasses",
      "Cost per glass ~¥4, suggested retail ¥48",
      "Lychee fragrance with Pu'er depth"
    ],
    category: "果香系列",
    categoryEn: "Fruity",
    alcohol: "5%",
    specs: {
      volume: "20L",
      cups: "≥120杯",
      cost: "¥4",
      wholesale: "¥515",
      retail: "¥48"
    },
    scene: "茶酒混搭/中餐搭配",
    sceneEn: "Tea-spirit fusion / Chinese dining"
  },
  {
    id: "12",
    name: "僵尸",
    nameEn: "Zombie",
    description: "朗姆（经典烈款） · 13.8%vol",
    descriptionEn: "Rum (Classic Strong) · 13.8% ABV",
    image: "./images/products/僵尸.jpg",
    detail: "三重朗姆打造热带风暴，烈而不冲，勇敢者挑战",
    detailEn: "Triple rum tropical storm — bold yet smooth, a dare for the brave",
    features: [
      "混合朗姆、柠檬汁、菠萝汁、橙子汁",
      "20L 规格，≥120 杯产出",
      "单杯成本约 ¥4.7，建议零售价 ¥52",
      "烈而不冲，挑战感"
    ],
    featuresEn: [
      "Blended rum, lemon juice, pineapple juice, orange juice",
      "20L format yields ≥120 glasses",
      "Cost per glass ~¥4.7, suggested retail ¥52",
      "Bold yet smooth, a thrilling challenge"
    ],
    category: "烈酒系列",
    categoryEn: "Strong Spirits",
    alcohol: "13.8%",
    specs: {
      volume: "20L",
      cups: "≥120杯",
      cost: "¥4.7",
      wholesale: "¥598",
      retail: "¥52"
    },
    scene: "高度数饮酒爱好者",
    sceneEn: "High-ABV enthusiasts"
  }
];

export const categories = ["全部", "果香系列", "清爽系列", "颜值系列", "果酸系列", "柔和系列", "醇香系列", "经典系列", "烈酒系列"];
export const categoriesEn = ["All", "Fruity", "Refreshing", "Aesthetic", "Fruity Tart", "Mellow", "Rich & Mellow", "Classic", "Strong Spirits"];
