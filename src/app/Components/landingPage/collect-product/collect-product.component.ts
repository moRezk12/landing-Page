import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { LanguageService } from 'src/app/Core/services/languages/language.service';


@Component({
  selector: 'app-collect-product',
  templateUrl: './collect-product.component.html',
  styleUrls: ['./collect-product.component.css']
})
export class CollectProductComponent implements OnInit {

    currentLang: string = 'en';
  constructor( private languageService: LanguageService , private cdr: ChangeDetectorRef) {
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

  images : any[] = [
    "assets/Images/landingPage/collectProduct/image1.jpg",
    "assets/Images/landingPage/collectProduct/image2.jpg",
    "assets/Images/landingPage/collectProduct/image3.jpg",
    "assets/Images/landingPage/collectProduct/image4.jpg",
    "assets/Images/landingPage/collectProduct/image5.jpg",
    "assets/Images/landingPage/collectProduct/image11.jpg",
    "assets/Images/landingPage/collectProduct/image6.jpg",
    "assets/Images/landingPage/collectProduct/image7.jpg",
    "assets/Images/landingPage/collectProduct/image8.jpg",
    "assets/Images/landingPage/collectProduct/image9.jpg",
    "assets/Images/landingPage/collectProduct/image10.jpg",
  ]

  //   images : any[] = [
  //   "../../../../assets/Images/landingPage/collectProduct/image1-removebg-preview.png",
  //   "../../../../assets/Images/landingPage/collectProduct/image2-removebg-preview.png",
  //   "../../../../assets/Images/landingPage/collectProduct/image3-removebg-preview.png",
  //   "../../../../assets/Images/landingPage/collectProduct/image4-removebg-preview.png",
  //   "../../../../assets/Images/landingPage/collectProduct/image5-removebg-preview.png",
  //   "../../../../assets/Images/landingPage/collectProduct/image6-removebg-preview.png",
  //   "../../../../assets/Images/landingPage/collectProduct/image7-removebg-preview.png",
  //   "../../../../assets/Images/landingPage/collectProduct/image8-removebg-preview.png",
  //   "../../../../assets/Images/landingPage/collectProduct/image9-removebg-preview.png",
  //   "../../../../assets/Images/landingPage/collectProduct/image10-removebg-preview.png",

  // ]

}
