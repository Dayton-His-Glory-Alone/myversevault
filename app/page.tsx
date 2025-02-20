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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
    } catch {
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
        {/* Video Section */}
        <div className="w-full max-w-2xl">
          <video controls className="rounded-lg shadow-lg w-full">
            <source src="/demo2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <p className={`text-center text-lg max-w-prose ${roboto.className}`}>
          Gamify scripture memory and make scripture memory easy with Verse
          Vault. Flashcard, Drag and drop, type it out, and a voice mode.
        </p>
        <ul className={`text-left text-lg max-w-prose ${roboto.className}`}>
          <li>- Strengthen your faith</li>
          <li>- Deepen your understanding of scripture</li>
          <li>- Enhance your spiritual growth</li>
          <li>- Improve your memory skills</li>
        </ul>
        <p className={`text-center text-lg max-w-prose ${roboto.className}`}>
          Features ESV and KJV translations along with commentary.
        </p>
        <h1 className={`text-4xl font-bold mt-4 ${roboto.className}`} style={{ color: "#006400" }}>
          Start your journey now...
        </h1>

        {/* Waitlist Form */}
        <div className="w-full max-w-md mt-4">
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Join Waitlist
              </button>
            </div>
            {message && <p className="text-center mt-4 text-green-600">{message}</p>}
          </form>
        </div>

        {/* Coming Soon Text */}
        <h2 className={`text-2xl font-bold mt-4 ${roboto.className}`} style={{ color: "#006400" }}>
          Coming Soon...
        </h2>

        {/* App Store Buttons */}
        <div className="flex gap-4 mt-4">
          <a
            href="https://apps.apple.com/us/app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/apple.png"
              alt="Download on the App Store"
              width={150}
              height={50}
              className="hover:scale-105 transition-transform"
            />
          </a>
          <a
            href="https://play.google.com/store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/google.png"
              alt="Get it on Google Play"
              width={150}
              height={50}
              className="hover:scale-105 transition-transform"
            />
          </a>
        </div>
      </main>
      {/* Footer */}
      <footer className="w-full text-center py-8 mt-8 bg-gray-100">
        <p className={`text-sm ${roboto.className}`}>
          Explore the web version at{" "}
          <a
            href="https://versevault.app"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            versevault.app
          </a>
        </p>
      </footer>
    </div>
  );
}
