import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-our-products',
  templateUrl: './our-products.component.html',
  styleUrls: ['./our-products.component.css']
})
export class OurProductsComponent {

  constructor(private translate: TranslateService) {

            this.setTranslatedSections();
    this.translate.onLangChange.subscribe(() => {
      this.setTranslatedSections();
    });

  }


  images : any[] = []
  setTranslatedSections () {

    this.images = [
      {
        image :"assets/Images/landingPage/ourProduct/imag1-removebg-preview.png",
        title :this.translate.instant('landing.OUR_PRODUCTS.products.2.title'),
        description :this.translate.instant('landing.OUR_PRODUCTS.products.2.description')
      },
      {
        image :"assets/Images/landingPage/ourProduct/Adobe Express - file 1 (1).png",
        title :this.translate.instant('landing.OUR_PRODUCTS.products.3.title'),
        description :this.translate.instant('landing.OUR_PRODUCTS.products.3.description')
      },
      {
        image :"assets/Images/landingPage/ourProduct/WhatsApp_Image_2025-05-31_at_11.22.27_PM-removebg-preview (1).png",
        title :this.translate.instant('landing.OUR_PRODUCTS.products.0.title'),
        description :this.translate.instant('landing.OUR_PRODUCTS.products.0.description')
      },
      {
        image :"assets/Images/landingPage/ourProduct/WhatsApp_Image_2025-05-31_at_11.23.19_PM-removebg-preview (1).png",
        title :this.translate.instant('landing.OUR_PRODUCTS.products.4.title'),
        description :this.translate.instant('landing.OUR_PRODUCTS.products.4.description')
      },
      {
        image :"assets/Images/landingPage/ourProduct/WhatsApp_Image_2025-05-31_at_11.23.19_PM__1_-removebg-preview (1).png",
        title :this.translate.instant('landing.OUR_PRODUCTS.products.5.title'),
        description :this.translate.instant('landing.OUR_PRODUCTS.products.5.description')
      },
      {
        image :"assets/Images/landingPage/ourProduct/WhatsApp_Image_2025-05-31_at_11.23.23_PM-removebg-preview (1).png",
        title :this.translate.instant('landing.OUR_PRODUCTS.products.1.title'),
        description :this.translate.instant('landing.OUR_PRODUCTS.products.1.description')
      },

    ]
  }

  isRtl(): boolean {
    return document.documentElement.dir === 'rtl';
  }

}
