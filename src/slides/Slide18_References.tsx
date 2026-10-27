import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, ExternalLink } from 'lucide-react'

export const Slide18_References: React.FC = () => {
  const PUNCHY_EASE = [0.16, 1, 0.3, 1] as const

  const references = [
    {
      id: '01',
      author: 'Dosovitskiy, A., Beyer, L., Kolesnikov, A., et al. (2021)',
      title: 'An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale',
      venue: 'Proceedings of ICLR 2021 (Google Research, Brain Team)',
      url: 'https://openreview.net/forum?id=YicbFdNTTy',
      type: 'Makale'
    },
    {
      id: '02',
      author: 'Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., et al. (2017)',
      title: 'Attention Is All You Need',
      venue: 'Advances in Neural Information Processing Systems (NIPS 2017)',
      url: 'https://arxiv.org/abs/1706.03762',
      type: 'Makale'
    },
    {
      id: '03',
      author: 'Çobanov, M. (2021)',
      title: 'Vision Transformers (ViT) Nedir?',
      venue: 'Medium Teknoloji İncelemesi',
      url: 'https://mertcobanov.medium.com/vision-transformers-nedir-vits-nedir-14dce4d1c6d7',
      type: 'İnceleme'
    },
    {
      id: '04',
      author: 'Google Research (2020)',
      title: 'Transformers for Image Recognition at Scale',
      venue: 'Google Research Blog Resmi Duyurusu',
      url: 'https://research.google/blog/transformers-for-image-recognition-at-scale/',
      type: 'Blog'
    },
    {
      id: '05',
      author: 'GeeksforGeeks (2023)',
      title: 'Vision Transformer (ViT) Architecture',
      venue: 'GeeksforGeeks Deep Learning Rehberi',
      url: 'https://www.geeksforgeeks.org/deep-learning/vision-transformer-vit-architecture/',
      type: 'Rehber'
    },
    {
      id: '06',
      author: 'Stanford HAI (2023)',
      title: 'What is a Vision Transformer (ViT)?',
      venue: 'Stanford Human-Centered Artificial Intelligence',
      url: 'https://hai.stanford.edu/ai-definitions/what-is-a-vit',
      type: 'Rapor'
    },
    {
      id: '07',
      author: 'Arora, A. (2021)',
      title: 'Vision Transformers (ViT) - An Image is Worth 16x16 Words (Code Walkthrough)',
      venue: 'Teknik Kod İncelemesi & PyTorch Uygulaması',
      url: 'https://amaarora.github.io/posts/2021-01-18-ViT.html',
      type: 'Kod'
    },
    {
      id: '08',
      author: 'Pavlic, T. (2021)',
      title: 'Transformer Explorer & Vision Transformer',
      venue: 'ASU Bioinspired AI and Optimization',
      url: 'https://tpavlic.github.io/asu-bioinspired-ai-and-optimization/transformers/transformer_explorer.html#visiontransformer',
      type: 'Rehber'
    },
    {
      id: '09',
      author: 'Shin, J. (2023)',
      title: 'Attention Visualization in Vision Transformers',
      venue: 'İnteraktif Görselleştirme ve Dikkat Haritası Aracı',
      url: 'https://jaden-shin-1214.github.io/attention-visualization/',
      type: 'İnteraktif'
    },
    {
      id: '10',
      author: 'Mao, M. (2023)',
      title: 'Visualize Attention in ViT',
      venue: 'Hugging Face Spaces Canlı İnteraktif Model',
      url: 'https://huggingface.co/spaces/maomao88/visualize_attention_in_ViT',
      type: 'İnteraktif'
    }
  ]

  return (
    <div className="relative w-full h-full bg-white rounded-3xl shadow-[0_20px_50px_-15px_rgba(37,99,235,0.07)] border border-slate-200/90 overflow-hidden flex flex-col justify-between p-5 sm:p-7 md:p-8 select-none font-sans">

      {/* Background soft ambient accents */}
      <div className="absolute top-0 right-0 w-[550px] h-[380px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[340px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* 1. TOP HEADER (Identical to Slide02-Slide17) */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: PUNCHY_EASE }}
        className="w-full flex items-center justify-between pb-2.5 border-b border-slate-100 z-10 shrink-0"
      >
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/60 font-sans">
              BÖLÜM 6: KAYNAKÇA & LİTERATÜR
            </span>
            <span className="text-xs text-slate-400 font-sans">
              | Akademik Makaleler, Bloglar ve İnteraktif Görselleştirmeler
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-montserrat tracking-tight">
            Kaynakça ve İleri Okuma Listesi
          </h2>
        </div>

        <div className="flex items-center gap-2">

          <span className="text-xs text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full font-sans font-semibold border border-blue-200/60">
            10 Temel Kaynak
          </span>
        </div>
      </motion.div>

      {/* 2. MAIN 2-COLUMN REFERENCES LIST */}
      <div className="z-10 my-auto py-2 grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
        {/* Left Column (01 - 05) */}
        <div className="flex flex-col gap-2.5">
          {references.slice(0, 5).map((ref, idx) => (
            <motion.div
              key={ref.id}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, delay: idx * 0.04, ease: PUNCHY_EASE }}
              className="p-3 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:border-blue-300 hover:bg-blue-50/20 transition-all flex items-start gap-3 group"
            >
              <div className="w-7 h-7 rounded-xl bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0 font-montserrat mt-0.5">
                {ref.id}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-0.5">
                  <h3 className="text-xs font-bold text-slate-900 font-montserrat truncate">
                    {ref.author}
                  </h3>
                  <span className="text-[10px] font-semibold text-slate-500 bg-white px-2 py-0.5 rounded-md border border-slate-200 shrink-0 font-sans">
                    {ref.type}
                  </span>
                </div>
                <p className="text-xs text-slate-700 italic font-medium font-sans line-clamp-1 mb-1">
                  {ref.title}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-sans truncate">
                    {ref.venue}
                  </span>
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 hover:text-blue-800 transition-colors shrink-0 ml-2 font-sans"
                  >
                    <span>Bağlantı</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Column (06 - 10) */}
        <div className="flex flex-col gap-2.5">
          {references.slice(5, 10).map((ref, idx) => (
            <motion.div
              key={ref.id}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, delay: idx * 0.04 + 0.1, ease: PUNCHY_EASE }}
              className="p-3 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:border-indigo-300 hover:bg-indigo-50/20 transition-all flex items-start gap-3 group"
            >
              <div className="w-7 h-7 rounded-xl bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center shrink-0 font-montserrat mt-0.5">
                {ref.id}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-0.5">
                  <h3 className="text-xs font-bold text-slate-900 font-montserrat truncate">
                    {ref.author}
                  </h3>
                  <span className="text-[10px] font-semibold text-slate-500 bg-white px-2 py-0.5 rounded-md border border-slate-200 shrink-0 font-sans">
                    {ref.type}
                  </span>
                </div>
                <p className="text-xs text-slate-700 italic font-medium font-sans line-clamp-1 mb-1">
                  {ref.title}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-sans truncate">
                    {ref.venue}
                  </span>
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-600 hover:text-indigo-800 transition-colors shrink-0 ml-2 font-sans"
                  >
                    <span>Bağlantı</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. BOTTOM FOOTER */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, delay: 0.25, ease: PUNCHY_EASE }}
        className="w-full bg-slate-50/90 rounded-2xl p-2.5 sm:p-3 border border-slate-200/80 shadow-2xs flex items-center justify-between z-10 shrink-0 font-sans"
      >
        <div className="flex items-center gap-2 text-xs text-slate-600">
          <BookOpen className="w-4 h-4 text-blue-600" />
          <span>Tüm makaleler, kaynak kodları ve interaktif demolar doğrudan bağlantılar üzerinden incelenebilir.</span>
        </div>
        <div className="text-[11px] text-slate-400 font-medium">
          Multimodal Makine Öğrenmesi • Kaynakça
        </div>
      </motion.div>

    </div>
  )
}

export default Slide18_References
