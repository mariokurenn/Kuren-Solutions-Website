import { NextResponse } from 'next/server'
import {
  avatar,
  brand,
  innovation,
  onlinePresence,
  creativeMind,
  WebResultTag,
  startupPlan,
  faq,
  achievements,
  startupPlanProList,
} from '@/app/types/menu'

const avatarList: avatar[] = [
  {
    image: '/images/home/avatar_1.jpg',
    title: 'Tibor Ćubrilo',
  },
  {
    image: '/images/home/avatar_2.jpg',
    title: 'Domnik Metlicic',
  },
  {
    image: '/images/home/avatar_3.jpg',
    title: 'Lara Sweet',
  },
  {
    image: '/images/home/avatar_4.jpg',
    title: 'Gabriela Dragicevic',
  },
]

const brandList: brand[] = [
  {
    image: '/images/home/brand/logo1.webp',
    darkImg: '/images/home/brand/logo1.webp',
    title: 'Dominik Metlicic',
  },
  {
    image: '/images/home/brand/brand2.png',
    darkImg: '/images/home/brand/brand2.png',
    title: 'Algebra',
  },
  {
    image: '/images/home/brand/brand3.png',
    darkImg: '/images/home/brand/brand3.png',
    title: 'Lara Sweet',
  },
  {
    image: '/images/home/brand/brand4.png',
    darkImg: '/images/home/brand/brand4.png',
    title: 'Zagreb Montaža',
  },
  {
    image: '/images/home/brand/brand5.svg',
    darkImg: '/images/home/brand/brand5.svg',
    title: 'Korak Ispred',
  },
   {
    image: '/images/home/brand/brand5.png',
    darkImg: '/images/home/brand/brand5.png',
    title: 'About Dream',
  },
     {
    image: '/images/home/brand/brand6.png',
    darkImg: '/images/home/brand/brand6.png',
    title: 'Vikom',
  },
]

const innovationList: innovation[] = [
   {
    image: '/images/home/innovation/webdevp.svg',
    title: 'Izrada web stranica',
    bg_color: 'bg-pink/20',
    txt_color: 'text-pink',
  },
    {
    image: '/images/home/innovation/ai.svg',
    title: 'AI automatizacija',
    bg_color: 'bg-purple/20',
    txt_color: 'text-purple',
  },
      {
    image: '/images/home/innovation/seo.svg',
    title: 'Google/Meta oglasi',
    bg_color: 'bg-green/20',
    txt_color: 'text-green',
  },
   {
    image: '/images/home/innovation/uiux.svg',
    title: 'UI/UX Dizajn',
    bg_color: 'bg-orange/20',
    txt_color: 'text-orange',
  },


  {
    image: '/images/home/innovation/digitalmarketing.svg',
    title: 'CRO',
    bg_color: 'bg-blue/20',
    txt_color: 'text-blue',
  },
 

 
]

const onlinePresenceList: onlinePresence[] = [
   {
  image: '/images/home/onlinePresence/online_img_2.jpg',
  title: 'Dominik Metlicic',
  tag: ['Izrada landing stranice', 'UI / UX dizajn', 'Copywriting'],
  link: 'https://dominikmetlicic.com',
  vrijeme: '2 tjedna',
  tools: ['Figma', 'WordPress', 'Hotjar', 'Google Fonts'],
  services: [
    'UX istraživanje',
    'UI dizajn',
    'Izrada landing stranice',
    'Copywriting',
    'Optimizacija za konverzije'
  ],
  results: [
    'Prve prodaje u roku od 2 dana, dok je prosječno vrijeme zadržavanja 3+ minuta',
    '0% bounce rate na hero sekciji'
  ],
  content: `

Dominik nam je došao s jasnom idejom — treba mu web koji će predstaviti njegovu stručnost, graditi povjerenje i motivirati ljude da mu se jave.
Posebnu pažnju posvetili smo copyju — komunikacija je prilagođena publici, ton je autentičan, a poruke strateški postavljene kako bi potaknule akciju.
  `
},
 {
  image: '/images/home/onlinePresence/online_img_4.jpg',
  title: 'Zagreb Montaža',
  tag: ['Redizajn weba', 'UI / UX dizajn', 'SEO optimizacija'],
  link: 'https://zagreb-montaza.hr/',
  vrijeme: '3 tjedna',
  tools: ['Figma', 'WordPress', 'Google Analytics', 'Yoast SEO'],
  services: [
    'Analiza postojećeg weba',
    'Redizajn korisničkog sučelja',
    'Optimizacija korisničkog iskustva',
    'SEO optimizacija',
    'Prijenos sadržaja'
  ],
  results: [
  'Povećan broj upita za 60%, smanjen bounce rate za 40% i povećano prosječno vrijeme zadržavanja na stranici za 125%',
  ],
  content: `
Zagreb Montaža je tražila moderan, profesionalan web koji bolje predstavlja njihove usluge i povećava online vidljivost.
Krenuli smo od temeljite analize postojećeg stanja, zatim kroz redizajn pojednostavili korisničko iskustvo i poboljšali strukturu sadržaja.
  `
},
 {
  image: '/images/home/onlinePresence/online_img_1.jpg',
  title: 'Korak Ispred',
  tag: ['Izrada landing stranice', 'UI / UX dizajn', 'CRO'],
  link: 'https://www.korakispred.io/',
  vrijeme: '2.5 tjedna',
  tools: ['Figma', 'Webflow', 'Google Optimize'],
  services: [
    'UX istraživanje',
    'UI dizajn',
    'Landing stranica za lead generation',
    'A/B testiranje',
    'Konverzijska optimizacija (CRO)'
  ],
  results: [
    'Stopa konverzije povećana za 87%, dok je prosječno vrijeme zadržavanja 10+ minuta',
  ],
  content: `
Korak Ispred je landing page koji jasno komunicira vrijednost edukacije i vodi posjetitelja do konverzije bez distrakcija.
Fokus je bio na psihologiji odluke — jasan layout, konkretne benefite i pažljivo elementi.
Rezultati su brzo pokazali učinkovitost — korisnici ostaju dulje i češće poduzimaju akciju.
  `
},


{
  image: '/images/home/onlinePresence/online_img_3.jpg',
  title: 'Virtualni asistent',
  tag: ['Izrada weba', 'UI / UX dizajn', 'Copywriting', 'SEO optimizacija'],
  link: 'https://virtualni-asistent.com.hr/',
  vrijeme: '3 tjedna',
  tools: ['Figma', 'WordPress', 'Yoast SEO', 'Google Fonts'],
  services: [
    'Struktura i plan sadržaja',
    'UI dizajn',
    'Copywriting orijentiran na benefite',
    'On-site SEO optimizacija',
    'Izrada kompletne web stranice'
  ],
  results: [
    'Pozicije na Googleu za ključne usluge među top 3 u roku 4 tjedna',
    'značajan porast kontakt upita (8x više u odnosu na stari web)',
    'dugoročno održiv web dizajn, lako nadogradiv'
  ],
  content: `
Klijent je tražio web koji izgleda profesionalno, ali i gradi povjerenje kod malih poduzetnika kojima nudi VA usluge.
Naglasak smo stavili na jasan jezik, konkretne benefite i SEO strukturu koja pomaže rangiranju.
Kao rezultat, web ne samo da izgleda moderno već i konstantno donosi nove upite.
  `
}


]

const creativeMindList: creativeMind[] = [
  {
    image: '/images/home/creative/creative_img_1.png',
    name: 'Logan Dang',
    position: 'WordPress Developer',
    twitterLink: 'https://x.com/',
    linkedinLink: 'https://in.linkedin.com/',
  },
  {
    image: '/images/home/creative/creative_img_2.png',
    name: 'Ana Belić',
    position: 'Social Media Specialist',
    twitterLink: 'https://x.com/',
    linkedinLink: 'https://in.linkedin.com/',
  },
  {
    image: '/images/home/creative/creative_img_3.png',
    name: 'Brian Hanley',
    position: 'Product Designer',
    twitterLink: 'https://x.com/',
    linkedinLink: 'https://in.linkedin.com/',
  },
  {
    image: '/images/home/creative/creative_img_4.png',
    name: 'Darko Stanković',
    position: 'UI Designer',
    twitterLink: 'https://x.com/',
    linkedinLink: 'https://in.linkedin.com/',
  },
]

const WebResultTagList: WebResultTag[] = [
  {
    image: '/images/home/result/creativity.svg',
    name: 'Kreativnost.',
    bg_color: 'bg-purple/20',
    txt_color: 'text-purple',
  },
  {
    image: '/images/home/result/innovation.svg',
    name: 'Inovaciju.',
    bg_color: 'bg-blue/20',
    txt_color: 'text-blue',
  },
  {
    image: '/images/home/result/strategy.svg',
    name: 'Strategiju.',
    bg_color: 'bg-orange/20',
    txt_color: 'text-orange',
  },
]

const startupPlanList: startupPlan[] = [
  {
    plan_bg_color: 'bg-pink',
    text_color: 'text-white',
    descp_color: 'white/90',
    border_color: 'border-white/10',
    plan_name: 'Start paket',
    plan_descp: 'Za poslovanja koja žele rješenje koje gradi povjerenje i potiče konverzije.',
    plan_price: '1500€+',
    icon_img: '/images/home/startupPlan/black_tick.svg',
    plan_feature: [
      'Custom web stranicu',
      'Copywriting',
      'Osnovna SEO optimizacija',
      'Mjesečna analiza',
      '1x poziv mjesečno',
      '1x mjesec održavanja',
      'Konzultacije kroz izradu',
    ],
  },
  {
    plan_bg_color: 'bg-purple_blue',
    text_color: 'text-white',
    descp_color: 'white/90',
    border_color: 'border-white/10',
    plan_name: 'Pro',
    plan_descp: 'Za brendove koji žele vrhunsko online iskustvo, izgrađeno strateški od temelja.',
    plan_price: '3800€+',
    icon_img: '/images/home/startupPlan/black_tick.svg',
    plan_feature: [
  'UX/UI dizajn temeljen na istraživanju',
  'Napredna SEO optimizacija',
  'Profesionalni copywriting',
  'Tjedna analiza',
  '3x poziva mjesečno',
  'A/B testiranje elemenata',
  '2 mjeseca održavanja ',

],

  },
  {
  plan_bg_color: 'bg-dark_black',
  text_color: 'text-white',
  descp_color: 'white/90',
  border_color: 'border-white/10',
  plan_name: 'Premium',
  plan_descp: 'Za poslovanja koja žele vrhunsko, skalabilno rješenje s podrškom i naprednim funkcijama.',
  plan_price: '6000€+',
  icon_img: '/images/home/startupPlan/black_tick.svg',
  plan_feature: [
    'Custom web stranica prilagođena korisnicima',
    'Dizajn usklađen s ciljanom publikom',
    'Napredna SEO optimizacija',
    'Tjedna analiza i izvještavanje',
    'Neograničeni pozivi i konzultacije',
    '3 mjeseca održavanja',
    'A/B testiranje elemenata',
    'Profesionalni copywriting',
    'Integracija naprednih funkcionalnosti',
      'CRO optimizacija',
  'AI integracija',
  ],
}

]
const startupPlanPro: startupPlanProList[] = [
 
]
const faqList: faq[] = [
{
  faq_que: 'Možete li integrirati web stranicu s postojećim CRM sustavom?',
  faq_ans: 'Da, nudimo integracije s najpopularnijim CRM i drugim poslovnim alatima.',
},
 {
  faq_que: 'Što uključuje profesionalni copywriting u paketima?',
  faq_ans: 'Pisanje SEO-friendly tekstova, kreiranje sadržaja za stranice i kampanje prilagođene ciljanoj publici.',
},
 {
  faq_que: 'Kako se obavlja A/B testiranje elemenata na web stranici?',
  faq_ans: 'Postavljanjem varijacije elemenata i praćenjem korisničkog ponašanja, te optimizacija rezultata.',
},
 {
  faq_que: 'Je li moguće proširiti paket nakon početne kupnje?',
  faq_ans: 'Da, paket se može nadograditi bilo kada prema potrebama klijenta.',
},
 {
  faq_que: 'Koliko dugo traje podrška nakon završetka projekta?',
  faq_ans: 'Podrška traje onoliko koliko je definirano ugovorom ili održavanjem, obično minimalno 2 mjeseca.',
},
 {
  faq_que: 'Može li se web stranica povezati s društvenim mrežama?',
  faq_ans: 'Da, integriramo društvene mreže za dijeljenje sadržaja i praćenje angažmana.',
},
{
  faq_que: 'Da li nudite obuku za upravljanje web stranicom?',
  faq_ans: 'Da, klijentima pružamo osnovnu obuku za upravljanje sadržajem i korištenje CMS-a.',
},
{
  faq_que: 'Koje su mogućnosti skalabilnosti web stranice?',
  faq_ans: 'Web stranica je dizajnirana da se lako nadograđuje i prilagođava rastu poslovanja.',
},
]

const achievementsList: achievements[] = [
  {
    icon: '/images/home/achievement/framer_award.svg',
    dark_icon: '/images/home/achievement/dark_framer_award.svg',
    sub_title: 'Framer Awards',
    title:
      'Celebrated for cutting-edge interaction design and seamless user experiences.',
    year: '2024',
    url: 'https://www.framer.com/@wrap-pixel/',
  },
  {
    icon: '/images/home/achievement/dribble_award.svg',
    dark_icon: '/images/home/achievement/dribble_award.svg',
    sub_title: 'Dribbble Awards',
    title: 'Recognized for creative excellence and innovative design solutions',
    year: '2023',
    url: 'https://www.framer.com/@wrap-pixel/',
  },
  {
    icon: '/images/home/achievement/awward_award.svg',
    dark_icon: '/images/home/achievement/dark_awward_award.svg',
    sub_title: 'awwwards Awards',
    title:
      'Honored with the Best Website Design for creativity, usability, and innovation.',
    year: '2022',
    url: 'https://www.framer.com/@wrap-pixel/',
  },
]


export const GET = async () => {
  return NextResponse.json({
    avatarList,
    brandList,
    innovationList,
    onlinePresenceList,
    creativeMindList,
    WebResultTagList,
    startupPlanList,
    faqList,
    achievementsList,
  });
};
