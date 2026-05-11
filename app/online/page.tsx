'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Mail, UserPlus, Database, Bot, BrainCircuit, Rocket, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FADE_UP = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65 } }
};

export default function OnlinePage() {
  return (
    <div className="min-h-screen bg-[#07090E] pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div initial="hidden" animate="visible" variants={FADE_UP} className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8 font-mono text-[10px] uppercase tracking-widest">
            The Cloud Navigator
          </div>
          <h1 className="text-5xl sm:text-7xl font-black text-white mb-8 tracking-tighter">Your School, <br/><span className="text-primary">in your pocket.</span></h1>
          <p className="text-xl text-white/50 max-w-3xl mx-auto font-medium leading-relaxed">
            Take your school to the next level. Coordination, smart insights, and automated WhatsApp updates—all designed to make your life easier and your parents happier.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <h3 className="text-3xl font-bold text-white mb-8">Next-Gen Capabilities</h3>
            <div className="space-y-8">
              {[
                { icon: Globe, title: 'Always in Sync', text: 'Real-time coordination between the Bursar, Principal, and Teachers.' },
                { icon: BrainCircuit, title: 'Smart Insights', text: 'Automatically spot trends in fee payments and student performance.' },
                { icon: Mail, title: 'WhatsApp Magic', text: 'Send PDF statements and payment reminders directly to parents’ phones.' },
                { icon: UserPlus, title: 'Parent Peace of Mind', text: 'Parents can check balances and download reports on their own.' },
                { icon: ShieldCheck, title: 'Simply Better', text: 'Modern software that runs circles around those slow, old legacy systems.' }
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
                <a href="/#contact">Join the Cloud Roadmap</a>
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }} className="relative">
            <div className="bg-primary/5 border border-primary/10 rounded-[3rem] p-12 overflow-hidden backdrop-blur-3xl group">
              <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                <Bot className="w-80 h-80 text-primary" />
              </div>
              <h4 className="text-3xl font-bold mb-10 text-white tracking-tight">The Roadmap</h4>
              <div className="space-y-10 relative z-10">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary font-bold text-xl flex-shrink-0">P1</div>
                  <div>
                    <p className="text-xl font-bold mb-2 text-white">Seamless Cloud Migration</p>
                    <p className="text-base text-white/40 leading-relaxed">Move your records to our secure servers so you never have to worry about data loss.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary font-bold text-xl flex-shrink-0">P2</div>
                  <div>
                    <p className="text-xl font-bold mb-2 text-white">Mobile Money Integration</p>
                    <p className="text-base text-white/40 leading-relaxed">Accept EcoCash, Airtel Money, and MTN payments. Match bank feeds instantly.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary font-bold text-xl flex-shrink-0">P3</div>
                  <div>
                    <p className="text-xl font-bold mb-2 text-white">WhatsApp & AI Assistants</p>
                    <p className="text-base text-white/40 leading-relaxed">Parents request statements via a simple bot. AI flags accounts that need a friendly nudge.</p>
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
