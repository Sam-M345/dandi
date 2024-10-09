import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="text-center mb-8">
        <p className="text-sm bg-gray-100 rounded-full px-3 py-1 inline-block mb-4">
          Get started by editing src/app/page.js
        </p>
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl">
        <Card
          title="Docs →"
          description="Find in-depth information about Next.js features and API."
          link="https://nextjs.org/docs"
        />
        <Card
          title="Learn →"
          description="Learn about Next.js in an interactive course with quizzes!"
          link="https://nextjs.org/learn"
        />
        <Card
          title="Templates →"
          description="Explore starter templates for Next.js."
          link="https://vercel.com/templates?framework=next.js"
        />
        <Card
          title="Manage API Keys →"
          description="Access the dashboard to manage your API keys."
          link="/dashboards"
          isButton={true}
        />
      </div>

      <div className="mt-10">
        <Link
          href="https://vercel.com/new"
          className="text-blue-500 hover:text-blue-600 transition-colors"
        >
          Deploy →
        </Link>
      </div>
    </div>
  );
}

function Card({ title, description, link, isButton }) {
  return (
    <Link
      href={link}
      className={`block p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow ${
        isButton ? 'bg-white hover:bg-gray-50' : 'bg-white'
      }`}
    >
      <h2 className={`text-xl font-semibold mb-2 ${isButton ? 'text-blue-500' : 'text-black'}`}>{title}</h2>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
}
