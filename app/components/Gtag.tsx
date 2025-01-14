import Script from "next/script";

export function GTag() {
	const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

	if (!GA_MEASUREMENT_ID) {
		return null;
	}

	return (
		<>
			<Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
			<Script id="google-analytics">
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', ${GA_MEASUREMENT_ID});
        `}
			</Script>
		</>
	);
}
