import HomePage from '@/views/HomePage'

const mockData = {
  data: {
    allBlogs: [
      {
        id: '201399530',
        mainTitle:
          'Cryptocurrency on Your Card: The Future of Payment Solutions',
        slugPage: 'cryptocurrency-on-your-card',
        mainTag: {
          tag: 'Card2Crypto',
          id: '200755922',
        },
        timeToRead: '7 min',
        _createdAt: '2023-09-22T14:20:42+01:00',
        mainImage: {
          url: 'https://www.datocms-assets.com/105362/1695291857-collection-gold-coins-with-word-currencies-them.jpg',
        },
      },
      {
        id: '201399071',
        mainTitle:
          ' The Integration of Card2Crypto: Exploring its Impact on Cryptocurrency Adoption',
        slugPage: 'how-to-integrate-card-to-crypto',
        mainTag: {
          tag: 'Card2Crypto',
          id: '200755922',
        },
        timeToRead: '6 min',
        _createdAt: '2023-09-22T14:19:10+01:00',
        mainImage: {
          url: 'https://www.datocms-assets.com/105362/1694748125-fotor-ai-20230915112155.jpg',
        },
      },
      {
        id: '201398938',
        mainTitle:
          'Card2Crypto Platforms: Choosing the Right Solution for Your Crypto Journey',
        slugPage: 'best-card-to-crypto-platforms',
        mainTag: {
          tag: 'Card2Crypto',
          id: '200755922',
        },
        timeToRead: '6 min',
        _createdAt: '2023-09-22T14:16:21+01:00',
        mainImage: {
          url: 'https://www.datocms-assets.com/105362/1695286139-crypto-payment-company-1.png',
        },
      },
    ],
    ourLandscape: {
      title: 'Our landscape',
      tabName2: 'Coverage',
      tabName1: 'Industries',
      industriesList: [
        {
          list: ['Igaming', 'Betting', 'Adult', 'Crypto', 'NFT', 'Farmacy'],
          listTitle: 'High-risk',
          id: '192605854',
        },
        {
          list: ['Fintech', 'Medicine', 'E-commerce', 'Gaming'],
          listTitle: 'Middle risk',
          id: '192605855',
        },
        {
          list: ['Travel', 'Horeca', 'Education', 'Blogging'],
          listTitle: 'LoW risk',
          id: '192605856',
        },
      ],
      id: '192605857',
      description2:
        "Always on the hustle, we're leveling up and broadening our reach, nonstop.",
      description1:
        "Always on the hustle, we're leveling up and broadening our reach, nonstop.",
      coverageMap: {
        url: 'https://www.datocms-assets.com/105362/1693308613-map.webp',
      },
      coverageFeatures: [
        {
          title: 'Worldwide',
          image: {
            width: 38,
            height: 37,
            url: 'https://www.datocms-assets.com/105362/1693309106-coverage1.svg',
          },
          id: '192605851',
          description: 'crypto coverage',
        },
        {
          title: 'European',
          image: {
            width: 47,
            height: 43,
            url: 'https://www.datocms-assets.com/105362/1693309120-coverage2.svg',
          },
          id: '192605852',
          description: 'license coverage',
        },
        {
          title: 'Focus 2023',
          image: {
            width: 38,
            height: 31,
            url: 'https://www.datocms-assets.com/105362/1693309139-coverage3.svg',
          },
          id: '192605853',
          description: 'Latin America, Africa, Asia',
        },
      ],
    },
    feesYourBusiness: {
      title: 'Fees for your business',
      id: '192605368',
      cartButton: 'Get a special offer',
      cartDescription:
        'Our team will clarify all the necessary information and prepare an offer for you right away.',
      cartTitle: 'Submit your inquiry now for the best offer in 10 minutes',
      description:
        'Please review the examples of market fees charged by companies. We assure you that we will provide the most suitable fees for your business!',
      footerDescription: {
        value: {
          schema: 'dast',
          document: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'span',
                    value:
                      'All data is sourced from publicly available information or provided by customer support of the specified companies in private correspondence.',
                  },
                ],
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'span',
                    value: '',
                  },
                ],
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'span',
                    value:
                      'If you notice any discrepancies between the displayed information and reality, please let us know by info@inqud.com, and we will update the information accordingly.',
                  },
                ],
              },
            ],
          },
        },
      },
      tableHeader: [
        {
          title: 'Company name',
          id: '194280233',
          description: 'Crypto processing',
        },
      ],
      table: [
        {
          description: '2% - 1% + 25¢ fixed fee',
          id: '192605364',
          title: 'Bitpay',
        },
        {
          description: '0,5%',
          id: '192605365',
          title: 'Switchere',
        },
        {
          description: '1%',
          id: '192605366',
          title: 'Coingate',
        },
        {
          description: '1%',
          id: '192605367',
          title: 'Coinpayments',
        },
      ],
    },
    supportedCurrency: {
      id: '192605298',
      title: 'Supported currencies',
      list: [
        {
          id: '192605293',
          supportedCurrenciesName: 'BTC',
          supportedCurrenciesImage: {
            url: 'https://www.datocms-assets.com/105362/1693298981-val1.svg',
          },
        },
        {
          id: '192605294',
          supportedCurrenciesName: 'ETH',
          supportedCurrenciesImage: {
            url: 'https://www.datocms-assets.com/105362/1693298998-val2.svg',
          },
        },
        {
          id: '192605295',
          supportedCurrenciesName: 'EUR',
          supportedCurrenciesImage: {
            url: 'https://www.datocms-assets.com/105362/1693299025-val3.svg',
          },
        },
        {
          id: '192605296',
          supportedCurrenciesName: 'USD',
          supportedCurrenciesImage: {
            url: 'https://www.datocms-assets.com/105362/1693299056-val4.svg',
          },
        },
        {
          id: '192605297',
          supportedCurrenciesName: 'USDT',
          supportedCurrenciesImage: {
            url: 'https://www.datocms-assets.com/105362/1693299065-val5.svg',
          },
        },
      ],
    },
    pickLeadForm: {
      pickDescription: 'Pick a time that works best for you',
      buttonText: 'Book a free consultation',
    },
    homePage: {
      title: 'Bespoke crypto payment solutions',
      subTitle: 'For business',
      screen6Title: 'Stack the Deck in Your Favor',
      screen6Features: [
        {
          title: 'Say goodbye to chargebacks',
          image: {
            url: 'https://www.datocms-assets.com/105362/1693329079-1.svg',
          },
          id: '192598074',
          description: 'Provide solutions to eliminate fraudulent chargebacks.',
        },
        {
          title: 'Transparent & clear pricing',
          image: {
            url: 'https://www.datocms-assets.com/105362/1693330506-2.svg',
          },
          id: '192598075',
          description:
            'We believe in clear-cut pricing with  no surprises. With us, you get precisely what you expect.',
        },
        {
          title: 'Tap into new markets',
          image: {
            url: 'https://www.datocms-assets.com/105362/1693330513-3.svg',
          },
          id: '192598076',
          description:
            'Seize new market opportunities swiftly with our customized payment solutions.',
        },
        {
          title: 'Simplified fund management',
          image: {
            url: 'https://www.datocms-assets.com/105362/1693330520-4.svg',
          },
          id: '192598077',
          description:
            'Enjoy effortless fund allocation, robust security, and flexible withdrawal options.',
        },
        {
          title: 'Trustworthy customer care',
          image: {
            url: 'https://www.datocms-assets.com/105362/1693330525-5.svg',
          },
          id: '192598078',
          description:
            'Whether you have questions, need assistance, or encounter any issues, we are here to help.',
        },
        {
          title: 'Uncover hidden market solutions',
          image: {
            url: 'https://www.datocms-assets.com/105362/1693330531-6.svg',
          },
          id: '192598079',
          description:
            'Discover unique payment methods and solutions for non-standard situations.',
        },
      ],
      screen6Description: '6 Winning Reasons to Team Up!',
      screen5Title: 'Card 2 Crypto',
      screen5SubTitle: 'on-ramp',
      screen5Image: null,
      screen5Features: [
        {
          title: 'Zero chargebacks',
          image: {
            url: 'https://www.datocms-assets.com/105362/1693328720-list-item-icon1-widget2.svg',
          },
          id: '192598070',
          description:
            'Say goodbye to chargebacks with our secure and reliable fiat on-ramp and off-ramp solutions.',
        },
        {
          title: 'Boost sales',
          image: {
            url: 'https://www.datocms-assets.com/105362/1693328747-list-item-icon2-widget2.svg',
          },
          id: '192598071',
          description:
            "Don't miss out on customers in all your markets, regardless of your audience's geography.",
        },
        {
          title: 'Enhance customer satisfaction',
          image: {
            url: 'https://www.datocms-assets.com/105362/1693329005-list-item-icon3-widget2.svg',
          },
          id: '192598072',
          description:
            'Give your customers the ability to pay easily and conveniently using their preferred payment methods.',
        },
        {
          title: 'Trustworthy payment partner',
          image: {
            url: 'https://www.datocms-assets.com/105362/1693329021-list-item-icon4-widget2.svg',
          },
          id: '192598073',
          description:
            "Maximally involved in addressing your business's needs and fostering its growth.",
        },
      ],
      screen5Description:
        'Widget that seamlessly accepts local fiat payments for your products & services: Effortlessly elevate payments - our widget securely transitions between fiat and crypto, enhancing your financial flexibility.',
      screen4Title: 'Smooth API integration',
      screen4SubTitle: 'Tailored for business',
      screen4Image: null,
      screen4Features: [
        {
          title: 'Developer-friendly documentation',
          id: '192598049',
          description:
            'Clear, comprehensive guides aiding swift integration and hassle-free development',
          image: {
            url: 'https://www.datocms-assets.com/105362/1693328784-icon1.svg',
          },
        },
        {
          title: 'Advanced anti-fraud features',
          id: '192598050',
          description:
            'Fraud-proof Transactions: Benefit from our sophisticated security features.',
          image: {
            url: 'https://www.datocms-assets.com/105362/1693328802-icon2.svg',
          },
        },
        {
          title: 'Fully-fledged onboarding',
          id: '192598051',
          description:
            'From initial setup to full implementation, we guide you through every step for a seamless, worry-free start.',
          image: {
            url: 'https://www.datocms-assets.com/105362/1693328820-icon3.svg',
          },
        },
        {
          title: 'Accept crypto & local fiat',
          id: '192598052',
          description:
            "Expand your business's financial accessibility and customer reach.",
          image: {
            url: 'https://www.datocms-assets.com/105362/1693328838-icon4.svg',
          },
        },
      ],
      screen4Description:
        'Advanced on-ramp & off-ramp payment processing, scalability,  customization, and seamless integration. Streamline payment process and spur growth with API integration. Experience boosted efficiency and heightened business growth.',
      screen3Title: 'Crypto widget',
      screen3SubTitle: '// Tailored for developers',
      screen3Description:
        'Get on board with the future of payments — our embeddable crypto widget for your website makes it simple to accept cryptocurrency payments including Bitcoin, Ethereum and other crypto.',
      screen3Image: null,
      leadForm2Title: '10 minutes  of free expert consultation',
      leadForm2List: [
        {
          title: '24/7 personal manager at your service',
          id: '192598067',
          image: {
            url: 'https://www.datocms-assets.com/105362/1693329440-message-pick.svg',
          },
        },
        {
          title: 'Tailored solutions to fit your specific needs',
          id: '192598068',
          image: {
            url: 'https://www.datocms-assets.com/105362/1693329477-specific-needs-pick.svg',
          },
        },
        {
          title: 'Priority in solving your issues',
          id: '192598069',
          image: {
            url: 'https://www.datocms-assets.com/105362/1693329497-priority-pick.svg',
          },
        },
      ],
      leadForm1Title: "Don't lose crypto-paying customers!",
      leadForm1ListTitle: 'If you are looking for:',
      leadForm1List: [
        'additional payment assistance for effective issue resolution',
        'client retention, cost-effectiveness, and time efficiency',
        'niche-specialized provider',
      ],
      lead5Title: 'Submit your email',
      lead5Screen: 'Be the first to use it upon launch',
      lead5FooterDescription: {
        value: {
          schema: 'dast',
          document: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'span',
                    value:
                      'by submitting this form, you confirm that you agree to the storing and processing of your personal data',
                  },
                ],
              },
            ],
          },
        },
      },
      lead5Description: "We'll alert you when Card2crypto launches!",
      lead5ButtonText: 'Submit',
      id: '192117222',
      features: [
        'Payments without refunds',
        '24/7 expert & caring support',
        'Tailored payment options',
        'No hidden fees',
      ],
      feature: [
        {
          title: 'BTC, ETH & other crypto',
          id: '192598045',
          description:
            'Accept crypto seamlessly, crafting an effortless and user-friendly payment journey for your customers.',
          image: {
            url: 'https://www.datocms-assets.com/105362/1693328585-list-item-icon1.svg',
          },
        },
        {
          title: 'Flexible fee structure',
          id: '192598046',
          description:
            'Decide who covers the transaction fee - either your business or your customer.',
          image: {
            url: 'https://www.datocms-assets.com/105362/1693328604-list-item-icon2.svg',
          },
        },
        {
          title: 'Auto-conversion',
          id: '192598047',
          description:
            'Mitigate market volatility risks with our automatic conversion system.',
          image: {
            url: 'https://www.datocms-assets.com/105362/1693328626-list-item-icon3.svg',
          },
        },
        {
          title: 'Widget customization',
          id: '192598048',
          description:
            'Our SDK lets you shape your widget to align with your brand.',
          image: {
            url: 'https://www.datocms-assets.com/105362/1693328654-list-item-icon4.svg',
          },
        },
      ],
      faqMainTitleMobile: 'FAQ',
      faqMainTitle: 'Frequently asked questions',
      faqDescription: 'Didn’t get an answers?',
      faqButtonTextMobile: 'Help centre',
      faqButtonText: 'Go to Help centre',
      faqButton: 'Go to Help centre',
      faqContent: [
        {
          title: 'What is the best way to accept crypto payments for business?',
          id: '200064086',
          description:
            'Inqud offers the optimal solution for accepting crypto payments for your business. With our payment gateway and crypto payment widget, you can effortlessly integrate crypto payment options into your website or application. Our platform prioritizes security, providing robust measures to protect your data and funds. Additionally, we offer 24/7 support to assist you at any time and ensure a seamless payment experience. With Inqud, you can accept crypto payments without any hidden fees, ensuring transparency and cost-effectiveness for your business.',
        },
        {
          title: 'How to transfer money without any fees?',
          id: '200064087',
          description:
            'Inqud offers a unique advantage when it comes to transferring money within our platform. We provide zero fees for internal money transfers, allowing you to enjoy the convenience of moving funds between Inqud accounts without incurring any additional charges. Whether you need to send money to a friend or family member who also has an Inqud account or make a payment to a business partner within our ecosystem, you can do so without worrying about any fees eating into your funds. ',
        },
        {
          title: 'How to accept crypto via INQUD?',
          id: '200211752',
          description:
            'Accepting crypto payments via Inqud is simple. By integrating our crypto payment widget or API into your website or app, you can provide your customers with the option to pay using cryptocurrencies. Inqud supports popular cryptocurrencies like Bitcoin and Ethereum, ensuring a smooth and secure payment experience.',
        },
        {
          title:
            'What is fiat on-ramp and how to integrate it into my business?',
          id: '200211753',
          description:
            ' At Inqud, we offer a reliable and user-friendly crypto on-ramp service, also known as a fiat on-ramp, which is a platform that enables users to purchase cryptocurrencies such as Bitcoin (BTC) using traditional fiat currencies like euros, or American dollars. These on-ramp services provide a convenient and straightforward way for individuals to convert their fiat money into digital assets. Today, there are various solutions available to users for buying crypto, offering different options and accessibility to cater to diverse needs.',
        },
        {
          title: 'What is a cryptocurrency payment widget?',
          id: '200211754',
          description:
            ' What is a cryptocurrency payment widget?  A cryptocurrency payment widget, such as the Inqud Crypto Widget, enables merchants to accept cryptocurrency payments directly on their websites. This convenient JavaScript code handles deposit address generation, private key storage, and transaction monitoring, streamlining the payment process for merchants and providing a seamless experience for customers. With its user-friendly interface and robust security measures, the Inqud Crypto Widget empowers merchants to embrace cryptocurrencies as a payment method and enhance their online business.',
        },
        {
          title: 'How to integrate a crypto payment widget for the website?',
          id: '200211755',
          description:
            "To integrate the INQUD crypto payment widget on your website, follow these steps:  1. Register an account with INQUD. 2. Complete the KYB (Know Your Business) process. 3. Create a project within your account. 4. Undergo onboarding with our team. 5. Access integration instructions, often provided as an embeddable JavaScript code. 6. Insert the code into your website's codebase. 7. Throughout this process, our INQUD support team is available to assist you, ensuring a seamless integration.",
        },
        {
          title: 'Does Inqud offer API integration?',
          id: '200211756',
          description:
            'Yes, Inqud offers API integration for businesses. Our robust API allows you to integrate our payment gateway, crypto-fiat on-ramp, and off-ramp services seamlessly into your existing systems. API integration offers flexibility, scalability, and customization options, empowering you to create a tailored payment experience for your users.',
        },
        {
          title: 'What are the benefits of API integration?',
          id: '200211757',
          description:
            "API integration offers numerous benefits for businesses. It streamlines processes by enabling seamless data exchange and eliminating manual tasks. This automation improves efficiency and reduces errors. Additionally, API integration expands functionality by incorporating features and services from external providers, enhancing the overall capabilities of the business.With scalability and flexibility, API integration empowers businesses to adapt to changing market demands and easily integrate new systems and technologies. Additionally, INQUD's API integration offers the benefit of secure cryptocurrency payment processing without the risk of chargebacks, further enhancing the reliability and peace of mind for businesses.",
        },
        {
          title:
            'How can I add Bitcoin and other popular cryptocurrencies as a payment options on my website?',
          id: '200211758',
          description:
            'To add Bitcoin (BTC), Ethereum (ETH), the widely-used stablecoin USDT, and TRON (TRX) as payment options on your website, Inqud offers two options: leveraging their payment gateway API or integrating their crypto payment widget. With the payment gateway API, you can seamlessly integrate cryptocurrency payments into your existing payment system. Alternatively, you can choose to integrate the Inqud crypto payment widget, which provides an easy-to-use solution for accepting crypto payments directly on your website. Both options ensure a smooth and secure payment experience for your customers, allowing them to pay with their preferred digital assets.',
        },
      ],
      description: {
        value: {
          schema: 'dast',
          document: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'span',
                    value:
                      'Inqud is your trusted partner and provider of tailored crypto & fiat payment solutions.',
                  },
                ],
              },
            ],
          },
        },
      },
      buttonScreen4LearnMore: 'Learn more',
      buttonScreen4GetStarted: 'Get started',
      buttonScreen3LearnMore: 'Learn more',
      buttonScreen3GetStarted: 'Get started',
      buttonScreen2: 'Add your request',
      buttonScreen1GetStarted: 'Get started',
      buttonScreen1ContactSales: 'Contact sales',
      buttonLead3Book: 'Book a free consultation',
      buttonLead2C: 'Apply now',
      buttonLead2B: {
        url: 'https://www.datocms-assets.com/105362/1693301309-calendar.svg',
      },
      buttonLead2A: '  Q4 2023',
      buttonLead1Book: 'Book a free consultation',
      buttonHelp: 'Go to Help centre',
      buttonBlog: 'Our blog',
    },
  },
}

export default async function Home({ params }) {
  return <HomePage data={mockData} params={params} />
}
