import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 1,
    });
  };

  return (
    <footer className="footer bg-slate-200  text-base-300 p-10">
      <aside>
        <img className="md:w-[60px] w-1/4" src="/c.png" alt="" />
        <p>
          <span className="text-xl font-semibold italic">
            Camp<span className=" text-blue-700">Quest</span> Supplies
          </span>
          <br />
          Providing reliable supplies since 1992
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Goods</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <nav>
        <ArrowUpCircleIcon
          className="btn bg-transparent border-none rounded-full  text-slate-500 w-16 tooltip"
          onClick={scrollToTop}
        />
      </nav>
    </footer>
  );
};

export default Footer;
