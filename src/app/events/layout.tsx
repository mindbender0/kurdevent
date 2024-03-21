import { ReactNode } from 'react';

export default function EventsLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      <div className="h-full border-2 border-blue-600">{children}</div>
    </section>
  );
}
