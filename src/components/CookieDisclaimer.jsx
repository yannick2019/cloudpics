import { useState } from "react";
import { Link } from "react-router-dom";

const CookieDisclaimer = () => {
  const [consent, setConsent] = useState(
    // Get the initial value from local storage or default to false
    localStorage.getItem("cookie-consent") === "true" || false
  );

  // Define a function to handle the consent button click
  const handleConsent = () => {
    // Set the consent state to true
    setConsent(true);
    // Store the consent status in local storage
    localStorage.setItem("cookie-consent", "true");
  };

  return (
    !consent && (
      <div className="fixed bottom-0 left-0 right-0 bg-[#00df9a] text-black p-4 flex items-center justify-between">
        <p className="text-sm">
          This site uses cookies to enhance your experience. By continuing to
          browse this site, you accept the use of cookies.
          <Link to="/privacy-policy" className="underline">
            Privacy policy
          </Link>
          .
        </p>
        <button
          className="bg-gray-800 text-white hover:bg-white hover:text-[#00df9a] px-3 py-1 rounded text-sm"
          onClick={handleConsent}
        >
          I agree
        </button>
      </div>
    )
  );
};

export default CookieDisclaimer;
