import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-what-us',
  templateUrl: './what-us.component.html',
  styleUrls: ['./what-us.component.css']
})
export class WhatUsComponent {

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
          image :"assets/Images/landingPage/WhatUs/Icon (3).png",
          title :this.translate.instant('landing.WHAT_US.product.0.title'),
          description :this.translate.instant('landing.WHAT_US.product.0.description')
        },
        {
          image :"assets/Images/landingPage/WhatUs/Icon (4).png",
          title :this.translate.instant('landing.WHAT_US.product.1.title'),
          description :this.translate.instant('landing.WHAT_US.product.1.description')
        },
        {
          image :"assets/Images/landingPage/WhatUs/Icon (5).png",
          title :this.translate.instant('landing.WHAT_US.product.2.title'),
          description :this.translate.instant('landing.WHAT_US.product.2.description')
        },
        {
          image :"assets/Images/landingPage/WhatUs/Icon (6).png",
          title :this.translate.instant('landing.WHAT_US.product.3.title'),
          description :this.translate.instant('landing.WHAT_US.product.3.description')
        },
        {
          image :"assets/Images/landingPage/WhatUs/Icon (7).png",
          title :this.translate.instant('landing.WHAT_US.product.4.title'),
          description :this.translate.instant('landing.WHAT_US.product.4.description')
        },
        {
          image :"assets/Images/landingPage/WhatUs/Icon (8).png",
          title :this.translate.instant('landing.WHAT_US.product.5.title'),
          description :this.translate.instant('landing.WHAT_US.product.5.description')
        },

      ]
    }

    isRtl(): boolean {
      return document.documentElement.dir === 'rtl';
    }

}
