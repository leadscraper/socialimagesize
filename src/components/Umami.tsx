import Script from "next/script"

// Umami 平台
export const Umami = () => {
  if (process.env.NODE_ENV !== "production") {
    return null
  }
  
  return <>
    <Script async src="https://track-sepia.vercel.app/script.js" data-website-id="bf2f8001-5e63-479d-8958-512930f485de"></Script>
  </>
}