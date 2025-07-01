import { mySocials } from "../constants";

const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-center gap-5 pb-4 text-sm text-neutral-400 c-space mt-10">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-4">
        {mySocials.map((social, index) => (
          <a href={social.href} key={index}>
            <img
              src={social.icon}
              className="w-5 h-5 transition-all duration-300 hover:scale-110 social-icon"
              alt={social.name}
            />
          </a>
        ))}
      </div>
      <div>|</div>
      <p>© 2025 Castelli. All rights reserved.</p>
    </section>
  );
};

export default Footer;
