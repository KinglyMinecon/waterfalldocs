if (typeof window !== "undefined") {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = process.env.CRISP_SITE_ID;
  
    (function () {
      const d = document;
      const s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = true;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();
  }
  