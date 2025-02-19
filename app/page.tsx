"use client"; // Mark as a Client Component

import Image from "next/image";
import Head from "next/head";
import { useState } from "react";
import { Roboto } from "next/font/google";

// Configure the Roboto font
const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);

    try {
      const response = await fetch("https://formspree.io/f/xpwqkojq", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setMessage("Thank you for joining the waitlist!");
        setName("");
        setEmail("");
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (_error) {
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800">
      <Head>
        <title>GoDeeper</title>
        <meta name="description" content="Gamify scripture memory" />
      </Head>
      {/* Header */}
      <header className="w-full text-center py-8">
        <Image src="/appicon.png" alt="App Icon" width={100} height={100} />
        <h1 className={`text-4xl font-bold mt-4 ${roboto.className}`}>
          <span style={{ color: "#000000" }}>Go</span>
          <span style={{ color: "#004d00" }}> Deeper</span>
        </h1>
        <p className={`text-lg mt-2 ${roboto.className}`}>
          Gamify scripture memory
        </p>
      </header>
      {/* Main Content */}
      <main className="flex flex-col items-center gap-8 px-4">
        <Image
          src="/vv.png"
          alt="App Promo in Action"
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
        <p className={`text-center text-lg max-w-prose ${roboto.className}`}>
          Gamify scripture memory and make scripture memory easy with Verse
          Vault. Flashcard, Drag and drop, type it out, and a voice mode.
        </p>
        <ul className={`text-left text-lg max-w-prose ${roboto.className}`}>
          <li>- Strengthen your faith</li>
          <
