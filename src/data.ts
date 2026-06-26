import { CoreValue, TimelineEvent, FAQItem } from "./types";

export const CORE_VALUES: CoreValue[] = [
  {
    id: "self-help",
    titleKo: "자주 (自主)",
    titleEn: "Self-help (자주)",
    descKo: "스스로 삶을 개척하고 책임을 다하는 개인의 의지가 우리 공동체의 건강한 시작입니다.",
    descEn: "The foundation of growth starts with individual initiative and responsibility within our community.",
    iconName: "BrainCircuit",
  },
  {
    id: "cooperation",
    titleKo: "협동 (協同)",
    titleEn: "Cooperation (협동)",
    descKo: "기쁨은 나누고 슬픔은 짊어지는 십시일반의 연대로 누구도 소외되지 않는 안전망을 만듭니다.",
    descEn: "Shared resources and collective wisdom create a safety net stronger than any single institution.",
    iconName: "Users",
  },
  {
    id: "independence",
    titleKo: "자립 (自立)",
    titleEn: "Independence (자립)",
    descKo: "서로를 지탱하는 든든한 지원을 통해 경제적, 정서적 안정을 이루고 품격 있는 삶을 완성합니다.",
    descEn: "Financial freedom achieved through mutual support, ensuring dignity at every stage of life.",
    iconName: "Landmark",
  },
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: "first-birthday",
    titleKo: "새로운 생명의 시작 (출산/돌)",
    titleEn: "First Birthday",
    descKo: "새로운 가족을 맞이하는 축복, 각 300만 원 지원",
    descEn: "Celebrating new life with community support.",
    iconName: "Baby",
  },
  {
    id: "scholarship",
    titleKo: "꿈을 향한 성장 (장학금)",
    titleEn: "Scholarship",
    descKo: "초등 100만 ~ 고등 300만(분기), 대학 1,000만(연), 유학 2,000만(연) 지원",
    descEn: "Investing in the next generation's dreams.",
    iconName: "GraduationCap",
  },
  {
    id: "marriage",
    titleKo: "아름다운 동행 (결혼)",
    titleEn: "Marriage",
    descKo: "신혼여행 지원 500만 원 + 공동체의 마음을 담은 품앗이 축의금",
    descEn: "Stronger foundations for your union.",
    iconName: "Heart",
  },
  {
    id: "seventeenth",
    titleKo: "존경의 시간 (고희연)",
    titleEn: "70th Birthday",
    descKo: "인생의 황혼을 기리는 감사의 마음, 300만 원 지원",
    descEn: "Dignity and respect for our elders.",
    iconName: "Sparkles",
  },
  {
    id: "funeral",
    titleKo: "고귀한 마무리 (상조)",
    titleEn: "Funeral",
    descKo: "마지막 가시는 길의 품격, 장례 300만 원 + 품앗이 나눔",
    descEn: "A peaceful transition supported by all.",
    iconName: "ShieldAlert",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    questionKo: "행복나눔공동체는 신뢰할 수 있나요?",
    questionEn: "Is Pumassi Mutual Aid trustworthy?",
    answerKo: "네, 행복나눔공동체는 2024년 창립 이후 24,000명 이상의 회원과 함께하며 투명한 적립 및 정산 현황을 실시간으로 공개하고 있습니다. 전통 상부상조의 현대적인 법적 규율을 준수합니다.",
    answerEn: "Yes, since our establishment in 2024, we serve over 24,000 members with 100% transparent funding metrics. We strictly adhere to compliant modern cooperative frameworks.",
  },
  {
    questionKo: "중도 해지 시 납입한 상생 기여금은 어떻게 되나요?",
    questionEn: "What happens if I withdraw early?",
    answerKo: "중도 해지 시에도 개인의 기여도에 따라 공정한 환급 규정을 적용받으실 수 있습니다. 특히 수혜를 한 번도 받지 않으셨다면 전액이 가족 힐링 패키지로 전환되어 소중한 추억으로 돌려드립니다.",
    answerEn: "Even with early withdrawal, fair refund standards apply. Crucially, if you have claimed zero benefits, 100% of your contributions convert to a luxury family travel package.",
  },
  {
    questionKo: "상생 지원금은 어떠한 과정으로 지급되나요?",
    questionEn: "How are mutual aid funds disbursed?",
    answerKo: "사건 발생 즉시 모바일 앱 또는 간편 콜센터를 통해 청구할 수 있으며, 24시간 이내에 심사 및 증빙 확인을 거쳐 신속하게 지정 계좌로 상생 지원금이 즉시 송금됩니다.",
    answerEn: "Upon a life event, you can request support instantly via our app or support line. Approvals are processed within 24 hours for direct wire transfers.",
  },
  {
    questionKo: "회원 수에 따라 지원금 보너스가 정말 늘어나나요?",
    questionEn: "Does the community bonus really scale with members?",
    answerKo: "그렇습니다. 기본 지원금 300만 원에 더하여 가입되어 있는 총 회원 1명당 1,000원씩 공동체 보너스가 추가 적립됩니다. 회원 수가 늘어날수록 우리 모두의 보장 혜택이 상생하여 함께 늘어나는 구조입니다.",
    answerEn: "Absolutely! On top of the 3,000,000 Base Benefit, a Community Bonus of 1,000 KRW per active member is added. As our community expands, everyone's collective security scales proportionally.",
  },
  {
    questionKo: "가입 자격이나 연령 제한이 있나요?",
    questionEn: "Are there any eligibility or age restrictions?",
    answerKo: "만 19세 이상 대한민국 국민이라면 누구나 자유롭게 가입할 수 있습니다. 별도의 까다로운 신체 검사나 까다로운 직업 제한이 없으므로, 안심하고 가입하여 공동체의 따뜻한 혜택을 누리실 수 있습니다.",
    answerEn: "Any citizen aged 19 or older is eligible to join. There are no complicated physical examinations or strict occupational restrictions, so you can join with peace of mind.",
  },
  {
    questionKo: "상생 기여금은 매달 정기적으로 납부해야 하나요?",
    questionEn: "Do I have to pay mutual aid contributions regularly?",
    answerKo: "기여금은 매달 정기 납부 또는 자율 참여형 방식으로 자유롭게 선택할 수 있습니다. 개인의 소득 상황에 맞추어 유연하게 기여 방식을 조절할 수 있는 스마트 기여 설정을 지원합니다.",
    answerEn: "You can choose between regular monthly contributions or a flexible self-participating model. We offer smart settings that adapt to your personal financial situation.",
  },
  {
    questionKo: "가족 여러 명이 함께 가입하면 추가 혜택이 있나요?",
    questionEn: "Are there extra benefits if multiple family members join together?",
    answerKo: "동일 가구 내에서 2인 이상 함께 가입 시 '가족 상생 플러스' 우대 혜택이 적용되어 월 기여금의 일부가 감면되거나, 주요 생애주기 이벤트 발생 시 가족 특별 지원금이 추가로 보장됩니다.",
    answerEn: "When two or more family members in the same household join, 'Family Win-Win Plus' benefits are applied, offering discounted contributions or family special bonuses during life events.",
  },
  {
    questionKo: "행복나눔공동체는 정부 기관에서 운영하나요?",
    questionEn: "Is this cooperative run by a government agency?",
    answerKo: "본 공동체는 자율적 상부상조 정신에 입각하여 회원의 자발적 참여로 운영되는 순수 민간 협동 자조 조직입니다. 다만 관련 법률과 금융 가이드라인을 철저히 준수하여 정기적인 감사 및 공시를 진행합니다.",
    answerEn: "This community is a purely private cooperative organization run by members' voluntary participation. However, we strictly comply with local regulatory frameworks and publish transparent audit reports.",
  },
  {
    questionKo: "상생 기여금의 적립 및 사용 내역은 어디서 확인하나요?",
    questionEn: "Where can I check the accumulation and usage of contributions?",
    answerKo: "모든 적립금과 지출 내역은 투명한 디지털 에스크로 원장을 통해 실시간으로 공시됩니다. 가입 후 모바일 앱 또는 공식 웹사이트의 '상생 리포트' 메뉴에서 언제 어디서나 투명하게 열람하실 수 있습니다.",
    answerEn: "All contributions and disbursement history are transparently tracked in real-time. Members can easily review this via the 'Transparency Report' menu on our app or web anytime.",
  },
  {
    questionKo: "3박 4일 가족 여행 패키지는 어떻게 지급되나요?",
    questionEn: "How is the '3 Nights 4 Days Family Travel Package' provided?",
    answerKo: "가입 후 1년 동안 상생 지원금 수혜 이력이 없는 우수 활동 회원님께 매년 연말 '힐링 패키지' 모바일 쿠폰 형태로 자동 발송됩니다. 제휴 5성급 리조트 숙박과 조식이 포함되어 있으며, 직계 가족에게 양도 가능합니다.",
    answerEn: "Issued as a digital voucher at the end of each cycle for active members with zero benefit claims. It includes 5-star resort accommodations and breakfasts, which is fully transferable to immediate family.",
  },
  {
    questionKo: "기여금 납부 도중 급전이 필요할 때 긴급 지원 제도가 있나요?",
    questionEn: "Is there an emergency fund program for urgent needs?",
    answerKo: "네, 긴급 생활 지원 금융 프로그램인 '상생 소액 대여 제도'를 운영하고 있습니다. 성실 기여 회원에 한해 납부한 총 기여금의 최대 80% 한도 내에서 이자 없이 긴급 생활 자금 지원을 받으실 수 있습니다.",
    answerEn: "Yes! We run an interest-free community loan program. Active members in good standing can draw up to 80% of their cumulative contributions as an interest-free advance during unexpected hardships.",
  },
  {
    questionKo: "공동체 내에서 다른 회원들과 교류할 기회가 있나요?",
    questionEn: "Are there opportunities to network with other members?",
    answerKo: "매분기 지역별 연대 네트워킹 소모임과 '온라인 상생 상부상조 포럼'을 개최합니다. 회원들이 자신만의 재능을 기부하거나 로컬 직거래 장터를 열 수 있는 따뜻하고 다채로운 소통 광장을 제공합니다.",
    answerEn: "We host quarterly regional gatherings and 'Online Co-op Forums' for exchanging mutual knowledge. We also provide a vibrant community board to share talents or establish local markets.",
  },
];

export const UI_STRINGS = {
  KO: {
    navTitle: "행복나눔공동체",
    navHome: "홈",
    navPhilosophy: "철학",
    navEngine: "엔진 원리",
    navLifecycle: "로드맵",
    navContact: "고객지원",
    
    heroTag: "EST. 2024",
    heroTitlePart1: "전통의 지혜로 일구는",
    heroTitlePart2: "현대적 번영, ",
    heroTitleHighlight: "행복나눔공동체",
    heroDesc: "시대를 초월한 상부상조의 정신으로 우리 가족의 내일과 이웃의 오늘을 굳건히 연결합니다.",
    heroBtn: "공동체와 함께하기",
    heroSub: "이미 24,000명 이상의 회원이 함께하고 있습니다",
    
    valuesTitle: "세 가지 든든한 뿌리",
    
    engineTitle: "행복나눔 엔진 : 상생의 공식",
    engineSub: "기본 지원금 300만 원 + (회원수 × 1,000원)",
    engineSliderLabel: "현재 함께하는 회원 수 조절하기",
    engineUnit: "명",
    engineFundLabel: "예상 상생 지원금",
    engineCurrency: "원",
    engineBaseLabel: "기본 혜택",
    engineBaseValue: "3,000,000 원",
    engineBonusLabel: "공동체 보너스",
    engineBonusPrefix: "+ ",
    engineBonusSuffix: " 원",
    engineProgressSub: "최종 지원 규모는 최대 1,500만 원까지 확대되어 공동체의 성장을 함께 나눕니다.",
    
    journeyTitle: "요람에서 무덤까지, 생애주기 맞춤 복지",
    journeySub: "인생의 모든 순간을 공동체가 함께합니다.",
    
    noLossTag: "단 한 방울의 정성도 헛되지 않도록",
    noLossTitle: "수혜 혜택이 없으신가요?\n추억으로 돌려드립니다.",
    noLossDesc: "1년간 혜택을 수혜 받지 않으셨나요? 소중한 기여분은 '3박 4일 가족 여행 패키지'로 100% 전환되어 선물로 돌아옵니다.",
    noLossImgAlt: "석양 무렵 럭셔리 휴양지 데크의 정경. 상생과 힐링을 전달하는 따뜻하고 고급스러운 분위기.",
    
    ctaTitle: "상생의 길, 지금 시작하세요",
    ctaSub: "정보를 입력해주시면 전문 상담원이 전통과 현대가 어우러진 복지 안내를 도와드립니다.",
    ctaLabelName: "성함",
    ctaPlaceholderName: "홍길동",
    ctaLabelPhone: "연락처",
    ctaPlaceholderPhone: "010-0000-0000",
    ctaBtn: "시작하기",
    ctaSecureTitle: "100% 안전한 상생 기반",
    ctaSecureDesc: "전통적 상부상조 정신을 계승하여 투명하게 운영됩니다.",
    
    faqTitle: "자주 묻는 질문",
    faqSub: "상생 공동체 활동에 대해 궁금한 점을 신속히 확인해 드립니다.",
    
    footerDesc: "전통적 연대로 만드는 새로운 복지의 기준. 공동체와 함께 내일의 안녕을 설계합니다.",
    footerMenu1Title: "메뉴",
    footerMenu2Title: "고객지원",
    footerCopy: "© 2024 행복나눔공동체. 전통적 연대로 만드는 새로운 복지의 기준.",
    
    successAlertTitle: "상담 신청 완료!",
    successAlertDesc: "상생의 길에 동참해 주셔서 감사합니다. 기재해 주신 연락처로 24시간 이내에 전문 상담원이 친절히 안내 연락을 드리겠습니다.",
    successAlertBtn: "확인",
  },
  EN: {
    navTitle: "PUMASSI",
    navHome: "Home",
    navPhilosophy: "Philosophy",
    navEngine: "The Engine",
    navLifecycle: "Lifecycle",
    navContact: "Safety",
    
    heroTag: "EST. 2024",
    heroTitlePart1: "Modern",
    heroTitlePart2: "Prosperity ",
    heroTitleHighlight: "Through Tradition",
    heroDesc: "Reimagining the ancestral Korean spirit of Pumassi for the digital age. Secure your future through community-driven mutual aid.",
    heroBtn: "Join Now",
    heroSub: "Already 24,000+ members helping each other",
    
    valuesTitle: "Three Solid Pillars",
    
    engineTitle: "The Engine",
    engineSub: "Watch how your community contribution scales prosperity.",
    engineSliderLabel: "Adjust Active Member Count",
    engineUnit: "members",
    engineFundLabel: "Projected Mutual Aid Fund",
    engineCurrency: "KRW",
    engineBaseLabel: "Base Benefit",
    engineBaseValue: "3,000,000 KRW",
    engineBonusLabel: "Community Bonus",
    engineBonusPrefix: "+ ",
    engineBonusSuffix: " KRW",
    engineProgressSub: "The maximum mutual aid capacity scales to 15,000,000 KRW to share community growth collectively.",
    
    journeyTitle: "Life's Journey",
    journeySub: "Standing together from the first breath to the final farewell.",
    
    noLossTag: "THE NO-LOSS GUARANTEE",
    noLossTitle: "Unused Benefits?\nConvert to Memories.",
    noLossDesc: "If no aid benefits are claimed within your cycle, 100% of your credits convert to a premium 3 Nights 4 Days Family Travel Package.",
    noLossImgAlt: "A serene luxury resort at sunset with wooden deck and calm tropical water, high-end travel photography.",
    
    ctaTitle: "Ready to Join?",
    ctaSub: "Enter your details and our counselor will reach out shortly to guide you through the tradition.",
    ctaLabelName: "Full Name",
    ctaPlaceholderName: "Lee Min-ho",
    ctaLabelPhone: "Phone Number",
    ctaPlaceholderPhone: "010-0000-0000",
    ctaBtn: "Get Started",
    ctaSecureTitle: "100% Secure Foundation",
    ctaSecureDesc: "Regulated and insured by traditional mutual aid standards.",
    
    faqTitle: "Frequently Asked Questions",
    faqSub: "Quickly find clear answers to common questions about our platform.",
    
    footerDesc: "Reimagining ancestral wisdom for the digital era. Building resilience through community.",
    footerMenu1Title: "Philosophy",
    footerMenu2Title: "Connect",
    footerCopy: "© 2024 PUMASSI MUTUAL AID. REIMAGINING TRADITION FOR MODERN PROSPERITY.",
    
    successAlertTitle: "Registration Submitted!",
    successAlertDesc: "Thank you for joining our community! A professional advisor will contact you within 24 hours at the provided phone number.",
    successAlertBtn: "Confirm",
  }
};
