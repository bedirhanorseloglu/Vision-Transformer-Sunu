import type { SlideMeta } from '../types/presentation'
import { Slide01_Cover } from './Slide01_Cover'
import { Slide02_AttentionMechanism } from './Slide02_AttentionMechanism'
import { Slide03_AttentionWalkthrough } from './Slide03_AttentionWalkthrough'
import { Slide04_AttentionExample } from './Slide04_AttentionExample'
import { Slide05_TransformerArchitecture } from './Slide05_TransformerArchitecture'
import { Slide06_SelfAttentionQKV } from './Slide06_SelfAttentionQKV'
import { Slide07_WhyViT } from './Slide07_WhyViT'
import { Slide08_ViTArchitectureOverview } from './Slide08_ViTArchitectureOverview'
import { Slide09_PatchingAndEmbedding } from './Slide09_PatchingAndEmbedding'
import { Slide10_ClsPositionMLP } from './Slide10_ClsPositionMLP'
import { Slide11_ClsAndPositionDetail } from './Slide11_ClsAndPositionDetail'
import { Slide12_CnnVsVitReceptiveField } from './Slide12_CnnVsVitReceptiveField'
import { Slide13_InductiveBiasLack } from './Slide13_InductiveBiasLack'

export const presentationSlides: SlideMeta[] = [
  {
    id: 'cover',
    title: 'Giriş & Kapak',
    subtitle: 'Vision Transformer (ViT) — An Image is Worth 16x16 Words',
    section: 'GİRİŞ',
    component: Slide01_Cover,
  },
  {
    id: 'attention-vs-rnn',
    title: 'Geleneksel RNN vs Attention Mekanizması',
    subtitle: "Encoder'dan Decoder'a Ne Aktarılıyor?",
    section: 'BÖLÜM 1: DİKKAT (ATTENTION) & SEQ2SEQ',
    component: Slide02_AttentionMechanism,
  },
  {
    id: 'attention-walkthrough',
    title: 'Attention Mekanizması Nasıl Çalışır?',
    subtitle: 'Dinamik Ağırlıklandırma, Context Vektörü ve Kelime Üretimi',
    section: 'BÖLÜM 1: DİKKAT (ATTENTION) & SEQ2SEQ',
    component: Slide03_AttentionWalkthrough,
  },
  {
    id: 'attention-example',
    title: 'Uygulamalı Örnek: Çeviri ve Attention',
    subtitle: 'Kelimelerin Sırası Değişirken Attention Nasıl Odaklanıyor?',
    section: 'BÖLÜM 1: DİKKAT (ATTENTION) & SEQ2SEQ',
    component: Slide04_AttentionExample,
  },
  {
    id: 'transformer-architecture',
    title: 'Transformer Mimarisi: Paralel İşleme',
    subtitle: "RNN'siz Paralel İşleme, Encoder-Decoder Yığını ve Self-Attention",
    section: 'BÖLÜM 2: TRANSFORMER TEMELLERİ',
    component: Slide05_TransformerArchitecture,
  },
  {
    id: 'self-attention-qkv',
    title: 'Self-Attention: QKV ve Çok Başlı Dikkat',
    subtitle: 'Query, Key, Value Matrisleri ve Çok Başlı Dikkat (h=8)',
    section: 'BÖLÜM 2: TRANSFORMER TEMELLERİ',
    component: Slide06_SelfAttentionQKV,
  },
  {
    id: 'why-vit',
    title: 'Neden Vision Transformer? (ViT\'in Doğuşu)',
    subtitle: "NLP Başarısını Bilgisayarlı Görüye Taşımak: 16x16 Kelime Devrimi",
    section: 'BÖLÜM 3: VISION TRANSFORMER (ViT)',
    component: Slide07_WhyViT,
  },
  {
    id: 'vit-architecture-overview',
    title: 'ViT Mimarisi: 5 Temel Adıma Genel Bakış',
    subtitle: 'Patch\'lere Bölme, Patch Embedding, [CLS] Token, Encoder ve MLP Head',
    section: 'BÖLÜM 3: VISION TRANSFORMER (ViT)',
    component: Slide08_ViTArchitectureOverview,
  },
  {
    id: 'vit-patching-embedding',
    title: '1. ve 2. Adım: Patch\'lere Bölme ve Patch Embedding',
    subtitle: '196 Patch ve 196x768 Boyutlu Patch Embedding Matrisi',
    section: 'BÖLÜM 3: VISION TRANSFORMER (ViT)',
    component: Slide09_PatchingAndEmbedding,
  },
  {
    id: 'vit-cls-position-mlp',
    title: '3, 4 ve 5. Adım: [CLS] Token, Konum ve Sınıflandırma',
    subtitle: '197x768 Matrisi, Position Embedding ve MLP Head Tahmini',
    section: 'BÖLÜM 3: VISION TRANSFORMER (ViT)',
    component: Slide10_ClsPositionMLP,
  },
  {
    id: 'vit-cls-position-detail',
    title: '3. Adım Detayı: [CLS] Token ve Position Embeddings',
    subtitle: 'BERT Tipi [CLS] Token Ekleme, 1D Konum Vektörleri ve Encoder Girişi',
    section: 'BÖLÜM 3: VISION TRANSFORMER (ViT)',
    component: Slide11_ClsAndPositionDetail,
  },
  {
    id: 'cnn-vs-vit-receptive-field',
    title: 'CNN vs ViT: Alıcı Alanı ve Görsel Algı',
    subtitle: 'Küresel (Global) vs Yerel (Local) Alıcı Alanı: Doku Odaklılık vs Şekil Odaklılık',
    section: 'BÖLÜM 3: VISION TRANSFORMER (ViT)',
    component: Slide12_CnnVsVitReceptiveField,
  },
  {
    id: 'vit-inductive-bias',
    title: 'Neden 16×16 Patch? Karesel Maliyet ve Çözüm Yolları',
    subtitle: 'Çözünürlük Büyüdükçe O(N²) Patlaması, Donanım Kısıtı ve 2D İnterpolasyon',
    section: 'BÖLÜM 3: VISION TRANSFORMER (ViT)',
    component: Slide13_InductiveBiasLack,
  },
]
