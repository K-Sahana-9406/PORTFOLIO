export default function Footer() {
  return (
    <footer className="border-t border-blue-main/20 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-6 text-center">
        <p className="text-sm text-text-muted">
          Built with React & Tailwind •  &copy;  {new Date().getFullYear()} Sahana Kathiresan
        </p>
      </div>
    </footer>
  );
}
