'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HardDrive, BrainCircuit, Users, Target, Rocket, ShieldCheck, Zap, MonitorOff } from 'lucide-react';

const FADE_UP = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#07090E] pt-32 pb-24 selection:bg-primary/30 selection:text-white overflow-x-hidden">
      <div className="container mx-auto px-6 max-w-5xl relative">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] bg-orange-600/5 blur-[100px] rounded-full pointer-events-none" />

        <motion.div initial="hidden" animate="visible" variants={FADE_UP} className="text-center mb-32 relative z-10">
          <span className="text-primary font-mono text-xs font-bold uppercase tracking-[0.3em] mb-6 block">About Us</span>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
            Making school easy <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">for everyone.</span>
          </h1>
          <p className="text-xl text-white/50 mx-auto font-medium leading-relaxed max-w-3xl">
            Born in Lusaka, Zambia. SchoolFoundry is more than just software—it’s our way of helping schools ditch the paper and embrace a smoother, smarter future.
          </p>
        </motion.div>

        <div className="space-y-32 relative z-10">
          
          {/* Section 1: Universal Digitization */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row gap-12 items-center"
          >
            <div className="w-24 h-24 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 shadow-2xl backdrop-blur-xl group hover:border-primary/50 transition-colors duration-500">
              <MonitorOff className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div>
              <h3 className="text-3xl sm:text-4xl font-black text-white mb-6 tracking-tight">Ditching the Paper Trail</h3>
              <p className="text-white/60 text-lg leading-relaxed font-medium">
                We believe that modern tools shouldn’t be a luxury. Whether your school is in a busy city or a quiet village, if you’re still using paper registers and receipt books, we’re here to help. Our system works <strong>100% offline</strong>, which means you don’t need constant internet or expensive gadgets to keep your office running like a pro.
              </p>
            </div>
          </motion.div>

          {/* Section 2: Local AI */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row-reverse gap-12 items-center"
          >
            <div className="w-24 h-24 rounded-[2rem] bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 shadow-2xl backdrop-blur-xl group hover:border-primary/50 transition-colors duration-500">
              <BrainCircuit className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div>
              <h3 className="text-3xl sm:text-4xl font-black text-white mb-6 tracking-tight md:text-right">Smart Tools, Local Focus</h3>
              <p className="text-white/60 text-lg leading-relaxed font-medium md:text-right">
                We’re bringing the magic of <strong>Smart Insights</strong> to schools that actually need them. Unlike those big, confusing systems from overseas, SchoolFoundry is built for our region. From spotting trends in fee payments to helping you understand student progress, we give you the info you need without the headache.
              </p>
            </div>
          </motion.div>

          {/* Section 3: Community Empowerment */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row gap-12 items-center"
          >
            <div className="w-24 h-24 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 shadow-2xl backdrop-blur-xl group hover:border-primary/50 transition-colors duration-500">
              <Users className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div>
              <h3 className="text-3xl sm:text-4xl font-black text-white mb-6 tracking-tight">Empowering Our Schools</h3>
              <p className="text-white/60 text-lg leading-relaxed font-medium">
                Our mission is simple: we want to help schools reclaim their time. By securing your finances and organizing your records, we let you focus on what really matters—the students. We’re here to make sure no school is left behind as the world goes digital.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Final CTA/Vision Footer */}
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
          className="mt-48 pt-20 border-t border-white/5 text-center relative z-10"
        >
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="relative">
              <img src="/logo.svg" alt="SchoolFoundry" className="h-12 w-auto relative z-10" />
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-150" />
            </div>
            <span className="text-3xl font-black text-white tracking-tighter">School<span className="font-light text-primary">Foundry</span></span>
          </div>
          <p className="text-white/30 text-base font-bold uppercase tracking-[0.4em] mb-4">Forging the Future</p>
          <p className="text-white/40 text-lg font-medium">Building the technology that empowers the next generation of African learners.</p>
        </motion.div>
      </div>
    </div>
  );
}
