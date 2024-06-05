import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@saasfly/ui/accordion";

export function Questions() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>About Saasfly</AccordionTrigger>
        <AccordionContent>
          Nextify Limited’s team of experienced developers has invested years
          into refining our software development methodologies. We’re proud to
          present our starter kit, a culmination of best practices and proven
          tools extracted from countless successful projects. This extensively
          tested kit is more than just code, it’s a cornerstone of our daily
          operations, consistently helping us deliver exceptional results for
          our clients. While informed by our unique experiences, the kit’s
          solutions are meticulously chosen to address common challenges and fit
          a wide range of scenarios. We believe it offers a streamlined and
          efficient framework for building SaaS products, empowering you to
          achieve your project goals.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Why Next.js?</AccordionTrigger>
        <AccordionContent>
          Next.js is a powerful and versatile framework that offers a wide range
          of benefits for building web applications. It is known for its
          excellent performance, strong developer experience, and comprehensive
          feature set.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is this starter for you?</AccordionTrigger>
        <AccordionContent>
          If you’re embarking on the development of a SaaS service and are in
          search of a solid foundation, meticulously crafted architecture, and
          an enriching developer experience, then this starter kit stands as a
          prime resource to consider. It encompasses a holistic collection of
          best practices and tools, each thoroughly vetted and demonstrated to
          be effective across numerous projects. Even if you’re uncertain about
          whether a starter kit fits your project’s needs, this resource still
          holds significant value. By delving into the starter kit, you have the
          opportunity to garner inspiration from its array of solutions to
          common challenges encountered by developers. This exploration can
          serve as a pathway to identifying commendable practices and devising
          robust solutions tailored to your specific development process. In
          summary, whether you opt to leverage this starter kit in its entirety
          or merely extract certain ideas from it, we are confident it provides
          indispensable insights and tools for anyone aiming to create a
          high-caliber SaaS service.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
