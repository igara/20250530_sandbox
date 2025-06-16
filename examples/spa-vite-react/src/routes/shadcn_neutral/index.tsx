import {
  Button,
} from 'shadcn_neutral';
import './index.css';
import {
  createFileRoute,
  Link,
} from '@tanstack/react-router';

function Home() {
  return (
    <main className={`
      row-start-2 flex flex-col items-center gap-[32px]
      sm:items-start
    `}>
      <Link to="/" className='underline'>
        TOP
      </Link>

      <h1 className="text-3xl font-bold tracking-tight">
        Shadcn Neutral
      </h1>

      <div>
        <h2 className="text-2xl font-semibold tracking-tight">
          Button
        </h2>

        <div>
          <Button variant="default">Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>
    </main>
  );
}

export const Route = createFileRoute('/shadcn_neutral/')({
  component: Home,
});
