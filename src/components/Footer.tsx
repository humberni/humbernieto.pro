export function Footer() {
  return (
    <footer className="p-8 mt-6 text-center">
      <h1 className="text-neutral-900 dark:text-neutral-400 text-sm transition">
        &copy; {new Date().getFullYear()}
      </h1>
    </footer>
  );
}
