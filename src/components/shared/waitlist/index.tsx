import Script from "next/script";

const cssLoader = `
let head = document.getElementsByTagName('HEAD')[0];
let link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css';
head.appendChild(link);
`;

export function Waitlist() {
  return (
    <>
      <Script id="waitlist-css-loader" type="" dangerouslySetInnerHTML={{ __html: cssLoader }}></Script>

      <Script
        id="waitlist-js-loader"
        src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"
      ></Script>

      <div
        className="justify-center"
        id="getWaitlistContainer"
        data-waitlist_id="31048"
        data-widget_type="WIDGET_3"
      ></div>
    </>
  );
}
