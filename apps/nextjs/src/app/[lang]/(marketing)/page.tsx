import Link from "next/link";

import ShimmerButton from "~/components/shimmer-button";
import type { Locale } from "~/config/i18n-config";
import { getDictionary } from "~/lib/get-dictionary";

export default async function IndexPage({
  params: { lang },
}: {
  params: {
    lang: Locale;
  };
}) {
  const dict = await getDictionary(lang);
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            {dict.marketing.title}
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            {dict.marketing.sub_title}
          </p>
          <div className="">
            <Link href={`${lang}/login`}>
              <ShimmerButton>
                <span className="z-10 whitespace-pre bg-gradient-to-b from-black from-30% to-gray-300/80 bg-clip-text text-center text-sm font-semibold leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 dark:text-transparent ">
                  {dict.marketing.get_started}
                </span>
              </ShimmerButton>
            </Link>
          </div>
        </div>
      </section>

      <section
        id="saasfly"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24 mb-8"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Welcome to Saasfly
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Your complete All-in-One solution for building SaaS services. From coding to product launch, we have everything you need covered!
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="https://github.com/saasfly/saasfly">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Saasfly GitHub</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Contribute by submitting issues and pull requests.</p>
            <a
              href="https://github.com/saasfly/saasfly"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              🙏Give Us A Star🙏
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="https://document.saasfly.io/">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Saasfly Docs</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Your complete All-in-One solution for building SaaS services.</p>
            <a
              href="https://document.saasfly.io/"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get Started
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="https://discord.gg/b9uTZjdkrb">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Discord</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Join our Discord server to chat with other developers and get help.</p>
            <a
              href="https://discord.gg/b9uTZjdkrb"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Chat With Us
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            {dict.marketing.features}
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            {dict.marketing.sub_features}
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg
                viewBox="0 0 24 24"
                className="h-12 w-12 fill-current"
                role="img"
              >
                <path d="m10.204 14.35.007.01-.999 2.413a5.171 5.171 0 0 1-2.075-2.597l2.578-.437.004.005a.44.44 0 0 1 .484.606zm-.833-2.129a.44.44 0 0 0 .173-.756l.002-.011L7.585 9.7a5.143 5.143 0 0 0-.73 3.255l2.514-.725.002-.009zm1.145-1.98a.44.44 0 0 0 .699-.337l.01-.005.15-2.62a5.144 5.144 0 0 0-3.01 1.442l2.147 1.523.004-.002zm.76 2.75.723.349.722-.347.18-.78-.5-.623h-.804l-.5.623.179.779zm1.5-3.095a.44.44 0 0 0 .7.336l.008.003 2.134-1.513a5.188 5.188 0 0 0-2.992-1.442l.148 2.615.002.001zm10.876 5.97-5.773 7.181a1.6 1.6 0 0 1-1.248.594l-9.261.003a1.6 1.6 0 0 1-1.247-.596l-5.776-7.18a1.583 1.583 0 0 1-.307-1.34L2.1 5.573c.108-.47.425-.864.863-1.073L11.305.513a1.606 1.606 0 0 1 1.385 0l8.345 3.985c.438.209.755.604.863 1.073l2.062 8.955c.108.47-.005.963-.308 1.34zm-3.289-2.057c-.042-.01-.103-.026-.145-.034-.174-.033-.315-.025-.479-.038-.35-.037-.638-.067-.895-.148-.105-.04-.18-.165-.216-.216l-.201-.059a6.45 6.45 0 0 0-.105-2.332 6.465 6.465 0 0 0-.936-2.163c.052-.047.15-.133.177-.159.008-.09.001-.183.094-.282.197-.185.444-.338.743-.522.142-.084.273-.137.415-.242.032-.024.076-.062.11-.089.24-.191.295-.52.123-.736-.172-.216-.506-.236-.745-.045-.034.027-.08.062-.111.088-.134.116-.217.23-.33.35-.246.25-.45.458-.673.609-.097.056-.239.037-.303.033l-.19.135a6.545 6.545 0 0 0-4.146-2.003l-.012-.223c-.065-.062-.143-.115-.163-.25-.022-.268.015-.557.057-.905.023-.163.061-.298.068-.475.001-.04-.001-.099-.001-.142 0-.306-.224-.555-.5-.555-.275 0-.499.249-.499.555l.001.014c0 .041-.002.092 0 .128.006.177.044.312.067.475.042.348.078.637.056.906a.545.545 0 0 1-.162.258l-.012.211a6.424 6.424 0 0 0-4.166 2.003 8.373 8.373 0 0 1-.18-.128c-.09.012-.18.04-.297-.029-.223-.15-.427-.358-.673-.608-.113-.12-.195-.234-.329-.349a2.691 2.691 0 0 0-.111-.088.594.594 0 0 0-.348-.132.481.481 0 0 0-.398.176c-.172.216-.117.546.123.737l.007.005.104.083c.142.105.272.159.414.242.299.185.546.338.743.522.076.082.09.226.1.288l.16.143a6.462 6.462 0 0 0-1.02 4.506l-.208.06c-.055.072-.133.184-.215.217-.257.081-.546.11-.895.147-.164.014-.305.006-.48.039-.037.007-.09.02-.133.03l-.004.002-.007.002c-.295.071-.484.342-.423.608.061.267.349.429.645.365l.007-.001.01-.003.129-.029c.17-.046.294-.113.448-.172.33-.118.604-.217.87-.256.112-.009.23.069.288.101l.217-.037a6.5 6.5 0 0 0 2.88 3.596l-.09.218c.033.084.069.199.044.282-.097.252-.263.517-.452.813-.091.136-.185.242-.268.399-.02.037-.045.095-.064.134-.128.275-.034.591.213.71.248.12.556-.007.69-.282v-.002c.02-.039.046-.09.062-.127.07-.162.094-.301.144-.458.132-.332.205-.68.387-.897.05-.06.13-.082.215-.105l.113-.205a6.453 6.453 0 0 0 4.609.012l.106.192c.086.028.18.042.256.155.136.232.229.507.342.84.05.156.074.295.145.457.016.037.043.09.062.129.133.276.442.402.69.282.247-.118.341-.435.213-.71-.02-.039-.045-.096-.065-.134-.083-.156-.177-.261-.268-.398-.19-.296-.346-.541-.443-.793-.04-.13.007-.21.038-.294-.018-.022-.059-.144-.083-.202a6.499 6.499 0 0 0 2.88-3.622c.064.01.176.03.213.038.075-.05.144-.114.28-.104.266.039.54.138.87.256.154.06.277.128.448.173.036.01.088.019.13.028l.009.003.007.001c.297.064.584-.098.645-.365.06-.266-.128-.537-.423-.608zM16.4 9.701l-1.95 1.746v.005a.44.44 0 0 0 .173.757l.003.01 2.526.728a5.199 5.199 0 0 0-.108-1.674A5.208 5.208 0 0 0 16.4 9.7zm-4.013 5.325a.437.437 0 0 0-.404-.232.44.44 0 0 0-.372.233h-.002l-1.268 2.292a5.164 5.164 0 0 0 3.326.003l-1.27-2.296h-.01zm1.888-1.293a.44.44 0 0 0-.27.036.44.44 0 0 0-.214.572l-.003.004 1.01 2.438a5.15 5.15 0 0 0 2.081-2.615l-2.6-.44-.004.005z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Kubernetes</h3>
                <p className="text-sm">{dict.marketing.k8s_features}</p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg
                viewBox="0 0 24 24"
                className="h-12 w-12 fill-current"
                role="img"
              >
                <path d="M13.5 23.52h-3a.27.27 0 0 1-.234-.136l-1.5-2.598a.27.27 0 0 1 0-.269l1.5-2.598a.271.271 0 0 1 .234-.136h2.844l2.172-3.762a.269.269 0 1 1 .467.269l-2.172 3.763 1.422 2.463a.27.27 0 0 1 0 .269l-1.5 2.598a.267.267 0 0 1-.233.137zm-2.844-.54h2.688l1.344-2.328-1.344-2.328h-2.688l-1.344 2.328 1.344 2.328zM21 19.195h-3a.27.27 0 0 1-.234-.136l-1.5-2.599a.27.27 0 0 1 0-.269l1.422-2.463-2.172-3.762a.27.27 0 0 1 .099-.369.269.269 0 0 1 .368.098l2.172 3.762H21a.27.27 0 0 1 .234.136l1.5 2.598a.27.27 0 0 1 0 .269l-1.5 2.599a.271.271 0 0 1-.234.136zm-2.844-.541h2.688l1.344-2.328-1.344-2.328h-2.688l-1.344 2.328 1.344 2.328zM6 19.195H3a.27.27 0 0 1-.234-.136l-1.5-2.599a.27.27 0 0 1 0-.269l1.5-2.598A.271.271 0 0 1 3 13.457h3a.27.27 0 0 1 .234.136l1.422 2.462H12a.27.27 0 1 1 0 .54H7.656l-1.422 2.463a.271.271 0 0 1-.234.137zm-2.844-.541h2.688l1.344-2.328-1.344-2.328H3.156l-1.344 2.328 1.344 2.328zM8.25 14.44a.267.267 0 0 1-.234-.136l-2.172-3.762H3a.27.27 0 0 1-.234-.135l-1.5-2.598a.271.271 0 0 1 0-.27l1.5-2.598A.271.271 0 0 1 3 4.806h3a.27.27 0 0 1 .234.135l1.5 2.598a.271.271 0 0 1 0 .27l-1.422 2.463 2.172 3.763a.27.27 0 0 1-.234.405zm-5.094-4.438h2.688l1.344-2.328-1.344-2.328H3.156L1.812 7.674l1.344 2.328zm17.844.54h-3a.27.27 0 0 1-.234-.135l-1.422-2.464H12a.27.27 0 1 1 0-.54h4.344l1.422-2.463A.27.27 0 0 1 18 4.805h3a.27.27 0 0 1 .234.135l1.5 2.598a.271.271 0 0 1 0 .27l-1.5 2.598a.268.268 0 0 1-.234.136zm-2.844-.54h2.688l1.344-2.328-1.344-2.328h-2.688l-1.344 2.328 1.344 2.328zm-9.906.111a.271.271 0 0 1-.234-.405l2.172-3.762-1.422-2.463a.271.271 0 0 1 0-.27l1.5-2.598A.27.27 0 0 1 10.5.48h3a.27.27 0 0 1 .234.135l1.5 2.598a.271.271 0 0 1 0 .27l-1.5 2.598a.27.27 0 0 1-.234.135h-2.844L8.484 9.979a.27.27 0 0 1-.234.134zm2.406-4.437h2.688l1.344-2.328-1.344-2.328h-2.688L9.312 3.348l1.344 2.328z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">DevOps</h3>
                <p className="text-sm">{dict.marketing.devops_features}</p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 24 24.088" className="h-12 w-12 fill-current">
                <path d="M4.888 9.36c-2.472 0-4.48-2.008-4.48-4.48S2.428.4 4.888.4a4.48 4.48 0 0 1 0 8.96zm0-8.112c-1.996 0-3.628 1.632-3.628 3.628s1.632 3.628 3.628 3.628 3.628-1.632 3.628-3.628S6.9 1.248 4.888 1.248zM15.816 17.04a2.396 2.396 0 0 0-.408-3.38c-1.032-.808-2.572-.624-3.38.408s-.668 2.536.408 3.38c1.032.8 2.572.616 3.38-.408zM12.9 15.936c-.324-.26-.416-.66-.204-1.096l-.324-.26.288-.372.288.224c.132-.168.372-.308.548-.436l.316.444c-.104.048-.28.184-.472.428-.156.204-.176.392-.056.492.12.092.308.036.652-.148.484-.28.816-.364 1.144-.104.26.268.308.704.132 1.104l.324.26-.288.372-.288-.224c-.132.168-.472.428-.604.52l-.316-.444c.176-.056.456-.24.612-.444.196-.252.204-.436.048-.568-.12-.092-.268-.084-.624.112-.424.268-.848.4-1.176.14zM4.416 5.752a.424.424 0 0 1-.204-.368V2.436c0-.236.196-.42.42-.42s.42.196.42.42v2.236L7.124 3.54a.426.426 0 0 1 .572.172.426.426 0 0 1-.172.572l-2.7 1.468c-.052.044-.268.076-.408 0zm13.64 1.712-1.404 1.58-1.512-1.18-3.752 4.812c-.076-.048-.296-.148-.316-.176-.8-.372-1.876-.336-2.656.064l-8.12 4.532v6.02l3.596-1.756c1.616.76 3.464.568 4.952-.352l3.512 2.74 1.048-1.348.828.732 9.472-10.636-5.648-5.032zM13.172 21.62a1.82 1.82 0 0 0-2.08.288l-2.796-2.192a3.372 3.372 0 0 1-2.116.752 3.49 3.49 0 0 1-1.012-.156.326.326 0 0 1-.212-.4.326.326 0 0 1 .4-.212c.828.26 1.728.112 2.424-.392.176-.132.364-.288.556-.5l.856-1.012 2.472 1.94c.428.296.928.224 1.208-.112.296-.428.224-.94-.112-1.208L8.32 14.84a.308.308 0 0 1-.048-.428.308.308 0 0 1 .428-.048l1.364 1.096 4.296-5.524a1.79 1.79 0 0 0 2.016-.252l2.592 2.016a1.81 1.81 0 0 0 .296 2.072l-6.092 7.848zm1.448-.788 6.484-8.324-3.744-2.916c.596.26 1.3.176 1.82-.232l2.452 2.184a1.802 1.802 0 0 0 .156 2.08l-6.604 7.42a2.219 2.219 0 0 0-.564-.212z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Price</h3>
                <p className="text-sm ">{dict.marketing.price_features}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
