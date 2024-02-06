interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const priceFaqDataMap: Record<string, FAQItem[]> = {
  zh: [
    {
      id: "item-1",
      question: "免费计划的费用是多少？",
      answer:
        "我们的免费计划完全免费，没有月费或年费。这是一个开始使用和探索我们基本功能的好方法。",
    },
    {
      id: "item-2",
      question: "专业月度计划的费用是多少？",
      answer:
        "专业月度计划的价格是每月30美元。它提供了访问我们核心功能的权限，并且是按月计费的。",
    },
    {
      id: "item-3",
      question: "商务月度计划的价格是多少？",
      answer:
        "商务月度计划的价格是每月60美元。它提供高级功能，并且也是按月计费，增加了灵活性。",
    },
    {
      id: "item-4",
      question: "你们提供年度订阅计划吗？",
      answer:
        "是的，我们提供年度订阅计划，以便更多的节省。专业年度计划的费用是每年288美元，商务年度计划是每年600美元。",
    },
    {
      id: "item-5",
      question: "付费计划有试用期吗？",
      answer:
        "我们为专业月度和专业年度计划提供14天的免费试用期。这是一个在承诺付费订阅之前体验所有功能的好方法。",
    },
  ],
  en: [
    {
      id: "item-1",
      question: "What is the cost of the free plan?",
      answer:
        "Our free plan is completely free, with no monthly or annual charges. It's a great way to get started and explore our basic features.",
    },
    {
      id: "item-2",
      question: "How much does the Pro Monthly plan cost?",
      answer:
        "The Pro Monthly plan is priced at $30 per month. It provides access to our core features and is billed on a monthly basis.",
    },
    {
      id: "item-3",
      question: "What is the price of the Business Monthly plan?",
      answer:
        "The Business Monthly plan is available for $60 per month. It offers advanced features and is billed on a monthly basis for added flexibility.",
    },
    {
      id: "item-4",
      question: "Do you offer any annual subscription plans?",
      answer:
        "Yes, we offer annual subscription plans for even more savings. The Pro Annual plan is $288 per year, and the Business Annual plan is $600 per year.",
    },
    {
      id: "item-5",
      question: "Is there a trial period for the paid plans?",
      answer:
        "We offer a 14-day free trial for both the Pro Monthly and Pro Annual plans. It's a great way to experience all the features before committing to a paid subscription.",
    },
  ],
  ja: [
    {
      id: "item-1",
      question: "無料プランの費用はいくらですか？",
      answer:
        "私たちの無料プランは完全に無料で、月額料金や年間料金はかかりません。基本的な機能を使い始めるには最適な方法です。",
    },
    {
      id: "item-2",
      question: "プロ月額プランの費用はいくらですか？",
      answer:
        "プロ月額プランは月に30ドルで、核心機能へのアクセスを提供し、月額で課金されます。",
    },
    {
      id: "item-3",
      question: "ビジネス月額プランの価格はいくらですか？",
      answer:
        "ビジネス月額プランは月に60ドルで、高度な機能を提供し、柔軟性を高めるために月額で課金されます。",
    },
    {
      id: "item-4",
      question: "年間サブスクリプションプランを提供していますか？",
      answer:
        "はい、さらなる節約のために年間サブスクリプションプランを提供しています。プロ年間プランは年間288ドル、ビジネス年間プランは年間600ドルです。",
    },
    {
      id: "item-5",
      question: "有料プランには試用期間がありますか？",
      answer:
        "プロ月額プランとプロ年間プランの両方に14日間の無料トライアルを提供しています。これは、有料サブスクリプションを行う前に全ての機能を体験するのに最適な方法です。",
    },
  ],
  ko: [
    {
      id: "item-1",
      question: "무료 플랜의 비용은 얼마인가요?",
      answer:
        "저희 무료 플랜은 완전히 무료이며, 월간 또는 연간 요금이 없습니다. 기본 기능을 시작하고 탐색하는 데 좋은 방법입니다.",
    },
    {
      id: "item-2",
      question: "프로 월간 플랜의 비용은 얼마인가요?",
      answer:
        "프로 월간 플랜은 월 30달러입니다. 이 플랜은 핵심 기능에 대한 접근을 제공하며 월간으로 청구됩니다.",
    },
    {
      id: "item-3",
      question: "비즈니스 월간 플랜의 가격은 얼마인가요?",
      answer:
        "비즈니스 월간 플랜은 월 60달러입니다. 이 플랜은 고급 기능을 제공하며 유연성을 더하기 위해 월간으로 청구됩니다.",
    },
    {
      id: "item-4",
      question: "연간 구독 플랜을 제공하나요?",
      answer:
        "네, 더 큰 절약을 위해 연간 구독 플랜을 제공합니다. 프로 연간 플랜은 연 288달러이며, 비즈니스 연간 플랜은 연 600달러입니다.",
    },
    {
      id: "item-5",
      question: "유료 플랜에는 체험 기간이 있나요?",
      answer:
        "저희는 프로 월간 및 프로 연간 플랜에 대해 14일 무료 체험 기간을 제공합니다. 유료 구독을 하기 전에 모든 기능을 경험할 수 있는 좋은 방법입니다.",
    },
  ],
};
