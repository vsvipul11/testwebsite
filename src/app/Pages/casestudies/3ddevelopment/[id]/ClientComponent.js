// This is a Server Component (no "use client" directive)
import ClientComponent from './ClientComponent';

// This is for the static export
export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' }
  ];
}

export default function Page({ params }) {
  return <ClientComponent params={params} />;
}