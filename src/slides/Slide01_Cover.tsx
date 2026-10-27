import { motion } from 'framer-motion'

const PUNCHY_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export function Slide01_Cover() {
  return (
    <div className="relative w-full h-full max-h-screen bg-white text-slate-900 flex flex-col justify-center items-center text-center p-6 sm:p-10 overflow-hidden select-none">
      
      {/* Centered Grand Flow Container */}
      <div className="flex flex-col items-center gap-6 sm:gap-8 max-w-6xl mx-auto w-full my-auto">
        
        {/* 1. Institutional Branding (Enlarged & Majestic) */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: PUNCHY_EASE }}
          className="flex flex-col items-center gap-3"
        >
          <img 
            src="/ktu_logo.svg" 
            alt="Karadeniz Teknik Üniversitesi Logosu" 
            className="w-18 h-18 sm:w-20 sm:h-20 object-contain"
          />
          <div>
            <h2 className="text-base sm:text-lg md:text-xl font-black text-slate-900 tracking-tight font-montserrat uppercase">
              Karadeniz Teknik Üniversitesi
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-500 font-sans font-medium mt-0.5">
              Fen Bilimleri Enstitüsü • Yapay Zeka ve Veri Mühendisliği
            </p>
          </div>
        </motion.div>

        {/* 2. Main Title Section */}
        <div className="flex flex-col items-center max-w-5xl mx-auto w-full">
          {/* Paper Kicker Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, delay: 0.06, ease: PUNCHY_EASE }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 text-slate-600 text-xs sm:text-sm font-bold tracking-widest uppercase mb-4 font-sans border border-slate-200/80 shadow-2xs"
          >
            <span>Google Research</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            <span>Brain Team</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            <span className="text-blue-600 font-semibold tracking-normal">Akademik Sunum</span>
          </motion.div>

          {/* Main Title (Single Line & Grand) */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: PUNCHY_EASE }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-black text-slate-900 font-montserrat tracking-tight leading-[1.08] mb-4 whitespace-nowrap"
          >
            Vision Transformer{' '}
            <span className="text-blue-600 font-black">
              (ViT)
            </span>
          </motion.h1>

          {/* Paper Subtitle Quote (Strictly Single Line) */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.15, ease: PUNCHY_EASE }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 font-medium leading-normal whitespace-nowrap font-sans"
          >
            &quot;An Image is Worth 16×16 Words: Transformers for Image Recognition at Scale&quot;
          </motion.p>
        </div>

        {/* 3. Author & Seminar Meta (Enlarged) */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.2, ease: PUNCHY_EASE }}
          className="flex flex-col items-center gap-1.5 pt-5 border-t border-slate-200/90 w-full max-w-md"
        >
          <span className="text-xs uppercase tracking-widest text-slate-400 font-bold font-sans">
            Sunumu Hazırlayan & Sunan
          </span>
          <span className="text-xl sm:text-2xl font-extrabold text-slate-900 font-montserrat tracking-tight">
            Bedirhan Örseloğlu
          </span>
          <span className="text-sm sm:text-base text-slate-600 font-sans font-medium">
            Multimodal Makine Öğrenmesi
          </span>
        </motion.div>

      </div>

    </div>
  )
}

export default Slide01_Cover
