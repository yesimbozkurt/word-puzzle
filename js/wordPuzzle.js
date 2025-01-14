// oyunda kullanılacak kelimelerin listesi
const kelimeler = ["adana", "ankara", "antalya", "bursa", "bolu", "bilecik", "çanakkale", "denizli", "edirne", "erzurum", "gaziantep", "giresun", "hatay", "ısparta", "istanbul", "izmir", "konya", "kütahya", "kars", "malatya", "muğla", "mardin", "nevşehir", "ordu", "rize", "samsun", "siirt", "trabzon", "tekirdağ", "uşak", "van", "yalova", "zonguldak"];

// oyun değişkenleri
let secilenKelime = "";
let tahminEdilenHarfler = [];
let kalanHak = 10;
let kullanılanHarfler = [];
let oyunaDevam = true;

// rastgele kelime seçme fonksiyonu
function startGame() {
    // secilenKelime = kelimeSec();
    tahminEdilenHarfler = new Array(secilenKelime.length).fill("_");
    kalanHak = 10;
    kullanılanHarfler = [];
    oyunaDevam = true;
    // oyuna başlama mesajı
    alert("Kelime Bulma Oyununa Hoşgeldiniz! \nOyunun kuralları şu şekildedir: \n Rastgele seçilen bir kelimeyi bulmaya çalışacaksınız. \n Her yanlış tahminde kalan hakkınız azalacak. Toplam 5 hakkınız var. \nTahmin ettiğiniz harfleri tekrar girmeyiniz.\n İyi eğlenceler!");
   // Oyunun kuralları şu şekildedir: Rastgele seçilen bir kelimeyi bulmaya çalışacaksınız.Her yanlış tahminde kalan hakkınız azalacak.Toplam 5 hakkınız var.Tahmin ettiğiniz harfleri tekrar girmeyiniz.İyi eğlenceler!");
    
   
    
    // oyuna girmek isteyip istemediğini sor
    if (confirm("Oyuna başlamak ister misiniz?")) {
        // alert("Oyundan çıkılıyor, tekrar bekleriz!");
        // return;
    }
   
   
    // kelimeleri seçme
    const randomIndex = Math.floor(Math.random() * kelimeler.length);
    secilenKelime = kelimeler[randomIndex];

    tahminEdilenHarfler = [];
    for (let i = 0; i < secilenKelime.length; i++) {
        tahminEdilenHarfler[i] = "_";
    }
    // tahminEdilenHarfler = new Array(secilenKelime.length).fill("_");
    
  
  
    while (oyunaDevam && kalanHak > 0) {
        // mevcut durumu gösteren bilgi
        const oyunDurumu = `
        Kelime: ${tahminEdilenHarfler.join(" ")}
        Kalan Hak: ${kalanHak}
        Kullanılan Harfler: ${kullanılanHarfler.join(", ")}
        `;
           // Kullanıcının tahminini al
      const tahmin = prompt(` ${oyunDurumu} \n bir harf tahmin edin`);
     
     
     
        // kullanıcı iptale basarsa
      if (tahmin === null) {
        alert("Oyundan çıkılıyor, tekrar bekleriz!");
        oyunaDevam = false;
        return;
      }
       
        
        
        if (tahmin.length !== 1) {
            alert("Lütfen sadece bir harf girin.");
            continue;
        }
       
       
        // kullanıcının tahminini küçük harfe çevir
        const harf = tahmin.toLowerCase();
       
       
       
        // harfin daha önce tahmin edilip edilmediğini kontrol et
        if (kullanılanHarfler.includes(harf)) {
            alert("Bu harfi zaten tahmin ettiniz.");
            continue;
        }
        kullanılanHarfler.push(harf);


       
        // kullanıcının girdiği harfi kontrol et
        let harfBulundu = false;
        for (let i = 0; i < secilenKelime.length; i++) {
            if (secilenKelime[i] === harf) {
                tahminEdilenHarfler[i] = harf;
                harfBulundu = true;
            }
        }
       
       
        // kullanıcının tahmin sonuçları
        if (harfBulundu) {
            alert(`Doğru tahmin! :) ${kalanHak} hakkınız kaldı.`);
        } else {
            kalanHak--;
            alert(`Yanlış tahmin! :( ${kalanHak} hakkınız kaldı.`)
        }
       
       
        // kullanıcı oyunu kazandı mı?
        let kazandı = true;
        for (let i = 0; i < tahminEdilenHarfler.length; i++) {
            if (tahminEdilenHarfler[i] === "_") {
                kazandı = false;
            }
        }
       
       
        // kazanma durumu
        if (kazandı) {
            alert(`Tebrikler! Kelimeyi buldunuz: ${secilenKelime}`);
            if (confirm("Tekrar oynamak ister misiniz?")) {
                startGame();
            }
           return;
        }
       
   
    }
      alert(`Kaybettiniz! :( \n Kelime: ${secilenKelime}`);
     if (confirm("Tekrar oynamak ister misiniz?")) {
        startGame();
    }
   
    // kullanıcı oyunu kaybetti mi?
        // if (kalanHak === 0) {
        //     alert(`Kaybettiniz! :( Kelime: ${secilenKelime}`);
        //     if (confirm("Tekrar oynamak ister misiniz?")) {
        //         startGame();
        //     }
        //     return; 

//     console.log(secilenKelime);
//     console.log(tahminEdilenHarfler);
//     console.log(kalanHak);
//     console.log(kullanılanHarfler);
// }
// function kelimeSec() {
//     return kelimeler[Math.floor(Math.random() * kelimeler.length)];
}
 startGame();