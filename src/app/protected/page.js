'use client';
import { useRouter } from 'next/navigation';

export default function ProtectedPage() {
  const router = useRouter();

  const handleReturn = () => {
    router.push('/playground');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Protected Page</h1>
      <p className="mb-4">This is a protected page that can only be accessed with a valid API key.</p>
      <button
        onClick={handleReturn}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Return to API Playground
      </button>
    </div>
  );
}
