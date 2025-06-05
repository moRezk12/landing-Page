import { Component , HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce';

  constructor(private translate: TranslateService ) {

    this.translate.setDefaultLang('en');
    // Use a language
    this.translate.use('en');
  }

  private refreshInterval: any;

  ngOnInit() {

    const currentLang = sessionStorage.getItem('lang') || 'en';
    document.documentElement.setAttribute('lang', currentLang);
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }

  showScrollButton = false;

  // وظيفة التمرير لأعلى الصفحة
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

    // مراقبة التمرير على النافذة
    @HostListener('window:scroll', [])
    onWindowScroll() {
      this.showScrollButton = window.pageYOffset > 250;
    }

}
