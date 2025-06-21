import styles from "@/styles/ContactCode.module.css";

const contactItems = [
  {
    social: "website",
    link: "hasibul.islam.1872@gmail.com",
    href: "https://hasibul.islam.1872@gmail.com",
  },
  {
    social: "email",
    link: "hasibul.islam.1872@gmail.com",
    href: "mailto:hasibul.islam.1872@gmail.com",
  },
  {
    social: "phone",
    link: "+8801845588514",
    href: "tel:+8801845588514",
  },
  {
    social: "whatsapp",
    link: "+8801748326000",
    href: "https://wa.me/8801748326000",
  },
  {
    social: "facebook",
    link: "nayeem.islam.756",
    href: "https://www.facebook.com/nayeem.islam.756",
  },
  {
    social: "github",
    link: "Nayeem1872",
    href: "https://github.com/Nayeem1872",
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
