import { Component, HostListener, Renderer2  } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/Core/services/languages/language.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  menuOpen = false;
  activeSection = 'home';

    // Translation
  currentLang: string = 'en';
  flag: boolean = false;
  constructor(
    private languageService: LanguageService,
    private translate: TranslateService,
    private renderer: Renderer2
  ) {
    this.languageService.getLanguage().subscribe((lang) => {
      this.currentLang = lang;
      this.setLangAttribute(lang);
      this.flag = lang === 'ar';
    });
        this.setTranslatedSections();
    this.translate.onLangChange.subscribe(() => {
      this.setTranslatedSections(); // تحدث الترجمة لما اللغة تتغير
    });
  }
  sections: any[] = [];
  setTranslatedSections() {
    this.sections = [
      { id: 'home', label: this.translate.instant('NAV.HOME') },
      { id: 'about', label: this.translate.instant('NAV.ABOUT') },
      { id: 'products', label: this.translate.instant('NAV.PRODUCTS') },
      { id: 'what-us', label: this.translate.instant('NAV.OUR_FEATURES') },
      { id: 'contact', label: this.translate.instant('NAV.CONTACT') }
    ];
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  scrollToSection(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.activeSection = sectionId;
    }
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    for (const section of this.sections) {
      const el = document.getElementById(section.id);
      if (el) {
        const offset = el.offsetTop - 200;
        if (window.scrollY >= offset) {
          this.activeSection = section.id;
        }
      }
    }
  }




  setLangAttribute(lang: string) {
    this.renderer.setAttribute(document.body, 'lang', lang);
  }

  // تغيير اللغة
  changeLanguage(lang: string) {
    // استخدام اللغة في ngx-translate
    this.translate.use(lang);
    // تحديث اللغة في LanguageService
    this.languageService.changeLanguage(lang);

    // تعيين الاتجاه بناءً على اللغة المختارة
    const direction = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', direction);
    document.documentElement.setAttribute('lang', lang);
  }

  // دالة لتغيير اللغة
  toggleLanguage(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const value = selectElement.value;

    if (value && this.currentLang !== value) {
      this.languageService.changeLanguage(value); // استخدم LanguageService لتغيير اللغة
    }
  }

  isRtl(): boolean {
    return document.documentElement.dir === 'rtl';
  }

}
