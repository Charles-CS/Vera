"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How accurate is the plant identification?",
    answer: "Our proprietary AI models achieve over 95% accuracy for common species and are continuously learning from global botanical datasets to improve rare species identification."
  },
  {
    question: "Can I use Vera offline?",
    answer: "Currently, Vera requires an active internet connection to route visual data through our cloud-based neural networks for high-precision analysis."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. All image processing is done securely, and we do not store your personal photos unless you explicitly opt-in to help improve our AI models."
  },
  {
    question: "What kind of plants can it identify?",
    answer: "Vera can identify houseplants, outdoor flora, trees, fungi, and succulents. We also provide insights into plant health and cultivation protocols."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-20 md:py-28 bg-transparent overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-8"
          >
            Frequently Asked <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-neutral-400/90 text-lg md:text-xl font-light leading-relaxed"
          >
            Everything you need to know about our intelligence pipeline and platform capabilities.
          </motion.p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`border border-white/5 rounded-2xl bg-neutral-950/50 backdrop-blur-md overflow-hidden transition-colors duration-500 hover:border-emerald-500/30 ${openIndex === index ? 'border-emerald-500/30' : ''}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none group"
              >
                <span className={`text-lg md:text-xl font-light tracking-wide transition-colors duration-300 ${openIndex === index ? 'text-emerald-300' : 'text-white group-hover:text-emerald-300'}`}>
                  {faq.question}
                </span>
                <div className={`ml-4 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${openIndex === index ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/5 text-neutral-400 group-hover:bg-white/10'}`}>
                  {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-neutral-400 font-light leading-relaxed text-base md:text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
