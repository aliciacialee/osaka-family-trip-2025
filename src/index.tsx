import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

app.get('/', (c) => {
  return c.html(`
<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🎄 2025大阪親子聖誕之旅 | 12/1-12/7</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700&display=swap');
        
        body {
            font-family: 'Noto Sans TC', sans-serif;
        }
        
        .day-card {
            transition: all 0.3s ease;
            cursor: pointer;
        }
        
        .day-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        .day-content {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.5s ease-out;
        }
        
        .day-content.active {
            max-height: 5000px;
            transition: max-height 1s ease-in;
        }
        
        .emoji-icon {
            display: inline-block;
            font-size: 1.25em;
            margin-right: 0.25em;
        }
        
        .gradient-bg {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        .christmas-bg {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        }
        
        .day-card-header {
            background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
        }
        
        .info-badge {
            display: inline-flex;
            align-items: center;
            padding: 0.5rem 1rem;
            border-radius: 9999px;
            font-size: 0.875rem;
            font-weight: 500;
            margin: 0.25rem;
        }
        
        .timeline-dot {
            width: 12px;
            height: 12px;
            background: #667eea;
            border-radius: 50%;
            position: absolute;
            left: -6px;
            top: 8px;
        }
        
        .timeline-item {
            position: relative;
            padding-left: 2rem;
            border-left: 2px solid #e5e7eb;
            padding-bottom: 1.5rem;
        }
        
        .budget-item {
            display: flex;
            justify-content: space-between;
            padding: 0.75rem 0;
            border-bottom: 1px solid #f3f4f6;
        }
        
        @media print {
            .no-print {
                display: none;
            }
        }
    </style>
</head>
<body class="bg-gray-50">
    <!-- Header -->
    <div class="gradient-bg text-white py-16">
        <div class="container mx-auto px-4 text-center">
            <h1 class="text-5xl font-bold mb-4">
                <span class="emoji-icon">🎄</span>
                2025大阪親子聖誕之旅
            </h1>
            <p class="text-2xl mb-6">12月1日（一） - 12月7日（日）｜7天6夜</p>
            <div class="flex flex-wrap justify-center gap-3 mt-8">
                <span class="info-badge bg-white text-purple-600">
                    <i class="fas fa-calendar-alt mr-2"></i>
                    避開工作日
                </span>
                <span class="info-badge bg-white text-purple-600">
                    <i class="fas fa-yen-sign mr-2"></i>
                    預算優惠
                </span>
                <span class="info-badge bg-white text-purple-600">
                    <i class="fas fa-users mr-2"></i>
                    人潮最少
                </span>
                <span class="info-badge bg-white text-purple-600">
                    <i class="fas fa-child mr-2"></i>
                    親子友善
                </span>
            </div>
        </div>
    </div>

    <!-- Navigation -->
    <div class="sticky top-0 bg-white shadow-md z-50 no-print">
        <div class="container mx-auto px-4">
            <div class="flex overflow-x-auto py-4 space-x-2">
                <a href="#overview" class="px-4 py-2 rounded-full bg-purple-100 text-purple-700 hover:bg-purple-200 whitespace-nowrap transition">
                    行程總覽
                </a>
                <a href="#day1" class="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 whitespace-nowrap transition">
                    Day 1
                </a>
                <a href="#day2" class="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 whitespace-nowrap transition">
                    Day 2
                </a>
                <a href="#day3" class="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 whitespace-nowrap transition">
                    Day 3
                </a>
                <a href="#day4" class="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 whitespace-nowrap transition">
                    Day 4
                </a>
                <a href="#day5" class="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 whitespace-nowrap transition">
                    Day 5
                </a>
                <a href="#day6" class="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 whitespace-nowrap transition">
                    Day 6
                </a>
                <a href="#day7" class="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 whitespace-nowrap transition">
                    Day 7
                </a>
                <a href="#budget" class="px-4 py-2 rounded-full bg-green-100 text-green-700 hover:bg-green-200 whitespace-nowrap transition">
                    預算
                </a>
                <a href="#info" class="px-4 py-2 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 whitespace-nowrap transition">
                    實用資訊
                </a>
            </div>
        </div>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto px-4 py-12">
        <!-- Overview Section -->
        <section id="overview" class="mb-16">
            <h2 class="text-3xl font-bold mb-8 text-gray-800">
                <span class="emoji-icon">📅</span>
                行程總覽
            </h2>
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead class="bg-purple-600 text-white">
                            <tr>
                                <th class="px-6 py-4 text-left">日期</th>
                                <th class="px-6 py-4 text-left">星期</th>
                                <th class="px-6 py-4 text-left">住宿地點</th>
                                <th class="px-6 py-4 text-left">主要行程</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            <tr class="hover:bg-gray-50 transition">
                                <td class="px-6 py-4 font-semibold">12/1</td>
                                <td class="px-6 py-4">週一</td>
                                <td class="px-6 py-4">環球影城園前飯店</td>
                                <td class="px-6 py-4">抵達大阪 → 環球影城周邊</td>
                            </tr>
                            <tr class="hover:bg-gray-50 transition">
                                <td class="px-6 py-4 font-semibold">12/2</td>
                                <td class="px-6 py-4">週二</td>
                                <td class="px-6 py-4">環球影城園前飯店</td>
                                <td class="px-6 py-4 text-purple-600 font-semibold">環球影城一整天（瑪莉歐世界）</td>
                            </tr>
                            <tr class="hover:bg-gray-50 transition">
                                <td class="px-6 py-4 font-semibold">12/3</td>
                                <td class="px-6 py-4">週三</td>
                                <td class="px-6 py-4">難波飯店</td>
                                <td class="px-6 py-4">移動日 → 花月劇場 → <span class="text-yellow-600 font-semibold">teamLab 燈展 ⭐</span></td>
                            </tr>
                            <tr class="hover:bg-gray-50 transition">
                                <td class="px-6 py-4 font-semibold">12/4</td>
                                <td class="px-6 py-4">週四</td>
                                <td class="px-6 py-4">難波飯店</td>
                                <td class="px-6 py-4">天保山海遊館 + 摩天輪 + 遊船</td>
                            </tr>
                            <tr class="hover:bg-gray-50 transition">
                                <td class="px-6 py-4 font-semibold">12/5</td>
                                <td class="px-6 py-4">週五</td>
                                <td class="px-6 py-4">難波飯店</td>
                                <td class="px-6 py-4">天王寺動物園 + 兒童樂園</td>
                            </tr>
                            <tr class="hover:bg-gray-50 transition">
                                <td class="px-6 py-4 font-semibold">12/6</td>
                                <td class="px-6 py-4">週六</td>
                                <td class="px-6 py-4">難波飯店</td>
                                <td class="px-6 py-4">自由日：御堂筋燈飾、聖誕市集</td>
                            </tr>
                            <tr class="hover:bg-gray-50 transition">
                                <td class="px-6 py-4 font-semibold">12/7</td>
                                <td class="px-6 py-4">週日</td>
                                <td class="px-6 py-4">-</td>
                                <td class="px-6 py-4">黑門市場 → 心齋橋 → 晚班機返台</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <!-- Day by Day Details -->
        <section class="mb-16">
            <h2 class="text-3xl font-bold mb-8 text-gray-800">
                <span class="emoji-icon">📖</span>
                每日詳細行程
            </h2>
            
            <!-- Day 1 -->
            <div id="day1" class="mb-6">
                <div class="day-card day-card-header rounded-2xl shadow-lg p-6" onclick="toggleDay('day1-content')">
                    <div class="flex items-center justify-between">
                        <div>
                            <h3 class="text-2xl font-bold text-gray-800 mb-2">
                                Day 1｜12/1（一）☁️ 10-15°C
                            </h3>
                            <p class="text-lg text-purple-600 font-semibold">抵達大阪，直奔環球影城周邊</p>
                        </div>
                        <i class="fas fa-chevron-down text-2xl text-gray-400 transition-transform" id="day1-icon"></i>
                    </div>
                </div>
                <div id="day1-content" class="day-content bg-white rounded-b-2xl shadow-lg mt-2 p-8">
                    <div class="space-y-6">
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="font-bold text-purple-600 mb-2">09:00 台灣出發</div>
                            <p class="text-gray-700">建議航班：BR178 / JX828 / CI156</p>
                        </div>
                        
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="font-bold text-purple-600 mb-2">13:30 抵達關西機場</div>
                            <ul class="list-disc list-inside text-gray-700 space-y-1">
                                <li>購買 ICOCA 卡 ¥2,000</li>
                                <li>購買大阪周遊卡 2日券 ¥3,600</li>
                            </ul>
                        </div>
                        
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="font-bold text-purple-600 mb-2">15:00 前往環球影城飯店</div>
                            <ul class="list-disc list-inside text-gray-700 space-y-1">
                                <li>搭 JR 關空快速到西九條（55分鐘）</li>
                                <li>轉 JR 櫻島線到環球影城站（5分鐘）</li>
                                <li>推薦飯店：環球港口飯店、近鐵環球影城酒店</li>
                            </ul>
                        </div>
                        
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="font-bold text-purple-600 mb-2">17:00 CityWalk 環球商城</div>
                            <p class="text-gray-700">晚餐、散步</p>
                        </div>
                        
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="font-bold text-purple-600 mb-2">19:30 返回飯店休息</div>
                            <p class="text-gray-700">準備隔天環球影城</p>
                        </div>
                    </div>
                    
                    <div class="mt-8 p-6 bg-yellow-50 rounded-xl border-l-4 border-yellow-400">
                        <h4 class="font-bold text-yellow-800 mb-3 flex items-center">
                            <i class="fas fa-lightbulb mr-2"></i>
                            親子提醒
                        </h4>
                        <ul class="list-disc list-inside text-yellow-800 space-y-1">
                            <li>第一天不要排太滿，讓小孩適應時差</li>
                            <li>提前下載環球影城官方APP</li>
                            <li>確認快速通關QR Code可使用</li>
                        </ul>
                    </div>
                    
                    <div class="mt-6 text-right">
                        <span class="text-2xl font-bold text-green-600">💰 當日預算：¥5,000</span>
                    </div>
                </div>
            </div>

            <!-- Day 2 -->
            <div id="day2" class="mb-6">
                <div class="day-card day-card-header rounded-2xl shadow-lg p-6" onclick="toggleDay('day2-content')">
                    <div class="flex items-center justify-between">
                        <div>
                            <h3 class="text-2xl font-bold text-gray-800 mb-2">
                                Day 2｜12/2（二）☀️ 12-16°C
                            </h3>
                            <p class="text-lg text-purple-600 font-semibold">環球影城魔法日（瑪莉歐世界攻略）</p>
                        </div>
                        <i class="fas fa-chevron-down text-2xl text-gray-400 transition-transform" id="day2-icon"></i>
                    </div>
                </div>
                <div id="day2-content" class="day-content bg-white rounded-b-2xl shadow-lg mt-2 p-8">
                    <div class="mb-8 p-6 bg-purple-50 rounded-xl border-l-4 border-purple-500">
                        <h4 class="font-bold text-purple-800 mb-3 text-xl">
                            <span class="emoji-icon">🎫</span>
                            門票資訊
                        </h4>
                        <ul class="list-disc list-inside text-purple-800 space-y-1">
                            <li>1日票：成人 ¥8,600-9,800、兒童（4-11歲）¥5,600-6,700</li>
                            <li>建議購買快速通關券</li>
                        </ul>
                    </div>
                    
                    <h4 class="text-xl font-bold text-gray-800 mb-4">
                        <span class="emoji-icon">⭐</span>
                        重點攻略：超級任天堂世界（瑪莉歐）
                    </h4>
                    
                    <div class="grid md:grid-cols-2 gap-6 mb-8">
                        <div class="p-6 bg-red-50 rounded-xl">
                            <h5 class="font-bold text-red-800 mb-3 flex items-center">
                                <span class="emoji-icon">🏎️</span>
                                瑪莉歐賽車：庫巴的挑戰
                            </h5>
                            <ul class="text-red-800 space-y-1 text-sm">
                                <li>• 最熱門！AR互動賽車</li>
                                <li>• 4歲可玩（身高92cm以上，需大人陪同）</li>
                            </ul>
                        </div>
                        
                        <div class="p-6 bg-green-50 rounded-xl">
                            <h5 class="font-bold text-green-800 mb-3 flex items-center">
                                <span class="emoji-icon">🎮</span>
                                耀西冒險
                            </h5>
                            <ul class="text-green-800 space-y-1 text-sm">
                                <li>• 適合幼童，溫和不刺激</li>
                                <li>• 4歲可玩（身高86cm以上）</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="mb-8">
                        <h5 class="font-bold text-gray-800 mb-3 text-lg">
                            <span class="emoji-icon">🎪</span>
                            其他4歲適合設施
                        </h5>
                        <div class="grid md:grid-cols-3 gap-4">
                            <div class="p-4 bg-blue-50 rounded-lg">
                                <div class="font-semibold text-blue-800 mb-2">小小兵樂園</div>
                                <ul class="text-sm text-blue-700 space-y-1">
                                    <li>🎬 小小兵瘋狂乘車遊</li>
                                    <li>🎪 小小兵見面會</li>
                                </ul>
                            </div>
                            <div class="p-4 bg-pink-50 rounded-lg">
                                <div class="font-semibold text-pink-800 mb-2">環球奇境</div>
                                <ul class="text-sm text-pink-700 space-y-1">
                                    <li>🎠 飛天史努比</li>
                                    <li>🚗 艾蒙的GO-GO滑板</li>
                                    <li>🎡 芝麻街歡樂世界</li>
                                </ul>
                            </div>
                            <div class="p-4 bg-orange-50 rounded-lg">
                                <div class="font-semibold text-orange-800 mb-2">其他推薦</div>
                                <ul class="text-sm text-orange-700 space-y-1">
                                    <li>🦖 侏儸紀公園乘船遊</li>
                                    <li>🌊 大白鯊</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mb-8 p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl">
                        <h5 class="font-bold text-purple-800 mb-4 text-lg">
                            <span class="emoji-icon">📅</span>
                            建議時間表
                        </h5>
                        <div class="space-y-2 text-purple-800">
                            <div class="flex justify-between items-center">
                                <span class="font-semibold">08:30-12:30</span>
                                <span>瑪莉歐世界</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="font-semibold">12:30-13:30</span>
                                <span>午餐</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="font-semibold">13:30-15:00</span>
                                <span>小小兵樂園</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="font-semibold">15:00-16:00</span>
                                <span>聖誕遊行</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="font-semibold">16:00-18:30</span>
                                <span>環球奇境、侏儸紀公園</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="font-semibold">18:30-20:00</span>
                                <span>晚餐、購物</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="p-6 bg-yellow-50 rounded-xl border-l-4 border-yellow-400">
                        <h4 class="font-bold text-yellow-800 mb-3 flex items-center">
                            <i class="fas fa-lightbulb mr-2"></i>
                            親子提醒
                        </h4>
                        <ul class="list-disc list-inside text-yellow-800 space-y-1">
                            <li>帶推車（園內可租 ¥1,100/天）</li>
                            <li>準備零食、水、暖暖包</li>
                            <li>下午安排較輕鬆活動</li>
                            <li>能量手環看預算決定（¥3,200-4,200）</li>
                        </ul>
                    </div>
                    
                    <div class="mt-6 text-right">
                        <span class="text-2xl font-bold text-green-600">💰 當日預算：¥25,000</span>
                    </div>
                </div>
            </div>

            <!-- Day 3 -->
            <div id="day3" class="mb-6">
                <div class="day-card day-card-header rounded-2xl shadow-lg p-6" onclick="toggleDay('day3-content')">
                    <div class="flex items-center justify-between">
                        <div>
                            <h3 class="text-2xl font-bold text-gray-800 mb-2">
                                Day 3｜12/3（三）⛅ 11-15°C
                            </h3>
                            <p class="text-lg text-purple-600 font-semibold">移動日 → 花月劇場 → teamLab 夜間光影秀 ⭐</p>
                        </div>
                        <i class="fas fa-chevron-down text-2xl text-gray-400 transition-transform" id="day3-icon"></i>
                    </div>
                </div>
                <div id="day3-content" class="day-content bg-white rounded-b-2xl shadow-lg mt-2 p-8">
                    <div class="space-y-6 mb-8">
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="font-bold text-purple-600 mb-2">09:30 使用 Airporter 行李運送</div>
                            <p class="text-gray-700">費用：約 ¥2,000-2,500/件</p>
                            <a href="https://www.ugx.co.jp/tw/" target="_blank" class="text-blue-600 underline text-sm">官網</a>
                        </div>
                        
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="font-bold text-purple-600 mb-2">10:00 輕裝移動到難波</div>
                            <p class="text-gray-700">JR 約30分鐘</p>
                        </div>
                        
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="font-bold text-purple-600 mb-2">11:30 難波午餐</div>
                        </div>
                    </div>
                    
                    <div class="mb-8 p-6 bg-gradient-to-r from-orange-100 to-red-100 rounded-xl">
                        <h4 class="text-xl font-bold text-orange-800 mb-4 flex items-center">
                            <span class="emoji-icon">🎭</span>
                            14:00-16:00 なんばグランド花月劇場
                        </h4>
                        <div class="grid md:grid-cols-2 gap-4 text-orange-800">
                            <div>
                                <p class="mb-2"><strong>📍 地點：</strong>大阪市中央區難波千日前 11-6</p>
                                <p class="mb-2"><strong>🎫 票價：</strong>成人 ¥4,800-5,300、兒童 ¥2,400-2,700</p>
                                <p class="mb-2"><strong>🎪 內容：</strong>吉本新喜劇 + 漫才表演</p>
                            </div>
                            <div>
                                <p class="font-semibold mb-2">演出特色：</p>
                                <ul class="list-disc list-inside space-y-1 text-sm">
                                    <li>關西搞笑文化代表</li>
                                    <li>誇張肢體動作，不懂日文也能感受歡樂</li>
                                    <li>適合親子同樂</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mb-8 p-8 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white rounded-2xl">
                        <h4 class="text-2xl font-bold mb-4 flex items-center">
                            <span class="emoji-icon">⭐</span>
                            18:00-21:00 teamLab Botanical Garden Osaka
                        </h4>
                        
                        <div class="grid md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <p class="mb-2"><strong>📍 地點：</strong>大阪市東住吉區長居公園 1-23</p>
                                <p class="mb-2"><strong>⏰ 時間：</strong>18:00-21:30（最後入場 21:00）</p>
                                <p class="mb-2"><strong>🎫 票價：</strong></p>
                                <ul class="list-disc list-inside ml-4 text-sm space-y-1">
                                    <li>成人 ¥1,800-2,400</li>
                                    <li>兒童（6-15歲）¥500-600</li>
                                    <li>學齡前（4-5歲）免費</li>
                                </ul>
                            </div>
                            <div>
                                <p class="font-semibold mb-2 text-yellow-300">🎨 展覽亮點：</p>
                                <ul class="list-disc list-inside space-y-1 text-sm">
                                    <li>會呼吸的花園 - 燈光隨音樂變化</li>
                                    <li>漂浮的發光球體 - 小孩最愛</li>
                                    <li>共鳴的樹木 - 觸碰一棵，周圍連鎖反應</li>
                                    <li>彩繪動物 - 地面投影互動</li>
                                    <li>光之瀑布 - 拍照超美</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="p-4 bg-white/10 rounded-lg">
                            <p class="font-semibold mb-2 text-yellow-300">👕 穿著建議：</p>
                            <p class="text-sm">保暖外套（戶外展覽）、圍巾、手套、暖暖包</p>
                        </div>
                    </div>
                    
                    <div class="p-6 bg-yellow-50 rounded-xl border-l-4 border-yellow-400">
                        <h4 class="font-bold text-yellow-800 mb-3 flex items-center">
                            <i class="fas fa-lightbulb mr-2"></i>
                            親子提醒
                        </h4>
                        <ul class="list-disc list-inside text-yellow-800 space-y-1">
                            <li>今天行程較滿，注意小孩體力</li>
                            <li>teamLab 是戶外，務必保暖</li>
                            <li>帶小點心和熱飲</li>
                        </ul>
                    </div>
                    
                    <div class="mt-6 text-right">
                        <span class="text-2xl font-bold text-green-600">💰 當日預算：¥15,000</span>
                    </div>
                </div>
            </div>

            <!-- Day 4 -->
            <div id="day4" class="mb-6">
                <div class="day-card day-card-header rounded-2xl shadow-lg p-6" onclick="toggleDay('day4-content')">
                    <div class="flex items-center justify-between">
                        <div>
                            <h3 class="text-2xl font-bold text-gray-800 mb-2">
                                Day 4｜12/4（四）🌤️ 10-14°C
                            </h3>
                            <p class="text-lg text-purple-600 font-semibold">天保山海洋探險日</p>
                        </div>
                        <i class="fas fa-chevron-down text-2xl text-gray-400 transition-transform" id="day4-icon"></i>
                    </div>
                </div>
                <div id="day4-content" class="day-content bg-white rounded-b-2xl shadow-lg mt-2 p-8">
                    <div class="mb-8 p-6 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl">
                        <h4 class="text-xl font-bold text-blue-800 mb-4 flex items-center">
                            <span class="emoji-icon">🐋</span>
                            10:00-13:00 海遊館
                        </h4>
                        <div class="grid md:grid-cols-2 gap-4 text-blue-800">
                            <div>
                                <p class="mb-2"><strong>📍 地點：</strong>大阪市港區海岸通 1-1-10</p>
                                <p class="mb-2"><strong>⏰ 時間：</strong>10:00-20:00</p>
                                <p class="mb-2"><strong>🎫 票價：</strong>成人 ¥2,700、兒童 ¥800</p>
                            </div>
                            <div>
                                <p class="font-semibold mb-2">必看亮點：</p>
                                <ul class="list-disc list-inside space-y-1 text-sm">
                                    <li>🦈 鯨鯊大水槽（4F）</li>
                                    <li>🐧 企鵝區（2F）</li>
                                    <li>🦦 海獺（6F）</li>
                                    <li>✋ 觸摸池（1F，可摸魟魚）</li>
                                </ul>
                            </div>
                        </div>
                        <div class="mt-4 p-3 bg-blue-50 rounded-lg">
                            <p class="font-semibold text-sm mb-1">餵食秀時間：</p>
                            <p class="text-sm">鯨鯊：10:30 / 15:00 | 企鵝：11:00 / 14:30 | 海獅：11:45 / 16:00</p>
                        </div>
                    </div>
                    
                    <div class="grid md:grid-cols-2 gap-6 mb-8">
                        <div class="p-6 bg-purple-50 rounded-xl">
                            <h5 class="font-bold text-purple-800 mb-3 flex items-center">
                                <span class="emoji-icon">🎡</span>
                                14:00-15:30 天保山大摩天輪
                            </h5>
                            <ul class="text-purple-800 space-y-2 text-sm">
                                <li><strong>🎫 票價：</strong>¥800（大阪周遊卡免費）</li>
                                <li><strong>⏰ 一圈：</strong>約 15 分鐘</li>
                                <li><strong>🎨 高度：</strong>112.5m，可看大阪灣全景</li>
                                <li>可選一般車廂或全透明車廂</li>
                            </ul>
                        </div>
                        
                        <div class="p-6 bg-teal-50 rounded-xl">
                            <h5 class="font-bold text-teal-800 mb-3 flex items-center">
                                <span class="emoji-icon">🚢</span>
                                15:30-17:00 聖瑪麗亞號觀光船
                            </h5>
                            <ul class="text-teal-800 space-y-2 text-sm">
                                <li><strong>🚢 特色：</strong>仿哥倫布帆船</li>
                                <li><strong>⏰ 航程：</strong>45-60 分鐘</li>
                                <li><strong>🎫 票價：</strong>成人 ¥1,600、兒童 ¥800</li>
                                <li>（大阪周遊卡免費）</li>
                                <li>建議搭 15:00 或 16:00 班次看夕陽</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="p-6 bg-yellow-50 rounded-xl border-l-4 border-yellow-400">
                        <h4 class="font-bold text-yellow-800 mb-3 flex items-center">
                            <i class="fas fa-lightbulb mr-2"></i>
                            親子提醒
                        </h4>
                        <ul class="list-disc list-inside text-yellow-800 space-y-1">
                            <li>戶外活動多，注意保暖</li>
                            <li>大阪周遊卡今天很劃算（省約 ¥3,000）</li>
                            <li>冬季海風大，注意保暖</li>
                        </ul>
                    </div>
                    
                    <div class="mt-6 text-right">
                        <span class="text-2xl font-bold text-green-600">💰 當日預算：¥8,000</span>
                    </div>
                </div>
            </div>

            <!-- Day 5 -->
            <div id="day5" class="mb-6">
                <div class="day-card day-card-header rounded-2xl shadow-lg p-6" onclick="toggleDay('day5-content')">
                    <div class="flex items-center justify-between">
                        <div>
                            <h3 class="text-2xl font-bold text-gray-800 mb-2">
                                Day 5｜12/5（五）☀️ 12-16°C
                            </h3>
                            <p class="text-lg text-purple-600 font-semibold">天王寺動物園 & 兒童樂園日</p>
                        </div>
                        <i class="fas fa-chevron-down text-2xl text-gray-400 transition-transform" id="day5-icon"></i>
                    </div>
                </div>
                <div id="day5-content" class="day-content bg-white rounded-b-2xl shadow-lg mt-2 p-8">
                    <div class="mb-8 p-6 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl">
                        <h4 class="text-xl font-bold text-green-800 mb-4 flex items-center">
                            <span class="emoji-icon">🦁</span>
                            10:20-13:30 天王寺動物園
                        </h4>
                        <div class="grid md:grid-cols-2 gap-4 text-green-800">
                            <div>
                                <p class="mb-2"><strong>📍 地點：</strong>大阪市天王寺區茶臼山町 1-108</p>
                                <p class="mb-2"><strong>⏰ 時間：</strong>9:30-17:00</p>
                                <p class="mb-2"><strong>🎫 票價：</strong>成人 ¥500、小學生以下免費</p>
                                <p class="text-sm">（大阪周遊卡免費）</p>
                            </div>
                            <div>
                                <p class="font-semibold mb-2">必看動物 Top 5：</p>
                                <ul class="list-disc list-inside space-y-1 text-sm">
                                    <li>🦒 長頸鹿（小孩最愛）</li>
                                    <li>🐘 大象</li>
                                    <li>🐻‍❄️ 北極熊</li>
                                    <li>🦁 獅子</li>
                                    <li>🐧 企鵝</li>
                                </ul>
                            </div>
                        </div>
                        <div class="mt-4 p-3 bg-green-50 rounded-lg">
                            <p class="font-semibold text-sm mb-1">餵食秀時間：</p>
                            <p class="text-sm">北極熊：11:00 / 15:00 | 大象：11:30 / 14:30 | 企鵝：13:30</p>
                        </div>
                    </div>
                    
                    <div class="mb-8 p-6 bg-gradient-to-r from-pink-100 to-rose-100 rounded-xl">
                        <h4 class="text-xl font-bold text-pink-800 mb-4 flex items-center">
                            <span class="emoji-icon">🎡</span>
                            14:30-17:30 兒童樂園（てんしば i:na）
                        </h4>
                        <div class="space-y-4 text-pink-800">
                            <div>
                                <p class="font-semibold mb-2">ボーネルンド遊樂場（室內）：</p>
                                <ul class="list-disc list-inside space-y-1 text-sm">
                                    <li>費用：¥1,500/90分鐘</li>
                                    <li>球池、攀爬架、積木區、扮家家酒</li>
                                    <li>非常適合 4 歲小孩放電</li>
                                </ul>
                            </div>
                            <div>
                                <p class="font-semibold mb-2">戶外遊具區（免費）：</p>
                                <ul class="list-disc list-inside space-y-1 text-sm">
                                    <li>溜滑梯、盪鞦韆、沙坑</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div class="p-6 bg-yellow-50 rounded-xl border-l-4 border-yellow-400">
                        <h4 class="font-bold text-yellow-800 mb-3 flex items-center">
                            <i class="fas fa-lightbulb mr-2"></i>
                            親子提醒
                        </h4>
                        <ul class="list-disc list-inside text-yellow-800 space-y-1">
                            <li>動物園+兒童樂園，小孩會玩很開心</li>
                            <li>今天是放電日</li>
                            <li>大阪周遊卡今天也很超值</li>
                        </ul>
                    </div>
                    
                    <div class="mt-6 text-right">
                        <span class="text-2xl font-bold text-green-600">💰 當日預算：¥8,000</span>
                    </div>
                </div>
            </div>

            <!-- Day 6 -->
            <div id="day6" class="mb-6">
                <div class="day-card day-card-header rounded-2xl shadow-lg p-6" onclick="toggleDay('day6-content')">
                    <div class="flex items-center justify-between">
                        <div>
                            <h3 class="text-2xl font-bold text-gray-800 mb-2">
                                Day 6｜12/6（六）🎄 11-15°C
                            </h3>
                            <p class="text-lg text-purple-600 font-semibold">自由日 - 御堂筋燈飾 & 聖誕市集</p>
                        </div>
                        <i class="fas fa-chevron-down text-2xl text-gray-400 transition-transform" id="day6-icon"></i>
                    </div>
                </div>
                <div id="day6-content" class="day-content bg-white rounded-b-2xl shadow-lg mt-2 p-8">
                    <div class="space-y-6 mb-8">
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="font-bold text-purple-600 mb-2">10:30 睡到自然醒</div>
                            <p class="text-gray-700">飯店悠閒早餐</p>
                        </div>
                        
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="font-bold text-purple-600 mb-2">13:30-17:00 心齋橋購物</div>
                            <p class="text-gray-700">藥妝、服飾、玩具店、難波 CITY / 高島屋</p>
                        </div>
                    </div>
                    
                    <div class="grid md:grid-cols-2 gap-6 mb-8">
                        <div class="p-6 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl">
                            <h4 class="text-xl font-bold text-blue-800 mb-4 flex items-center">
                                <span class="emoji-icon">🌟</span>
                                17:00-19:00 御堂筋燈飾
                            </h4>
                            <ul class="text-blue-800 space-y-2 text-sm">
                                <li><strong>📍 地點：</strong>御堂筋大道（梅田↔難波）</li>
                                <li><strong>⏰ 點燈：</strong>17:00-23:00</li>
                                <li><strong>💰 費用：</strong>免費觀賞</li>
                                <li><strong>最佳觀賞點：</strong>梅田區域</li>
                                <li>銀杏樹燈飾、藍白色燈海</li>
                            </ul>
                        </div>
                        
                        <div class="p-6 bg-gradient-to-br from-red-100 to-orange-100 rounded-xl christmas-bg">
                            <h4 class="text-xl font-bold text-white mb-4 flex items-center">
                                <span class="emoji-icon">🎅</span>
                                19:00-21:00 梅田聖誕市集
                            </h4>
                            <ul class="text-white space-y-2 text-sm">
                                <li><strong>📍 地點：</strong>梅田 Sky Building</li>
                                <li><strong>⏰ 時間：</strong>11:00-22:00</li>
                                <li><strong>💰 費用：</strong>免費入場</li>
                                <li>德國傳統木屋攤位</li>
                                <li>聖誕樹燈飾、旋轉木馬</li>
                                <li>熱紅酒、德國香腸、熱巧克力</li>
                                <li>週末有聖誕老人見面會</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="p-6 bg-yellow-50 rounded-xl border-l-4 border-yellow-400">
                        <h4 class="font-bold text-yellow-800 mb-3 flex items-center">
                            <i class="fas fa-lightbulb mr-2"></i>
                            親子提醒
                        </h4>
                        <ul class="list-disc list-inside text-yellow-800 space-y-1">
                            <li>今天行程最輕鬆，可彈性調整</li>
                            <li>燈飾和市集免費</li>
                            <li>保暖很重要（戶外）</li>
                        </ul>
                    </div>
                    
                    <div class="mt-6 text-right">
                        <span class="text-2xl font-bold text-green-600">💰 當日預算：¥8,000</span>
                    </div>
                </div>
            </div>

            <!-- Day 7 -->
            <div id="day7" class="mb-6">
                <div class="day-card day-card-header rounded-2xl shadow-lg p-6" onclick="toggleDay('day7-content')">
                    <div class="flex items-center justify-between">
                        <div>
                            <h3 class="text-2xl font-bold text-gray-800 mb-2">
                                Day 7｜12/7（日）☁️ 10-14°C
                            </h3>
                            <p class="text-lg text-purple-600 font-semibold">最後巡禮，晚班機返台</p>
                        </div>
                        <i class="fas fa-chevron-down text-2xl text-gray-400 transition-transform" id="day7-icon"></i>
                    </div>
                </div>
                <div id="day7-content" class="day-content bg-white rounded-b-2xl shadow-lg mt-2 p-8">
                    <div class="space-y-6 mb-8">
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="font-bold text-purple-600 mb-2">09:00 使用 Airporter 行李運送</div>
                            <p class="text-gray-700">費用：約 ¥2,500-3,000/件，當日傍晚送達機場</p>
                        </div>
                        
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="font-bold text-purple-600 mb-2">10:00-12:00 黑門市場</div>
                            <ul class="list-disc list-inside text-gray-700 space-y-1">
                                <li>新鮮水果、海鮮</li>
                                <li>和牛串燒</li>
                                <li>伴手禮（昆布、茶葉、醬油）</li>
                            </ul>
                        </div>
                        
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="font-bold text-purple-600 mb-2">12:00-15:00 心齋橋最後採購</div>
                            <ul class="list-disc list-inside text-gray-700 space-y-1">
                                <li>藥妝最後補貨</li>
                                <li>零食（白色戀人、Royce、KitKat）</li>
                                <li>文具玩具</li>
                            </ul>
                        </div>
                        
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="font-bold text-purple-600 mb-2">16:00 前往機場</div>
                            <p class="text-gray-700">搭南海電鐵 Rapi:t（34分鐘，¥1,450）</p>
                        </div>
                        
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="font-bold text-purple-600 mb-2">21:00-23:00 晚班機返台</div>
                            <p class="text-gray-700">長榮 BR129：21:10→22:55 / 星宇 JX821：21:00→22:40 / 中華 CI157：21:30→23:10</p>
                        </div>
                    </div>
                    
                    <div class="mt-6 text-right">
                        <span class="text-2xl font-bold text-green-600">💰 當日預算：¥10,000</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Budget Section -->
        <section id="budget" class="mb-16">
            <h2 class="text-3xl font-bold mb-8 text-gray-800">
                <span class="emoji-icon">💰</span>
                預算總覽
            </h2>
            <div class="bg-white rounded-2xl shadow-lg p-8">
                <div class="space-y-3">
                    <div class="budget-item">
                        <span class="font-semibold">機票</span>
                        <span class="font-bold text-purple-600">NT$51,000（¥230,000）</span>
                    </div>
                    <div class="budget-item">
                        <span class="font-semibold">住宿（6晚）</span>
                        <span class="font-bold text-purple-600">¥54,000-66,000</span>
                    </div>
                    <div class="budget-item">
                        <span class="font-semibold">環球影城（門票+快速通關）</span>
                        <span class="font-bold text-purple-600">¥24,000-32,000</span>
                    </div>
                    <div class="budget-item">
                        <span class="font-semibold">teamLab</span>
                        <span class="font-bold text-purple-600">¥3,600</span>
                    </div>
                    <div class="budget-item">
                        <span class="font-semibold">花月劇場</span>
                        <span class="font-bold text-purple-600">¥7,000</span>
                    </div>
                    <div class="budget-item">
                        <span class="font-semibold">交通（含周遊卡）</span>
                        <span class="font-bold text-purple-600">¥12,000</span>
                    </div>
                    <div class="budget-item">
                        <span class="font-semibold">Airporter 行李運送</span>
                        <span class="font-bold text-purple-600">¥5,000</span>
                    </div>
                    <div class="budget-item">
                        <span class="font-semibold">海遊館</span>
                        <span class="font-bold text-purple-600">¥6,200</span>
                    </div>
                    <div class="budget-item">
                        <span class="font-semibold">動物園+樂園</span>
                        <span class="font-bold text-purple-600">¥2,000</span>
                    </div>
                    <div class="budget-item">
                        <span class="font-semibold">餐費（7天）</span>
                        <span class="font-bold text-purple-600">¥45,000</span>
                    </div>
                    <div class="budget-item">
                        <span class="font-semibold">購物伴手禮</span>
                        <span class="font-bold text-purple-600">¥30,000-50,000</span>
                    </div>
                    <div class="budget-item border-b-0">
                        <span class="font-semibold">雜支</span>
                        <span class="font-bold text-purple-600">¥10,000</span>
                    </div>
                </div>
                
                <div class="mt-8 pt-6 border-t-4 border-purple-600">
                    <div class="flex justify-between items-center">
                        <span class="text-2xl font-bold text-gray-800">總計</span>
                        <div class="text-right">
                            <div class="text-3xl font-bold text-green-600">¥428,800-475,800</div>
                            <div class="text-xl font-semibold text-purple-600 mt-2">約 NT$95,000-105,000</div>
                            <div class="text-sm text-gray-600 mt-1">每人平均：約 NT$32,000-35,000</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Practical Info Section -->
        <section id="info" class="mb-16">
            <h2 class="text-3xl font-bold mb-8 text-gray-800">
                <span class="emoji-icon">🎯</span>
                實用資訊
            </h2>
            
            <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-white rounded-2xl shadow-lg p-6">
                    <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
                        <i class="fas fa-mobile-alt mr-3 text-purple-600"></i>
                        必備 APP
                    </h3>
                    <ul class="space-y-2 text-gray-700">
                        <li class="flex items-center">
                            <i class="fas fa-map-marked-alt mr-3 text-blue-500"></i>
                            Google Maps - 導航
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-subway mr-3 text-green-500"></i>
                            大阪Metro - 地鐵路線
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-train mr-3 text-orange-500"></i>
                            換乘案內 - 交通查詢
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-language mr-3 text-red-500"></i>
                            Google 翻譯
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-ticket-alt mr-3 text-purple-500"></i>
                            環球影城官方APP
                        </li>
                    </ul>
                </div>
                
                <div class="bg-white rounded-2xl shadow-lg p-6">
                    <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
                        <i class="fas fa-ticket-alt mr-3 text-purple-600"></i>
                        票券建議
                    </h3>
                    <ul class="space-y-2 text-gray-700">
                        <li class="flex items-start">
                            <i class="fas fa-check-circle mr-3 text-green-500 mt-1"></i>
                            <span>ICOCA 卡 ¥2,000</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle mr-3 text-green-500 mt-1"></i>
                            <span>大阪周遊卡 2日券 ¥3,600（Day 4-5）</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle mr-3 text-green-500 mt-1"></i>
                            <span>環球影城門票+快速通關（提前買）</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle mr-3 text-green-500 mt-1"></i>
                            <span>teamLab 門票（提前訂）</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle mr-3 text-green-500 mt-1"></i>
                            <span>花月劇場門票（提前訂）</span>
                        </li>
                    </ul>
                </div>
                
                <div class="bg-white rounded-2xl shadow-lg p-6">
                    <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
                        <i class="fas fa-temperature-low mr-3 text-purple-600"></i>
                        天氣與服裝
                    </h3>
                    <ul class="space-y-2 text-gray-700">
                        <li class="flex items-start">
                            <i class="fas fa-thermometer-half mr-3 text-blue-500 mt-1"></i>
                            <span><strong>氣溫：</strong>10-16°C</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-tshirt mr-3 text-green-500 mt-1"></i>
                            <span><strong>穿著：</strong>洋蔥式穿搭、保暖外套、圍巾手套</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-umbrella mr-3 text-purple-500 mt-1"></i>
                            <span><strong>備用：</strong>雨傘、暖暖包</span>
                        </li>
                    </ul>
                </div>
                
                <div class="bg-white rounded-2xl shadow-lg p-6">
                    <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
                        <i class="fas fa-phone-alt mr-3 text-red-600"></i>
                        緊急聯絡
                    </h3>
                    <ul class="space-y-2 text-gray-700">
                        <li class="flex items-start">
                            <i class="fas fa-building mr-3 text-blue-500 mt-1"></i>
                            <div>
                                <strong>駐大阪台北經濟文化辦事處</strong><br>
                                <span class="text-sm">電話：06-6443-8481</span><br>
                                <span class="text-sm text-red-600">急難救助（24hr）：080-6552-4764</span>
                            </div>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-ambulance mr-3 text-red-500 mt-1"></i>
                            <div>
                                <strong>日本緊急電話</strong><br>
                                <span class="text-sm">警察：110 | 救護車/消防：119</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </div>

    <!-- Footer -->
    <footer class="gradient-bg text-white py-12">
        <div class="container mx-auto px-4 text-center">
            <p class="text-lg mb-2">🎄 祝你們有個美好的大阪親子聖誕之旅 🎄</p>
            <p class="text-sm opacity-80">製作日期：2025年11月4日</p>
        </div>
    </footer>

    <script>
        function toggleDay(contentId) {
            const content = document.getElementById(contentId);
            const icon = document.getElementById(contentId.replace('-content', '-icon'));
            
            if (content.classList.contains('active')) {
                content.classList.remove('active');
                icon.style.transform = 'rotate(0deg)';
            } else {
                content.classList.add('active');
                icon.style.transform = 'rotate(180deg)';
            }
        }
        
        // Smooth scroll for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    </script>
</body>
</html>
  `)
})

export default app
