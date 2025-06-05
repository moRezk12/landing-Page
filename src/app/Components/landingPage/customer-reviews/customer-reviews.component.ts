import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { LanguageService } from 'src/app/Core/services/languages/language.service';

@Component({
  selector: 'app-customer-reviews',
  templateUrl: './customer-reviews.component.html',
  styleUrls: ['./customer-reviews.component.css']
})
export class CustomerReviewsComponent {

    currentLang: string = 'en';

      constructor(private translate: TranslateService , private languageService: LanguageService , private cdr: ChangeDetectorRef) {

                this.setTranslatedSections();
        this.translate.onLangChange.subscribe(() => {
          this.setTranslatedSections();
        });

        this.languageService.getLanguage().subscribe(lang => {
      this.currentLang = lang;

      // Defer change detection to the next JavaScript event loop cycle
      setTimeout(() => {
        this.customOptions = { ...this.customOptions, rtl: lang === 'ar' };
        this.cdr.detectChanges(); // Request Angular to check for changes later
      });
    });

      }

          ngOnInit() {
    // استجابة لتغير اللغة إذا كان يتم التحكم فيه من service
    this.languageService.languageChanged.subscribe((lang: string) => {
      this.changeLang(lang);
    });


  }

  changeLang(lang: string): void {
    sessionStorage.setItem('lang', lang); // تحديث اللغة في localStorage
    this.currentLang = lang;
  }

      images : any[] = []
      setTranslatedSections () {

        this.images = [
          {
            image :"assets/Images/landingPage/Customer/Background.png",
            description :this.translate.instant('landing.CUSTOMER_REVIEWS.product.0.description'),
            name : this.translate.instant('landing.CUSTOMER_REVIEWS.product.0.name'),
            role : this.translate.instant('landing.CUSTOMER_REVIEWS.product.0.role')
          },
          {
            image :"assets/Images/landingPage/Customer/Background (1).png",
            description :this.translate.instant('landing.CUSTOMER_REVIEWS.product.1.description'),
            name : this.translate.instant('landing.CUSTOMER_REVIEWS.product.1.name'),
            role : this.translate.instant('landing.CUSTOMER_REVIEWS.product.1.role')
          },
          {
            image :"assets/Images/landingPage/Customer/Background (2).png",
            description :this.translate.instant('landing.CUSTOMER_REVIEWS.product.2.description'),
            name : this.translate.instant('landing.CUSTOMER_REVIEWS.product.2.name'),
            role : this.translate.instant('landing.CUSTOMER_REVIEWS.product.2.role')
          }

        ]
      }

      isRtl(): boolean {
        return document.documentElement.dir === 'rtl';
      }

        customOptions: OwlOptions = {
          loop: true,
          mouseDrag: true,
          touchDrag: true,
          pullDrag: false,
          dots: false,
          autoplay: true,
          autoplayTimeout: 2000,
          navSpeed: 300,
          navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
          responsive: {
            0: {
              items: 1
            },
            400: {
              items: 3
            },
            740: {
              items: 4
            },
            940: {
              items: 5
            }
          },
          nav: true,
          rtl: true
        }

}
