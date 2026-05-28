export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  detail: string;
  features: string[];
  category: string;
  alcohol: string;
  specs: {
    volume: string;
    cups: string;
    cost: string;
    wholesale: string;
    retail: string;
  };
  scene: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "微醺杨枝甘露",
    description: "芒果 · 8%vol",
    image: "/images/products/芒芒很快乐.jpg",
    detail: "果香四溢，一口点亮平淡生活的微醺感",
    features: [
      "伏特加、芒果汁、橙子汁、青柠汁",
      "20L 规格，≥120 杯产出",
      "单杯成本约 ¥2.8，建议零售价 ¥24",
      "果香浓郁，夏日快饮首选"
    ],
    category: "果香系列",
    alcohol: "8%",
    specs: {
      volume: "20L",
      cups: "≥120杯",
      cost: "¥2.8",
      wholesale: "¥313",
      retail: "¥24"
    },
    scene: "打卡酒水/活动首杯"
  },
  {
    id: "2",
    name: "空山新雨后",
    description: "青瓜柠檬 · 6%vol",
    image: "/images/products/空山新雨后.jpg",
    detail: "雨后山风般清爽，洗去油腻，酸冽回甘",
    features: [
      "伏特加、气泡水、黄瓜汁、青柠汁",
      "20L 规格，≥120 杯产出",
      "单杯成本约 ¥3，建议零售价 ¥26",
      "清爽解腻，女生畅饮首选"
    ],
    category: "清爽系列",
    alcohol: "6%",
    specs: {
      volume: "20L",
      cups: "≥120杯",
      cost: "¥3",
      wholesale: "¥340",
      retail: "¥26"
    },
    scene: "甜品奶茶饮料跨界门店"
  },
  {
    id: "3",
    name: "蓝色海洋",
    description: "凤梨、青柠 · 6%vol",
    image: "/images/products/蓝色海洋.jpg",
    detail: "热带蔚蓝颜值款，海风与果香交织，出片率满分",
    features: [
      "伏特加、白朗姆、凤梨汁、青柠汁",
      "20L 规格，≥120 杯产出",
      "单杯成本约 ¥3.3，建议零售价 ¥38",
      "颜值超高，拍照热点"
    ],
    category: "颜值系列",
    alcohol: "6%",
    specs: {
      volume: "20L",
      cups: "≥120杯",
      cost: "¥3.3",
      wholesale: "¥414",
      retail: "¥38"
    },
    scene: "白天轻饮/咖啡特调"
  },
  {
    id: "4",
    name: "不吃香菜",
    description: "百香果 · 5%vol",
    image: "/images/products/不吃香菜.jpg",
    detail: "热恋般酸甜碰撞，跨界适配性强",
    features: [
      "伏特加、白朗姆、百香果、青柠汁",
      "20L 规格，≥120 杯产出",
      "单杯成本约 ¥3.3，建议零售价 ¥38",
      "酸甜平衡，适配性强"
    ],
    category: "果酸系列",
    alcohol: "5%",
    specs: {
      volume: "20L",
      cups: "≥120杯",
      cost: "¥3.3",
      wholesale: "¥414",
      retail: "¥38"
    },
    scene: "岭南主题/休闲娱乐"
  },
  {
    id: "5",
    name: "香草话梅",
    description: "话梅 · 5%vol",
    image: "/images/products/樱桃小丸子.jpg",
    detail: "香草话梅风味，主成分话梅，经典果酒风味",
    features: [
      "伏特加、话梅汁、香草、乳酸菌",
      "20L 规格，≥120 杯产出",
      "单杯成本约 ¥3.7，建议零售价 ¥42",
      "香草话梅，经典果酒"
    ],
    category: "果酸系列",
    alcohol: "5%",
    specs: {
      volume: "20L",
      cups: "≥120杯",
      cost: "¥3.7",
      wholesale: "¥460",
      retail: "¥42"
    },
    scene: "居酒屋/青梅特饮"
  },
  {
    id: "6",
    name: "少女的心事",
    description: "草莓 · 3%vol",
    image: "/images/products/少女的心事.jpg",
    detail: "泡泡藏着温柔心事，酸涩交织草莓甜",
    features: [
      "伏特加、草莓汁、乳酸菌",
      "20L 规格，≥120 杯产出",
      "单杯成本约 ¥3.7，建议零售价 ¥42",
      "温柔酸涩，少女心事"
    ],
    category: "柔和系列",
    alcohol: "3%",
    specs: {
      volume: "20L",
      cups: "≥120杯",
      cost: "¥3.7",
      wholesale: "¥460",
      retail: "¥42"
    },
    scene: "女生畅饮"
  },
  {
    id: "7",
    name: "溺海",
    description: "蓝莓、桑葚 · 5%vol",
    image: "/images/products/溺海.jpg",
    detail: "坠入蓝色深海的醇厚，多重莓果层次感",
    features: [
      "伏特加、蓝莓汁、桑葚汁、树莓汁",
      "20L 规格，≥120 杯产出",
      "单杯成本约 ¥3.7，建议零售价 ¥42",
      "多重莓果，层次丰富"
    ],
    category: "醇香系列",
    alcohol: "5%",
    specs: {
      volume: "20L",
      cups: "≥120杯",
      cost: "¥3.7",
      wholesale: "¥460",
      retail: "¥42"
    },
    scene: "餐酒/低度数友好"
  },
  {
    id: "8",
    name: "柚柚红茶",
    description: "西柚 · 6%vol",
    image: "/images/products/孤寂冰川.jpg",
    detail: "清新西柚与红茶的完美融合，主成分西柚",
    features: [
      "金酒、西柚汁、红茶、薄荷、苏打水、青柠汁",
      "20L 规格，≥120 杯产出",
      "单杯成本约 ¥4.2，建议零售价 ¥52",
      "清冽干净，茶酒混搭"
    ],
    category: "清爽系列",
    alcohol: "6%",
    specs: {
      volume: "20L",
      cups: "≥120杯",
      cost: "¥4.2",
      wholesale: "¥548",
      retail: "¥52"
    },
    scene: "茶酒混搭/中餐搭配"
  },
  {
    id: "9",
    name: "菠萝生椰",
    description: "菠萝、椰汁 · 8%vol",
    image: "/images/products/菠萝生椰.jpg",
    detail: "热带清爽碰撞椰香尾韵，夜宵解腻神器",
    features: [
      "伏特加、菠萝汁、椰汁、青柠汁",
      "20L 规格，≥120 杯产出",
      "单杯成本约 ¥3.9，建议零售价 ¥45",
      "热带风情，解腻神器"
    ],
    category: "果香系列",
    alcohol: "8%",
    specs: {
      volume: "20L",
      cups: "≥120杯",
      cost: "¥3.9",
      wholesale: "¥478",
      retail: "¥45"
    },
    scene: "近水热带氛围场所"
  },
  {
    id: "10",
    name: "玛格丽特",
    description: "龙舌兰（经典烈款） · 20%vol",
    image: "/images/products/莫吉托.jpg",
    detail: "经典龙舌兰烈款，主成分龙舌兰，高端品鉴之选",
    features: [
      "龙舌兰、橙皮利口酒、青柠汁、柠檬汁",
      "20L 规格，≥120 杯产出",
      "单杯成本约 ¥9.3，建议零售价 ¥98",
      "烈而不冲，高端品鉴"
    ],
    category: "烈酒系列",
    alcohol: "20%",
    specs: {
      volume: "20L",
      cups: "≥120杯",
      cost: "¥9.3",
      wholesale: "¥1198",
      retail: "¥98"
    },
    scene: "高端与品鉴场所"
  },
  {
    id: "11",
    name: "荔枝普洱",
    description: "荔枝 · 5%vol",
    image: "/images/products/妃子笑.jpg",
    detail: "荔枝果香融合普洱底蕴，干净透亮显温柔",
    features: [
      "伏特加、荔枝汁、柠檬汁、苹果汁",
      "20L 规格，≥120 杯产出",
      "单杯成本约 ¥4，建议零售价 ¥48",
      "荔枝清香，普洱底蕴"
    ],
    category: "果香系列",
    alcohol: "5%",
    specs: {
      volume: "20L",
      cups: "≥120杯",
      cost: "¥4",
      wholesale: "¥515",
      retail: "¥48"
    },
    scene: "茶酒混搭/中餐搭配"
  },
  {
    id: "12",
    name: "僵尸",
    description: "朗姆（经典烈款） · 13.8%vol",
    image: "/images/products/僵尸.jpg",
    detail: "三重朗姆打造热带风暴，烈而不冲，勇敢者挑战",
    features: [
      "混合朗姆、柠檬汁、菠萝汁、橙子汁",
      "20L 规格，≥120 杯产出",
      "单杯成本约 ¥4.7，建议零售价 ¥52",
      "烈而不冲，挑战感"
    ],
    category: "烈酒系列",
    alcohol: "13.8%",
    specs: {
      volume: "20L",
      cups: "≥120杯",
      cost: "¥4.7",
      wholesale: "¥598",
      retail: "¥52"
    },
    scene: "高度数饮酒爱好者"
  }
];

export const categories = ["全部", "果香系列", "清爽系列", "颜值系列", "果酸系列", "柔和系列", "醇香系列", "经典系列", "烈酒系列"];
