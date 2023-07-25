// import '@/styles/globals.css'
import type { AppProps } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import store from "../commons/library/redux/store";
import Layout from "@/components/layout";
import "../styles/myGlobal.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
