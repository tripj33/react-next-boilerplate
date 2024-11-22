import "../styles/globals.css";  // This is where shadcn-ui styles should be imported
// or if you're not using path aliases:
// import "../styles/globals.css";

import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import ButtonBlok from '@/components/bloks/Button'

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  button: ButtonBlok,
};

storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components,
  apiOptions: {
    region: "us",
  },
});

function MyApp({ Component, pageProps }) {
  const { key, ...restProps } = pageProps;
  
  return (
    <Component 
      key={key}
      {...restProps} 
    />
  );
}

export default MyApp;