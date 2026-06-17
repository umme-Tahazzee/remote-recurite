const faqs = [
  {
    question: "Do I have to sign a long-term contract?",
    answer:
      "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party",
  },
  {
    question: "Can I pay for a whole year?",
    answer:
      "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage",
  },
  {
    question: "What if I need help?",
    answer:
      "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party",
  },
];

const CommonQuestions = () => {
  return (
    <section className="bg-white w-full pt-10">
      <div className="max-w-6xl mx-auto p-10 space-y-8">
        <h1 className="text-[32px] text-black font-bold">Common Questions</h1>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-black font-semibold text-base">
                {faq.question}
              </h3>
              <p className="text-black/50 text-base leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <button className="border border-blue-200 text-blue-600 text-sm font-medium px-5 py-2 rounded-full hover:bg-blue-50 transition-colors">
          More Questions
        </button>
      </div>
    </section>
  );
};

export default CommonQuestions;