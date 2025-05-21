
import { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "How does the Vonlop AI voice agent work?",
      answer: "Our AI voice agents use advanced natural language processing to understand and respond to caller inquiries. They integrate with your existing phone system and can handle appointments, answer questions about services, provide pricing information, and more—all in a natural, conversational way."
    },
    {
      question: "Do I need special equipment or a new phone system?",
      answer: "No, Vonlop works with your existing phone system. We simply set up call forwarding to our AI system when you want calls handled automatically. You can easily toggle this on or off as needed."
    },
    {
      question: "How long does it take to set up?",
      answer: "Most businesses are up and running within 48 hours. We handle the technical setup, and you just need to provide information about your services, pricing, business hours, and booking policies."
    },
    {
      question: "Will customers know they're talking to an AI?",
      answer: "We believe in transparency, so yes, our AI agent identifies itself as a virtual assistant. However, our AI is so natural and effective that customers appreciate the convenience and prompt service."
    },
    {
      question: "What if the AI can't answer a specific question?",
      answer: "If the AI encounters a question it can't handle, it can either take a message, transfer the call to a staff member, or offer to have someone call the customer back, depending on your preference."
    },
    {
      question: "How does Vonlop handle appointment booking?",
      answer: "Vonlop integrates with your existing calendar system (Google Calendar, Microsoft Outlook, etc.) to check availability and schedule appointments in real-time. It can also handle modifications and cancellations based on your policies."
    },
    {
      question: "Can I customize what information the AI provides?",
      answer: "Absolutely. During setup, you'll provide detailed information about your services, pricing, policies, and more. You can update this information at any time through our web dashboard."
    },
    {
      question: "What languages does Vonlop support?",
      answer: "Currently, Vonlop supports English, Spanish, French, and Mandarin, with more languages coming soon. This allows you to serve a diverse customer base without additional staff."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-vonlop-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-vonlop-text mb-4">
            Frequently Asked <span className="text-vonlop-primary">Questions</span>
          </h2>
          <p className="text-lg text-vonlop-text/70 max-w-2xl mx-auto">
            Got questions about Vonlop? We've got answers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left"
              >
                <h3 className="text-lg font-medium text-vonlop-text">{faq.question}</h3>
                <svg
                  className={`w-6 h-6 text-vonlop-primary transition-transform ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`mt-2 transition-all duration-300 overflow-hidden ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-vonlop-text/70">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
