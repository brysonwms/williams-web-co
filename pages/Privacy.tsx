import { Helmet } from "react-helmet-async";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Williams Web Co</title>
        <meta
          name="description"
          content="Learn how Williams Web Co collects, uses, and protects your personal information."
        />
      </Helmet>

      <div className="pt-40 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-black text-zinc-900 mb-2">
          Privacy Policy
        </h1>

        <p className="text-sm text-zinc-500 mb-10">
          Last Updated: January 6, 2026
        </p>

        <div className="space-y-8 text-zinc-600 text-sm leading-relaxed">
          <p>
            This Privacy Policy explains how Bryson Williams (“we,” “us,” or
            “our”) collects, uses, and protects personal information when you
            visit our website or use our services.
          </p>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-2">
              1. Information We Collect
            </h2>

            <p className="font-semibold text-zinc-800 mt-4">
              Personal Information
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Business name</li>
              <li>Billing information (processed securely by Stripe)</li>
            </ul>

            <p className="font-semibold text-zinc-800 mt-6">
              Technical Information
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Pages visited and interactions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-2">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Provide and manage website services</li>
              <li>Communicate with clients</li>
              <li>Process payments</li>
              <li>Improve our services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-2">
              3. Payments
            </h2>
            <p>
              All payments are processed securely through Stripe. We do not
              store or have access to your full payment card details.
            </p>
            <p className="mt-2">
              Stripe’s Privacy Policy applies to payment transactions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-2">
              4. Sharing of Information
            </h2>
            <p>We do not sell or rent your personal information.</p>
            <p className="mt-2">
              We may share information only with:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                Service providers (e.g., hosting platforms, payment processors)
              </li>
              <li>Legal authorities if required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-2">
              5. Cookies & Tracking
            </h2>
            <p>
              Our services may use basic cookies or analytics tools to:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Understand website usage</li>
              <li>Improve performance</li>
            </ul>
            <p className="mt-2">
              You may disable cookies in your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-2">
              6. Data Security
            </h2>
            <p>
              We take reasonable measures to protect your information.
              However, no method of transmission over the internet is 100%
              secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-2">
              7. Client Websites
            </h2>
            <p>
              We are not responsible for the privacy practices or content of
              third-party websites linked from client websites.
            </p>
            <p className="mt-2">
              Clients are responsible for maintaining privacy policies on
              their own websites if required.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-2">
              8. Your Rights
            </h2>
            <p>
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Request access to your data</li>
              <li>Request correction or deletion</li>
              <li>Withdraw consent for communications</li>
            </ul>
            <p className="mt-2">
              To make a request, contact us using the information below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-2">
              9. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy at any time. Updates will be
              posted on this page with a revised date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-2">
              10. Contact Information
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact me:
            </p>
            <p className="mt-2">
              <strong>Email:</strong> brysonwms.business@gmail.com
              <br />
              <strong>Phone:</strong> (919) 888-0676
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Privacy;
