export function Footer() {
    const year = new Date().getFullYear()
  
    return (
      <footer className="border-t border-border-subtle">
        <div className="mx-auto flex max-w-content flex-col items-center gap-3 px-6 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="font-mono text-xs text-ink-faint">
            © {year} Mateus Gomes. Built with React &amp; Tailwind CSS.
          </p>
  
          <p className="font-mono text-xs text-ink-faint">
            Designed &amp; developed by Mateus Gomes. All rights reserved.
          </p>
        </div>
      </footer>
    )
  }