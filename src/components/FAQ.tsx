import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How much does forestry mulching cost?",
    answer: "Pricing is based on acreage, brush density, and terrain. We price by the project, day, or the hour to offer flexibility. Contact us for a free estimate.",
  },
  {
    question: "How long will my project take?",
    answer: "Most residential projects are completed in 1-2 days. Larger or more complex jobs may take longer, but we provide a clear timeline during your quote.",
  },
  {
    question: "Will your equipment damage my property?",
    answer: "Our machines use steel tracks that distribute weight evenly, minimizing ground disturbance. We take every precaution to protect your property.",
  },
  {
    question: "Do you remove large trees?",
    answer: "We specialize in brush, saplings, and trees up to about 6 inches. For larger trees, we can pile to burn/haul away, or coordinate with licensed tree services for sensitive areas. We also offer grapple service to clean up any fallen or downed trees.",
  },
  {
    question: "Will brush grow back?",
    answer: "Some regrowth is natural. To minimize it, many clients plant grass, clover, or wildflowers. We also offer guidance on spot-treating invasive roots.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground font-body text-lg mt-3">
            Quick answers to common questions.
          </p>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-foreground font-body font-semibold text-left hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-body leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
