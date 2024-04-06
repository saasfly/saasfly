<div align="center" width="100%">
    <img src="./saasfly-logo.svg" width="128" alt="" />
</div>

# Saasfly </br>

[![Trạng thái quy trình làm việc GitHub Actions][check-workflow-badge]][check-workflow-badge-link] [![Giấy phép GitHub][github-license-badge]][github-license-badge-link]  [![Discord][discord-badge]][discord-badge-link] [![Saasfly][made-by-nextify-badge]][made-by-nextify-badge-link]
[![English](https://img.shields.io/badge/-English-grey.svg)](README.md)

Một boilerplate Next.js dễ sử dụng, cấp doanh nghiệp.

Bạn không cần phải mua mẫu nữa; Saasfly cung cấp một giải pháp nguồn mở hoàn chỉnh để xây dựng các ứng dụng SaaS một cách nhanh chóng và dễ dàng.

> **[Nextify](https://nextify.ltd)** cung cấp giải pháp SaaS doanh nghiệp toàn diện. Nếu bạn quan tâm đến việc thảo luận về dự án của mình hoặc chỉ muốn trò chuyện với chúng tôi, vui lòng liên hệ với chúng tôi tại [contact@nextify.ltd] (mailto:contact@nextify.ltd).

> ❤️ Chúng tôi cung cấp **hỗ trợ kỹ thuật và triển khai miễn phí cho các tổ chức phi lợi nhuận**.
>
> 🙌 Tất cả lợi nhuận thu được từ các dự án nguồn mở của chúng tôi sẽ được sử dụng hoàn toàn để hỗ trợ các chương trình và hoạt động từ thiện nguồn mở.

## ⚡ Demo trực tuyến

Tự mình thử nó!

Máy chủ demo 1 (Địa điểm: Washington, Hoa Kỳ): <https://show.saasfly.io>

Máy chủ demo 2 (Địa điểm: Tokyo, Nhật Bản): <https://demo.saasfly.io>

Để xem thêm tài liệu, hãy truy cập <https://document.saasfly.io>

## 🌟 Lịch sử Star

[![Biểu đồ lịch sử Star](https://api.star-history.com/svg?repos=saasfly/saasfly&type=Timeline)](https://star-history.com/#saasfly/saasfly&Timeline)

## 🚀 Bắt đầu

### 🖱 Mẫu một lần nhấp

[![Triển khai với Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsaasfly%2Fsaasfly&env=NEXT_PUBLIC_APP_URL,NEXTAUTH_URL,NEXTAUTH_SECRET,STRIPE_API_KEY,STRIPE_WEBHOOK_SECRET,POSTGRES_URL,GITHUB_CLIENT_ID,GITHUB_CLIENT_SECRET,RESEND_API_KEY,RESEND_FROM&install-command=bun%20install&build-command=bun%20run%20build&root-directory=apps%2Fnextjs)

### 📋 Điều kiện tiên quyết

Trước khi bắt đầu, hãy đảm bảo bạn đã cài đặt các thành phần sau:

1. [Bun](https://bun.sh/) & [Node.js](https://nodejs.org/) & [Git](https://git-scm.com/)

    1. Linux

    ```bash
      curl -sL https://gist.github.com/tianzx/874662fb204d32390bc2f2e9e4d2df0a/raw -o ~/downloaded_script.sh && chmod +x ~/downloaded_script.sh && source ~/downloaded_script.sh 
    ```

    2. MacOS

    ```bash
      /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"  
      brew install git
      brew install oven-sh/bun/bun
      brew install nvm
    ```

2. [PostgreSQL](https://www.postgresql.org/)
    1. Bạn có thể sử dụng Vercel Postgres hoặc máy chủ PostgreSQL cục bộ (thêm biến môi trường POSTGRES_URL trong .env.local)
       ```bash
          POSTGRES_URL = ''
       ```

### Cài đặt

Để bắt đầu với boilerplate này, chúng tôi cung cấp hai tùy chọn:

1. Sử dụng lệnh `bun create` (🌟Khuyến nghị cao🌟):

```bash
bun create saasfly
```

2. Tự sao chép kho lưu trữ:

```bash
git clone https://github.com/saasfly/saasfly.git
cd saasfly 
bun install  
```

### Thiết lập

Làm theo các bước sau để thiết lập dự án của bạn:

1. Thiết lập các biến môi trường:

```bash
cp .env.example .env.local 
// (Bạn phải chuẩn bị một cơ sở dữ liệu trước khi chạy lệnh này)
bun db:push  
```

2. Chạy máy chủ phát triển:

```bash
bun run dev:web
```

5. Mở [http://localhost:3000](http://localhost:3000) trong trình duyệt để xem kết quả.

## 🥺 Lộ trình dự án

1. Trang tổng quan quản trị (vẫn đang trong giai đoạn alpha!!!)
    2. Hiện tại chỉ cung cấp các trang tĩnh, chúng tôi có kế hoạch tích hợp với CMS kiến trúc headless
    3. Bạn có thể cung cấp một tài khoản quản trị viên, thay đổi **ADMIN_EMAIL="admin@saasfly.io,root@saasfly.io"** trong .env.local, sau đó truy cập host:port/admin/dashboard
    4. Vì lý do bảo mật, chúng tôi tạm thời không cung cấp demo trực tuyến.
2. Nhiều ngôn ngữ READEME
3. TODO

## ⭐ Các tính năng

### 🐭 Framework

- **[Next.js](https://nextjs.org/)** - Framework web React (sử dụng **App Directory**)
- **[NextAuth.js](https://next-auth.js.org/)** - Xác thực cho Next.js
- **[Kysely](https://kysely.dev/)** - Trình xây dựng truy vấn SQL an toàn về kiểu cho TypeScript
- **[Prisma](https://www.prisma.io/)** - ORM thế hệ tiếp theo cho Node.js và TypeScript, được sử dụng như một công cụ quản lý sơ đồ
- **[React-email](https://react.email/)** - Một trình hiển thị React để tạo email đẹp bằng các thành phần React

### 🐮 Nền tảng

- **[Vercel](https://vercel.com/)** – Dễ dàng triển khai ứng dụng Next.js của bạn
- **[Stripe](https://stripe.com/)** – Xử lý thanh toán cho các doanh nghiệp Internet
- **[Resend](https://resend.com/)** – Nền tảng email marketing cho nhà phát triển

### 🐯 Tính năng doanh nghiệp

- **[i18n](https://nextjs.org/docs/app/building-your-application/routing/internationalization)** - Hỗ trợ quốc tế hóa
- **[SEO](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)** - Tối ưu hóa công cụ tìm kiếm
- **[MonoRepo](https://turbo.build/)** - Monorepo để quản lý mã tốt hơn
- **[T3 Env](https://env.t3.gg/)** - Dễ dàng quản lý biến môi trường của bạn

### 🐰 Truy xuất dữ liệu

- **[trpc](https://trpc.io/)** – Dễ dàng tạo API an toàn về kiểu từ đầu đến cuối
- **[tanstack/react-query](https://react-query.tanstack.com/)** – Các hook để tìm nạp, lưu vào bộ nhớ đệm và cập nhật dữ liệu không đồng bộ trong React

### 🐲 Quản lý trạng thái toàn cục

- **[Zustand](https://zustand.surge.sh/)** – Quản lý trạng thái mạnh mẽ, nhỏ gọn và có thể mở rộng cho React

### 🐒 UI

- **[Tailwind CSS](https://tailwindcss.com/)** – Framework CSS tiện ích first cho phát triển UI nhanh
- **[Shadcn/ui](https://ui.shadcn.com/)** – Các thành phần có thể tái sử dụng được xây dựng bằng Radix UI và Tailwind CSS
- **[Framer Motion](https://framer.com/motion)** – Thư viện hoạt ảnh cho React để dễ dàng thêm hoạt ảnh cho các thành phần
- **[Lucide](https://lucide.dev/)** – Các biểu tượng đẹp, đơn giản, hoàn hảo từng pixel
- **[next/font](https://nextjs.org/docs/basic-features/font-optimization)** – Tối ưu hóa phông chữ tùy chỉnh và loại bỏ các yêu cầu mạng bên ngoài để cải thiện hiệu suất

### 🐴 Chất lượng mã

- **[TypeScript](https://www.typescriptlang.org/)** – Trình kiểm tra kiểu tĩnh an toàn kiểu từ đầu đến cuối
- **[Prettier](https://prettier.io/)** – Trình định dạng mã cố chấp cho phong cách mã nhất quán
- **[ESLint](https://eslint.org/)** – Trình kiểm tra có thể bổ sung cho Next.js và TypeScript
- **[Husky](https://typicode.github.io/husky)** – Dễ dàng sử dụng các hook Git

### 🐑 Hiệu suất

- **[Vercel Analytics](https://vercel.com/analytics)** – Số liệu hiệu suất thời gian thực cho các ứng dụng Next.js
- **[bun.sh](https://bun.sh/)** – Thay thế cho npm để quản lý gói nhanh hơn, đáng tin cậy hơn

### 🐘 Cơ sở dữ liệu

- **[PostgreSQL](https://www.postgresql.org/)** – Cơ sở dữ liệu nguồn mở tiên tiến nhất thế giới

## 📦 Ứng dụng và gói

- `web`: Ứng dụng Next.js chính
- `ui`: Các thành phần UI chia sẻ
- `db`: Sơ đồ cơ sở dữ liệu và các tiện ích
- `auth`: Các tiện ích xác thực
- `email`: Mẫu email và các tiện ích

## 📜 Giấy phép

Dự án này được cấp phép theo Giấy phép MIT. Để biết thêm thông tin, hãy xem tập tin [LICENSE](./LICENSE).

## 🙏 Lời cảm ơn

Dự án này lấy cảm hứng từ [Taxonomy](https://github.com/shadcn-ui/taxonomy) của shadcn và [create-t3-turbo](https://github.com/t3-oss/create-t3-turbo)của t3-oss.

<!-- Huy hiệu và liên kết -->

[check-workflow-badge]: https://img.shields.io/github/actions/workflow/status/saasfly/saasfly/ci.yml?label=ci
[github-license-badge]: https://img.shields.io/badge/License-MIT-green.svg
[discord-badge]: https://img.shields.io/discord/1204690198382911488?color=7b8dcd&link=https%3A%2F%2Fsaasfly.io%2Fdiscord
[made-by-nextify-badge]: https://img.shields.io/badge/made_by-nextify-blue?color=FF782B&link=https://nextify.ltd/

[check-workflow-badge-link]: https://github.com/saasfly/saasfly/actions/workflows/check.yml
[github-license-badge-link]: https://github.com/saasfly/saasfly/blob/main/LICENSE
[discord-badge-link]: https://discord.com/invite/b9uTZjdkrb
[made-by-nextify-badge-link]: https://nextify.ltd