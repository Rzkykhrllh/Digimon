import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import Navbar from "../components/Navbar";
import Layout from "../components/Layout";

// Lib
import { useI18n } from './../lib/i18n/index';

export default function Home() {
  const i18n = useI18n();

  const wording = i18n(`common.i`);

  return (
    <Layout pageTitle="Home Page">
      <p>Ini Halaman Home</p>
      <p>Wording: {wording}</p>
    </Layout>
  );
}
