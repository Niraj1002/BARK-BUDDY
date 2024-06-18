import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/constants";

const Page = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        FAQ's for Adopting a Dog
      </h1>
      <Accordion type="single" collapsible>
        {FAQS.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="mb-4">
            <AccordionTrigger className="bg-gray-200 py-3 px-4 rounded-md cursor-pointer font-semibold">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="py-3 px-4 bg-white border border-gray-300 rounded-md">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Page;
