// All plan data below is a summary reference based on LIC of India's publicly listed
// product categories (licindia.in/insurance-plan, /pension-plan, /unit-linked-plans).
// Descriptions are written independently in our own words for quick comparison —
// always confirm exact terms, premiums and clauses on licindia.in or with an advisor
// before buying. Add a new plan by adding one object below; nothing else needs to change.

export const CATEGORIES = [
  { id: 'term', labelKey: 'cat.term', color: 'maroon' },
  { id: 'endowment', labelKey: 'cat.endowment', color: 'navy' },
  { id: 'wholeLife', labelKey: 'cat.wholeLife', color: 'navy' },
  { id: 'moneyBack', labelKey: 'cat.moneyBack', color: 'marigold' },
  { id: 'pension', labelKey: 'cat.pension', color: 'green' },
  { id: 'ulip', labelKey: 'cat.ulip', color: 'green' },
  { id: 'rider', labelKey: 'cat.rider', color: 'maroon' },
];

// need tags used by the chatbot's matcher — keep this vocabulary small & shared
export const NEEDS = [
  'protection', 'childEducation', 'marriage', 'retirement',
  'savings', 'investment', 'wealthCreation', 'womenSpecific',
  'seniorCitizen', 'loanProtection', 'lowBudget',
];

export const PLANS = [
  // ---------------- TERM ASSURANCE (pure protection) ----------------
  {
    id: 'digi-term', planNo: 876, uin: '512N356V02', category: 'term',
    name: { en: "LIC's Digi Term", hi: 'एलआईसी डिजी टर्म' },
    tagline: { en: 'Pure life cover, bought entirely online', hi: 'पूरी तरह ऑनलाइन ख़रीदा जाने वाला शुद्ध जीवन कवर' },
    description: {
      en: 'An online-only, non-participating term plan that pays a lump sum to the family if the policyholder dies during the term. No maturity payout — it is pure protection at a low premium.',
      hi: 'एक पूर्णतः ऑनलाइन टर्म प्लान जो पॉलिसीधारक की मृत्यु पर परिवार को एकमुश्त राशि देता है। मैच्योरिटी पर कोई भुगतान नहीं — यह कम प्रीमियम पर शुद्ध सुरक्षा है।',
    },
    idealFor: ['protection', 'lowBudget'],
    minSumAssured: '₹50 Lakh (indicative)',
    officialLink: 'https://licindia.in/web/guest/lic-s-digi-term-876-512n356v01',
  },
  {
    id: 'new-tech-term', planNo: 954, uin: '512N351V02', category: 'term',
    name: { en: "LIC's New Tech-Term", hi: 'एलआईसी न्यू टेक-टर्म' },
    tagline: { en: 'High-cover term plan for tech-savvy buyers', hi: 'बड़ा कवर देने वाला टर्म प्लान' },
    description: {
      en: 'A non-linked term plan aimed at higher sum-assured bands, sold online and offline, with optional riders for extra protection against accident or critical illness.',
      hi: 'अधिक सम एश्योर्ड वर्ग के लिए एक टर्म प्लान, ऑनलाइन व ऑफलाइन दोनों तरह से उपलब्ध, दुर्घटना या गंभीर बीमारी के लिए वैकल्पिक राइडर सहित।',
    },
    idealFor: ['protection'],
    minSumAssured: '₹75 Lakh (indicative)',
    officialLink: 'https://licindia.in/web/guest/lic-s-new-tech-term-954-512n351v01',
  },
  {
    id: 'jeevan-amar', planNo: 955, uin: '512N350V02', category: 'term',
    name: { en: "LIC's New Jeevan Amar", hi: 'एलआईसी न्यू जीवन अमर' },
    tagline: { en: 'Flexible term cover with two payout styles', hi: 'दो प्रकार के भुगतान विकल्पों वाला टर्म कवर' },
    description: {
      en: 'A pure protection term plan offering a choice between a level sum assured and an increasing cover option, so the payout can keep pace with a growing family or income.',
      hi: 'एक शुद्ध सुरक्षा टर्म प्लान जिसमें स्थिर सम एश्योर्ड या बढ़ते हुए कवर में से चुनने का विकल्प है, ताकि भुगतान बढ़ती जिम्मेदारियों के अनुसार बढ़ सके।',
    },
    idealFor: ['protection'],
    minSumAssured: '₹25 Lakh (indicative)',
    officialLink: 'https://licindia.in/web/guest/lic-s-new-jeevan-amar-955-uin-512n350v02',
  },
  {
    id: 'saral-jeevan-bima', planNo: 859, uin: '512N341V01', category: 'term',
    name: { en: "LIC's Saral Jeevan Bima", hi: 'एलआईसी सरल जीवन बीमा' },
    tagline: { en: 'A simple, standard term plan across all insurers', hi: 'सभी बीमा कंपनियों में एक जैसा सरल टर्म प्लान' },
    description: {
      en: 'A standardised term plan (same structure at every insurer, as mandated by IRDAI) that keeps the wording and benefits simple, making it easy to compare across companies.',
      hi: 'IRDAI द्वारा निर्धारित एक समान संरचना वाला टर्म प्लान, जिसकी शर्तें सरल हैं और अलग-अलग कंपनियों में इसकी तुलना आसान है।',
    },
    idealFor: ['protection', 'lowBudget'],
    minSumAssured: '₹5 Lakh',
    officialLink: 'https://licindia.in/web/guest/lic-s-saral-jeevan-bima',
  },
  {
    id: 'yuva-term', planNo: 875, uin: '512N355V02', category: 'term',
    name: { en: "LIC's Yuva Term", hi: 'एलआईसी युवा टर्म' },
    tagline: { en: 'Term cover designed for young earners', hi: 'युवा कमाने वालों के लिए टर्म कवर' },
    description: {
      en: 'A term assurance plan positioned for young, first-time policy buyers who want a large cover locked in early at a lower age-linked premium.',
      hi: 'युवा और पहली बार बीमा लेने वालों के लिए एक टर्म प्लान, जो कम उम्र में कम प्रीमियम पर बड़ा कवर दिलाता है।',
    },
    idealFor: ['protection', 'lowBudget'],
    minSumAssured: '₹50 Lakh (indicative)',
    officialLink: 'https://licindia.in/web/guest/lic-s-yuva-term-875-512n355v01',
  },
  {
    id: 'bima-kavach', planNo: 887, uin: '512N360V01', category: 'term',
    name: { en: "LIC's Bima Kavach", hi: 'एलआईसी बीमा कवच' },
    tagline: { en: 'Combination term + savings protection cover', hi: 'टर्म व बचत का संयुक्त सुरक्षा कवर' },
    description: {
      en: 'A savings-linked protection plan that combines a life cover with a return of premium style benefit at maturity, for buyers who want some money back along with protection.',
      hi: 'एक सुरक्षा योजना जो जीवन कवर के साथ मैच्योरिटी पर प्रीमियम वापसी जैसा लाभ जोड़ती है — सुरक्षा के साथ कुछ राशि वापस चाहने वालों के लिए।',
    },
    idealFor: ['protection', 'savings'],
    minSumAssured: 'As per plan',
    officialLink: 'https://licindia.in/web/guest/lic-s-bima-kavach',
  },
  {
    id: 'digi-credit-life', planNo: 878, uin: '512N358V01', category: 'term',
    name: { en: "LIC's Digi Credit Life", hi: 'एलआईसी डिजी क्रेडिट लाइफ' },
    tagline: { en: 'Cover that protects an outstanding loan', hi: 'बकाया लोन को सुरक्षित करने वाला कवर' },
    description: {
      en: 'A decreasing-cover term plan meant to pay off an outstanding home or personal loan if the borrower dies before the loan is cleared, so the family is not left with the EMI burden.',
      hi: 'एक घटते हुए कवर वाला टर्म प्लान, जो उधारकर्ता की मृत्यु पर बकाया लोन चुकाने के लिए है, ताकि परिवार पर EMI का भार न रहे।',
    },
    idealFor: ['loanProtection', 'protection'],
    minSumAssured: 'Linked to loan amount',
    officialLink: 'https://licindia.in/web/guest/lic-s-digi-credit-life-878-512n358v01',
  },
  {
    id: 'yuva-credit-life', planNo: 877, uin: '512N357V01', category: 'term',
    name: { en: "LIC's Yuva Credit Life", hi: 'एलआईसी युवा क्रेडिट लाइफ' },
    tagline: { en: 'Loan-protection cover for young borrowers', hi: 'युवा उधारकर्ताओं के लिए लोन-सुरक्षा कवर' },
    description: {
      en: 'Similar to Digi Credit Life but priced for younger borrowers, this plan settles an outstanding loan balance in the event of the borrower\'s death.',
      hi: 'डिजी क्रेडिट लाइफ जैसा ही, लेकिन युवा उधारकर्ताओं के लिए — उधारकर्ता की मृत्यु पर बकाया लोन राशि का निपटान करता है।',
    },
    idealFor: ['loanProtection', 'protection'],
    minSumAssured: 'Linked to loan amount',
    officialLink: 'https://licindia.in/web/guest/lic-s-yuva-credit-life-877-512n357v01',
  },

  // ---------------- ENDOWMENT (savings + protection) ----------------
  {
    id: 'jeevan-labh', planNo: 736, uin: '512N304V03', category: 'endowment',
    name: { en: "LIC's Jeevan Labh", hi: 'एलआईसी जीवन लाभ' },
    tagline: { en: 'Limited premiums, life-long style savings', hi: 'सीमित प्रीमियम, दीर्घकालीन बचत' },
    description: {
      en: 'A with-profits endowment plan where you stop paying premium earlier than the policy term, while the cover and savings continue to grow with guaranteed and non-guaranteed additions.',
      hi: 'एक पार्टिसिपेटिंग एंडोमेंट प्लान जहाँ प्रीमियम पॉलिसी अवधि से पहले ही समाप्त हो जाता है, जबकि कवर और बचत गारंटीड व नॉन-गारंटीड बोनस के साथ बढ़ती रहती है।',
    },
    idealFor: ['savings', 'wealthCreation', 'childEducation'],
    minSumAssured: '₹2 Lakh',
    officialLink: 'https://licindia.in/web/guest/lic-s-jeevan-labh-plan-736-512n304v03',
  },
  {
    id: 'jeevan-lakshya', planNo: 733, uin: '512N297V03', category: 'endowment',
    name: { en: "LIC's Jeevan Lakshya", hi: 'एलआईसी जीवन लक्ष्य' },
    tagline: { en: 'Income to the family + a lump sum at maturity', hi: 'परिवार को आय + मैच्योरिटी पर एकमुश्त राशि' },
    description: {
      en: 'Combines a yearly income benefit to the family if the policyholder dies during the term, with a lump sum payable at maturity — built around a goal such as a child\'s education.',
      hi: 'पॉलिसीधारक की मृत्यु पर परिवार को वार्षिक आय और मैच्योरिटी पर एकमुश्त राशि — बच्चे की शिक्षा जैसे लक्ष्य के लिए बनाई गई।',
    },
    idealFor: ['childEducation', 'savings', 'protection'],
    minSumAssured: '₹1 Lakh',
    officialLink: 'https://licindia.in/web/guest/lic-s-jeevan-lakshya-733-512n297v03',
  },
  {
    id: 'new-jeevan-anand', planNo: 715, uin: '512N279V03', category: 'endowment',
    name: { en: "LIC's New Jeevan Anand", hi: 'एलआईसी न्यू जीवन आनंद' },
    tagline: { en: 'Endowment savings with cover that continues after maturity', hi: 'मैच्योरिटी के बाद भी जारी रहने वाला कवर' },
    description: {
      en: 'A classic with-profits endowment plan: full sum assured plus bonuses at maturity, and a reduced life cover that continues for the rest of the policyholder\'s life at no extra premium.',
      hi: 'एक क्लासिक पार्टिसिपेटिंग एंडोमेंट प्लान: मैच्योरिटी पर पूरी सम एश्योर्ड व बोनस, साथ ही बिना अतिरिक्त प्रीमियम के जीवनभर चलने वाला घटा हुआ कवर।',
    },
    idealFor: ['savings', 'protection', 'wealthCreation'],
    minSumAssured: '₹1 Lakh',
    officialLink: 'https://licindia.in/web/guest/lic-s-new-jeevan-anand-715%09512n279v03',
  },
  {
    id: 'new-endowment', planNo: 714, uin: '512N277V03', category: 'endowment',
    name: { en: "LIC's New Endowment Plan", hi: 'एलआईसी न्यू एंडोमेंट प्लान' },
    tagline: { en: 'The straightforward savings-with-protection plan', hi: 'सरल बचत-सह-सुरक्षा प्लान' },
    description: {
      en: 'A simple with-profits endowment plan — pay premiums through the term, get the sum assured plus accrued bonuses at maturity, and full cover throughout in case of death.',
      hi: 'एक सरल पार्टिसिपेटिंग एंडोमेंट प्लान — अवधि तक प्रीमियम भरें, मैच्योरिटी पर सम एश्योर्ड व बोनस पाएं, और बीच में मृत्यु पर पूरा कवर।',
    },
    idealFor: ['savings', 'protection'],
    minSumAssured: '₹1 Lakh',
    officialLink: 'https://licindia.in/web/guest/lic-s-new-endowment-plan-714-512n277v03',
  },
  {
    id: 'single-premium-endowment', planNo: 717, uin: '512N283V03', category: 'endowment',
    name: { en: "LIC's Single Premium Endowment Plan", hi: 'एलआईसी सिंगल प्रीमियम एंडोमेंट प्लान' },
    tagline: { en: 'Pay once, stay covered for the full term', hi: 'एक बार भुगतान करें, पूरी अवधि सुरक्षित रहें' },
    description: {
      en: 'An endowment plan funded with a single upfront premium instead of recurring payments, suited to someone with a lump sum to invest for a medium-term savings goal.',
      hi: 'एक एंडोमेंट प्लान जिसमें बार-बार भुगतान के बजाय एक बार में प्रीमियम दिया जाता है — जिनके पास एकमुश्त राशि निवेश के लिए है, उनके लिए उपयुक्त।',
    },
    idealFor: ['savings', 'wealthCreation'],
    minSumAssured: '₹50,000',
    officialLink: 'https://licindia.in/web/guest/lic-s-single-premium-endowment-plan-717-512n283v03',
  },
  {
    id: 'bima-jyoti', planNo: 760, uin: '512N339V03', category: 'endowment',
    name: { en: "LIC's Bima Jyoti", hi: 'एलआईसी बीमा ज्योति' },
    tagline: { en: 'Guaranteed additions, non-linked savings', hi: 'गारंटीड बोनस वाली नॉन-लिंक्ड बचत' },
    description: {
      en: 'A non-linked, non-participating endowment plan that adds guaranteed additions to the sum assured every year, giving a predictable maturity value rather than market-linked returns.',
      hi: 'एक नॉन-लिंक्ड, नॉन-पार्टिसिपेटिंग एंडोमेंट प्लान जो हर साल सम एश्योर्ड में गारंटीड एडिशन जोड़ता है — बाज़ार से जुड़े रिटर्न के बजाय एक तय मैच्योरिटी वैल्यू।',
    },
    idealFor: ['savings', 'wealthCreation'],
    minSumAssured: '₹1 Lakh',
    officialLink: 'https://licindia.in/web/guest/lic-s-bima-jyoti-new',
  },
  {
    id: 'amritbaal', planNo: 774, uin: '512N365V02', category: 'endowment',
    name: { en: "LIC's Amritbaal", hi: 'एलआईसी अमृतबाल' },
    tagline: { en: "A child-focused savings plan", hi: 'बच्चों पर केंद्रित बचत योजना' },
    description: {
      en: 'A savings plan taken on a child\'s life (or for a child, depending on structure) designed to build a fund for milestones like higher education, with waiver-style protection built in.',
      hi: 'बच्चे के लिए बनाई गई एक बचत योजना, जो उच्च शिक्षा जैसे लक्ष्यों के लिए फंड बनाती है और उसमें सुरक्षा से जुड़ी छूट भी शामिल है।',
    },
    idealFor: ['childEducation', 'savings'],
    minSumAssured: 'As per plan',
    officialLink: 'https://licindia.in/web/guest/lic-s-amritbaal-774%09512n365v02',
  },
  {
    id: 'nav-jeevan-shree', planNo: 912, uin: '512N387V02', category: 'endowment',
    name: { en: "LIC's Nav Jeevan Shree", hi: 'एलआईसी नव जीवन श्री' },
    tagline: { en: 'Newer endowment plan for long-term savings', hi: 'लंबी अवधि की बचत के लिए एक नई एंडोमेंट योजना' },
    description: {
      en: 'A recently introduced with-profits endowment plan for policyholders who want steady, long-horizon savings growth alongside life cover.',
      hi: 'हाल में शुरू की गई एक पार्टिसिपेटिंग एंडोमेंट योजना, जो जीवन कवर के साथ लंबी अवधि की स्थिर बचत वृद्धि देती है।',
    },
    idealFor: ['savings', 'wealthCreation'],
    minSumAssured: 'As per plan',
    officialLink: 'https://licindia.in/web/guest/lic-s-nav-jeevan-shree-plan-no.912-1',
  },
  {
    id: 'bima-lakshmi', planNo: 881, uin: '512N389V01', category: 'endowment',
    name: { en: "LIC's Bima Lakshmi", hi: 'एलआईसी बीमा लक्ष्मी' },
    tagline: { en: 'A savings plan structured for women policyholders', hi: 'महिला पॉलिसीधारकों के लिए बनाई गई बचत योजना' },
    description: {
      en: 'An endowment savings plan structured with benefit patterns aimed at women policyholders, combining periodic payouts with life cover.',
      hi: 'एक एंडोमेंट बचत योजना जो महिला पॉलिसीधारकों को ध्यान में रखकर बनाई गई है, जिसमें समय-समय पर भुगतान के साथ जीवन कवर भी शामिल है।',
    },
    idealFor: ['womenSpecific', 'savings'],
    minSumAssured: 'As per plan',
    officialLink: 'https://licindia.in/web/guest/lic-s-bima-lakshmi-881-512n389v01',
  },
  {
    id: 'jeevan-sathi-single', planNo: 888, uin: '512N393V01', category: 'endowment',
    name: { en: "LIC's New Jeevan Sathi (Single Premium)", hi: 'एलआईसी न्यू जीवन साथी (सिंगल प्रीमियम)' },
    tagline: { en: 'Joint-life endowment for couples, one-time premium', hi: 'दंपत्ति के लिए संयुक्त जीवन एंडोमेंट, एकमुश्त प्रीमियम' },
    description: {
      en: 'A joint-life endowment plan covering both spouses under one policy with a single premium, paying out on the first death and again at maturity.',
      hi: 'एक संयुक्त जीवन एंडोमेंट योजना जो एक ही पॉलिसी में पति-पत्नी दोनों को कवर करती है — पहली मृत्यु पर और फिर मैच्योरिटी पर भुगतान।',
    },
    idealFor: ['savings', 'protection'],
    minSumAssured: '₹3 Lakh',
    officialLink: 'https://licindia.in/web/guest/lic-s-new-jeevan-sathi-single-premium-',
  },
  {
    id: 'jeevan-sathi-limited', planNo: 889, uin: '512N394V01', category: 'endowment',
    name: { en: "LIC's New Jeevan Sathi (Limited Premium)", hi: 'एलआईसी न्यू जीवन साथी (लिमिटेड प्रीमियम)' },
    tagline: { en: 'Joint-life endowment for couples, regular premiums', hi: 'दंपत्ति के लिए संयुक्त जीवन एंडोमेंट, नियमित प्रीमियम' },
    description: {
      en: 'Similar to the single-premium version but with regular premiums over a limited period — one spouse is the primary life assured, the other a secondary life assured.',
      hi: 'सिंगल प्रीमियम वर्शन जैसी ही, लेकिन सीमित अवधि में नियमित प्रीमियम के साथ — एक पति/पत्नी प्राइमरी और दूसरा सेकेंडरी लाइफ एश्योर्ड होता है।',
    },
    idealFor: ['savings', 'protection'],
    minSumAssured: '₹3 Lakh',
    officialLink: 'https://licindia.in/web/guest/lic-s-new-jeevan-sathi-limited-premium-',
  },

  // ---------------- WHOLE LIFE ----------------
  {
    id: 'jeevan-umang', planNo: 745, uin: '512N312V03', category: 'wholeLife',
    name: { en: "LIC's Jeevan Umang", hi: 'एलआईसी जीवन उमंग' },
    tagline: { en: 'Yearly income for life, plus a cover that lasts to 100', hi: 'जीवनभर वार्षिक आय, और 100 वर्ष तक कवर' },
    description: {
      en: 'Pay premiums for a limited period, then receive a yearly survival benefit for as long as the policyholder lives, with the full sum assured plus bonuses paid out at age 100 or on earlier death.',
      hi: 'सीमित अवधि तक प्रीमियम भरें, फिर जीवनभर वार्षिक लाभ मिलता रहे, और 100 वर्ष की आयु या पहले मृत्यु पर पूरी सम एश्योर्ड व बोनस का भुगतान।',
    },
    idealFor: ['retirement', 'wealthCreation', 'savings'],
    minSumAssured: '₹2 Lakh',
    officialLink: 'https://licindia.in/web/guest/lic-sjeevanumang-745%09512n312v03',
  },
  {
    id: 'jeevan-utsav', planNo: 771, uin: '512N363V02', category: 'wholeLife',
    name: { en: "LIC's Jeevan Utsav", hi: 'एलआईसी जीवन उत्सव' },
    tagline: { en: 'Whole-life plan with a guaranteed regular income option', hi: 'गारंटीड नियमित आय विकल्प वाला होल लाइफ प्लान' },
    description: {
      en: 'A whole-life plan offering a choice between a lump-sum benefit or a guaranteed regular income starting a few years after premiums stop, alongside lifelong cover.',
      hi: 'एक होल लाइफ प्लान जिसमें प्रीमियम बंद होने के कुछ वर्षों बाद एकमुश्त लाभ या गारंटीड नियमित आय में से चुनने का विकल्प है, साथ में जीवनभर कवर।',
    },
    idealFor: ['retirement', 'savings', 'wealthCreation'],
    minSumAssured: '₹5 Lakh',
    officialLink: 'https://licindia.in/web/guest/lic-s-jeevan-utsav1',
  },
  {
    id: 'jeevan-utsav-single', planNo: 883, uin: '512N392V01', category: 'wholeLife',
    name: { en: "LIC's Jeevan Utsav (Single Premium)", hi: 'एलआईसी जीवन उत्सव (सिंगल प्रीमियम)' },
    tagline: { en: 'The Jeevan Utsav benefits with a one-time premium', hi: 'एकमुश्त प्रीमियम में जीवन उत्सव के लाभ' },
    description: {
      en: 'The single-premium variant of Jeevan Utsav — pay once and get the same choice of lump sum or guaranteed income for life, with cover starting immediately.',
      hi: 'जीवन उत्सव का सिंगल-प्रीमियम रूप — एक बार भुगतान करें और वही एकमुश्त या गारंटीड आय का विकल्प पाएं, कवर तुरंत शुरू।',
    },
    idealFor: ['retirement', 'wealthCreation'],
    minSumAssured: '₹5 Lakh',
    officialLink: 'https://licindia.in/web/guest/lic-s-jeevan-utsav-single-premium',
  },

  // ---------------- MONEY BACK ----------------
  {
    id: 'bima-shree', planNo: 748, uin: '512N316V03', category: 'moneyBack',
    name: { en: "LIC's Bima Shree", hi: 'एलआईसी बीमा श्री' },
    tagline: { en: 'High sum-assured money-back plan', hi: 'बड़ी सम एश्योर्ड वाला मनी-बैक प्लान' },
    description: {
      en: 'A money-back plan aimed at higher sum-assured buyers, paying a series of survival benefits at fixed intervals during the term and a final amount at maturity.',
      hi: 'अधिक सम एश्योर्ड चाहने वालों के लिए एक मनी-बैक प्लान, जो अवधि के दौरान निश्चित समय पर भुगतान और मैच्योरिटी पर अंतिम राशि देता है।',
    },
    idealFor: ['savings', 'wealthCreation'],
    minSumAssured: '₹10 Lakh',
    officialLink: 'https://licindia.in/web/guest/lic-s-bima-shree',
  },
  {
    id: 'new-money-back-20', planNo: 720, uin: '512N280V03', category: 'moneyBack',
    name: { en: "LIC's New Money Back Plan - 20 Years", hi: 'एलआईसी न्यू मनी बैक प्लान - 20 वर्ष' },
    tagline: { en: 'Periodic payouts every few years over 20 years', hi: '20 वर्षों में समय-समय पर भुगतान' },
    description: {
      en: 'Pays a percentage of the sum assured at regular intervals through a 20-year term, with the balance plus bonus at maturity — useful for recurring expenses along the way.',
      hi: '20 वर्ष की अवधि में नियमित अंतराल पर सम एश्योर्ड का एक हिस्सा भुगतान, और बाकी राशि व बोनस मैच्योरिटी पर — बीच-बीच के खर्चों के लिए उपयोगी।',
    },
    idealFor: ['savings', 'childEducation'],
    minSumAssured: '₹1 Lakh',
    officialLink: 'https://licindia.in/web/guest/lic-s-new-money-back-plan-20-years',
  },
  {
    id: 'new-money-back-25', planNo: 721, uin: '512N278V03', category: 'moneyBack',
    name: { en: "LIC's New Money Back Plan - 25 Years", hi: 'एलआईसी न्यू मनी बैक प्लान - 25 वर्ष' },
    tagline: { en: 'The longer-term version, more payout instalments', hi: 'लंबी अवधि, अधिक भुगतान किस्तें' },
    description: {
      en: 'The 25-year version of the money-back plan, spreading payouts over more instalments across a longer term while keeping full life cover throughout.',
      hi: '25 वर्षीय मनी-बैक प्लान, जो अधिक किस्तों में भुगतान फैलाता है और पूरी अवधि में जीवन कवर बनाए रखता है।',
    },
    idealFor: ['savings', 'childEducation'],
    minSumAssured: '₹1 Lakh',
    officialLink: 'https://licindia.in/web/guest/lic-s-new-money-back-plan-25-years',
  },
  {
    id: 'new-childrens-money-back', planNo: 732, uin: '512N296V03', category: 'moneyBack',
    name: { en: "LIC's New Children's Money Back Plan", hi: 'एलआईसी न्यू चिल्ड्रन मनी बैक प्लान' },
    tagline: { en: 'Payouts timed to a child\'s education years', hi: 'बच्चे की शिक्षा के वर्षों के अनुसार भुगतान' },
    description: {
      en: 'Taken on a child\'s life, this plan releases money-back instalments during the child\'s late teens and twenties — the years school and college fees typically fall due — plus a maturity payout.',
      hi: 'बच्चे के जीवन पर ली गई यह योजना किशोरावस्था और कॉलेज के वर्षों में किस्तों में भुगतान देती है — जब फीस की ज़रूरत सबसे ज़्यादा होती है — साथ में मैच्योरिटी भुगतान।',
    },
    idealFor: ['childEducation', 'savings'],
    minSumAssured: '₹1 Lakh',
    officialLink: 'https://licindia.in/web/guest/lic-s-new-children-s-money-back-plan',
  },
  {
    id: 'jeevan-tarun', planNo: 734, uin: '512N299V03', category: 'moneyBack',
    name: { en: "LIC's Jeevan Tarun", hi: 'एलआईसी जीवन तरुण' },
    tagline: { en: 'Flexible child plan with a choice of payout patterns', hi: 'भुगतान पैटर्न चुनने के विकल्प वाली बाल योजना' },
    description: {
      en: 'A children\'s plan with several payout patterns to choose from between ages 20-25, so parents can align the money-back schedule with a child\'s specific milestones.',
      hi: 'बच्चों के लिए एक योजना जिसमें 20-25 वर्ष की आयु के बीच कई भुगतान पैटर्न में से चुना जा सकता है, ताकि माता-पिता बच्चे के लक्ष्यों के अनुसार समय तय कर सकें।',
    },
    idealFor: ['childEducation', 'savings'],
    minSumAssured: '₹75,000',
    officialLink: 'https://licindia.in/web/guest/lic-s-jeevan-tarun',
  },

  // ---------------- PENSION / RETIREMENT ----------------
  {
    id: 'jeevan-akshay-vii', planNo: 857, uin: '512N337V07', category: 'pension',
    name: { en: "LIC's Jeevan Akshay-VII", hi: 'एलआईसी जीवन अक्षय-VII' },
    tagline: { en: 'Immediate annuity — pay once, get a pension right away', hi: 'तत्काल पेंशन — एक बार भुगतान, पेंशन तुरंत शुरू' },
    description: {
      en: 'A single-premium immediate annuity: pay a lump sum and start receiving a pension straight away, with a choice of ten annuity options and rates locked in from day one.',
      hi: 'एक सिंगल-प्रीमियम तत्काल एन्युटी: एकमुश्त भुगतान करें और तुरंत पेंशन पाना शुरू करें, दस एन्युटी विकल्पों में से चुनें, दरें शुरू से ही तय।',
    },
    idealFor: ['retirement', 'seniorCitizen'],
    minSumAssured: 'Purchase price based',
    officialLink: 'https://licindia.in/web/guest/lic-s-jeevan-akshay-vii-plan-no.-857-uin-512n337v07-',
  },
  {
    id: 'new-jeevan-shanti', planNo: 758, uin: '512N338V08', category: 'pension',
    name: { en: "LIC's New Jeevan Shanti", hi: 'एलआईसी न्यू जीवन शांति' },
    tagline: { en: 'Deferred annuity — build now, pension starts later', hi: 'डेफर्ड एन्युटी — अभी निवेश करें, पेंशन बाद में शुरू' },
    description: {
      en: 'A single-premium deferred annuity where the pension starts after a chosen waiting period, with single or joint-life options — good for planning a pension ahead of retirement.',
      hi: 'एक सिंगल-प्रीमियम डेफर्ड एन्युटी जिसमें चुनी गई प्रतीक्षा अवधि के बाद पेंशन शुरू होती है, सिंगल या जॉइंट लाइफ विकल्पों के साथ — रिटायरमेंट से पहले पेंशन की योजना के लिए अच्छा।',
    },
    idealFor: ['retirement'],
    minSumAssured: 'Purchase price based',
    officialLink: 'https://licindia.in/web/guest/lic-s-new-jeevan-shanti-plan-no.-758-uin-512n338v08-',
  },
  {
    id: 'saral-pension', planNo: 862, uin: '512N342V05', category: 'pension',
    name: { en: "LIC's Saral Pension", hi: 'एलआईसी सरल पेंशन' },
    tagline: { en: 'A simple, standardised immediate annuity', hi: 'एक सरल, मानकीकृत तत्काल एन्युटी' },
    description: {
      en: 'A standardised immediate annuity plan (structured the same way across insurers under IRDAI norms) offering single-life or joint-life pension for life from a single premium.',
      hi: 'IRDAI के नियमों के अनुसार सभी बीमा कंपनियों में एक समान संरचना वाली तत्काल एन्युटी योजना — सिंगल-प्रीमियम से सिंगल या जॉइंट-लाइफ पेंशन।',
    },
    idealFor: ['retirement', 'seniorCitizen'],
    minSumAssured: 'Purchase price based',
    officialLink: 'https://licindia.in/web/guest/lic-s-saral-pension',
  },
  {
    id: 'smart-pension', planNo: 879, uin: '512N386V01', category: 'pension',
    name: { en: "LIC's Smart Pension", hi: 'एलआईसी स्मार्ट पेंशन' },
    tagline: { en: 'Newer annuity plan with flexible options', hi: 'लचीले विकल्पों वाली नई एन्युटी योजना' },
    description: {
      en: 'A more recent annuity plan offering flexible payout structuring for retirement income, designed for buyers who want options beyond a plain fixed pension.',
      hi: 'एक हाल की एन्युटी योजना जो रिटायरमेंट आय के लिए लचीले भुगतान विकल्प देती है — सामान्य फिक्स्ड पेंशन से अधिक विकल्प चाहने वालों के लिए।',
    },
    idealFor: ['retirement'],
    minSumAssured: 'Purchase price based',
    officialLink: 'https://licindia.in/web/guest/lic-s-smart-pension',
  },
  {
    id: 'new-pension-plus', planNo: 867, uin: '512L347V01', category: 'pension',
    name: { en: "LIC's New Pension Plus", hi: 'एलआईसी न्यू पेंशन प्लस' },
    tagline: { en: 'Unit-linked pension — build a retirement corpus in the market', hi: 'यूनिट-लिंक्ड पेंशन — बाज़ार में रिटायरमेंट फंड बनाएं' },
    description: {
      en: 'A unit-linked pension plan where premiums build a market-linked retirement fund during the accumulation phase, later converted into a pension. Returns are not guaranteed and depend on fund performance.',
      hi: 'एक यूनिट-लिंक्ड पेंशन योजना जिसमें प्रीमियम संचय अवधि में बाज़ार से जुड़ा फंड बनाते हैं, बाद में जो पेंशन में बदल जाता है। रिटर्न गारंटीड नहीं और फंड के प्रदर्शन पर निर्भर है।',
    },
    idealFor: ['retirement', 'investment'],
    minSumAssured: 'As per premium',
    officialLink: 'https://licindia.in/web/guest/lic-s-new-pension-plus-867-512l347v01',
  },

  // ---------------- ULIP / INVESTMENT ----------------
  {
    id: 'nivesh-plus', planNo: 749, uin: '512L317V02', category: 'ulip',
    name: { en: "LIC's Nivesh Plus", hi: 'एलआईसी निवेश प्लस' },
    tagline: { en: 'Single-premium ULIP for market-linked growth', hi: 'बाज़ार से जुड़े ग्रोथ के लिए सिंगल-प्रीमियम यूलिप' },
    description: {
      en: 'A single-premium unit-linked plan that invests in a choice of funds while providing a life cover, aimed at buyers comfortable with market-linked, non-guaranteed returns.',
      hi: 'एक सिंगल-प्रीमियम यूनिट-लिंक्ड योजना जो जीवन कवर के साथ चुने गए फंड में निवेश करती है — बाज़ार से जुड़े, गैर-गारंटीड रिटर्न में सहज लोगों के लिए।',
    },
    idealFor: ['investment', 'wealthCreation'],
    minSumAssured: 'As per premium',
    officialLink: 'https://licindia.in/web/guest/lic-s-nivesh-plus',
  },
  {
    id: 'siip', planNo: 752, uin: '512L334V02', category: 'ulip',
    name: { en: "LIC's SIIP", hi: 'एलआईसी SIIP' },
    tagline: { en: 'Regular-premium ULIP, like a market-linked SIP', hi: 'नियमित प्रीमियम यूलिप, SIP जैसा बाज़ार से जुड़ा' },
    description: {
      en: 'A regular-premium unit-linked plan (Systematic Investment Insurance Plan) that works like a disciplined market SIP bundled with life cover and a loyalty addition over time.',
      hi: 'एक नियमित प्रीमियम यूनिट-लिंक्ड योजना (सिस्टेमेटिक इंवेस्टमेंट इंश्योरेंस प्लान) जो जीवन कवर व समय के साथ लॉयल्टी एडिशन के साथ अनुशासित SIP जैसी काम करती है।',
    },
    idealFor: ['investment', 'wealthCreation'],
    minSumAssured: 'As per premium',
    officialLink: 'https://licindia.in/web/guest/lic-s-siip',
  },
  {
    id: 'index-plus', planNo: 873, uin: '512L354V01', category: 'ulip',
    name: { en: "LIC's Index Plus", hi: 'एलआईसी इंडेक्स प्लस' },
    tagline: { en: 'ULIP with an index-tracking fund option', hi: 'इंडेक्स-ट्रैकिंग फंड विकल्प वाला यूलिप' },
    description: {
      en: 'A unit-linked plan offering fund options that track a market index (such as Nifty 50), for buyers who want index-style equity exposure alongside a life cover.',
      hi: 'एक यूनिट-लिंक्ड योजना जो मार्केट इंडेक्स (जैसे निफ्टी 50) को ट्रैक करने वाले फंड विकल्प देती है — जीवन कवर के साथ इंडेक्स-स्टाइल इक्विटी एक्सपोज़र चाहने वालों के लिए।',
    },
    idealFor: ['investment', 'wealthCreation'],
    minSumAssured: 'As per premium',
    officialLink: 'https://licindia.in/web/guest/lic-s-index-plus-873-512l354v01',
  },
  {
    id: 'protection-plus', planNo: 886, uin: '512L361V01', category: 'ulip',
    name: { en: "LIC's Protection Plus", hi: 'एलआईसी प्रोटेक्शन प्लस' },
    tagline: { en: 'A ULIP tilted more towards protection', hi: 'सुरक्षा की ओर अधिक झुका हुआ यूलिप' },
    description: {
      en: 'A unit-linked plan structured to weight life cover more heavily relative to the investment component, for buyers who want market exposure without giving up a meaningful cover.',
      hi: 'एक यूनिट-लिंक्ड योजना जो निवेश की तुलना में जीवन कवर पर अधिक ज़ोर देती है — बाज़ार एक्सपोज़र के साथ ठीक-ठाक कवर चाहने वालों के लिए।',
    },
    idealFor: ['investment', 'protection'],
    minSumAssured: 'As per premium',
    officialLink: 'https://licindia.in/web/guest/lic-s-protection-plus',
  },
];

export const RIDERS = [
  { id: 'accident-benefit', uin: '512B203V03', name: { en: 'Accident Benefit Rider', hi: 'एक्सीडेंट बेनिफिट राइडर' }, note: { en: 'Adds a payout on accidental death.', hi: 'दुर्घटना से मृत्यु पर अतिरिक्त भुगतान।' } },
  { id: 'premium-waiver', uin: '512B204V04', name: { en: 'Premium Waiver Benefit Rider', hi: 'प्रीमियम वेवर बेनिफिट राइडर' }, note: { en: 'Waives future premiums on disability.', hi: 'दिव्यांगता पर भविष्य के प्रीमियम माफ़।' } },
  { id: 'accidental-death-disability', uin: '512B209V02', name: { en: 'Accidental Death & Disability Benefit Rider', hi: 'एक्सीडेंटल डेथ एंड डिसेबिलिटी राइडर' }, note: { en: 'Extra cover for accidental death or disability.', hi: 'दुर्घटना से मृत्यु या दिव्यांगता पर अतिरिक्त कवर।' } },
  { id: 'new-term-assurance-rider', uin: '512B210V02', name: { en: 'New Term Assurance Rider', hi: 'न्यू टर्म एश्योरेंस राइडर' }, note: { en: 'Adds extra term cover to a base plan.', hi: 'मुख्य योजना में अतिरिक्त टर्म कवर जोड़ता है।' } },
  { id: 'critical-illness', uin: '512B227V01', name: { en: 'Critical Illness Health Rider', hi: 'क्रिटिकल इलनेस हेल्थ राइडर' }, note: { en: 'Lump sum on diagnosis of specified illnesses.', hi: 'निर्दिष्ट गंभीर बीमारियों के निदान पर एकमुश्त राशि।' } },
  { id: 'female-critical-illness', uin: '512B226V01', name: { en: 'Female Critical Illness Benefit Rider', hi: 'फीमेल क्रिटिकल इलनेस बेनिफिट राइडर' }, note: { en: 'Critical-illness cover tailored for women.', hi: 'महिलाओं के लिए विशेष क्रिटिकल-इलनेस कवर।' } },
];

export function getPlanById(id) {
  return PLANS.find((p) => p.id === id);
}

export function getPlansByCategory(categoryId) {
  return PLANS.filter((p) => p.category === categoryId);
}
