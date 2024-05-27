"use client";

import React from "react";

import { InfiniteMovingCards } from "@saasfly/ui/infinite-moving-cards";

export function InfiniteMovingCardss() {
  return (
    <div className=" relative flex flex-col items-center justify-center overflow-hidden rounded-md antialiased">
      <InfiniteMovingCards items={reviews} direction="right" speed="slow" />
    </div>
  );
}

const reviews = [
  {
    quote:
      "这款 SaaS 服务简直是办公利器！它的功能非常强大，界面也十分友好。自从使用它以后，我的工作效率提高了很多。我真的很庆幸选择了这个服务。",
    name: "王伟",
    title: "高级用户",
  },
  {
    quote:
      "I've tried many SaaS services before, but this one really stands out. It offers a wide range of features and integrates seamlessly with other tools I use. The customer support is also top-notch. Highly recommended!",
    name: "John Smith",
    title: "Power User",
  },
  {
    quote:
      "このSaaSサービスには本当に感謝しています。おかげで業務の効率が大幅に向上しました。機能が豊富で、使いやすいインターフェースも魅力的です。これからもずっと使い続けたいと思います。",
    name: "山田太郎",
    title: "ゴールドユーザー",
  },
  {
    quote:
      "저는 이 SaaS 서비스에 매우 만족하고 있습니다. 기능이 다양하고 강력할 뿐만 아니라, 고객 지원도 훌륭합니다. 이 서비스 덕분에 업무 성과가 크게 향상되었어요. 강력히 추천합니다!",
    name: "김민수",
    title: "VIP 사용자",
  },
  {
    quote:
      "This SaaS service has revolutionized the way our team works. It's feature-rich, user-friendly, and the pricing is quite competitive. We've seen a significant boost in our productivity since we started using it.",
    name: "Emily Johnson",
    title: "Verified Buyer",
  },
];
