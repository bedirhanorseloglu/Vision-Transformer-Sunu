# Vision Transformer (ViT) Makalesi – Detaylı İnceleme ve Ders Notları

**Makale:** *An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale*  
**Yazarlar:** Dosovitskiy et al., Google Research, ICLR 2021

---

## Özet (Abstract)

- **Temel Problem:** Transformer mimarisi NLP alanında standart haline gelmesine rağmen, bilgisayarlı görüdeki uygulamaları sınırlı kalmıştır. Görüntü alanında attention mekanizması ya CNN’lerle birlikte kullanılmış ya da CNN’in genel yapısını koruyarak sadece belirli bileşenlerinin yerine geçmiştir.

- **Makalenin İddiası:** CNN’lere olan bu bağımlılık şart değildir. Doğrudan görüntü yamalarının (image patches) dizilerine uygulanan **saf bir Transformer**, görüntü sınıflandırma görevlerinde çok iyi performans gösterebilir.

- **Temel Sonuç:** Büyük miktarda veri üzerinde pre-training yapıldığında ve orta/küçük ölçekli kıyaslama veri kümelerine (ImageNet, CIFAR-100, VTAB vb.) aktarıldığında ViT, en gelişmiş CNN’lerle yarışır veya onları geçer. Üstelik bunu eğitmek için önemli ölçüde daha az hesaplama kaynağı harcar.

---

## 1. Giriş (Introduction)

### NLP’deki Durum
Self-attention tabanlı Transformer modelleri NLP’de standarttır. Baskın yaklaşım, büyük bir metin külliyatında pre-training yapmak ve ardından göreve özel daha küçük bir veri kümesinde fine-tuning uygulamaktır. Hesaplama verimliliği ve ölçeklenebilirliği sayesinde 100 milyardan fazla parametreye sahip modeller eğitilebilmiş ve veri/model büyüdükçe performansta henüz bir doygunluk (saturation) görülmemiştir.

### Görüntü İşlemedeki Darboğaz
Bilgisayarlı görüde ResNet gibi evrişimli mimariler hâlâ baskındır. Daha önce evrişimleri tamamen self-attention ile değiştirmeye çalışan teorik olarak verimli modeller üretilmiş olsa da, bunlar özel dikkat şablonları kullandıkları için modern donanım hızlandırıcılarda (GPU/TPU) verimli şekilde ölçeklenememiştir.

### ViT’in Yaklaşımı
Yazarlar, standart NLP Transformer mimarisini mümkün olan en az değişiklikle doğrudan görüntülere uygular. Görüntü yamalara (patches) bölünür ve bu yamaların doğrusal gömmeleri (linear embeddings) bir dizi halinde Transformer’a girdi olarak verilir. Yani görüntü yamaları NLP’deki kelimeler (tokens) gibi işlenir.

### Veri Boyutu ve Inductive Bias Çatışması
ImageNet gibi orta ölçekli veri kümelerinde güçlü bir regülarizasyon olmadan sıfırdan eğitildiğinde ViT, benzer boyuttaki ResNet’lerin birkaç puan gerisinde kalır. Bunun nedeni Transformer’ların, CNN’lerin doğasında bulunan şu inductive bias’lardan yoksun olmasıdır:

- **Translation equivariance** (nesne resmin başka yerine kaydığında özelliğin de aynı şekilde kayması)
- **Locality** (yakın piksellerin birbiriyle ilişkili olması)

Bu yüzden yetersiz veride iyi genelleme yapamazlar.

### “Büyük Ölçekli Eğitim, Inductive Bias’ı Yener”
Modeller 14 milyon ile 300 milyon görüntülük büyük veri kümelerinde (ImageNet-21k veya JFT-300M) eğitildiğinde tablo tamamen değişir. Yazarlar büyük ölçekli eğitimin inductive bias eksikliğini telafi ettiğini (**large scale training trumps inductive bias**) kanıtlar.

En iyi model başarıları:
- ImageNet → **%88.55**
- ImageNet-ReaL → **%90.72**
- CIFAR-100 → **%94.55**
- VTAB (19 görev) → **%77.63**

---

## 2. İlgili Çalışmalar (Related Work)

### Piksel Bazlı Attention Neden İmkansız?
Self-attention’ı görüntülere saf haliyle uygulamak, her pikselin diğer tüm piksellerle etkileşime girmesini gerektirir. Piksel sayısına göre karesel maliyet \( O(N^2) \) oluştuğu için bu yöntem gerçekçi görüntü boyutlarına ölçeklenemez.

### Önceki Yaklaşımlar ve Kusurları

- **Yerel Dikkat (Parmar et al., 2018):** Global yerine sadece yerel komşuluklarda self-attention uygulamıştır.
- **Sparse / Axial Transformers:** Global dikkati ölçeklemek için seyrek yaklaşımlar veya sadece belirli eksenler boyunca (axial) dikkat uygulamışlardır. Ancak bunlar donanım hızlandırıcılarda verimli çalışmak için karmaşık mühendislik gerektirir.
- **Cordonnier et al. (2020):** ViT’e en çok benzeyen çalışmadır. Görüntüden \( 2 \times 2 \) boyutunda yamalar çıkarıp tam self-attention uygular. Ancak \( 2 \times 2 \) çok küçük olduğu için yalnızca düşük çözünürlüklü görüntülerde çalışabilir.
- **iGPT (Chen et al., 2020a):** Görüntü çözünürlüğünü ve renk uzayını düşürdükten sonra piksellere denetimsiz olarak Transformer uygular. ImageNet’te en fazla %72 doğruluğa ulaşabilmiştir.

---

## 3. Yöntem (Method)

Model tasarımında orijinal NLP Transformer’ına (Vaswani et al., 2017) mümkün olduğunca sadık kalınmıştır. Bu kasıtlı basitliğin en büyük avantajı, ölçeklenebilir NLP Transformer mimarilerinin ve bunların hazır, verimli donanım uygulamalarının neredeyse hiçbir değişiklik yapılmadan kullanılabilmesidir.

### 3.1 Vision Transformer (ViT) Mimarisi ve Denklemler

Standart Transformer girdi olarak 1 boyutlu token embedding dizisi alır. 2 boyutlu görüntüleri işlemek için yapılan işlemler şunlardır:

#### 1. Görüntünün Yamalara Bölünmesi – Denklem (1)

Orijinal görüntü \( x \in \mathbb{R}^{H \times W \times C} \), düzleştirilmiş 2D yamalardan oluşan bir diziye dönüştürülür:

\[
x_p \in \mathbb{R}^{N \times (P^2 \cdot C)}
\]

- \( (P, P) \): her bir yamanın çözünürlüğü (ör. \( 16 \times 16 \))
- Toplam yama sayısı: \( N = \frac{HW}{P^2} \) (Transformer için sequence length)

Düzleştirilmiş yamalar eğitilebilir bir doğrusal izdüşüm matrisi \( E \in \mathbb{R}^{(P^2 \cdot C) \times D} \) ile çarpılarak \( D \) boyuta eşlenir (patch embeddings).

Dizinin en başına öğrenilebilir bir sınıflandırma vektörü (\( x_{\text{class}} \)) eklenir. Konum bilgisini korumak için standart öğrenilebilir 1D position embeddings eklenir:

\[
z_0 = [x_{\text{class}}; \, x_p^1 E; \, x_p^2 E; \, \cdots; \, x_p^N E] + E_{\text{pos}} \quad (1)
\]

#### 2. Transformer Encoder Blokları – Denklem (2) ve (3)

Encoder toplam \( L \) katmandan oluşur ve dönüşümlü olarak Multi-Head Self-Attention (MSA) ile MLP bloklarını içerir. Her bloktan önce LayerNorm, her bloktan sonra residual connection uygulanır:

\[
z'_l = \text{MSA}(\text{LN}(z_{l-1})) + z_{l-1}, \quad l = 1 \dots L \quad (2)
\]

\[
z_l = \text{MLP}(\text{LN}(z'_l)) + z'_l, \quad l = 1 \dots L \quad (3)
\]

MLP bloğu, aralarında GELU aktivasyonu bulunan iki katmandan oluşur.

#### 3. Çıktı ve Sınıflandırma – Denklem (4)

\( x_{\text{class}} \) token’ının en son katmandaki durumu LayerNorm’dan geçirilerek görüntünün nihai temsili alınır:

\[
y = \text{LN}(z_L^0) \quad (4)
\]

- **Pre-training** sırasında: 1 gizli katmanlı MLP (tanh aktivasyonlu)
- **Fine-tuning** sırasında: Sıfırlarla başlatılmış tek bir Linear katman

#### Hibrit Mimari
Girdi dizisi bir CNN’in (örneğin ResNet-50) ürettiği özellik haritalarından da oluşturulabilir. Bu durumda yamalar orijinal resimden değil, CNN feature map’inden çıkarılır.

### 3.2 İnce Ayar (Fine-Tuning) ve Daha Yüksek Çözünürlük

- Önceden eğitilmiş prediction head çıkarılır, yerine \( D \times K \) boyutunda sıfırlarla başlatılmış bir katman takılır.
- Fine-tuning’i daha yüksek çözünürlükte yapmak (ör. \( 224 \to 384 \) veya \( 512 \)) performansı artırır.
- Yama boyutu sabit tutulduğu için sequence length artar. Bu sorunu çözmek için position embedding’lere **2D interpolasyon** uygulanır.

---

## 4. Deneyler (Experiments)

### 4.1 Deney Kurulumu

**Pre-training veri kümeleri:**
1. ImageNet → 1.3 milyon görüntü
2. ImageNet-21k → 14 milyon görüntü
3. JFT-300M → 303 milyon görüntü

**Downstream görevler:** ImageNet, CIFAR-10/100, Oxford Pets, Oxford Flowers, VTAB (19 görev)

**ViT Model Varyantları:**

| Model       | Katman | Hidden Size (D) | MLP Size | Heads | Parametre |
|-------------|--------|------------------|----------|-------|-----------|
| ViT-Base    | 12     | 768              | 3072     | 12    | 86M       |
| ViT-Large   | 24     | 1024             | 4096     | 16    | 307M      |
| ViT-Huge    | 32     | 1280             | 5120     | 16    | 632M      |

### 4.2 State-of-the-Art Karşılaştırması

JFT-300M üzerinde eğitilen **ViT-H/14**:
- ImageNet: **%88.55**
- ImageNet-ReaL: **%90.72**
- CIFAR-100: **%94.55**
- VTAB: **%77.63**

Hesaplama maliyeti (TPUv3-core-days):
- BiT-L → 9.9k
- Noisy Student → 12.3k
- **ViT-H/14 → 2.5k**
- ViT-L/16 → 0.68k

### 4.3 Veri Gereksinimleri

- **Küçük veri** (ImageNet): ViT, ResNet’lerin gerisinde kalır (overfitting).
- **Orta veri** (ImageNet-21k): Fark kapanır.
- **Büyük veri** (JFT-300M): ViT, CNN’leri geçer.

**Sonuç:** Convolutional inductive bias küçük veri için faydalıdır. Büyük veride ise örüntüleri doğrudan veriden öğrenmek daha avantajlıdır.

### 4.4 Ölçeklendirme Çalışması

- ViT, aynı performansa **2–4 kat daha az compute** ile ulaşır.
- Hibrit modeller (ResNet + ViT) küçük compute’da biraz daha iyidir, büyük modelde avantaj kaybolur.
- ResNet’ler doygunluğa ulaşırken, ViT denenen aralıkta doygunluk göstermez.

### 4.5 Modelin İçini İncelemek

1. **RGB Embedding Filtreleri:** İlk katman filtreleri CNN’lerdeki Gabor benzeri kenar/renk algılayıcılara benzer.
2. **Position Embedding:** Model 2D görüntü topolojisini kendi kendine öğrenir (yakın yamalar benzer konum vektörlerine sahiptir).
3. **Attention Distance:** En alt katmanlarda bile bazı kafalar global bakar. Derinlik arttıkça dikkat mesafesi artar.
4. **Attention Rollout:** Model sınıflandırma için anlamsal olarak ilgili bölgelere (nesneye) odaklanır, arka planı karartır.

### 4.6 Self-Supervised Öğrenme

Masked Patch Prediction deneyi:
- Yamaların %50’si bozulur.
- Model bozulan yamanın 3-bit ortalama rengini tahmin eder.
- Sonuç: ImageNet’te **%79.9** (sıfırdan eğitime göre +%2, supervised JFT’ye göre –%4)

---

## 5. Sonuç ve Gelecek Çalışmalar

Görüntüyü bir yama dizisi olarak yorumlayıp standart bir NLP Transformer Encoder ile işlemek, büyük ölçekli pre-training ile birleştiğinde hem en gelişmiş CNN’leri yakalar/geçer hem de ön eğitim maliyeti açısından daha ucuzdur.

**Açık noktalar:**
1. Detection ve segmentation’a uyarlanması
2. Self-supervised ile supervised arasındaki %4’lük farkın kapatılması
3. Daha da büyük modellere ölçeklendirme

---

## Ekler (Appendix) – Kritik Teknik Detaylar

- **Ek D.1:** ResNet’ler için bile Adam, SGD’den daha iyi transfer sonucu vermiştir.
- **Ek D.2:** Model büyütürken en büyük kazanç **derinlik** artırmaktan gelir. Patch size küçültmek parametre eklemeden güçlü performans artışı sağlar.
- **Ek D.5:** ViT, benzer ResNet’lere göre çok daha bellek verimlidir. 512 çözünürlüğe kadar quadratic yavaşlama neredeyse hissedilmez.
- **Ek D.6:** Axial Attention doğruluğu biraz artırsa da TPU’larda çok yavaş çalışmıştır.