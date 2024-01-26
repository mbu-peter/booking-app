import { Link } from "react-router-dom";
const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>

      <p className="mb-4">Last updated: Jan 2024</p>

      <p className="mb-4">
        Your privacy is important to us. It is{" "}
        <Link to="/" className="text-blue-500 hover:underline">
          MPSafaris.com's
        </Link>{" "}
        policy to respect your privacy regarding any information that may be
        processed or handled during your use of our website, MPSafaris.com, and
        other sites we own and operate.
      </p>

      <h2 className="text-2xl font-bold mb-4">Information Security</h2>

      <p className="mb-4">
        We prioritize the security of your information and employ commercially
        acceptable measures to protect it from unauthorized access, disclosure,
        alteration, and destruction.
      </p>

      <h2 className="text-2xl font-bold mb-4">Cookies</h2>

      <p className="mb-4">
        Our website may use cookies to enhance your experience. Cookies are
        small files stored on your device, and you have the option to accept or
        decline them. Please note that declining cookies may limit your access
        to certain features of the site.
      </p>

      <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>

      <p className="mb-4">
        Our website may utilize third-party services for various purposes, such
        as analytics or advertising. These third-party services may have their
        own privacy policies, and we encourage you to review them.
      </p>

      <h2 className="text-2xl font-bold mb-4">
        Changes to This Privacy Policy
      </h2>

      <p className="mb-4">
        We reserve the right to update or change our Privacy Policy at any time.
        Any changes will be effective immediately upon posting. It is your
        responsibility to check this page periodically for updates.
      </p>

      <p className="mb-4">
        By using our website, you consent to the terms outlined in this Privacy
        Policy.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
