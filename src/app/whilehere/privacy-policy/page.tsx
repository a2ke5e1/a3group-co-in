import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/v3/common/footer/footer";

const PRIVACY_EMAIL = "kumarana998@gmail.com";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for WhileHere, explaining what data is used and how location-based reminder features work.",
  icons: "/while-here/while-here-icon.png",
};

export default function WhileHerePrivacyPage() {
  return (
    <>
      <div className="max-w-screen-desktop desktop:px-0 mx-auto my-12 flex flex-col gap-6 px-2">
        <section className="bg-surface-container-low rounded-2xl p-6">
          <h1 className="text-on-surface text-display-large">Privacy Policy</h1>
          <p className="text-on-surface-variant text-body-large mt-2">
            <strong>Effective date:</strong> March 1, 2026
          </p>
          <p className="text-on-surface-variant text-body-large mt-2">
            WhileHere uses location and notification permissions to provide
            location-based reminders.
          </p>
        </section>

        <section className="bg-surface-container-low rounded-2xl p-6">
          <h2 className="text-on-surface text-title-large">
            Information We Use
          </h2>
          <ul className="text-on-surface-variant text-body-medium mt-3 list-disc pl-5">
            <li className="mb-1">
              Task data you create (title, notes, saved locations, reminder
              radius).
            </li>
            <li className="mb-1">
              Location permission status and geofence events to trigger
              reminders.
            </li>
            <li>Notification permission status to deliver alerts.</li>
          </ul>
        </section>

        <section className="bg-surface-container-low rounded-2xl p-6">
          <h2 className="text-on-surface text-title-large">How We Use Data</h2>
          <ul className="text-on-surface-variant text-body-medium mt-3 list-disc pl-5">
            <li className="mb-1">To create and manage your tasks.</li>
            <li className="mb-1">
              To trigger reminders when you are near saved task locations.
            </li>
            <li>To improve app reliability and performance.</li>
          </ul>
        </section>

        <section className="bg-surface-container-low rounded-2xl p-6">
          <h2 className="text-on-surface text-title-large">
            Analytics and Crash Reporting
          </h2>
          <p className="text-on-surface-variant text-body-large mt-2">
            WhileHere may use third-party services (such as Firebase) for
            analytics and crash diagnostics.
          </p>
        </section>

        <section className="bg-surface-container-low rounded-2xl p-6">
          <h2 className="text-on-surface text-title-large">Your Choices</h2>
          <ul className="text-on-surface-variant text-body-medium mt-3 list-disc pl-5">
            <li className="mb-1">
              You can disable location and notification permissions in iOS
              Settings.
            </li>
            <li>Disabling permissions may limit reminder functionality.</li>
          </ul>
        </section>

        <section className="bg-surface-container-low rounded-2xl p-6">
          <h2 className="text-on-surface text-title-large">Contact</h2>
          <p className="text-on-surface-variant text-body-large mt-2">
            For privacy questions, contact:{" "}
            <a
              className="text-primary underline"
              href={`mailto:${PRIVACY_EMAIL}`}
            >
              {PRIVACY_EMAIL}
            </a>
          </p>
          <p className="mt-4">
            <Link className="text-primary underline" href="/whilehere">
              Back to Support
            </Link>
          </p>
        </section>
      </div>
      <Footer
        termsOfService="/whilehere/terms-of-service"
        privacyPolicy="/whilehere/privacy-policy"
      />
    </>
  );
}
