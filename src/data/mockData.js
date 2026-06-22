export const MENUS = [
  {
    id: "m1",
    name: "パラパラ豚肉チャーハン",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=400",
    description: "定番の炒飯。豚肉は冷凍保存がきくためまとめ買いに最適です。パパっと作れる一品。",
    ingredients: [
      {
        categoryId: "pork",
        categoryName: "豚肉",
        options: [
          { 
            id: "pork_cheap", name: "【冷凍】カナダ産 豚こま切れ 100g", price: 120, nutrition: { calories: 250, protein: 15, fat: 20, carbs: 0 },
            image: "https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?auto=format&fit=crop&w=300&q=80"
          },
          { 
            id: "pork_premium", name: "【冷凍】国産 黒豚バラ肉 100g", price: 350, nutrition: { calories: 300, protein: 14, fat: 26, carbs: 0 },
            image: "https://images.unsplash.com/photo-1628268909376-e8c44bb3153f?auto=format&fit=crop&w=300&q=80",
            producer: { name: "田中 健一", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80", message: "鹿児島で丹精込めて育てた黒豚です。脂の甘みを楽しんでください。" }
          }
        ]
      },
      {
        categoryId: "egg",
        categoryName: "卵",
        options: [
          { 
            id: "egg_white", name: "白卵（Mサイズ）1個", price: 20, nutrition: { calories: 70, protein: 6, fat: 5, carbs: 0.5 },
            image: "https://images.unsplash.com/photo-1587486913049-53fc88980cb6?auto=format&fit=crop&w=300&q=80"
          },
          { 
            id: "egg_brown", name: "平飼い有精卵（茶）1個", price: 60, nutrition: { calories: 75, protein: 6.5, fat: 5, carbs: 0.5 },
            image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=300&q=80",
            producer: { name: "佐藤 美咲", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80", message: "自然豊かな山の中で放し飼いにして育てました。味が濃いです！" }
          }
        ]
      },
      {
        categoryId: "rice",
        categoryName: "ご飯",
        options: [
          { 
            id: "rice_normal", name: "国産白米（お茶碗1杯分）", price: 50, nutrition: { calories: 250, protein: 4, fat: 0.5, carbs: 55 },
            image: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?auto=format&fit=crop&w=300&q=80"
          },
          { 
            id: "rice_brown", name: "玄米（お茶碗1杯分）", price: 70, nutrition: { calories: 240, protein: 5, fat: 1.5, carbs: 50 },
            image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=300&q=80",
            producer: { name: "鈴木 農園", avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80", message: "農薬を極力減らして育てました。プチプチした食感が自慢です。" }
          }
        ]
      }
    ]
  },
  {
    id: "m2",
    name: "具だくさんチキンカレー",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=400",
    description: "週末にまとめて作れる定番カレー。冷凍鶏肉でいつでも美味しく作れます。",
    ingredients: [
      {
        categoryId: "chicken",
        categoryName: "鶏肉",
        options: [
          { 
            id: "chicken_cheap", name: "【冷凍】ブラジル産 鶏もも肉 150g", price: 100, nutrition: { calories: 200, protein: 16, fat: 14, carbs: 0 },
            image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=300&q=80"
          },
          { 
            id: "chicken_premium", name: "【冷凍】国産 森林どり もも肉 150g", price: 250, nutrition: { calories: 210, protein: 16, fat: 15, carbs: 0 },
            image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=300&q=80",
            producer: { name: "高橋 養鶏", avatar: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=100&q=80", message: "木酢液を混ぜた飼料で育てたので、鶏特有の臭みがありません。" }
          }
        ]
      },
      {
        categoryId: "onion",
        categoryName: "玉ねぎ",
        options: [
          { 
            id: "onion_normal", name: "玉ねぎ（中）1個", price: 40, nutrition: { calories: 40, protein: 1, fat: 0, carbs: 9 },
            image: "https://images.unsplash.com/photo-1620574387735-3624d75b2dbc?auto=format&fit=crop&w=300&q=80"
          },
          { 
            id: "onion_premium", name: "淡路島産 フルーツ玉ねぎ 1個", price: 120, nutrition: { calories: 45, protein: 1, fat: 0, carbs: 10 },
            image: "https://images.unsplash.com/photo-1587049352847-4d4b12e14139?auto=format&fit=crop&w=300&q=80",
            producer: { name: "伊藤 誠", avatar: "https://images.unsplash.com/photo-1610669555515-0e08ce4ee392?auto=format&fit=crop&w=100&q=80", message: "淡路島の潮風を浴びて育った、生で食べられるほど甘い玉ねぎです！" }
          }
        ]
      },
      {
        categoryId: "curry_roux",
        categoryName: "カレールー",
        options: [
          { id: "roux_cheap", name: "特売カレールー（1食分）", price: 30, nutrition: { calories: 100, protein: 1, fat: 7, carbs: 10 } },
          { id: "roux_premium", name: "無添加 スパイスカレー粉", price: 80, nutrition: { calories: 50, protein: 2, fat: 2, carbs: 6 } }
        ]
      }
    ]
  },
  {
    id: "m3",
    name: "冷凍ほうれん草の和風パスタ",
    image: "https://images.unsplash.com/photo-1516100882582-96c3a05fe590?auto=format&fit=crop&q=80&w=400",
    description: "冷凍野菜を活用した時短ヘルシーパスタ。忙しい平日の夜に。",
    ingredients: [
      {
        categoryId: "pasta",
        categoryName: "パスタ麺",
        options: [
          { id: "pasta_normal", name: "スパゲッティ乾麺 100g", price: 40, nutrition: { calories: 350, protein: 12, fat: 2, carbs: 70 } },
          { id: "pasta_whole", name: "全粒粉スパゲッティ 100g", price: 80, nutrition: { calories: 340, protein: 14, fat: 2.5, carbs: 65 } }
        ]
      },
      {
        categoryId: "spinach",
        categoryName: "ほうれん草",
        options: [
          { id: "spinach_frozen", name: "【冷凍】ほうれん草 50g", price: 30, nutrition: { calories: 10, protein: 1, fat: 0, carbs: 2 } },
          { id: "spinach_fresh", name: "朝採れ 新鮮ほうれん草 1/2束", price: 100, nutrition: { calories: 10, protein: 1, fat: 0, carbs: 2 }, image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=300&q=80", producer: { name: "木村 菜園", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80", message: "毎朝とれたての新鮮なほうれん草です。" } }
        ]
      },
      {
        categoryId: "bacon",
        categoryName: "ベーコン",
        options: [
          { id: "bacon_cheap", name: "切り落としベーコン 30g", price: 50, nutrition: { calories: 120, protein: 4, fat: 11, carbs: 0.5 } },
          { id: "bacon_premium", name: "無塩せき 厚切りベーコン 30g", price: 120, nutrition: { calories: 100, protein: 5, fat: 8, carbs: 0.5 }, producer: { name: "手作り工房 メイ", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80", message: "発色剤を使わず、塩とスパイスだけで丁寧に作りました。" } }
        ]
      }
    ]
  }
];

export const INDIVIDUAL_ITEMS = [
  { id: "i1", name: "【冷凍】カナダ産 豚こま切れ 500g", price: 500, category: "肉", nutrition: { calories: 1250, protein: 75, fat: 100, carbs: 0 } },
  { id: "i2", name: "【冷凍】ブラジル産 鶏もも肉 1kg", price: 600, category: "肉", nutrition: { calories: 1330, protein: 106, fat: 93, carbs: 0 } },
  { id: "i3", name: "【冷凍】ブロッコリー 300g", price: 200, category: "野菜", nutrition: { calories: 100, protein: 10, fat: 1, carbs: 15 } },
  { id: "i4", name: "白卵（Mサイズ）10個パック", price: 200, category: "卵・乳", nutrition: { calories: 700, protein: 60, fat: 50, carbs: 5 } },
  { id: "i5", name: "牛乳 1000ml", price: 180, category: "卵・乳", nutrition: { calories: 670, protein: 33, fat: 38, carbs: 48 } },
  { id: "i6", name: "国産白米 5kg", price: 2000, category: "米・パン", nutrition: { calories: 17500, protein: 300, fat: 40, carbs: 3850 } },
  { id: "i7", name: "食パン 6枚切り", price: 100, category: "米・パン", nutrition: { calories: 950, protein: 30, fat: 15, carbs: 170 } }
];
