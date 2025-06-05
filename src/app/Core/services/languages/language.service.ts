import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LanguageService {

   private currentLanguage = new BehaviorSubject<string>('en'); // Default language is 'en'
  public languageChanged = this.currentLanguage.asObservable();

  constructor(private translate: TranslateService, private http: HttpClient) {
    const savedLang = sessionStorage.getItem('lang') || 'en';
    this.changeLanguage(savedLang); // Load saved language or default
  }

  // Function to change the language
  changeLanguage(lang: string) {
    this.translate.use(lang);
    sessionStorage.setItem('lang', lang);
    this.currentLanguage.next(lang);

    sessionStorage.setItem('lang', lang);

    this.currentLanguage.next(lang);

    const direction = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', direction);
  }

  // Function to get the current language
  getLanguage() {
    return this.currentLanguage.asObservable();
  }

  // Function to get language data English
  getEnData() {
    return this.http.get('/assets/i18n/en.json');
  }

  // Function to get language data Arabic
  getArData() {
    return this.http.get('/assets/i18n/ar.json');
  }

}
