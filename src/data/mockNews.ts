import { NewsArticle, Notice } from '../types';

export const CATEGORIES = [
  'Politics',
  'Entertainment',
  'Sports',
  'Technology',
  'Education',
  'International',
  'Business',
  'Viral'
];

export const MOCK_NEWS: NewsArticle[] = [
  {
    id: '1',
    title: 'नेपालको नयाँ आर्थिक नीति सार्वजनिक, व्यवसायीहरु उत्साहित',
    titleEn: 'Nepal\'s New Economic Policy Unveiled, Entrepreneurs Excited',
    excerpt: 'सरकारले आगामी आर्थिक वर्षको लागि नयाँ नीति सार्वजनिक गरेको छ जसले उत्पादनमूलक क्षेत्रलाई प्राथमिकता दिएको छ।',
    content: `नेपाल सरकारले हालै सार्वजनिक गरेको नयाँ आर्थिक नीतिले मुलुकको अर्थतन्त्रमा नयाँ तरंग ल्याएको छ। अर्थमन्त्रीले प्रस्तुत गरेको यस नीतिमा साना तथा मझौला उद्योग (SME) लाई विशेष सहुलियत दिने घोषणा गरिएको छ।

यस नीतिका केही मुख्य बुँदाहरू:
१. निर्यातमा आधारित उद्योगलाई कर छुट।
२. युवा स्वरोजगारका लागि विशेष ऋण कार्यक्रम।
३. कृषि क्षेत्रको आधुनिकिकरणका लागि अनुदान।

व्यवसायीहरुका अनुसार यस नीतिले लामो समयदेखि थला परेको बजारलाई पुनर्जीवन दिने अपेक्षा गरिएको छ। यद्यपि, कार्यान्वयनको पक्ष कस्तो रहन्छ भन्नेमा धेरैको चासो रहेको छ।`,
    category: 'Business',
    author: 'राम प्रसाद अधिकारी',
    publishDate: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80',
    readTime: '५ मिनेट',
    isBreaking: true,
    isFeatured: true,
    views: 1250,
    tags: ['अर्थतन्त्र', 'नीति', 'व्यापार'],
    comments: [
      { id: 'c1', user: 'हरि', text: 'कति राम्रो नीति!', date: '२०२६-०५-१०' }
    ]
  },
  {
    id: '2',
    title: 'क्यामिन्सद्वारा सगरमाथाको सफल आरोहण, नयाँ विश्व कीर्तिमान',
    titleEn: 'Successful Ascent of Everest by Cummins, New World Record',
    excerpt: 'अन्तर्राष्ट्रिय पर्वतारोही क्यामिन्सले विना अक्सिजन सगरमाथाको सफल आरोहण गरी नयाँ इतिहास रचेका छन्।',
    content: 'विश्वको सर्वोच्च शिखर सगरमाथामा नयाँ कीर्तिमान कायम भएको छ। ३२ वर्षीय पर्वतारोहीले सबैभन्दा छोटो समयमा सगरमाथा चढ्ने प्रयास सफल पारेका छन्। हिउँदको यस मौसममा आरोहण निकै चुनौतीपूर्ण थियो तर दृढ संकल्पका साथ यो सम्भव भयो।',
    category: 'Sports',
    author: 'सुनिता शर्मा',
    publishDate: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80',
    readTime: '४ मिनेट',
    isTrending: true,
    views: 5400,
    tags: ['सगरमाथा', 'पर्वतारोहण', 'कीर्तिमान'],
    comments: []
  },
  {
    id: '3',
    title: 'प्रविधिमा नयाँ फड्को: स्थानीय युवाले बनाए एआई च्याटबोट',
    titleEn: 'Leap in Tech: Local Youth Build AI Chatbot',
    excerpt: 'नेपाली भाषामा स्तरीय संवाद गर्न सक्ने नयाँ एआई च्याटबोटको आविष्कार गरिएको छ।',
    content: 'नेपालका केही प्रतिभावान इन्जिनियरहरूले नेपाली भाषालाई प्राथमिकतामा राखेर एआई प्रणाली विकास गरेका छन्। यो प्रणालीले नेपाली व्याकरण र स्थानीय बोलीचालीलाई राम्रोसँग बुझेर उत्तर दिन सक्छ।',
    category: 'Technology',
    author: 'अनिल बिक',
    publishDate: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80',
    readTime: '३ मिनेट',
    views: 890,
    tags: ['प्रविधि', 'एआई', 'नेपाल'],
    comments: []
  },
  {
    id: '4',
    title: 'चलचित्र ‘मायाको रंग’ को ट्रेलर सार्वजनिक',
    titleEn: 'Trailer of Movie "Maya ko Rang" Released',
    excerpt: 'बहुप्रतिक्षित चलचित्रको ट्रेलरले सामाजिक सञ्जालमा तहल्का पिटेको छ।',
    content: 'यस वर्षको सबैभन्दा ठूलो बजेट भनिएको चलचित्रको ट्रेलर सार्वजनिक भएको २४ घण्टामै १० लाख पटक हेरिएको छ। नायक र नायिकाको अभिनयको निकै तारिफ भइरहेको छ।',
    category: 'Entertainment',
    author: 'प्रियंका केसी',
    publishDate: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80',
    readTime: '२ मिनेट',
    isViral: true,
    views: 12000,
    tags: ['फिल्म', 'मनोरञ्जन', 'ट्रेलर'],
    comments: []
  },
  {
    id: '5',
    title: 'विश्व राजनीतिमा नयाँ समीकरण, सुरक्षा परिषद्को बैठक बस्दै',
    category: 'International',
    author: 'विश्वराज सापकोटा',
    excerpt: 'अन्तर्राष्ट्रिय शक्ति राष्ट्रहरु बीचको सम्बन्धमा आएको उतारचढावले विश्व शान्तिमा चुनौती थपेको छ।',
    content: 'संयुक्त राष्ट्र संघको सुरक्षा परिषद्ले हालै उत्पन्न तनावलाई कम गर्न आकस्मिक बैठक बोलाएको छ। विभिन्न राष्ट्रका प्रतिनिधिहरुले संवादमार्फत समाधान खोज्नुपर्नेमा जोड दिएका छन्।',
    publishDate: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    imageUrl: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80',
    readTime: '६ मिनेट',
    views: 320,
    tags: ['राजनीति', 'विश्व', 'शान्ति'],
    comments: []
  }
];

export const MOCK_NOTICES: Notice[] = [
  { id: 'n1', title: 'कक्षा १२ को नतिजा सार्वजनिक सम्बन्धी सूचना', date: '२०२६-०५-११', link: '#' },
  { id: 'n2', title: 'लोक सेवा आयोगको नयाँ दरखास्त आह्वान', date: '२०२६-०५-०९', link: '#' },
  { id: 'n3', title: 'बिद्यालय बिदा सम्बन्धी सूचना', date: '२०२६-०५-०८', link: '#' }
];
