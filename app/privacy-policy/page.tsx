import React from "react";

const PrivacyPolicy = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h1>Privacy Policy</h1>
      <p>
        This Privacy Policy ensures transparency while complying with app store
        requirements. If you plan to add third-party services in the future,
        this policy should be updated accordingly.
      </p>

      <h2>1. Data Collection & Storage</h2>
      <p>
        Verse Vault does not collect personal information such as name, email,
        or phone number. Any app data, including user progress, is stored
        locally on the users device.
      </p>

      <h2>2. Third-Party Services</h2>
      <p>
        Verse Vault does not currently use third-party services but may in the
        future. The app includes an external link to{" "}
        <a href="https://www.buymeacoffee.com/" target="_blank" rel="noopener noreferrer">
          Buy Me a Coffee
        </a>
        .
      </p>

      <h2>3. Children Privacy</h2>
      <p>
        Verse Vault is not specifically targeted at children under 13.
        However, it can be used by them with parental guidance. The app does
        not collect any personal information from children.
      </p>

      <h2>4. Security Measures</h2>
      <p>
        Since Verse Vault does not store data externally, there is no risk of
        remote data breaches. Users are encouraged to protect their devices
        to ensure data security.
      </p>

      <h2>5. Permissions & Device Data</h2>
      <p>The app requires the following permissions:</p>
      <ul>
        <li>Full network access</li>
        <li>Control vibration</li>
        <li>Google Play license check</li>
      </ul>

      <h2>6. Changes to This Privacy Policy</h2>
      <p>
        Any updates to this policy will be posted on our website. Users should
        review this policy periodically for changes.
      </p>

      <h2>7. Contact Information</h2>
      <p>
        If you have any questions, contact us at{" "}
        <a href="mailto:myversevaultapp@gmail.com">myversevaultapp@gmail.com</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
