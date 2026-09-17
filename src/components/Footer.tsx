"use client";

import React from "react";

const Footer: React.FC = () => {
  const footerLinks = [
    { name: "À Propos", href: "#" },
    { name: "Nos Prestations", href: "#" },
    { name: "Tarifs", href: "#" },
    { name: "Avis Clients", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const socialLinks = [
    {
      label: "Facebook",
      href: "#",
      icon: (
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      ),
    },
    {
      label: "Twitter",
      href: "#",
      icon: (
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "#",
      icon: (
        <svg
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      label: "Youtube",
      href: "#",
      icon: (
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  const bgImage = "/footer.png";

  return (
    <footer
      className="footer-section"
      style={{
        ...styles.footer,
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <style>{`
        /* Media Queries pour le Responsive */
        @media (max-width: 900px) {
          .footer-top-row {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            gap: 25px !important;
          }
          .footer-nav-links {
            flex-wrap: wrap !important;
            justify-content: center !important;
            gap: 20px !important;
          }
        }

        @media (max-width: 600px) {
          .footer-section {
            padding: 40px 15px 25px 15px !important;
          }
          .footer-nav-links {
            flex-direction: column !important;
            gap: 15px !important;
          }
          .footer-bottom-row {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            gap: 15px !important;
          }
          .footer-legal-links {
            flex-direction: column !important;
            align-items: center !important;
            gap: 10px !important;
          }
        }
      `}</style>

      <div style={styles.overlay} />

      <div style={styles.container}>
        <div className="footer-top-row" style={styles.topRow}>
          <div style={styles.logo}>
            Secret Beauty <span style={styles.logoSub}>& Spa</span>
          </div>

          <nav className="footer-nav-links" style={styles.navLinks}>
            {footerLinks.map((link, index) => (
              <a key={index} href={link.href} style={styles.navLink}>
                {link.name}
              </a>
            ))}
          </nav>

          <div style={styles.socialGroup}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                style={styles.socialIcon}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div style={styles.divider} />

        <div className="footer-bottom-row" style={styles.bottomRow}>
          <div style={styles.copyright}>
            © {new Date().getFullYear()} Secret Beauty & Spa. Tous droits
            réservés.
          </div>

          <div className="footer-legal-links" style={styles.legalLinks}>
            <a href="#" style={styles.legalLink}>
              Conditions Générales
            </a>
            <a href="#" style={styles.legalLink}>
              Politique de Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  footer: {
    position: "relative",
    width: "100%",
    backgroundColor: "#1A1513",
    backgroundSize: "cover",
    backgroundPosition: "center left",
    color: "#ffffff",
    padding: "60px 20px 30px 20px",
    boxSizing: "border-box",
    fontFamily: "sans-serif",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(26, 21, 19, 0.85)",
    zIndex: 1,
  },
  container: {
    position: "relative",
    zIndex: 2,
    maxWidth: "1200px",
    margin: "0 auto",
  },
  topRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "40px",
    flexWrap: "wrap",
    gap: "20px",
  },
  logo: {
    fontFamily: "var(--font-playfair), 'Playfair Display', serif",
    fontSize: "28px",
    color: "#ffffff",
    fontWeight: "normal",
    letterSpacing: "0.5px",
  },
  logoSub: {
    color: "#B88E7D",
  },
  navLinks: {
    display: "flex",
    gap: "30px",
    alignItems: "center",
  },
  navLink: {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "400",
    transition: "color 0.2s ease",
  },
  socialGroup: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },
  socialIcon: {
    color: "#ffffff",
    opacity: 0.85,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    transition: "opacity 0.2s ease, color 0.2s ease",
  },
  divider: {
    height: "1px",
    backgroundColor: "rgba(255, 255, 255, 0.12)",
    marginBottom: "25px",
  },
  bottomRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "12px",
    color: "rgba(255, 255, 255, 0.6)",
    flexWrap: "wrap",
    gap: "15px",
  },
  copyright: {
    fontSize: "12px",
    color: "rgba(255, 255, 255, 0.7)",
  },
  legalLinks: {
    display: "flex",
    gap: "20px",
  },
  legalLink: {
    color: "rgba(255, 255, 255, 0.7)",
    textDecoration: "none",
    fontSize: "12px",
  },
};

export default Footer;
