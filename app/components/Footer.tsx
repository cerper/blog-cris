export default function Footer() {
  return (
    <footer className="footer mt-5 flex flex-col justify-center items-center py-4 p-6 bg-neutral text-neutral-content">
      <nav>
        <h6 className="footer-title">Company</h6>
        <a
          className="link link-hover "
          href="https://tailwindcss.com/docs/background-size"
        >
          About us
        </a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <div className="flex justify-end items-end">
        todos los derechos reseverdos de la Dr Crisariana Gamez
      </div>
    </footer>
  )
}
