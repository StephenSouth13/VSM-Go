import { useState, useCallback } from 'react';
import { Language, getTranslation, defaultLanguage } from '@/constants/Languages';

export function useLanguage() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(defaultLanguage);
  
  const t = getTranslation(currentLanguage);
  
  const changeLanguage = useCallback((newLanguage: Language) => {
    setCurrentLanguage(newLanguage);
  }, []);
  
  const toggleLanguage = useCallback(() => {
    setCurrentLanguage(prev => prev === 'vi' ? 'en' : 'vi');
  }, []);
  
  return {
    language: currentLanguage,
    t,
    changeLanguage,
    toggleLanguage,
  };
}
