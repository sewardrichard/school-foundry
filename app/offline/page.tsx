'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Printer, HardDrive, Zap, ListOrdered, CheckCircle, Database, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FADE_UP = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65 } }
};

export default function OfflinePage() {
  return (
    <div className="min-h-screen bg-[#07090E] pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div initial="hidden" animate="visible" variants={FADE_UP} className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8 font-mono text-[10px] uppercase tracking-widest">
            The Offline Hero
          </div>
          <h1 className="text-5xl sm:text-7xl font-black text-white mb-8 tracking-tighter">No Internet? <br/><span className="text-primary">No Problem.</span></h1>
          <p className="text-xl text-white/50 max-w-3xl mx-auto font-medium leading-relaxed">
            Built for schools where the internet likes to take holidays. SchoolFoundry Offline is a standalone powerhouse that just works—no matter what.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <h3 className="text-3xl font-bold text-white mb-8">Everything in one box</h3>
            <div className="space-y-8">
              {[
                { icon: Printer, title: 'Receipt Printer Included', text: 'Comes with a high-speed printer and starter rolls.' },
                { icon: HardDrive, title: 'Secure Local Storage', text: 'All your data stays right on your office PC—safe and sound.' },
                { icon: Zap, title: 'Lightning Fast Receipts', text: 'Print professional receipts in less than 2 seconds.' },
                { icon: ListOrdered, title: 'Built for Southern Africa', text: 'Multi-currency support (USD/ZMW/ZWG) comes standard.' },
                { icon: Shield, title: 'Total Privacy', text: 'Your records never leave your school premises.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="p-3 rounded-2xl bg-white/5 group-hover:bg-primary/10 transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-primary flex-shrink-0" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg mb-1">{item.title}</p>
                    <p className="text-sm text-white/40 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <Button size="lg" className="rounded-2xl px-10 h-16 text-lg font-bold shadow-2xl shadow-primary/20" asChild>
                <a href="/#contact">Get a Quote for Your School</a>
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }} className="relative">
            <div className="bg-white/[0.03] border border-white/5 rounded-[3rem] p-12 overflow-hidden group backdrop-blur-3xl">
              <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
                <Printer className="w-80 h-80" />
              </div>
              <h4 className="text-3xl font-bold mb-10 text-white tracking-tight">The Deployment Bundle</h4>
              <div className="space-y-12 relative z-10">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center font-black text-3xl flex-shrink-0 shadow-lg shadow-primary/20">1</div>
                  <div>
                    <p className="text-2xl font-bold mb-2 text-white">High-Speed Thermal Printer</p>
                    <p className="text-lg text-white/40 leading-relaxed">No ink required—ever. Built to handle your busiest enrollment days.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center font-black text-3xl flex-shrink-0 shadow-lg shadow-primary/20">10</div>
                  <div>
                    <p className="text-2xl font-bold mb-2 text-white">Starter Paper Rolls</p>
                    <p className="text-lg text-white/40 leading-relaxed">Everything you need to start on Day 1. Standard 80mm refills.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 shadow-xl">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold mb-2 text-white">Lifetime License</p>
                    <p className="text-lg text-white/40 leading-relaxed">One-time payment. You own your data forever. No hidden monthly fees.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
