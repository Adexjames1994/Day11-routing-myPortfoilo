// import { useEffect } from "react";

// const useTawk = () => {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://embed.tawk.to/69e22037dd5bb11c34fcb64d/1jmdkrmsn";
//     script.async = true;
//     script.charset = "UTF-8";
//     script.setAttribute("crossorigin", "*");

//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);
// };

// export default useTawk;

import { useEffect } from "react";

const useTawk = (enabled) => {
  useEffect(() => {
    if (!enabled) return; // ✅ control here

    var Tawk_API = window.Tawk_API || {};
    var Tawk_LoadStart = new Date();

    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/69e22037dd5bb11c34fcb64d/1jmdkrmsn";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.body.appendChild(script);

    script.onload = () => {
      if (window.Tawk_API) {
        // 🎨 Position
        window.Tawk_API.customStyle = {
          visibility: {
            desktop: { position: "br", xOffset: 20, yOffset: 20 },
            mobile: { position: "br", xOffset: 10, yOffset: 10 },
          },
        };

        // 💬 Auto open after 5s
        setTimeout(() => {
          window.Tawk_API.maximize();
        }, 5000);
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [enabled]);
};

export default useTawk;