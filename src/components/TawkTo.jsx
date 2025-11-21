import { useEffect } from "react";

const TawkTo = () => {
  useEffect(() => {
    // Tawk.to script
    var Tawk_API = Tawk_API || {};
    var Tawk_LoadStart = new Date();

    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/68ef871571d65e194c0d736a/1j7jqfbtf";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();

    return () => {
      // Optional: remove widget on unmount
      const iframe = document.querySelector("iframe[src*='tawk.to']");
      if (iframe) iframe.remove();
    };
  }, []);

  return null; // No visual output
};

export default TawkTo;
