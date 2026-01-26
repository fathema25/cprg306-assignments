import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        CPRG 306: Web Development 2 - Assignments
      </h1>

      <p className="mb-2">
        <Link href="/week-2" className="text-blue-600 underline">
          Go to Week 2 Assignment
        </Link>
      </p>

      <p>
        <Link href="/week-3" className="text-blue-600 underline">
          Go to Week 3 Assignment
        </Link>
      </p>
    </main>
  );
}
