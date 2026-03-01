import type { Metadata } from "next";
import Link from "next/link";
import { FAQList } from "@/components/v3/common/faq-list";
import Footer from "@/components/v3/common/footer/footer";

const SUPPORT_EMAIL = "kumarana998@gmail.com";

const faqItems = [
  {
    question: "Why am I not receiving reminders in the background?",
    answer: [
      "Enable Location access as Always Allow in iOS Settings.",
      "Enable Notifications for WhileHere.",
      "Make sure Low Power Mode and Focus settings are not suppressing alerts.",
    ],
  },
  {
    question: "Do I need internet for reminders?",
    answer: [
      "Basic geofence reminders can work without continuous internet, but suggestion fetching and analytics may require connectivity.",
    ],
  },
  {
    question: "How do I edit or remove a task location?",
    answer: [
      "Open the task, edit locations in Map Picker, then save. You can move, remove, or set a primary pin there.",
    ],
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer.join(" "),
    },
  })),
};

export const metadata: Metadata = {
  title: "WhileHere Support",
  description:
    "Support center for WhileHere with troubleshooting tips, app guidance, and direct contact information.",
};

export default function WhileHerePage() {
  const faqListItems = faqItems.map((item) => ({
    question: item.question,
    answer: (
      <ul className="text-on-surface-variant text-body-medium list-disc pl-5">
        {item.answer.map((line) => (
          <li key={line} className="mb-1">
            {line}
          </li>
        ))}
      </ul>
    ),
  }));

  return (
    <>
      <div className="max-w-screen-desktop desktop:px-0 mx-auto my-12 flex flex-col gap-6 px-2">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <section className="bg-surface-container-low rounded-2xl p-6">
          <p className="text-primary text-label-large">
            WhileHere for iPhone &amp; iPad
          </p>
          <h1 className="text-on-surface mt-1 text-display-large">
            WhileHere Support
          </h1>
          <p className="text-on-surface-variant text-body-large mt-2">
            Fast help for location-based task reminders. Reach support directly,
            troubleshoot common issues, and review privacy details.
          </p>
          <p className="text-on-surface-variant text-body-large mt-4">
            Need help? Email us at{" "}
            <a className="text-primary underline" href={`mailto:${SUPPORT_EMAIL}`}>
              {SUPPORT_EMAIL}
            </a>
          </p>
        </section>

        <section className="bg-surface-container-low rounded-2xl p-6">
          <h2 className="text-on-surface text-title-large">
            Frequently Asked Questions
          </h2>
          <FAQList items={faqListItems} className="mt-4" />
        </section>

        <section className="bg-surface-container-low rounded-2xl p-6">
          <h2 className="text-on-surface text-title-large">Contact Support</h2>
          <p className="text-on-surface-variant text-body-large mt-2">
            For bug reports, include device model, iOS version, app version, and
            exact steps to reproduce.
          </p>
          <p className="mt-3">
            <a className="text-primary underline" href={`mailto:${SUPPORT_EMAIL}`}>
              {SUPPORT_EMAIL}
            </a>
          </p>
        </section>

        <section className="bg-surface-container-low rounded-2xl p-6">
          <h2 className="text-on-surface text-title-large">Legal</h2>
          <p className="mt-2">
            <Link
              className="text-primary underline"
              href="/whilehere-privacy-policy"
            >
              Privacy Policy
            </Link>
          </p>
        </section>

        <footer className="text-on-surface-variant text-label-medium">
          © 2026 Anand Kumar
        </footer>
      </div>
      <Footer
        termsOfService="/whilehere-terms-of-service"
        privacyPolicy="/whilehere-privacy-policy"
      />
    </>
  );
}
