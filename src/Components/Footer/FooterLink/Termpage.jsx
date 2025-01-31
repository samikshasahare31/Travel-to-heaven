const TermsAndConditions = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Terms and Conditions
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">COVID 19</h2>
        <p className="text-gray-700">
          Refund as per Hotel & Vendor guidelines, Any amount paid as advance or
          total will be adjusted in any future trip.
        </p>
        <h3 className="text-xl font-medium mt-4 mb-2">
          About safety and hygiene:
        </h3>
        <ul className="list-disc list-inside">
          <li>
            The Hotel and the entire stay is deep cleaned before every check-in
            and post every check-out.
          </li>
          <li>
            There are antibacterial hand sanitizers available throughout the
            property.
          </li>
          <li>Social distancing is maintained.</li>
          <li>
            Increased frequency of cleaning public areas (lobby, doorknobs,
            washrooms, etc.).
          </li>
          <li>Daily temperature monitoring of the staff.</li>
          <li>Hand gloves are used when cleaning and handling waste.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Cancellation Policy</h2>
        <p className="text-gray-700">
          If You Cancel Your Holiday : <br />
          You or any member of your party may cancel their travel arrangements
          at any time. Written notification or an email to that effect from the
          person who made the booking must be received at our office.
        </p>
        <h3 className="text-xl font-medium mt-4 mb-2">
          Cancellation charges per person:
        </h3>
        <ul className="list-disc list-inside">
          <li>30+ days before the trip: 25% of total cost.</li>
          <li>14-30 days before the trip: 50% of total cost.</li>
          <li>0-14 days before the trip: 100% of total cost.</li>
          <li>
            For cancellations due to unforeseen weather or government
            restrictions, alternative arrangements may be made. Cash refunds are
            not applicable.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          If We Change or Cancel Your Holiday
        </h2>
        <p className="text-gray-700">
          We reserve the right to change travel arrangements at any time due to
          unforeseen events. If arrangements cannot be fulfilled, alternate
          dates or partial refunds may be provided.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          If You Want to Change Your Holiday Plan
        </h2>
        <p className="text-gray-700">
          Any changes in travel arrangements must be requested in writing by the
          person who made the booking. All costs from amendments are your
          responsibility.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Important Notes</h2>
        <p className="text-gray-700">
          These are the sole terms governing tour operations. Before Holiday is
          a tour operator and is not responsible for personal belongings, travel
          delays, or issues with third-party service providers.
        </p>
        <p className="mt-4">
          If you have questions, contact us at{" "}
          <a href="mailto:hello@b4holiday.com" className="text-blue-500">
            info@entrepreneurshipnetwork.net
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
