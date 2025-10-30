const RefundPolicy = () => {
  return (
    <div className="w-full p-6 max-w-3xl mx-auto pt-32">
      <h1 className="text-3xl font-bold mb-4">Refund Policy</h1>
      <p className="text-sm text-muted-foreground mb-6">
        Last updated: 01/04/2025
      </p>

      <h2 className="text-xl font-semibold mb-2">Return &amp; Refund Policy</h2>
      <p className="mb-4">
        Our Return and Refund Policy was last updated on 01/04/2025.
      </p>
      <p className="mb-6">
        Thank you for choosing <strong>HireHack</strong>. The following terms
        apply to any subscriptions or services you have purchased from us.
      </p>

      <h2 className="text-xl font-semibold mb-2">Eligibility for Refunds</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>
          If the service is not delivered as promised due to an error on our
          end.
        </li>
        <li>
          If a technical issue caused by our platform prevents you from
          accessing the features you paid for, and the issue cannot be resolved
          within a reasonable timeframe.
        </li>
        <li>If you cancel your subscription within the refund period.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Refund Period</h2>
      <p className="mb-6">
        Refund requests must be made within <strong>30 days</strong> of the
        payment date. Requests made after this period will not be eligible for a
        refund.
      </p>

      <h2 className="text-xl font-semibold mb-2">Non-Refundable Cases</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>If you change your mind after purchasing a subscription or service.</li>
        <li>If you fail to use the service during the subscription period.</li>
        <li>
          If the issue is caused by third-party software or tools not affiliated
          with our platform.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Refund Process</h2>
      <ol className="list-decimal pl-6 mb-6">
        <li>Contact our support team at support@hirehack.ai.</li>
        <li>Provide your payment receipt, order ID, and a detailed explanation of the issue.</li>
        <li>Our team will review your request and respond within 3–5 business days.</li>
        <li>
          If approved, the refund will be processed to your original payment
          method within 7–10 business days.
        </li>
      </ol>

      <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
      <p className="mb-6">
        If you have any questions about this Refund Policy or require
        assistance, please reach out to us:
      </p>
      <p className="font-medium">📧 Email: support@hirehack.ai</p>
    </div>
  );
};

export default RefundPolicy;
