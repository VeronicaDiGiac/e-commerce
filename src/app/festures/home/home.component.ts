import { Component, signal } from '@angular/core';
import { ButtonComponent } from '../../core/button/button.component';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy } from '@angular/core';
import CardComponent from '../card/card.component';
import { CartService } from '../../services/cart.service';
import { CardRewevComponent } from '../card-rewev/card-rewev.component';
import { BlogCardComponent } from '../../core/blog-card/blog-card.component';
import { NewsLetterInputComponent } from '../news-letter-input/news-letter-input.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,

  imports: [
    ButtonComponent,
    CommonModule,
    CardComponent,
    CardRewevComponent,
    BlogCardComponent,
    NewsLetterInputComponent,
    FooterComponent,
    RouterLink,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1
      class="text-4xl sm:text-6xl md:text-8xl  text-center m-5 text-zinc-800 underline decoration-solid transform hover:scale-105 transition duration-300 ease-in-out cursor-default "
    >
      {{ title[0].FirstTitle }}
    </h1>
    <p class="text-lg text-center m-5 p-5 text-neutral-600 font-semibold ">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
      repudiandae debitis doloribus, dicta eius ex dolor amet enim dolorum
      impedit fugiat ea tempore est! Ullam odit soluta totam veniam nobis unde
      corporis tempore excepturi, assumenda autem nisi neque fugiat eius nihil,
      tempora officia natus numquam blanditiis sapiente perspiciatis impedit?
      Blanditiis!
    </p>
    <div
      class="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 "
    >
      @for ( newCollectionImg of newCollectionImgs; track newCollectionImg.id) {
      <img
        [src]="newCollectionImg.src"
        alt="newCollectionImg"
        class="cursor-pointer"
      />
      }
    </div>
    <app-button
      style="display: flex; justify-content: center; margin: 5%;"
    ></app-button>
    <!-- CARD  -->
    <div
      class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4  mt-20 cursor-pointer "
    >
      <div
        class="flex flex-col items-center space-y-2 p-5 min-h-[250px] bg-gray-100 rounded-lg shadow-md "
      >
        <img [src]="icon[0].icon" alt="icon" class="w-16 h-16 cursor-pointer" />
        <p class="font-semibold  text-xl">
          {{ title[2].ThirdTitle }}
        </p>
        <p class="text-center  text-neutral-600 font-semibold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          quas.
        </p>
      </div>
      <div
        class="flex flex-col items-center space-y-2 p-5 min-h-[250px] bg-gray-100 rounded-lg shadow-md "
      >
        <img [src]="icon[3].icon" alt="icon" class="w-16 h-16 cursor-pointer" />
        <p class="font-semibold text-xl">
          {{ title[3].FourtTitle }}
        </p>
        <p class="text-center  text-neutral-600 font-semibold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          quas.
        </p>
      </div>
      <div
        class="flex flex-col items-center space-y-2 p-5 min-h-[250px] bg-gray-100 rounded-lg shadow-md"
      >
        <img [src]="icon[1].icon" alt="icon" class="w-16 h-16 cursor-pointer" />
        <p class="font-semibold text-xl">
          {{ title[4].FifthTitle }}
        </p>
        <p class="text-center  text-neutral-600 font-semibold ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          quas.
        </p>
      </div>
      <div
        class="flex flex-col items-center space-y-2 p-5 min-h-[250px] bg-gray-100 rounded-lg shadow-md"
      >
        <img [src]="icon[2].icon" alt="icon" class="w-16 h-16 cursor-pointer" />
        <p class="font-semibold  text-xl ">
          {{ title[5].SixthTitle }}
        </p>
        <p class="text-center  text-neutral-600 font-semibold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          quas.
        </p>
      </div>
    </div>
    <!-- BEST SELLERS -->
    <h1
      class="text-center text-6xl mt-30 font-semibold m-20 transform hover:scale-105 transition duration-300 ease-in-out cursor-default
    "
    >
      {{ title[6].SevenTitle }}
    </h1>
    <div
      class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4"
    >
      <ng-container
        *ngFor="let bestSellersProduct of besteSellersHomePage; let i = index"
      >
        <app-card
          [products]="bestSellersProduct"
          [img]="bestSellersImage[i]"
        ></app-card>
      </ng-container>
    </div>
    <!-- SHOP FOR MAN E WOMAN -->
    <div
      class="flex flex-col md:flex-row justify-center gap-10 mt-20 space-y-4 md:space-y-0 md:space-x-4 "
    >
      <div
        class="cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out"
      >
        <img
          [src]="shopImages[0].manImg"
          alt="shopformanimg"
          class="shopImages"
          routerLink="woman-section"
        />
        <p
          class="text-center text-3xl p-5 font-bold bg-gradient-to-r from-neutral-900 to-gray-700 text-white rounded-b-lg shadow-lg"
        >
          {{ title[7].EightTitle }}
        </p>
      </div>
      <div
        class="cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out "
      >
        <img
          [src]="shopImages[1].womanImg"
          alt="shopformanimg"
          class="shopImages"
        />
        <p
          class="text-center text-3xl p-5 font-bold bg-gradient-to-r from-neutral-900 to-gray-700 text-white rounded-b-lg shadow-lg"
        >
          {{ title[8].NineTitle }}
        </p>
      </div>
    </div>

    <!-- WINTER COLLECTION -->
    <div class=" bg-gray-100">
      <div
        class="flex flex-col items-center mt-20 cursor-pointer mb-10 space-y-4"
      >
        <div
          class="flex flex-wrap justify-center items-center gap-4 w-full max-w-xs md:max-w-2xl mt-5"
        >
          <img
            [src]="winterCollectionImages[0].firstManImg"
            alt="First Man"
            class="w-full max-w-[150px] transform hover:scale-105 transition duration-300 ease-in-out rounded-lg"
          />
          <img
            [src]="winterCollectionImages[1].secondManImg"
            alt="Second Man"
            class="w-full max-w-[150px] transform hover:scale-105 transition duration-300 ease-in-out rounded-lg"
          />
          <img
            [src]="winterCollectionImages[2].firstWomanImg"
            alt="First Woman"
            class="w-full max-w-[150px] transform hover:scale-105 transition duration-300 ease-in-out rounded-lg"
          />
          <img
            [src]="winterCollectionImages[3].secondWomanImg"
            alt="Second Woman"
            class="w-full max-w-[150px] transform hover:scale-105 transition duration-300 ease-in-out rounded-lg"
          />
        </div>
      </div>

      <div class="flex flex-col items-center gap-5">
        <p
          class="text-2xl md:text-4xl font-semibold cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out text-center px-4 "
        >
          {{ title[9].TenTitle }}
        </p>
      </div>

      <div class="flex justify-center items-center m-6">
        <app-button
          [labelButton]="dynamicLabel"
          class="text-sm py-2 px-4 rounded-lg"
        ></app-button>
      </div>
    </div>
    <!-- REWEV CARD  -->
    <section class="mb-28">
      <h2
        class="text-3xl md:text-4xl font-bold text-center mx-5 md:mx-20 mt-20  text-gray-800"
      >
        {{ title[10].ElevenTitle }}
      </h2>

      <div class=" mt-10 flex flex-col md:flex-row justify-center gap-5">
        @for(rewev of rewevContent; track rewev.id) {
        <app-card-rewev
          class="cursor-pointer w-full max-w-[300px] mx-auto"
          [rewevContent]="rewev"
        ></app-card-rewev>
        }
      </div>
    </section>

    <!-- BLOG SECTION -->
    <h1
      class="text-3xl md:text-4xl font-semibold text-center mx-5 mb-10 cursor-pointer"
    >
      {{ title[11].TwelveTitle }}
    </h1>
    <div class="flex flex-col md:flex-row justify-center gap-5 mx-5">
      @for(article of blogArticles; track article.id) {
      <app-blog-card
        [blogArticles]="article"
        class="w-full max-w-[300px] mx-auto cursor-pointer"
      ></app-blog-card>
      }
    </div>
    <!-- NEWSLETTER SECTION -->
    <section class="mt-32">
      <app-news-letter-input></app-news-letter-input>
    </section>
    <!-- BANNERIMAGES -->
    <div class="flex justify-center mt-20">
      <img src="assets/home-img/bannerimages.png" alt="" />
    </div>
    <div class="flex items-center justify-center m-10">
      <app-button
        buttonClasses=" rounded-lg text-sm "
        [labelButton]="'Follow us on instagram'"
      ></app-button>
    </div>
    <!-- FOOTER -->
    <footer class="mt-32">
      <app-footer></app-footer>
    </footer>
  `,

  styles: `
      .winterCollectionImages {
        width: 256px;
        height: 322px;
      }
      .shopImages{
        width: 418px;
        height:522px;
      }
    `,
})
export default class HomeComponent {
  dynamicLabel: string = ' Shop Collection';

  title = [
    { FirstTitle: 'New Collection' },
    { SecondTitle: 'Best Sellers of 2024' },
    { ThirdTitle: ' Book An Appointment' },
    { FourtTitle: 'Pick up in store' },
    { FifthTitle: 'Special packaging' },
    { SixthTitle: 'free global returns' },
    { SevenTitle: 'BEST SELLERS' },
    { EightTitle: 'Shop For Man' },
    { NineTitle: 'Shop For Woman' },
    { TenTitle: 'New Winter Collection!' },
    { ElevenTitle: 'We love Good Compliments!' },
    { TwelveTitle: 'Read Blog Posts ' },
  ];

  newCollectionImgs = [
    { id: 1, name: 'Cardigan', src: 'assets/home-img/Img1home.png' },
    {
      id: 2,
      name: 'Cool Jacket',
      src: 'assets/home-img/Img2home.png',
    },
    {
      id: 3,
      name: 'Sweater',
      src: 'assets/home-img/Img3home.png',
    },
  ];

  icon = [
    { id: 1, icon: 'assets/icon/calendar.png' },
    { id: 2, icon: 'assets/icon/gift.png' },
    { id: 3, icon: 'assets/icon/return.png' },
    { id: 4, icon: 'assets/icon/shopping-bag.png' },
  ];

  bestSellersImage = [
    'assets/home-img/giaccabrown.png',
    'assets/home-img/pantaloni cargo.png',
    'assets/home-img/giaccaconzip.png',
    'assets/home-img/camiciaintessuto.png',
  ];
  besteSellersHomePage = [
    {
      id: 1,
      name: 'McAvoy Jacket ',
      img: '',
      description: '',
      price: 120.0,
    },
    {
      id: 2,
      name: 'Cargo Pants',
      description: '',
      price: 90.0,
      img: '',
    },
    {
      id: 3,
      name: 'LakeHouse Jacket',
      description: '',
      price: 135.0,
      img: '',
    },
    {
      id: 4,
      name: 'Monterey Shirt',
      description: '',
      price: 68.0,
      img: '',
    },
  ];

  shopImages = [
    { manImg: 'assets/home-img/shopforman.png' },
    { womanImg: 'assets/home-img/shopforwoman.png' },
  ];

  winterCollectionImages = [
    { firstManImg: 'assets/home-img/wintercollectionman.png' },
    { secondManImg: 'assets/home-img/wintercollectionman2.png' },
    { firstWomanImg: 'assets/home-img/wintercollectionwoman.png' },
    { secondWomanImg: 'assets/home-img/wintercollectionwoman2.png' },
  ];

  rewevContent = [
    {
      id: 1,
      name: 'John Smith',
      rating: '★★★★☆',
      comment:
        'Excellent service! I highly recommend it to anyone looking for quality and professionalism.',
    },
    {
      id: 2,
      name: 'Lucy White',
      rating: '★★★★★',
      comment:
        'Fantastic experience, the product arrived on time and the quality is great!',
    },
    {
      id: 3,
      name: 'Jack Green',
      rating: '★★★★☆',
      comment: 'Very helpful customer service and high-quality products!',
    },
    {
      id: 4,
      name: 'Sophia Black',
      rating: '★★★★★',
      comment:
        'An experience I will definitely repeat, wonderful and high-quality products!',
    },
  ];

  blogArticles = [
    {
      id: 1,
      img: 'assets/home-img/blog-img.png',
      title: 'Top 10 fashion trend for autumn',
      description:
        'Dignissim lacus,turpis ut suspendisse vel tellus.Turpis purus,gravida orci,fringilla...',
      date: ' jul 11, 2022',
    },
    {
      id: 2,
      img: 'assets/home-img/blog-img2.png',
      title: 'Top 10 fashion trend for summer',
      description:
        'Turpis purus, gravida orci, fringilla dignissim lacus, turpis ut suspendisse vel tellus...',
      date: ' jul 11, 2022',
    },
    {
      id: 3,
      img: 'assets/home-img/blog-img3.png',
      title: 'Crazy fashion with unique moment',
      description:
        'Turpis purus, gravida orci, fringilla dignissim lacus, turpis ut suspendisse vel tellus...',
      date: ' jul 11, 2022',
    },
  ];

  constructor(public cartService: CartService) {}
}
