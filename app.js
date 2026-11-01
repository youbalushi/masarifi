
const ICONS = {
  sms: 'M4 5h16v11H9l-5 4zM8 9h8M8 12h5',
  cart: 'M3 4h2l2.2 10.1a1.2 1.2 0 0 0 1.2.9h8.7a1.2 1.2 0 0 0 1.2-.9L20 7.5H6.3M9 20h.01M17 20h.01',
  bowl: 'M4 11h16a8 8 0 0 1-16 0zM8.5 7.5c0-1.4 1-1.8 1-3.2M12 7.5c0-1.4 1-1.8 1-3.2M15.5 7.5c0-1.4 1-1.8 1-3.2',
  fuel: 'M5 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16M3.5 21h13M8 8h4M15 10h2a2 2 0 0 1 2 2v5a1.5 1.5 0 0 0 3 0V9l-3-3',
  shield: 'M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6zM9 12l2 2 4-4',
  bolt: 'M13 3L5 13h6l-1 8 8-10h-6z',
  bag: 'M6 8h12l-1 12H7zM9 8V6a3 3 0 0 1 6 0v2',
  heart: 'M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z',
  car: 'M5 16v-4l2-5.5h10L19 12v4M4 16h16v3H4zM8 13.5h.01M16 13.5h.01',
  users: 'M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16 4.5a3.5 3.5 0 0 1 0 6.5M18 14c2 .7 3 2.8 3 6',
  dots: 'M5.5 12h.5M11.75 12h.5M18 12h.5',
  repeat: 'M17 2l3 3-3 3M4 11V9a4 4 0 0 1 4-4h12M7 22l-3-3 3-3M20 13v2a4 4 0 0 1-4 4H4',
  swap: 'M4 8h14l-4-4M20 16H6l4 4',
  question: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM9.5 9.5a2.5 2.5 0 0 1 4.9.7c0 1.6-2.4 2.1-2.4 3.8M12 17h.01',
  trend: 'M3 17l6-6 4 4 8-8M15 7h6v6',
  piggy: 'M5 11a7 6 0 0 1 12.5-3.5L21 7l-1 4a6 6 0 0 1-3 4.5V19h-3v-2H9v2H6v-3.5A6 6 0 0 1 5 11zM9 10h.01',
  spark: 'M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6',
  card: 'M3 6h18v12H3zM3 10h18M7 15h4',
  cash: 'M3 7h18v10H3zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 10v.01M18 14v.01',
  wallet: 'M4 7h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1zM4 7l11-3v3M16 13.5h.01',
  star: 'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 3v3M17.5 4.5h3',
  home: 'M3 10.5L12 4l9 6.5M5.5 9.5V20h13V9.5M10 20v-5h4v5',
  gift: 'M4 11h16v9H4zM3 7h18v4H3zM12 7v13M12 7c-1.5-3-5-3-5-1s3 1 5 1c2 0 5 1 5-1s-3.5-2-5 1',
  book: 'M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM4 19V5M8 7h7',
  phone: 'M8 3h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM11 18h2',
  game: 'M6 9h12a3 3 0 0 1 3 3v2a3 3 0 0 1-5.2 2L14 14h-4l-1.8 2A3 3 0 0 1 3 14v-2a3 3 0 0 1 3-3zM8 11v3M6.5 12.5h3M16 12h.01M18 13.5h.01',
  fp: 'M12 11v3a6 6 0 0 1-1.2 3.6M8.4 7.6A5 5 0 0 1 17 11v1.6M6.6 9.8A6 6 0 0 0 6 12.4v1.2M9 12a3 3 0 0 1 6 0v2a9 9 0 0 1-1.3 4.6M16.2 19.6A11 11 0 0 0 17 16',
  backspace: 'M9 6h11v12H9l-6-6zM12.5 9.5l5 5M17.5 9.5l-5 5'
};

const DEFAULT_CATS = [
  { id: 'grocery', ar: 'بقالة', ic: 'cart', color: '#23624D', bg: '#E3F0EA' },
  { id: 'food', ar: 'مطاعم وتوصيل', ic: 'bowl', color: '#9A4523', bg: '#F6E6DC' },
  { id: 'fuel', ar: 'وقود', ic: 'fuel', color: '#34507D', bg: '#E3E9F3' },
  { id: 'gov', ar: 'حكومية ومخالفات', ic: 'shield', color: '#4E437D', bg: '#E9E5F3' },
  { id: 'bills', ar: 'فواتير وخدمات', ic: 'bolt', color: '#6E5415', bg: '#F3ECD9' },
  { id: 'shopping', ar: 'تسوّق', ic: 'bag', color: '#84325A', bg: '#F4E1EA' },
  { id: 'health', ar: 'صحة', ic: 'heart', color: '#9C2F3D', bg: '#F6E1E3' },
  { id: 'transport', ar: 'مواصلات', ic: 'car', color: '#245B70', bg: '#DFEEF3' },
  { id: 'family', ar: 'عائلة وتحويلات', ic: 'users', color: '#5A4B38', bg: '#EEE8E0' },
  { id: 'subs', ar: 'اشتراكات', ic: 'repeat', color: '#6A4C93', bg: '#EEE7F6' },
  { id: 'other', ar: 'أخرى', ic: 'dots', color: '#4F5B56', bg: '#E8ECEA' }
];
let CATS = DEFAULT_CATS.map((c) => Object.assign({}, c));
const FIXED_CAT = { id: 'fixed', ar: 'مصاريف ثابتة', ic: 'repeat', color: '#3D5A52', bg: '#E2ECE8' };
const INST_CAT = { id: 'inst', ar: 'أقساط', ic: 'card', color: '#6B4A2E', bg: '#F0E7DD' };

const MONEY_TIPS = [
  'القرش الأبيض ينفع في اليوم الأسود.',
  'على قد لحافك مد رجولك.',
  'وكلوا واشربوا ولا تسرفوا.',
  'ادخر أول ما ينزل الراتب، مو اللي يتبقى آخر الشهر.',
  'قبل لا تشتري، اسأل نفسك: أحتاجه ولا أبيه بس؟',
  'المصاريف الصغيرة كل يوم تصير مبلغ كبير آخر الشهر.',
  'اللي ما يحسب، ما يدري وين راحت فلوسه.',
  'خل لك صندوق طوارئ يغطي مصاريف ٣ أشهر على الأقل.',
  'لا تشتري شي غالي وأنت زعلان أو مستعجل، أجّله ليوم.',
  'قسّم راتبك: حاجات، رغبات، وادخار، ولا تلخبطهم.',
  'الدين هم بالليل وذل بالنهار، خففه قبل لا تزيده.',
  'سدّد الأقساط الغالية أول، وبعدها الأرخص.',
  'كل ريال توفره الحين، يتعب عنك بعدين.',
  'قارن الأسعار قبل الشراء، الفرق يتجمع.',
  'راجع اشتراكاتك كل شهر، وألغِ اللي ما تستخدمه.',
  'العروض مو توفير إذا كنت ما تحتاج الشي أصلاً.',
  'خل للمناسبات والأعياد ميزانية من بدري، لا تتفاجأ فيها.',
  'الطبخ في البيت يوفر أكثر مما تتوقع.',
  'لا تقارن مصاريفك بغيرك، كل واحد ظروفه.',
  'الصبر على الشراء أسهل من الصبر على الدين.',
  'حط هدف واضح للادخار، الهدف يخليك تلتزم.',
  'من لا يدبّر، يطيح في الضيق.',
  'زيادة الراتب مو سبب تزيد الصرف بنفس القدر.',
  'اشترِ الجودة مرة وحدة، أحسن من الرخيص مرتين.',
  'سجّل كل مصروف، حتى الصغير، عشان الصورة تكون كاملة.',
  'خطط لمشترياتك الكبيرة، ولا تخليها ردة فعل.',
  'النقد يحسسك بالصرف أكثر من البطاقة، جرّبه أسبوع.',
  'الفلوس تجي وتروح، العادة الطيبة هي اللي تبقى.',
  'ادفع الفواتير في وقتها، الغرامات خسارة بلاش.',
  'خل يوم في الأسبوع بدون أي صرف.',
  'ما كل شي رخيص يستاهل، وما كل شي غالي زين.',
  'الادخار القليل المستمر أحسن من الكثير المتقطع.',
  'قبل السفر حط ميزانية الرحلة، والتزم فيها.',
  'علّم عيالك قيمة الريال من صغرهم.',
  'لا تقرض أكثر من اللي تقدر تستغنى عنه.',
  'الراتب ينزل مرة، والمصاريف كل يوم. وزّعه صح.'
];
let TIP_IDX = Math.floor(Math.random() * MONEY_TIPS.length);
try { const k = 'masarifi_tip'; const prev = Number(localStorage.getItem(k)); if (!isNaN(prev) && prev === TIP_IDX) TIP_IDX = (TIP_IDX + 1) % MONEY_TIPS.length; localStorage.setItem(k, String(TIP_IDX)); } catch (e) {}
const AR_M = ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'];
const COUNTRIES = [
  { code: "OM", ar: "عُمان", cur: "OMR", keys: ["عمان", "سلطنة عمان", "مسقط", "صلالة", "صحار", "نزوى", "صور", "الدقم", "خصب", "مسندم", "البريمي", "عبري", "الرستاق", "ظفار", "الجبل الأخضر", "الجبل الاخضر", "جبل شمس", "السيب", "مطرح", "بركاء", "إبراء", "ابراء", "بهلاء", "سمائل", "الأشخرة", "الاشخرة", "رأس الحد", "مصيرة", "المصنعة", "oman", "muscat", "salalah", "sohar", "nizwa", "duqm", "khasab", "musandam", "dhofar", "buraimi"] },
  { code: "TR", ar: "تركيا", cur: "TRY", keys: ["تركيا", "اسطنبول", "إسطنبول", "انطاليا", "أنطاليا", "طرابزون", "بورصة", "بودروم", "أنقرة", "انقرة", "ازمير", "إزمير", "كبادوكيا", "سبانجا", "أوزنجول", "اوزنجول", "فتحية", "مرمريس", "turkey", "turkiye", "istanbul", "antalya", "trabzon", "bodrum", "ankara", "izmir", "cappadocia", "bursa"] },
  { code: "AE", ar: "الإمارات", cur: "AED", keys: ["الإمارات", "الامارات", "دبي", "أبوظبي", "ابوظبي", "أبو ظبي", "ابو ظبي", "الشارقة", "العين", "رأس الخيمة", "راس الخيمة", "عجمان", "الفجيرة", "خورفكان", "ام القيوين", "dubai", "abu dhabi", "sharjah", "uae", "emirates", "ajman", "fujairah", "ras al khaimah"] },
  { code: "SA", ar: "السعودية", cur: "SAR", keys: ["السعودية", "الرياض", "جدة", "مكة", "المدينة المنورة", "المدينة", "الدمام", "الخبر", "العلا", "الطائف", "أبها", "ابها", "تبوك", "نيوم", "الأحساء", "الاحساء", "saudi", "ksa", "riyadh", "jeddah", "makkah", "mecca", "madinah", "medina", "dammam", "alula", "taif", "abha"] },
  { code: "QA", ar: "قطر", cur: "QAR", keys: ["قطر", "الدوحة", "الوكرة", "qatar", "doha"] },
  { code: "BH", ar: "البحرين", cur: "BHD", keys: ["البحرين", "المنامة", "المحرق", "bahrain", "manama"] },
  { code: "KW", ar: "الكويت", cur: "KWD", keys: ["الكويت", "kuwait"] },
  { code: "EG", ar: "مصر", cur: "EGP", keys: ["مصر", "القاهرة", "الإسكندرية", "الاسكندرية", "شرم الشيخ", "شرم", "الغردقة", "الأقصر", "الاقصر", "أسوان", "اسوان", "دهب", "egypt", "cairo", "alexandria", "sharm", "hurghada", "luxor", "aswan"] },
  { code: "JO", ar: "الأردن", cur: "JOD", keys: ["الأردن", "الاردن", "البتراء", "العقبة", "البحر الميت", "جرش", "jordan", "amman", "aqaba", "petra"] },
  { code: "LB", ar: "لبنان", cur: "USD", keys: ["لبنان", "بيروت", "جونية", "lebanon", "beirut"] },
  { code: "IQ", ar: "العراق", cur: "IQD", keys: ["العراق", "بغداد", "البصرة", "أربيل", "اربيل", "النجف", "كربلاء", "السليمانية", "iraq", "baghdad", "basra", "erbil", "najaf", "karbala"] },
  { code: "MA", ar: "المغرب", cur: "MAD", keys: ["المغرب", "مراكش", "الدار البيضاء", "الرباط", "طنجة", "فاس", "أكادير", "اكادير", "شفشاون", "morocco", "marrakech", "marrakesh", "casablanca", "rabat", "tangier", "fes", "agadir"] },
  { code: "TN", ar: "تونس", cur: "TND", keys: ["تونس", "الحمامات", "سوسة", "جربة", "tunisia", "tunis", "hammamet", "sousse", "djerba"] },
  { code: "DZ", ar: "الجزائر", cur: "DZD", keys: ["الجزائر", "وهران", "algeria", "algiers", "oran"] },
  { code: "GB", ar: "بريطانيا", cur: "GBP", keys: ["بريطانيا", "المملكة المتحدة", "لندن", "مانشستر", "برمنغهام", "ليفربول", "إنجلترا", "انجلترا", "اسكتلندا", "إسكتلندا", "ادنبره", "إدنبرة", "ادنبرة", "ويلز", "london", "manchester", "birmingham", "liverpool", "england", "scotland", "edinburgh", "wales", "united kingdom", "britain"] },
  { code: "IE", ar: "أيرلندا", cur: "EUR", keys: ["أيرلندا", "ايرلندا", "إيرلندا", "دبلن", "ireland", "dublin"] },
  { code: "FR", ar: "فرنسا", cur: "EUR", keys: ["فرنسا", "باريس", "نيس", "ليون", "مارسيليا", "france", "paris", "cannes", "lyon", "marseille"] },
  { code: "DE", ar: "ألمانيا", cur: "EUR", keys: ["ألمانيا", "المانيا", "ميونخ", "برلين", "فرانكفورت", "هامبورغ", "دوسلدورف", "كولن", "germany", "munich", "berlin", "frankfurt", "hamburg", "dusseldorf", "cologne"] },
  { code: "IT", ar: "إيطاليا", cur: "EUR", keys: ["إيطاليا", "ايطاليا", "روما", "ميلان", "ميلانو", "فينيسيا", "البندقية", "فلورنسا", "نابولي", "كومو", "italy", "rome", "milan", "venice", "florence", "naples", "como"] },
  { code: "ES", ar: "إسبانيا", cur: "EUR", keys: ["إسبانيا", "اسبانيا", "مدريد", "برشلونة", "ماربيا", "ملقا", "مالقة", "غرناطة", "إشبيلية", "اشبيلية", "spain", "madrid", "barcelona", "marbella", "malaga", "granada", "seville"] },
  { code: "PT", ar: "البرتغال", cur: "EUR", keys: ["البرتغال", "لشبونة", "بورتو", "portugal", "lisbon", "porto"] },
  { code: "GR", ar: "اليونان", cur: "EUR", keys: ["اليونان", "أثينا", "اثينا", "سانتوريني", "ميكونوس", "greece", "athens", "santorini", "mykonos"] },
  { code: "CY", ar: "قبرص", cur: "EUR", keys: ["قبرص", "لارنكا", "ليماسول", "cyprus", "larnaca", "limassol"] },
  { code: "MT", ar: "مالطا", cur: "EUR", keys: ["مالطا", "malta"] },
  { code: "AT", ar: "النمسا", cur: "EUR", keys: ["النمسا", "فيينا", "زيلامسي", "زيلامسيه", "سالزبورغ", "انسبروك", "إنسبروك", "كابرون", "austria", "vienna", "zell am see", "salzburg", "innsbruck"] },
  { code: "NL", ar: "هولندا", cur: "EUR", keys: ["هولندا", "أمستردام", "امستردام", "روتردام", "netherlands", "holland", "amsterdam", "rotterdam"] },
  { code: "BE", ar: "بلجيكا", cur: "EUR", keys: ["بلجيكا", "بروكسل", "بروج", "belgium", "brussels", "bruges"] },
  { code: "FI", ar: "فنلندا", cur: "EUR", keys: ["فنلندا", "هلسنكي", "لابلاند", "finland", "helsinki", "lapland"] },
  { code: "HR", ar: "كرواتيا", cur: "EUR", keys: ["كرواتيا", "دوبروفنيك", "زغرب", "croatia", "dubrovnik", "zagreb"] },
  { code: "SI", ar: "سلوفينيا", cur: "EUR", keys: ["سلوفينيا", "ليوبليانا", "slovenia", "ljubljana"] },
  { code: "ME", ar: "الجبل الأسود", cur: "EUR", keys: ["الجبل الأسود", "الجبل الاسود", "montenegro"] },
  { code: "CH", ar: "سويسرا", cur: "CHF", keys: ["سويسرا", "زيورخ", "جنيف", "إنترلاكن", "انترلاكن", "لوزان", "لوسيرن", "لوزيرن", "switzerland", "zurich", "geneva", "interlaken", "lausanne", "lucerne"] },
  { code: "CZ", ar: "التشيك", cur: "CZK", keys: ["التشيك", "براغ", "czech", "prague"] },
  { code: "HU", ar: "المجر", cur: "HUF", keys: ["المجر", "هنغاريا", "بودابست", "hungary", "budapest"] },
  { code: "PL", ar: "بولندا", cur: "PLN", keys: ["بولندا", "وارسو", "كراكوف", "poland", "warsaw", "krakow"] },
  { code: "SE", ar: "السويد", cur: "SEK", keys: ["السويد", "ستوكهولم", "sweden", "stockholm"] },
  { code: "NO", ar: "النرويج", cur: "NOK", keys: ["النرويج", "أوسلو", "اوسلو", "norway", "oslo"] },
  { code: "DK", ar: "الدنمارك", cur: "DKK", keys: ["الدنمارك", "كوبنهاغن", "denmark", "copenhagen"] },
  { code: "IS", ar: "آيسلندا", cur: "ISK", keys: ["آيسلندا", "ايسلندا", "iceland", "reykjavik"] },
  { code: "BA", ar: "البوسنة", cur: "BAM", keys: ["البوسنة", "سراييفو", "موستار", "bosnia", "sarajevo", "mostar"] },
  { code: "RS", ar: "صربيا", cur: "RSD", keys: ["صربيا", "بلغراد", "serbia", "belgrade"] },
  { code: "AL", ar: "ألبانيا", cur: "ALL", keys: ["ألبانيا", "البانيا", "تيرانا", "albania", "tirana"] },
  { code: "GE", ar: "جورجيا", cur: "GEL", keys: ["جورجيا", "تبليسي", "باتومي", "georgia", "tbilisi", "batumi"] },
  { code: "AZ", ar: "أذربيجان", cur: "AZN", keys: ["أذربيجان", "اذربيجان", "باكو", "قبالا", "azerbaijan", "baku", "gabala"] },
  { code: "AM", ar: "أرمينيا", cur: "AMD", keys: ["أرمينيا", "ارمينيا", "يريفان", "armenia", "yerevan"] },
  { code: "RU", ar: "روسيا", cur: "RUB", keys: ["روسيا", "موسكو", "سانت بطرسبرغ", "russia", "moscow", "st petersburg"] },
  { code: "UZ", ar: "أوزبكستان", cur: "UZS", keys: ["أوزبكستان", "اوزبكستان", "طشقند", "سمرقند", "بخارى", "uzbekistan", "tashkent", "samarkand", "bukhara"] },
  { code: "KZ", ar: "كازاخستان", cur: "KZT", keys: ["كازاخستان", "ألماتي", "الماتي", "kazakhstan", "almaty", "astana"] },
  { code: "KG", ar: "قيرغيزستان", cur: "KGS", keys: ["قيرغيزستان", "قرغيزستان", "بيشكيك", "kyrgyzstan", "bishkek"] },
  { code: "US", ar: "أمريكا", cur: "USD", keys: ["أمريكا", "امريكا", "الولايات المتحدة", "نيويورك", "لوس أنجلوس", "لوس انجلوس", "ميامي", "لاس فيغاس", "سان فرانسيسكو", "واشنطن", "شيكاغو", "أورلاندو", "اورلاندو", "هيوستن", "بوسطن", "usa", "america", "united states", "new york", "los angeles", "miami", "las vegas", "san francisco", "washington", "chicago", "orlando", "houston", "boston"] },
  { code: "CA", ar: "كندا", cur: "CAD", keys: ["كندا", "تورنتو", "فانكوفر", "مونتريال", "canada", "toronto", "vancouver", "montreal"] },
  { code: "MX", ar: "المكسيك", cur: "MXN", keys: ["المكسيك", "كانكون", "mexico", "cancun"] },
  { code: "BR", ar: "البرازيل", cur: "BRL", keys: ["البرازيل", "ريو دي جانيرو", "ساو باولو", "brazil", "rio de janeiro", "sao paulo"] },
  { code: "TH", ar: "تايلاند", cur: "THB", keys: ["تايلاند", "بانكوك", "بوكيت", "باتايا", "كرابي", "ساموي", "شنغ ماي", "thailand", "bangkok", "phuket", "pattaya", "krabi", "samui", "chiang mai"] },
  { code: "MY", ar: "ماليزيا", cur: "MYR", keys: ["ماليزيا", "كوالالمبور", "كوالا لمبور", "لنكاوي", "بينانق", "بينانغ", "جنتنج", "كاميرون", "malaysia", "kuala lumpur", "langkawi", "penang", "genting"] },
  { code: "ID", ar: "إندونيسيا", cur: "IDR", keys: ["إندونيسيا", "اندونيسيا", "بالي", "جاكرتا", "بونشاك", "باندونق", "لومبوك", "indonesia", "bali", "jakarta", "puncak", "bandung", "lombok"] },
  { code: "SG", ar: "سنغافورة", cur: "SGD", keys: ["سنغافورة", "سنغافوره", "singapore"] },
  { code: "PH", ar: "الفلبين", cur: "PHP", keys: ["الفلبين", "مانيلا", "سيبو", "بوراكاي", "philippines", "manila", "cebu", "boracay"] },
  { code: "VN", ar: "فيتنام", cur: "VND", keys: ["فيتنام", "هانوي", "هوشي منه", "vietnam", "hanoi", "ho chi minh"] },
  { code: "CN", ar: "الصين", cur: "CNY", keys: ["الصين", "بكين", "شنغهاي", "قوانزو", "غوانزو", "china", "beijing", "shanghai", "guangzhou"] },
  { code: "HK", ar: "هونغ كونغ", cur: "HKD", keys: ["هونغ كونغ", "هونج كونج", "hong kong"] },
  { code: "KR", ar: "كوريا", cur: "KRW", keys: ["كوريا", "سيول", "بوسان", "korea", "seoul", "busan"] },
  { code: "JP", ar: "اليابان", cur: "JPY", keys: ["اليابان", "طوكيو", "أوساكا", "اوساكا", "كيوتو", "japan", "tokyo", "osaka", "kyoto"] },
  { code: "IN", ar: "الهند", cur: "INR", keys: ["الهند", "مومباي", "دلهي", "نيودلهي", "كيرلا", "كيرالا", "بنقلور", "بنغالور", "حيدر آباد", "حيدراباد", "كشمير", "india", "mumbai", "delhi", "kerala", "bangalore", "hyderabad", "goa", "kashmir", "chennai"] },
  { code: "PK", ar: "باكستان", cur: "PKR", keys: ["باكستان", "كراتشي", "لاهور", "إسلام آباد", "اسلام اباد", "pakistan", "karachi", "lahore", "islamabad"] },
  { code: "BD", ar: "بنغلاديش", cur: "BDT", keys: ["بنغلاديش", "بنجلاديش", "دكا", "bangladesh", "dhaka"] },
  { code: "NP", ar: "نيبال", cur: "NPR", keys: ["نيبال", "كاتماندو", "nepal", "kathmandu"] },
  { code: "LK", ar: "سريلانكا", cur: "LKR", keys: ["سريلانكا", "كولومبو", "كاندي", "sri lanka", "colombo", "kandy"] },
  { code: "MV", ar: "المالديف", cur: "USD", keys: ["المالديف", "جزر المالديف", "ماليه", "maldives"] },
  { code: "SC", ar: "سيشل", cur: "SCR", keys: ["سيشل", "seychelles"] },
  { code: "MU", ar: "موريشيوس", cur: "MUR", keys: ["موريشيوس", "mauritius"] },
  { code: "KE", ar: "كينيا", cur: "KES", keys: ["كينيا", "نيروبي", "ماساي مارا", "kenya", "nairobi", "masai mara"] },
  { code: "TZ", ar: "تنزانيا", cur: "TZS", keys: ["تنزانيا", "زنجبار", "دار السلام", "tanzania", "zanzibar", "dar es salaam"] },
  { code: "ZA", ar: "جنوب أفريقيا", cur: "ZAR", keys: ["جنوب أفريقيا", "جنوب افريقيا", "كيب تاون", "جوهانسبرغ", "south africa", "cape town", "johannesburg"] },
  { code: "AU", ar: "أستراليا", cur: "AUD", keys: ["أستراليا", "استراليا", "سيدني", "ملبورن", "australia", "sydney", "melbourne"] },
  { code: "NZ", ar: "نيوزيلندا", cur: "NZD", keys: ["نيوزيلندا", "new zealand", "auckland"] }
];
// أسعار تقريبية للعرض فقط (ريال عماني لكل وحدة)؛ في التطبيق الفعلي تتحدث يومياً
const RATES = {OMR: 1, USD: 0.385, EUR: 0.418, GBP: 0.51, CHF: 0.44, TRY: 0.0112, AED: 0.1048, SAR: 0.1026, QAR: 0.1057, BHD: 1.023, KWD: 1.256, EGP: 0.0079, JOD: 0.543, MAD: 0.039, BAM: 0.214, GEL: 0.142, AZN: 0.226, THB: 0.0118, MYR: 0.087, IDR: 2.37e-05, INR: 0.0045, PKR: 0.00137, LKR: 0.0013, JPY: 0.0026, KES: 0.003, TZS: 0.00015, IQD: 0.000294, TND: 0.124, DZD: 0.00288, CZK: 0.0167, HUF: 0.00105, PLN: 0.096, SEK: 0.036, NOK: 0.035, DKK: 0.056, ISK: 0.0028, RSD: 0.0036, ALL: 0.0042, AMD: 0.00099, RUB: 0.0047, UZS: 3e-05, KZT: 0.00078, KGS: 0.0044, CAD: 0.28, MXN: 0.02, BRL: 0.07, SGD: 0.29, PHP: 0.0066, VND: 1.52e-05, CNY: 0.0535, HKD: 0.0494, KRW: 0.000277, BDT: 0.0032, NPR: 0.0029, SCR: 0.027, MUR: 0.0084, ZAR: 0.021, AUD: 0.25, NZD: 0.23};
const CUR_AR = { OMR: 'ريال عماني', USD: 'دولار أمريكي', EUR: 'يورو', GBP: 'جنيه إسترليني', CHF: 'فرنك سويسري', TRY: 'ليرة تركية', AED: 'درهم إماراتي', SAR: 'ريال سعودي', QAR: 'ريال قطري', BHD: 'دينار بحريني', KWD: 'دينار كويتي', EGP: 'جنيه مصري', JOD: 'دينار أردني', MAD: 'درهم مغربي', BAM: 'مارك بوسني', GEL: 'لاري جورجي', AZN: 'مانات أذربيجاني', THB: 'بات تايلندي', MYR: 'رينغيت ماليزي', IDR: 'روبية إندونيسية', INR: 'روبية هندية', PKR: 'روبية باكستانية', LKR: 'روبية سريلانكية', JPY: 'ين ياباني', KES: 'شلن كيني', TZS: 'شلن تنزاني', IQD: 'دينار عراقي', TND: 'دينار تونسي', DZD: 'دينار جزائري', CZK: 'كرونة تشيكية', HUF: 'فورنت مجري', PLN: 'زلوتي بولندي', SEK: 'كرونة سويدية', NOK: 'كرونة نرويجية', DKK: 'كرونة دنماركية', ISK: 'كرونة آيسلندية', RSD: 'دينار صربي', ALL: 'ليك ألباني', AMD: 'درام أرميني', RUB: 'روبل روسي', UZS: 'سوم أوزبكي', KZT: 'تينغ كازاخي', KGS: 'سوم قيرغيزي', CAD: 'دولار كندي', MXN: 'بيزو مكسيكي', BRL: 'ريال برازيلي', SGD: 'دولار سنغافوري', PHP: 'بيزو فلبيني', VND: 'دونغ فيتنامي', CNY: 'يوان صيني', HKD: 'دولار هونغ كونغ', KRW: 'وون كوري', BDT: 'تاكا بنغلاديشي', NPR: 'روبية نيبالية', SCR: 'روبية سيشلية', MUR: 'روبية موريشيوسية', ZAR: 'راند جنوب أفريقي', AUD: 'دولار أسترالي', NZD: 'دولار نيوزيلندي' };
const TOP_CURS = ['USD', 'EUR', 'GBP', 'TRY', 'AED', 'SAR', 'THB', 'MYR', 'GEL', 'INR', 'EGP', 'CHF'];
function normAr(t) {
  return (t || '').toLowerCase().replace(/[\u064B-\u0652\u0640]/g, '').replace(/[أإآ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي').replace(/[^a-z0-9\u0621-\u064A]+/g, ' ').trim();
}
let IS_RTL = true;
// زر التشغيل: بالعربي التفعيل يسحب المؤشر لليسار
function knobX(on, d) { return (IS_RTL ? !on : !!on) ? '0px' : '-' + d + 'px'; }
if (typeof window !== 'undefined') window.knobX = knobX;
function makeTripCode() {
  const A = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  let c = '';
  const r = new Uint8Array(8);
  try { crypto.getRandomValues(r); } catch (e) { for (let i = 0; i < 8; i++) r[i] = Math.floor(Math.random() * 256); }
  for (let i = 0; i < 8; i++) c += A[r[i] % A.length];
  return c;
}
function detectCountry(text) {
  const t = ' ' + normAr(text) + ' ';
  if (!t.trim()) return null;
  let best = null, bestLen = 0;
  for (let i = 0; i < COUNTRIES.length; i++) {
    const c = COUNTRIES[i];
    const all = [normAr(c.ar)].concat(c.keys);
    for (let j = 0; j < all.length; j++) {
      const k = normAr(all[j]);
      if (!k || k.length <= bestLen) continue;
      const pre = /^[a-z]/.test(k) ? [' '] : [' ', ' و', ' ب', ' ل', ' لل', ' وال', ' بال'];
      let hit = false;
      for (let q = 0; q < pre.length && !hit; q++) {
        const kk = pre[q] === ' لل' && k.indexOf('ال') === 0 ? k.slice(2) : k;
        if (t.indexOf(pre[q] + kk + ' ') !== -1) hit = true;
      }
      if (hit) { best = c; bestLen = k.length; }
    }
  }
  return best;
}
function countryByCode(code) { return COUNTRIES.find((c) => c.code === code) || null; }
function rateStr(r) { return String(Number(r.toPrecision(3))); }

const BANKS = [
  { id: 'bm', ar: 'بنك مسقط', short: 'مسقط', initial: 'م', color: '#1E4A73', bg: '#E1EAF3' },
  { id: 'nbo', ar: 'البنك الوطني العُماني', short: 'الوطني', initial: 'و', color: '#8A2E3B', bg: '#F5E3E5' },
  { id: 'bd', ar: 'بنك ظفار', short: 'ظفار', initial: 'ظ', color: 'var(--accent)', bg: 'var(--soft)' },
  { id: 'si', ar: 'صحار الدولي', short: 'صحار', initial: 'ص', color: '#5B3E85', bg: '#ECE5F4' },
  { id: 'oab', ar: 'البنك العربي العُماني', short: 'العربي', initial: 'ع', color: '#7A5414', bg: '#F4EBD9' },
  { id: 'ahli', ar: 'البنك الأهلي', short: 'الأهلي', initial: 'أ', color: '#245B70', bg: '#DFEEF3' },
  { id: 'nizwa', ar: 'بنك نزوى', short: 'نزوى', initial: 'ن', color: '#4A5A1E', bg: '#ECF0DC' },
  { id: 'hsbc', ar: 'HSBC عُمان', short: 'HSBC', initial: 'H', color: '#9C2F3D', bg: '#F6E1E3' },
  { id: 'other', ar: 'بنك آخر', short: 'آخر', initial: '؟', color: '#4F5B56', bg: '#E8ECEA' }
];
function bankOf(id) {
  const b = BANKS.find((x) => x.id === id);
  if (b) return b;
  const name = String(id || '').trim() || 'حساب';
  const short = name.replace(/^(بنك|البنك|bank)\s+/i, '') || name;
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  const pal = PALETTE[h % PALETTE.length];
  return { id: name, ar: name, short, initial: short.charAt(0).toUpperCase(), color: pal.color, bg: pal.bg };
}
function dueAt(y, m, day) { const dim = new Date(y, m + 1, 0).getDate(); return new Date(y, m, Math.min(day, dim), 9, 0, 0).getTime(); }
function nextDueAfter(ts, day) { const d = new Date(ts); return dueAt(d.getFullYear(), d.getMonth() + 1, day); }
function firstDue(iso) {
  const p = String(iso || '').split('-').map(Number);
  if (p.length !== 3 || !p[0]) return null;
  const day = p[2];
  let ts = dueAt(p[0], p[1] - 1, day);
  const today = new Date(); today.setHours(0, 0, 0, 0);
  while (ts < today.getTime()) ts = nextDueAfter(ts, day);
  return { day, ts };
}
function normName(n) { return String(n || '').toLowerCase().replace(/[\u064B-\u0652]/g, '').replace(/[أإآ]/g, 'ا').replace(/ة/g, 'ه').replace(/[^a-z0-9\u0621-\u064A]+/g, ''); }
function subNameHit(a, b) { const x = normName(a), y = normName(String(b || '').split(' · ')[0]); if (x.length < 3 || y.length < 3) return x === y && !!x; return x.indexOf(y) !== -1 || y.indexOf(x) !== -1; }
function subTxHit(sub, t) { return !t.trip && (t.subId === sub.id || subNameHit(sub.name, t.merchant)); }
function addPeriod(ts, p) { const d = new Date(ts); if (p === 'y') d.setFullYear(d.getFullYear() + 1); else { const day = d.getDate(); d.setMonth(d.getMonth() + 1, 1); d.setDate(Math.min(day, new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate())); } return d.getTime(); }
function heldOf(a) { return (a && a.held || []).reduce((s, h) => s + (Number(h.amount) || 0), 0); }
function availOf(a) { return a.type === 'card' ? a.balance : Math.round((a.balance - heldOf(a)) * 1000) / 1000; }
function accLabel(a) { return a.type === 'cash' ? 'محفظة النقد' : (a.name || bankOf(a.bank).ar) + (a.last4 ? ' •••• ' + a.last4 : ''); }
function instNm(n) { n = String(n || ''); return /^قسط/.test(n) ? n : 'قسط ' + n; }
function dueLabel(ts) { const d = new Date(ts); return d.getDate() + ' ' + AR_M[d.getMonth()]; }
function isoOf(ts) { const d = new Date(ts); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
function monthsAr(n) { return n === 1 ? 'شهر واحد' : (n === 2 ? 'شهرين' : (n <= 10 ? n + ' أشهر' : n + ' شهر')); }
const SRC = { sms: 'رسالة البنك', manual: 'يدوي', receipt: 'فاتورة' };

const SAMPLES = [
  { label: 'شراء بالبطاقة', text: 'تم خصم 4.250 OMR من حسابك رقم 1234XXXXXXXX4821 بإستخدام بطاقة الخصم المباشر في 501122-TALABAT بتاريخ 2026/10/22 13:05:10. رصيدك الحالي هو 312.400 OMR.' },
  { label: 'مخالفة مرور', text: 'تم خصم 15.000 OMR من حسابك رقم 1234XXXXXXXX4821 بإستخدام بطاقة الخصم المباشر في ETRAFFIC OM OM بتاريخ 20261022. رصيدك الحالي هو 297.400 OMR.' },
  { label: 'تحويل mBanking', text: 'تم خصم 50.000 OMR من حسابك رقم 1234XXXXXXXX4821 بتاريخ 2026/10/22 10:20:00 عن طريق mBanking. رصيدك الحالي في الحساب هو 247.400 OMR.' },
  { label: 'منصة دفع', text: 'تم خصم 35.000 OMR من حسابك رقم 1234XXXXXXXX4821 بإستخدام بطاقة الخصم المباشر في Khedmah 24000000 OM بتاريخ 20261022. رصيدك الحالي هو 212.400 OMR.' },
  { label: 'من خارج عُمان', text: 'تم خصم 9.800 OMR من حسابك رقم 1234XXXXXXXX4821 بإستخدام بطاقة الخصم المباشر في STARBUCKS KADIKOY IST TR بتاريخ 20261022. رصيدك الحالي هو 202.600 OMR.' },
  { label: 'إيداع في حساب ثاني', text: 'تم إيداع 50.000 OMR في حسابك رقم 5678XXXXXXXX9930 بتاريخ 2026/10/22 10:20:30. رصيدك الحالي هو 180.000 OMR.' },
  { label: 'شراء (إنجليزي)', text: 'Your SAVING A/C 90011#######27 has been debited OMR 1.200 on 21/10/2026 19:40:11 for CITY MART TRADI\\MUSCAT\\      0. Your available balance is OMR 640.150' },
  { label: 'سحب من الصراف', text: 'تم سحب 20.000 OMR نقداً من حسابك رقم 1234XXXXXXXX4821 من جهاز الصراف ATM AL KHUWAIR بتاريخ 2026/10/22 18:00:00. رصيدك الحالي هو 192.400 OMR.' },
  { label: 'مرتجع', text: 'تم إيداع 4.250 OMR في حسابك رقم 1234XXXXXXXX4821 استرداد من TALABAT بتاريخ 2026/10/23. رصيدك الحالي هو 196.650 OMR.' },
  { label: 'اشتراك (إنجليزي)', text: 'Your SAVING A/C 90011#######27 has been debited OMR 3.500 on 20/10/2026 09:00:00 for NETFLIX.COM\\AMSTERDAM\\      0. Your available balance is OMR 636.650' },
  { label: 'هايبرماركت', text: 'تم خصم 10.680 OMR من حسابك رقم 1234XXXXXXXX4821 بإستخدام بطاقة الخصم المباشر في HYPER CITY OM بتاريخ 20261022. رصيدك الحالي هو 186.920 OMR.' },
  { label: 'نزول الراتب (إنجليزي)', text: 'Your salary has been credited to your SAVING A/C 90011#######27 with OMR 900.000 on 22/10/2026. Your available balance is OMR 1,540.150' }
];

function toPending(p, id) {
  const base = { id, amount: p.amount, merchant: p.merchant, catId: p.catId, note: p.note, dateShort: p.dateShort, last4: p.last4, balance: p.balance, bank: p.bank, ts: p.ts };
  if (p.kind === 'refund') return Object.assign(base, { kind: 'refund' });
  if (p.kind === 'atm') return Object.assign(base, { kind: 'atm' });
  if (p.kind === 'credit') return Object.assign(base, { kind: p.isSalary ? 'salary' : 'credit' });
  if (p.kind === 'transfer') return Object.assign(base, { kind: 'transfer' });
  if (p.catId) return Object.assign(base, { kind: 'suggest' });
  return Object.assign(base, { kind: 'unclear' });
}
const AGENT_TOOLS_NOTE = '\n- عندك أدوات داخل التطبيق: get_snapshot و get_transactions لقراءة بيانات المستخدم بدقة بدل التخمين، و set_budget لتحديد سقف شهري لفئة، و create_goal لإنشاء هدف ادخار.\n- لا تستخدم set_budget أو create_goal إلا إذا طلب المستخدم أو وافق صراحة على خطة اقترحتها. اقترح أولاً، وبعد موافقته نفّذ وقل له إنه يقدر يغيرها من قسم الثابت.\n- ما تقدر توافق على العمليات المعلقة أو تحوّل أموال؛ هذي قرارات المستخدم.';
function cleanMd(t) {
  return String(t || '').replace(/ر\.ع/g, '⃄').replace(/\*\*(.+?)\*\*/g, '$1').replace(/^#+\s*/gm, '').replace(/^\s*[-*]\s+/gm, '• ');
}
const ADVISOR_RULES = 'أنت المستشار المالي الشخصي داخل تطبيق مصاريف اسمه "مصاريفي"، تتكلم مع المستخدم باللهجة العُمانية الخليجية، بأسلوب ودود ومباشر وعملي.\n'
  + '- اعتمد على بيانات المستخدم المرفقة فقط، ولا تخترع أرقام أو مصاريف. العملة ريال عماني (ر.ع) بثلاث خانات عشرية.\n'
  + '- أعط خطط بخطوات مرقمة قصيرة وأرقام محسوبة من بياناته.\n'
  + '- للديون والأقساط: قارن طريقة كرة الثلج (الأصغر متبقي أولاً) وطريقة الأعلى فائدة أولاً، واقترح الأنسب لبياناته، واسأله عن نسب الفائدة إذا ما كانت معروفة.\n'
  + '- للميزانية: ابدأ من دخله ومصاريفه الثابتة وأقساطه، واقترح سقف لكل فئة ومبلغ ادخار يتحول أول ما ينزل الراتب.\n'
  + '- إذا البيانات ناقصة (مثلاً الدخل مو مسجل) قل وش تحتاج بجملة وحدة.\n'
  + '- لا تتجاوز ١٥٠ كلمة إلا إذا طلب تفاصيل. نص عادي بدون ماركداون وبدون إيموجي.\n'
  + '- في قرارات الاستثمار أو القروض الكبيرة، اذكر باختصار إن الأفضل يراجع مختص مرخص.';

const SUB_RE = /netflix|shahid|spotify|\bosn\b|anghami|youtube|apple\.com|icloud|google ?one|disney|chatgpt|openai|claude\.ai|anthropic|adobe|prime video|amazon prime|\bgym\b|fitness|نادي/i;
function addParts(map, t) {
  if (t.splits && t.splits.length) {
    const sum = t.splits.reduce((a, x) => a + x.amount, 0) || 1;
    t.splits.forEach((x) => { map[x.catId] = (map[x.catId] || 0) + x.amount * (t.amount / sum); });
  } else map[t.catId] = (map[t.catId] || 0) + t.amount;
}
const RULES = [
  [SUB_RE, 'subs'],
  [/talabat|deliveroo|careem ?food|mcdonald|kfc|burger|pizza|cafe|coffee|starbucks|restaurant|مطعم|كافيه/i, 'food'],
  [/lulu|carrefour|hyper|nesto|meera|safeer|market|mart\b|grocery|بقالة|هايبر/i, 'grocery'],
  [/shell|oman ?oil|al ?maha|petrol|fuel|المها|نفط/i, 'fuel'],
  [/etraffic|\brop\b|police|مرور|شرطة|municipality|بلدية/i, 'gov'],
  [/omantel|ooredoo|vodafone|awasr|nama|electric|water|كهرباء|مياه/i, 'bills'],
  [/pharm|clinic|hospital|صيدلية|مستشفى/i, 'health'],
  [/mall|zara|amazon|noon|shein|ikea/i, 'shopping'],
  [/otaxi|taxi|careem|uber|mwasalat|parking|مواصلات/i, 'transport']
];
const AMBIG = [[/khedmah/i, 'Khedmah منصة دفع لأكثر من جهة (فواتير، رسوم، اشتراكات)، فالنوع مو واضح من الرسالة.']];

function fmt(n) { return (Math.round((n || 0) * 1000) / 1000).toLocaleString('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 3 }); }
const OM_CITIES = { SAHAM: 'صحم', MUSCAT: 'مسقط', SOHAR: 'صحار', SEEB: 'السيب', NIZWA: 'نزوى', SALALAH: 'صلالة', BAUSHER: 'بوشر', BAWSHAR: 'بوشر', MUTTRAH: 'مطرح', MATRAH: 'مطرح', IBRI: 'عبري', SUR: 'صور', BARKA: 'بركاء', KHABOURA: 'الخابورة', RUSTAQ: 'الرستاق', IBRA: 'إبراء', BAHLA: 'بهلاء', SHINAS: 'شناص', LIWA: 'لوى', SUWAIQ: 'السويق', BURAIMI: 'البريمي', AMERAT: 'العامرات', QURAYYAT: 'قريات', KHASAB: 'خصب', DUQM: 'الدقم', ADAM: 'أدم', IZKI: 'إزكي', SAMAIL: 'سمائل', MUDAYBI: 'المضيبي' };
function prettyName(raw) {
  const low = raw.toLowerCase();
  if (/talabat/.test(low)) return 'Talabat';
  if (/etraffic/.test(low)) return 'شرطة عُمان · eTraffic';
  if (/khedmah/.test(low)) return 'Khedmah';
  return low.replace(/(^|\s)([a-z])/g, (m, s, c) => s + c.toUpperCase()).replace(/\bTrad[a-z]{0,3}$/, 'Trading').replace(/\bEst$/, 'Est.');
}
function todayLabels() {
  const d = new Date();
  return { dateLabel: d.getDate() + ' ' + AR_M[d.getMonth()] + ' ' + d.getFullYear(), dateShort: d.getDate() + ' ' + AR_M[d.getMonth()] };
}
// يتعرف على البنك من صيغة الرسالة؛ في التطبيق الفعلي يكون من اسم مرسل الرسالة (Sender ID)
function detectBank(s, accRaw) {
  if (/sohar|صحار الدولي/i.test(s)) return 'si';
  if (/bank ?muscat|بنك مسقط/i.test(s)) return 'bm';
  if (/\bnbo\b|national bank of oman|البنك الوطني/i.test(s)) return 'nbo';
  if (/dhofar|بنك ظفار/i.test(s)) return 'bd';
  if (/nizwa|بنك نزوى/i.test(s)) return 'nizwa';
  if (/ahli ?bank|البنك الأهلي/i.test(s)) return 'ahli';
  if (/oman arab|البنك العربي/i.test(s)) return 'oab';
  if (/hsbc/i.test(s)) return 'hsbc';
  return null;
}
function accMatch(a, tail) { return !!tail && tail.length >= 2 && String(a.last4).slice(-tail.length) === tail; }
function accDigitsOf(text) {
  const s = (text || '').replace(/\s+/g, ' ');
  const re = [/(?:حسابك|حسابكم|الحساب|حساب)\s*(?:رقم)?\s*[:#]?\s*([0-9Xx#*•]*\d[0-9Xx#*•]*)(?![.,]\d)/gi, /(?:A\/C|account|acct)(?:\s*(?:no\.?|number|ending(?:\s+(?:with|in))?))?\s*[:#]?\s*([0-9Xx#*•]*\d[0-9Xx#*•]*)(?![.,]\d)/gi];
  let m = null;
  for (let i = 0; i < re.length && !m; i++) { let r; re[i].lastIndex = 0; while (!m && (r = re[i].exec(s))) { if (r[1].replace(/\D/g, '').length >= 2 && r[1].length >= 4) m = r; } }
  if (!m) return null;
  const raw = m[1].replace(/[x•]/g, 'X');
  const ad = { raw, head: (raw.match(/^(\d+)/) || ['', ''])[1], tail: (raw.match(/(\d+)$/) || ['', ''])[1] };
  return ad.head || ad.tail ? ad : null;
}
// رسالة بنك فعلية: فيها رقم حساب أو بطاقة (الفواتير وتنبيهات الشركات ما فيها)
function hasAccOrCard(text) {
  if (accDigitsOf(text)) return true;
  const re = /(?:بطاقتك|بطاقتكم|البطاقة|بطاقة|card)(?:\s*(?:رقم|no\.?|number|ending(?:\s+(?:with|in))?))?\s*[:#]?\s*([0-9Xx#*•]*\d[0-9Xx#*•]*)(?![.,]\d)/gi;
  const s = (text || '').replace(/\s+/g, ' ');
  let r;
  while ((r = re.exec(s))) { if (r[1].length >= 4 && r[1].replace(/\D/g, '').length >= 2) return true; }
  return false;
}
// كل المفاتيح الممكنة لرقم الحساب (أول ٤ وآخر ٤)
function accKeysOf(ad) {
  if (!ad) return [];
  const k = [];
  if (ad.tail.length >= 4) k.push(ad.tail.slice(-4));
  if (ad.head.length >= 4) k.push(ad.head.slice(0, 4));
  return k.filter((v, i, a) => a.indexOf(v) === i);
}
function ignoredHit(list, ad) {
  return (list || []).some((g) => accHit(g.digits, ad) || (g.alts || []).some((d) => accHit(d, ad)));
}
// يطابق ٤ أرقام الحساب مع بداية أو نهاية الرقم في الرسالة
function accHit(d, ad) {
  d = String(d || '');
  if (!ad || d.length < 2) return false;
  if (ad.tail.length >= 4 && ad.tail.slice(-4) === d) return true;
  if (ad.head.length >= 4 && ad.head.slice(0, 4) === d) return true;
  if (ad.tail.length >= 2 && ad.tail.length < 4 && d.slice(-ad.tail.length) === ad.tail) return true;
  return false;
}
function parseSms(text, learned, accounts) {
  const p = parseSmsCore(text, learned);
  if (!p || !p.ok) return p;
  const ad = accDigitsOf(text);
  p.accDigits = ad;
  if (ad) {
    const a = (accounts || []).find((x) => x.type !== 'cash' && accHit(x.last4, ad));
    p.newKey = ad.tail.length >= 4 ? ad.tail.slice(-4) : (ad.head.length >= 4 ? ad.head.slice(0, 4) : (p.last4 || ad.tail || ad.head));
    if (a) p.last4 = a.last4; else if (p.newKey) p.last4 = p.newKey;
  }
  return p;
}
function parseSmsCore(text, learned) {
  const s = (text || '').replace(/\s+/g, ' ').trim();
  if (!s) return null;
  const debit = /خصم|سحب|debited|debit card|purchase|spent|withdrawn/i.test(s);
  const atm = /ATM|صراف|cash withdrawal|سحب نقد/i.test(s);
  const refund = /استرداد|مرتجع|refund|reversal|reversed/i.test(s);
  const credit = /إيداع|ايداع|إضافة|اضافة|استلام|credited|deposited|received/i.test(s);
  const am = s.match(/(?:(OMR|USD|EUR|AED|TRY|GBP|THB|SAR)\s*([\d,]+(?:\.\d+)?))|(?:([\d,]+(?:\.\d+)?)\s*(OMR|USD|EUR|AED|TRY|GBP|THB|SAR))/);
  if (!am || (!debit && !credit)) return { ok: false };
  const amount = parseFloat((am[2] || am[3]).replace(/,/g, ''));
  const cur = am[1] || am[4];
  const acc = s.match(/حسابك رقم\s*([0-9X#*]+)/i) || s.match(/(?:A\/C|account)(?:\s*(?:no\.?|number))?\s*[:#]?\s*([0-9X#*]{4,})/i);
  const tail = acc ? ((acc[1].match(/(\d+)$/) || ['', ''])[1]) : '';
  const last4 = tail.slice(-4);
  const card = /بطاقة الخصم|debit card|card ending/i.test(s);
  const mb = /mbanking|mobile banking|internet banking/i.test(s);
  const isCreditOnly = credit && !debit;
  let mm = s.match(/في\s+(.+?)\s+بتاريخ/);
  if (!mm) mm = s.match(/\bat\s+(.+?)\s+on\s+\d/i);
  if (!mm) mm = s.match(/\bfor\s+(.+?)\.\s*(?:Your|Available|Avl|$)/i);
  let merchantRaw = (mm && !isCreditOnly) ? mm[1] : '';
  let city = '';
  if (/\\/.test(merchantRaw)) {
    const parts = merchantRaw.split(/\\+/).map((x) => x.trim()).filter((x) => x && !/^\d+$/.test(x));
    merchantRaw = parts[0] || '';
    city = parts[1] || '';
  }
  let country = 'OM';
  const toks = merchantRaw.replace(/^\d+\s*-\s*/, '').replace(/\b\d{5,}\b/g, ' ').trim().split(/\s+/).filter(Boolean);
  while (toks.length > 1 && /^[A-Z]{2}$/.test(toks[toks.length - 1])) { country = toks.pop(); }
  const clean = toks.join(' ');
  let dateLabel = '', dateShort = '';
  const dm = s.match(/بتاريخ\s*(\d{4})\/?(\d{2})\/?(\d{2})(?:\s*(\d{2}):(\d{2}))?/);
  const de = dm ? null : s.match(/\b(\d{1,2})[\/\-.](\d{1,2})[\/\-.](\d{4})\b(?:\s*(\d{2}):(\d{2}))?/);
  let Y, M, D, H, Mi;
  if (dm) { Y = dm[1]; M = dm[2]; D = dm[3]; H = dm[4]; Mi = dm[5]; }
  else if (de) { Y = de[3]; M = de[2]; D = de[1]; H = de[4]; Mi = de[5]; }
  if (Y) {
    const mo = AR_M[parseInt(M, 10) - 1] || '';
    dateShort = parseInt(D, 10) + ' ' + mo;
    dateLabel = dateShort + ' ' + Y + (H ? ' · ' + H + ':' + Mi : '');
  }
  const bm = s.match(/رصيدك الحالي(?: في الحساب)? هو\s*([\d,]+(?:\.\d+)?)/) || s.match(/balance(?:\s+is)?\s*(?:OMR\s*)?([\d,]+(?:\.\d+)?)/i);
  const balance = bm ? parseFloat(bm[1].replace(/,/g, '')) : null;
  const cityAr = city ? (OM_CITIES[city.toUpperCase()] || prettyName(city)) : '';
  const rm = refund ? (s.match(/(?:استرداد|مرتجع) من\s+(.+?)\s+بتاريخ/) || s.match(/refund(?:ed)?\s+(?:from|by)\s+(.+?)\s+on\s/i)) : null;
  const merchant = refund ? (rm ? prettyName(rm[1].trim()) : 'مرتجع') : (atm && !isCreditOnly) ? 'سحب من الصراف' : isCreditOnly ? 'إيداع' : (clean ? prettyName(clean) + (cityAr ? ' · ' + cityAr : '') : (mb ? 'تحويل mBanking' : 'غير محدد'));
  let kind = 'purchase', catId = null, note = '', fromLearned = false;
  if (refund) { kind = 'refund'; }
  else if (isCreditOnly) { kind = 'credit'; }
  else if (atm) { kind = 'atm'; }
  else if (!clean && mb) { kind = 'transfer'; note = 'تحويل من حسابك بدون اسم مستفيد واضح.'; }
  else {
    const key = merchant.split(' · ')[0].toLowerCase();
    if (learned && learned[key]) { catId = learned[key]; fromLearned = true; }
    else {
      for (let i = 0; i < RULES.length; i++) { if (RULES[i][0].test(clean)) { catId = RULES[i][1]; break; } }
      for (let i = 0; i < AMBIG.length; i++) { if (AMBIG[i][0].test(clean)) { catId = null; note = AMBIG[i][1]; } }
      if (!catId) { kind = 'unclear'; if (!note) note = 'ما عرفت نوع هذا المتجر، حدده مرة وأتذكره بعدين.'; }
    }
  }
  return { ok: true, amount, cur, last4, method: card ? 'بطاقة الخصم المباشر' : (mb ? 'تطبيق mBanking' : (isCreditOnly ? 'إيداع' : '—')), merchant, dateLabel, dateShort, balance, kind, catId, note, foreign: country !== 'OM' || cur !== 'OMR', country, fromLearned, isSalary: /راتب|salary/i.test(s), accSavings: /saving/i.test(s), bank: detectBank(s, acc ? acc[1] : ''), ts: Y ? new Date(+Y, +M - 1, +D, H ? +H : 12, Mi ? +Mi : 0).getTime() : Date.now() };
}

const RECEIPT = {
  store: 'Hypermarket',
  date: '22 أكتوبر 2026 · 19:40',
  items: [['حليب طازج 2 لتر', 1.150], ['خبز عربي', 0.300], ['أرز بسمتي 5 كغ', 3.900], ['دجاج مجمد', 2.450], ['خضار وفواكه', 2.880]],
  total: 10.680
};

const T = {
  ar: {
    navHome: 'الرئيسية', navStats: 'الإحصاءات', navTravel: 'السفر', navFixed: 'الحسابات',
    hello: 'أهلاً', spentSoFar: 'صرفت حتى الآن', incomeL: 'الدخل', remainingL: 'المتبقي', fixedPartL: 'منها أقساط',
    balances: 'أرصدتك', pending: 'بانتظار موافقتك', recent: 'آخر العمليات',
    addTitle: 'إضافة مصروف', tabSms: 'رسالة البنك', tabManual: 'يدوي', tabReceipt: 'صوّر الفاتورة',
    stats: 'الإحصاءات', travel: 'السفر', fixedTitle: 'الحسابات', advisor: 'مستشارك المالي', settings: 'الإعدادات',
    readingPrefix: 'يقرأ رسائل ', noAccountsLinked: 'ما فيه حسابات مربوطة',
    emptyHomeT: 'ما وصلت رسائل بنك بعد', emptyHomeB: 'أول ما يوصلك خصم أو إيداع، بيطلع هنا ينتظر موافقتك.', tryDemo: 'جرّب برسالة تجريبية',
    signedIn: 'مسجّل', profilePage: 'الملف الشخصي', editProfile: 'تعديل الاسم والإيميل', guestHint: 'سجّل اسمك عشان يبين لربعك لما تشاركون رحلة. وبياناتك كلها تبقى على جوالك.', signOut: 'تسجيل الخروج', signOutSub: 'يمسح بيانات هالحساب ومصاريفه من الجوال، ويصير ضيف', signOutT: 'تسجّل خروج؟', signOutB: 'بتنمسح كل العمليات والحسابات والإعدادات المرتبطة بهالحساب من الجوال، ويرجع التطبيق ضيف. إذا تبي ترجعها بعدين، سوّ نسخة احتياطية قبل.', signOutBtn: 'أيوه، سجّل خروج', signedOut: 'سجّلت خروج، وانمسحت بيانات الحساب من الجوال', help: 'مساعدة', language: 'اللغة', categories: 'الفئات', catName: 'اسم الفئة', color: 'اللون', icon: 'الأيقونة',
    save: 'حفظ', delete: 'حذف', cancel: 'إلغاء', addCategory: 'أضف فئة', editCategory: 'تعديل الفئة', newCategory: 'فئة جديدة', edit: 'تعديل',
    notifications: 'الإشعارات', notifSms: 'رسائل البنك', notifSmsSub: 'إشعار بكل عملية تنتظر موافقتك',
    notifAdvisor: 'تنبيهات المستشار', notifAdvisorSub: 'لما يلاحظ شي يضر ميزانيتك', notifInst: 'مواعيد الأقساط', notifInstSub: 'تذكير لتأكيد خصم القسط',
    security: 'الحماية', pinLock: 'قفل برمز PIN', pinLockSub: 'رمز من ٤ أرقام عند فتح التطبيق', biometric: 'البصمة', biometricSub: 'افتح التطبيق ببصمتك',
    biometricNeedPin: 'فعّل الرمز أولاً', tryLock: 'جرّب القفل الحين',
    backup: 'النسخ الاحتياطي', driveSub: 'آخر نسخة: ', never: 'ما فيه نسخة بعد', backupNow: 'انسخ الحين', backingUp: 'جاري النسخ…', restore: 'استعادة',
    autoBackup: 'نسخ تلقائي يومي', autoBackupSub: 'إلى Google Drive كل ليلة', localBackup: 'ملف على الجهاز', exportFile: 'تصدير لملف', restoreFile: 'استعادة من ملف',
    sharing: 'مشاركة البيانات', sharingSub: 'شارك بياناتك مع شخص مسجّل في التطبيق بإيميله', shareEmailPh: 'إيميل الشخص', roleView: 'مشاهدة فقط', roleEdit: 'مشاهدة وتعديل', invite: 'أرسل الدعوة',
    data: 'البيانات', replayTour: 'عرض الجولة التعريفية', deleteAll: 'حذف جميع البيانات', deleteAllSub: 'تبدأ من جديد، وما تقدر ترجعها إلا من نسخة احتياطية',
    about: 'عن التطبيق', version: 'الإصدار', developer: 'المبرمج', devName: 'يوسف البلوشي', contact: 'للتواصل', rights: 'جميع الحقوق محفوظة', appName: 'مصاريفي', build: 'بناء', appDesc: 'تطبيق ذكي يتابع مصاريفك من رسائل البنك، ويساعدك ترتب ميزانيتك وتدخر، بمساعدة مستشار مالي بالذكاء الاصطناعي.', whatsNew: 'ما الجديد في هذا الإصدار', privacy: 'سياسة الخصوصية', terms: 'شروط الاستخدام', licenses: 'تراخيص المصادر المفتوحة', rateApp: 'قيّم التطبيق', shareApp: 'شارك التطبيق مع أصدقائك', soonLink: 'بيتوفر هذا الرابط مع نشر التطبيق',
    tourWelcomeT: 'جولة سريعة', tourWelcomeB: 'خلني أوريك أهم الأشياء في التطبيق، ما تاخذ أكثر من دقيقة.',
    tourBellT: 'الإشعارات والموافقات', tourBellB: 'كل رسالة بنك توصلك تنتظر موافقتك هنا، وتقدر توافق من إشعار الجوال مباشرة.',
    tourFabT: 'إضافة مصروف', tourFabB: 'سجّل مصروف يدوي، أو صوّر الفاتورة وأقرأ تفاصيلها لك.',
    tourAdvT: 'مستشارك المالي', tourAdvB: 'اسأله عن ميزانيتك وديونك، وينبهك من نفسه لما يلاحظ شي يضر ميزانيتك.',
    tourStatsT: 'الإحصاءات', tourStatsB: 'وين تروح فلوسك، ونصائح عملية للادخار.',
    tourTravelT: 'السفر', tourTravelB: 'مصاريف رحلاتك منفصلة عن مصاريفك المعتادة، وتقدر تشارك الرحلة مع غيرك.',
    tourFixedT: 'الحسابات', tourFixedB: 'حساباتك وأرصدتك، وأقساطك واشتراكاتك وميزانيات المواسم.',
    tourGearT: 'الإعدادات', tourGearB: 'اللغة والفئات والنسخ الاحتياطي. ومن بطاقة اسمك فوق تفتح ملفك الشخصي: المظهر والقفل والبيانات.',
    skip: 'تخطي', next: 'التالي', done: 'يلا نبدأ',
    enterPin: 'أدخل رمز الدخول', setPin: 'اختر رمز من ٤ أرقام', confirmPin: 'أكّد الرمز', pinMismatch: 'الرمزين مو متطابقين، جرّب مرة ثانية', wrongPin: 'الرمز غلط',
    useBio: 'استخدم البصمة', bioScanning: 'ضع إصبعك على الحساس…', pinSaved: 'انحفظ الرمز، التطبيق صار محمي', pinOff: 'ألغيت الرمز والبصمة',
    deleteConfirmT: 'حذف جميع البيانات؟', deleteConfirmB: 'بينحذف كل شي: الحسابات، والعمليات، والإعدادات. اكتب كلمة "حذف" للتأكيد.', deleteWord: 'حذف', deleteBtn: 'احذف كل شي',
    restoreDriveT: 'استعادة من Google Drive؟', restoreDriveB: 'بتستبدل بياناتك الحالية بآخر نسخة احتياطية.',
    shareTrip: 'مشاركة الرحلة', shareTripB: 'أرسل هالرمز لربعك. يفتحون صفحة السفر في مصاريفي ويكتبونه في "انضم لرحلة"، وبعدها كل واحد يضيف مصاريفه وتشوفون المجموع مع بعض. وباقي بياناتك ما تنشارك.', tripCodeL: 'رمز الرحلة', shareCode: 'شارك الرمز', copyCode: 'انسخ', codeCopied: 'انسخ الرمز', stopShare: 'وقف مشاركة الرحلة', joinT: 'انضم لرحلة', joinSub: 'إذا أحد شارك معك رحلة، اكتب الرمز اللي أرسله', joinPh: 'الرمز', join: 'انضم', shareTripB_old: 'اللي تضيفهم يشوفون مصاريف الرحلة ويقدرون يضيفون مصاريفهم فيها.', add: 'أضف', close: 'إغلاق', tripMembers: 'مشتركين في الرحلة',
    profileT: 'حسابك', guest: 'أكمّل كضيف، بدون حساب', signUp: 'سجّل اسمك', signUpT: 'ملفك الشخصي', signUpB: 'اسمك يبين لربعك لما تشاركون رحلة. وبياناتك كلها تبقى على جوالك.', later: 'بعدين', guestName: 'ضيف', guestSub: 'ما سجّلت اسمك للحين', bankName: 'اسم البنك', bankPh: 'مثلاً: بنك مسقط', permsT: 'صلاحيات التطبيق', permsB: 'عشان أشتغل صح أحتاج إذنك في شيئين. ولو رفضت، التطبيق يشتغل عادي، بس بتسجّل أشياء بيدك.', permSms: 'قراءة رسائل البنك', permSmsWhy: 'أقرأ رسائل البنوك بس، عشان أجهّز مصاريفك بدون ما تكتب شي. وما أقرأ رسائلك الشخصية.', permNotif: 'الإشعارات', permNotifWhy: 'عشان توافق على العمليات من الإشعار مباشرة، وأنبهك إذا صار شي يهم ميزانيتك.', allow: 'اسمح', notNow: 'رفض', permBackAllow: 'خلاص، اسمح', permDenyAnyway: 'كمّل بدونها', permsPick: 'حدد اسمح أو رفض لكل صلاحية عشان تكمل', warnSms: 'إذا رفضت، التطبيق ما بيقرأ رسائل البنك، وبتضيف مصاريفك بيدك أو تلصق الرسالة. تكمل بدونها؟', warnNotif: 'إذا رفضت، ما بتوصلك إشعارات الموافقة على العمليات، ولا تنبيهات الميزانية والأقساط. تكمل بدونها؟', change: 'تغيير', granted: 'مسموح', denied: 'مرفوض، تقدر تغيّره من الإعدادات', permsNote: 'الكاميرا أطلبها بس لما تصوّر فاتورة. وأي صلاحية تقدر تغيّرها بعدين من الإعدادات.', permissions: 'الصلاحيات', appearance: 'المظهر', appColor: 'لون التطبيق', mode: 'الوضع', modeLight: 'فاتح', modeDark: 'داكن', modeSystem: 'حسب الجوال', readingOff: 'قراءة الرسائل مقفلة', profileB: 'اسمك يبين لربعك لما تشاركون رحلة، وبياناتك كلها تبقى على جوالك.', nameL: 'اسمك', emailL: 'الإيميل', continueL: 'متابعة', googleSignIn: 'متابعة بحساب Google'
  },
  en: {
    navHome: 'Home', navStats: 'Stats', navTravel: 'Travel', navFixed: 'Accounts',
    hello: 'Hello', spentSoFar: 'Spent so far', incomeL: 'Income', remainingL: 'Left', fixedPartL: 'Installments',
    balances: 'Your balances', pending: 'Waiting for approval', recent: 'Recent',
    addTitle: 'Add expense', tabSms: 'Bank SMS', tabManual: 'Manual', tabReceipt: 'Scan receipt',
    stats: 'Statistics', travel: 'Travel', fixedTitle: 'Income & fixed', advisor: 'Your financial advisor', settings: 'Settings',
    readingPrefix: 'Reading SMS · ', noAccountsLinked: 'No accounts linked',
    emptyHomeT: 'No bank messages yet', emptyHomeB: 'When a debit or credit SMS arrives, it waits here for your approval.', tryDemo: 'Try a sample message',
    signedIn: 'Signed in', profilePage: 'Profile', editProfile: 'Edit name and email', guestHint: 'Add your name so friends see it when you share a trip. All your data stays on your phone.', signOut: 'Sign out', signOutSub: 'Erases this account\'s data and expenses from the phone and switches to guest', signOutT: 'Sign out?', signOutB: 'All transactions, accounts and settings tied to this account will be erased from this phone, and the app goes back to guest. Make a backup first if you want them later.', signOutBtn: 'Yes, sign out', signedOut: 'Signed out. The account data was erased from this phone', help: 'Help', language: 'Language', categories: 'Categories', catName: 'Category name', color: 'Color', icon: 'Icon',
    save: 'Save', delete: 'Delete', cancel: 'Cancel', addCategory: 'Add category', editCategory: 'Edit category', newCategory: 'New category', edit: 'Edit',
    notifications: 'Notifications', notifSms: 'Bank messages', notifSmsSub: 'A notification for every transaction awaiting approval',
    notifAdvisor: 'Advisor alerts', notifAdvisorSub: 'When it spots something that hurts your budget', notifInst: 'Installment dates', notifInstSub: 'Reminder to confirm installment debits',
    security: 'Security', pinLock: 'PIN lock', pinLockSub: 'A 4-digit code when opening the app', biometric: 'Fingerprint', biometricSub: 'Unlock with your fingerprint',
    biometricNeedPin: 'Set a PIN first', tryLock: 'Try the lock now',
    backup: 'Backup', driveSub: 'Last backup: ', never: 'No backup yet', backupNow: 'Back up now', backingUp: 'Backing up…', restore: 'Restore',
    autoBackup: 'Daily auto backup', autoBackupSub: 'To Google Drive every night', localBackup: 'File on this device', exportFile: 'Export to file', restoreFile: 'Restore from file',
    sharing: 'Data sharing', sharingSub: 'Share your data with someone signed up in the app, by email', shareEmailPh: 'Their email', roleView: 'View only', roleEdit: 'View & edit', invite: 'Send invite',
    data: 'Data', replayTour: 'Show the intro tour', deleteAll: 'Delete all data', deleteAllSub: 'Start over. Only a backup can bring it back',
    about: 'About', version: 'Version', developer: 'Developer', devName: 'Yousef Al Balushi', contact: 'Contact', rights: 'All rights reserved', appName: 'Masarifi', build: 'Build', appDesc: 'A smart app that tracks your spending from bank SMS and helps you budget and save, with an AI financial advisor.', whatsNew: "What's new in this version", privacy: 'Privacy policy', terms: 'Terms of use', licenses: 'Open-source licenses', rateApp: 'Rate the app', shareApp: 'Share the app with friends', soonLink: 'This link will be available when the app is published',
    tourWelcomeT: 'Quick tour', tourWelcomeB: 'Let me show you the essentials. It takes less than a minute.',
    tourBellT: 'Notifications & approvals', tourBellB: 'Every bank SMS waits here for your approval. You can approve straight from the phone notification.',
    tourFabT: 'Add an expense', tourFabB: 'Log an expense manually, or snap a receipt and I read it for you.',
    tourAdvT: 'Your financial advisor', tourAdvB: 'Ask about your budget and debts. It also alerts you when it spots a problem.',
    tourStatsT: 'Statistics', tourStatsB: 'Where your money goes, with practical saving tips.',
    tourTravelT: 'Travel', tourTravelB: 'Trip expenses stay separate from your usual spending, and you can share a trip.',
    tourFixedT: 'Income & fixed', tourFixedB: 'Your income, fixed costs, installments and bank accounts.',
    tourGearT: 'Settings', tourGearB: 'Language, categories and backups. Tap your name card to open your profile: appearance, lock and data.',
    skip: 'Skip', next: 'Next', done: "Let's go",
    enterPin: 'Enter your PIN', setPin: 'Choose a 4-digit PIN', confirmPin: 'Confirm your PIN', pinMismatch: "The PINs don't match, try again", wrongPin: 'Wrong PIN',
    useBio: 'Use fingerprint', bioScanning: 'Touch the sensor…', pinSaved: 'PIN saved, the app is now protected', pinOff: 'PIN and fingerprint turned off',
    deleteConfirmT: 'Delete all data?', deleteConfirmB: 'Everything will be deleted: accounts, transactions and settings. Type "delete" to confirm.', deleteWord: 'delete', deleteBtn: 'Delete everything',
    restoreDriveT: 'Restore from Google Drive?', restoreDriveB: 'Your current data will be replaced with the latest backup.',
    shareTrip: 'Share trip', shareTripB: 'Send this code to your friends. They open the Travel page in Masarifi and enter it under "Join a trip". Then everyone adds their own expenses and you see the totals together. The rest of your data is not shared.', tripCodeL: 'Trip code', shareCode: 'Share code', copyCode: 'Copy', codeCopied: 'Code copied', stopShare: 'Stop sharing this trip', joinT: 'Join a trip', joinSub: 'If someone shared a trip with you, enter the code they sent', joinPh: 'Code', join: 'Join', shareTripB_old: 'People you add can see the trip expenses and add their own.', add: 'Add', close: 'Close', tripMembers: 'Shared with',
    profileT: 'Your account', guest: 'Continue as guest', signUp: 'Add your name', signUpT: 'Your profile', signUpB: 'Your name shows to friends when you share a trip. All your data stays on your phone.', later: 'Later', guestName: 'Guest', guestSub: 'No account yet', bankName: 'Bank name', bankPh: 'e.g. Bank Muscat', permsT: 'A couple of permissions', permsB: 'I need your OK for two things. If you say no, the app still works; you just log things yourself.', permSms: 'Read bank SMS', permSmsWhy: 'I only read bank messages, so expenses get logged without typing. Personal messages stay untouched, promise.', permNotif: 'Notifications', permNotifWhy: 'Approve transactions right from the notification, and get warned when your wallet is in danger.', allow: 'Allow', notNow: 'Deny', permBackAllow: 'OK, allow', permDenyAnyway: 'Continue without', permsPick: 'Choose Allow or Deny for each permission to continue', warnSms: 'If you deny this, bank SMS will not be read, and you will add expenses by hand or paste the message. Continue without it?', warnNotif: 'If you deny this, you will not get approval notifications or budget and installment alerts. Continue without it?', change: 'Change', granted: 'Allowed', denied: 'Denied, you can change it in Settings', permsNote: 'Camera is only requested when you scan a receipt. Every permission can be changed later in Settings.', permissions: 'Permissions', appearance: 'Appearance', appColor: 'App color', mode: 'Mode', modeLight: 'Light', modeDark: 'Dark', modeSystem: 'System', readingOff: 'SMS reading is off', profileB: 'Your name shows to friends when you share a trip. All your data stays on your phone.', nameL: 'Your name', emailL: 'Email', continueL: 'Continue', googleSignIn: 'Continue with Google'
  }
};

const PALETTE = [
  { color: '#23624D', bg: '#E3F0EA', label: 'أخضر' }, { color: '#9A4523', bg: '#F6E6DC', label: 'برتقالي' },
  { color: '#34507D', bg: '#E3E9F3', label: 'أزرق' }, { color: '#4E437D', bg: '#E9E5F3', label: 'بنفسجي' },
  { color: '#6E5415', bg: '#F3ECD9', label: 'ذهبي' }, { color: '#84325A', bg: '#F4E1EA', label: 'وردي' },
  { color: '#9C2F3D', bg: '#F6E1E3', label: 'أحمر' }, { color: '#245B70', bg: '#DFEEF3', label: 'سماوي' },
  { color: '#5A4B38', bg: '#EEE8E0', label: 'بني' }, { color: '#4F5B56', bg: '#E8ECEA', label: 'رمادي' }
];
const CAT_ICONS = ['cart', 'bowl', 'fuel', 'shield', 'bolt', 'bag', 'heart', 'car', 'users', 'home', 'gift', 'book', 'phone', 'game', 'card', 'dots'];
const DATA_KEYS = ['profile', 'accounts', 'txns', 'pending', 'income', 'fixed', 'installments', 'learned', 'budgets', 'goals', 'cats', 'cycle', 'cycleStart', 'cycleStartLabel', 'cycleSalary', 'cycles', 'trip', 'lastTrip', 'shares', 'lang', 'notif', 'security', 'chat', 'perms', 'theme', 'mode', 'seasons', 'subsIgnored', 'subs', 'moves', 'reports', 'trips', 'demoIncome', 'ignoredAccs'];
const THEMES = [
  { k: 'green', label: 'أخضر', color: '#1F5E4F' }, { k: 'blue', label: 'أزرق', color: '#24497A' },
  { k: 'purple', label: 'بنفسجي', color: '#4E3F86' }, { k: 'maroon', label: 'عنابي', color: '#7A2E3B' },
  { k: 'sand', label: 'بني', color: '#7E5520' }
];

// ===== التقارير =====
const DAY_MS = 86400000;
const AR_MS = ['ينا', 'فبر', 'مار', 'أبر', 'ماي', 'يون', 'يول', 'أغس', 'سبت', 'أكت', 'نوف', 'ديس'];
const AR_WD = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
function dayStart(ts) { const d = new Date(ts); return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime(); }
function monthStart(ts) { const d = new Date(ts); return new Date(d.getFullYear(), d.getMonth(), 1).getTime(); }
function addMonths(ts, n) { const d = new Date(ts); return new Date(d.getFullYear(), d.getMonth() + n, d.getDate()).getTime(); }
function isoDay(ts) { const d = new Date(ts); const p = (n) => (n < 10 ? '0' : '') + n; return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate()); }
function parseIso(s) { const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s || ''); return m ? new Date(+m[1], +m[2] - 1, +m[3]).getTime() : null; }
function dLong(ts) { const d = new Date(ts); return d.getDate() + ' ' + AR_M[d.getMonth()]; }
function dLongY(ts) { const d = new Date(ts); return d.getDate() + ' ' + AR_M[d.getMonth()] + ' ' + d.getFullYear(); }
function monthLabel(ts) { const d = new Date(ts); return AR_M[d.getMonth()] + ' ' + d.getFullYear(); }
function mulberry(seed) { return function () { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
const DEMO_M = {
  grocery: ['هايبرماركت النور', 'سوق الخير', 'بقالة الحي'],
  food: ['مطعم الريف', 'مقهى الزاوية', 'توصيل طلبات', 'مشويات البحر'],
  fuel: ['محطة وقود الطريق', 'محطة الواحة'],
  shopping: ['متجر إلكتروني', 'مول المدينة', 'محل الملابس'],
  transport: ['تاكسي'], health: ['صيدلية الشفاء', 'عيادة الأسنان'], family: ['مصروف البيت'], gov: ['رسوم حكومية', 'مخالفة مرور']
};
function makeDemo(nowTs) {
  const R = mulberry(20261022);
  const rnd = (a, b) => Math.round((a + R() * (b - a)) * 1000) / 1000;
  const pick = (arr) => arr[Math.floor(R() * arr.length)];
  const txns = [];
  const income = [];
  let id = 900000;
  const end = dayStart(nowTs);
  const add = (ts, catId, merchant, amount) => {
    const h = 8 + Math.floor(R() * 15);
    const t = ts + h * 3600000 + Math.floor(R() * 60) * 60000;
    if (t > nowTs) return;
    const d = new Date(t);
    txns.push({ id: id++, amount, merchant, catId, ts: t, dateShort: d.getDate() + ' ' + AR_M[d.getMonth()], src: 'manual', trip: false, cycle: -1, demo: true });
  };
  for (let ts = dayStart(nowTs - 395 * DAY_MS); ts <= end; ts += DAY_MS) {
    const d = new Date(ts);
    const dom = d.getDate(), wd = d.getDay(), mo = d.getMonth();
    const wknd = wd === 4 || wd === 5 || wd === 6;
    const festive = mo === 2 || mo === 4 || mo === 11;
    if (R() < 0.36) add(ts, 'grocery', pick(DEMO_M.grocery), rnd(3, festive ? 38 : 26));
    if (R() < (wknd ? 0.72 : 0.38)) add(ts, 'food', pick(DEMO_M.food), rnd(1.5, 9));
    if (dom % 6 === 2) add(ts, 'fuel', pick(DEMO_M.fuel), rnd(8, 14));
    if (R() < (festive ? 0.26 : 0.1)) add(ts, 'shopping', pick(DEMO_M.shopping), rnd(5, festive ? 60 : 40));
    if (R() < 0.08) add(ts, 'transport', 'تاكسي', rnd(2, 6));
    if (R() < 0.04) add(ts, 'health', pick(DEMO_M.health), rnd(3, 22));
    if (R() < 0.006) add(ts, 'gov', pick(DEMO_M.gov), pick([15, 20, 50]));
    if (dom === 1) add(ts, 'fixed', 'إيجار الشقة', 220);
    if (dom === 5) add(ts, 'bills', 'الكهرباء والماء', mo >= 5 && mo <= 8 ? rnd(45, 72) : rnd(16, 32));
    if (dom === 10) add(ts, 'bills', 'الاتصالات', 12.5);
    if (dom === 15) add(ts, 'subs', 'اشتراك فيديو', 2.9);
    if (dom === 20) add(ts, 'subs', 'تخزين سحابي', 1.2);
    if (dom === 27) add(ts, 'family', 'مصروف البيت', rnd(30, 60));
    if (dom === 25 && ts + 9 * 3600000 <= nowTs) income.push({ ts: ts + 9 * 3600000, amount: 1180, name: 'راتب (تجريبي)' });
  }
  txns.sort((a, b) => b.ts - a.ts);
  return { txns, income };
}

function signLeft(v) {
  if (typeof v === 'string') return v.indexOf('\u20C4') === -1 ? v : v.replace(/([+\-−]?\d[\d,]*(?:\.\d+)?)\s?\u20C4/g, '\u20C4 $1');
  if (Array.isArray(v)) return v.map(signLeft);
  if (v && typeof v === 'object' && Object.getPrototypeOf(v) === Object.prototype) { const o = {}; Object.keys(v).forEach((k) => { o[k] = signLeft(v[k]); }); return o; }
  return v;
}
const SEASON_OFF = { health: 1, bills: 1, fuel: 1, gov: 1, subs: 1, fixed: 1, inst: 1, transport: 1 };
const APP_VERSION = '1.7.1';
const APP_BUILD = '13';

function makeInitialState() {
  const now0 = new Date();
  return {
    screen: 'onboard', obStep: 0, tab: 'sms', txns: [], pending: [], nextId: 0, learned: {},
    accounts: [], ob: { bank: '', type: 'acc', last4: '', bal: '' }, showAccForm: false,
    installments: [], ins: { name: '', total: '', monthly: '', paid: '', due: '', auto: false }, inOnce: true, inDate: '',
    smsText: '', catPick: null, showPick: false,
    mAmt: '', mName: '', mCat: null, rStage: 'idle',
    trip: null, tf: { dest: '', cur: null, budget: '', manual: false, from: '', to: '' }, tfPick: false, lastTrip: null,
    income: [], fixed: [], inName: '', inAmt: '', fxName: '', fxAmt: '', fxDay: '',
    toast: '', toastN: 0, watch: true,
    cycle: 1, cycleStart: new Date(now0.getFullYear(), now0.getMonth(), 1).getTime(), cycleStartLabel: '1 ' + AR_M[now0.getMonth()], cycleSalary: false, cycles: [],
    chat: [{ role: 'assistant', text: 'هلا، أنا مستشارك المالي.\nأتابع أرصدتك ومصاريفك وأقساطك، وأنبهك من نفسي إذا شفت شي يضر ميزانيتك.\nاسألني أي شي: أرتب لك ميزانية، أو أسوي لك خطة للتخلص من الديون، أو أوريك وين تقدر توفر.' }],
    chatInput: '', chatBusy: false, unread: 0, nudge: '', expanded: null, savingsOffer: null, aiReady: false,
    heads: null, shadeOpen: false, advNotes: [], budgets: {}, goals: [],
    profile: { name: '', email: '' }, pf: { name: '', email: '' }, lang: 'ar',
    cats: DEFAULT_CATS.map((c) => Object.assign({}, c)),
    notif: { sms: true, advisor: true, inst: true },
    security: { pin: '', bio: false }, locked: false, pinBuf: '', pinErr: false, pinStage: null, pinFirst: '', bioScanning: false,
    backup: { last: null, auto: false, busy: false, snapshot: null },
    shares: [], shareEmail: '', shareRole: 'view', tour: null, tourDone: false,
    catEdit: null, catForm: { name: '', color: PALETTE[0].color, bg: PALETTE[0].bg, ic: 'cart' },
    modal: null, delText: '', tripEmail: '',
    perms: { sms: null, notif: null }, theme: 'green', mode: 'light', hideAmt: false, trips: [], tripView: null, tripBackScreen: 'travel',
    txEdit: null, txFilter: { q: '', cat: null, acc: null, period: 'cycle' }, txBack: 'home', budInput: '', mCash: false, mPay: null, mSeason: null, addKind: 'exp', ignoredAccs: [], accId: null, accBack: 'more', accDel: false, accForm: { name: '', bank: '', type: 'acc', last4: '', bal: '' },
    seasons: [], seasonForm: { name: '', budget: '' }, subsIgnored: [], subs: [], sf: { id: null, name: '', amount: '', period: 'm', end: '' }, subDel: false, reports: [], reportReady: null, reportId: null,
    rp: { mode: 'cycle', month: null, year: null, from: '', to: '' }, rpSel: null, rpTrips: false, demoIncome: []
  };
}
function validEmail(e) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(e || '').trim()); }
function stampLabel(ts) {
  const d = new Date(ts);
  const p = (n) => (n < 10 ? '0' : '') + n;
  return d.getDate() + ' ' + AR_M[d.getMonth()] + ' · ' + p(d.getHours()) + ':' + p(d.getMinutes());
}

class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.idc = 1;
    this.nk = {};
    this.timers = [];
    this.state = makeInitialState();
  }
  componentWillUnmount() { this.timers.forEach((t) => clearTimeout(t)); }

  say(msg) {
    const n = this.state.toastN + 1;
    this.setState({ toast: msg, toastN: n });
    this.timers.push(setTimeout(() => { if (this.state.toastN === n) this.setState({ toast: '' }); }, 2600));
  }
  go(screen) { this.setState({ screen }); }
  newId() { return this.idc++; }
  tripOn() { return !!(this.state.trip && this.state.trip.active); }
  tripIdNow() { return this.tripOn() ? this.state.trip.id : false; }
  addTx(tx, msg) {
    const id = this.newId();
    const trip = this.tripIdNow();
    const t = Object.assign({ id, trip, cycle: this.state.cycle, ts: Date.now(), seasonId: this.seasonPick(tx.catId, null) }, tx);
    const txns = [t].concat(this.state.txns);
    this.setState({ txns });
    this.say(msg + (trip ? ' · ضمن الرحلة' : ''));
    this.watchSpend(t, txns);
  }
  catAr(id) { const c = CATS.find((x) => x.id === id); return c ? c.ar : ''; }

  resolve(pid, catId) {
    const p = this.state.pending.find((x) => x.id === pid);
    if (!p) return;
    const learned = Object.assign({}, this.state.learned);
    let extra = '';
    if (p.kind === 'unclear') { learned[p.merchant.toLowerCase()] = catId; extra = ' · بصنّف ' + p.merchant + ' تلقائياً المرة الجاية'; }
    const tx = { ts: Date.now(), id: p.id, amount: p.amount, merchant: p.kind === 'transfer' ? 'تحويل · ' + this.catAr(catId) : p.merchant, catId, dateShort: p.dateShort, src: 'sms', trip: false, seasonId: this.seasonPick(catId, p.season) };
    this.setState({ pending: this.state.pending.filter((x) => x.id !== pid), txns: [tx].concat(this.state.txns), learned });
    this.say('تم التصنيف: ' + this.catAr(catId) + extra);
  }
  dismiss(pid, msg) {
    this.setState({ pending: this.state.pending.filter((x) => x.id !== pid) });
    this.say(msg);
  }
  saveSms() {
    const p = parseSms(this.state.smsText, this.state.learned, this.state.accounts);
    if (!p || !p.ok) return;
    const cat = this.state.catPick || p.catId;
    if (!cat) { this.say('اختر الفئة أولاً، أو خلّها لبعدين'); return; }
    if (p.kind === 'unclear' || (this.state.catPick && p.kind !== 'transfer')) {
      const learned = Object.assign({}, this.state.learned);
      learned[p.merchant.toLowerCase()] = cat;
      this.setState({ learned });
    }
    const merchant = p.kind === 'transfer' ? 'تحويل · ' + this.catAr(cat) : p.merchant;
    this.addTx({ amount: p.amount, merchant, catId: cat, dateShort: p.dateShort, src: 'sms' }, 'انسجل ' + fmt(p.amount) + ' ⃄ في ' + this.catAr(cat));
    this.updateBal(p);
    this.setState({ smsText: '', catPick: null, showPick: false, screen: 'home' });
  }
  updateBal(p) {
    if (!p.last4 || p.balance == null) return;
    this.setState({ accounts: this.state.accounts.map((a) => (accMatch(a, p.last4) ? Object.assign({}, a, { balance: p.balance }) : a)) });
  }
  saveCredit() {
    const p = parseSms(this.state.smsText, this.state.learned, this.state.accounts);
    if (!p || !p.ok) return;
    const id = this.newId();
    this.updateBal(p);
    this.setState({ income: this.state.income.concat([{ id, name: 'إيداع من رسالة البنك', amount: p.amount, once: true, ts: Date.now(), dateShort: p.dateShort || todayLabels().dateShort }]), smsText: '', screen: 'more' });
    this.say('انضاف للدخل كمبلغ لمرة واحدة');
  }
  addAccount() {
    const ob = this.state.ob;
    if (!String(ob.bank || '').trim()) { this.say('اكتب اسم البنك أول'); return; }
    const l4 = (ob.last4 || '').replace(/[^0-9]/g, '');
    if (l4.length !== 4) { this.say('اكتب ٤ أرقام من الحساب أو البطاقة (أول ٤ أو آخر ٤)'); return; }
    if (this.state.accounts.some((a) => a.last4 === l4)) { this.say('هذا الحساب مضاف من قبل'); return; }
    const id = this.newId();
    this.setState({ ignoredAccs: (this.state.ignoredAccs || []).filter((g) => g.digits !== l4), accounts: this.state.accounts.concat([{ id, bank: ob.bank.trim(), type: ob.type, last4: l4, balance: parseFloat(ob.bal) || 0, watch: true }]), ob: { bank: '', type: 'acc', last4: '', bal: '' }, showAccForm: false });
    this.say('انضاف ' + bankOf(ob.bank).ar + ' •••• ' + l4);
  }
  addAccFromSms() {
    const p = parseSms(this.state.smsText, this.state.learned, this.state.accounts);
    if (!p || !p.ok || !p.last4) return;
    if (this.state.accounts.some((a) => accMatch(a, p.last4))) return;
    const id = this.newId();
    const bk = p.bank || 'حساب جديد';
    this.setState({ accounts: this.state.accounts.concat([{ id, bank: bk, type: 'acc', last4: p.last4, balance: p.balance || 0, watch: true }]) });
    this.say('انضاف ' + bankOf(bk).ar + ' •••• ' + p.last4 + ' برصيده من الرسالة');
  }
  toggleAcc(id) {
    const a = this.state.accounts.find((x) => x.id === id);
    if (!a) return;
    this.setState({ accounts: this.state.accounts.map((x) => (x.id === id ? Object.assign({}, x, { watch: !x.watch }) : x)) });
    this.say(a.watch ? 'وقفت قراءة رسائل هذا الحساب' : 'رجعت أقرأ رسائل هذا الحساب');
  }
  finishOnboard() {
    this.setState({ screen: 'home', tour: this.state.tourDone ? null : 0 });
  }
  addInstallment() {
    const s = this.state.ins;
    const total = parseFloat(s.total), monthly = parseFloat(s.monthly), paid = parseFloat(s.paid) || 0;
    if (!s.name.trim()) { this.say('اكتب اسم القسط'); return; }
    if (!(total > 0) || !(monthly > 0)) { this.say('اكتب المبلغ الإجمالي والقسط الشهري'); return; }
    if (monthly > total) { this.say('القسط الشهري أكبر من الإجمالي'); return; }
    const fd = s.auto ? firstDue(s.due) : null;
    if (s.auto && !fd) { this.say('حدد تاريخ السداد الشهري'); return; }
    const id = this.newId();
    this.setState({ installments: this.state.installments.concat([{ id, name: s.name.trim(), total, monthly, paid: Math.min(paid, total), dueDay: fd ? fd.day : null, nextDue: fd ? fd.ts : null }]), ins: { name: '', total: '', monthly: '', paid: '', due: '', auto: false }, modal: this.state.modal && this.state.modal.type === 'instForm' ? null : this.state.modal });
    this.say(fd ? 'انضاف القسط. بينخصم تلقائي كل شهر يوم ' + fd.day + '، وأول خصم ' + dueLabel(fd.ts) : 'انضاف القسط. سدّده بيدك من بطاقته، أو ينقرى من رسالة البنك');
    this.timers.push(setTimeout(() => this.checkDueInst(), 300));
  }
  // يخصم القسط تلقائياً لما يجي تاريخ استحقاقه
  instTx(x, amount, when, early) {
    const d = new Date(when);
    return { id: this.newId(), ts: when, amount, merchant: x.name, catId: 'inst', dateShort: d.getDate() + ' ' + AR_M[d.getMonth()], src: 'inst', instId: x.id, trip: false, cycle: this.state.cycle, fixedPaid: true, note: early ? 'تسديد قبل الموعد' : 'خصم تلقائي في تاريخ الاستحقاق' };
  }
  checkDueInst() {
    try { this.syncSubs(); } catch (e) {}
    const st = this.state;
    if (!st.installments || !st.installments.length) return;
    const now = Date.now();
    const newTx = [];
    let changed = false;
    const list = st.installments.map((x) => {
      if (!x.dueDay || !x.nextDue) return x;
      let y = Object.assign({}, x), guard = 0;
      while (y.nextDue <= now && y.total - y.paid > 0.0005 && guard++ < 24) {
        const amt = Math.round(Math.min(y.monthly, y.total - y.paid) * 1000) / 1000;
        newTx.push(this.instTx(y, amt, y.nextDue, false));
        y.paid = Math.min(y.total, Math.round((y.paid + amt) * 1000) / 1000);
        y.lastPaid = y.nextDue;
        y.nextDue = nextDueAfter(y.nextDue, y.dueDay);
        changed = true;
      }
      return y;
    });
    if (!changed) return;
    this.setState({ installments: list, txns: newTx.reverse().concat(this.state.txns) });
    const names = newTx.map((t) => t.merchant).filter((v, i, a) => a.indexOf(v) === i);
    this.say(names.length === 1 ? 'انخصم ' + instNm(names[0]) + ' في موعده' : 'انخصمت ' + newTx.length + ' أقساط في موعدها');
  }
  payInstNow(id) {
    const st = this.state;
    const x = st.installments.find((y) => y.id === id);
    if (!x) return;
    const left = x.total - x.paid;
    if (left <= 0.0005) { this.say('هالقسط مكتمل'); return; }
    const amt = Math.round(Math.min(x.monthly, left) * 1000) / 1000;
    const now = Date.now();
    const tx = this.instTx(x, amt, now, true);
    const patch = { paid: Math.min(x.total, Math.round((x.paid + amt) * 1000) / 1000), lastPaid: now };
    if (x.dueDay && x.nextDue) patch.nextDue = nextDueAfter(x.nextDue, x.dueDay);
    this.setState({ installments: st.installments.map((y) => (y.id === id ? Object.assign({}, y, patch) : y)), txns: [tx].concat(st.txns) });
    this.say(x.dueDay ? 'سددت ' + instNm(x.name) + ' (' + fmt(amt) + ' ⃄)، والخصم الجاي ' + dueLabel(patch.nextDue || x.nextDue) : 'سددت ' + instNm(x.name));
  }
  openSubForm(pre) {
    this.setState({ modal: { type: 'subForm' }, subDel: false, sf: Object.assign({ id: null, name: '', amount: '', period: 'm', end: '' }, pre || {}) });
  }
  saveSub() {
    const f = this.state.sf, amt = parseFloat(f.amount);
    if (!f.name.trim()) { this.say('اكتب اسم الاشتراك'); return; }
    if (!(amt > 0)) { this.say('اكتب مبلغ الاشتراك'); return; }
    const p = String(f.end || '').split('-').map(Number);
    if (p.length !== 3 || !p[0]) { this.say('حدد تاريخ انتهاء الاشتراك'); return; }
    const end = new Date(p[0], p[1] - 1, p[2], 9, 0, 0).getTime();
    const item = { name: f.name.trim(), amount: Math.round(amt * 1000) / 1000, period: f.period === 'y' ? 'y' : 'm', end };
    const subs = this.state.subs || [];
    if (f.id) this.setState({ subs: subs.map((x) => (x.id === f.id ? Object.assign({}, x, item) : x)), modal: { type: 'sub', id: f.id } });
    else this.setState({ subs: subs.concat([Object.assign({ id: this.newId(), created: Date.now(), lastTx: Date.now() }, item)]), modal: null });
    this.say(f.id ? 'تعدّل الاشتراك' : 'انضاف اشتراك ' + item.name + '، وبذكّرك قبل ما ينتهي بيوم');
  }
  renewSub(id) {
    const x = (this.state.subs || []).find((y) => y.id === id);
    if (!x) return;
    let end = x.end || Date.now();
    end = addPeriod(end, x.period);
    while (end < Date.now()) end = addPeriod(end, x.period);
    this.setState({ subs: this.state.subs.map((y) => (y.id === id ? Object.assign({}, y, { end }) : y)) });
    this.say('تجدد ' + x.name + ' لين ' + dueLabel(end));
  }
  // لما يوصل خصم الاشتراك من البنك، يتقدم تاريخ الانتهاء لحاله
  syncSubs() {
    const st = this.state, subs = st.subs || [];
    if (!subs.length) return;
    let changed = false;
    const list = subs.map((x) => {
      const t = st.txns.filter((q) => subTxHit(x, q) && (q.ts || 0) > (x.lastTx || x.created || 0)).sort((p, q) => (q.ts || 0) - (p.ts || 0))[0];
      if (!t) return x;
      changed = true;
      let end = x.end || t.ts;
      if (end - t.ts < 20 * DAY_MS) { while (end - t.ts < 20 * DAY_MS) end = addPeriod(end, x.period); }
      return Object.assign({}, x, { lastTx: t.ts, end });
    });
    if (changed) this.setState({ subs: list });
  }
  // ===== تحويل بين الحسابات =====
  moveBal(accounts, id, delta) {
    return accounts.map((x) => (x.id === id ? Object.assign({}, x, { balance: Math.round((x.balance + (x.type === 'card' ? -delta : delta)) * 1000) / 1000 }) : x));
  }
  doTransfer() {
    const st = this.state, f = st.tfr || {}, amt = parseFloat(f.amount);
    if (!f.from || !f.to) { this.say('اختر الحساب اللي تحول منه واللي تحول له'); return; }
    if (f.from === f.to) { this.say('اختر حسابين مختلفين'); return; }
    if (!(amt > 0)) { this.say('اكتب مبلغ التحويل'); return; }
    const fa = st.accounts.find((x) => x.id === f.from);
    if (fa && fa.type !== 'card' && amt > availOf(fa) + 0.0005) { this.say('المبلغ أكبر من رصيد ' + accLabel(fa)); return; }
    const a2 = Math.round(amt * 1000) / 1000;
    let accounts = this.moveBal(st.accounts, f.from, -a2);
    accounts = this.moveBal(accounts, f.to, a2);
    const m = { id: this.newId(), ts: Date.now(), dateShort: todayLabels().dateShort, from: f.from, to: f.to, amount: a2, note: (f.note || '').trim() };
    this.setState({ accounts, moves: (st.moves || []).concat([m]), modal: null, tfr: null });
    const ta = st.accounts.find((x) => x.id === f.to);
    this.say('حوّلت ' + fmt(a2) + ' ⃄ إلى ' + (ta ? accLabel(ta) : ''));
  }
  undoTransfer(id) {
    const st = this.state, m = (st.moves || []).find((x) => x.id === id);
    if (!m) return;
    let accounts = this.moveBal(st.accounts, m.from, m.amount);
    accounts = this.moveBal(accounts, m.to, -m.amount);
    this.setState({ accounts, moves: st.moves.filter((x) => x.id !== id), modal: null });
    this.say('انلغى التحويل ورجعت الأرصدة');
  }
  // ===== عزل مبلغ =====
  addHeld() {
    const st = this.state, h = st.hd || {}, amt = parseFloat(h.amount);
    if (!(h.title || '').trim()) { this.say('اكتب عنوان المبلغ'); return; }
    if (!(amt > 0)) { this.say('اكتب المبلغ'); return; }
    const a = st.accounts.find((x) => x.id === st.accId);
    if (!a) return;
    if (amt > availOf(a) + 0.0005) { this.say('المبلغ أكبر من رصيدك المتاح'); return; }
    const item = { id: this.newId(), title: h.title.trim(), amount: Math.round(amt * 1000) / 1000, ts: Date.now() };
    this.setState({ accounts: st.accounts.map((x) => (x.id === a.id ? Object.assign({}, x, { held: (x.held || []).concat([item]) }) : x)), modal: null, hd: null });
    this.say('انعزل ' + fmt(item.amount) + ' ⃄ باسم ' + item.title);
  }
  releaseHeld(accId, hid, returned) {
    const st = this.state, a = st.accounts.find((x) => x.id === accId);
    if (!a) return;
    const h = (a.held || []).find((x) => x.id === hid);
    const patch = { held: (a.held || []).filter((x) => x.id !== hid) };
    // إذا رجّعه لصاحبه: النقد وحساب بدون قراءة رسائل ينقص رصيدهم هنا، والباقي يتحدث من رسالة البنك
    if (returned && h && (a.type === 'cash' || !a.watch)) patch.balance = Math.round((a.balance - h.amount) * 1000) / 1000;
    this.setState({ accounts: st.accounts.map((x) => (x.id === accId ? Object.assign({}, x, patch) : x)), heldAsk: null });
    this.say(returned ? (a.type === 'cash' || !a.watch ? 'تمام، رجع المبلغ لصاحبه وانخصم من الرصيد' : 'تمام، شلته من المعزولة. والرصيد يتحدث من رسالة البنك') : 'تمام، صار المبلغ من رصيدك');
  }
  toggleInstAuto(id) {
    const x = this.state.installments.find((y) => y.id === id);
    if (!x) return;
    if (x.dueDay) { this.setState({ installments: this.state.installments.map((y) => (y.id === id ? Object.assign({}, y, { dueDay: null, nextDue: null }) : y)) }); this.say('صار سداد ' + instNm(x.name) + ' يدوي'); return; }
    const d = new Date(); d.setDate(d.getDate() + 1);
    this.setInstDue(id, isoOf(d.getTime()));
  }
  delInstPay(id, txId) {
    const st = this.state;
    const x = st.installments.find((y) => y.id === id), t = st.txns.find((y) => y.id === txId);
    if (!x || !t) return;
    const patch = { paid: Math.max(0, Math.round((x.paid - t.amount) * 1000) / 1000) };
    if (x.dueDay && x.nextDue && t.src === 'inst') {
      const d = new Date(x.nextDue), prev = dueAt(d.getFullYear(), d.getMonth() - 1, x.dueDay);
      if (prev > Date.now()) patch.nextDue = prev;
    }
    this.setState({ installments: st.installments.map((y) => (y.id === id ? Object.assign({}, y, patch) : y)), txns: st.txns.filter((y) => y.id !== txId), instHistDel: null });
    this.say('انحذفت الدفعة ورجع مبلغها للمتبقي');
  }
  setInstDue(id, iso) {
    const fd = firstDue(iso);
    if (!fd) return;
    this.setState({ installments: this.state.installments.map((y) => (y.id === id ? Object.assign({}, y, { dueDay: fd.day, nextDue: fd.ts }) : y)) });
    this.say('بينخصم تلقائي كل شهر يوم ' + fd.day);
    this.timers.push(setTimeout(() => this.checkDueInst(), 300));
  }
  instPending(dateShort) {
    const open = this.state.pending.filter((x) => x.kind === 'inst').map((x) => x.instId);
    return this.state.installments
      .filter((x) => !x.dueDay && x.total - x.paid > 0.0005 && open.indexOf(x.id) === -1)
      .map((x) => ({ id: this.newId(), kind: 'inst', instId: x.id, amount: Math.min(x.monthly, x.total - x.paid), merchant: x.name, dateShort }));
  }
  passMonth() {
    const items = this.instPending(todayLabels().dateShort);
    if (!items.length) { this.say('ما فيه أقساط مستحقة جديدة'); return; }
    this.setState({ pending: items.concat(this.state.pending), screen: 'home' });
    this.say('جا موعد ' + (items.length === 1 ? 'قسط' : items.length + ' أقساط') + '، أكّدها من الرئيسية');
  }

  // ===== رصد الرسائل والموافقة =====
  balUpdated(accounts, last4, bal) {
    if (!last4 || bal == null) return accounts;
    return accounts.map((a) => (accMatch(a, last4) ? Object.assign({}, a, { balance: bal }) : a));
  }
  arrive(textArg, base) {
    const st = Object.assign({}, this.state, base || {});
    if (typeof textArg === 'string') st.smsText = textArg;
    const p = parseSms(st.smsText, st.learned, st.accounts);
    if (!p || !p.ok) return;
    if (p.accDigits && !st.accounts.some((a) => a.type !== 'cash' && accHit(a.last4, p.accDigits))) {
      if (ignoredHit(st.ignoredAccs, p.accDigits)) { this.setState({ smsText: '' }); return; }
      const key = p.newKey;
      const ex = st.pending.find((x) => x.kind === 'newacc' && x.accKey === key);
      if (ex) {
        const np0 = st.pending.map((x) => (x === ex ? Object.assign({}, x, { texts: x.texts.concat([st.smsText]), count: (x.count || 1) + 1 }) : x));
        this.setState({ pending: np0, smsText: '' });
        this.say('وصلت رسالة ثانية من نفس الحساب غير المسجل');
        return np0;
      }
      const nid = this.newId();
      const nitem = { id: nid, kind: 'newacc', accKey: key, bank: p.bank || '', balance: p.balance, texts: [st.smsText], count: 1, amount: p.amount, dateShort: p.dateShort, merchant: p.merchant || '', credit: p.kind === 'credit' || p.kind === 'salary' };
      const np1 = [nitem].concat(st.pending);
      this.setState({ pending: np1, smsText: '' });
      if (this.state.perms.sms !== 'granted') this.setState({ screen: 'home' });
      this.say('وصلت رسالة من حساب مو مسجل عندك');
      return np1;
    }
    const acc = p.last4 ? st.accounts.find((a) => accMatch(a, p.last4)) : null;
    if (acc && !acc.watch) { this.say('قراءة هذا الحساب متوقفة، فما رصدت الرسالة'); return; }
    const id = this.newId();
    let item = toPending(p, id);
    const pending = st.pending.slice();
    const sal = st.income.find((x) => !x.once && /راتب/.test(x.name));
    if (item.kind === 'credit' && sal && Math.abs(p.amount - sal.amount) <= sal.amount * 0.1) item.kind = 'salary';
    if (item.kind === 'refund') {
      const base = (p.merchant || '').split(' · ')[0].toLowerCase();
      const orig = st.txns.find((x) => x.merchant.split(' · ')[0].toLowerCase() === base && x.amount >= p.amount - 0.0005);
      if (orig) { item.refundOf = orig.id; item.refundOfLabel = orig.merchant + (orig.dateShort ? ' · ' + orig.dateShort : ''); }
    }
    if (item.kind === 'suggest' || item.kind === 'unclear') {
      const twin = st.pending.concat(st.txns).find((x) => x.ts && x.ts === item.ts && Math.abs(x.amount - item.amount) < 0.0005 && x.merchant === item.merchant);
      if (twin) { item.dupKind = 'twice'; item.dupOf = twin.id; }
      else {
        const rc = st.txns.find((x) => (x.src === 'receipt' || x.src === 'inst' || (x.src === 'manual' && x.last4 && x.last4 === item.last4)) && !x.linked && Math.abs(x.amount - item.amount) < 0.0005 && Math.abs((x.ts || 0) - (item.ts || Date.now())) < 4 * 86400000);
        if (rc && rc.src === 'manual') item.dupManual = true;
        if (rc && rc.src === 'inst') item.dupInst = true;
        if (rc) { item.dupKind = 'receipt'; item.dupOf = rc.id; item.dupLabel = rc.merchant; }
      }
    }
    if (['suggest', 'unclear', 'transfer'].indexOf(item.kind) !== -1) {
      const fx = st.fixed.find((f) => Math.abs(f.amount - item.amount) < 0.0005);
      const ins = st.installments.find((x) => x.total - x.paid > 0.0005 && Math.abs(Math.min(x.monthly, x.total - x.paid) - item.amount) < 0.0005);
      if (fx) item.fixedMatch = { kind: 'fixed', id: fx.id, name: fx.name };
      else if (ins) item.fixedMatch = { kind: 'inst', id: ins.id, name: ins.name };
    }
    const isCredit = item.kind === 'credit';
    const isDebitTransfer = item.kind === 'transfer';
    if (isCredit || isDebitTransfer) {
      const mi = pending.findIndex((x) => Math.abs(x.amount - p.amount) < 0.0005 && x.last4 && p.last4 && x.last4 !== p.last4 && x.dateShort === p.dateShort && (isCredit ? x.kind === 'transfer' : x.kind === 'credit'));
      if (mi !== -1) {
        const other = pending[mi];
        const from = isCredit ? other : item;
        const to = isCredit ? item : other;
        pending.splice(mi, 1);
        item = { id, kind: 'internal', amount: p.amount, dateShort: p.dateShort, fromLast4: from.last4, toLast4: to.last4, fromBal: from.balance, toBal: to.balance, debit: from, credit: to };
      }
    }
    const npend = [item].concat(pending);
    this.setState({ pending: npend, smsText: '', catPick: null });
    if (this.state.perms.sms !== 'granted') { this.setState({ screen: 'home' }); this.say('حطيتها في قائمة الموافقة'); }
    else if (this.state.notif.sms && this.state.perms.notif === 'granted') this.showHeads({ pid: id });
    else this.say(this.state.lang === 'en' ? 'New bank message awaiting approval' : 'وصلت رسالة جديدة تنتظر موافقتك');
    return npend;
  }
  newAccYes(pid) {
    const st = this.state;
    const p = st.pending.find((x) => x.id === pid);
    if (!p) return;
    const acc = { id: this.newId(), bank: p.bank || 'حساب جديد', type: 'acc', last4: p.accKey, balance: p.balance || 0, watch: true };
    const base = { accounts: st.accounts.concat([acc]), pending: st.pending.filter((x) => x.id !== pid) };
    this.setState(base);
    p.texts.forEach((t) => { const r = this.arrive(t, base); if (r) base.pending = r; });
    this.say('انضاف الحساب •••• ' + p.accKey + (p.texts.length ? ' · وحطيت ' + (p.texts.length > 1 ? p.texts.length + ' رسائل' : 'الرسالة') + ' للموافقة' : ''));
  }
  newAccNo(pid) {
    const st = this.state;
    const p = st.pending.find((x) => x.id === pid);
    if (!p) return;
    const alts = [];
    (p.texts || []).forEach((t) => accKeysOf(accDigitsOf(t)).forEach((k) => { if (k !== p.accKey && alts.indexOf(k) === -1) alts.push(k); }));
    // أي عملية ثانية من نفس الحساب تنتظر (خصم أو إيداع) تنشال بعد
    const rest = st.pending.filter((x) => x.id !== pid && !(x.last4 && (x.last4 === p.accKey || alts.indexOf(x.last4) !== -1) && !st.accounts.some((a) => accMatch(a, x.last4))));
    this.setState({ ignoredAccs: (st.ignoredAccs || []).concat([{ digits: p.accKey, alts, bank: p.bank || '' }]), pending: rest });
    this.say('تمام، ما بسجل أي رسالة من حساب •••• ' + p.accKey);
  }
  unignoreAcc(d) {
    this.setState({ ignoredAccs: (this.state.ignoredAccs || []).filter((g) => g.digits !== d) });
    this.say('رجعت أقرأ رسائل حساب •••• ' + d + '. لما توصل رسالة منه بسألك تضيفه');
  }
  approveCat(pid, catId, seasonOv) {
    const st = this.state;
    const p = st.pending.find((x) => x.id === pid);
    if (!p) return;
    const learned = Object.assign({}, st.learned);
    let extra = '';
    if (p.kind === 'unclear' || (p.kind === 'suggest' && p.catId !== catId)) { learned[p.merchant.split(' · ')[0].toLowerCase()] = catId; extra = ' · بتذكر ' + p.merchant + ' المرة الجاية'; }
    const tx = { ts: Date.now(), id: p.id, amount: p.amount, merchant: p.kind === 'transfer' ? 'تحويل · ' + this.catAr(catId) : p.merchant, catId, dateShort: p.dateShort, src: 'sms', trip: this.tripIdNow(), cycle: st.cycle, ts: p.ts || Date.now(), last4: p.last4, seasonId: this.seasonPick(catId, seasonOv != null ? seasonOv : p.season) };
    const txns = [tx].concat(st.txns);
    this.setState({ pending: st.pending.filter((x) => x.id !== pid), txns, learned, accounts: this.balUpdated(st.accounts, p.last4, p.balance), expanded: null });
    this.say('تمام، انضافت في ' + this.catAr(catId) + (tx.seasonId ? ' · من ميزانية ' + this.seasonName() : '') + extra);
    this.watchSpend(tx, txns);
  }
  approveAll() {
    const st = this.state;
    const sug = st.pending.filter((x) => x.kind === 'suggest');
    if (!sug.length) return;
    let accounts = st.accounts;
    const newTx = sug.map((p) => {
      accounts = this.balUpdated(accounts, p.last4, p.balance);
      return { id: p.id, amount: p.amount, merchant: p.merchant, catId: p.catId, dateShort: p.dateShort, src: 'sms', trip: this.tripIdNow(), cycle: st.cycle, ts: p.ts || Date.now(), last4: p.last4, seasonId: this.seasonPick(p.catId, p.season) };
    });
    const txns = newTx.concat(st.txns);
    this.setState({ pending: st.pending.filter((x) => x.kind !== 'suggest'), txns, accounts });
    this.say('انضافت ' + sug.length + ' عمليات');
    const biggest = newTx.slice().sort((a, b) => b.amount - a.amount)[0];
    this.watchSpend(biggest, txns);
  }
  internalYes(pid) {
    const st = this.state;
    const p = st.pending.find((x) => x.id === pid);
    if (!p) return;
    let accounts = this.balUpdated(st.accounts, p.fromLast4, p.fromBal);
    accounts = this.balUpdated(accounts, p.toLast4, p.toBal);
    this.setState({ pending: st.pending.filter((x) => x.id !== pid), accounts });
    this.say('تحويل بين حساباتك، ما ينحسب مصروف. حدّثت الرصيدين');
  }
  internalNo(pid) {
    const st = this.state;
    const p = st.pending.find((x) => x.id === pid);
    if (!p) return;
    const rest = st.pending.filter((x) => x.id !== pid);
    const back = [Object.assign({}, p.debit, { id: this.newId(), kind: 'transfer' }), Object.assign({}, p.credit, { id: this.newId(), kind: 'credit' })];
    this.setState({ pending: back.concat(rest) });
    this.say('تمام، فصلتهم: تحويل صادر وإيداع وارد');
  }
  creditOnce(pid) {
    const st = this.state;
    const p = st.pending.find((x) => x.id === pid);
    if (!p) return;
    this.setState({ pending: st.pending.filter((x) => x.id !== pid), income: st.income.concat([{ id: this.newId(), name: 'إيداع في ••' + (p.last4 || ''), amount: p.amount, once: true, ts: Date.now(), dateShort: p.dateShort || todayLabels().dateShort }]), accounts: this.balUpdated(st.accounts, p.last4, p.balance) });
    this.say('انضاف كدخل');
  }
  salaryYes(pid) {
    const st = this.state;
    const p = st.pending.find((x) => x.id === pid);
    if (!p) return;
    const cyc = st.txns.filter((t) => !t.trip && t.cycle === st.cycle);
    const spent = cyc.reduce((a, t) => a + t.amount, 0) + this.plannedFixed();
    const incomeSum = st.income.reduce((a, x) => a + x.amount, 0);
    const leftover = p.balance != null ? Math.max(0, p.balance - p.amount) : Math.max(0, incomeSum - spent);
    let income = st.income.filter((x) => !x.once);
    const si = income.findIndex((x) => /راتب/.test(x.name));
    if (si === -1) income = income.concat([{ id: this.newId(), name: 'الراتب', amount: p.amount, once: false }]);
    else income = income.map((x, i) => (i === si ? Object.assign({}, x, { amount: p.amount }) : x));
    const instItems = this.instPending(p.dateShort || todayLabels().dateShort);
    const savingsAcc = st.accounts.find((a) => a.type === 'savings' && !accMatch(a, p.last4));
    const repId = this.newId();
    this.setState({
      pending: instItems.concat(st.pending.filter((x) => x.id !== pid)),
      cycles: st.cycles.concat([{ n: st.cycle, startLabel: st.cycleStartLabel, spent, leftover }]),
      cycle: st.cycle + 1, cycleStart: Date.now(), cycleStartLabel: p.dateShort || todayLabels().dateShort, cycleSalary: true,
      income, accounts: this.balUpdated(st.accounts, p.last4, p.balance),
      savingsOffer: leftover > 0.0005 ? { amount: leftover, fromLast4: p.last4 } : null,
      reports: st.reports.concat([Object.assign(this.buildReport(st.cycle, 'تقرير ' + st.cycleStartLabel + ' – ' + (p.dateShort || '')), { id: repId })]), reportReady: repId
    });
    this.say('نزل الراتب، وبدأ شهر مالي جديد');
    this.nudge('salary' + st.cycle,
      'نزل راتبك ' + fmt(p.amount) + ' ⃄، وبدأنا شهر مالي جديد.\n'
      + (leftover > 0.0005
        ? 'بقي لك من الشهر اللي راح ' + fmt(leftover) + ' ⃄. ' + (savingsAcc ? 'أنصحك تحوله الحين لحساب الادخار في ' + bankOf(savingsAcc.bank).ar + ' قبل لا تبدأ تصرف.' : 'أنصحك تفتح حساب ادخار منفصل وتحوله له، وأضفه هنا عشان أتابعه.')
        : 'ما بقى شي من الشهر اللي راح. خلنا هالشهر نحدد مبلغ ادخار من أوله، حتى ١٠٪ من الراتب بداية ممتازة.')
      + (instItems.length ? '\nوعندك ' + instItems.length + (instItems.length === 1 ? ' قسط بينخصم' : ' أقساط بتنخصم') + ' هالشهر، أكّدها أول ما تنخصم.' : ''));
  }
  instYes(pid) {
    const st = this.state;
    const p = st.pending.find((x) => x.id === pid);
    if (!p) return;
    this.setState({ pending: st.pending.filter((x) => x.id !== pid), installments: st.installments.map((x) => (x.id === p.instId ? Object.assign({}, x, { paid: Math.min(x.total, x.paid + p.amount) }) : x)) });
    this.say('تأكد قسط ' + p.merchant + '، وتحدّث المتبقي');
  }
  transferSavings() {
    const st = this.state;
    const o = st.savingsOffer;
    const sav = st.accounts.find((a) => a.type === 'savings' && !accMatch(a, o ? o.fromLast4 : ''));
    if (!o || !sav) return;
    const accounts = st.accounts.map((a) => {
      if (a.id === sav.id) return Object.assign({}, a, { balance: a.balance + o.amount });
      if (accMatch(a, o.fromLast4)) return Object.assign({}, a, { balance: Math.max(0, a.balance - o.amount) });
      return a;
    });
    this.setState({ accounts, savingsOffer: null });
    this.say('تمام، انتقل ' + fmt(o.amount) + ' ⃄ لحساب الادخار');
  }

  // ===== المستشار =====
  plannedFixed() {
    const st = this.state;
    return st.fixed.reduce((a, f) => a + f.amount, 0) + st.installments.filter((x) => x.total - x.paid > 0.0005).reduce((a, x) => a + Math.min(x.monthly, x.total - x.paid), 0);
  }
  cycleDays() { return Math.max(1, Math.floor((Date.now() - this.state.cycleStart) / 86400000) + 1); }
  nudge(key, text) {
    if (this.nk[key]) return;
    this.nk[key] = true;
    const nid = this.newId();
    this.setState({ chat: this.state.chat.concat([{ role: 'assistant', text, proactive: true }]), unread: this.state.unread + 1, nudge: text, advNotes: [{ id: nid, text }].concat(this.state.advNotes) });
    if (this.state.screen !== 'advisor' && this.state.notif.advisor && this.state.perms.notif === 'granted') this.showHeads({ adv: nid, text });
  }
  showHeads(h) {
    this.setState({ heads: h });
    const tok = (this.hk = (this.hk || 0) + 1);
    this.timers.push(setTimeout(() => { if (this.hk === tok) this.setState({ heads: null }); }, 9000));
  }
  goAdvisorNow() {
    const prev = this.state.screen;
    this.setState({ screen: 'advisor', advBack: prev && prev !== 'advisor' && prev !== 'onboard' ? prev : 'home', unread: 0, nudge: '', advNotes: [], heads: null, shadeOpen: false });
  }
  openApp(pid) {
    this.setState({ screen: 'home', heads: null, shadeOpen: false, expanded: pid });
  }
  topCats(n) {
    const cnt = {};
    this.state.txns.forEach((t) => { cnt[t.catId] = (cnt[t.catId] || 0) + 1; });
    const ids = Object.keys(cnt).filter((k) => CATS.some((c) => c.id === k)).sort((a, b) => cnt[b] - cnt[a]);
    ['food', 'grocery', 'bills', 'shopping'].forEach((d) => { if (ids.indexOf(d) === -1) ids.push(d); });
    return ids.slice(0, n);
  }
  notifFor(p) {
    const k = p.kind;
    const sc = p.catId ? CATS.find((c) => c.id === p.catId) : null;
    const amt = fmt(p.amount) + ' ⃄';
    const A = [];
    let title = '', body = '';
    if (k === 'suggest' && sc) {
      title = 'مصروف جديد · ' + amt; body = p.merchant + '. أضيفه في ' + sc.ar + '؟';
      const sNm = this.seasonName();
      if (sNm) {
        const on = p.season == null ? this.seasonDefault(p.catId) : p.season;
        body += on ? ' (من ميزانية ' + sNm + ')' : ' (برا ميزانية ' + sNm + ')';
        A.push({ label: 'أضف', fn: () => this.approveCat(p.id, p.catId, on) });
        A.push({ label: on ? 'بدون ' + sNm : 'من ' + sNm, fn: () => this.approveCat(p.id, p.catId, !on) });
        A.push({ label: 'فئة ثانية', fn: () => this.openApp(p.id) });
      } else {
      A.push({ label: 'أضف', fn: () => this.approveCat(p.id, p.catId) });
      A.push({ label: 'فئة ثانية', fn: () => this.openApp(p.id) });
      A.push({ label: 'تجاهل', fn: () => this.dismiss(p.id, 'تجاهلتها من الإشعار') });
      }
    } else if (k === 'unclear' || k === 'transfer') {
      title = (k === 'transfer' ? 'تحويل من حسابك · ' : 'مصروف غير واضح · ') + amt;
      body = k === 'transfer' ? 'لأي مصروف هذا التحويل؟' : p.merchant + '. وش نوعه؟';
      this.topCats(2).forEach((id) => A.push({ label: this.catAr(id), fn: () => this.approveCat(p.id, id) }));
      A.push(k === 'transfer' ? { label: 'تحويل لحسابي', fn: () => this.dismiss(p.id, 'تحويل داخلي، ما يدخل المصاريف') } : { label: 'فئة ثانية', fn: () => this.openApp(p.id) });
    } else if (k === 'internal') {
      title = 'تحويل بين حساباتك · ' + amt; body = '••' + p.fromLast4 + ' ← ••' + p.toLast4 + '. أأكده كتحويل داخلي ما يدخل المصاريف؟';
      A.push({ label: 'نعم، داخلي', fn: () => this.internalYes(p.id) });
      A.push({ label: 'لا', fn: () => this.internalNo(p.id) });
    } else if (k === 'credit') {
      title = 'إيداع · +' + amt; body = 'في حسابك' + (p.bank ? ' في ' + bankOf(p.bank).ar : '') + (p.last4 ? ' ••' + p.last4 : '') + '. أضيفه كدخل؟';
      A.push({ label: 'دخل لمرة واحدة', fn: () => this.creditOnce(p.id) });
      A.push({ label: 'هذا راتبي', fn: () => this.salaryYes(p.id) });
      A.push({ label: 'تجاهل', fn: () => this.dismiss(p.id, 'تجاهلتها من الإشعار') });
    } else if (k === 'salary') {
      title = 'نزل راتبك؟ · +' + amt; body = (p.bank ? 'في ' + bankOf(p.bank).ar + '. ' : '') + 'أبدأ شهر مالي جديد وأقترح عليك تدخر المتبقي؟';
      A.push({ label: 'نعم، راتب', fn: () => this.salaryYes(p.id) });
      A.push({ label: 'دخل عادي', fn: () => this.creditOnce(p.id) });
    } else if (k === 'inst') {
      title = 'موعد القسط · ' + amt; body = p.merchant + '. انخصم هالشهر؟';
      A.push({ label: 'أكّد', fn: () => this.instYes(p.id) });
      A.push({ label: 'لاحقاً', fn: () => this.dismiss(p.id, 'بذكّرك بعدين') });
    }
    if (k === 'atm') { title = 'سحب من الصراف · ' + amt; body = 'أحطها في محفظة النقد؟'; A.push({ label: 'للنقد', fn: () => this.cashIn(p.id) }); A.push({ label: 'صرفتها', fn: () => this.openApp(p.id) }); }
    else if (k === 'refund') { title = 'مرتجع · +' + amt; body = 'من ' + p.merchant + (p.refundOf ? '. أنقصه من العملية الأصلية؟' : ''); if (p.refundOf) A.push({ label: 'اربطه', fn: () => this.linkRefund(p.id) }); A.push({ label: 'دخل', fn: () => this.creditOnce(p.id) }); }
    if (k === 'newacc') { title = 'حساب غير مسجل · •••• ' + p.accKey; body = 'وصلت رسالة من حساب مو مسجل' + (p.bank ? ' في ' + bankOf(p.bank).ar : '') + '. تضيفه؟'; A.push({ label: 'أضف الحساب', fn: () => this.newAccYes(p.id) }); A.push({ label: 'تجاهله دايماً', fn: () => this.newAccNo(p.id) }); }
    if (p.dupKind) { A.length = 0; title = 'شكلها مكررة · ' + amt; body = p.dupKind === 'receipt' ? 'نفس الفاتورة اللي صورتها؟' : 'نفس الرسالة وصلت مرتين'; A.push({ label: 'نفسها', fn: () => this.confirmDup(p.id) }); A.push({ label: 'لا', fn: () => this.notDup(p.id) }); }
    else if (p.fixedMatch && ['suggest', 'unclear', 'transfer'].indexOf(k) !== -1) A.unshift({ label: 'هذا ' + p.fixedMatch.name, fn: () => this.approveFixed(p.id) });
    return { app: 'مصاريفي', appBg: 'var(--accent)', appPath: ICONS.wallet, when: 'الآن', title, body, actions: A.slice(0, 3) };
  }
  advNotif(n) {
    return { app: 'مستشارك المالي', appBg: '#2A3A35', appPath: ICONS.star, when: 'الآن', title: 'تنبيه من مستشارك', body: n.text,
      actions: [{ label: 'افتح المحادثة', fn: () => this.goAdvisorNow() }, { label: 'لاحقاً', fn: () => this.setState({ heads: null, advNotes: this.state.advNotes.filter((x) => x.id !== n.id) }) }] };
  }
  snapshot() {
    const st = this.state;
    const cyc = st.txns.filter((t) => !t.trip && t.cycle === st.cycle);
    const byCat = {};
    cyc.forEach((t) => { byCat[t.catId] = Math.round(((byCat[t.catId] || 0) + t.amount) * 1000) / 1000; });
    return {
      currency: 'OMR', cycleStart: st.cycleStartLabel, salaryArrived: st.cycleSalary, daysIntoCycle: this.cycleDays(),
      income: st.income.map((x) => ({ name: x.name, amount: x.amount, recurring: !x.once })),
      variableSpendByCategory: byCat, fixed: st.fixed.map((x) => ({ name: x.name, amount: x.amount })),
      installments: st.installments.map((x) => ({ name: x.name, total: x.total, paid: x.paid, remaining: Math.max(0, x.total - x.paid), monthly: x.monthly })),
      accounts: st.accounts.map((a) => ({ bank: bankOf(a.bank).ar, type: a.type, balance: a.balance })),
      budgets: st.budgets, goals: st.goals.map((g) => ({ name: g.name, target: g.target, monthly: g.monthly })),
      pendingApprovals: st.pending.length, categories: CATS.map((c) => ({ id: c.id, ar: c.ar }))
    };
  }
  agentTools(idx) {
    const catIds = CATS.map((c) => c.id);
    const note = (label) => {
      const chat = this.state.chat.slice();
      if (!chat[idx]) return;
      chat[idx] = Object.assign({}, chat[idx], { actions: (chat[idx].actions || []).concat([label]) });
      this.setState({ chat });
    };
    return [
      { name: 'get_snapshot', description: 'Returns the user\'s current financial snapshot as data: cycle start, income, variable spend by category id, fixed costs, installments, account balances, current budgets and goals, and the category id list.', execute: () => this.snapshot() },
      { name: 'get_transactions', description: 'Returns the user\'s latest approved transactions (merchant, amount OMR, category id, date, trip flag). Optional category filter and limit (max 50).',
        inputSchema: { type: 'object', properties: { category: { type: 'string', enum: catIds }, limit: { type: 'number' } } },
        execute: (inp) => {
          const cat = inp && inp.category ? String(inp.category) : '';
          const lim = Math.min(50, Math.max(1, Number(inp && inp.limit) || 20));
          return this.state.txns.filter((t) => !cat || t.catId === cat).slice(0, lim).map((t) => ({ merchant: t.merchant, amount: t.amount, category: t.catId, date: t.dateShort, trip: !!t.trip }));
        } },
      { name: 'set_budget', description: 'Sets a monthly spending cap in OMR for one category; the app shows it and warns the user at 80%. amount 0 removes the cap. Only call after the user asked for or explicitly agreed to it.',
        inputSchema: { type: 'object', properties: { category: { type: 'string', enum: catIds }, amount: { type: 'number' } }, required: ['category', 'amount'] },
        execute: (inp) => {
          const cat = String(inp.category || '');
          if (catIds.indexOf(cat) === -1) throw new Error('unknown category ' + cat);
          const amount = Math.round(Number(inp.amount) * 1000) / 1000;
          if (!(amount >= 0)) throw new Error('amount must be >= 0');
          const budgets = Object.assign({}, this.state.budgets);
          if (amount === 0) delete budgets[cat]; else budgets[cat] = amount;
          this.setState({ budgets });
          note(amount === 0 ? 'ألغيت سقف ' + this.catAr(cat) : 'سقف ' + this.catAr(cat) + ': ' + fmt(amount) + ' ⃄ شهرياً');
          return { ok: true, category: cat, amount };
        } },
      { name: 'create_goal', description: 'Creates a savings goal shown in the app: name (Arabic), target in OMR, monthly contribution in OMR. Only call after the user asked for or explicitly agreed to it.',
        inputSchema: { type: 'object', properties: { name: { type: 'string' }, target: { type: 'number' }, monthly: { type: 'number' } }, required: ['name', 'target', 'monthly'] },
        execute: (inp) => {
          const name = String(inp.name || '').slice(0, 40).trim();
          const target = Number(inp.target), monthly = Number(inp.monthly);
          if (!name || !(target > 0) || !(monthly > 0)) throw new Error('name, target>0 and monthly>0 are required');
          this.setState({ goals: this.state.goals.concat([{ id: this.newId(), name, target, monthly }]) });
          note('هدف ادخار: ' + name + ' · ' + fmt(target) + ' ⃄');
          return { ok: true };
        } }
    ];
  }
  watchSpend(tx, txns) {
    if (!tx || tx.trip) return;
    const st = this.state;
    const cyc = txns.filter((t) => !t.trip && t.cycle === st.cycle);
    const incomeSum = st.income.reduce((a, x) => a + x.amount, 0);
    const bud = st.budgets[tx.catId];
    if (bud) {
      const sp = cyc.filter((t) => t.catId === tx.catId).reduce((a, t) => a + t.amount, 0);
      if (sp >= bud * 0.8) {
        const over = sp >= bud;
        this.nudge('bud' + tx.catId + st.cycle + (over ? 'o' : ''), (over ? 'تجاوزت سقف ' : 'وصلت ' + Math.round(sp / bud * 100) + '٪ من سقف ') + this.catAr(tx.catId) + ' (' + fmt(sp) + ' من ' + fmt(bud) + ' ⃄). ' + (over ? 'خلنا نوقف الصرف على هذي الفئة لين الراتب الجاي، أو نعدّل السقف إذا تبي.' : 'باقي لك ' + fmt(bud - sp) + ' ⃄ لين الراتب الجاي.'));
        return;
      }
    }
    const food = cyc.filter((t) => t.catId === 'food');
    if (tx.catId === 'food' && food.length >= 3) {
      this.nudge('food' + st.cycle, 'لاحظت إنك طلبت توصيل ' + food.length + ' مرات هالشهر بمجموع ' + fmt(food.reduce((a, t) => a + t.amount, 0)) + ' ⃄. لو خففتها مرتين بالأسبوع توفر تقريباً نص هذا المبلغ. تبي أحط لك سقف شهري للتوصيل؟');
      return;
    }
    if (tx.catId === 'gov') {
      this.nudge('gov' + st.cycle, 'انخصمت مخالفة ' + fmt(tx.amount) + ' ⃄. المخالفات من أسهل المصاريف اللي ممكن تختفي من ميزانيتك. فعّل تنبيه السرعة في الخرائط، وأنا بحسبها لك كمصروف ممكن تتفاداه.');
      return;
    }
    const big = incomeSum > 0 ? tx.amount >= incomeSum * 0.12 : tx.amount >= 50;
    if (big) {
      this.nudge('big' + tx.id, 'مصروف كبير: ' + fmt(tx.amount) + ' ⃄ في ' + tx.merchant + (incomeSum > 0 ? '، يعني ' + Math.round(tx.amount / incomeSum * 100) + '٪ من دخلك.' : '.') + ' إذا ما كان مخطط له، خلنا نشوف من وين نعوّضه هالشهر. اكتب لي "عوّضه" وأقترح عليك.');
      return;
    }
    if (incomeSum > 0) {
      const spent = cyc.reduce((a, t) => a + t.amount, 0) + this.plannedFixed();
      const proj = spent / this.cycleDays() * 30;
      if (proj > incomeSum) this.nudge('pace' + st.cycle, 'على وتيرة صرفك الحالية بتوصل تقريباً ' + fmt(proj) + ' ⃄ لين الراتب الجاي، وهذا أكثر من دخلك (' + fmt(incomeSum) + '). تبي أرتب لك ميزانية تمشي عليها؟');
    }
  }
  contextText() {
    const st = this.state;
    const catAr = {};
    CATS.forEach((c) => { catAr[c.id] = c.ar; });
    const cyc = st.txns.filter((t) => !t.trip && t.cycle === st.cycle);
    const byCat = {};
    cyc.forEach((t) => addParts(byCat, t));
    const L = [];
    L.push('بداية الشهر المالي: ' + st.cycleStartLabel + (st.cycleSalary ? ' (نزول الراتب)' : ' (الراتب ما نزل بعد)') + '، مر ' + this.cycleDays() + ' يوم');
    L.push('الدخل: ' + (st.income.length ? st.income.map((x) => x.name + ' ' + fmt(x.amount) + (x.once ? ' (مرة واحدة)' : ' (شهري)')).join('، ') : 'غير مسجل'));
    L.push('الصرف المتغير هالشهر: ' + fmt(cyc.reduce((a, t) => a + t.amount, 0)) + ' ⃄. حسب الفئة: ' + (Object.keys(byCat).map((k) => (catAr[k] || k) + ' ' + fmt(byCat[k])).join('، ') || 'لا شيء'));
    L.push('مصاريف ثابتة: ' + (st.fixed.length ? st.fixed.map((x) => x.name + ' ' + fmt(x.amount)).join('، ') : 'غير مسجلة'));
    L.push('أقساط وديون: ' + (st.installments.length ? st.installments.map((x) => x.name + ': الإجمالي ' + fmt(x.total) + '، المدفوع ' + fmt(x.paid) + '، المتبقي ' + fmt(Math.max(0, x.total - x.paid)) + '، القسط ' + fmt(x.monthly)).join(' | ') : 'لا يوجد'));
    L.push('الحسابات: ' + (st.accounts.length ? st.accounts.map((a) => bankOf(a.bank).ar + ' ' + ({ acc: 'جاري', savings: 'ادخار', card: 'بطاقة ائتمان' }[a.type]) + (a.type === 'card' ? ' مستحق ' : ' رصيد ') + fmt(a.balance)).join('، ') : 'غير مسجلة'));
    L.push('عمليات تنتظر موافقته: ' + st.pending.length);
    L.push('آخر العمليات: ' + (st.txns.slice(0, 12).map((t) => t.merchant + ' ' + fmt(t.amount) + ' (' + (catAr[t.catId] || '') + ')' + (t.trip ? ' [سفر]' : '')).join('، ') || 'لا شيء'));
    if (st.trip) L.push('رحلة جارية: ' + st.trip.dest + ' (مصاريفها منفصلة)');
    if (st.cycles.length) { const c = st.cycles[st.cycles.length - 1]; L.push('الشهر الماضي: صرف ' + fmt(c.spent) + '، المتبقي ' + fmt(c.leftover)); }
    return L.join('\n');
  }
  localAnswer(q) {
    const st = this.state;
    const cyc = st.txns.filter((t) => !t.trip && t.cycle === st.cycle);
    const spent = cyc.reduce((a, t) => a + t.amount, 0);
    const fixed = this.plannedFixed();
    const income = st.income.reduce((a, x) => a + x.amount, 0);
    const byCat = {};
    cyc.forEach((t) => addParts(byCat, t));
    const top = Object.keys(byCat).sort((a, b) => byCat[b] - byCat[a]);
    const catName = (id) => (CATS.find((c) => c.id === id) || { ar: id }).ar;
    if (/دين|ديون|قسط|أقساط|اقساط|قرض/.test(q)) {
      const act = st.installments.filter((x) => x.total - x.paid > 0.0005).sort((a, b) => (a.total - a.paid) - (b.total - b.paid));
      if (!act.length) return 'ما عندك أقساط مسجلة. أضفها من قسم الحسابات (الاسم، الإجمالي، القسط الشهري) وأسوي لك خطة سداد.';
      let s = 'خطة كرة الثلج للتخلص من أقساطك:\n';
      act.forEach((x, i) => { s += (i + 1) + '. ' + x.name + ': باقي ' + fmt(x.total - x.paid) + ' ⃄ (' + monthsAr(Math.ceil((x.total - x.paid) / x.monthly - 1e-9)) + ')\n'; });
      s += '\nادفع القسط العادي لكلها، وأي مبلغ زيادة حطه على "' + act[0].name + '" لأنه الأقرب للخلاص. أول ما يخلص، حوّل قسطه كامل على اللي بعده.\nإذا عندك قسط فائدته أعلى، قل لي النسب وأرتبها بطريقة الأعلى فائدة أولاً لأنها توفر أكثر.';
      return s;
    }
    if (/ميزانية|رتب|خطة/.test(q)) {
      const base = income > 0 ? income : spent + fixed;
      if (base <= 0) return 'أحتاج أعرف دخلك عشان أرتب الميزانية. أضف راتبك من زر + ثم "دخل".';
      return 'ميزانية مقترحة على ' + fmt(base) + ' ⃄:\n1. الأساسيات (فواتير، أقساط، بقالة، وقود): ' + fmt(base * 0.5) + '\n2. الكماليات (مطاعم، تسوق، ترفيه): ' + fmt(base * 0.3) + '\n3. الادخار وتسريع سداد الديون: ' + fmt(base * 0.2) + '\n\nثابتك وأقساطك حالياً ' + fmt(fixed) + ' ⃄' + (fixed > base * 0.5 ? '، وهذا فوق حد الأساسيات، فنبدأ بتخفيضها.' : '.') + '\nحوّل مبلغ الادخار أول ما ينزل الراتب، مو آخر الشهر.';
    }
    if (/وفر|أوفر|اوفر|زايد|توفير|عوض|عوّض/.test(q)) {
      if (!top.length) return 'ما عندي مصاريف كافية هالشهر. وافق على العمليات المعلقة وأعطيك وين تقدر توفر.';
      return 'أكبر مصروف عندك هالشهر: ' + catName(top[0]) + ' بـ ' + fmt(byCat[top[0]]) + ' ⃄.\n1. حط له سقف أقل بـ ٢٠٪، وأنا أنبهك لما توصل ٨٠٪ منه.\n2. ' + (byCat.food ? 'التوصيل كلفك ' + fmt(byCat.food) + ' ⃄، جرّب يومين بالأسبوع بدون طلبات.' : 'راجع الاشتراكات والمصاريف الصغيرة المتكررة.') + '\n3. ' + (byCat.gov ? 'المخالفات ' + fmt(byCat.gov) + ' ⃄، مصروف ممكن يختفي كامل.' : 'أي شراء فوق ٢٠ ⃄ خله ينتظر ٢٤ ساعة قبل لا تشتريه.');
    }
    return 'هالشهر صرفت ' + fmt(spent) + ' ⃄ متغير، و' + fmt(fixed) + ' ثابت وأقساط' + (income > 0 ? '، من دخل ' + fmt(income) + '.' : '. دخلك مو مسجل للحين.') + (top.length ? '\nأكثر فئة: ' + catName(top[0]) + '.' : '') + '\nتقدر تسألني: رتّب لي ميزانية، أو كيف أتخلص من ديوني، أو وين أقدر أوفر.';
  }
  componentDidMount() {
    this.timers.push(setTimeout(() => this.checkDueInst(), 1200));
    this.dueIv = setInterval(() => this.checkDueInst(), 20 * 60000);
    try {
      if (window.claude && typeof window.claude.use === 'function') {
        window.claude.use('sample').then((s) => { if (s) { this.sampleFn = s; this.setState({ aiReady: true }); } }).catch(() => {});
      }
    } catch (e) {}
  }
  componentDidUpdate(pp, ps) {
    try { if (ps.screen !== this.state.screen && this.scrollEl) this.scrollEl.scrollTop = 0; } catch (e) {}
    try { if (ps.txns !== this.state.txns && (this.state.subs || []).length) this.syncSubs(); } catch (e) {}
    try {
      if (this.state.screen === 'advisor' && this.endEl && (ps.chat !== this.state.chat || ps.screen !== 'advisor')) this.endEl.scrollIntoView({ block: 'end', behavior: 'smooth' });
    } catch (e) {}
  }
  setMsg(idx, text, done) {
    const chat = this.state.chat.slice();
    if (!chat[idx]) return;
    chat[idx] = Object.assign({}, chat[idx], { text: cleanMd(text), thinking: !done && !text });
    this.setState(done ? { chat, chatBusy: false } : { chat });
  }
  async ask(q) {
    const text = (q || '').trim();
    if (!text || this.state.chatBusy) return;
    const history = this.state.chat.filter((m) => m.text).slice(-10).map((m) => ({ role: m.role, content: m.text }));
    const chat = this.state.chat.concat([{ role: 'user', text }, { role: 'assistant', text: '', thinking: true, actions: [] }]);
    const idx = chat.length - 1;
    this.setState({ chat, chatInput: '', chatBusy: true });
    const local = () => this.localAnswer(text);
    if (!this.sampleFn) { this.timers.push(setTimeout(() => this.setMsg(idx, local(), true), 700)); return; }
    let canTools = false;
    try { const lim = await this.sampleFn.limits(); canTools = !!(lim && lim.tools); } catch (e) {}
    const turns = [{ role: 'user', content: ADVISOR_RULES + (canTools ? AGENT_TOOLS_NOTE : '') + '\n\nبيانات المستخدم الحالية:\n' + this.contextText() }].concat(history, [{ role: 'user', content: text }]);
    const ctl = new AbortController();
    this.ctl = ctl;
    const opts = { cache: false, signal: ctl.signal, onText: (u) => this.setMsg(idx, u.text, false) };
    if (canTools) opts.tools = this.agentTools(idx);
    try {
      const r = await this.sampleFn(turns, opts);
      this.setMsg(idx, r.text, true);
    } catch (e) {
      const code = e && e.code;
      if (code === 'cancelled') { this.setMsg(idx, (e && e.text) || 'وقفت.', true); return; }
      if (['not_granted', 'sampling_disabled', 'not_declared', 'capability_disabled', 'capability_removed'].indexOf(code) !== -1) { this.sampleFn = null; this.setState({ aiReady: false }); }
      this.setMsg(idx, (e && e.text) ? e.text : local(), true);
    }
  }
  // ===== الإعدادات والأمان والنسخ =====
  tt() { return T[this.state.lang] || T.ar; }
  saveProfile() {
    const pf = this.state.pf;
    if (!pf.name.trim()) { this.say(this.state.lang === 'en' ? 'Enter your name' : 'اكتب اسمك'); return; }
    if (!validEmail(pf.email)) { this.say(this.state.lang === 'en' ? 'Enter a valid email' : 'اكتب إيميل صحيح'); return; }
    this.setState({ profile: { name: pf.name.trim(), email: pf.email.trim().toLowerCase(), guest: false, photo: this.state.profile.photo || '' }, obStep: this.state.screen === 'onboard' ? 2 : this.state.obStep, modal: null });
  }
  pressKey(k) {
    const st = this.state;
    if (k === 'del') { this.setState({ pinBuf: st.pinBuf.slice(0, -1), pinErr: false }); return; }
    if (k === 'bio') { this.bioUnlock(); return; }
    if (st.pinBuf.length >= 4) return;
    const buf = st.pinBuf + k;
    this.setState({ pinBuf: buf, pinErr: false });
    if (buf.length === 4) this.timers.push(setTimeout(() => this.pinComplete(buf), 180));
  }
  pinComplete(buf) {
    const st = this.state;
    if (st.locked) {
      if (buf === st.security.pin) this.setState({ locked: false, pinBuf: '' });
      else this.setState({ pinErr: true, pinBuf: '' });
      return;
    }
    if (st.modal && st.modal.type === 'pin') {
      if (st.pinStage === 'first') this.setState({ pinStage: 'confirm', pinFirst: buf, pinBuf: '' });
      else if (buf === st.pinFirst) {
        this.setState({ security: Object.assign({}, st.security, { pin: buf }), modal: null, pinBuf: '', pinStage: null, pinFirst: '' });
        this.say(this.tt().pinSaved);
      } else this.setState({ pinErr: true, pinBuf: '', pinStage: 'first', pinFirst: '' });
    }
  }
  bioUnlock() {
    this.setState({ bioScanning: true });
    this.timers.push(setTimeout(() => this.setState({ locked: false, pinBuf: '', bioScanning: false }), 1000));
  }
  togglePin() {
    const st = this.state;
    if (st.security.pin) { this.setState({ security: { pin: '', bio: false } }); this.say(this.tt().pinOff); }
    else this.setState({ modal: { type: 'pin' }, pinStage: 'first', pinBuf: '', pinErr: false, pinFirst: '' });
  }
  toggleBio() {
    const st = this.state;
    if (!st.security.pin) { this.say(this.tt().biometricNeedPin); return; }
    this.setState({ security: Object.assign({}, st.security, { bio: !st.security.bio }) });
  }
  dataSnapshot() {
    const st = this.state;
    const o = { app: 'masarifi', v: 1, at: Date.now() };
    DATA_KEYS.forEach((k) => { o[k] = st[k]; });
    return o;
  }
  restoreData(o) {
    if (!o || o.app !== 'masarifi') { this.say(this.state.lang === 'en' ? 'This is not a Masarifi backup file' : 'هذا مو ملف نسخة احتياطية من مصاريفي'); return; }
    const patch = { screen: 'home', modal: null };
    DATA_KEYS.forEach((k) => { if (o[k] !== undefined) patch[k] = o[k]; });
    patch.fixed = [];
    this.setState(patch);
    this.say(this.state.lang === 'en' ? 'Data restored' : 'رجعت بياناتك من النسخة الاحتياطية');
  }
  needAccount() {
    if (!this.state.profile.guest) return false;
    this.setState({ modal: { type: 'profile' }, pf: { name: '', email: '' } });
    this.say('هذي تحتاج حساب. سجّل بإيميلك، ما ياخذ دقيقة');
    return true;
  }
  backupDrive() {
    if (this.needAccount()) return;
    const b = this.state.backup;
    if (b.busy) return;
    this.setState({ backup: Object.assign({}, b, { busy: true }) });
    this.timers.push(setTimeout(() => {
      this.setState({ backup: Object.assign({}, this.state.backup, { busy: false, last: Date.now(), snapshot: JSON.stringify(this.dataSnapshot()) }) });
      this.say(this.state.lang === 'en' ? 'Backed up to Google Drive' : 'انحفظت نسخة في Google Drive');
    }, 1600));
  }
  restoreDrive() {
    const s = this.state.backup.snapshot;
    if (!s) { this.setState({ modal: null }); this.say(this.state.lang === 'en' ? 'No backup found on Drive' : 'ما لقيت نسخة في Drive'); return; }
    this.restoreData(JSON.parse(s));
  }
  async exportFile() {
    const d = new Date();
    const name = 'masarifi-backup-' + d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + '.json';
    const json = JSON.stringify(this.dataSnapshot(), null, 2);
    let dl = null;
    try { dl = (window.claude && typeof window.claude.use === 'function') ? await window.claude.use('downloads') : null; } catch (e) { dl = null; }
    if (!dl) { this.say(this.state.lang === 'en' ? 'Export works in the installed app' : 'التصدير يشتغل في التطبيق المثبت على الجوال'); return; }
    try { await dl.save({ filename: name, data: json }); this.say(this.state.lang === 'en' ? 'Backup file saved' : 'انحفظ ملف النسخة الاحتياطية'); }
    catch (e) { if (!e || e.code !== 'declined') this.say(this.state.lang === 'en' ? 'Could not save the file' : 'ما قدرت أحفظ الملف'); }
  }
  restoreFromFile(e) {
    const f = e && e.target && e.target.files && e.target.files[0];
    if (!f) return;
    const r = new FileReader();
    r.onload = () => { try { this.restoreData(JSON.parse(String(r.result))); } catch (x) { this.say(this.state.lang === 'en' ? 'Unreadable file' : 'ما قدرت أقرأ الملف'); } };
    r.readAsText(f);
    try { e.target.value = ''; } catch (x) {}
  }
  pickPhoto() { const el = document.getElementById('pfphoto'); if (el) el.click(); }
  // يصغّر الصورة لمربع ٢٥٦ ويحفظها مع الملف الشخصي
  setPhoto(src) {
    const img = new Image();
    img.onload = () => {
      try {
        const S = 256, c = document.createElement('canvas');
        c.width = S; c.height = S;
        const m = Math.min(img.width, img.height);
        c.getContext('2d').drawImage(img, (img.width - m) / 2, (img.height - m) / 2, m, m, 0, 0, S, S);
        this.setState({ profile: Object.assign({}, this.state.profile, { photo: c.toDataURL('image/jpeg', 0.85) }) });
        this.say(this.state.lang === 'en' ? 'Photo updated' : 'تحدّثت صورتك');
      } catch (e) { this.say('ما قدرت أستخدم هالصورة'); }
    };
    img.onerror = () => this.say('ما قدرت أفتح الصورة');
    img.src = src;
  }
  signOut() {
    const st = this.state;
    const keep = { lang: st.lang, theme: st.theme, mode: st.mode, perms: st.perms, tourDone: true, obDone: true };
    this.nk = {};
    this.setState(Object.assign(makeInitialState(), keep, { screen: 'home', profile: { name: '', email: '', guest: true }, aiReady: !!this.sampleFn, modal: null }));
    this.say(this.tt().signedOut);
  }
  deleteAll() {
    const t = this.tt();
    if (this.state.delText.trim() !== t.deleteWord) return;
    this.nk = {};
    this.setState(Object.assign(makeInitialState(), { aiReady: !!this.sampleFn }));
  }
  inviteShare() {
    if (this.needAccount()) return;
    const st = this.state;
    const email = st.shareEmail.trim().toLowerCase();
    if (!validEmail(email)) { this.say(st.lang === 'en' ? 'Enter a valid email' : 'اكتب إيميل صحيح'); return; }
    if (email === st.profile.email) { this.say(st.lang === 'en' ? "That's your own email" : 'هذا إيميلك أنت'); return; }
    if (st.shares.some((x) => x.email === email)) { this.say(st.lang === 'en' ? 'Already shared' : 'مشارك معه من قبل'); return; }
    this.setState({ shares: st.shares.concat([{ id: this.newId(), email, role: st.shareRole }]), shareEmail: '' });
    this.say((st.lang === 'en' ? 'Invite sent to ' : 'انرسلت دعوة إلى ') + email);
  }
  openShareTrip() {
    const st = this.state;
    if (!st.trip) return;
    if (!st.trip.shareCode && !st.trip.cloudKey) this.setState({ trip: Object.assign({}, st.trip, { shareCode: makeTripCode() }) });
    this.setState({ modal: { type: 'shareTrip' } });
  }
  tripShareText() {
    const st = this.state, tr = st.trip || {};
    const code = tr.cloudKey || tr.shareCode || '';
    return st.lang === 'en' ? 'Join my trip to ' + tr.dest + ' on Masarifi. Open Travel, tap "Join a trip" and enter: ' + code : 'انضم لرحلتي إلى ' + tr.dest + ' في تطبيق مصاريفي. افتح صفحة السفر واكتب الرمز في "انضم لرحلة": ' + code;
  }
  shareTripCode() {
    const txt = this.tripShareText();
    try { if (navigator.share) { navigator.share({ text: txt }).catch(() => {}); return; } } catch (e) {}
    this.copyTripCode();
  }
  copyTripCode() {
    const st = this.state, code = (st.trip && (st.trip.cloudKey || st.trip.shareCode)) || '';
    try { navigator.clipboard.writeText(code); } catch (e) {}
    this.say(this.tt().codeCopied);
  }
  stopShareTrip() { if (this.state.trip) this.setState({ trip: Object.assign({}, this.state.trip, { cloudKey: null }), modal: null }); }
  joinTrip() {
    const code = (this.state.joinCode || '').trim();
    if (code.length < 6) { this.say(this.state.lang === 'en' ? 'Enter the full code' : 'اكتب الرمز كامل'); return; }
    this.say(this.state.lang === 'en' ? 'Joining trips works in the phone app' : 'الانضمام للرحلات يشتغل في التطبيق على الجوال');
  }
  addTripMember() {
    if (this.needAccount()) return;
    const st = this.state;
    const email = st.tripEmail.trim().toLowerCase();
    if (!st.trip) return;
    if (!validEmail(email)) { this.say(st.lang === 'en' ? 'Enter a valid email' : 'اكتب إيميل صحيح'); return; }
    const members = st.trip.members || [];
    if (members.indexOf(email) !== -1) return;
    this.setState({ trip: Object.assign({}, st.trip, { members: members.concat([email]) }), tripEmail: '' });
    this.say((st.lang === 'en' ? 'Trip shared with ' : 'انشاركت الرحلة مع ') + email);
  }
  openCatEdit(id) {
    const c = this.state.cats.find((x) => x.id === id);
    if (!c) return;
    this.setState({ catEdit: id, catForm: { name: c.ar, color: c.color, bg: c.bg, ic: c.ic } });
  }
  saveCat() {
    const st = this.state;
    const f = st.catForm;
    const name = f.name.trim();
    if (!name) { this.say(st.lang === 'en' ? 'Enter a name' : 'اكتب اسم الفئة'); return; }
    let cats;
    if (st.catEdit === 'new') cats = st.cats.concat([{ id: 'c' + this.newId() + '_' + Date.now().toString(36), ar: name, ic: f.ic, color: f.color, bg: f.bg, custom: true }]);
    else cats = st.cats.map((c) => (c.id === st.catEdit ? Object.assign({}, c, { ar: name, ic: f.ic, color: f.color, bg: f.bg }) : c));
    this.setState({ cats, catEdit: null });
    this.say(st.lang === 'en' ? 'Category saved' : 'انحفظت الفئة');
  }
  deleteCat() {
    const st = this.state;
    const id = st.catEdit;
    if (!id || id === 'new' || id === 'other') return;
    const learned = {};
    Object.keys(st.learned).forEach((k) => { learned[k] = st.learned[k] === id ? 'other' : st.learned[k]; });
    const budgets = Object.assign({}, st.budgets);
    delete budgets[id];
    this.setState({
      cats: st.cats.filter((c) => c.id !== id), catEdit: null, learned, budgets,
      txns: st.txns.map((t) => (t.catId === id ? Object.assign({}, t, { catId: 'other' }) : t)),
      pending: st.pending.map((p) => (p.catId === id ? Object.assign({}, p, { catId: 'other' }) : p))
    });
    this.say(st.lang === 'en' ? 'Category deleted; its expenses moved to Other' : 'انحذفت الفئة، ومصاريفها انتقلت لـ "أخرى"');
  }
  measureTour(sel, key) {
    try {
      const layer = document.querySelector('[data-tourlayer]');
      const el = document.querySelector(sel);
      if (!layer || !el) { this.setState({ tourM: { k: key, miss: true, x: 0, y: 0, w: 0, h: 0, W: 390, H: 844 } }); return; }
      const b = layer.getBoundingClientRect(), r = el.getBoundingClientRect();
      if (!b.width) return;
      const sc = b.width / (layer.offsetWidth || b.width);
      this.setState({ tourM: { k: key, x: Math.round((r.left - b.left) / sc), y: Math.round((r.top - b.top) / sc), w: Math.round(r.width / sc), h: Math.round(r.height / sc), W: Math.round(b.width / sc), H: Math.round(b.height / sc) } });
    } catch (e) {}
  }
  tourNext() {
    const n = (this.state.tour || 0) + 1;
    if (n >= 8) this.setState({ tour: null, tourDone: true });
    else this.setState({ tour: n });
  }
  tripFromSms() {
    const p = parseSms(this.state.smsText, this.state.learned, this.state.accounts);
    const info = p ? countryByCode(p.country) : null;
    this.setState({ tf: { dest: info ? info.ar : '', cur: info ? info.cur : null, budget: '', manual: false, from: '', to: '' }, tfPick: false, screen: 'travel' });
    this.say('جهّزت لك الرحلة، راجعها واضغط ابدأ');
  }
  saveManual() {
    const a = parseFloat(this.state.mAmt);
    if (!(a > 0)) { this.say('اكتب المبلغ'); return; }
    if (!this.state.mCat) { this.say('اختر الفئة'); return; }
    const t = todayLabels();
    const pay = this.state.mPay;
    const isCash = pay === 'cash';
    const pacc = pay && !isCash ? this.state.accounts.find((x) => x.id === pay) : null;
    this.addTx(Object.assign({ amount: a, merchant: this.state.mName.trim() || this.catAr(this.state.mCat), catId: this.state.mCat, dateShort: t.dateShort, src: 'manual', cash: isCash, seasonId: this.seasonPick(this.state.mCat, this.state.mSeason) }, pacc ? { last4: pacc.last4 } : {}), 'تم، انسجل ' + fmt(a) + ' ⃄' + (pacc ? ' من ' + (pacc.name || bankOf(pacc.bank).ar) : (isCash ? ' كاش' : '')));
    if (isCash) this.setState({ accounts: this.withCash(this.state.accounts, -a) });
    if (pacc) this.setState({ accounts: this.state.accounts.map((x) => (x.id === pacc.id ? Object.assign({}, x, { balance: Math.round((x.type === 'card' ? x.balance + a : x.balance - a) * 1000) / 1000 }) : x)) });
    this.setState({ mAmt: '', mName: '', mCat: null, mCash: false, mPay: null, mSeason: null, screen: 'home' });
  }
  scan() {
    if (this.state.rStage === 'scan') return;
    this.setState({ rStage: 'scan' });
    this.timers.push(setTimeout(() => this.setState({ rStage: 'done' }), 1900));
  }
  saveReceipt() {
    this.addTx({ amount: RECEIPT.total, merchant: RECEIPT.store, catId: 'grocery', dateShort: todayLabels().dateShort, src: 'receipt', seasonId: this.seasonPick('grocery', this.state.mSeason) }, 'انسجلت الفاتورة في البقالة');
    this.setState({ rStage: 'idle', screen: 'home', mSeason: null });
  }
  startTrip() {
    const tf = this.state.tf;
    if (!tf.dest.trim()) { this.say('اكتب الوجهة'); return; }
    if (!tf.cur) { this.say('اختر عملة البلد'); return; }
    if (tf.from && tf.to && tf.to < tf.from) { this.say('تاريخ النهاية قبل البداية'); return; }
    this.setState({ trip: { id: this.newId(), dest: tf.dest.trim(), cur: tf.cur, budget: parseFloat(tf.budget) || 0, from: tf.from || '', to: tf.to || '', active: true, members: [] }, tf: { dest: '', cur: null, budget: '', manual: false, from: '', to: '' }, tfPick: false });
    this.say('بدأت الرحلة، رحلة سعيدة');
  }

  endTrip() {
    const tr = this.state.trip;
    if (!tr) return;
    const done = Object.assign({}, tr, { active: false, endedAt: Date.now(), to: tr.to || new Date().toISOString().slice(0, 10) });
    this.setState({ trip: null, trips: this.state.trips.concat([done]), screen: 'trip', tripView: tr.id, tripBackScreen: 'travel' });
    this.say('الحمدلله على السلامة، هذا ملخص رحلتك');
  }
  openTrip(id) {
    this.setState({ screen: 'trip', tripView: id, tripBackScreen: this.state.screen === 'trip' ? this.state.tripBackScreen : this.state.screen });
  }

  addIncome() {
    const a = parseFloat(this.state.inAmt);
    if (!this.state.inName.trim() || !(a > 0)) { this.say('اكتب الاسم والمبلغ'); return; }
    const id = this.newId();
    const once = this.state.inOnce;
    let day = null;
    if (!once) { const p = String(this.state.inDate || '').split('-').map(Number); if (p.length !== 3 || !p[0]) { this.say('حدد تاريخ التكرار الشهري'); return; } day = p[2]; }
    this.setState({ income: this.state.income.concat([{ id, name: this.state.inName.trim(), amount: a, once, day, ts: Date.now(), dateShort: todayLabels().dateShort }]), inName: '', inAmt: '', inDate: '' });
    this.say(once ? 'انضاف الدخل' : 'انضاف كدخل يتكرر كل شهر يوم ' + day);
  }
  addFixed() {
    const a = parseFloat(this.state.fxAmt);
    if (!this.state.fxName.trim() || !(a > 0)) { this.say('اكتب الاسم والمبلغ'); return; }
    const id = this.newId();
    const day = parseInt(this.state.fxDay, 10);
    this.setState({ fixed: this.state.fixed.concat([{ id, name: this.state.fxName.trim(), amount: a, day: day >= 1 && day <= 31 ? day : null }]), fxName: '', fxAmt: '', fxDay: '' });
    this.say('انضاف المصروف الثابت، وبذكّرك قبل موعده');
  }

  // ===== تفاصيل العمليات والبحث =====
  seasonId() { const s = this.state.seasons.find((x) => x.active); return s ? s.id : null; }
  seasonName() { const s = this.state.seasons.find((x) => x.active); return s ? s.name : ''; }
  seasonDefault(catId) { return !SEASON_OFF[catId]; }
  seasonPick(catId, override) { const id = this.seasonId(); if (!id) return null; const on = override == null ? this.seasonDefault(catId) : !!override; return on ? id : null; }
  togglePendSeason(pid) { const st = this.state; const p = st.pending.find((x) => x.id === pid); if (!p) return; const cur = p.season == null ? this.seasonDefault(p.catId) : p.season; this.setState({ pending: st.pending.map((x) => (x.id === pid ? Object.assign({}, x, { season: !cur }) : x)) }); }
  openTx(id) {
    const t = this.state.txns.find((x) => x.id === id);
    if (!t) return;
    this.setState({ modal: { type: 'tx' }, txEdit: { id, amount: String(t.amount), merchant: t.merchant, catId: t.catId, note: t.note || '', splits: t.splits ? t.splits.map((x) => ({ catId: x.catId, amount: String(x.amount) })) : null, confirmDel: false, seasonOn: !!t.seasonId } });
  }
  setTxe(patch) { this.setState({ txEdit: Object.assign({}, this.state.txEdit, patch) }); }
  saveTx() {
    const st = this.state, e = st.txEdit;
    const t = e ? st.txns.find((x) => x.id === e.id) : null;
    if (!t) return;
    const amount = parseFloat(e.amount);
    if (!(amount > 0)) { this.say('اكتب مبلغ صحيح'); return; }
    let splits = null, catId = e.catId;
    if (e.splits) {
      splits = e.splits.map((x) => ({ catId: x.catId, amount: parseFloat(x.amount) || 0 })).filter((x) => x.amount > 0);
      const sum = splits.reduce((a, x) => a + x.amount, 0);
      if (splits.length < 2) { this.say('التقسيم يبي جزئين على الأقل'); return; }
      if (Math.abs(sum - amount) > 0.0015) { this.say('مجموع الأجزاء لازم يساوي ' + fmt(amount)); return; }
      catId = splits.slice().sort((a, b) => b.amount - a.amount)[0].catId;
    }
    const learned = Object.assign({}, st.learned);
    if (t.src === 'sms' && !splits && catId !== t.catId && CATS.some((c) => c.id === catId)) learned[t.merchant.split(' · ')[0].toLowerCase()] = catId;
    this.setState({ txns: st.txns.map((x) => (x.id === e.id ? Object.assign({}, x, { amount, merchant: e.merchant.trim() || x.merchant, catId, note: e.note.trim(), splits, seasonId: e.seasonOn ? (x.seasonId || this.seasonId()) : null }) : x)), learned, modal: null, txEdit: null });
    this.say(splits ? 'انحفظت، ومقسّمة على ' + splits.length + ' فئات' : 'انحفظت. الفئة صارت: ' + this.catAr(catId));
  }
  deleteTx() {
    const st = this.state, e = st.txEdit;
    if (!e) return;
    if (!e.confirmDel) { this.setTxe({ confirmDel: true }); return; }
    this.setState({ txns: st.txns.filter((x) => x.id !== e.id), modal: null, txEdit: null });
    this.say('انحذفت العملية');
  }
  toggleSplit() {
    const e = this.state.txEdit;
    if (e.splits) { this.setTxe({ splits: null }); return; }
    const amt = parseFloat(e.amount) || 0;
    const half = Math.round(amt / 2 * 1000) / 1000;
    const other = (CATS.find((c) => c.id !== e.catId) || CATS[0]).id;
    this.setTxe({ splits: [{ catId: CATS.some((c) => c.id === e.catId) ? e.catId : 'other', amount: String(half) }, { catId: other, amount: String(Math.round((amt - half) * 1000) / 1000) }] });
  }
  openTxList(cat, tripId) {
    const st = this.state;
    this.setState({ screen: 'txlist', txBack: st.screen === 'txlist' ? st.txBack : st.screen, txFilter: { q: '', cat: cat || null, acc: null, period: 'cycle', tripId: tripId || null }, budInput: cat && st.budgets[cat] ? String(st.budgets[cat]) : '' });
  }

  saveCatBudget() {
    const cat = this.state.txFilter.cat;
    if (!cat) return;
    const v = parseFloat(this.state.budInput);
    const budgets = Object.assign({}, this.state.budgets);
    if (v > 0) budgets[cat] = Math.round(v * 1000) / 1000; else delete budgets[cat];
    this.setState({ budgets });
    this.say(v > 0 ? 'تمام، سقف ' + this.catAr(cat) + ' ' + fmt(v) + ' ⃄، وبنبهك إذا قرّبت منه' : 'شلت السقف');
  }
  // ===== النقد، المرتجعات، التكرار، الثابت =====
  withCash(accounts, delta) {
    let found = false;
    const out = accounts.map((a) => { if (a.type === 'cash') { found = true; return Object.assign({}, a, { balance: Math.round((a.balance + delta) * 1000) / 1000 }); } return a; });
    if (!found) out.push({ id: this.newId(), bank: 'محفظة النقد', type: 'cash', last4: '', balance: Math.round(delta * 1000) / 1000, watch: true });
    return out;
  }
  cashIn(pid) {
    const st = this.state;
    const p = st.pending.find((x) => x.id === pid);
    if (!p) return;
    this.setState({ pending: st.pending.filter((x) => x.id !== pid), accounts: this.withCash(this.balUpdated(st.accounts, p.last4, p.balance), p.amount) });
    this.say('حطيت ' + fmt(p.amount) + ' ⃄ في محفظة النقد');
  }
  atmAsExpense(pid) {
    this.setState({ pending: this.state.pending.map((x) => (x.id === pid ? Object.assign({}, x, { kind: 'unclear', merchant: 'سحب نقدي', note: 'تمام، وش اشتريت فيها؟' }) : x)) });
  }
  approveFixed(pid) {
    const st = this.state;
    const p = st.pending.find((x) => x.id === pid);
    if (!p || !p.fixedMatch) return;
    const fm = p.fixedMatch;
    const tx = { ts: Date.now(), id: p.id, amount: p.amount, merchant: fm.name, catId: fm.kind === 'inst' ? 'inst' : 'fixed', dateShort: p.dateShort, src: 'sms', trip: false, cycle: st.cycle, ts: p.ts || Date.now(), last4: p.last4, fixedPaid: true };
    const patch = { pending: st.pending.filter((x) => x.id !== pid), txns: [tx].concat(st.txns), accounts: this.balUpdated(st.accounts, p.last4, p.balance) };
    if (fm.kind === 'inst') patch.installments = st.installments.map((x) => {
      if (x.id !== fm.id) return x;
      const y = Object.assign({}, x, { paid: Math.min(x.total, x.paid + p.amount), lastPaid: Date.now() });
      if (x.dueDay && x.nextDue && x.nextDue - Date.now() < 15 * DAY_MS) y.nextDue = nextDueAfter(x.nextDue, x.dueDay);
      return y;
    });
    this.setState(patch);
    this.say(fm.kind === 'inst' ? 'تمام، هذا قسط ' + fm.name + '. قرّبنا من النهاية' : 'تمام، هذا ' + fm.name + '. محسوب من الثابت، فما ينحسب مرتين');
  }
  linkRefund(pid) {
    const st = this.state;
    const p = st.pending.find((x) => x.id === pid);
    if (!p) return;
    const txns = st.txns.map((t) => (t.id === p.refundOf ? Object.assign({}, t, { origAmount: t.origAmount || t.amount, amount: Math.max(0, Math.round((t.amount - p.amount) * 1000) / 1000), refunded: Math.round(((t.refunded || 0) + p.amount) * 1000) / 1000 }) : t));
    this.setState({ txns, pending: st.pending.filter((x) => x.id !== pid), accounts: this.balUpdated(st.accounts, p.last4, p.balance) });
    this.say('رجعت لك ' + fmt(p.amount) + ' ⃄، ونقصتها من العملية الأصلية');
  }
  confirmDup(pid) {
    const st = this.state;
    const p = st.pending.find((x) => x.id === pid);
    if (!p) return;
    const patch = { pending: st.pending.filter((x) => x.id !== pid), accounts: this.balUpdated(st.accounts, p.last4, p.balance) };
    if (p.dupKind === 'receipt') patch.txns = st.txns.map((t) => (t.id === p.dupOf ? Object.assign({}, t, { linked: true, receipt: true, last4: p.last4 }) : t));
    this.setState(patch);
    this.say(p.dupKind === 'receipt' ? 'ربطت الرسالة بالفاتورة، وما حسبتها مرتين' : 'شلت النسخة المكررة');
  }
  notDup(pid) { this.setState({ pending: this.state.pending.map((x) => (x.id === pid ? Object.assign({}, x, { dupKind: null, dupOf: null }) : x)) }); }
  receiptMatch() {
    const st = this.state;
    const now = Date.now();
    const tx = st.txns.find((t) => t.src === 'sms' && !t.receipt && Math.abs(t.amount - RECEIPT.total) < 0.0005 && Math.abs(now - (t.ts || now)) < 4 * 86400000);
    if (tx) return { kind: 'tx', item: tx };
    const pd = st.pending.find((x) => ['suggest', 'unclear'].indexOf(x.kind) !== -1 && Math.abs(x.amount - RECEIPT.total) < 0.0005);
    return pd ? { kind: 'pending', item: pd } : null;
  }
  linkReceipt() {
    const st = this.state;
    const m = this.receiptMatch();
    if (!m) return;
    if (m.kind === 'tx') {
      this.setState({ txns: st.txns.map((t) => (t.id === m.item.id ? Object.assign({}, t, { receipt: true }) : t)), rStage: 'idle', screen: 'home' });
    } else {
      const p = m.item;
      const tx = { ts: Date.now(), id: p.id, amount: p.amount, merchant: p.merchant, catId: p.catId || 'grocery', dateShort: p.dateShort, src: 'sms', trip: this.tripIdNow(), cycle: st.cycle, ts: p.ts || Date.now(), last4: p.last4, receipt: true, seasonId: this.seasonPick(p.catId || 'grocery', this.state.mSeason) };
      this.setState({ pending: st.pending.filter((x) => x.id !== p.id), txns: [tx].concat(st.txns), accounts: this.balUpdated(st.accounts, p.last4, p.balance), rStage: 'idle', screen: 'home', mSeason: null });
    }
    this.say('ربطت الفاتورة بالعملية، وما حسبتها مرتين');
  }
  // ===== المواسم والتقارير =====
  startSeason() {
    const st = this.state;
    const f = st.seasonForm;
    const b = parseFloat(f.budget);
    if (!f.name.trim() || !(b > 0)) { this.say('اكتب اسم الموسم والميزانية'); return; }
    this.setState({ seasons: st.seasons.map((x) => Object.assign({}, x, { active: false })).concat([{ id: this.newId(), name: f.name.trim(), budget: b, active: true }]), seasonForm: { name: '', budget: '' } });
    this.say('بدأت ميزانية ' + f.name.trim() + '. كل مصروف من الحين ينحسب عليها');
  }
  endSeason(id) {
    this.setState({ seasons: this.state.seasons.map((x) => (x.id === id ? Object.assign({}, x, { active: false }) : x)) });
    this.say('خلص الموسم');
  }
  buildReport(cycleNum, title) {
    const st = this.state;
    const tx = st.txns.filter((t) => t.cycle === cycleNum && !t.trip);
    const byCat = {};
    tx.filter((t) => !t.fixedPaid).forEach((t) => addParts(byCat, t));
    const varSum = tx.filter((t) => !t.fixedPaid).reduce((a, t) => a + t.amount, 0);
    const fixed = this.plannedFixed();
    if (fixed > 0) byCat.fixed = fixed;
    const spent = varSum + fixed;
    const income = st.income.reduce((a, x) => a + x.amount, 0);
    const merch = {};
    tx.forEach((t) => { const k = t.merchant.split(' · ')[0]; merch[k] = merch[k] || { name: k, amount: 0, count: 0 }; merch[k].amount += t.amount; merch[k].count++; });
    const catName = (id) => (CATS.find((c) => c.id === id) || (id === 'fixed' ? FIXED_CAT : (id === 'inst' ? INST_CAT : { ar: id }))).ar;
    return {
      cycle: cycleNum, title, spent, income, saved: Math.max(0, income - spent), count: tx.length, byCat,
      top: Object.keys(merch).map((k) => merch[k]).sort((a, b) => b.amount - a.amount).slice(0, 5),
      rows: tx.map((t) => ({ date: t.dateShort || '', merchant: t.merchant, cat: catName(t.catId), amount: t.amount, note: t.note || '' }))
    };
  }
  async exportExcel() {
    const st = this.state;
    const r = (!st.reportId || st.reportId === 'current') ? this.buildReport(st.cycle, 'تقرير هالشهر') : st.reports.find((x) => x.id === st.reportId);
    if (!r) return;
    const esc = (v) => '"' + String(v == null ? '' : v).replace(/"/g, '""') + '"';
    const lines = [['التاريخ', 'الجهة', 'الفئة', 'المبلغ (ر.ع)', 'ملاحظة'].map(esc).join(',')].concat(r.rows.map((x) => [x.date, x.merchant, x.cat, fmt(x.amount), x.note].map(esc).join(',')));
    const csv = '﻿' + lines.join('\r\n');
    let dl = null;
    try { dl = (window.claude && typeof window.claude.use === 'function') ? await window.claude.use('downloads') : null; } catch (e) { dl = null; }
    if (!dl) { this.say('التصدير يشتغل في التطبيق المثبت على الجوال'); return; }
    try { await dl.save({ filename: 'masarifi-report.csv', data: csv }); this.say('انحفظ التقرير، افتحه بـ Excel'); }
    catch (e) { if (!e || e.code !== 'declined') this.say('ما قدرت أحفظ الملف'); }
  }


  // ===== التقارير =====
  rpRange() {
    const st = this.state;
    const rp = st.rp;
    const now = Date.now();
    const today1 = dayStart(now) + DAY_MS;
    let start, end, label, prevStart, prevEnd, prevLabel, current = false;
    if (rp.mode === 'month') {
      start = rp.month || monthStart(now);
      const full = addMonths(start, 1);
      end = Math.min(full, today1);
      current = full > now;
      prevStart = addMonths(start, -1);
      prevEnd = prevStart + (end - start);
      label = monthLabel(start) + (current ? ' · لين اليوم' : '');
      prevLabel = current ? 'نفس الفترة من ' + AR_M[new Date(prevStart).getMonth()] : AR_M[new Date(prevStart).getMonth()];
    } else if (rp.mode === 'year') {
      const y = rp.year || new Date(now).getFullYear();
      start = new Date(y, 0, 1).getTime();
      const full = new Date(y + 1, 0, 1).getTime();
      end = Math.min(full, today1);
      current = full > now;
      prevStart = new Date(y - 1, 0, 1).getTime();
      prevEnd = prevStart + (end - start);
      label = 'سنة ' + y + (current ? ' · لين اليوم' : '');
      prevLabel = current ? 'نفس الفترة من ' + (y - 1) : String(y - 1);
    } else if (rp.mode === 'custom') {
      let f = parseIso(rp.from), t = parseIso(rp.to);
      if (f == null) f = dayStart(now) - 29 * DAY_MS;
      if (t == null) t = dayStart(now);
      if (t < f) { const x = f; f = t; t = x; }
      start = f; end = t + DAY_MS;
      current = end > now;
      prevEnd = start; prevStart = start - (end - start);
      label = dLongY(start) + ' – ' + dLongY(end - DAY_MS);
      prevLabel = 'الفترة اللي قبلها';
    } else {
      start = st.cycleStart; end = today1; current = true;
      prevStart = addMonths(start, -1); prevEnd = prevStart + (end - start);
      label = 'الشهر المالي · من ' + dLong(start) + ' لين اليوم';
      prevLabel = 'نفس الفترة من الشهر اللي قبل';
    }
    return { start, end, label, prevStart, prevEnd, prevLabel, current };
  }
  rpEntries(start, end, withTrips) {
    const st = this.state;
    const now = Date.now();
    const out = st.txns.filter((t) => {
      const ts = t.ts || now;
      if (ts < start || ts >= end) return false;
      if (t.trip && !withTrips) return false;
      if (t.fixedPaid && t.cycle === st.cycle) return false;
      return true;
    });
    if (start <= st.cycleStart + DAY_MS && end > now) {
      st.fixed.forEach((f) => out.push({ id: 'fx' + f.id, amount: f.amount, merchant: f.name, catId: 'fixed', ts: st.cycleStart, virtual: true }));
      st.installments.filter((x) => x.total - x.paid > 0.0005).forEach((x) => out.push({ id: 'in' + x.id, amount: Math.min(x.monthly, x.total - x.paid), merchant: x.name, catId: 'inst', ts: st.cycleStart, virtual: true }));
    }
    return out;
  }
  rpIncome(start, end) {
    const st = this.state;
    const now = Date.now();
    let sum = 0;
    st.income.forEach((x) => {
      if (x.once) { const ts = x.ts || now; if (ts >= start && ts < end) sum += x.amount; }
      else if (st.cycleStart >= start - DAY_MS && st.cycleStart < end) sum += x.amount;
    });
    (st.demoIncome || []).forEach((x) => { if (x.ts >= start && x.ts < end) sum += x.amount; });
    return sum;
  }
  openTxRange(o) {
    const st = this.state;
    this.setState({ screen: 'txlist', txBack: 'stats', txFilter: { q: o.q || '', cat: o.cat || null, acc: null, period: 'range', from: o.from, to: o.to, rangeLabel: o.label || '', withTrips: !!st.rpTrips }, budInput: '' });
  }
  setRp(patch) { this.setState({ rp: Object.assign({}, this.state.rp, patch), rpSel: null }); }
  addDemo() {
    const d = makeDemo(Date.now());
    const st = this.state;
    this.setState({ txns: st.txns.filter((t) => !t.demo).concat(d.txns), demoIncome: d.income, rpSel: null });
    this.say('تعبّت بيانات تجريبية لآخر ١٣ شهر');
  }
  clearDemo() {
    this.setState({ txns: this.state.txns.filter((t) => !t.demo), demoIncome: [], rpSel: null });
    this.say('انمسحت البيانات التجريبية');
  }
  exportPeriodPdf(R) { this.say('تصدير PDF يشتغل في التطبيق على الجوال'); }
  async exportPeriod(R) {
    const esc = (v) => '"' + String(v == null ? '' : v).replace(/"/g, '""') + '"';
    const row = (arr) => arr.map(esc).join(',');
    const lines = [row(['تقرير المصاريف', R.label]), row(['المصروف (ر.ع)', fmt(R.spent)]), row(['الدخل (ر.ع)', fmt(R.income)]), row(['الفرق (ر.ع)', fmt(R.income - R.spent)]), row(['عدد العمليات', R.count]), ''];
    lines.push(row(['الفئة', 'المبلغ (ر.ع)', 'النسبة', 'عدد العمليات']));
    R.cats.forEach((c) => lines.push(row([c.name, fmt(c.amount), c.pct + '%', c.count])));
    lines.push('');
    lines.push(row(['التاريخ', 'الوقت', 'الجهة', 'الفئة', 'المبلغ (ر.ع)', 'ملاحظة']));
    R.rows.forEach((t) => { const d = new Date(t.ts); const p = (n) => (n < 10 ? '0' : '') + n; lines.push(row([isoDay(t.ts), t.virtual ? '' : p(d.getHours()) + ':' + p(d.getMinutes()), t.merchant, t.cat, fmt(t.amount), (t.note || '') + (t.demo ? ' (تجريبي)' : '')])); });
    const csv = '﻿' + lines.join('\r\n');
    let dl = null;
    try { dl = (window.claude && typeof window.claude.use === 'function') ? await window.claude.use('downloads') : null; } catch (e) { dl = null; }
    if (!dl) { this.say('التصدير يشتغل في التطبيق المثبت على الجوال'); return; }
    try { await dl.save({ filename: 'masarifi-' + R.file + '.csv', data: csv }); this.say('انحفظ التقرير، افتحه بـ Excel'); }
    catch (e) { if (!e || e.code !== 'declined') this.say('ما قدرت أحفظ الملف'); }
  }
  buildRp(catMap, tobj) {
    const st = this.state;
    const now = Date.now();
    const R = this.rpRange();
    const withTrips = !!st.rpTrips;
    const E = this.rpEntries(R.start, R.end, withTrips);
    const firstData = st.txns.reduce((a, t) => Math.min(a, t.ts || now), now);
    const hasPrev = firstData <= R.prevStart + 3 * DAY_MS;
    const P = hasPrev ? this.rpEntries(R.prevStart, R.prevEnd, withTrips) : [];
    const spent = E.reduce((a, t) => a + t.amount, 0);
    const pSpent = P.reduce((a, t) => a + t.amount, 0);
    const income = this.rpIncome(R.start, R.end);
    const real = E.filter((t) => !t.virtual);
    const FIXK = { fixed: 1, inst: 1 };
    const flex = real.filter((t) => !FIXK[t.catId]);
    const effEnd = Math.min(R.end, dayStart(now) + DAY_MS);
    const days = Math.max(1, Math.round((effEnd - R.start) / DAY_MS));
    const catKey = (t) => (t.trip && withTrips ? 'trip' + t.trip : null);
    const groupCats = (list) => {
      const m = {}, cnt = {};
      list.forEach((t) => {
        const tk = catKey(t);
        if (tk) { m[tk] = (m[tk] || 0) + t.amount; cnt[tk] = (cnt[tk] || 0) + 1; return; }
        const parts = {}; addParts(parts, t);
        Object.keys(parts).forEach((k) => { m[k] = (m[k] || 0) + parts[k]; cnt[k] = (cnt[k] || 0) + 1; });
      });
      return { m, cnt };
    };
    const gc = groupCats(E), gp = groupCats(P);
    const catInfo = (k) => (k.indexOf('trip') === 0 ? { ar: 'رحلة ' + tobj(+k.slice(4)).dest, color: '#2D4A6B', bg: '#E3E9F3', ic: 'swap' } : (catMap[k] || catMap.other));
    const pctChg = (a, b) => (hasPrev && b > 0 ? Math.round((a - b) / b * 100) : null);
    const sortedCats = Object.keys(gc.m).filter((k) => gc.m[k] > 0.0005).sort((a, b) => gc.m[b] - gc.m[a]);
    const sel = st.rpSel;
    const range = (from, to, label, extra) => Object.assign({ from, to, label }, extra || {});

    let segs = [], accP = 0;
    const cats = sortedCats.map((k, i) => {
      const c = catInfo(k);
      const pc = spent > 0 ? gc.m[k] / spent * 100 : 0;
      segs.push(c.color + ' ' + accP.toFixed(2) + '% ' + (accP + pc).toFixed(2) + '%');
      accP += pc;
      const ch = pctChg(gc.m[k], gp.m[k] || 0);
      let chg = 'نفس المستوى', chgC = 'var(--muted)';
      if (!(gp.m[k] > 0)) { chg = P.length ? 'جديدة' : ''; }
      else if (ch >= 5) { chg = '▲ ' + ch + '٪'; chgC = '#9C2F3D'; }
      else if (ch <= -5) { chg = '▼ ' + Math.abs(ch) + '٪'; chgC = '#2E7D5B'; }
      const isTrip = k.indexOf('trip') === 0;
      return { k, ar: c.ar, color: c.color, bg: c.bg, path: ICONS[c.ic] || ICONS.dots, amt: fmt(gc.m[k]), amount: gc.m[k], pct: Math.round(pc), w: Math.max(3, pc).toFixed(1), count: gc.cnt[k], chg, chgC, delay: 120 + i * 50,
        open: () => (isTrip ? this.openTrip(+k.slice(4)) : this.openTxRange(range(R.start, R.end, R.label, { cat: k }))) };
    });
    const donut = spent > 0 ? 'conic-gradient(' + segs.join(', ') + ')' : 'conic-gradient(var(--line) 0% 100%)';

    // chart buckets
    const fullSpan = (R.end - R.start) / DAY_MS;
    const gran = fullSpan <= 45 ? 'day' : (fullSpan <= 120 ? 'week' : 'month');
    const buckets = [];
    const limitEnd = (st.rp.mode === 'year') ? new Date(new Date(R.start).getFullYear() + 1, 0, 1).getTime() : (st.rp.mode === 'month' ? addMonths(R.start, 1) : R.end);
    if (gran === 'day') { for (let s = R.start; s < limitEnd; s += DAY_MS) buckets.push({ s, e: s + DAY_MS }); }
    else if (gran === 'week') { for (let s = R.start; s < limitEnd; s += 7 * DAY_MS) buckets.push({ s, e: Math.min(s + 7 * DAY_MS, limitEnd) }); }
    else { for (let s = monthStart(R.start); s < limitEnd; s = addMonths(s, 1)) buckets.push({ s: Math.max(s, R.start), e: Math.min(addMonths(s, 1), limitEnd) }); }
    const allE = this.rpEntries(R.start, limitEnd, withTrips);
    buckets.forEach((b) => {
      const inB = allE.filter((t) => (t.ts || now) >= b.s && (t.ts || now) < b.e);
      b.spend = inB.reduce((a, t) => a + t.amount, 0);
      b.count = inB.filter((t) => !t.virtual).length;
      b.flexSpend = inB.filter((t) => !FIXK[t.catId]).reduce((a, t) => a + t.amount, 0);
      b.income = gran === 'month' ? this.rpIncome(b.s, b.e) : 0;
      b.future = b.s > now;
    });
    const maxB = Math.max(0.001, ...buckets.map((b) => Math.max(b.spend, b.income)));
    const pastB = buckets.filter((b) => !b.future && b.e > firstData);
    const avgB = pastB.length ? pastB.reduce((a, b) => a + b.spend, 0) / pastB.length : 0;
    const hasIncomeBars = gran === 'month' && buckets.some((b) => b.income > 0);
    const n = buckets.length;
    const bLabel = (b) => {
      const d = new Date(b.s);
      if (gran === 'month') return AR_MS[d.getMonth()];
      if (gran === 'week') return d.getDate() + '/' + (d.getMonth() + 1);
      return (n <= 14 || d.getDate() === 1 || d.getDate() % 5 === 0) ? String(d.getDate()) : '';
    };
    const bFull = (b) => {
      if (gran === 'month') return monthLabel(b.s);
      if (gran === 'week') return 'أسبوع ' + dLong(b.s) + ' – ' + dLong(b.e - DAY_MS);
      return AR_WD[new Date(b.s).getDay()] + ' ' + dLong(b.s);
    };
    const bars = buckets.map((b, i) => {
      const isSel = sel === i;
      const color = b.future ? 'var(--line)' : (sel == null || isSel ? 'var(--accent)' : 'color-mix(in srgb, var(--accent) 30%, transparent)');
      return { label: bLabel(b), h: (b.spend / maxB * 100).toFixed(1), incH: (b.income / maxB * 100).toFixed(1), hasInc: hasIncomeBars, w: hasIncomeBars ? '42%' : '68%', color,
        aria: bFull(b) + ': ' + fmt(b.spend), pick: () => this.setState({ rpSel: this.state.rpSel === i ? null : i }) };
    });
    const sb = sel != null ? buckets[sel] : null;

    // merchants
    const mm = {};
    flex.forEach((t) => { if (t.trip) return; const k = (t.merchant || '').split(' · ')[0]; if (!k) return; mm[k] = mm[k] || { name: k, amount: 0, count: 0 }; mm[k].amount += t.amount; mm[k].count++; });
    const mlist = Object.keys(mm).map((k) => mm[k]).sort((a, b) => b.amount - a.amount);
    const merchants = mlist.slice(0, 5).map((m, i) => ({ rank: String(i + 1), name: m.name, count: m.count, avg: fmt(m.amount / m.count), amt: fmt(m.amount), open: () => this.openTxRange(range(R.start, R.end, R.label, { q: m.name })) }));

    // weekdays
    const wdSum = [0, 0, 0, 0, 0, 0, 0], wdDays = [0, 0, 0, 0, 0, 0, 0];
    for (let s = R.start; s < effEnd; s += DAY_MS) wdDays[new Date(s).getDay()]++;
    flex.forEach((t) => { wdSum[new Date(t.ts || now).getDay()] += t.amount; });
    const wdAvg = wdSum.map((v, i) => (wdDays[i] ? v / wdDays[i] : 0));
    const wdMax = Math.max(0.001, ...wdAvg);
    const wdTop = wdAvg.indexOf(Math.max(...wdAvg));
    const weekdays = AR_WD.map((l, i) => ({ label: l, w: (wdAvg[i] / wdMax * 100).toFixed(1), amt: fmt(wdAvg[i]), color: i === wdTop && wdAvg[i] > 0 ? '#B0703F' : 'var(--accent)', labelC: i === wdTop && wdAvg[i] > 0 ? 'var(--ink)' : 'var(--muted)', fw: i === wdTop && wdAvg[i] > 0 ? 600 : 400 }));

    // KPIs
    const ch = pctChg(spent, pSpent);
    const big = real.reduce((a, t) => (!a || t.amount > a.amount ? t : a), null);
    const net = income - spent;
    const kpis = [
      { label: 'المصروف', value: fmt(spent), unit: '⃄', color: 'var(--ink)', sub: ch == null ? 'ما فيه فترة سابقة للمقارنة' : (ch === 0 ? 'نفس ' + R.prevLabel : (ch > 0 ? '▲ ' + ch + '٪' : '▼ ' + Math.abs(ch) + '٪') + ' عن الفترة السابقة'), subC: ch == null || ch === 0 ? 'var(--muted)' : (ch > 0 ? '#9C2F3D' : '#2E7D5B') },
      { label: 'الدخل', value: fmt(income), unit: '⃄', color: 'var(--ink)', sub: income > 0 ? 'راتب ودخل إضافي' : 'ما فيه دخل مسجل', subC: 'var(--muted)' },
      { label: net >= 0 ? 'وفّرت' : 'صرفت فوق دخلك', value: fmt(Math.abs(net)), unit: '⃄', color: net >= 0 ? '#2E7D5B' : '#9C2F3D', sub: income > 0 ? 'نسبة الادخار ' + Math.round(net / income * 100) + '٪' : '—', subC: 'var(--muted)' },
      { label: 'متوسط اليوم', value: fmt(spent / days), unit: '⃄', color: 'var(--ink)', sub: 'على ' + days + ' يوم', subC: 'var(--muted)' },
      { label: 'عدد العمليات', value: String(real.length), unit: '', color: 'var(--ink)', sub: real.length ? 'متوسط العملية ' + fmt(real.reduce((a, t) => a + t.amount, 0) / real.length) + ' ⃄' : '—', subC: 'var(--muted)' },
      { label: 'أكبر عملية', value: big ? fmt(big.amount) : '—', unit: big ? '⃄' : '', color: 'var(--ink)', sub: big ? big.merchant : '—', subC: 'var(--muted)' }
    ].map((k, i) => Object.assign(k, { delay: 60 + i * 40 }));

    // insights
    const ins = [];
    const ICO = (bg, fg, ic) => ({ bg, fg, path: ICONS[ic] });
    let bestK = null, bestD = 0;
    Object.keys(Object.assign({}, gc.m, gp.m)).forEach((k) => { if (k.indexOf('trip') === 0 || FIXK[k]) return; const d = (gc.m[k] || 0) - (gp.m[k] || 0); if (Math.abs(d) > Math.abs(bestD)) { bestD = d; bestK = k; } });
    if (bestK && P.length && Math.abs(bestD) >= 3) {
      const c = catInfo(bestK);
      ins.push(Object.assign({ title: (bestD > 0 ? 'زاد صرفك على ' : 'خف صرفك على ') + c.ar, body: 'صرفت ' + fmt(gc.m[bestK] || 0) + ' ⃄ مقابل ' + fmt(gp.m[bestK] || 0) + ' ⃄ في ' + R.prevLabel + '.' }, bestD > 0 ? ICO('#F6E3E6', '#9C2F3D', 'trend') : ICO('#E3F0EA', '#23624D', 'piggy')));
    }
    if (R.current && st.rp.mode !== 'custom' && st.rp.mode !== 'year' && days >= 5) {
      const full = Math.round((Math.min(addMonths(R.start, 1), Infinity) - R.start) / DAY_MS);
      const varPart = real.reduce((a, t) => a + t.amount, 0);
      const fixedPart = spent - varPart;
      const proj = varPart / days * full + fixedPart;
      ins.push(Object.assign({ title: 'لو كملت بنفس المعدل', body: 'بتوصل لحوالي ' + fmt(proj) + ' ⃄ آخر الشهر' + (income > 0 ? (proj > income ? '، يعني أكثر من دخلك بـ ' + fmt(proj - income) + ' ⃄.' : '، ويتبقى لك حوالي ' + fmt(income - proj) + ' ⃄.') : '.') }, ICO('#E3E9F3', '#34507D', 'trend')));
    }
    let wkS = 0, wkD = 0, wdS = 0, wdD = 0;
    [0, 1, 2, 3, 4, 5, 6].forEach((i) => { if (i === 5 || i === 6) { wkS += wdSum[i]; wkD += wdDays[i]; } else { wdS += wdSum[i]; wdD += wdDays[i]; } });
    if (wkD >= 2 && wdD >= 3) {
      const a = wkS / wkD, b = wdS / wdD;
      if (b > 0 && a / b > 1.15) ins.push(Object.assign({ title: 'الويكند أغلى', body: 'متوسط صرفك يوم الجمعة والسبت ' + fmt(a) + ' ⃄، وباقي الأيام ' + fmt(b) + ' ⃄. يعني أكثر بـ ' + Math.round((a / b - 1) * 100) + '٪.' }, ICO('#F7EBE2', '#A85A2C', 'bag')));
      else if (a > 0 && b / a > 1.15) ins.push(Object.assign({ title: 'أيام الدوام أغلى', body: 'متوسط صرفك في أيام الأسبوع ' + fmt(b) + ' ⃄، والويكند ' + fmt(a) + ' ⃄.' }, ICO('#F7EBE2', '#A85A2C', 'bag')));
    }
    const freq = mlist.slice().sort((a, b) => b.count - a.count)[0];
    if (freq && freq.count >= 3) ins.push(Object.assign({ title: 'أكثر مكان تروح له', body: freq.name + ': ' + freq.count + (freq.count <= 10 ? ' مرات،' : ' مرة،') + ' بمجموع ' + fmt(freq.amount) + ' ⃄.' }, ICO('#EEE7F6', '#6A4C93', 'repeat')));
    if (pastB.length >= 3) {
      const key = gran === 'month' ? 'spend' : 'flexSpend';
      const pk = pastB.reduce((a, b) => (b[key] > a[key] ? b : a), pastB[0]);
      const avgK = pastB.reduce((a, b) => a + b[key], 0) / pastB.length;
      if (pk[key] > 0) ins.push(Object.assign({ title: gran === 'month' ? 'أعلى شهر' : (gran === 'week' ? 'أعلى أسبوع' : 'أعلى يوم'), body: bFull(pk) + ': ' + fmt(pk[key]) + ' ⃄، والمتوسط ' + fmt(avgK) + ' ⃄' + (gran === 'month' ? '.' : ' (بدون الإيجار والأقساط).') }, ICO('#F6E6DC', '#9A4523', 'spark')));
    }
    const commit = ['fixed', 'inst', 'bills', 'subs'].reduce((a, k) => a + (gc.m[k] || 0), 0);
    if (spent > 0 && commit > 0) ins.push(Object.assign({ title: 'الالتزامات الثابتة', body: Math.round(commit / spent * 100) + '٪ من مصاريفك ثابتة (إيجار، فواتير، أقساط، اشتراكات). الباقي ' + fmt(spent - commit) + ' ⃄ هو اللي تقدر تتحكم فيه.' }, ICO('#E3F0EA', '#23624D', 'home')));
    const small = flex.filter((t) => t.amount < 3);
    const smallSum = small.reduce((a, t) => a + t.amount, 0);
    if (small.length >= 5 && smallSum > spent * 0.04) ins.push(Object.assign({ title: 'المصاريف الصغيرة', body: small.length + ' عملية أقل من 3 ⃄، مجموعها ' + fmt(smallSum) + ' ⃄. الصغير لما يتجمع يصير كبير.' }, ICO('#F7EBE2', '#A85A2C', 'cash')));
    if (!ins.length) ins.push(Object.assign({ title: 'ما فيه قراءات للحين', body: 'لما تتجمع عمليات أكثر في هالفترة، بطلع لك ملاحظات عن صرفك.' }, ICO('var(--chip)', 'var(--muted)', 'question')));
    const insights = ins.slice(0, 6).map((x, i) => Object.assign(x, { delay: 80 + i * 60 }));

    // trips in range (not counted)
    const tripSum = st.txns.filter((t) => t.trip && (t.ts || now) >= R.start && (t.ts || now) < R.end).reduce((a, t) => a + t.amount, 0);

    // period pickers
    const mode = st.rp.mode;
    const chip = (on) => ({ cbg: on ? 'var(--soft)' : 'var(--surface)', cfg: on ? 'var(--accentText)' : 'var(--ink2)', cbd: on ? 'var(--accent)' : 'var(--line)' });
    const modes = [['cycle', 'هالشهر'], ['month', 'شهر'], ['year', 'سنة'], ['custom', 'فترة']].map((m) => {
      const on = mode === m[0];
      return { label: m[1], aria: on ? 'true' : 'false', bg: on ? 'var(--surface)' : 'transparent', fg: on ? 'var(--ink)' : 'var(--muted)', shadow: on ? '0 1px 4px rgba(0,0,0,.08)' : 'none',
        pick: () => this.setRp(m[0] === 'custom' && !this.state.rp.from ? { mode: m[0], from: isoDay(now - 29 * DAY_MS), to: isoDay(now) } : { mode: m[0] }) };
    });
    const firstTs = st.txns.reduce((a, t) => Math.min(a, t.ts || now), now);
    const curM = monthStart(now);
    const selM = st.rp.month || curM;
    const monthChips = [];
    for (let i = 0; i < 24; i++) { const s = addMonths(curM, -i); if (i > 0 && s < monthStart(firstTs) && i > 2) break; monthChips.push(Object.assign(chip(s === selM), { label: monthLabel(s), pick: () => this.setRp({ month: s }) })); }
    const curY = new Date(now).getFullYear();
    const selY = st.rp.year || curY;
    const yearChips = [];
    for (let y = curY; y >= Math.min(curY - 1, new Date(firstTs).getFullYear()); y--) yearChips.push(Object.assign(chip(y === selY), { label: String(y), pick: () => this.setRp({ year: y }) }));

    const exp = {
      label: R.label, file: isoDay(R.start) + '_' + isoDay(R.end - DAY_MS), spent, income, count: real.length,
      cats: cats.map((c) => ({ name: c.ar, amount: c.amount, pct: c.pct, count: c.count })),
      rows: E.slice().sort((a, b) => (b.ts || now) - (a.ts || now)).map((t) => ({ ts: t.ts || now, merchant: t.merchant, cat: catInfo(catKey(t) || t.catId || 'other').ar, amount: t.amount, note: t.note, virtual: t.virtual, demo: t.demo }))
    };
    return {
      label: R.label, prevLabel: R.prevLabel, modes, isMonth: mode === 'month', isYear: mode === 'year', isCustom: mode === 'custom',
      monthChips, yearChips, from: st.rp.from || isoDay(now - 29 * DAY_MS), to: st.rp.to || isoDay(now),
      onFrom: (e) => this.setRp({ from: e.target.value }), onTo: (e) => this.setRp({ to: e.target.value }),
      fewData: real.length < 5 && !st.txns.some((t) => t.demo), hasDemo: st.txns.some((t) => t.demo),
      addDemo: () => this.addDemo(), clearDemo: () => this.clearDemo(),
      kpis, chartTitle: gran === 'month' ? 'الصرف والدخل حسب الشهر' : (gran === 'week' ? 'الصرف حسب الأسبوع' : 'الصرف اليومي'),
      hasIncomeBars, bars, gap: n > 20 ? 2 : (n > 12 ? 3 : 6), hasAvg: avgB > 0, avgPct: (avgB / maxB * 100).toFixed(1),
      hasSel: !!sb, noSel: !sb, selLabel: sb ? bFull(sb) : '',
      selSub: sb ? 'صرفت ' + fmt(sb.spend) + ' ⃄ · ' + sb.count + ' عملية' + (sb.income > 0 ? ' · دخل ' + fmt(sb.income) + ' ⃄' : '') + (avgB > 0 && sb.spend > 0 ? ' · ' + (sb.spend >= avgB ? 'فوق' : 'تحت') + ' المتوسط' : '') : '',
      selOpen: () => { if (sb) this.openTxRange(range(sb.s, sb.e, bFull(sb))); },
      donut, totalStr: fmt(spent), topCatsMini: cats.slice(0, 4).map((c) => ({ ar: c.ar, color: c.color, pct: c.pct })),
      cats, emptyCats: cats.length === 0,
      tripNote: tripSum > 0, tripNoteText: 'صرفت ' + fmt(tripSum) + ' ⃄ على الرحلات في هالفترة · ' + (withTrips ? 'محسوبة في التقرير' : 'مو محسوبة'),
      tripBtn: withTrips ? 'شيلها' : 'احسبها', toggleTrips: () => this.setState({ rpTrips: !this.state.rpTrips, rpSel: null }),
      insights, merchants, noMerchants: merchants.length === 0, weekdays,
      exportExcel: () => this.exportPeriod(exp), exportPdf: () => this.exportPeriodPdf(exp, { kpis, cats, insights, merchants })
    };
  }


  // ===== ملف الحساب =====
  openAccount(id) {
    const a = this.state.accounts.find((x) => x.id === id);
    if (!a) return;
    const st = this.state;
    this.setState({ screen: 'account', accId: id, accBack: st.screen === 'account' ? st.accBack : st.screen, accDel: false,
      accForm: { name: a.name || '', bank: a.bank || '', type: a.type || 'acc', last4: a.last4 || '', bal: String(a.balance || 0) } });
  }
  accTxOf(a, txns) {
    return (txns || this.state.txns).filter((t) => (a.type === 'cash' ? !!t.cash : (!!t.last4 && !!a.last4 && accMatch({ last4: a.last4 }, t.last4))));
  }
  saveAccount() {
    const st = this.state, f = st.accForm;
    const a = st.accounts.find((x) => x.id === st.accId);
    if (!a) return;
    if (a.type !== 'cash') {
      if (!f.bank.trim()) { this.say('اكتب اسم البنك'); return; }
      if (!/^\d{4}$/.test(f.last4)) { this.say('اكتب ٤ أرقام بالضبط'); return; }
      if (st.accounts.some((x) => x.id !== a.id && x.last4 === f.last4 && x.type !== 'cash')) { this.say('فيه حساب ثاني بنفس الأرقام'); return; }
    }
    const bal = parseFloat(f.bal);
    if (isNaN(bal)) { this.say('اكتب الرصيد بالأرقام'); return; }
    const oldL4 = a.last4;
    const patch = { name: f.name.trim(), balance: Math.round(bal * 1000) / 1000 };
    if (a.type !== 'cash') Object.assign(patch, { bank: f.bank.trim(), type: f.type, last4: f.last4 });
    const accounts = st.accounts.map((x) => (x.id === a.id ? Object.assign({}, x, patch) : x));
    // لو تغيرت الأرقام، العمليات القديمة تبقى مربوطة بالحساب
    const txns = (a.type !== 'cash' && oldL4 && oldL4 !== f.last4) ? st.txns.map((t) => (t.last4 && accMatch({ last4: oldL4 }, t.last4) ? Object.assign({}, t, { last4: f.last4 }) : t)) : st.txns;
    this.setState({ accounts, txns });
    this.say('انحفظت بيانات الحساب');
  }
  deleteAccount() {
    const st = this.state;
    if (!st.accDel) { this.setState({ accDel: true }); return; }
    this.setState({ accounts: st.accounts.filter((x) => x.id !== st.accId), screen: st.accBack || 'more', accId: null, accDel: false });
    this.say('انحذف الحساب. عملياته باقية في سجلك');
  }
  buildAccView(catMap) {
    const st = this.state;
    const a = st.accounts.find((x) => x.id === st.accId);
    if (!a) return { tiles: [], rows: [], cats: [], types: [], switches: [], form: {} };
    const b = bankOf(a.bank);
    const isCard = a.type === 'card', isCash = a.type === 'cash';
    const typeAr = isCash ? 'محفظة النقد' : (isCard ? 'بطاقة ائتمان' : (a.type === 'savings' ? 'حساب ادخار' : 'حساب جاري'));
    const all = this.accTxOf(a).slice().sort((x, y) => (y.ts || 0) - (x.ts || 0));
    const cyc = all.filter((t) => t.cycle === st.cycle && !t.trip);
    const cycSum = cyc.reduce((s, t) => s + t.amount, 0);
    const byCat = {};
    cyc.forEach((t) => addParts(byCat, t));
    const catKeys = Object.keys(byCat).sort((x, y) => byCat[y] - byCat[x]);
    const last = all[0];
    const f = st.accForm || {};
    const chip = (on) => ({ cbg: on ? 'var(--soft)' : 'var(--surface)', cfg: on ? 'var(--accentText)' : 'var(--ink2)', cbd: on ? 'var(--accent)' : 'var(--line)' });
    const sw = (on) => ({ bg: on ? 'var(--accent)' : 'var(--off)', x: knobX(on, 20), aria: on ? 'true' : 'false' });
    const setF = (p) => this.setState({ accForm: Object.assign({}, this.state.accForm, p) });
    const patchAcc = (p, msg) => { this.setState({ accounts: this.state.accounts.map((x) => (x.id === a.id ? Object.assign({}, x, p) : x)) }); if (msg) this.say(msg); };
    const switches = [];
    if (!isCash) switches.push(Object.assign(sw(!!a.watch), { title: 'قراءة رسائل هالحساب', sub: a.watch ? 'أقرأ رسائل البنك لهالحساب وأطلب موافقتك قبل التسجيل' : 'متوقفة، رسائل هالحساب ما تنقرأ', toggle: () => this.toggleAcc(a.id) }));
    switches.push(Object.assign(sw(a.inTotal !== false), { title: 'يدخل في مجموع أرصدتك', sub: a.inTotal !== false ? 'رصيده محسوب في المجموع بالصفحة الرئيسية' : 'رصيده ما ينحسب في المجموع', toggle: () => patchAcc({ inTotal: a.inTotal === false }, a.inTotal === false ? 'رجع ينحسب في المجموع' : 'شلته من المجموع') }));
    return {
      name: a.name || b.ar, initial: b.initial, color: b.color, bg: b.bg,
      sub: (a.name ? b.ar + ' · ' : '') + typeAr + (a.last4 ? ' •••• ' + a.last4 : ''),
      balLabel: isCard ? 'المبلغ المستحق' : (heldOf(a) > 0 ? 'رصيدك (بدون المعزول)' : 'الرصيد الحالي'), bal: (isCard && a.balance > 0 ? '-' : '') + fmt(availOf(a)),
      hasHeld: !isCard && (a.held || []).length > 0, heldTotal: fmt(heldOf(a)), heldNote: 'الرصيد في البنك ' + fmt(a.balance) + ' ⃄، منه ' + fmt(heldOf(a)) + ' ⃄ معزول',
      held: (a.held || []).map((h) => ({ title: h.title, amt: fmt(h.amount), date: dueLabel(h.ts || Date.now()), canAsk: st.heldAsk !== h.id, asking: st.heldAsk === h.id,
        ask: () => this.setState({ heldAsk: h.id }), cancel: () => this.setState({ heldAsk: null }),
        returned: () => this.releaseHeld(a.id, h.id, true), mine: () => this.releaseHeld(a.id, h.id, false) })),
      openTransfer: () => this.setState({ modal: { type: 'transfer' }, tfr: { from: a.id, to: (st.accounts.find((x) => x.id !== a.id) || {}).id || null, amount: '', note: '' } }),
      openHold: () => this.setState({ modal: { type: 'hold' }, hd: { title: '', amount: '' } }),
      txOpen: !!st.accTxOpen, txAria: st.accTxOpen ? 'true' : 'false', txRot: st.accTxOpen ? '180deg' : '0deg', toggleTx: () => this.setState({ accTxOpen: !this.state.accTxOpen }),
      balNote: isCash ? 'يزيد لما تسحب من الصراف وتختار "للنقد"، وينقص لما تسجل مصروف كاش' : (a.watch ? 'يتحدث تلقائياً من رسائل البنك' : 'قراءة الرسائل متوقفة، حدّث الرصيد يدوي من تحت'),
      tiles: [
        { label: 'صرف هالشهر', value: fmt(cycSum) + ' ⃄' },
        { label: 'عمليات هالشهر', value: String(cyc.length) },
        { label: 'آخر عملية', value: last ? (last.dateShort || '—') : '—' }
      ],
      hasTx: all.length > 0, noTx: all.length === 0 && !(st.moves || []).some((m) => m.from === a.id || m.to === a.id), txCount: all.length,
      emptyText: isCash ? 'ما فيه مصاريف كاش للحين. لما تسجل مصروف وتختار "دفعتها كاش" يطلع هنا.' : 'ما فيه عمليات مربوطة بهالحساب للحين. العمليات تنربط من رسائل البنك اللي فيها هالأرقام (' + (a.last4 || '—') + ').',
      rows: all.map((t) => ({ k: 't', t, ts: t.ts || 0 })).concat((st.moves || []).filter((m) => m.from === a.id || m.to === a.id).map((m) => ({ k: 'm', m, ts: m.ts }))).sort((x, y) => y.ts - x.ts).slice(0, 8).map((r, i) => {
        if (r.k === 'm') { const m = r.m, out = m.from === a.id, o = st.accounts.find((x) => x.id === (out ? m.to : m.from)); return { merchant: (out ? 'تحويل إلى ' : 'تحويل من ') + (o ? accLabel(o) : 'حساب محذوف'), ar: m.note || 'تحويل بين حساباتك', color: '#2D4A6B', bg: '#E3E9F3', path: ICONS.repeat, amt: (out ? '-' : '+') + fmt(m.amount), date: m.dateShort || '', delay: i * 40, open: () => this.setState({ modal: { type: 'move', id: m.id } }) }; }
        const t = r.t, c = catMap[t.catId] || catMap.other; return { merchant: t.merchant, ar: c.ar + (t.trip ? ' · رحلة' : ''), color: c.color, bg: c.bg, path: ICONS[c.ic], amt: fmt(t.amount), date: t.dateShort || '', delay: i * 40, open: () => this.openTx(t.id) }; }),
      allTx: () => this.setState({ screen: 'txlist', txBack: 'account', txFilter: { q: '', cat: null, acc: isCash ? 'cash' : a.last4, period: 'all' }, budInput: '' }),
      hasCats: catKeys.length > 0,
      cats: catKeys.slice(0, 5).map((k) => { const c = catMap[k] || catMap.other; const p = cycSum > 0 ? byCat[k] / cycSum * 100 : 0; return { ar: c.ar, color: c.color, amt: fmt(byCat[k]), pct: Math.round(p), w: Math.max(3, p).toFixed(1) }; }),
      form: f, notCash: !isCash, balInputLabel: isCard ? 'المستحق' : 'الرصيد',
      onName: (e) => setF({ name: e.target.value }), onBank: (e) => setF({ bank: e.target.value }),
      onLast4: (e) => setF({ last4: e.target.value.replace(/\D/g, '').slice(0, 4) }), onBal: (e) => setF({ bal: e.target.value.replace(/[^0-9.\-]/g, '') }),
      types: [['acc', 'جاري'], ['savings', 'ادخار'], ['card', 'بطاقة']].map((y) => Object.assign(chip(f.type === y[0]), { ar: y[1], pick: () => setF({ type: y[0] }) })),
      save: () => this.saveAccount(), switches,
      del: () => this.deleteAccount(), delLabel: st.accDel ? 'متأكد؟ اضغط مرة ثانية للحذف' : 'حذف الحساب',
      back: () => this.setState({ screen: st.accBack || 'more', accDel: false })
    };
  }

  renderVals() {
    const v = this.renderVals0();
    return this.state.lang === 'en' ? signLeft(v) : v;
  }
  renderVals0() {
    const st = this.state;
    CATS = st.cats;
    const now = new Date();
    const catMap = {};
    CATS.forEach((c) => { catMap[c.id] = c; });
    catMap.fixed = FIXED_CAT;
    catMap.inst = INST_CAT;
    const tripOn = this.tripOn();

    const txView = (t, i) => {
      const c = catMap[t.catId] || catMap.other;
      return { merchant: t.merchant, ar: c.ar, color: c.color, bg: c.bg, path: ICONS[c.ic], amt: fmt(t.amount), srcLabel: SRC[t.src], date: t.dateShort || '', trip: !!t.trip, delay: i * 45 };
    };
    const chipsFor = (selId, pick) => CATS.map((c) => {
      const sel = selId === c.id;
      return { ar: c.ar, path: ICONS[c.ic], ic: sel ? c.color : 'var(--muted)', cbg: sel ? c.bg : 'var(--surface)', cfg: sel ? c.color : 'var(--ink2)', cbd: sel ? c.color : 'var(--line)', pick: () => pick(c.id) };
    });

    const normal = st.txns.filter((t) => !t.trip && t.cycle === st.cycle && !t.fixedPaid);
    const varSum = normal.reduce((a, t) => a + t.amount, 0);
    const fixedOnly = st.fixed.reduce((a, f) => a + f.amount, 0);
    const instActive = st.installments.filter((x) => x.total - x.paid > 0.0005);
    const instMonthly = instActive.reduce((a, x) => a + Math.min(x.monthly, x.total - x.paid), 0);
    const fixedSum = fixedOnly + instMonthly;
    const total = varSum + fixedSum;
    const incomeSum = st.income.reduce((a, f) => a + f.amount, 0);
    const spentW = incomeSum > 0 ? Math.min(100, total / incomeSum * 100) : 0;

    // stats
    const byCat = {};
    normal.forEach((t) => addParts(byCat, t));
    Object.keys(st.budgets).forEach((k) => { if (byCat[k] == null) byCat[k] = 0; });
    if (fixedOnly > 0) byCat.fixed = fixedOnly;
    if (instMonthly > 0) byCat.inst = instMonthly;
    const rows = Object.keys(byCat).map((k) => ({ k, amount: byCat[k] }));
    const tripGroups = {};
    st.txns.forEach((x) => { if (x.trip && x.cycle === st.cycle) tripGroups[x.trip] = (tripGroups[x.trip] || 0) + x.amount; });
    const tobj = (id) => (st.trip && st.trip.id === id ? st.trip : st.trips.find((x) => x.id === id)) || { dest: '' };
    const tripsSum = Object.keys(tripGroups).reduce((a, k) => a + tripGroups[k], 0);
    const grand = total + tripsSum;
    Object.keys(tripGroups).forEach((k) => rows.push({ k: 'trip' + k, amount: tripGroups[k], tripId: +k }));
    rows.sort((a, b) => b.amount - a.amount);
    const catRowsOnly = rows.filter((r) => !r.tripId);
    let accP = 0;
    const segs = [];
    const statRows = rows.map((r, i) => {
      const c = r.tripId ? { ar: 'رحلة ' + tobj(r.tripId).dest, color: '#2D4A6B' } : (catMap[r.k] || catMap.other);
      const pct = grand > 0 ? r.amount / grand * 100 : 0;
      segs.push(c.color + ' ' + accP.toFixed(2) + '% ' + (accP + pct).toFixed(2) + '%');
      accP += pct;
      const bd = st.budgets[r.k];
      return { ar: c.ar, color: c.color, amt: fmt(r.amount), pct: Math.round(pct), w: Math.max(3, pct).toFixed(1), delay: 150 + i * 80,
        hasBud: !!bd, bud: bd ? (r.amount > bd ? 'تجاوز السقف ' : 'من سقف ') + fmt(bd) + ' ⃄' : '', budC: bd && r.amount > bd ? '#9C2F3D' : 'var(--muted)', open: () => (r.tripId ? this.openTrip(r.tripId) : this.openTxList(r.k)) };
    });
    const donutBg = grand > 0 ? 'conic-gradient(' + segs.join(', ') + ')' : 'conic-gradient(#E3E8E6 0% 100%)';

    const daysPassed = this.cycleDays();
    const daysInMonth = 30;
    const avg = varSum / daysPassed;
    const proj = avg * daysInMonth + fixedSum;
    const top = catRowsOnly.length ? (catMap[catRowsOnly[0].k] || catMap.other).ar : '—';
    const insights = [
      { label: 'متوسط الصرف اليومي', value: fmt(avg), unit: '⃄ باليوم' },
      { label: 'توقع نهاية الشهر', value: fmt(proj), unit: '⃄ على نفس المعدل' },
      { label: 'أكبر فئة', value: top, unit: catRowsOnly.length ? fmt(catRowsOnly[0].amount) + ' ⃄' : '' },
      { label: 'عمليات مسجلة', value: String(normal.length), unit: st.pending.length ? st.pending.length + ' بانتظار ردّك' : 'كلها مصنفة' }
    ].map((k, i) => Object.assign(k, { delay: 300 + i * 60 }));

    const tips = [];
    const food = byCat.food || 0;
    if (total > 0 && food / total > 0.12) tips.push({ title: 'التوصيل ياخذ جزء كبير', body: 'المطاعم والتوصيل ' + Math.round(food / total * 100) + '٪ من مصاريفك. لو خففتها للنص توفر حوالي ' + fmt(food / daysPassed * daysInMonth / 2) + ' ⃄ بالشهر.', path: ICONS.bowl, bg: '#F6E6DC', fg: '#9A4523' });
    if (byCat.gov) tips.push({ title: 'المخالفات مصروف ممكن تتفاداه', body: 'دفعت ' + fmt(byCat.gov) + ' ⃄ رسوم ومخالفات هذا الشهر. فعّل تنبيه السرعة في تطبيق الخرائط.', path: ICONS.shield, bg: '#E9E5F3', fg: '#4E437D' });
    if (st.pending.length) tips.push({ title: 'صنّف العمليات المعلقة', body: 'عندك ' + st.pending.length + ' عمليات بانتظار ردّك. تصنيفها يخلي الأرقام والنصائح أدق.', path: ICONS.question, bg: '#F7EBE2', fg: '#A85A2C' });
    if (incomeSum > 0) {
      const rate = Math.round((incomeSum - proj) / incomeSum * 100);
      tips.push({ title: rate >= 20 ? 'ادخارك ممتاز' : 'هدف الادخار ٢٠٪', body: 'على المعدل الحالي بتوفر حوالي ' + Math.max(0, rate) + '٪ من دخلك هذا الشهر' + (rate >= 20 ? '. حوّل الفائض لحساب توفير أول ما ينزل الراتب.' : '. جرّب تحوّل مبلغ ثابت للتوفير يوم نزول الراتب قبل لا تبدأ تصرف.'), path: ICONS.piggy, bg: '#E3F0EA', fg: '#23624D' });
    } else {
      tips.push({ title: 'سجّل دخلك', body: 'أضف راتبك من زر + ثم "دخل"، وأحسب لك نسبة الادخار والمتبقي لين آخر الشهر.', path: ICONS.piggy, bg: '#E3F0EA', fg: '#23624D' });
    }
    tips.push({ title: 'توقع الشهر', body: 'على نفس الوتيرة بتصرف حوالي ' + fmt(proj) + ' ⃄ هذا الشهر. أراقب لك وأنبهك إذا زاد صرفك عن المعتاد.', path: ICONS.trend, bg: '#E3E9F3', fg: '#34507D' });
    tips.forEach((t, i) => { t.delay = 400 + i * 70; });

    // pending
    const actS = st.seasons.find((x) => x.active);
    const pendingView = st.pending.map((p, i) => {
      const k = p.kind;
      const exp = st.expanded === p.id;
      const sc = p.catId ? catMap[p.catId] : null;
      const d = p.dateShort || '';
      let title = p.merchant, sub = '', question = '', path = ICONS.question, tone = 'warm', showChips = false;
      const actions = [];
      const A = (label, fn, primary) => actions.push({ label, fn, cbg: primary ? 'var(--accent)' : 'var(--chip)', cfg: primary ? '#FFFFFF' : 'var(--ink2)' });
      const ign = () => this.dismiss(p.id, 'تجاهلتها، وما سجّلت شي');
      if (k === 'suggest' && sc) {
        sub = p.byName ? 'أضافها ' + p.byName + (d ? ' · ' + d : '') : 'رسالة البنك' + (p.last4 ? ' · ••' + p.last4 : '') + ' · ' + d;
        question = 'أظنها ' + sc.ar + '. أضيفها؟';
        path = ICONS[sc.ic]; tone = 'cat'; showChips = exp;
        A('أضف · ' + sc.ar, () => this.approveCat(p.id, p.catId), true);
        A(exp ? 'إخفاء الفئات' : 'غيّر الفئة', () => this.setState({ expanded: exp ? null : p.id }));
        A('تجاهل', ign);
      } else if (k === 'unclear') {
        sub = 'غير واضح من الرسالة · ' + d;
        question = p.note + ' وش نوعه؟';
        showChips = true; A('تجاهل', ign);
      } else if (k === 'transfer') {
        title = 'تحويل من حسابك ••' + p.last4; sub = 'عبر mBanking · ' + d;
        question = 'هالتحويل حق إيش؟'; path = ICONS.swap; showChips = true;
        A('تحويل لحسابي · مو مصروف', () => this.dismiss(p.id, 'تمام، تحويل داخلي وما يدخل المصاريف'));
        A('تجاهل', ign);
      } else if (k === 'internal') {
        title = 'تحويل بين حساباتك'; sub = '••' + p.fromLast4 + ' ← ••' + p.toLast4 + ' · ' + d;
        question = 'وصلتني رسالتين بنفس المبلغ والوقت من حسابين لك، يعني غالباً تحويل داخلي وما يدخل المصاريف. أأكده؟';
        path = ICONS.swap; tone = 'blue';
        A('نعم، تحويل داخلي', () => this.internalYes(p.id), true);
        A('لا، مو تحويل لي', () => this.internalNo(p.id));
      } else if (k === 'credit') {
        title = 'إيداع في حسابك' + (p.last4 ? ' ••' + p.last4 : ''); sub = (p.bank ? bankOf(p.bank).ar + ' · ' : '') + d;
        question = 'أضيفه كدخل؟'; path = ICONS.piggy; tone = 'ok';
        A('دخل لمرة واحدة', () => this.creditOnce(p.id), true);
        A('هذا راتبي', () => this.salaryYes(p.id));
        A('تجاهل', ign);
      } else if (k === 'salary') {
        title = 'نزل راتبك؟'; sub = (p.bank ? bankOf(p.bank).ar + ' · ' : '') + (p.last4 ? '••' + p.last4 + ' · ' : '') + d;
        question = 'إذا هذا الراتب، أبدأ شهر مالي جديد من اليوم وأقترح عليك تدخر المتبقي من الشهر اللي راح.';
        path = ICONS.piggy; tone = 'ok';
        A('نعم، ابدأ شهر جديد', () => this.salaryYes(p.id), true);
        A('لا، دخل لمرة واحدة', () => this.creditOnce(p.id));
        A('تجاهل', ign);
      } else if (k === 'inst') {
        sub = 'موعد القسط · ' + d;
        question = 'انخصم القسط هالشهر؟ أكّده وأحدّث لك المتبقي.'; path = ICONS.card; tone = 'inst';
        A('أكّد القسط', () => this.instYes(p.id), true);
        A('مو الحين', () => this.dismiss(p.id, 'تمام، بذكّرك بعدين'));
      }
      if (k === 'atm') {
        title = 'سحب من الصراف'; sub = (p.last4 ? '••' + p.last4 + ' · ' : '') + d;
        question = 'الفلوس طلعت من البنك لجيبك، فما أحسبها مصروف. أحطها في محفظة النقد؟'; path = ICONS.cash; tone = 'ok';
        A('نعم، للنقد', () => this.cashIn(p.id), true); A('لا، صرفتها على شي', () => this.atmAsExpense(p.id)); A('تجاهل', ign);
      } else if (k === 'refund') {
        title = 'مرتجع من ' + p.merchant; sub = d; path = ICONS.swap; tone = 'ok';
        if (p.refundOf) { question = 'رجع لك مبلغ من ' + p.merchant + '. أنقصه من العملية الأصلية (' + (p.refundOfLabel || '') + ')؟'; A('نعم، اربطه', () => this.linkRefund(p.id), true); A('سجّله دخل', () => this.creditOnce(p.id)); }
        else { question = 'رجع لك مبلغ، بس ما لقيت العملية الأصلية. أسجّله دخل؟'; A('سجّله دخل', () => this.creditOnce(p.id), true); }
        A('تجاهل', ign);
      }
      if (k === 'newacc') {
        title = 'حساب مو مسجل · •••• ' + p.accKey; sub = (p.bank ? bankOf(p.bank).ar + ' · ' : '') + d + (p.count > 1 ? ' · ' + p.count + ' رسائل' : '');
        question = 'وصلت رسالة من حساب مو مسجل عندك. تبي تضيفه وأسجّل عملياته؟ إذا قلت لا، ما بسجل أي رسالة منه بعدين.';
        path = ICONS.card; tone = 'blue';
        A('نعم، أضف الحساب', () => this.newAccYes(p.id), true);
        A('لا، تجاهله دايماً', () => this.newAccNo(p.id));
      }
      if (p.dupKind) {
        actions.length = 0; showChips = false; tone = 'warm';
        question = p.dupKind === 'receipt' ? (p.dupInst ? 'شكلها ' + instNm(p.dupLabel) + ' اللي سجلته في موعده. نفس العملية؟' : p.dupManual ? 'شكلها نفس عملية ' + (p.dupLabel || '') + ' اللي سجلتها يدوي. نفس العملية؟' : 'شكلها نفس فاتورة ' + (p.dupLabel || '') + ' اللي صورتها. نفس العملية؟') : 'وصلتني نفس الرسالة مرتين، شكلها مكررة.';
        A(p.dupKind === 'receipt' ? 'نفسها، اربطها' : 'مكررة، شيلها', () => this.confirmDup(p.id), true); A('لا، عملية ثانية', () => this.notDup(p.id));
      } else if (p.fixedMatch && ['suggest', 'unclear', 'transfer'].indexOf(k) !== -1) {
        actions.unshift({ label: 'هذا ' + p.fixedMatch.name, fn: () => this.approveFixed(p.id), cbg: '#E2ECE8', cfg: '#2E4A43' });
      }
      const tones = {
        warm: ['#F7EBE2', '#A85A2C', '#EBDDD2'],
        cat: [sc ? sc.bg : '#E3F0EA', sc ? sc.color : '#23624D', '#E3E8E6'],
        ok: ['#E3F0EA', '#23624D', '#CFE3DA'],
        blue: ['#E3E9F3', '#2D4A6B', '#C9D4E6'],
        inst: ['#F0E7DD', '#6B4A2E', '#E7DCCF']
      };
      const t = tones[tone];
      const plus = k === 'credit' || k === 'salary' || k === 'refund';
      return {
        title, sub, question, amt: fmt(p.amount), sign: plus ? '+' : '', amtC: plus ? '#23624D' : 'var(--ink)',
        path, ibg: t[0], ifg: t[1], bd: t[2], delay: 120 + i * 90, showChips, actions,
        hasSeason: !!actS && !p.dupKind && ['suggest', 'unclear', 'transfer'].indexOf(k) !== -1,
        seasonText: (() => { const on = p.season == null ? (k === 'suggest' ? this.seasonDefault(p.catId) : true) : p.season; return on ? 'بتنخصم من ميزانية ' + (actS ? actS.name : '') : 'مو من ميزانية ' + (actS ? actS.name : '') + ' (علاج، فواتير، أو غيره)'; })(),
        seasonBg: (p.season == null ? (k === 'suggest' ? this.seasonDefault(p.catId) : true) : p.season) ? 'var(--accent)' : 'var(--off)',
        seasonX: knobX((p.season == null ? (k === 'suggest' ? this.seasonDefault(p.catId) : true) : p.season), 16),
        seasonAria: (p.season == null ? (k === 'suggest' ? this.seasonDefault(p.catId) : true) : p.season) ? 'true' : 'false',
        seasonToggle: () => { const pp = this.state.pending.find((x) => x.id === p.id); if (!pp) return; const cur = pp.season == null ? (pp.kind === 'suggest' ? this.seasonDefault(pp.catId) : true) : pp.season; this.setState({ pending: this.state.pending.map((x) => (x.id === p.id ? Object.assign({}, x, { season: !cur }) : x)) }); },
        opts: CATS.map((c) => ({ ar: c.ar, color: c.color, path: ICONS[c.ic], pick: () => this.approveCat(p.id, c.id) }))
      };
    });
    const sugN = st.pending.filter((x) => x.kind === 'suggest').length;
    let headsView = null;
    if (st.heads && !st.shadeOpen) {
      if (st.heads.adv) { const an = st.advNotes.find((x) => x.id === st.heads.adv); if (an) headsView = this.advNotif(an); }
      else { const hp = st.pending.find((x) => x.id === st.heads.pid); if (hp) headsView = this.notifFor(hp); }
    }
    const notifs = st.advNotes.map((n) => this.advNotif(n)).concat(st.pending.map((x) => this.notifFor(x))).map((n, i) => Object.assign(n, { delay: 60 + i * 50 }));
    const savTarget = st.accounts.find((a) => a.type === 'savings' && !accMatch(a, st.savingsOffer ? st.savingsOffer.fromLast4 : ''));

    // sms preview
    const p = parseSms(st.smsText, st.learned, st.accounts);
    const pvOk = !!(p && p.ok);
    const pvBad = !!(p && !p.ok);
    let pv = { cat: {} };
    let pvChips = [];
    if (pvOk) {
      const cid = st.catPick || p.catId;
      const c = cid ? catMap[cid] : null;
      const needsCat = !p.catId && p.kind !== 'credit';
      pv = {
        amt: fmt(p.amount), cur: p.cur === 'OMR' ? '⃄' : p.cur, merchant: p.merchant, last4: p.last4 ? '•••• ' + p.last4 : '—',
        method: p.method, date: p.dateLabel || '—', bal: p.balance != null ? fmt(p.balance) + ' ⃄' : '—',
        kindLabel: p.isSalary ? 'راتب' : { purchase: 'شراء', transfer: 'تحويل', unclear: 'شراء', credit: 'إيداع' }[p.kind],
        hasCat: !!c && !needsCat, cat: c ? { ar: c.ar, color: c.color, bg: c.bg, path: ICONS[c.ic] } : {},
        needsCat, showChips: false, note: p.note,
        autoNote: st.catPick ? 'اخترتها أنت' : (p.fromLearned ? 'من اللي تعلمته منك قبل' : 'تصنيف تلقائي من اسم المتجر'),
        isCredit: p.kind === 'credit', notCredit: p.kind !== 'credit',
        foreignAsk: p.foreign && !tripOn && p.kind !== 'credit', tripOn: tripOn && p.kind !== 'credit',
        countryAr: (countryByCode(p.country) || { ar: p.country }).ar
      };
      pvChips = chipsFor(cid, (id) => this.setState({ catPick: id }));
      const acc = p.last4 ? st.accounts.find((a) => accMatch(a, p.last4)) : null;
      pv.accKnown = !!acc && p.balance != null;
      pv.accUnknown = !acc && !!p.last4;
      pv.accBank = acc ? bankOf(acc.bank).ar : '';
      pv.last4raw = p.last4;
      pv.bankGuess = p.bank ? 'في ' + bankOf(p.bank).ar : '';
      if (!acc && p.bank) pv.last4 = '•••• ' + p.last4 + ' · ' + bankOf(p.bank).short;
      if (acc) pv.last4 = '•••• ' + p.last4 + ' · ' + bankOf(acc.bank).short;
    }

    // accounts
    const accView = st.accounts.map((a, i) => {
      const b = bankOf(a.bank);
      const isCard = a.type === 'card';
      return {
        bank: a.name || b.ar, initial: b.initial, color: b.color, bg: b.bg,
        sub: (a.name ? b.ar + ' · ' : '') + (isCard ? 'بطاقة ائتمان' : (a.type === 'savings' ? 'حساب ادخار' : 'حساب جاري')) + ' •••• ' + a.last4 + (a.watch ? '' : ' · القراءة متوقفة'),
        short: (isCard ? 'مستحق · ' : '') + '•••• ' + a.last4,
        bal: (isCard && a.balance > 0 ? '-' : '') + fmt(availOf(a)), balLabel: isCard ? 'مستحق' : 'رصيد', delay: i * 60,
        open: () => this.openAccount(a.id),
        remove: () => this.setState({ accounts: this.state.accounts.filter((x) => x.id !== a.id) }),
        toggle: () => this.toggleAcc(a.id),
        watchBg: a.watch ? 'var(--accent)' : 'var(--off)', watchX: knobX(a.watch, 18), aria: a.watch ? 'true' : 'false'
      };
    });
    const netBal = st.accounts.filter((a) => a.inTotal !== false).reduce((s, a) => s + (a.type === 'card' ? -a.balance : availOf(a)), 0);
    const nAcc = st.accounts.length;
    const accCountLabel = nAcc === 0 ? 'أضف حساباتك' : (nAcc === 1 ? 'حساب واحد' : (nAcc === 2 ? 'حسابين' : (nAcc <= 10 ? nAcc + ' حسابات' : nAcc + ' حساب')));
    const bankChips = BANKS.map((b) => {
      const sel = st.ob.bank === b.id;
      return { ar: b.ar, cbg: sel ? b.bg : 'var(--surface)', cfg: sel ? b.color : 'var(--ink2)', cbd: sel ? b.color : 'var(--line)', pick: () => this.setState({ ob: Object.assign({}, this.state.ob, { bank: b.id }) }) };
    });
    const typeChips = [{ k: 'acc', ar: 'حساب جاري' }, { k: 'savings', ar: 'حساب ادخار' }, { k: 'card', ar: 'بطاقة ائتمان' }].map((t) => {
      const sel = st.ob.type === t.k;
      return { ar: t.ar, cbg: sel ? 'var(--soft)' : 'var(--surface)', cfg: sel ? 'var(--accentText)' : 'var(--ink2)', cbd: sel ? 'var(--accent)' : 'var(--line)', pick: () => this.setState({ ob: Object.assign({}, this.state.ob, { type: t.k }) }) };
    });

    // installments
    const monthAdd = (n) => { const d = new Date(now.getFullYear(), now.getMonth() + n, 1); return AR_M[d.getMonth()] + ' ' + d.getFullYear(); };
    const instView = st.installments.map((x) => {
      const left = Math.max(0, x.total - x.paid);
      const pct = x.total > 0 ? Math.min(100, x.paid / x.total * 100) : 0;
      const done = left <= 0.0005;
      const ml = done ? 0 : Math.ceil(left / x.monthly - 1e-9);
      const lastTs = x.dueDay && x.nextDue && ml > 0 ? (() => { let t = x.nextDue; for (let k = 1; k < ml; k++) t = nextDueAfter(t, x.dueDay); return t; })() : 0;
      const lastD = lastTs ? new Date(lastTs) : null;
      return {
        name: x.name, hasDue: !!x.dueDay && !done, noDue: !x.dueDay && !done, canPay: !done,
        dueText: x.dueDay && !done ? 'الخصم الجاي ' + dueLabel(x.nextDue) + ' · تلقائي كل شهر يوم ' + x.dueDay : '',
        dueVal: x.nextDue ? isoOf(x.nextDue) : '',
        onDue: (e) => this.setInstDue(x.id, e.target.value),
        payNow: () => this.payInstNow(x.id),
        payLabel: 'سدّد الحين · ' + fmt(Math.min(x.monthly, left)) + ' ⃄',
        sub: done ? 'اكتمل القسط، مبروك' : 'القسط ' + fmt(x.monthly) + ' ⃄ · باقي ' + monthsAr(ml) + ' · آخر قسط ' + (lastD ? AR_M[lastD.getMonth()] + ' ' + lastD.getFullYear() : monthAdd(ml)),
        pct: pct.toFixed(1), pctR: String(Math.round(pct)), paid: fmt(x.paid), left: fmt(left), total: fmt(x.total),
        bar: done ? '#2E8A6B' : '#B0703F',
        badge: done ? 'اكتمل' : (x.dueDay ? 'تلقائي · ' + dueLabel(x.nextDue) : 'يدوي'), badgeC: done ? '#23624D' : (x.dueDay ? '#6B4A2E' : 'var(--muted)'),
        open: () => this.setState({ modal: { type: 'inst', id: x.id }, instDel: false, instHistDel: null }),
        ml, lastLabel: lastD ? AR_M[lastD.getMonth()] + ' ' + lastD.getFullYear() : monthAdd(ml), done, raw: x
      };
    });
    // تفاصيل القسط المفتوح
    let iv = { rows: [], hist: [] };
    const ivOpen = st.modal && st.modal.type === 'inst' ? instView.find((y) => y.raw.id === st.modal.id) : null;
    if (ivOpen) {
      const x = ivOpen.raw;
      const histTx = st.txns.filter((t) => t.instId === x.id || (t.catId === 'inst' && t.merchant === x.name)).sort((p, q) => (q.ts || 0) - (p.ts || 0));
      const hs = histTx.reduce((acc, t) => acc + t.amount, 0);
      const before = Math.max(0, Math.round((x.paid - hs) * 1000) / 1000);
      const rows = [{ k: 'القسط الشهري', v: fmt(x.monthly) + ' ⃄' }];
      if (!ivOpen.done) {
        rows.push({ k: 'باقي', v: monthsAr(ivOpen.ml) });
        rows.push({ k: 'آخر قسط', v: ivOpen.lastLabel });
  
      }
      if (before > 0.0005) rows.push({ k: 'مدفوع قبل ما تسجله', v: fmt(before) + ' ⃄' });
      iv = Object.assign({}, ivOpen, {
        rows, canPay: !ivOpen.done, sub: ivOpen.done ? 'اكتمل القسط، مبروك' : 'القسط ' + fmt(x.monthly) + ' ⃄ بالشهر',
        autoOn: !!x.dueDay, autoSw: { bg: x.dueDay ? 'var(--accent)' : 'var(--off)', x: knobX(!!x.dueDay, 20), aria: x.dueDay ? 'true' : 'false' },
        autoSub: x.dueDay ? 'ينخصم تلقائي كل شهر يوم ' + x.dueDay + '، والجاي ' + dueLabel(x.nextDue) : 'مقفل: تسدده بيدك، أو ينقرى من رسالة البنك',
        toggleAuto: () => this.toggleInstAuto(x.id),
        hist: histTx.map((t) => { const d = new Date(t.ts || Date.now()); return { canDel: st.instHistDel !== t.id, asking: st.instHistDel === t.id, ask: () => this.setState({ instHistDel: t.id }), cancel: () => this.setState({ instHistDel: null }), del: () => this.delInstPay(x.id, t.id), date: d.getDate() + ' ' + AR_M[d.getMonth()] + ' ' + d.getFullYear(), amt: fmt(t.amount), how: t.src === 'inst' ? (t.note === 'تسديد قبل الموعد' ? 'سددته قبل الموعد' : 'خصم تلقائي في تاريخ الاستحقاق') : (t.src === 'sms' ? 'من رسالة البنك' + (t.last4 ? ' ••' + t.last4 : '') : 'يدوي') }; }),
        noHist: histTx.length === 0, noHistText: 'ما فيه مدفوعات مسجلة في التطبيق للحين.',
        delAsk: !!st.instDel, delBtn: !st.instDel,
        askDel: () => this.setState({ instDel: true }), delCancel: () => this.setState({ instDel: false }),
        del: () => { this.setState({ installments: this.state.installments.filter((y) => y.id !== x.id), modal: null, instDel: false }); this.say('انحذف ' + instNm(x.name)); }
      });
    }
    const iT = parseFloat(st.ins.total), iM = parseFloat(st.ins.monthly), iP = parseFloat(st.ins.paid) || 0;
    const insOk = iT > 0 && iM > 0 && iM <= iT && iP < iT;
    const insN = insOk ? Math.ceil((iT - iP) / iM - 1e-9) : 0;
    const setIns = (k) => (e) => { const o = Object.assign({}, this.state.ins); o[k] = (k === 'name' || k === 'due') ? e.target.value : e.target.value.replace(/[^0-9.]/g, ''); this.setState({ ins: o }); };

    // income types
    const inTypeChips = [{ once: false, ar: 'دخل شهري', hint: 'يتكرر كل شهر، مثل الراتب' }, { once: true, ar: 'لمرة واحدة', hint: 'مكافأة، بيع، هدية' }].map((t) => {
      const sel = st.inOnce === t.once;
      return { ar: t.ar, hint: t.hint, aria: sel ? 'true' : 'false', cbg: sel ? 'var(--soft)' : 'var(--surface)', cbd: sel ? 'var(--accent)' : 'var(--line)', cfg: sel ? 'var(--accentText)' : 'var(--ink)', pick: () => this.setState({ inOnce: t.once }) };
    });

    // travel currency
    const det = detectCountry(st.tf.dest);
    const tfCur = st.tf.cur;
    const hasDest = !!st.tf.dest.trim();

    // trip
    const trip = st.trip;
    const tripTxRaw = st.trip ? st.txns.filter((t) => t.trip === st.trip.id) : [];
    const tripSpent = tripTxRaw.reduce((a, t) => a + t.amount, 0);
    const rate = trip ? RATES[trip.cur] || 1 : 1;
    const curList = TOP_CURS.slice();
    if (det && curList.indexOf(det.cur) === -1) curList.unshift(det.cur);
    const curChips = curList.map((k) => {
      const sel = st.tf.cur === k;
      return { k, ar: CUR_AR[k], cbg: sel ? '#2D4A6B' : 'var(--surface)', cfg: sel ? '#FFFFFF' : 'var(--ink2)', cbd: sel ? '#2D4A6B' : 'var(--line)', pick: () => this.setState({ tf: Object.assign({}, this.state.tf, { cur: k, manual: true }), tfPick: false }) };
    });

    const navCls = (k) => (st.screen === k ? 'nv on' : 'nv');
    const tabs = ['sms', 'manual', 'receipt'];
    const tabIdx = tabs.indexOf(st.tab);
    const learnedKeys = Object.keys(st.learned);

    const t = T[st.lang] || T.ar;
    const rtl = st.lang !== 'en';
    IS_RTL = rtl;
    let sysDark = false;
    try { sysDark = !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches); } catch (e) {}
    const themeCls = 'th-' + st.theme + ((st.mode === 'dark' || (st.mode === 'system' && sysDark)) ? ' dark' : '');
    const sw = (on) => ({ bg: on ? 'var(--accent)' : 'var(--off)', x: knobX(on, 20), aria: on ? 'true' : 'false' });
    const TOUR_STEPS = [
      { k: 'Welcome' },
      { k: 'Bell', sel: 'button[aria-label="مركز الإشعارات"]', r: { x: 70, y: 44, w: 42, h: 42, r: 14 }, mirror: true },
      { k: 'Fab', sel: 'nav[aria-label="التنقل"] > button:nth-of-type(3)', r: { x: 165, y: 744, w: 60, h: 60, r: 20 } },
      { k: 'Adv', sel: 'button[aria-label="مستشارك المالي"]', r: { x: 16, y: 688, w: 56, h: 56, r: 28 } },
      { k: 'Stats', sel: 'nav[aria-label="التنقل"] > button:nth-of-type(2)', r: { x: 232, y: 764, w: 72, h: 60, r: 16 }, mirror: true },
      { k: 'Travel', sel: 'nav[aria-label="التنقل"] > button:nth-of-type(4)', r: { x: 86, y: 764, w: 72, h: 60, r: 16 }, mirror: true },
      { k: 'Fixed', sel: 'nav[aria-label="التنقل"] > button:nth-of-type(5)', r: { x: 9, y: 764, w: 72, h: 60, r: 16 }, mirror: true },
      { k: 'Gear', sel: 'button[aria-label="' + t.settings + '"]', r: { x: 20, y: 44, w: 42, h: 42, r: 14 }, mirror: true }
    ];
    let tourView = { hasTarget: false, noTarget: true, dots: [] };
    if (st.tour != null && st.screen === 'home') {
      const step = TOUR_STEPS[Math.min(st.tour, TOUR_STEPS.length - 1)];
      const POP_H = 200;
      const v = { title: t['tour' + step.k + 'T'], body: t['tour' + step.k + 'B'], counter: (st.tour + 1) + ' / ' + TOUR_STEPS.length,
        nextLabel: st.tour === TOUR_STEPS.length - 1 ? t.done : t.next,
        dots: TOUR_STEPS.map((x, i) => ({ bg: i === st.tour ? 'var(--accent)' : 'var(--line)', w: i === st.tour ? '18px' : '6px' })) };
      const tmRaw = st.tourM && st.tourM.k === step.k + st.tour ? st.tourM : null;
      const tm = tmRaw && !tmRaw.miss ? tmRaw : null;
      const W = tm ? tm.W : 390, H = tm ? tm.H : 844;
      if (step.r) {
        const r = tm ? { x: tm.x, y: tm.y, w: tm.w, h: tm.h, r: step.r.r } : Object.assign({}, step.r);
        if (!tm && step.mirror && !rtl) r.x = 390 - r.x - r.w;
        const pad = 5;
        const below = r.y < H / 2;
        const cx = r.x + r.w / 2;
        Object.assign(v, { hasTarget: true, noTarget: false, x: r.x - pad, y: r.y - pad, w: r.w + pad * 2, h: r.h + pad * 2, r: Math.min(r.r, r.h / 2) + pad,
          popTop: below ? (r.y + r.h + pad + 16) + 'px' : 'auto', popBottom: below ? 'auto' : (H - r.y + pad + 16) + 'px', arrowUp: below, arrowDown: !below,
          arrowX: Math.round(Math.max(14, Math.min(W - 32 - 30, cx - 16 - 8))), ringOp: tmRaw ? 1 : 0 });
      } else Object.assign(v, { hasTarget: false, noTarget: true, popTop: '300px', popBottom: 'auto', arrowUp: false, arrowDown: false, arrowX: 0, ringOp: 1 });
      tourView = v;
      if (step.sel && !tmRaw) setTimeout(() => this.measureTour(step.sel, step.k + st.tour), 30);
    }
    const kpBio = st.locked && st.security.bio;
    const keypad = ['1', '2', '3', '4', '5', '6', '7', '8', '9', kpBio ? 'bio' : '', '0', 'del'].map((k) => ({
      label: k, isDigit: /^\d$/.test(k), isIcon: k === 'bio' || k === 'del',
      path: k === 'bio' ? ICONS.fp : (k === 'del' ? ICONS.backspace : ''), ic: k === 'bio' ? 'var(--accent)' : 'var(--ink)',
      aria: k === 'bio' ? t.useBio : (k === 'del' ? t.delete : (k || ' ')),
      bg: k === '' ? 'transparent' : 'var(--surface)', padBg: k === '' ? 'transparent' : 'var(--chip)',
      fn: k === '' ? () => {} : () => this.pressKey(k)
    }));
    const pinDots = [0, 1, 2, 3].map((i) => ({ bg: i < st.pinBuf.length ? 'var(--accent)' : 'transparent', bd: st.pinErr ? '#9C2F3D' : 'var(--accent)' }));
    const cf = st.catForm;
    const catRows = st.cats.map((c) => ({ ar: c.ar, color: c.color, bg: c.bg, path: ICONS[c.ic] || ICONS.dots, open: () => this.openCatEdit(c.id), rowBg: st.catEdit === c.id ? 'var(--soft)' : 'var(--surface)' }));
    const catColors = PALETTE.map((pp) => ({ color: pp.color, label: pp.label, ring: cf.color === pp.color ? 'var(--ink)' : 'var(--surface)', pick: () => this.setState({ catForm: Object.assign({}, this.state.catForm, { color: pp.color, bg: pp.bg }) }) }));
    const catIcons = CAT_ICONS.map((k) => { const sel = cf.ic === k; return { label: k, path: ICONS[k], bg: sel ? cf.bg : 'var(--surface)', bd: sel ? cf.color : 'var(--line)', fg: sel ? cf.color : 'var(--muted)', pick: () => this.setState({ catForm: Object.assign({}, this.state.catForm, { ic: k }) }) }; });

    // ===== عرض العمليات، البحث، الميزات الاحترافية =====
    const txExtra = (x) => (x.splits ? ' · مقسّمة' : '') + (x.refunded ? ' · رجع ' + fmt(x.refunded) : '') + (x.receipt ? ' · فاتورة مرفقة' : '') + (x.cash ? ' · كاش' : '') + (x.note ? ' · ' + x.note : '');
    const rowOf = (x, i) => Object.assign(txView(x, i), { open: () => this.openTx(x.id), extra: txExtra(x) });
    // ===== الرحلات =====
    const dLabel = (iso) => { if (!iso) return ''; const d = new Date(iso + 'T12:00:00'); return d.getDate() + ' ' + AR_M[d.getMonth()]; };
    const datesOf = (tr) => (tr.from ? dLabel(tr.from) + (tr.to && tr.to !== tr.from ? ' – ' + dLabel(tr.to) : '') + ' ' + (tr.to || tr.from).slice(0, 4) : 'بدون تواريخ');
    const daysOf = (tr) => (tr.from && tr.to ? Math.max(1, Math.round((new Date(tr.to + 'T12:00:00') - new Date(tr.from + 'T12:00:00')) / 86400000) + 1) : 0);
    const tripTxOf = (id) => st.txns.filter((x) => x.trip === id);
    const tripTotalOf = (id) => tripTxOf(id).reduce((a, x) => a + x.amount, 0);
    let curTrip = {};
    if (st.trip) {
      const ct = st.trip, tot = tripTotalOf(ct.id), nd = daysOf(ct);
      const now = Date.now();
      const startTs = ct.from ? new Date(ct.from + 'T00:00:00').getTime() : 0;
      let dayText = 'بدون تواريخ';
      if (ct.from && now < startTs) dayText = 'تبدأ ' + dLabel(ct.from);
      else if (nd) dayText = 'اليوم ' + Math.min(nd, Math.floor((now - startTs) / 86400000) + 1) + ' من ' + nd;
      curTrip = { dest: ct.dest, cur: ct.cur, dates: datesOf(ct) + (nd ? ' · ' + nd + (nd === 1 ? ' يوم' : (nd === 2 ? ' يومين' : ' أيام')) : ''), dayText,
        total: fmt(tot), local: Math.round(tot / (RATES[ct.cur] || 1)).toLocaleString('en-US'),
        hasBudget: !!ct.budget, pct: ct.budget ? Math.min(100, tot / ct.budget * 100).toFixed(1) : '0',
        budgetText: ct.budget ? 'من ميزانية ' + fmt(ct.budget) + ' ⃄ · باقي ' + fmt(ct.budget - tot) : '',
        overdue: !!(ct.to && now > new Date(ct.to + 'T23:59:59').getTime()), open: () => this.openTrip(ct.id) };
    }
    const pastTrips = st.trips.slice().reverse().map((tr, i) => ({ dest: tr.dest, dates: datesOf(tr), count: String(tripTxOf(tr.id).length), total: fmt(tripTotalOf(tr.id)), open: () => this.openTrip(tr.id), delay: 80 + i * 60 }));
    let td = { tiles: [], cats: [], rows: [], members: [] };
    if (st.screen === 'trip' && st.tripView) {
      const tr = tobj(st.tripView);
      const txs = tripTxOf(st.tripView);
      const tot = txs.reduce((a, x) => a + x.amount, 0);
      const tb = {};
      txs.forEach((x) => addParts(tb, x));
      const nd = daysOf(tr);
      const active = !!(st.trip && st.trip.id === st.tripView);
      const elapsed = nd ? (active ? Math.max(1, Math.min(nd, Math.floor((Date.now() - new Date(tr.from + 'T00:00:00').getTime()) / 86400000) + 1)) : nd) : 1;
      td = {
        dest: tr.dest, cur: tr.cur || '', dates: datesOf(tr) + (nd ? ' · ' + nd + (nd === 1 ? ' يوم' : (nd === 2 ? ' يومين' : ' أيام')) : ''), status: active ? 'جارية' : 'انتهت',
        total: fmt(tot), local: Math.round(tot / (RATES[tr.cur] || 1)).toLocaleString('en-US'),
        hasBudget: !!tr.budget, pct: tr.budget ? Math.min(100, tot / tr.budget * 100).toFixed(1) : '0',
        budgetText: tr.budget ? (tot > tr.budget ? 'تعدّيت الميزانية بـ ' + fmt(tot - tr.budget) + ' ⃄' : 'من ميزانية ' + fmt(tr.budget) + ' ⃄ · باقي ' + fmt(tr.budget - tot)) : '',
        tiles: [{ label: 'متوسط يومي', value: fmt(tot / elapsed) }, { label: 'العمليات', value: String(txs.length) }, { label: 'أكبر فئة', value: Object.keys(tb).length ? (catMap[Object.keys(tb).sort((a, b) => tb[b] - tb[a])[0]] || catMap.other).ar : '—' }],
        cats: Object.keys(tb).sort((a, b) => tb[b] - tb[a]).map((k, i) => { const c = catMap[k] || catMap.other; const pc = tot > 0 ? tb[k] / tot * 100 : 0; return { ar: c.ar, color: c.color, amt: fmt(tb[k]), pct: Math.round(pc), w: Math.max(3, pc).toFixed(1), delay: 100 + i * 60, open: () => this.openTxList(k, tr.id) }; }),
        rows: txs.map(rowOf), empty: txs.length === 0,
        hasMembers: !!(tr.members && tr.members.length), members: (tr.members || []).map((m) => ({ email: m, initial: m.charAt(0).toUpperCase() }))
      };
    }
    const txf = st.txFilter;
    let tl = txf.tripId ? st.txns.filter((x) => x.trip === txf.tripId) : (txf.period === 'range' ? st.txns.filter((x) => (!x.trip || txf.withTrips) && (x.ts || Date.now()) >= txf.from && (x.ts || Date.now()) < txf.to).sort((a, b) => (b.ts || Date.now()) - (a.ts || Date.now())) : st.txns.filter((x) => !x.trip && (txf.period === 'all' || txf.period === 'custom' || x.cycle === st.cycle)));
    if (txf.period === 'custom') {
      const pd = (iso, end) => { const p = String(iso || '').split('-').map(Number); return p.length === 3 && p[0] ? new Date(p[0], p[1] - 1, p[2] + (end ? 1 : 0)).getTime() : null; };
      const f0 = pd(txf.fromIso, false), t0 = pd(txf.toIso, true);
      tl = tl.filter((x) => { const ts = x.ts || Date.now(); return (f0 == null || ts >= f0) && (t0 == null || ts < t0); });
    }
    if (txf.cat) tl = tl.filter((x) => x.catId === txf.cat || (x.splits && x.splits.some((y) => y.catId === txf.cat)));
    if (txf.acc) tl = tl.filter((x) => (txf.acc === 'cash' ? !!x.cash : (!!x.last4 && accMatch({ last4: txf.acc }, x.last4))));
    const q = (txf.q || '').trim().toLowerCase();
    if (q) tl = tl.filter((x) => ((x.merchant || '') + ' ' + (x.note || '') + ' ' + ((catMap[x.catId] || {}).ar || '')).toLowerCase().indexOf(q) !== -1 || fmt(x.amount).indexOf(q) !== -1);
    const tlTotal = tl.reduce((a, x) => { if (txf.cat) { const mm = {}; addParts(mm, x); return a + (mm[txf.cat] || 0); } return a + x.amount; }, 0);
    const fc = txf.cat ? catMap[txf.cat] : null;
    const fbud = txf.cat ? st.budgets[txf.cat] : 0;
    const chip = (sel) => ({ cbg: sel ? 'var(--soft)' : 'var(--surface)', cfg: sel ? 'var(--accentText)' : 'var(--ink2)', cbd: sel ? 'var(--accent)' : 'var(--line)' });
    const setF = (patch) => this.setState({ txFilter: Object.assign({}, this.state.txFilter, patch) });
    const txl = {
      title: txf.tripId ? ('رحلة ' + ((st.trip && st.trip.id === txf.tripId ? st.trip : st.trips.find((x) => x.id === txf.tripId)) || { dest: '' }).dest + (fc ? ' · ' + fc.ar : '')) : (fc ? fc.ar : (txf.acc ? (() => { const aa = st.accounts.find((x) => (txf.acc === 'cash' ? x.type === 'cash' : x.last4 === txf.acc)); return aa ? (aa.name || bankOf(aa.bank).ar) + (aa.last4 ? ' •••• ' + aa.last4 : '') : 'عمليات الحساب'; })() : 'كل العمليات')),
      hasPeriods: !txf.tripId && txf.period !== 'range',
      hasPlanned: txf.cat === 'inst',
      plannedTitle: txf.cat === 'inst' ? 'أقساطك' : 'مصاريفك الثابتة',
      plannedTotal: fmt(txf.cat === 'inst' ? instMonthly : fixedOnly),
      planned: txf.cat === 'inst'
        ? st.installments.map((x) => ({ name: x.name, amt: fmt(Math.min(x.monthly, Math.max(0, x.total - x.paid))), state: x.total - x.paid > 0.0005 ? 'باقي ' + fmt(x.total - x.paid) + ' ⃄ من ' + fmt(x.total) : 'اكتمل', stateC: 'var(--muted)' }))
        : st.fixed.map((f) => { const paid = st.txns.some((x) => x.fixedPaid && x.cycle === st.cycle && x.merchant === f.name); return { name: f.name, amt: fmt(f.amount), state: paid ? 'انخصم هالشهر' : (f.day ? 'موعده يوم ' + f.day : 'ما انخصم للحين'), stateC: paid ? '#23624D' : 'var(--muted)' }; }),
      noPlanned: txf.cat === 'inst' ? st.installments.length === 0 : st.fixed.length === 0,
      sub: tl.length + ' عملية · ' + fmt(tlTotal) + ' ⃄' + (txf.period === 'range' ? ' · ' + txf.rangeLabel : (txf.period === 'all' ? ' · كل الوقت' : (txf.period === 'custom' ? ' · مدة محددة' : ' · هالشهر'))),
      hasCat: !txf.tripId && !!fc && CATS.some((c) => c.id === txf.cat), catBg: fc ? fc.bg : '', catColor: fc ? fc.color : '', catPath: fc ? ICONS[fc.ic] : '', total: fmt(tlTotal),
      hasBud: !!fbud, budPct: fbud ? Math.min(100, tlTotal / fbud * 100).toFixed(1) : '0',
      budBar: fbud && tlTotal > fbud ? '#9C2F3D' : (fbud && tlTotal >= fbud * 0.8 ? '#B0703F' : '#2E8A6B'),
      budText: fbud ? (tlTotal > fbud ? 'تعدّيت السقف بـ ' + fmt(tlTotal - fbud) + ' ⃄' : 'باقي لك ' + fmt(fbud - tlTotal) + ' ⃄ من سقف ' + fmt(fbud)) : '',
      budC: fbud && tlTotal > fbud ? '#9C2F3D' : 'var(--muted)',
      periods: [['cycle', 'هالشهر'], ['custom', 'مدة محددة']].map((x) => Object.assign(chip(txf.period === x[0]), { label: x[1], pick: () => setF(x[0] === 'custom' ? { period: 'custom', fromIso: txf.fromIso || isoOf(Date.now() - 30 * DAY_MS), toIso: txf.toIso || isoOf(Date.now()) } : { period: x[0] }) })),
      isCustom: txf.period === 'custom', fromIso: txf.fromIso || '', toIso: txf.toIso || '',
      onFrom: (e) => setF({ fromIso: e.target.value }), onTo: (e) => setF({ toIso: e.target.value }),
      catChips: [{ id: null, ar: 'كل الفئات' }].concat(CATS).map((c) => Object.assign(chip(txf.cat === c.id), { label: c.ar, pick: () => this.setState({ txFilter: Object.assign({}, this.state.txFilter, { cat: c.id }), budInput: c.id && this.state.budgets[c.id] ? String(this.state.budgets[c.id]) : '' }) })),
      hasAccChips: st.accounts.length > 0 && !txf.tripId,
      accChips: [{ k: null, label: 'كل الحسابات' }].concat(st.accounts.map((a) => ({ k: a.type === 'cash' ? 'cash' : a.last4, label: a.type === 'cash' ? 'نقد' : bankOf(a.bank).short + ' ••' + a.last4 }))).map((a) => Object.assign(chip(txf.acc === a.k), { label: a.label, pick: () => setF({ acc: a.k }) })),
      rows: tl.slice(0, 80).map(rowOf), empty: tl.length === 0,
      emptyText: q ? 'ما لقيت شي بهالكلمة… جرّب كلمة ثانية' : (fc ? 'ما فيه عمليات في هالفئة للحين' : 'ما فيه عمليات للحين')
    };
    // تقدر تصرف اليوم
    const goalsMonthly = st.goals.reduce((a, g) => a + g.monthly, 0);
    const daysLeft = Math.max(1, 30 - daysPassed + 1);
    const remainCycle = incomeSum - varSum - fixedSum - goalsMonthly;
    const safeVal = remainCycle / daysLeft;
    const safe = {
      show: incomeSum > 0, label: safeVal >= 0 ? 'تقدر تصرف اليوم' : 'تعدّيت ميزانية الشهر بـ',
      value: fmt(Math.max(0, safeVal >= 0 ? safeVal : -remainCycle)), color: safeVal >= 0 ? 'var(--ink)' : '#9C2F3D',
      sub: safeVal >= 0 ? 'وتظل ميزانيتك تمام لين الراتب الجاي · باقي ' + daysLeft + ' يوم' : 'حاول تخفف الصرف لين الراتب الجاي',
      bg: safeVal >= 0 ? 'var(--soft)' : '#F6E1E3', fg: safeVal >= 0 ? 'var(--accentText)' : '#9C2F3D'
    };
    // المواسم
    const actSeason = st.seasons.find((x) => x.active);
    const seasonSpent = (s) => st.txns.filter((x) => x.seasonId === s.id).reduce((a, x) => a + x.amount, 0);
    const season = actSeason ? (() => { const sp = seasonSpent(actSeason); return { active: true, name: actSeason.name, spent: fmt(sp), budget: fmt(actSeason.budget), pct: Math.min(100, sp / actSeason.budget * 100).toFixed(1), bar: sp > actSeason.budget ? '#9C2F3D' : (sp >= actSeason.budget * 0.8 ? '#B0703F' : '#8A5A1E') }; })() : { active: false };
    const seasonsView = st.seasons.slice().reverse().map((s) => { const sp = seasonSpent(s); return { name: s.name, active: s.active, state: s.active ? 'شغّال الحين' : 'خلص', stateC: s.active ? '#23624D' : 'var(--muted)', spent: fmt(sp), budget: fmt(s.budget), pct: Math.min(100, sp / s.budget * 100).toFixed(1), bar: sp > s.budget ? '#9C2F3D' : '#8A5A1E', end: () => this.endSeason(s.id) }; });
    // الاشتراكات
    const subGroups = {};
    st.txns.forEach((x) => {
      if (!(x.catId === 'subs' || SUB_RE.test(x.merchant))) return;
      const k = x.merchant.split(' · ')[0];
      if (st.subsIgnored.indexOf(k) !== -1) return;
      const g = subGroups[k] = subGroups[k] || { name: k, amount: x.amount, last: x.ts || 0, count: 0 };
      g.count++;
      if ((x.ts || 0) >= g.last) { g.last = x.ts || g.last; g.amount = x.amount; }
    });
    const mySubs = st.subs || [];
    const subKnown = (nm) => mySubs.some((x) => subNameHit(x.name, nm));
    const subsList = mySubs;
    const subSug = Object.keys(subGroups).map((k) => subGroups[k]).filter((g) => !subKnown(g.name)).slice(0, 4).map((g) => ({
      name: g.name, sub: fmt(g.amount) + ' ⃄ · آخر خصم ' + dueLabel(g.last || Date.now()) + (g.count > 1 ? ' · تكرر ' + g.count : ''),
      add: () => this.openSubForm({ name: g.name, amount: String(g.amount), period: 'm', end: isoOf((g.last || Date.now()) + 30 * DAY_MS) }),
      ignore: () => this.setState({ subsIgnored: this.state.subsIgnored.concat([g.name]) })
    }));
    const nowD = new Date(); nowD.setHours(0, 0, 0, 0);
    const subsView = mySubs.slice().sort((p, q) => (p.end || 0) - (q.end || 0)).map((x) => {
      const days = x.end ? Math.round((new Date(x.end).setHours(0, 0, 0, 0) - nowD.getTime()) / DAY_MS) : null;
      const per = x.period === 'y' ? ' بالسنة' : ' بالشهر';
      const sub = days == null ? 'حدد تاريخ الانتهاء' : (days < 0 ? 'انتهى ' + dueLabel(x.end) + ' · جدده أو احذفه' : (days === 0 ? 'ينتهي اليوم' : 'ينتهي ' + dueLabel(x.end) + ' · باقي ' + (days === 1 ? 'يوم' : days === 2 ? 'يومين' : days + ' يوم')));
      return { id: x.id, name: x.name, initial: x.name.charAt(0).toUpperCase(), amt: fmt(x.amount), sub: sub + ' ·' + per, subC: days != null && days < 0 ? '#9C2F3D' : (days != null && days <= 3 ? '#A85A2C' : 'var(--muted)'), days, raw: x,
        open: () => this.setState({ modal: { type: 'sub', id: x.id }, subDel: false }) };
    });
    const subsTotal = mySubs.reduce((a, x) => a + (x.period === 'y' ? x.amount / 12 : x.amount), 0);
    let sv = { rows: [], hist: [] };
    const svOpen = st.modal && st.modal.type === 'sub' ? subsView.find((y) => y.id === st.modal.id) : null;
    if (svOpen) {
      const x = svOpen.raw;
      const hist = st.txns.filter((t) => subTxHit(x, t)).sort((p, q) => (q.ts || 0) - (p.ts || 0));
      sv = Object.assign({}, svOpen, {
        state: svOpen.sub, stateC: svOpen.subC,
        rows: [{ k: 'المبلغ', v: fmt(x.amount) + ' ⃄' }, { k: 'يتجدد كل', v: x.period === 'y' ? 'سنة' : 'شهر' }, { k: 'تاريخ الانتهاء', v: x.end ? dueLabel(x.end) + ' ' + new Date(x.end).getFullYear() : '—' }, { k: 'دفعت عليه لين الحين', v: fmt(hist.reduce((a, t) => a + t.amount, 0)) + ' ⃄' }],
        hist: hist.slice(0, 24).map((t) => { const d = new Date(t.ts || Date.now()); return { date: d.getDate() + ' ' + AR_M[d.getMonth()] + ' ' + d.getFullYear(), amt: fmt(t.amount) }; }),
        noHist: hist.length === 0,
        renew: () => this.renewSub(x.id),
        edit: () => this.openSubForm({ id: x.id, name: x.name, amount: String(x.amount), period: x.period || 'm', end: x.end ? isoOf(x.end) : '' }),
        delAsk: !!st.subDel, delBtn: !st.subDel,
        askDel: () => this.setState({ subDel: true }), delCancel: () => this.setState({ subDel: false }),
        del: () => { this.setState({ subs: this.state.subs.filter((y) => y.id !== x.id), modal: null, subDel: false }); this.say('انحذف اشتراك ' + x.name); }
      });
    }
    const sfS = st.sf || { name: '', amount: '', period: 'm', end: '' };
    const setSf = (k, clean) => (e) => { const o = Object.assign({}, this.state.sf); o[k] = clean ? e.target.value.replace(/[^0-9.]/g, '') : e.target.value; this.setState({ sf: o }); };
    const sf = Object.assign({}, sfS, {
      title: sfS.id ? 'تعديل الاشتراك' : 'اشتراك جديد',
      onName: setSf('name'), onAmount: setSf('amount', true), onEnd: setSf('end'),
      periods: [['m', 'شهر'], ['y', 'سنة']].map((p) => { const on = (sfS.period || 'm') === p[0]; return { label: p[1], cbg: on ? '#EEE7F6' : 'var(--surface)', cfg: on ? '#4E3672' : 'var(--ink2)', cbd: on ? '#6A4C93' : 'var(--line)', pick: () => this.setState({ sf: Object.assign({}, this.state.sf, { period: p[0] }) }) }; }),
      save: () => this.saveSub()
    });
    if (subsList.length) tips.push({ title: 'راجع اشتراكاتك', body: 'عندك ' + subsList.length + ' اشتراك بـ ' + fmt(subsTotal) + ' ⃄ بالشهر. اللي ما تستخدمه، ألغه وريّح محفظتك.', path: ICONS.repeat, bg: '#EEE7F6', fg: '#6A4C93', delay: 400 + tips.length * 70 });
    // التقرير
    let repView = { tiles: [], cats: [], top: [], hasTop: false };
    if (st.modal && st.modal.type === 'report') {
      const r = (!st.reportId || st.reportId === 'current') ? this.buildReport(st.cycle, 'تقرير هالشهر (من ' + st.cycleStartLabel + ')') : st.reports.find((x) => x.id === st.reportId);
      if (r) {
        const tot = Object.keys(r.byCat).reduce((a, k) => a + r.byCat[k], 0) || 1;
        repView = {
          title: r.title, sub: r.count + ' عملية',
          tiles: [{ label: 'صرفت', value: fmt(r.spent), color: 'var(--ink)' }, { label: 'الدخل', value: r.income ? fmt(r.income) : '—', color: 'var(--ink)' }, { label: 'وفّرت', value: fmt(r.saved), color: '#23624D' }],
          cats: Object.keys(r.byCat).sort((a, b) => r.byCat[b] - r.byCat[a]).slice(0, 6).map((k) => { const c = catMap[k] || catMap.other; const pc = r.byCat[k] / tot * 100; return { ar: c.ar, color: c.color, amt: fmt(r.byCat[k]), pct: Math.round(pc), w: Math.max(3, pc).toFixed(1) }; }),
          top: r.top.map((m) => ({ name: m.name, amt: fmt(m.amount), count: String(m.count) })), hasTop: r.top.length > 0,
          note: r.saved > 0 ? 'وفّرت ' + fmt(r.saved) + ' ⃄ هالفترة' : (r.income ? 'صرفت أكثر من دخلك هالفترة' : 'سجّل دخلك عشان أقول لك كم وفّرت')
        };
      }
    }
    // تفاصيل العملية
    let txe = { chips: [], splitRows: [], flags: [] };
    if (st.txEdit) {
      const e = st.txEdit;
      const t0 = st.txns.find((x) => x.id === e.id) || {};
      const c = catMap[e.catId] || catMap.other;
      const flags = [];
      if (t0.refunded) flags.push({ label: 'رجع منها ' + fmt(t0.refunded) + ' ⃄ (الأصل ' + fmt(t0.origAmount) + ')', bg: '#E3F0EA', fg: '#23624D' });
      if (t0.receipt) flags.push({ label: 'فاتورة مرفقة', bg: '#F3ECD9', fg: '#6E5415' });
      if (t0.cash) flags.push({ label: 'كاش', bg: '#E3F0EA', fg: '#23624D' });
      if (t0.trip) flags.push({ label: 'ضمن رحلة', bg: '#E3E9F3', fg: '#22385A' });
      if (t0.fixedPaid) flags.push({ label: 'من المصاريف الثابتة', bg: '#E2ECE8', fg: '#3D5A52' });
      const amt = parseFloat(e.amount) || 0;
      const sum = e.splits ? e.splits.reduce((a, x) => a + (parseFloat(x.amount) || 0), 0) : 0;
      const diff = Math.round((amt - sum) * 1000) / 1000;
      txe = {
        bg: c.bg, color: c.color, path: ICONS[c.ic], sub: (t0.dateShort || '') + ' · ' + (SRC[t0.src] || '') + (t0.last4 ? ' · ••' + t0.last4 : ''),
        hasSeason: !!(t0.seasonId || st.seasons.some((x) => x.active)),
        seasonText: (() => { const sn = (st.seasons.find((x) => x.id === (t0.seasonId || this.seasonId())) || { name: '' }).name; return e.seasonOn ? 'محسوبة من ميزانية ' + sn : 'مو من ميزانية ' + sn + ' · اضغط لو تبيها منها'; })(),
        seasonSw: { bg: e.seasonOn ? 'var(--accent)' : 'var(--off)', x2: knobX(e.seasonOn, 18), aria: e.seasonOn ? 'true' : 'false' },
        seasonToggle: () => this.setTxe({ seasonOn: !this.state.txEdit.seasonOn }),
        flags, hasFlags: flags.length > 0, amount: e.amount, merchant: e.merchant, note: e.note,
        catName: c.ar, notSplit: !e.splits, isSplit: !!e.splits, splitLabel: e.splits ? 'إلغاء التقسيم' : 'تقسيم المبلغ على أكثر من فئة (اختياري)',
        chips: chipsFor(e.catId, (id) => this.setTxe({ catId: id })),
        splitRows: (e.splits || []).map((x, i) => ({
          selId: 'sps' + i, amtId: 'spa' + i, cat: x.catId, amount: x.amount, opts: CATS.map((cc) => ({ id: cc.id, ar: cc.ar })),
          onCat: (ev) => { const sp = this.state.txEdit.splits.slice(); sp[i] = Object.assign({}, sp[i], { catId: ev.target.value }); this.setTxe({ splits: sp }); },
          onAmt: (ev) => { const sp = this.state.txEdit.splits.slice(); sp[i] = Object.assign({}, sp[i], { amount: ev.target.value.replace(/[^0-9.]/g, '') }); this.setTxe({ splits: sp }); },
          remove: () => { const sp = this.state.txEdit.splits.filter((_, j) => j !== i); this.setTxe({ splits: sp.length ? sp : null }); }
        })),
        remain: Math.abs(diff) < 0.0015 ? 'مضبوط' : (diff > 0 ? 'باقي ' + fmt(diff) + ' ⃄ ما توزعت' : 'زايد ' + fmt(-diff) + ' ⃄ عن المبلغ'),
        remainC: Math.abs(diff) < 0.0015 ? '#23624D' : '#A85A2C',
        delLabel: e.confirmDel ? 'متأكد؟ اضغط مرة ثانية' : 'حذف العملية', delBg: e.confirmDel ? '#9C2F3D' : '#FBEFF0', delFg: e.confirmDel ? '#FFFFFF' : '#9C2F3D'
      };
    }
    // الفاتورة المكررة
    const rmatch = st.rStage === 'done' ? this.receiptMatch() : null;
    const rMatch = rmatch ? {
      has: true,
      title: rmatch.kind === 'tx' ? 'شكلها نفس عملية ' + rmatch.item.merchant : 'عندك رسالة بنك بنفس المبلغ تنتظر موافقتك',
      body: rmatch.kind === 'tx' ? 'انسجلت من رسالة البنك (' + (rmatch.item.dateShort || '') + ') بنفس المبلغ. إذا هي نفسها، أربط الفاتورة فيها بدل ما أحسبها مرتين.' : rmatch.item.merchant + ' بـ ' + fmt(rmatch.item.amount) + ' ⃄. أوافق عليها وأربط الفاتورة فيها؟',
      linkLabel: rmatch.kind === 'tx' ? 'نفسها، اربطها' : 'وافق واربط الفاتورة'
    } : { has: false };
    const cashAcc = st.accounts.find((a) => a.type === 'cash');

    const sqOn = st.mSeason == null ? (st.tab === 'receipt' ? true : this.seasonDefault(st.mCat)) : st.mSeason;
    const seasonQ = { show: !!actS, sw: sw(sqOn), title: 'تنخصم من ميزانية ' + (actS ? actS.name : '') + '؟', sub: sqOn ? 'بتنحسب ضمن ميزانية ' + (actS ? actS.name : '') : 'بتنسجل مصروف عادي، برا الميزانية',
      toggle: () => this.setState({ mSeason: !sqOn }) };
    const incK = st.addKind === 'inc';
    const addKinds = [['exp', 'مصروف', '−'], ['inc', 'دخل', '+']].map((k) => { const on = (st.addKind || 'exp') === k[0]; const isInc = k[0] === 'inc';
      return { label: k[1], sign: k[2], aria: on ? 'true' : 'false', bg: on ? (isInc ? '#E3F0EA' : 'var(--accent)') : 'var(--surface)', fg: on ? (isInc ? '#1E5C45' : '#FFFFFF') : 'var(--ink2)', bd: on ? (isInc ? '#2E8A6B' : 'var(--accent)') : 'var(--line)', pick: () => this.setState({ addKind: k[0] }) }; });
    const ignoredView = (st.ignoredAccs || []).map((g) => ({ label: '•••• ' + g.digits + (g.bank ? ' · ' + bankOf(g.bank).ar : ''), undo: () => this.unignoreAcc(g.digits) }));
    const payOpts = [{ id: null, label: 'بدون تحديد', dot: 'var(--off)' }, { id: 'cash', label: 'كاش', dot: '#2E8A6B' }].concat(st.accounts.filter((x) => x.type !== 'cash').map((x) => ({ id: x.id, label: (x.name || bankOf(x.bank).ar) + ' ••' + x.last4, dot: bankOf(x.bank).color })));
    const payFrom = payOpts.map((o) => { const on = (st.mPay || null) === o.id; return { label: o.label, dot: o.dot, cbg: on ? 'var(--soft)' : 'var(--surface)', cfg: on ? 'var(--accentText)' : 'var(--ink2)', cbd: on ? 'var(--accent)' : 'var(--line)', pick: () => this.setState({ mPay: o.id, mCash: o.id === 'cash' }) }; });
    const payAcc = st.mPay && st.mPay !== 'cash' ? st.accounts.find((x) => x.id === st.mPay) : null;
    const payFromHint = st.mPay === 'cash' ? 'بينقص من محفظة النقد' : (payAcc ? 'بينربط بالحساب وينقص من رصيده. وإذا وصلت رسالة البنك بنفس المبلغ، بنبهك إنها نفس العملية' : 'ما بينربط بأي حساب');
    return {
      payFrom, payFromHint,
      ignoredView, hasIgnored: ignoredView.length > 0,
      seasonQ, addKinds, addIsInc: incK, addIsExp: !incK, addHead: incK ? 'أضف دخل' : (st.lang === 'en' ? 'Add expense' : 'أضف مصروف'), addSub: incK ? 'راتب، أو أي دخل ثاني لمرة وحدة' : 'ثلاث طرق، اختر اللي يريحك',
      isAccount: st.screen === 'account', av: this.buildAccView(catMap),
      rp: this.buildRp(catMap, tobj),
      isHome: st.screen === 'home', isAdd: st.screen === 'add', isStats: st.screen === 'stats', isTravel: st.screen === 'travel', isMore: st.screen === 'more',
      nav: { home: navCls('home'), stats: navCls('stats'), travel: navCls('travel'), more: navCls('more') },
      fabCls: st.screen === 'add' ? 'fab press on' : 'fab press',
      goHome: () => this.go('home'), goStats: () => this.go('stats'), goTravel: () => this.go('travel'), goMore: () => this.go('more'), goAddIncome: () => this.setState({ screen: 'add', addKind: 'inc' }),
      fabTap: () => (st.screen === 'add' ? this.go('home') : this.setState({ screen: 'add', addKind: 'exp' })),
      monthLabel: AR_M[now.getMonth()] + ' ' + now.getFullYear(),
      totalStr: fmt(total), fixedStr: fmt(fixedSum), incomeStr: incomeSum > 0 ? fmt(incomeSum) : '—',
      remainStr: incomeSum > 0 ? fmt(incomeSum - total) : '—', noIncome: incomeSum <= 0, spentW: spentW.toFixed(1),
      hasPending: st.pending.length > 0, pendingCount: String(st.pending.length), pendingView,
      recent: st.txns.filter((x) => !x.trip).slice(0, 8).map(rowOf), noTx: !st.txns.some((x) => !x.trip),
      tripOn, tripOff: !tripOn, tripDest: trip ? trip.dest : '', tripCur: trip ? trip.cur : '',
      tripSpentStr: fmt(tripSpent), tripLocalStr: Math.round(tripSpent / rate).toLocaleString('en-US'),
      tripHasBudget: !!(trip && trip.budget), tripPct: trip && trip.budget ? Math.min(100, tripSpent / trip.budget * 100).toFixed(1) : '0',
      tripBudgetStr: trip && trip.budget ? fmt(trip.budget) : '', tripLeftStr: trip && trip.budget ? fmt(trip.budget - tripSpent) : '',
      tripTx: tripTxRaw.map(rowOf), tripEmpty: tripTxRaw.length === 0,
      endTrip: () => this.endTrip(), startTrip: () => this.startTrip(),
      hasLastTrip: !!st.lastTrip, lastTrip: st.lastTrip || {},
      tf: st.tf, curChips,
      onTfDest: (e) => {
        const v = e.target.value;
        const d = detectCountry(v);
        const tf = Object.assign({}, this.state.tf, { dest: v });
        if (!tf.manual) tf.cur = d ? d.cur : null;
        this.setState({ tf });
      },
      tfInfoShow: !!tfCur && (hasDest || st.tf.manual),
      tfDetLabel: st.tf.manual ? 'اخترت العملة بنفسك' : (det ? 'تعرّفت على الوجهة: ' + det.ar : ''),
      tfCurLabel: tfCur ? CUR_AR[tfCur] + ' (' + tfCur + ') · 1 ' + tfCur + ' ≈ ' + rateStr(RATES[tfCur] || 0) + ' ⃄' : '',
      tfUnknown: hasDest && !det && !st.tf.manual,
      tfShowChips: st.tfPick || (hasDest && !det && !st.tf.manual),
      tfToggleCur: () => this.setState({ tfPick: !this.state.tfPick }),
      onTfBudget: (e) => this.setState({ tf: Object.assign({}, st.tf, { budget: e.target.value }) }),

      tabX: (tabIdx * -100) + '%',
      tabC: { sms: st.tab === 'sms' ? 'var(--ink)' : 'var(--muted)', manual: st.tab === 'manual' ? 'var(--ink)' : 'var(--muted)', receipt: st.tab === 'receipt' ? 'var(--ink)' : 'var(--muted)' },
      tabSms: () => this.setState({ tab: 'sms' }), tabManual: () => this.setState({ tab: 'manual' }), tabReceipt: () => this.setState({ tab: 'receipt' }),
      isSms: st.tab === 'sms', isManual: st.tab === 'manual', isReceipt: st.tab === 'receipt',
      samples: SAMPLES.map((s) => ({ label: s.label, use: () => this.setState({ smsText: s.text, catPick: null, showPick: false }) })),
      smsText: st.smsText, onSms: (e) => this.setState({ smsText: e.target.value, catPick: null, showPick: false }),
      pvOk, pvBad, pv, pvChips,
      togglePick: () => this.setState({ showPick: !st.showPick }),
      saveSms: () => this.saveSms(), saveCredit: () => this.saveCredit(), askLater: () => this.askLater(), tripFromSms: () => this.tripFromSms(),

      mAmt: st.mAmt, mName: st.mName,
      onMAmt: (e) => this.setState({ mAmt: e.target.value.replace(/[^0-9.]/g, '') }),
      onMName: (e) => this.setState({ mName: e.target.value }),
      mChips: chipsFor(st.mCat, (id) => this.setState({ mCat: id })),
      saveManual: () => this.saveManual(),

      rNotDone: st.rStage !== 'done', rDone: st.rStage === 'done', rScanning: st.rStage === 'scan',
      rHint: st.rStage === 'scan' ? 'لحظة… أقرأ الفاتورة سطر سطر' : 'وجّه الكاميرا على الفاتورة، وخلها تبين زين',
      scan: () => this.scan(), retake: () => this.setState({ rStage: 'idle' }), saveReceipt: () => this.saveReceipt(),
      receipt: { store: RECEIPT.store, date: RECEIPT.date, total: fmt(RECEIPT.total), items: RECEIPT.items.map((it, i) => ({ name: it[0], amt: fmt(it[1]), delay: 100 + i * 90 })) },

      statRows, donutBg, insights, tips,

      incomeView: st.income.map((x) => ({ name: x.name, amt: fmt(x.amount), sub: x.once ? 'يدوي · ' + (x.dateShort || '') : 'يتكرر تلقائياً كل شهر' + (x.day ? ' يوم ' + x.day : ''), tagC: x.once ? '#A85A2C' : 'var(--accent)', remove: () => this.setState({ income: this.state.income.filter((y) => y.id !== x.id) }) })),
      inTypeChips, inRepOn: !st.inOnce, inRepSw: { bg: !st.inOnce ? 'var(--accent)' : 'var(--off)', x: knobX(!st.inOnce, 20), aria: !st.inOnce ? 'true' : 'false' },
      toggleInRep: () => this.setState({ inOnce: !this.state.inOnce }), inDate: st.inDate || '', onInDate: (e) => this.setState({ inDate: e.target.value }),
      inRepSub: st.inOnce ? 'مقفل: تسجل الدخل بيدك أو ينقرى من رسالة البنك، لأن موعده ممكن يتقدم أو يتأخر' : 'ينحسب تلقائياً كل شهر في التاريخ اللي تحدده',
      fixedView: st.fixed.map((x) => ({ name: x.name, amt: fmt(x.amount), dayLabel: x.day ? 'يتخصم يوم ' + x.day + ' من كل شهر' : 'شهرياً', remove: () => this.setState({ fixed: this.state.fixed.filter((y) => y.id !== x.id) }) })),
      inSug: (st.inOnce ? ['مكافأة', 'بيع غرض', 'هدية', 'استرداد مبلغ'] : ['الراتب', 'بدل', 'عمل حر', 'إيجار عقار']).map((l) => ({ label: l, use: () => this.setState({ inName: l }) })),
      fxSug: ['إيجار', 'إنترنت', 'كهرباء ومياه', 'قسط سيارة', 'اشتراكات', 'تأمين'].map((l) => ({ label: l, use: () => this.setState({ fxName: l }) })),
      inName: st.inName, inAmt: st.inAmt, fxName: st.fxName, fxAmt: st.fxAmt, fxDay: st.fxDay,
      onInName: (e) => this.setState({ inName: e.target.value }), onInAmt: (e) => this.setState({ inAmt: e.target.value.replace(/[^0-9.]/g, '') }),
      onFxName: (e) => this.setState({ fxName: e.target.value }), onFxAmt: (e) => this.setState({ fxAmt: e.target.value.replace(/[^0-9.]/g, '') }),
      onFxDay: (e) => this.setState({ fxDay: e.target.value.replace(/[^0-9]/g, '').slice(0, 2) }),
      addIncome: () => this.addIncome(), addFixed: () => this.addFixed(),
      watchBg: st.watch ? 'var(--accent)' : 'var(--off)', watchX: knobX(st.watch, 20), watchAria: st.watch ? 'true' : 'false',
      toggleWatch: () => { this.setState({ watch: !st.watch }); this.say(st.watch ? 'وقفت قراءة رسائل هذا الحساب' : 'رجعت أقرأ رسائل هذا الحساب'); },
      hasLearned: learnedKeys.length > 0,
      learnedView: learnedKeys.map((k) => ({ m: k, c: this.catAr(st.learned[k]) })),

      isOnboard: st.screen === 'onboard', obWelcome: st.obStep === 0, obPerms: st.obStep === 2, obAccounts: st.obStep === 3,
      obNext: () => this.setState({ obStep: 1, pf: Object.assign({}, this.state.profile) }), obBack: () => this.setState({ obStep: Math.max(0, this.state.obStep - 1) }),
      finishOnboard: () => this.finishOnboard(),
      goAccounts: () => this.setState({ screen: 'onboard', obStep: 3 }),
      showNav: st.screen !== 'onboard', scrollBottom: st.screen === 'onboard' ? '0px' : (st.screen === 'advisor' ? '152px' : '84px'),
      accView, hasAccounts: nAcc > 0, noAccounts: nAcc === 0, balTotal: fmt(netBal), accCountLabel,
      accFormTitle: nAcc ? 'إضافة حساب آخر' : 'أضف أول حساب', accAddLabel: nAcc ? '+ إضافة حساب آخر' : '+ أضف الحساب', accOpenLabel: nAcc ? '+ إضافة حساب آخر' : '+ أضف حساب أو بطاقة',
      bankChips, typeChips, ob: st.ob, obBalLabel: st.ob.type === 'card' ? 'المبلغ المستحق' : 'الرصيد الحالي',
      onObLast4: (e) => this.setState({ ob: Object.assign({}, this.state.ob, { last4: e.target.value.replace(/[^0-9]/g, '').slice(0, 4) }) }),
      onObBal: (e) => this.setState({ ob: Object.assign({}, this.state.ob, { bal: e.target.value.replace(/[^0-9.]/g, '') }) }),
      addAccount: () => this.addAccount(), addAccFromSms: () => this.addAccFromSms(),
      showAccForm: st.showAccForm, hideAccForm: !st.showAccForm, openAccForm: () => this.setState({ showAccForm: true }),

      instView, noInst: st.installments.length === 0, hasInst: st.installments.length > 0, instMonthlyStr: fmt(instMonthly),
      iv, openInstForm: () => this.setState({ modal: { type: 'instForm' }, ins: { name: '', total: '', monthly: '', paid: '', due: '', auto: false } }),
      insAutoSw: { bg: st.ins.auto ? 'var(--accent)' : 'var(--off)', x: knobX(!!st.ins.auto, 20), aria: st.ins.auto ? 'true' : 'false' }, insAuto: !!st.ins.auto, toggleInsAuto: () => this.setState({ ins: Object.assign({}, this.state.ins, { auto: !this.state.ins.auto }) }),
      instSug: ['قسط تلفون', 'قسط سيارة', 'قرض شخصي', 'أثاث', 'تمويل عقاري'].map((l) => ({ label: l, use: () => this.setState({ ins: Object.assign({}, this.state.ins, { name: l }) }) })),
      ins: st.ins, onInsName: setIns('name'), onInsTotal: setIns('total'), onInsMonthly: setIns('monthly'), onInsPaid: setIns('paid'), onInsDue: setIns('due'),
      insPreview: insOk, insPreviewText: insOk ? 'باقي ' + monthsAr(insN) + ' · آخر قسط ' + monthAdd(insN) + (iP > 0 ? ' · مدفوع ' + Math.round(iP / iT * 100) + '٪' : '') : '',
      addInstallment: () => this.addInstallment(), passMonth: () => this.passMonth(),

      arrive: () => this.arrive(),  approveAll: () => this.approveAll(), suggestCount: String(sugN), hasManySuggest: sugN >= 2,
      cycleRange: 'من ' + st.cycleStartLabel, cycleNote: st.cycleSalary ? 'نزول الراتب' : 'يبدأ شهر جديد لما ينزل راتبك',
      hasSavingsOffer: !!st.savingsOffer, savingsAmt: st.savingsOffer ? fmt(st.savingsOffer.amount) : '',
      savingsHasAcc: !!savTarget, savingsNoAcc: !savTarget,
      savingsHint: (() => { const s = savTarget; return s ? 'حوّله لحساب الادخار في ' + bankOf(s.bank).ar + ' قبل لا تبدأ تصرف' : 'افتح حساب ادخار منفصل وأضفه هنا، وأتابعه لك'; })(),
      transferSavings: () => this.transferSavings(),
      dismissSavings: () => { this.setState({ savingsOffer: null }); this.say('تمام، بذكّرك بعدين'); },
      addSavingsAcc: () => this.setState({ screen: 'more', showAccForm: true, ob: Object.assign({}, this.state.ob, { type: 'savings' }) }),

      isAdvisor: st.screen === 'advisor',
      goAdvisor: () => this.goAdvisorNow(), advBack: () => this.setState({ screen: this.state.advBack || 'home' }),
      showAdvisorFab: st.screen !== 'onboard' && st.screen !== 'advisor',
      unread: String(st.unread), hasUnread: st.unread > 0,
      hasNudge: !!st.nudge, nudgeText: st.nudge,
      chatView: st.chat.map((m) => {
        const u = m.role === 'user';
        return { hasActions: !!(m.actions && m.actions.length), actions: (m.actions || []).map((l) => ({ label: l })), text: m.text, thinking: !!m.thinking && !m.text, proactive: !!m.proactive, justify: u ? 'flex-start' : 'flex-end', bg: u ? 'var(--accent)' : 'var(--surface)', fg: u ? '#FFFFFF' : 'var(--ink)', radius: u ? '18px 18px 6px 18px' : '18px 18px 18px 6px' };
      }),
      chatInput: st.chatInput, onChatInput: (e) => this.setState({ chatInput: e.target.value }),
      onChatSubmit: (e) => { if (e && e.preventDefault) e.preventDefault(); this.ask(this.state.chatInput); },
      chatBusy: st.chatBusy, notBusy: !st.chatBusy, stopChat: () => { if (this.ctl) this.ctl.abort(); },
      quickPrompts: ['رتّب لي ميزانية', 'كيف أتخلص من ديوني؟', 'وين أقدر أوفر؟', 'حلّل صرفي هالشهر'].map((l) => ({ label: l, ask: () => this.ask(l) })),
      aiStatus: st.aiReady ? 'ذكاء اصطناعي · يقرأ أرصدتك ومصاريفك' : 'يحلل بياناتك على الجهاز',
      aiDot: st.aiReady ? '#2E8A6B' : '#B0703F',
      setEnd: (el) => { this.endEl = el; },
      ctxChips: [
        { label: 'صرفت', value: fmt(total) },
        { label: 'صافي الأرصدة', value: fmt(netBal) },
        { label: 'أقساط متبقية', value: fmt(st.installments.reduce((a, x) => a + Math.max(0, x.total - x.paid), 0)) },
        { label: 'تنتظر موافقتك', value: String(st.pending.length) }
      ],

      openShade: () => this.setState({ shadeOpen: true, heads: null }), closeShade: () => this.setState({ shadeOpen: false }),
      closeHeads: () => this.setState({ heads: null }),
      shadeOpen: st.shadeOpen,
      hasHeads: !!headsView, heads: headsView || { actions: [] },
      notifs, noNotifs: notifs.length === 0, hasNotifs: notifs.length > 0, notifCount: String(notifs.length),
      hasPlan: Object.keys(st.budgets).length > 0 || st.goals.length > 0,
      budgetsView: Object.keys(st.budgets).map((k) => {
        const sp = byCat[k] || 0, b = st.budgets[k];
        return { ar: this.catAr(k), amt: fmt(b), spent: fmt(sp), pct: Math.min(100, sp / b * 100).toFixed(1), bar: sp > b ? '#9C2F3D' : (sp >= b * 0.8 ? '#B0703F' : '#2E8A6B'),
          remove: () => { const nb = Object.assign({}, this.state.budgets); delete nb[k]; this.setState({ budgets: nb }); this.say('ألغيت السقف'); } };
      }),
      goalsView: st.goals.map((g) => ({ name: g.name, sub: fmt(g.target) + ' ⃄ · ' + fmt(g.monthly) + ' شهرياً · توصل له خلال ' + monthsAr(Math.ceil(g.target / g.monthly - 1e-9)),
        remove: () => this.setState({ goals: this.state.goals.filter((x) => x.id !== g.id) }) })),

      curTrip, pastTrips, hasPastTrips: pastTrips.length > 0, isTrip: st.screen === 'trip', td,
      tripBack: () => this.go(st.tripBackScreen && st.tripBackScreen !== 'trip' ? st.tripBackScreen : 'travel'),
      onTfFrom: (e) => this.setState({ tf: Object.assign({}, this.state.tf, { from: e.target.value }) }),
      onTfTo: (e) => this.setState({ tf: Object.assign({}, this.state.tf, { to: e.target.value }) }),
      tfDaysShow: !!(st.tf.from && st.tf.to && st.tf.to >= st.tf.from),
      tfDaysText: st.tf.from && st.tf.to && st.tf.to >= st.tf.from ? (() => { const n = daysOf(st.tf); return 'مدة الرحلة: ' + n + (n === 1 ? ' يوم' : (n === 2 ? ' يومين' : ' أيام')); })() : '',
      statsTotalStr: fmt(grand),
      amtCls: st.hideAmt ? 'hide-amt' : '', toggleHide: () => this.setState({ hideAmt: !this.state.hideAmt }),
      eyeAria: st.hideAmt ? 'true' : 'false', eyeLabel: st.hideAmt ? 'أظهر المبالغ' : 'أخفِ المبالغ',
      eyePath: st.hideAmt ? 'M3 3l18 18M10.6 5.1A10.8 10.8 0 0 1 12 5c6.5 0 10 7 10 7a17 17 0 0 1-3.2 4.2M6.6 6.6C3.9 8.4 2 12 2 12s3.5 7 10 7c1.7 0 3.2-.4 4.5-1.1M9.9 9.9a3 3 0 0 0 4.2 4.2' : 'M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
      isTxList: st.screen === 'txlist', txl, txf: st.txFilter,
      onTxQ: (e) => this.setState({ txFilter: Object.assign({}, this.state.txFilter, { q: e.target.value }) }),
      txlBack: () => this.go(st.txBack && st.txBack !== 'txlist' ? st.txBack : 'home'),
      openAllTx: () => this.openTxList(null), seeAllLabel: rtl ? 'الكل' : 'All',
      tfr: (() => { const f = st.tfr || {}; const setT = (p) => this.setState({ tfr: Object.assign({}, this.state.tfr, p) }); const item = (a, sel, dis) => ({ label: accLabel(a), bal: fmt(availOf(a)) + ' ⃄', cbg: sel ? 'var(--soft)' : 'var(--surface)', cbd: sel ? 'var(--accent)' : 'var(--line)', op: dis ? 0.4 : 1 });
        return { amount: f.amount || '', note: f.note || '', onAmount: (e) => setT({ amount: e.target.value.replace(/[^0-9.]/g, '') }), onNote: (e) => setT({ note: e.target.value }),
          fromList: st.accounts.map((a) => Object.assign(item(a, f.from === a.id, false), { pick: () => setT({ from: a.id, to: this.state.tfr.to === a.id ? null : this.state.tfr.to }) })),
          toList: st.accounts.map((a) => Object.assign(item(a, f.to === a.id, f.from === a.id), { pick: () => { if (this.state.tfr.from !== a.id) setT({ to: a.id }); } })),
          save: () => this.doTransfer() }; })(),
      mv: (() => { const m = st.modal && st.modal.type === 'move' ? (st.moves || []).find((x) => x.id === st.modal.id) : null; if (!m) return { rows: [] }; const fa = st.accounts.find((x) => x.id === m.from), ta = st.accounts.find((x) => x.id === m.to);
        return { amt: fmt(m.amount), rows: [{ k: 'من', v: fa ? accLabel(fa) : '—' }, { k: 'إلى', v: ta ? accLabel(ta) : '—' }, { k: 'التاريخ', v: dueLabel(m.ts) + ' ' + new Date(m.ts).getFullYear() }, { k: 'السبب', v: m.note || '—' }], undo: () => this.undoTransfer(m.id) }; })(),
      hd: (() => { const h = st.hd || {}; const setH = (p) => this.setState({ hd: Object.assign({}, this.state.hd, p) }); return { title: h.title || '', amount: h.amount || '', onTitle: (e) => setH({ title: e.target.value }), onAmount: (e) => setH({ amount: e.target.value.replace(/[^0-9.]/g, '') }), save: () => this.addHeld() }; })(),
      recentOpen: !!st.recentOpen, recentAria: st.recentOpen ? 'true' : 'false', recentRot: st.recentOpen ? '180deg' : (rtl ? '0deg' : '0deg'), toggleRecent: () => this.setState({ recentOpen: !this.state.recentOpen }),
      budInput: st.budInput, onBudInput: (e) => this.setState({ budInput: e.target.value.replace(/[^0-9.]/g, '') }), saveCatBudget: () => this.saveCatBudget(),
      txe, onTxAmount: (e) => this.setTxe({ amount: e.target.value.replace(/[^0-9.]/g, '') }), onTxMerchant: (e) => this.setTxe({ merchant: e.target.value }), onTxNote: (e) => this.setTxe({ note: e.target.value }),
      saveTx: () => this.saveTx(), deleteTx: () => this.deleteTx(), toggleSplit: () => this.toggleSplit(),
      addSplit: () => this.setTxe({ splits: (this.state.txEdit.splits || []).concat([{ catId: 'other', amount: '' }]) }),
      safe, season, seasonsView, seasonForm: st.seasonForm,
      onSeasonName: (e) => this.setState({ seasonForm: Object.assign({}, this.state.seasonForm, { name: e.target.value }) }),
      onSeasonBudget: (e) => this.setState({ seasonForm: Object.assign({}, this.state.seasonForm, { budget: e.target.value.replace(/[^0-9.]/g, '') }) }),
      startSeason: () => this.startSeason(),
      seasonSug: ['رمضان', 'العيد', 'بداية المدارس', 'عرس', 'زيارة الأهل'].map((l) => ({ label: l, use: () => this.setState({ seasonForm: Object.assign({}, this.state.seasonForm, { name: l }) }) })),
      subsView, noSubs: subsView.length === 0, subsTotal: fmt(subsTotal), subSug, hasSubSug: subSug.length > 0, sv, sf,
      openSubForm: () => this.openSubForm(), subNameSug: ['نتفلكس', 'شاهد', 'سبوتيفاي', 'OSN+', 'يوتيوب بريميوم', 'iCloud', 'النادي'].map((l) => ({ label: l, use: () => this.setState({ sf: Object.assign({}, this.state.sf, { name: l }) }) })),
      reportReady: !!st.reportReady, openReadyReport: () => this.setState({ modal: { type: 'report' }, reportId: this.state.reportReady, reportReady: null }),
      openCurrentReport: () => this.setState({ modal: { type: 'report' }, reportId: 'current' }),
      rep: repView, exportExcel: () => this.exportExcel(), exportPdf: () => this.say('تصدير PDF يشتغل في التطبيق المثبت على الجوال'),
      rMatch, linkReceipt: () => this.linkReceipt(),
      cashSw: sw(!!st.mCash), toggleCash: () => this.setState({ mCash: !this.state.mCash }),
      cashSub: cashAcc ? 'تنقص من محفظة النقد · فيها ' + fmt(cashAcc.balance) + ' ⃄' : 'بسوي لك محفظة نقد وأنقص منها',
      receiptSaveLabel: rMatch.has ? 'لا، سجّلها جديدة' : 'سجّل المصروف',
      themeCls: themeCls,
      asGuest: () => this.setState({ profile: { name: '', email: '', guest: true }, obStep: 2 }),
      isGuest: !!st.profile.guest, isSignedIn: !st.profile.guest,
      openProfile: () => this.setState({ modal: { type: 'profile' }, pf: { name: '', email: '' } }),
      editProfile: () => this.setState({ modal: { type: 'profile' }, pf: { name: st.profile.name || '', email: st.profile.email || '' } }),
      goProfile: () => this.setState({ screen: 'profile', catEdit: null }), isProfile: st.screen === 'profile',
      askSignOut: () => this.setState({ modal: { type: 'signOut' } }), signOut: () => this.signOut(),
      profileDir: st.profile.guest ? 'rtl' : 'ltr', chevFlip: rtl ? 1 : -1,
      hasPhoto: !!st.profile.photo, noPhoto: !st.profile.photo, profilePhoto: st.profile.photo || '',
      photoLabel: st.profile.photo ? 'غيّر الصورة' : 'حط صورة',
      pickPhoto: () => this.pickPhoto(), removePhoto: () => this.setState({ profile: Object.assign({}, this.state.profile, { photo: '' }) }),
      onPhotoFile: (e) => { const f = e.target.files && e.target.files[0]; if (f) { const r = new FileReader(); r.onload = () => this.setPhoto(String(r.result)); r.readAsDataURL(f); } try { e.target.value = ''; } catch (x) {} },
      saveProfileModal: () => this.saveProfile(),
      onObBank: (e) => this.setState({ ob: Object.assign({}, this.state.ob, { bank: e.target.value }) }),
      permRows: [['sms', t.permSms, t.permSmsWhy, ICONS.sms, 'var(--soft)', 'var(--accent)'], ['notif', t.permNotif, t.permNotifWhy, 'M6 16v-5a6 6 0 0 1 12 0v5l1.5 2h-15zM10 20.5a2 2 0 0 0 4 0', '#F3ECD9', '#6E5415']].map((r, i) => {
        const v = st.perms[r[0]];
        const setP = (val) => { const pp = Object.assign({}, this.state.perms); pp[r[0]] = val; this.setState({ perms: pp }); };
        const asking = !v && st.permAsk === r[0];
        return { title: r[1], why: r[2], path: r[3], bg: r[4], fg: r[5], delay: 100 + i * 90, undecided: !v && !asking, decided: !!v, asking,
          warn: r[0] === 'sms' ? t.warnSms : t.warnNotif,
          status: v === 'granted' ? t.granted : t.denied, statusC: v === 'granted' ? '#23624D' : '#A85A2C',
          allow: () => { this.setState({ permAsk: null }); setP('granted'); }, deny: () => this.setState({ permAsk: r[0] }),
          confirmDeny: () => { this.setState({ permAsk: null }); setP('denied'); }, flip: () => setP(v === 'granted' ? 'denied' : 'granted') };
      }),
      permsWait: !(st.perms.sms && st.perms.notif), permsBtnOp: (st.perms.sms && st.perms.notif) ? 1 : 0.4,
      permsNext: () => { if (this.state.perms.sms && this.state.perms.notif) this.setState({ obStep: 3, permAsk: null }); },
      permSwitches: [['sms', t.permSms, t.permSmsWhy], ['notif', t.permNotif, t.permNotifWhy]].map((r) => {
        const on = st.perms[r[0]] === 'granted'; const x = sw(on);
        return { label: r[1], sub: r[2], bg: x.bg, x: x.x, aria: x.aria, toggle: () => { const pp = Object.assign({}, this.state.perms); pp[r[0]] = on ? 'denied' : 'granted'; this.setState({ perms: pp }); } };
      }),
      themeChips: THEMES.map((th) => { const sel = st.theme === th.k; return { label: th.label, color: th.color, sel, aria: sel ? 'true' : 'false', ring: sel ? 'var(--ink)' : 'var(--surface)', pick: () => this.setState({ theme: th.k }) }; }),
      modeChips: [['light', t.modeLight, 'M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4'], ['dark', t.modeDark, 'M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z'], ['system', t.modeSystem, 'M8 3h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM11 18h2']].map((m) => { const sel = st.mode === m[0]; return { label: m[1], path: m[2], cbg: sel ? 'var(--soft)' : 'var(--surface)', cfg: sel ? 'var(--accentText)' : 'var(--ink2)', cbd: sel ? 'var(--accent)' : 'var(--line)', pick: () => this.setState({ mode: m[0] }) }; }),
      smsInfo: st.perms.sms === 'granted' ? 'في التطبيق الفعلي أرصد رسائل البنوك أول ما توصل وأعرضها عليك للموافقة. هنا تقدر تجرب: اختر رسالة أو الصق وحدة.' : 'قراءة الرسائل مقفلة. تقدر تلصق رسالة البنك هنا وأحطها في قائمة الموافقة.',
      arriveLabel: st.perms.sms === 'granted' ? 'محاكاة: وصلت هذي الرسالة' : 'اقرأها وحطها للموافقة',
      t, dir: rtl ? 'rtl' : 'ltr', helloText: t.hello + (st.profile.name ? (rtl ? '، ' : ', ') + st.profile.name : ''),
      dailyTip: MONEY_TIPS[TIP_IDX], readingLabel: st.perms.sms !== 'granted' ? t.readingOff : (nAcc ? t.readingPrefix + accCountLabel : t.noAccountsLinked), watchDot: st.perms.sms === 'granted' && nAcc ? '#2E8A6B' : '#B0703F',
      goSettings: () => this.setState({ screen: 'settings', catEdit: null }), isSettings: st.screen === 'settings',
      setScroll: (el) => { this.scrollEl = el; },
      showEmptyHome: st.pending.length === 0 && st.txns.length === 0,
      goDemo: () => this.setState({ screen: 'add', tab: 'sms', addKind: 'exp' }),
      obProfile: st.obStep === 1, pf: st.pf,
      onPfName: (e) => this.setState({ pf: Object.assign({}, this.state.pf, { name: e.target.value }) }),
      onPfEmail: (e) => this.setState({ pf: Object.assign({}, this.state.pf, { email: e.target.value }) }),
      saveProfile: () => this.saveProfile(),
      googleSignIn: () => { if (this.state.pf.name.trim() && validEmail(this.state.pf.email)) this.saveProfile(); else this.say(rtl ? 'في التطبيق الفعلي تفتح نافذة حساب Google. هنا اكتب اسمك وإيميلك تحت.' : 'In the real app this opens Google sign-in. Here, type your name and email below.'); },
      profileName: st.profile.guest ? t.guestName : (st.profile.name || '—'), profileEmail: st.profile.guest ? t.guestSub : (st.profile.email || '—'), profileInitial: (st.profile.name || '؟').trim().charAt(0),
      langChips: [{ k: 'ar', label: 'العربية' }, { k: 'en', label: 'English' }].map((l) => { const sel = st.lang === l.k; return { label: l.label, cbg: sel ? 'var(--soft)' : 'var(--surface)', cfg: sel ? 'var(--accentText)' : 'var(--ink2)', cbd: sel ? 'var(--accent)' : 'var(--line)', pick: () => this.setState({ lang: l.k }) }; }),
      catRows, catColors, catIcons, catForm: cf, catCount: String(st.cats.length),
      catFormOpen: !!st.catEdit, catFormClosed: !st.catEdit, catFormTitle: st.catEdit === 'new' ? t.newCategory : t.editCategory,
      catCanDelete: !!st.catEdit && st.catEdit !== 'new' && st.catEdit !== 'other',
      onCatName: (e) => this.setState({ catForm: Object.assign({}, this.state.catForm, { name: e.target.value }) }),
      newCat: () => this.setState({ catEdit: 'new', catForm: { name: '', color: PALETTE[2].color, bg: PALETTE[2].bg, ic: 'gift' } }),
      saveCat: () => this.saveCat(), deleteCat: () => this.deleteCat(), cancelCat: () => this.setState({ catEdit: null }),
      notifRows: [['sms', t.notifSms, t.notifSmsSub], ['advisor', t.notifAdvisor, t.notifAdvisorSub], ['inst', t.notifInst, t.notifInstSub]].map((r) => {
        const on = !!st.notif[r[0]]; const x = sw(on);
        return { label: r[1], sub: r[2], bg: x.bg, x: x.x, aria: x.aria, toggle: () => { const n = Object.assign({}, this.state.notif); n[r[0]] = !n[r[0]]; this.setState({ notif: n }); } };
      }),
      pinSw: sw(!!st.security.pin), bioSw: sw(!!st.security.bio), bioSub: st.security.pin ? t.biometricSub : t.biometricNeedPin,
      togglePin: () => this.togglePin(), toggleBio: () => this.toggleBio(), hasPin: !!st.security.pin,
      lockNow: () => this.setState({ locked: true, pinBuf: '', pinErr: false, heads: null, shadeOpen: false }),
      driveLabel: t.driveSub + (st.backup.last ? stampLabel(st.backup.last) : t.never),
      backupBtn: st.backup.busy ? t.backingUp : t.backupNow, backupDrive: () => this.backupDrive(),
      askRestoreDrive: () => this.setState({ modal: { type: 'restoreDrive' } }), restoreDrive: () => this.restoreDrive(),
      autoSw: sw(!!st.backup.auto), toggleAuto: () => this.setState({ backup: Object.assign({}, this.state.backup, { auto: !this.state.backup.auto }) }),
      exportFile: () => this.exportFile(), onRestoreFile: (e) => this.restoreFromFile(e),
      shareEmail: st.shareEmail, onShareEmail: (e) => this.setState({ shareEmail: e.target.value }),
      roleChips: [{ k: 'view', label: t.roleView }, { k: 'edit', label: t.roleEdit }].map((r) => { const sel = st.shareRole === r.k; return { label: r.label, cbg: sel ? 'var(--soft)' : 'var(--surface)', cfg: sel ? 'var(--accentText)' : 'var(--ink2)', cbd: sel ? 'var(--accent)' : 'var(--line)', pick: () => this.setState({ shareRole: r.k }) }; }),
      inviteShare: () => this.inviteShare(),
      sharesView: st.shares.map((x) => ({ email: x.email, role: x.role === 'edit' ? t.roleEdit : t.roleView, initial: x.email.charAt(0).toUpperCase(), remove: () => this.setState({ shares: this.state.shares.filter((y) => y.id !== x.id) }) })),
      replayTour: () => this.setState({ screen: 'home', tour: 0 }),
      askDeleteAll: () => this.setState({ modal: { type: 'deleteAll' }, delText: '' }),
      appVersion: APP_VERSION, appBuild: APP_BUILD, chevFlip: rtl ? '1' : '-1', chevFwd: rtl ? '-1' : '1',
      aboutLinks: [
        ['whatsNew', 'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z'],
        ['privacy', 'M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z'],
        ['terms', 'M6 3h9l4 4v14H6zM14 3v5h5M9 12h7M9 16h7'],
        ['licenses', 'M8 7l-5 5 5 5M16 7l5 5-5 5'],
        ['rateApp', 'M12 3l2.6 5.6 6 .7-4.5 4.1 1.2 6L12 16.4 6.7 19.4l1.2-6L3.4 9.3l6-.7z'],
        ['shareApp', 'M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM8.6 13.5l6.8 4M15.4 6.5l-6.8 4']
      ].map((x) => ({ label: t[x[0]], path: x[1], fn: () => this.say(t.soonLink) })),
      hasModal: !!st.modal,
      modal: { transfer: !!st.modal && st.modal.type === 'transfer', move: !!st.modal && st.modal.type === 'move', hold: !!st.modal && st.modal.type === 'hold', signOut: !!st.modal && st.modal.type === 'signOut', instForm: !!st.modal && st.modal.type === 'instForm', inst: !!st.modal && st.modal.type === 'inst', subForm: !!st.modal && st.modal.type === 'subForm', sub: !!st.modal && st.modal.type === 'sub', tx: !!st.modal && st.modal.type === 'tx', report: !!st.modal && st.modal.type === 'report', profile: !!st.modal && st.modal.type === 'profile', pin: !!st.modal && st.modal.type === 'pin', deleteAll: !!st.modal && st.modal.type === 'deleteAll', restoreDrive: !!st.modal && st.modal.type === 'restoreDrive', shareTrip: !!st.modal && st.modal.type === 'shareTrip' },
      closeModal: () => this.setState({ modal: null, pinBuf: '', pinErr: false, pinStage: null, txEdit: null }),
      pinTitle: st.pinStage === 'confirm' ? t.confirmPin : t.setPin, pinErrText: st.pinErr ? (st.locked ? t.wrongPin : t.pinMismatch) : '',
      keypad, pinDots, pinDotsCls: st.pinErr ? 'shake' : '',
      delText: st.delText, onDelText: (e) => this.setState({ delText: e.target.value }), delDisabled: st.delText.trim() !== t.deleteWord,
      delBtnBg: st.delText.trim() === t.deleteWord ? '#9C2F3D' : '#E8C9CD', deleteAll: () => this.deleteAll(), deleteHint: t.deleteWord,
      openShareTrip: () => this.openShareTrip(),
      tripCode: (st.trip && (st.trip.cloudKey || st.trip.shareCode)) || '········', tripShareOn: !!(st.trip && st.trip.cloudKey),
      shareTripCode: () => this.shareTripCode(), copyTripCode: () => this.copyTripCode(), stopShareTrip: () => this.stopShareTrip(),
      joinCode: st.joinCode || '', onJoinCode: (e) => this.setState({ joinCode: String(e.target.value || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 8) }), joinTrip: () => this.joinTrip(),
      tripEmail: st.tripEmail, onTripEmail: (e) => this.setState({ tripEmail: e.target.value }), addTripMember: () => this.addTripMember(),
      tripMembersView: ((st.trip && st.trip.members) || []).map((m) => ({ email: m, initial: m.charAt(0).toUpperCase(), remove: () => this.setState({ trip: Object.assign({}, this.state.trip, { members: (this.state.trip.members || []).filter((y) => y !== m) }) }) })),
      tripMembersCount: String(((st.trip && st.trip.members) || []).length + 1),
      isLocked: st.locked, bioScanning: st.bioScanning,
      tourOn: st.tour != null && st.screen === 'home', tour: tourView, tourNext: () => this.tourNext(), tourSkip: () => this.setState({ tour: null, tourDone: true }),

      hasToast: !!st.toast, toast: st.toast
    };
  }
}

window.Component = Component;
