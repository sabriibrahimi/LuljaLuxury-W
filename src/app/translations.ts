export type Language = 'en' | 'sq';

export interface Translations {
  hero: {
    tagline: string;
    enterButton: string;
  };
  welcome: {
    title: string;
    description1: string;
    description2: string;
  };
  menu: {
    title: string;
    subtitle: string;
    menu1: {
      title: string;
      description: string;
      price: string;
    };
    menu2: {
      title: string;
      option1: { name: string; price: string };
      option2: { name: string; price: string };
    };
    menu3: {
      title: string;
      description: string;
      courses: string[];
      price: string;
    };
    menu4: {
      title: string;
      description: string;
      price: string;
    };
  };
  gallery: {
    title: string;
    subtitle: string;
  };
  contact: {
    title: string;
    subtitle: string;
    location: string;
    locationTitle: string;
    phone: string;
    phoneTitle: string;
    email: string;
    emailTitle: string;
    privateEvents: string;
    privateEventsDescription: string;
  };
  footer: {
    tagline: string;
    copyright: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    hero: {
      tagline: 'Where Love Becomes Timeless',
      enterButton: 'ENTER',
    },
    welcome: {
      title: 'A Sanctuary for Your Most Precious Moments',
      description1: 'At Lulja Luxury, we believe that the union of two souls deserves more than just a venue—it deserves an experience that transcends the ordinary.',
      description2: 'Every detail is thoughtfully curated to reflect the elegance and emotion of your celebration, creating memories that will be cherished for generations.',
    },
    menu: {
      title: 'Our Menus',
      subtitle: 'Curated culinary experiences designed to make your celebration unforgettable',
      menu1: {
        title: 'Menu 1',
        description: 'An intimate dining experience celebrating love through carefully selected seasonal ingredients',
        price: '€20 per person',
      },
      menu2: {
        title: 'Menu 2',
        option1: { name: 'Menu 2.1', price: '€24 per person' },
        option2: { name: 'Menu 2.2', price: '€26 per person' },
      },
      menu3: {
        title: 'Menu 3',
        description: 'Four exquisite courses designed to elevate your special moment',
        courses: [
          "Amuse-bouche: Chef's seasonal welcome",
          'Entrée: Pan-seared scallops with saffron foam',
          'Main: Herb-crusted lamb with truffle jus',
          'Dessert: White chocolate sphere with champagne sorbet',
        ],
        price: '€35 per person',
      },
      menu4: {
        title: 'Menu Élégance',
        description: 'Our signature tasting menu, crafted exclusively for the most discerning celebrations',
        price: '€35 per person',
      },
    },
    gallery: {
      title: 'Moments of Elegance',
      subtitle: 'A glimpse into the refined atmosphere that awaits you',
    },
    contact: {
      title: 'Visit Us',
      subtitle: 'We invite you to experience Lulja Luxury in person',
      locationTitle: 'Location',
      location: 'Municipality of Lipkovo',
      phoneTitle: 'Phone',
      phone: '+389 72 735 665',
      emailTitle: 'Email',
      email: 'contact@luljaluxury.al',
      privateEvents: 'Private Events',
      privateEventsDescription: 'By appointment only. Our team is available Monday through Sunday to discuss your celebration and arrange a private tour of our venue.',
    },
    footer: {
      tagline: 'Where Love Becomes Timeless',
      copyright: 'Lulja Luxury. All rights reserved.',
    },
  },
  sq: {
    hero: {
      tagline: 'Ku Dashuria Bëhet e Përjetëshme',
      enterButton: 'HYNI',
    },
    welcome: {
      title: 'Një Shtëpi për Momentet Tuaja Më të Çmuara',
      description1: 'Në Lulja Luxury, ne besojmë se bashkimi i dy shpirtërave meriton më shumë se vetëm një vend—ai meriton një përvojë që tejkalon të zakonshmen.',
      description2: 'Çdo detaj është kuruar me kujdes për të reflektuar elegancën dhe emocionin e festimit tuaj, duke krijuar kujtime që do të kushtëzohen për breza.',
    },
    menu: {
      title: 'Menyjet Tona',
      subtitle: 'Eksperienca kulinare të kuruara të dizajnuara për ta bërë festimin tuaj të paharrueshëm',
      menu1: {
        title: 'Menyja 1',
        description: 'Një përvojë e intimë e drekës që feston dashurinë përmes përbërësve sezonalë të përzgjedhur me kujdes',
        price: '€20 për person',
      },
      menu2: {
        title: 'Menyja 2',
        option1: { name: 'Menyja 2.1', price: '€24 për person' },
        option2: { name: 'Menyja 2.2', price: '€26 për person' },
      },
      menu3: {
        title: 'Menyja 3',
        description: 'Katër pjata ekzotike të dizajnuara për të ngritur momentin tuaj të veçantë',
        courses: [
          "Amuse-bouche: Mirëseardhja sezonale e Shefit",
          'Hyrje: Skëdet e skuqura në tigan me shkumë safrani',
          'Kryesor: Qengj i mbuluar me barishte me lëng trufa',
          'Ëmbëlsirë: Sferë çokollatë e bardhë me sorbet shampanje',
        ],
        price: '€35 për person',
      },
      menu4: {
        title: 'Menyja Élégance',
        description: 'Menyja jonë e shquar e shijimit, e krijuar ekskluzivisht për festimet më të zgjedhura',
        price: '€35 për person',
      },
    },
    gallery: {
      title: 'Momentet e Elegancës',
      subtitle: 'Një vështrim i atmosferës së rafinuar që ju pret',
    },
    contact: {
      title: 'Na Vizitoni',
      subtitle: 'Ju ftojmë të përjetoni Lulja Luxury personalisht',
      locationTitle: 'Lokacioni',
      location: 'Komuna e Likovës',
      phoneTitle: 'Telefoni',
      phone: '+389 72 735 665',
      emailTitle: 'Email',
      email: 'contact@luljaluxury.al',
      privateEvents: 'Evente Private',
      privateEventsDescription: 'Vetëm me takim. Ekipa jonë është në dispozicion nga e Hëna deri të Dielën për të diskutuar festimin tuaj dhe për të organizuar një tur privat të vendit tonë.',
    },
    footer: {
      tagline: 'Ku Dashuria Bëhet e Përjetëshme',
      copyright: 'Lulja Luxury. Të gjitha të drejtat e rezervuara.',
    },
  },
};
