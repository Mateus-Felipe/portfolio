'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import en from '../data/locales/en.json';
import ptBr from '../data/locales/pt-br.json';

type Locale = 'en' | 'pt-br';
type Translations = typeof en;

interface LanguageContextType {
    language: Locale;
    setLanguage: (lang: Locale) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Locale>('en');
    const [translations, setTranslations] = useState<Translations>(en);

    useEffect(() => {
        // Optionally save to localStorage
        const savedLang = localStorage.getItem('language') as Locale;
        if (savedLang && (savedLang === 'en' || savedLang === 'pt-br')) {
            setLanguage(savedLang);
        }
    }, []);

    useEffect(() => {
        if (language === 'pt-br') {
            setTranslations(ptBr);
        } else {
            setTranslations(en);
        }
        localStorage.setItem('language', language);
    }, [language]);

    const t = (key: string) => {
        const keys = key.split('.');
        let value: any = translations;

        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k as keyof typeof value];
            } else {
                return key; // Fallback to key if not found
            }
        }

        return typeof value === 'string' ? value : key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
