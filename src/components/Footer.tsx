export default function Footer() {
  return (
    <footer className="footer bg-neutral text-neutral-content p-10 mt-16">
      <aside>
        <h2 className="text-2xl font-bold">
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
            DevStack
          </span>
        </h2>

        <p>
          Build your perfect developer stack.
          <br />
          Explore. Choose. Build.
        </p>
      </aside>

      <nav>
        <h6 className="footer-title">Product</h6>
        <a className="link link-hover">Technologies</a>
        <a className="link link-hover">Your Stack</a>
      </nav>

      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About</a>
        <a className="link link-hover">Contact</a>
      </nav>

      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Privacy</a>
        <a className="link link-hover">Terms</a>
      </nav>
    </footer>
  );
}
