export const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 backdrop-blur-sm py-8 px-4 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-4">
        <p>2025 WalletUp</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary-400 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};
