import { Helmet } from "react-helmet-async";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Williams Web Co</title>
        <meta
          name="description"
          content="Review the Terms of Service for Williams Web Co, including payment terms, services provided, and client responsibilities."
        />
      </Helmet>

      <div className="pt-40 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-black text-zinc-900 mb-2">
          Terms of Service
        </h1>

        <p className="text-sm text-zinc-500 mb-10">
          Last Updated: January 6, 2026
        </p>

        <div className="space-y-8 text-zinc-600 text-sm leading-relaxed">
          <p>
            This Agreement is entered into between Bryson Williams (“Service
            Provider”) and the purchasing client (“Client”).
          </p>

          <p>By submitting payment, the Client agrees to the terms below.</p>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-2">
              1. Services Provided
            </h2>

            <h3 className="font-semibold text-zinc-800 mt-4">
              1.1 Website Design & Setup (One-time Fee)
            </h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Custom website design and setup</li>
              <li>WordPress installation and configuration</li>
              <li>Mobile-responsive design</li>
              <li>Basic page structure (Home, About, Services, Contact)</li>
            </ul>

            <h3 className="font-semibold text-zinc-800 mt-6">
              1.2 Ongoing Hosting & Website Management (Monthly Subscription)
            </h3>
            <p className="mt-2">
              The Client is enrolled in a required monthly website management
              plan, which includes:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Website hosting</li>
              <li>Core WordPress updates</li>
              <li>Plugin and theme updates</li>
              <li>Basic security monitoring</li>
              <li>Minor content edits (reasonable requests)</li>
              <li>Technical support</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-2">
              2. Payment Terms
            </h2>

            <h3 className="font-semibold text-zinc-800 mt-4">
              2.1 One-Time Payment
            </h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                A one-time website setup fee is due in full before work begins
              </li>
              <li>Payment is processed securely via Stripe</li>
            </ul>

            <h3 className="font-semibold text-zinc-800 mt-6">
              2.2 Monthly Subscription (Required)
            </h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                A recurring monthly fee is charged automatically via Stripe
              </li>
              <li>
                The first monthly payment begins upon website launch or 30 days
                after initial payment (whichever comes first)
              </li>
              <li>Monthly fees are billed on a recurring basis</li>
              <li>
                Failure to maintain the monthly subscription may result in
                suspension or removal of the website
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-2">3. Refunds</h2>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>All payments are non-refundable once work has started</li>
              <li>
                Due to the custom nature of website services, no refunds are
                provided for completed or in-progress work
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-2">
              4. Client Responsibilities
            </h2>
            <p>The Client agrees to provide:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Accurate business information</li>
              <li>Logos, images, and content (if applicable)</li>
              <li>Timely feedback and approvals</li>
            </ul>
            <p className="mt-2">
              Delays in providing materials may delay project completion.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-2">5. Revisions</h2>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>The project includes up to 2 reasonable revision rounds</li>
              <li>
                Additional revisions may be billed separately or applied to
                monthly services at the Service Provider’s discretion
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-2">
              6. Ownership & Access
            </h2>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                The Service Provider retains administrative control of hosting
                and website infrastructure while the monthly subscription is
                active
              </li>
              <li>
                The Client is granted use of the website for their business
                during the active subscription period
              </li>
              <li>
                Full transfer of hosting and administrative access is not
                included unless agreed upon separately in writing
              </li>
            </ul>
            <p className="mt-4">
              <strong>Domain Policy:</strong> If a domain is purchased on a
              client’s behalf, ownership will be transferred to the client upon
              request or upon termination of services. If a domain is not
              purchased on the client’s behalf, clients are responsible for
              purchasing and maintaining ownership of their domain name.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-2">
              7. Cancellation & Termination
            </h2>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                The Client may cancel the monthly subscription with 30 days’
                written notice
              </li>
              <li>Hosting and management services will end</li>
              <li>
                The website may be taken offline unless a transfer arrangement
                is made
              </li>
              <li>No refunds are issued for prior payments</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-2">
              8. Limitation of Liability
            </h2>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Loss of revenue or business opportunities</li>
              <li>Third-party hosting, plugin, or platform failures</li>
              <li>Security incidents beyond reasonable control</li>
            </ul>
            <p className="mt-2">
              Maximum liability is limited to the total amount paid by the
              Client.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-2">
              9. Governing Law
            </h2>
            <p>
              This Agreement shall be governed by the laws of the United States
              and the Service Provider’s state of residence.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-2">
              10. Acceptance of Terms
            </h2>
            <p>
              By submitting payment, the Client confirms that they have read,
              understood, and agreed to this Agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-2">
              11. Contact Information
            </h2>
            <p>
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

export default Terms;
