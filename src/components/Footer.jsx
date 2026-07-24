import { profile } from "../data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container-px mx-auto max-w-7xl">
        <div className="py-8 border-t border-hairline flex items-center justify-center">
          <p className="font-mono text-xs text-ink-mute">
            © {year} <span className="text-signal">Abdul Rehman</span>. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
