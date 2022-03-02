import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import Navbar from "../components/Navbar";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout pageTitle="Home Page">
      <p>Ini Halaman Home</p>
    </Layout>
  );
}
