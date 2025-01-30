import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* Header */}
      <header className="w-full text-center py-8">
        <Image src="/appicon.png" alt="App Icon" width={100} height={100} />
        <h1 className="text-4xl font-bold mt-4" style={{ fontFamily: 'Roboto, sans-serif', color: '#006400' }}>Go Deeper</h1>
        <p className="text-lg mt-2" style={{ fontFamily: 'Roboto, sans-serif' }}>Lock in the scripture</p>
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
        <p className="text-center text-lg max-w-prose" style={{ fontFamily: 'Roboto, sans-serif' }}>
          Gamify scripture memory and make scripture memory easy with Verse Vault.
          Flashcard, Drag and drop, type it out, and a voice mode.
        </p>
        <ul className="text-left text-lg max-w-prose" style={{ fontFamily: 'Roboto, sans-serif' }}>
          <li>Strengthen your faith</li>
          <li>Deepen your understanding of scripture</li>
          <li>Enhance your spiritual growth</li>
          <li>Improve your memory skills</li>
        </ul>
        <p className="text-center text-lg max-w-prose" style={{ fontFamily: 'Roboto, sans-serif' }}>
          Features ESV and KJV translations. Includes commentary along with scripture.
        </p>
        {/* App Store Buttons */}
        <div className="flex gap-4 mt-4">
          <a
            href="https://apps.apple.com/us/app/rejoicify-gospel-music/id6447961615"
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
            href="https://play.google.com/store/apps/details?id=org.rejoicemusic.app"
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
        <p className="text-sm" style={{ fontFamily: 'Roboto, sans-serif' }}>
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
