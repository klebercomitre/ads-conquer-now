import { AaLanding } from "@/components/AaLanding";
import { useContent } from "@/contexts/ContentContext";
import { useEffect } from "react";

const Index = () => {
  const { content } = useContent();

  useEffect(() => {
    // Google Tag Manager
    if (content.gtmId && content.gtmId !== "GTM-XXXXXXX") {
      const gtmScript = document.createElement("script");
      gtmScript.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${content.gtmId}');
      `;
      document.head.appendChild(gtmScript);
      return () => { document.head.removeChild(gtmScript); };
    }
  }, [content.gtmId]);

  useEffect(() => {
    // Meta Pixel
    if (content.metaPixelId && content.metaPixelId !== "000000000000000") {
      const metaScript = document.createElement("script");
      metaScript.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${content.metaPixelId}');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(metaScript);
      return () => { document.head.removeChild(metaScript); };
    }
  }, [content.metaPixelId]);

  return <AaLanding />;
};

export default Index;
