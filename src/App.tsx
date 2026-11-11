/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  Briefcase, GraduationCap, Languages as LanguagesIcon, Mail, Phone, MapPin, 
  Download, FileText, Send, CheckCircle2, Globe, 
  TrendingUp, Users, ArrowRight, Calendar, ShieldCheck,
  ChevronRight, ChevronDown, Check, X
} from 'lucide-react';
import { motion } from 'motion/react';
import { Language, translations } from './translations';

const languagesList: { code: Language; label: string; nativeName: string }[] = [
  { code: 'fr', label: 'Français', nativeName: 'FR' },
  { code: 'en', label: 'English', nativeName: 'EN' },
  { code: 'pt', label: 'Português', nativeName: 'PT' },
  { code: 'es', label: 'Español', nativeName: 'ES' },
  { code: 'ar', label: 'العربية', nativeName: 'AR' },
];

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio_lang') as Language;
    return (saved === 'fr' || saved === 'en' || saved === 'pt' || saved === 'es' || saved === 'ar') ? saved : 'fr';
  });

  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('portfolio_lang', newLang);
  };

  const isRTL = lang === 'ar';
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang, isRTL]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setIsLangDropdownOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const [activeTab, setActiveTab] = useState<'all' | 'stages' | 'pro'>('all');
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Profile photo state with default uploaded image
  const [profilePhoto, setProfilePhoto] = useState<string | null>('/assets/aistudio/WhatsApp_Image_2026-11-10_at_22.44.55_42cbefad.jpeg');

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Contact form state
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [contactSent, setContactSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const pdfPath = '/assets/aistudio/mon_Cv_Dilsa_20261110_164234_0000_188402e6.pdf';

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://formspree.io/f/xaeeeava', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: contactForm.name,
          email: contactForm.email,
          subject: contactForm.subject || `${t.contactModal.defaultSubjectPrefix}: ${contactForm.name}`,
          message: contactForm.message
        })
      });

      if (response.ok) {
        setContactSent(true);
        setContactForm({ name: '', email: '', subject: '', message: '' });
      } else {
        const data = await response.json().catch(() => null);
        if (data && data.errors && data.errors.length > 0) {
          setErrorMessage(data.errors.map((err: { message: string }) => err.message).join(', '));
        } else {
          setErrorMessage(t.contactModal.errorGeneric);
        }
      }
    } catch (err) {
      setErrorMessage(t.contactModal.errorConnection);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-600 selection:text-white transition-colors"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Navigation */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-slate-950/80">
        <div className="w-full px-6 sm:px-12 lg:px-16 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#1E3A8A] via-blue-600 to-sky-400 flex items-center justify-center font-bold text-white text-lg shadow-lg shadow-blue-900/40 shrink-0">
              DC
            </div>
            <div>
              <span className="font-bold tracking-tight text-lg text-white block">Dilsa Cá</span>
              <span className="text-xs text-blue-300 font-medium">{t.nav.roleSubtitle}</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#profil" className="hover:text-blue-400 transition-colors">{t.nav.profile}</a>
            <a href="#experiences" className="hover:text-blue-400 transition-colors">{t.nav.experiences}</a>
            <a href="#competences" className="hover:text-blue-400 transition-colors">{t.nav.skills}</a>
            <a href="#formation" className="hover:text-blue-400 transition-colors">{t.nav.education}</a>
            <a href="#langues" className="hover:text-blue-400 transition-colors">{t.nav.languages}</a>
          </nav>

          <div className="flex items-center gap-3">
            {/* Language Selector Dropdown (FR | EN | PT | ES | AR) */}
            <div className="relative" ref={langDropdownRef}>
              <button
                type="button"
                onClick={() => setIsLangDropdownOpen((prev) => !prev)}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800/80 hover:border-blue-500/40 text-xs font-semibold transition-all shadow-sm active:scale-95"
                aria-expanded={isLangDropdownOpen}
                aria-haspopup="true"
                title={t.nav.languages}
              >
                <Globe className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="uppercase tracking-wider font-bold text-white">{lang}</span>
                <span className="text-slate-400 text-[11px] hidden sm:inline">• {languagesList.find((l) => l.code === lang)?.label}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${isLangDropdownOpen ? 'rotate-180 text-blue-400' : ''}`} />
              </button>

              {isLangDropdownOpen && (
                <div 
                  className={`absolute top-full mt-2 w-48 py-1.5 rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-slate-800 shadow-2xl z-50 overflow-hidden ${
                    isRTL ? 'left-0' : 'right-0'
                  }`}
                >
                  <div className="px-3.5 py-1.5 text-[10px] uppercase tracking-wider font-bold text-slate-400 border-b border-slate-800/60 mb-1">
                    {t.nav.languages}
                  </div>
                  <div className="flex flex-col">
                    {languagesList.map((item) => {
                      const isSelected = lang === item.code;
                      return (
                        <button
                          key={item.code}
                          type="button"
                          onClick={() => {
                            handleLanguageChange(item.code);
                            setIsLangDropdownOpen(false);
                          }}
                          className={`w-full px-3.5 py-2.5 flex items-center justify-between text-xs font-medium transition-all ${
                            isSelected
                              ? 'bg-blue-950/70 text-white font-bold border-l-2 border-blue-500'
                              : 'text-slate-300 hover:bg-slate-800/70 hover:text-white'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span className={`px-1.5 py-0.5 rounded text-[10px] font-extrabold uppercase ${
                              isSelected ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'
                            }`}>
                              {item.nativeName}
                            </span>
                            <span>{item.label}</span>
                          </div>
                          {isSelected && (
                            <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => setIsContactModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#1E3A8A] via-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 text-white font-bold text-sm transition-all shadow-lg shadow-blue-900/30 active:scale-95"
            >
              <Send className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              <span>{t.nav.contactBtn}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/40 via-slate-950 to-slate-950 pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="w-full px-6 sm:px-12 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                {t.hero.titlePrefix}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-200">
                  {t.hero.titleHighlight}
                </span>
                {t.hero.titleSuffix}
              </h1>

              <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
                {t.hero.bio}
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a 
                  href="#experiences"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#1E3A8A] to-blue-600 hover:from-blue-800 hover:to-blue-500 text-white font-bold transition-all flex items-center gap-2 shadow-lg shadow-blue-900/30"
                >
                  <span>{t.hero.exploreBtn}</span>
                  <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                </a>
              </div>

              {/* Quick Contact Badges */}
              <div className="pt-6 flex flex-wrap gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>{t.hero.location}</span>
                </div>
                <a href="mailto:mailondiasbatista@gmail.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>mailondiasbatista@gmail.com</span>
                </a>
                <a href="tel:+212776895137" className="flex items-center gap-2 hover:text-blue-400 transition-colors" dir="ltr">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span>+212 776 895 137</span>
                </a>
              </div>
            </motion.div>

            {/* Right Card / Profile Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-3xl p-1 bg-gradient-to-b from-blue-600/30 via-slate-800 to-slate-900 shadow-2xl">
                <div className="bg-slate-950 rounded-[22px] p-6 sm:p-8 space-y-6 relative overflow-hidden">
                  
                  {/* Decorative Glow */}
                  <div className={`absolute -top-24 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl pointer-events-none ${isRTL ? '-left-24' : '-right-24'}`}></div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <label className="relative group cursor-pointer" title={t.hero.photoTooltip}>
                        <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#1E3A8A] via-blue-600 to-sky-400 flex items-center justify-center text-white font-black text-xl shadow-md overflow-hidden shrink-0">
                          {profilePhoto ? (
                            <img src={profilePhoto} alt="Dilsa Cá" className="w-full h-full object-cover" />
                          ) : (
                            <span>DC</span>
                          )}
                        </div>
                        <div className="absolute inset-0 bg-slate-950/60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-bold text-blue-300 text-center px-1">
                          {t.hero.photoAdd}
                        </div>
                        <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
                      </label>
                      <div>
                        <h3 className="font-extrabold text-white text-xl">Dilsa Cá</h3>
                        <p className="text-xs font-semibold text-blue-300">{t.profile.photoDegree}</p>
                        <p className="text-[11px] text-slate-400">{t.profile.photoSchool}</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-blue-900/40 text-blue-300 border border-blue-700/30 text-xs font-bold shrink-0">
                      {t.hero.pfeBadge}
                    </span>
                  </div>

                  <div className="space-y-3 text-sm text-slate-300 bg-slate-900/60 p-4 rounded-2xl">
                    <div className="flex justify-between items-center pb-2">
                      <span className="text-slate-400">{t.hero.keyDomainsLabel}</span>
                      <span className="font-semibold text-white">{t.hero.keyDomainsValue}</span>
                    </div>
                    <div className="flex justify-between items-center pb-2">
                      <span className="text-slate-400">{t.hero.languagesLabel}</span>
                      <span className="font-semibold text-white">{t.hero.languagesValue}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">{t.hero.availabilityLabel}</span>
                      <span className="font-semibold text-blue-300">{t.hero.availabilityValue}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">{t.hero.majorAssetsTitle}</span>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-slate-900 text-slate-200 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>{t.hero.asset1}</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900 text-slate-200 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>{t.hero.asset2}</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900 text-slate-200 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>{t.hero.asset3}</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900 text-slate-200 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>{t.hero.asset4}</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Highlights Bar */}
      <section className="bg-slate-900/40 py-8">
        <div className="w-full px-6 sm:px-12 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <div className="text-3xl font-black text-blue-400">{t.highlights.encgTitle}</div>
              <div className="text-xs text-slate-400">{t.highlights.encgDesc}</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-black text-white">{t.highlights.durationTitle}</div>
              <div className="text-xs text-slate-400">{t.highlights.durationDesc}</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-black text-blue-400">{t.highlights.languagesTitle}</div>
              <div className="text-xs text-slate-400">{t.highlights.languagesDesc}</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-black text-white">{t.highlights.experiencesTitle}</div>
              <div className="text-xs text-slate-400">{t.highlights.experiencesDesc}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Profil Section */}
      <section id="profil" className="py-24 w-full px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden group max-w-sm mx-auto lg:mx-0 shadow-xl">
              <div className="overflow-hidden bg-slate-950 aspect-[4/5] relative">
                <img 
                  src={profilePhoto || '/assets/aistudio/FKTR3568_1f584128.JPG'} 
                  alt="Dilsa Cá" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex items-end p-6">
                  <div className="space-y-1">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                      {t.profile.photoName}
                    </h3>
                    <p className="text-sm font-semibold text-blue-300">
                      {t.profile.photoDegree}
                    </p>
                    <p className="text-xs font-medium text-slate-300">
                      {t.profile.photoSchool}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-snug">
              {t.profile.heading}
            </h2>
            <p className="text-slate-300 leading-relaxed">
              {t.profile.description}
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-900/40 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">✓</div>
                <p className="text-sm text-slate-300">
                  <strong className="text-white">{t.profile.bullet1Title}</strong> {t.profile.bullet1Desc}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-900/40 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">✓</div>
                <p className="text-sm text-slate-300">
                  <strong className="text-white">{t.profile.bullet2Title}</strong> {t.profile.bullet2Desc}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-slate-900/80 hover:bg-slate-900 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-900/30 flex items-center justify-center text-blue-400">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-lg">{t.profile.card1Title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t.profile.card1Desc}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 hover:bg-slate-900 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-950/40 flex items-center justify-center text-sky-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-lg">{t.profile.card2Title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t.profile.card2Desc}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 hover:bg-slate-900 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-950/40 flex items-center justify-center text-blue-300">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-lg">{t.profile.card3Title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t.profile.card3Desc}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 hover:bg-slate-900 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-950/40 flex items-center justify-center text-indigo-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-lg">{t.profile.card4Title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t.profile.card4Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expériences & Stages Section */}
      <section id="experiences" className="py-24 bg-slate-900/30">
        <div className="w-full px-6 sm:px-12 lg:px-16">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                {t.experiences.sectionTitle}
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center p-1.5 rounded-xl bg-slate-900 text-xs font-medium">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-lg transition-all ${activeTab === 'all' ? 'bg-gradient-to-r from-[#1E3A8A] to-blue-600 text-white font-bold shadow-sm' : 'text-slate-400 hover:text-white'}`}
              >
                {t.experiences.tabAll}
              </button>
              <button
                onClick={() => setActiveTab('stages')}
                className={`px-4 py-2 rounded-lg transition-all ${activeTab === 'stages' ? 'bg-gradient-to-r from-[#1E3A8A] to-blue-600 text-white font-bold shadow-sm' : 'text-slate-400 hover:text-white'}`}
              >
                {t.experiences.tabStages}
              </button>
              <button
                onClick={() => setActiveTab('pro')}
                className={`px-4 py-2 rounded-lg transition-all ${activeTab === 'pro' ? 'bg-gradient-to-r from-[#1E3A8A] to-blue-600 text-white font-bold shadow-sm' : 'text-slate-400 hover:text-white'}`}
              >
                {t.experiences.tabPro}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Nearyaa Express Stage */}
            {(activeTab === 'all' || activeTab === 'stages') && (
              <div className="p-8 rounded-3xl bg-slate-900/90 hover:bg-slate-900 transition-all flex flex-col justify-between space-y-6 relative overflow-hidden group">
                <div className={`absolute top-0 w-32 h-32 bg-blue-500/5 pointer-events-none group-hover:bg-blue-500/10 transition-all ${isRTL ? 'left-0 rounded-br-full' : 'right-0 rounded-bl-full'}`}></div>
                <div>
                  <div className={`flex mb-4 ${isRTL ? 'justify-start' : 'justify-end'}`}>
                    <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      {t.experiences.nearyaaDate}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{t.experiences.nearyaaTitle}</h3>
                  <p className="text-sm font-medium text-blue-300 mb-4">{t.experiences.nearyaaDept}</p>
                  <ul className="space-y-2.5 text-sm text-slate-300">
                    <li className="flex items-start gap-2.5">
                      <ChevronRight className={`w-4 h-4 text-blue-400 shrink-0 mt-1 ${isRTL ? 'rotate-180' : ''}`} />
                      <span>{t.experiences.nearyaaBullet1}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <ChevronRight className={`w-4 h-4 text-blue-400 shrink-0 mt-1 ${isRTL ? 'rotate-180' : ''}`} />
                      <span>{t.experiences.nearyaaBullet2}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <ChevronRight className={`w-4 h-4 text-blue-400 shrink-0 mt-1 ${isRTL ? 'rotate-180' : ''}`} />
                      <span>{t.experiences.nearyaaBullet3}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <ChevronRight className={`w-4 h-4 text-blue-400 shrink-0 mt-1 ${isRTL ? 'rotate-180' : ''}`} />
                      <span>{t.experiences.nearyaaBullet4}</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* RADEEC Stage */}
            {(activeTab === 'all' || activeTab === 'stages') && (
              <div className="p-8 rounded-3xl bg-slate-900/90 hover:bg-slate-900 transition-all flex flex-col justify-between space-y-6 relative overflow-hidden group">
                <div className={`absolute top-0 w-32 h-32 bg-sky-500/5 pointer-events-none group-hover:bg-sky-500/10 transition-all ${isRTL ? 'left-0 rounded-br-full' : 'right-0 rounded-bl-full'}`}></div>
                <div>
                  <div className={`flex mb-4 ${isRTL ? 'justify-start' : 'justify-end'}`}>
                    <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-sky-400" />
                      {t.experiences.radeecDate}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{t.experiences.radeecTitle}</h3>
                  <p className="text-sm font-medium text-sky-300 mb-4">{t.experiences.radeecDept}</p>
                  <ul className="space-y-2.5 text-sm text-slate-300">
                    <li className="flex items-start gap-2.5">
                      <ChevronRight className={`w-4 h-4 text-sky-400 shrink-0 mt-1 ${isRTL ? 'rotate-180' : ''}`} />
                      <span>{t.experiences.radeecBullet1}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <ChevronRight className={`w-4 h-4 text-sky-400 shrink-0 mt-1 ${isRTL ? 'rotate-180' : ''}`} />
                      <span>{t.experiences.radeecBullet2}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <ChevronRight className={`w-4 h-4 text-sky-400 shrink-0 mt-1 ${isRTL ? 'rotate-180' : ''}`} />
                      <span>{t.experiences.radeecBullet3}</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* Avaax Experience */}
            {(activeTab === 'all' || activeTab === 'pro') && (
              <div className="p-8 rounded-3xl bg-slate-900/90 hover:bg-slate-900 transition-all flex flex-col justify-between space-y-6 relative overflow-hidden group">
                <div className={`absolute top-0 w-32 h-32 bg-blue-500/5 pointer-events-none group-hover:bg-blue-500/10 transition-all ${isRTL ? 'left-0 rounded-br-full' : 'right-0 rounded-bl-full'}`}></div>
                <div>
                  <div className={`flex mb-4 ${isRTL ? 'justify-start' : 'justify-end'}`}>
                    <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      {t.experiences.avaaxDate}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{t.experiences.avaaxTitle}</h3>
                  <p className="text-sm font-medium text-blue-300 mb-4">{t.experiences.avaaxDept}</p>
                  <ul className="space-y-2.5 text-sm text-slate-300">
                    <li className="flex items-start gap-2.5">
                      <ChevronRight className={`w-4 h-4 text-blue-400 shrink-0 mt-1 ${isRTL ? 'rotate-180' : ''}`} />
                      <span>{t.experiences.avaaxBullet1}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <ChevronRight className={`w-4 h-4 text-blue-400 shrink-0 mt-1 ${isRTL ? 'rotate-180' : ''}`} />
                      <span>{t.experiences.avaaxBullet2}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <ChevronRight className={`w-4 h-4 text-blue-400 shrink-0 mt-1 ${isRTL ? 'rotate-180' : ''}`} />
                      <span>{t.experiences.avaaxBullet3}</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* Preply Experience */}
            {(activeTab === 'all' || activeTab === 'pro') && (
              <div className="p-8 rounded-3xl bg-slate-900/90 hover:bg-slate-900 transition-all flex flex-col justify-between space-y-6 relative overflow-hidden group">
                <div className={`absolute top-0 w-32 h-32 bg-sky-500/5 pointer-events-none group-hover:bg-sky-500/10 transition-all ${isRTL ? 'left-0 rounded-br-full' : 'right-0 rounded-bl-full'}`}></div>
                <div>
                  <div className={`flex mb-4 ${isRTL ? 'justify-start' : 'justify-end'}`}>
                    <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-sky-400" />
                      {t.experiences.preplyDate}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{t.experiences.preplyTitle}</h3>
                  <p className="text-sm font-medium text-sky-300 mb-4">{t.experiences.preplyDept}</p>
                  <ul className="space-y-2.5 text-sm text-slate-300">
                    <li className="flex items-start gap-2.5">
                      <ChevronRight className={`w-4 h-4 text-sky-400 shrink-0 mt-1 ${isRTL ? 'rotate-180' : ''}`} />
                      <span>{t.experiences.preplyBullet1}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <ChevronRight className={`w-4 h-4 text-sky-400 shrink-0 mt-1 ${isRTL ? 'rotate-180' : ''}`} />
                      <span>{t.experiences.preplyBullet2}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <ChevronRight className={`w-4 h-4 text-sky-400 shrink-0 mt-1 ${isRTL ? 'rotate-180' : ''}`} />
                      <span>{t.experiences.preplyBullet3}</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* Compétences & Outils Section */}
      <section id="competences" className="py-24 w-full px-6 sm:px-12 lg:px-16">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {t.skills.sectionTitle}
          </h2>
          <p className="text-slate-300 text-sm">
            {t.skills.sectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Hard Skills */}
          <div className="p-8 rounded-3xl bg-slate-900/60 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-900/30 flex items-center justify-center text-blue-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-lg">{t.skills.cat1Title}</h3>
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs font-medium text-slate-300 mb-1">
                  <span>{t.skills.skill1_1}</span>
                  <span className="text-blue-400">{t.skills.skill1_1_level}</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="w-[90%] h-full bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-medium text-slate-300 mb-1">
                  <span>{t.skills.skill1_2}</span>
                  <span className="text-blue-400">{t.skills.skill1_2_level}</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="w-[85%] h-full bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-medium text-slate-300 mb-1">
                  <span>{t.skills.skill1_3}</span>
                  <span className="text-blue-400">{t.skills.skill1_3_level}</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="w-[85%] h-full bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-medium text-slate-300 mb-1">
                  <span>{t.skills.skill1_4}</span>
                  <span className="text-blue-400">{t.skills.skill1_4_level}</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="w-[75%] h-full bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Software & IT */}
          <div className="p-8 rounded-3xl bg-slate-900/60 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-950/40 flex items-center justify-center text-sky-400">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-lg">{t.skills.cat2Title}</h3>
            </div>
            <div className="space-y-4">
              <div className="p-3 rounded-xl bg-slate-950 flex items-center justify-between">
                <span className="text-sm font-medium text-white">{t.skills.tool1}</span>
                <span className="text-xs text-blue-300 bg-blue-900/40 px-2.5 py-1 rounded-lg">{t.skills.tool1_tag}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 flex items-center justify-between">
                <span className="text-sm font-medium text-white">{t.skills.tool2}</span>
                <span className="text-xs text-sky-300 bg-sky-900/40 px-2.5 py-1 rounded-lg">{t.skills.tool2_tag}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 flex items-center justify-between">
                <span className="text-sm font-medium text-white">{t.skills.tool3}</span>
                <span className="text-xs text-blue-300 bg-blue-900/40 px-2.5 py-1 rounded-lg">{t.skills.tool3_tag}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 flex items-center justify-between">
                <span className="text-sm font-medium text-white">{t.skills.tool4}</span>
                <span className="text-xs text-sky-300 bg-sky-900/40 px-2.5 py-1 rounded-lg">{t.skills.tool4_tag}</span>
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="p-8 rounded-3xl bg-slate-900/60 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-950/40 flex items-center justify-center text-blue-300">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-lg">{t.skills.cat3Title}</h3>
            </div>
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-slate-950 space-y-1">
                <div className="font-semibold text-sm text-white">{t.skills.soft1_title}</div>
                <p className="text-xs text-slate-400">{t.skills.soft1_desc}</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950 space-y-1">
                <div className="font-semibold text-sm text-white">{t.skills.soft2_title}</div>
                <p className="text-xs text-slate-400">{t.skills.soft2_desc}</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950 space-y-1">
                <div className="font-semibold text-sm text-white">{t.skills.soft3_title}</div>
                <p className="text-xs text-slate-400">{t.skills.soft3_desc}</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Formation & Langues Section */}
      <section id="formation" className="py-24 bg-slate-900/30">
        <div className="w-full px-6 sm:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Formation */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-900/30 flex items-center justify-center text-blue-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{t.education.sectionTitle}</h2>
                  <p className="text-xs text-slate-400">{t.education.sectionSubtitle}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-slate-900 space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-white text-lg">{t.education.item1Title}</h3>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-900/40 text-blue-300">{t.education.item1Date}</span>
                  </div>
                  <p className="text-sm font-medium text-blue-400">{t.education.item1School}</p>
                  <p className="text-xs text-slate-300 pt-1">
                    {t.education.item1Desc}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-900 space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-white text-lg">{t.education.item2Title}</h3>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-sky-900/40 text-sky-300">{t.education.item2Date}</span>
                  </div>
                  <p className="text-sm font-medium text-sky-400">{t.education.item2School}</p>
                  <p className="text-xs text-slate-300 pt-1">
                    {t.education.item2Desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Langues & Engagements Associatifs */}
            <div className="space-y-8" id="langues">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-900/30 flex items-center justify-center text-blue-400">
                  <LanguagesIcon className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{t.languagesSection.sectionTitle}</h2>
                  <p className="text-xs text-slate-400">{t.languagesSection.sectionSubtitle}</p>
                </div>
              </div>

              {/* Langues Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-900 space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-white">{t.languagesSection.langPt}</span>
                    <span className="text-xs font-bold text-blue-300 bg-blue-900/40 px-2 py-0.5 rounded">{t.languagesSection.langPtLevel}</span>
                  </div>
                  <p className="text-xs text-slate-400">{t.languagesSection.langPtNote}</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900 space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-white">{t.languagesSection.langFr}</span>
                    <span className="text-xs font-bold text-sky-300 bg-sky-900/40 px-2 py-0.5 rounded">{t.languagesSection.langFrLevel}</span>
                  </div>
                  <p className="text-xs text-slate-400">{t.languagesSection.langFrNote}</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900 space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-white">{t.languagesSection.langEn}</span>
                    <span className="text-xs font-bold text-blue-300 bg-blue-900/40 px-2 py-0.5 rounded">{t.languagesSection.langEnLevel}</span>
                  </div>
                  <p className="text-xs text-slate-400">{t.languagesSection.langEnNote}</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900 space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-white">{t.languagesSection.langEs}</span>
                    <span className="text-xs font-bold text-slate-300 bg-slate-800 px-2 py-0.5 rounded">{t.languagesSection.langEsLevel}</span>
                  </div>
                  <p className="text-xs text-slate-400">{t.languagesSection.langEsNote}</p>
                </div>
              </div>

              {/* Activités Associatives */}
              <div className="space-y-4 pt-2">
                <h3 className="font-bold text-white text-lg">{t.languagesSection.extraTitle}</h3>
                
                <div className="p-4 rounded-xl bg-slate-900 space-y-1">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-bold text-white">{t.languagesSection.role1Title}</span>
                    <span className="text-xs text-slate-400">{t.languagesSection.role1Date}</span>
                  </div>
                  <p className="text-xs text-slate-300">{t.languagesSection.role1Desc}</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 space-y-1">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-bold text-white">{t.languagesSection.role2Title}</span>
                    <span className="text-xs text-slate-400">{t.languagesSection.role2Date}</span>
                  </div>
                  <p className="text-xs text-slate-300">{t.languagesSection.role2Desc}</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* CTA Section (Message direct uniquement) */}
      <section className="py-24 w-full px-6 sm:px-12 lg:px-16 text-center">
        <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-b from-blue-950/50 via-slate-900 to-slate-950 relative overflow-hidden shadow-2xl space-y-6">
          <div className={`absolute top-0 w-64 h-64 bg-blue-600/15 rounded-full blur-3xl pointer-events-none ${isRTL ? 'left-0' : 'right-0'}`}></div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t.cta.titlePrefix}
            <span className="text-blue-400">{t.cta.titleHighlight}</span>
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {t.cta.description}
          </p>

          <div className="flex justify-center pt-4">
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#1E3A8A] via-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 text-white font-bold text-base transition-all shadow-lg shadow-blue-900/30 flex items-center gap-2.5 active:scale-95"
            >
              <Mail className="w-5 h-5 text-blue-200" />
              <span>{t.cta.messageBtn}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12">
        <div className="w-full px-6 sm:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-400">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#1E3A8A] to-blue-500 flex items-center justify-center font-bold text-white text-sm shrink-0">
              DC
            </div>
            <span className="font-semibold text-white">Dilsa Cá</span>
            <span>• {t.footer.role}</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="mailto:mailondiasbatista@gmail.com" className="hover:text-blue-400 transition-colors">mailondiasbatista@gmail.com</a>
            <a href="tel:+212776895137" className="hover:text-blue-400 transition-colors" dir="ltr">+212 776 895 137</a>
            <button onClick={() => setIsPdfModalOpen(true)} className="hover:text-blue-400 transition-colors">{t.footer.cvBtn}</button>
          </div>

          <div className="text-xs text-slate-500">
            {t.footer.copyright}
          </div>
        </div>
      </footer>

      {/* PDF Modal Viewer */}
      {isPdfModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6" dir={isRTL ? 'rtl' : 'ltr'}>
          <div className="bg-slate-900 w-full max-w-4xl h-[90vh] rounded-3xl flex flex-col overflow-hidden shadow-2xl">
            <div className="p-4 sm:p-6 flex items-center justify-between bg-slate-950">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-blue-400" />
                <div>
                  <h3 className="font-bold text-white">{t.pdfModal.title}</h3>
                  <p className="text-xs text-slate-400">{t.pdfModal.subtitle}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={pdfPath}
                  download="CV_Dilsa_Ca_2027.pdf"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#1E3A8A] to-blue-600 hover:from-blue-800 hover:to-blue-500 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-md shadow-blue-900/30"
                >
                  <Download className="w-4 h-4" />
                  <span>{t.pdfModal.downloadBtn}</span>
                </a>
                <button
                  onClick={() => setIsPdfModalOpen(false)}
                  className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 bg-slate-950 p-4 flex items-center justify-center overflow-hidden">
              <iframe
                src={pdfPath}
                className="w-full h-full rounded-2xl bg-white"
                title="CV Dilsa Cá PDF"
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4" dir={isRTL ? 'rtl' : 'ltr'}>
          <div className="bg-slate-900 w-full max-w-lg rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <button
              onClick={() => setIsContactModalOpen(false)}
              className={`absolute top-6 w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-all ${isRTL ? 'left-6' : 'right-6'}`}
            >
              <X className="w-4 h-4" />
            </button>

            <div>
              <h3 className="text-2xl font-bold text-white">{t.contactModal.title}</h3>
              <p className="text-xs text-slate-400 mt-1">{t.contactModal.subtitle}</p>
            </div>

            {contactSent ? (
              <div className="p-6 rounded-2xl bg-blue-950/50 border border-blue-800/40 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-blue-400 mx-auto" />
                <h4 className="font-bold text-white text-lg">{t.contactModal.successTitle}</h4>
                <p className="text-xs text-slate-300">{t.contactModal.successMessage}</p>
                <button
                  onClick={() => { setContactSent(false); setIsContactModalOpen(false); }}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#1E3A8A] to-blue-600 text-white text-xs font-bold shadow-md shadow-blue-900/30"
                >
                  {t.contactModal.closeBtn}
                </button>
              </div>
            ) : (
              <form 
                action="https://formspree.io/f/xaeeeava" 
                method="POST" 
                onSubmit={handleContactSubmit} 
                className="space-y-4"
              >
                {errorMessage && (
                  <div className="p-3 rounded-xl bg-blue-900/30 border border-blue-700/40 text-blue-200 text-xs font-medium">
                    {errorMessage}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">{t.contactModal.labelName}</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    placeholder={t.contactModal.placeholderName}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">{t.contactModal.labelEmail}</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    placeholder={t.contactModal.placeholderEmail}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">{t.contactModal.labelSubject}</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    placeholder={t.contactModal.placeholderSubject}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">{t.contactModal.labelMessage}</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder={t.contactModal.placeholderMessage}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div className="text-xs text-slate-400">
                    {t.contactModal.directEmail} <a href="mailto:mailondiasbatista@gmail.com" className="text-blue-400 hover:text-blue-300 underline" dir="ltr">mailondiasbatista@gmail.com</a>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#1E3A8A] via-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 text-white font-bold text-sm transition-all shadow-md shadow-blue-900/30 flex items-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      <Send className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                    )}
                    <span>{isSubmitting ? t.contactModal.submittingBtn : t.contactModal.submitBtn}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
