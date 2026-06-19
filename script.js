// ════════════════════════════════════════════
//  İSG FİNAL QUIZ — questions.js + logic
// ════════════════════════════════════════════

const questions = [

  // ── TEMEL KAVRAMLAR ──────────────────────
  { topic: "📖 Temel Kavramlar", q: "İşyerinde var olan ya da dışarıdan gelebilecek, zarar veya hasar verme potansiyelini ifade eden kavram hangisidir?", opts: ["Risk", "Tehlike", "Önleme", "Ramak kala"], correct: 1, exp: "Tehlike; zarar verme POTANSİYELİDİR. Risk ise bu tehlikeden kaynaklanacak zararın ihtimalidir." },
  { topic: "📖 Temel Kavramlar", q: "Tehlikeden kaynaklanacak kayıp, yaralanma ya da başka zararlı sonuç meydana gelme ihtimaline ne denir?", opts: ["Tehlike", "Önleme", "Risk", "Risk değerlendirmesi"], correct: 2, exp: "Risk; tehlikeden kaynaklanacak zararlı sonucun ihtimalidir. Tehlike ise potansiyeldir." },
  { topic: "📖 Temel Kavramlar", q: "OSGB ne anlama gelir?", opts: ["İşyeri Sağlık ve Güvenlik Birimi", "Ortak Sağlık ve Güvenlik Birimi", "Özel Sağlık ve Güvenlik Birimi", "Organize Sağlık Güvenlik Birimi"], correct: 1, exp: "OSGB = Ortak Sağlık ve Güvenlik Birimi. İSGB ise İşyeri Sağlık ve Güvenlik Birimi'dir." },
  { topic: "📖 Temel Kavramlar", q: "İş sağlığı ve güvenliği ile ilgili çalışmalara katılma ve tedbir alınmasını isteme yetkisine sahip çalışana ne denir?", opts: ["Destek elemanı", "İGU", "Çalışan temsilcisi", "İşyeri hekimi"], correct: 2, exp: "Çalışan temsilcisi; çalışanları adına İSG konularında temsil etmeye yetkili kişidir." },
  { topic: "📖 Temel Kavramlar", q: "Asli görevinin yanında yangınla mücadele, ilk yardım gibi konularda görevlendirilen kişiye ne denir?", opts: ["Çalışan temsilcisi", "Destek elemanı", "İGU", "İşyeri hemşiresi"], correct: 1, exp: "Destek elemanı; asıl görevinin yanında özel koruma görevleri yürüten kişidir." },
  { topic: "📖 Temel Kavramlar", q: "KKD kısaltması neyi ifade eder?", opts: ["Kamu Kurum Denetimi", "Kişisel Koruyucu Donanım", "Kimyasal Koruyucu Düzenek", "Kontrol ve Kayıt Defteri"], correct: 1, exp: "KKD = Kişisel Koruyucu Donanım. Baret, eldiven, maske vb. bunlara örnektir." },
  { topic: "📖 Temel Kavramlar", q: "ILO neyin kısaltmasıdır?", opts: ["Uluslararası Lojistik Ofisi", "Uluslararası Çalışma Örgütü", "Uluslararası Lisans Organizasyonu", "Uluslararası İş Kanunu"], correct: 1, exp: "ILO = International Labour Organization = Uluslararası Çalışma Örgütü." },

  // ── İŞ KAZASI & MESLEK HASTALIKLARI ─────
  { topic: "⚠️ İş Kazası & MH", q: "ILO verilerine göre dünyada her yıl kaç iş kazası meydana gelmektedir?", opts: ["27 milyon", "270 milyon", "2.7 milyon", "27 bin"], correct: 1, exp: "ILO verilerine göre dünyada yılda yaklaşık 270 milyon iş kazası meydana gelmektedir." },
  { topic: "⚠️ İş Kazası & MH", q: "Türkiye'de her gün en az kaç kişi iş kazası nedeniyle hayatını kaybetmektedir?", opts: ["1", "3", "5", "10"], correct: 2, exp: "Türkiye'de her gün en az 5 kişi iş kazası nedeniyle hayatını kaybetmektedir." },
  { topic: "⚠️ İş Kazası & MH", q: "İş kazası tanımı 6331 sayılı Kanun'un kaçıncı maddesinde yer alır?", opts: ["1. madde", "3. madde", "13. madde", "20. madde"], correct: 1, exp: "6331 sayılı İSG Kanunu Madde 3'te iş kazası tanımlanmıştır." },
  { topic: "⚠️ İş Kazası & MH", q: "Aşağıdakilerden hangisi 5510 sayılı Kanun'a göre iş kazası sayılma şartlarından biri değildir?", opts: ["İşveren tarafından yürütülen iş nedeniyle", "Emzikli kadın için emzirme sırasında", "İşçinin eve gidişi sırasında kendi aracıyla", "İşverence sağlanan araçla taşıma sırasında"], correct: 2, exp: "İşçinin kendi aracıyla eve gidişi iş kazası kapsamında değildir." },
  { topic: "⚠️ İş Kazası & MH", q: "Ramak kala olay nedir?", opts: ["Ölümle sonuçlanan iş kazası", "Yaralanma meydana gelen olay", "Zarara uğratma potansiyeli olan ama zarara uğratmayan olay", "Meslek hastalığı şüphesi olan durum"], correct: 2, exp: "Ramak kala: Zarar verebilecek potansiyelde olmasına rağmen zarar meydana gelmeyen planlanmamış olaydır." },
  { topic: "⚠️ İş Kazası & MH", q: "Heinrich'in piramidine göre 1 ölümlü kaza arkasında kaç 'ramak kala' olay bulunur?", opts: ["29", "100", "300", "1000"], correct: 2, exp: "1 ölüm → 29 uzuv kaybı → 300 ramak kala olay." },
  { topic: "⚠️ İş Kazası & MH", q: "Meslek hastalığı tanımında yer alan 'yükümlülük süresi' ne anlama gelir?", opts: ["Maruziyet başlangıç süresi", "İşten ayrılma ile hastalığın ortaya çıkması arasındaki maksimum süre", "Meslek hastalığının tedavi süresi", "Sigortalılık başlangıç tarihi"], correct: 1, exp: "Yükümlülük süresi; işten ayrıldıktan sonra hastalığın ortaya çıkması için tanınan maksimum süredir." },
  { topic: "⚠️ İş Kazası & MH", q: "Türkiye'deki meslek hastalığı sınıflandırmasına göre Pnömokonyozlar hangi grupta yer alır?", opts: ["A Grubu", "B Grubu", "C Grubu", "D Grubu"], correct: 2, exp: "C Grubu: Pnömokonyozlar. A=Kimyasal, B=Cilt, D=Bulaşıcı, E=Fizik etkenler." },
  { topic: "⚠️ İş Kazası & MH", q: "ILO'ya göre meslek hastalıkları sınıflandırmasında mesleki kanserler kaçıncı grupta yer alır?", opts: ["1. Grup", "2. Grup", "3. Grup", "4. Grup"], correct: 2, exp: "ILO: 1-Ajanlara göre, 2-Hedef organ, 3-Mesleki kanserler, 4-Düşünce ve davranış bozuklukları." },
  { topic: "⚠️ İş Kazası & MH", q: "Meslek hastalığı tanısı koyabilecek hastaneler arasında hangisi yer ALMAZ?", opts: ["Eğitim ve araştırma hastanesi", "Üniversite hastanesi", "Meslek hastalığı hastanesi", "Özel hastane"], correct: 3, exp: "Özel hastaneler meslek hastalığı teşhisi koyamaz." },
  { topic: "⚠️ İş Kazası & MH", q: "İşle ilgili hastalık ile meslek hastalığı arasındaki temel fark nedir?", opts: ["İşle ilgili hastalık sadece çalışanlarda görülür", "Meslek hastalığının spesifik bir nedeni varken işle ilgili hastalık çok faktörlüdür", "İkisi aynı şeydir", "Meslek hastalığı toplumda yaygın görülür"], correct: 1, exp: "Meslek hastalığı: spesifik neden + işyeri maruziyeti zorunlu. İşle ilgili hastalık: çok faktörlü." },

  // ── 6331 SAYILI KANUN ────────────────────
  { topic: "📋 6331 Sayılı Kanun", q: "6331 sayılı İSG Kanunu hangi tarihte yürürlüğe girmiştir?", opts: ["30 Haziran 2012", "1 Ocak 2013", "15 Mayıs 2010", "4 Eylül 2008"], correct: 0, exp: "6331 sayılı Kanun 30 Haziran 2012 tarihinde yürürlüğe girmiştir." },
  { topic: "📋 6331 Sayılı Kanun", q: "6331 sayılı Kanun aşağıdakilerden hangisini kapsamaz?", opts: ["Özel sektör işyerleri", "Kamu kurumları", "Ev hizmetleri", "Stajyerler"], correct: 2, exp: "Ev hizmetleri kapsam dışıdır. Stajyerler ve çıraklar kapsama dahildir." },
  { topic: "📋 6331 Sayılı Kanun", q: "Tehlike sınıfları kaç gruba ayrılır?", opts: ["2", "3", "4", "5"], correct: 1, exp: "3 grup: Az Tehlikeli (C), Tehlikeli (B), Çok Tehlikeli (A)." },
  { topic: "📋 6331 Sayılı Kanun", q: "Aşağıdakilerden hangisi 'Çok Tehlikeli' işyeri sınıfına girer?", opts: ["Muhasebe bürosu", "Gıda imalatı", "Hastane", "Mobilya satış mağazası"], correct: 2, exp: "Hastaneler çok tehlikeli sınıftadır. Diğer örnekler: madencilik, inşaat, kimya, akaryakıt." },
  { topic: "📋 6331 Sayılı Kanun", q: "İş Güvenliği Uzmanı (İGU) hangi tehlike sınıflarında çalışabilir?", opts: ["Sadece A sınıfında", "Sadece B ve C sınıfında", "Sadece C sınıfında", "Belgesinin sınıfına göre (A/B/C)"], correct: 3, exp: "İGU'lar belge sınıfına göre çalışır. İşyeri hekimi HER sınıfta görev yapar." },
  { topic: "📋 6331 Sayılı Kanun", q: "İSG Kurulu kaç ve üzeri çalışanı olan işyerlerinde kurulur?", opts: ["10", "30", "50", "100"], correct: 2, exp: "50 ve daha fazla çalışanı olan işyerlerinde zorunludur." },
  { topic: "📋 6331 Sayılı Kanun", q: "İSG Kurulu'nun üyeleri arasında aşağıdakilerden hangisi YER ALMAZ?", opts: ["İş güvenliği uzmanı", "İşyeri hekimi", "Çalışan temsilcisi", "SGK temsilcisi"], correct: 3, exp: "SGK temsilcisi kurul üyesi değildir." },
  { topic: "📋 6331 Sayılı Kanun", q: "İş kazası SGK'ya kaç işgünü içinde bildirilmelidir?", opts: ["1 işgünü", "2 işgünü", "3 işgünü", "7 işgünü"], correct: 2, exp: "İş kazaları 3 İŞGÜNÜ içinde SGK'ya bildirilir." },
  { topic: "📋 6331 Sayılı Kanun", q: "Meslek hastalığı öğrenildiğinde işveren kaç işgünü içinde SGK'ya bildirim yapmalıdır?", opts: ["1 işgünü", "3 işgünü", "7 işgünü", "10 işgünü"], correct: 1, exp: "Öğrenildiği tarihten itibaren 3 işgünü içinde bildirim yapılır." },
  { topic: "📋 6331 Sayılı Kanun", q: "Sağlık hizmeti sunucuları meslek hastalığı tanısı koyduktan sonra kaç gün içinde SGK'ya bildirim yapmalıdır?", opts: ["3 gün", "5 gün", "10 gün", "15 gün"], correct: 2, exp: "Sağlık hizmeti sunucuları en geç 10 GÜN içinde SGK'ya bildirir." },
  { topic: "📋 6331 Sayılı Kanun", q: "Onaylı defterin özellikleri arasında hangisi YANLIŞTIR?", opts: ["Seri numaralı ve sayfaları 1 asıl 2 kopyalı", "Çalışma İl Müdürlüğü veya noter tarafından onaylı", "Sadece işyeri hekimi tarafından doldurulur", "Deftere yazılanlar işverene tebliğ edilmiş sayılır"], correct: 2, exp: "Onaylı defter hem İGU hem de işyeri hekimi tarafından doldurulur." },
  { topic: "📋 6331 Sayılı Kanun", q: "Tehlikeli ve çok tehlikeli sınıftaki işlerde çalışacaklar için ne zorunludur?", opts: ["Sigortasının bitmesi", "Mesleki eğitim belgesi", "5 yıl iş tecrübesi", "İGU onayı"], correct: 1, exp: "Mesleki eğitim belgesi olmayanlar tehlikeli/çok tehlikeli işlerde çalıştırılamaz." },
  { topic: "📋 6331 Sayılı Kanun", q: "Eğitim maliyeti ve eğitimde geçen süre ile ilgili doğru ifade hangisidir?", opts: ["Maliyet çalışana yansıtılabilir, süre izinden sayılır", "Maliyet yansıtılamaz, süre çalışma süresinden sayılır", "Maliyet yansıtılabilir, süre çalışma süresinden sayılır", "Maliyet yansıtılamaz, süre izinden sayılır"], correct: 1, exp: "Maliyet çalışana yansıtılamaz; eğitim süresi çalışma süresinden sayılır." },

  // ── GÜVENLİK İŞARETLERİ ─────────────────
  { topic: "🚦 Güvenlik İşaretleri", q: "Yasaklayıcı işaretlerin temel renk özellikleri nelerdir?", opts: ["Sarı zemin, siyah piktogram, siyah çerçeve", "Mavi zemin, beyaz piktogram", "Beyaz zemin, siyah piktogram, kırmızı çerçeve ve diyagonal çizgi", "Yeşil zemin, beyaz piktogram"], correct: 2, exp: "Yasaklayıcı işaret: daire, beyaz zemin, siyah piktogram, kırmızı çerçeve ve diyagonal çizgi." },
  { topic: "🚦 Güvenlik İşaretleri", q: "Uyarı işaretlerinin şekli nedir?", opts: ["Daire", "Üçgen", "Dikdörtgen", "Kare"], correct: 1, exp: "Uyarı işaretleri üçgen şeklinde, sarı zemin siyah piktogramlıdır." },
  { topic: "🚦 Güvenlik İşaretleri", q: "Emredici (zorunlu) işaretlerin rengi nedir?", opts: ["Kırmızı", "Sarı", "Mavi", "Yeşil"], correct: 2, exp: "Emredici işaretler: daire, MAVİ zemin, beyaz piktogram." },
  { topic: "🚦 Güvenlik İşaretleri", q: "Acil çıkış ve ilkyardım işaretlerinin rengi nedir?", opts: ["Kırmızı zemin, beyaz piktogram", "Yeşil zemin, beyaz piktogram", "Mavi zemin, beyaz piktogram", "Sarı zemin, siyah piktogram"], correct: 1, exp: "YEŞİL zemin, beyaz piktogram. Dikdörtgen/kare şeklindedir." },
  { topic: "🚦 Güvenlik İşaretleri", q: "Yangınla mücadele işaretlerinin rengi nedir?", opts: ["Mavi zemin, beyaz piktogram", "Sarı zemin, siyah piktogram", "Kırmızı zemin, beyaz piktogram", "Yeşil zemin, beyaz piktogram"], correct: 2, exp: "KIRMIZI zemin, beyaz piktogram. Dikdörtgen/kare şeklindedir." },
  { topic: "🚦 Güvenlik İşaretleri", q: "Mavi renk hangi koşulda emniyet rengi olarak kabul edilir?", opts: ["Her zaman emniyet rengidir", "Sadece üçgen şekil içinde kullanıldığında", "Sadece daire şekli içinde kullanıldığında", "Dikdörtgen içinde kullanıldığında"], correct: 2, exp: "Mavi YALNIZCA daire şekli içinde kullanıldığında emniyet rengi sayılır." },
  { topic: "🚦 Güvenlik İşaretleri", q: "Engel ve tehlikeli yerleri belirtmek için hangi renk kombinasyonu kullanılır?", opts: ["Kırmızı-mavi", "Mavi-beyaz", "Sarı-siyah veya kırmızı-beyaz", "Yeşil-beyaz"], correct: 2, exp: "SARI-SİYAH veya KIRMIZI-BEYAZ 45° şeritler kullanılır." },
  { topic: "🚦 Güvenlik İşaretleri", q: "'Yasak işareti' hangi anlama gelir?", opts: ["Tehlikeye dikkat çeken işaret", "Tehlikeye neden olacak bir davranışı yasaklayan işaret", "Uyulması zorunlu davranış belirten işaret", "Kaçış yolunu gösteren işaret"], correct: 1, exp: "Yasak işareti: tehlikeye neden olacak davranışı yasaklayan işarettir." },

  // ── FİZİKSEL RİSK FAKTÖRLERİ ────────────
  { topic: "🔊 Fiziksel Risk Faktörleri", q: "Gürültünün meslek hastalığı sayılabilmesi için gürültü şiddetinin sürekliliği en az ne olmalıdır?", opts: ["75 dB'in üstünde en az 15 gün", "80 dB'in üstünde en az 60 gün", "85 dB'in üstünde en az 30 gün", "90 dB'in üstünde en az 15 gün"], correct: 2, exp: "85 dB üstünde en az 30 gün + gürültülü işte toplam en az 2 yıl çalışma." },
  { topic: "🔊 Fiziksel Risk Faktörleri", q: "Gürültü kaynaklı meslek hastalığının yükümlülük süresi nedir?", opts: ["3 ay", "6 ay", "1 yıl", "2 yıl"], correct: 1, exp: "Gürültüden kaynaklanan meslek hastalığının yükümlülük süresi 6 AYDIR." },
  { topic: "🔊 Fiziksel Risk Faktörleri", q: "Genç ve sağlıklı bir insan kulağı hangi frekans aralığındaki seslere duyarlıdır?", opts: ["20 Hz – 2.000 Hz", "20 Hz – 20.000 Hz", "200 Hz – 20.000 Hz", "175 Hz – 7.500 Hz"], correct: 1, exp: "Sağlıklı insan kulağı 20 Hz – 20.000 Hz arasındaki seslere duyarlıdır." },
  { topic: "🔊 Fiziksel Risk Faktörleri", q: "Gürültü ölçümünde çalışanın üzerine takılan ölçüm cihazı nedir?", opts: ["Lüksmetre", "Vibrasyon dedektörü", "Gürültü dozimetresi", "Termometre"], correct: 2, exp: "Gürültü dozimetresi çalışanın üzerine takılır ve gün boyu maruziyeti ölçer." },
  { topic: "🔊 Fiziksel Risk Faktörleri", q: "Titreşimin meslek hastalığı yükümlülük süresi nedir?", opts: ["6 ay", "1 yıl", "2 yıl", "3 yıl"], correct: 2, exp: "Titreşimden oluşan meslek hastalığının yükümlülük süresi 2 YILDIR." },
  { topic: "🔊 Fiziksel Risk Faktörleri", q: "El-kol titreşimi hangi sağlık sorunlarına yol açar?", opts: ["Bel ağrısı ve omurga travması", "Damar, kemik, eklem, sinir ve kas bozuklukları", "Yalnızca psikolojik bozukluklar", "Solunum sistemi hastalıkları"], correct: 1, exp: "El-kol titreşimi: damar, kemik, eklem, sinir ve kas bozuklukları. Bütün vücut: bel ve omurga." },
  { topic: "🔊 Fiziksel Risk Faktörleri", q: "Pnömokonyoz yapan tozların tane büyüklüğü hangi aralıktadır?", opts: ["0.01 – 0.5 mikron", "0.5 – 5 mikron", "5 – 50 mikron", "50 – 300 mikron"], correct: 1, exp: "Pnömokonyoz yapan tozlar 0.5 – 5 mikron büyüklüğündedir." },
  { topic: "🔊 Fiziksel Risk Faktörleri", q: "Radyasyondan korunmanın temel prensipleri hangileridir?", opts: ["Maske, eldiven, önlük", "Zamanlama, mesafe, zırhlanma", "Eğitim, denetim, raporlama", "KKD, sağlık gözetimi, eğitim"], correct: 1, exp: "3 temel prensip: 1-Zamanlama, 2-Mesafe, 3-Zırhlanma." },
  { topic: "🔊 Fiziksel Risk Faktörleri", q: "Hastanelerde radyasyona maruz çalışanlar dozimetreyi ne sıklıkla değiştirmelidir?", opts: ["Aylık", "3 ayda bir (yılda 4 kez)", "6 ayda bir", "Yılda bir"], correct: 1, exp: "TAEK yılda 4 defa dozimetri ölçümü yapar." },
  { topic: "🔊 Fiziksel Risk Faktörleri", q: "İyonize radyasyon ile iyonize etmeyen radyasyon arasındaki temel fark nedir?", opts: ["İyonize olan daha az zararlıdır", "İyonize olan hücre yapısını bozar; etmeyen çok uzun maruziyette zarar verir", "İkisi de aynı etkiyi gösterir", "İyonize etmeyen daha tehlikelidir"], correct: 1, exp: "İyonize: hücre yapısını bozar. İyonize etmeyen: çok uzun maruziyette zarar verir." },
  { topic: "🔊 Fiziksel Risk Faktörleri", q: "Termal konfor tanımında hangi faktörler yer almaz?", opts: ["Sıcaklık ve nem", "Hava akımı", "Aydınlatma", "İşçi sayısı"], correct: 3, exp: "Termal konfor: sıcaklık, nem, hava akımı, aydınlatma. İşçi sayısı parametresi yoktur." },

  // ── KİMYASAL & BİYOLOJİK ────────────────
  { topic: "⚗️ Kimyasal & Biyolojik", q: "Kimyasalların vücuda giriş yolları hangileridir?", opts: ["Solunum, sindirim, deri/göz absorbsiyonu", "Yalnızca solunum yolu", "Solunum ve sindirim", "Kan ve lenf sistemi"], correct: 0, exp: "3 yol: Solunum, Sindirim, Absorbsiyon (deri/göz)." },
  { topic: "⚗️ Kimyasal & Biyolojik", q: "GBF kısaltması ne anlama gelir?", opts: ["Genel Bakım Formu", "Güvenlik Bilgi Formu", "Günlük Bakım Faaliyet", "Gözlem Bildirim Formu"], correct: 1, exp: "GBF = Güvenlik Bilgi Formu. Kimyasallar için zorunludur." },
  { topic: "⚗️ Kimyasal & Biyolojik", q: "Biyolojik risk etmenlerine en çok maruz kalan meslek grupları arasında hangisi YER ALMAZ?", opts: ["Sağlık çalışanları", "Tarım işçileri", "Muhasebeciler", "Kanalizasyon arıtma tesisi çalışanları"], correct: 2, exp: "Muhasebeciler bu risk grubunda yer almaz." },
  { topic: "⚗️ Kimyasal & Biyolojik", q: "Sağlık çalışanlarında en sık görülen viral enfeksiyonlar arasında hangisi yer ALMAZ?", opts: ["Hepatit-B", "AIDS", "Tüberküloz", "COVID-19"], correct: 2, exp: "Tüberküloz viral değil, BAKTERİYEL enfeksiyondur." },

  // ── PSİKOSOSYAL & ERGONOMİ ───────────────
  { topic: "😟 Psikososyal & Ergonomi", q: "Mobbing'in (yıldırı) tanımında yer alan temel unsur nedir?", opts: ["Tek seferlik kötü muamele", "Sistematik ve sürekli düşmanca davranışlarla kurbanı çaresiz bırakma", "Fiziksel şiddet", "Ücret kesintisi"], correct: 1, exp: "Mobbing: sistematik, sürekli, düşmanca davranışlarla kurbanı çaresiz bırakmak (Leymann)." },
  { topic: "😟 Psikososyal & Ergonomi", q: "Mobbing'in 3. aşamasında görülen belirtiler hangilerini kapsar?", opts: ["Sıkıntı ve uyku bozuklukları", "Yüksek tansiyon ve alkol kullanımı", "Şiddetli depresyon, panik atak, kalp krizi", "Yalnızca iş verimliliğinin düşmesi"], correct: 2, exp: "3. aşama: şiddetli depresyon, panik atak, kalp krizi." },
  { topic: "😟 Psikososyal & Ergonomi", q: "ILO raporuna göre AB'de yapılan ankette mobbing'e maruz kalan çalışanların oranı nedir?", opts: ["%2", "%4", "%8", "%12"], correct: 2, exp: "15 AB ülkesi, 15.800 görüşme: %4 fiziksel şiddet, %2 cinsel taciz, %8 mobbing." },
  { topic: "😟 Psikososyal & Ergonomi", q: "Ergonomi sözcüğü hangi Yunanca kelimelerden türetilmiştir?", opts: ["Ergon (güç) + Nomos (yasa)", "Ergon (iş) + Nomos (yasa)", "Ergo (hız) + Nomics (bilim)", "Erg (enerji) + Nom (insan)"], correct: 1, exp: "Ergon (iş) + Nomos (yasa) = Ergonomi = İş Bilimi." },
  { topic: "😟 Psikososyal & Ergonomi", q: "Antropometri ne ile ilgilenir?", opts: ["İşyeri kimyasal analiziyle", "İnsan vücudunun boyutlarıyla", "Psikolojik testlerle", "Ergonomik yazılım tasarımıyla"], correct: 1, exp: "Antropometri: insan vücudunun boyutlarıyla ilgilenir." },
  { topic: "😟 Psikososyal & Ergonomi", q: "Ergonominin alt dalları hangileridir?", opts: ["Kimyasal, biyolojik, fiziksel", "Fiziksel, bilişsel, örgütsel", "Mühendislik, tıp, psikoloji", "Mikro, makro, nano"], correct: 1, exp: "Fiziksel (duruş/hareket), Bilişsel (algı/karar), Örgütsel (iletişim/vardiya)." },
  { topic: "😟 Psikososyal & Ergonomi", q: "Psikososyal risk faktörleri arasında hangisi yer almaz?", opts: ["İş stresi", "Mobbing", "Aşırı iş yükü", "Pnömokonyoz"], correct: 3, exp: "Pnömokonyoz fiziksel (toz) kaynaklı meslek hastalığıdır, psikososyal değildir." },

  // ── İŞ HUKUKU ────────────────────────────
  { topic: "⚖️ İş Hukuku", q: "Haftalık normal çalışma süresi en fazla kaç saattir?", opts: ["40 saat", "42 saat", "45 saat", "48 saat"], correct: 2, exp: "4857 sayılı Kanun: haftalık çalışma en fazla 45 SAATTİR." },
  { topic: "⚖️ İş Hukuku", q: "Haftalık 45 saati aşan çalışmalar için saat başına ödenecek fazla mesai ücreti ne kadardır?", opts: ["Normal ücretin %25 fazlası", "Normal ücretin %50 fazlası", "Normal ücretin %100 fazlası", "Normal ücretin %75 fazlası"], correct: 1, exp: "45 saati aşan: %50 zamlı. 45 saatin altı sözleşme, 45'e kadar: %25 zamlı." },
  { topic: "⚖️ İş Hukuku", q: "Yıllık fazla mesai sınırı ne kadardır?", opts: ["180 saat", "225 saat", "270 saat", "300 saat"], correct: 2, exp: "Yıllık fazla çalışma 270 SAATİ aşamaz." },
  { topic: "⚖️ İş Hukuku", q: "7,5 saatten fazla çalışılacak günlerde ara dinlenmesi ne kadar olmalıdır?", opts: ["15 dakika", "30 dakika", "45 dakika", "1 saat"], correct: 3, exp: "≤4 saat=15dk | 4-7.5 saat=30dk | >7.5 saat=1 SAAT." },
  { topic: "⚖️ İş Hukuku", q: "1 yıldan 5 yıla kadar çalışanlara verilecek yıllık ücretli izin süresi kaç gündür?", opts: ["10 gün", "12 gün", "14 gün", "16 gün"], correct: 2, exp: "1-5 yıl=14 gün | 5-15 yıl=20 gün | ≥15 yıl=26 gün." },
  { topic: "⚖️ İş Hukuku", q: "15 yıl ve üzeri kıdemi olan bir çalışan kaç gün yıllık izin hakkına sahiptir?", opts: ["20 gün", "22 gün", "24 gün", "26 gün"], correct: 3, exp: "15 yıl ve üzeri: en az 26 GÜN yıllık izin." },
  { topic: "⚖️ İş Hukuku", q: "İhbar süreleri bakımından 3 yıldan fazla çalışan bir işçi için bildirim süresi ne kadardır?", opts: ["4 hafta", "6 hafta", "8 hafta", "12 hafta"], correct: 2, exp: "≤6ay=2hf | 6ay-1.5yıl=4hf | 1.5-3yıl=6hf | >3yıl=8 HAFTA." },
  { topic: "⚖️ İş Hukuku", q: "Kıdem ve ihbar tazminatı davalarında zamanaşımı süresi nedir?", opts: ["2 yıl", "5 yıl", "10 yıl", "15 yıl"], correct: 2, exp: "Kıdem ve ihbar tazminatı zamanaşımı: 10 YILDIR." },
  { topic: "⚖️ İş Hukuku", q: "Deneme süresi en fazla kaç ay olabilir?", opts: ["1 ay", "2 ay", "3 ay", "6 ay"], correct: 1, exp: "Deneme süresi en fazla 2 AY. Tazminatsız feshedilir." },
  { topic: "⚖️ İş Hukuku", q: "Belirli süreli iş sözleşmesi hakkında aşağıdakilerden hangisi DOĞRUDUR?", opts: ["Sözlü ya da yazılı yapılabilir", "Zincirleme olarak yapılabilir", "Vasıfsız işçilerle yapılabilir", "İhbar tazminatı yoktur"], correct: 3, exp: "Belirli süreli sözleşmede ihbar tazminatı yoktur." },
  { topic: "⚖️ İş Hukuku", q: "Eşin doğum yapması durumunda işçiye kaç gün ücretli izin verilir?", opts: ["1 gün", "3 gün", "5 gün", "7 gün"], correct: 2, exp: "Eşin doğumu=5 GÜN. Evlenme/ölüm=3 gün." },
  { topic: "⚖️ İş Hukuku", q: "İhbar süresi boyunca işveren çalışana günde kaç saat iş arama izni vermek zorundadır?", opts: ["1 saat", "2 saat", "3 saat", "4 saat"], correct: 1, exp: "Ücret kesintisi olmaksızın günde en az 2 SAAT iş arama izni." },
  { topic: "⚖️ İş Hukuku", q: "Ulusal Bayram olan 29 Ekim kaç gün tatil sayılır?", opts: ["0.5 gün", "1 gün", "1.5 gün", "2 gün"], correct: 2, exp: "29 Ekim=1.5 gün | Kurban Bayramı=4.5 gün | Ramazan Bayramı=3.5 gün." },
  { topic: "⚖️ İş Hukuku", q: "Yıllık ücretli izin ücreti davalarında zamanaşımı süresi nedir?", opts: ["2 yıl", "5 yıl", "10 yıl", "1 yıl"], correct: 1, exp: "Yıllık izin ücreti davası zamanaşımı: fesihten itibaren 5 YILDIR." },
];

// ══ STATE ══
let currentIdx = 0;
let score     = 0;
let wrong     = 0;
let shuffled  = [];

// ══ YARDIMCI ══
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ══ QUIZ BAŞLAT ══
function startQuiz() {
  shuffled   = shuffle(questions);
  currentIdx = 0;
  score      = 0;
  wrong      = 0;
  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('quiz-screen').style.display  = 'block';
  renderQuestion();
}

// ══ SORUYU RENDER ET ══
function renderQuestion() {
  const q     = shuffled[currentIdx];
  const total = shuffled.length;

  document.getElementById('progress-bar').style.width   = ((currentIdx / total) * 100) + '%';
  document.getElementById('q-counter').textContent      = `Soru ${currentIdx + 1} / ${total}`;
  document.getElementById('score-display').textContent  = score;
  document.getElementById('topic-tag').textContent      = q.topic;
  document.getElementById('q-number').textContent       = `SORU ${currentIdx + 1}`;
  document.getElementById('q-text').textContent         = q.q;

  const grid = document.getElementById('options-grid');
  grid.innerHTML = '';

  q.opts.forEach((opt, i) => {
    const btn       = document.createElement('button');
    btn.className   = 'option-btn';
    btn.textContent = `${['A', 'B', 'C', 'D'][i]}) ${opt}`;
    btn.onclick     = () => selectAnswer(i);
    grid.appendChild(btn);
  });

  document.getElementById('feedback-box').style.display = 'none';
  document.getElementById('btn-next').style.display     = 'none';
}

// ══ CEVAP SEÇ ══
function selectAnswer(chosen) {
  const q    = shuffled[currentIdx];
  const btns = document.querySelectorAll('.option-btn');
  btns.forEach(b => b.disabled = true);

  const fb = document.getElementById('feedback-box');

  if (chosen === q.correct) {
    btns[chosen].classList.add('correct');
    score++;
    fb.className = 'feedback-box correct-fb';
    fb.innerHTML = `✅ <strong>Doğru!</strong> ${q.exp}`;
  } else {
    btns[chosen].classList.add('wrong');
    btns[q.correct].classList.add('reveal-correct');
    wrong++;
    fb.className = 'feedback-box wrong-fb';
    fb.innerHTML = `❌ <strong>Yanlış.</strong> Doğru cevap: <strong>${['A', 'B', 'C', 'D'][q.correct]}) ${q.opts[q.correct]}</strong><br>${q.exp}`;
  }

  fb.style.display = 'block';
  document.getElementById('score-display').textContent = score;

  const nextBtn       = document.getElementById('btn-next');
  nextBtn.style.display = 'block';
  nextBtn.textContent = (currentIdx + 1 < shuffled.length)
    ? 'Sonraki Soru →'
    : 'Sonuçları Gör 🏁';
}

// ══ SONRAKİ SORU ══
function nextQuestion() {
  currentIdx++;
  if (currentIdx < shuffled.length) {
    renderQuestion();
  } else {
    showResults();
  }
}

// ══ SONUÇLAR ══
function showResults() {
  document.getElementById('quiz-screen').style.display   = 'none';
  document.getElementById('result-screen').style.display = 'block';

  const total = shuffled.length;
  const pct   = Math.round((score / total) * 100);

  document.getElementById('result-circle').style.setProperty('--pct', pct + '%');
  document.getElementById('result-pct').textContent   = pct + '%';
  document.getElementById('res-correct').textContent  = score;
  document.getElementById('res-wrong').textContent    = wrong;
  document.getElementById('res-total').textContent    = total;

  let title, desc;
  if      (pct >= 85) { title = '🏆 Mükemmel!';        desc = 'Harika! Final için çok iyi hazırlandın. Başarılar!'; }
  else if (pct >= 70) { title = '👍 İyi İş!';           desc = 'Genel hatlarıyla bilgin iyi. Eksikleri bir kez daha gözden geçir.'; }
  else if (pct >= 55) { title = '📚 Biraz Daha Çalış'; desc = 'Yarısını geçtin ama bazı konular tekrar istiyor.'; }
  else                { title = '💪 Tekrar Dene!';      desc = 'Özellikle kanun maddeleri ve süreler üzerine yoğunlaş.'; }

  document.getElementById('result-title').textContent = title;
  document.getElementById('result-desc').textContent  = desc;
}

// ══ YENİDEN BAŞLAT ══
function restartQuiz() {
  document.getElementById('result-screen').style.display = 'none';
  startQuiz();
}