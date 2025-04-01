// app/about/page.tsx
export default function About() {
    return (
      <section className="max-w-2xl mx-auto my-8">
        <h1 className="text-3xl font-bold mb-6">About Weather App</h1>
        <article className="prose lg:prose-xl">
          <p>
            This weather application is built with Next.js and uses the Visual Crossing Weather API
            to provide accurate and up-to-date weather information for locations worldwide.
          </p>
          <p>
            The application is designed to demonstrate how to securely use API keys in a Next.js
            application without exposing them to the client.
          </p>
          <h2 className="text-2xl font-bold mt-6 mb-4">Features</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Current weather conditions</li>
            <li>Multi-day forecast</li>
            <li>Temperature, humidity, wind, and pressure data</li>
            <li>Responsive design for all devices</li>
          </ul>
        </article>
      </section>
    );
  }