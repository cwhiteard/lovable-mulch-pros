import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const faqs = [
  {
    question: "How much does forestry mulching cost?",
    answer:
      "Pricing is based on acreage, brush density, and terrain. We price by the project, day, or the hour to offer flexibility. Contact us for a free estimate.",
  },
  {
    question: "How long will my project take?",
    answer:
      "Most residential projects are completed in 1-2 days. Larger or more complex jobs may take longer, but we provide a clear timeline during your quote.",
  },
  {
    question: "Will your equipment damage my property?",
    answer:
      "Our machines use steel tracks that distribute weight evenly, minimizing ground disturbance. We take every precaution to protect your property.",
  },
  {
    question: "Do you remove large trees?",
    answer:
      "We specialize in brush, saplings, and trees up to about 6 inches. For larger trees, we can pile to burn/haul away, or coordinate with licensed tree services for sensitive areas. We also offer grapple service to clean up any fallen or downed trees.",
  },
  {
    question: "Will brush grow back?",
    answer:
      "Some regrowth is natural. To minimize it, many clients plant grass, clover, or wildflowers. We also offer guidance on spot-treating invasive roots.",
  },
];

export default defineTool({
  name: "search_faq",
  title: "Search FAQ",
  description:
    "Search the H & L Solutions FAQ about pricing, timelines, equipment, tree size limits, and regrowth. Omit the query to get every FAQ entry.",
  inputSchema: {
    query: z.string().optional().describe("Keywords to match against questions and answers."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }) => {
    const q = query?.trim().toLowerCase();
    const results = q
      ? faqs.filter((f) => (f.question + " " + f.answer).toLowerCase().includes(q))
      : faqs;
    return {
      content: [{ type: "text", text: JSON.stringify(results, null, 2) }],
      structuredContent: { results },
    };
  },
});
