"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Search, Menu, X, ChevronDown, Phone } from "lucide-react";

interface NavLink {
  name: string;
  href: string;
  active?: boolean;
  hasDropdown?: boolean;
}

const Nav: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const phoneNumber = "776913230";
  const displayPhone = "77 691 32 30";

  const navLinks: NavLink[] = [
    { name: "ACCUEIL", href: "#", active: true },
    { name: "À PROPOS", href: "#" },
    { name: "SERVICES & SOINS", href: "#", hasDropdown: true },
    { name: "ACTUALITÉS", href: "#" },
    { name: "CONTACT", href: "#" },
  ];

  // Détecte le scroll pour opacifier le menu
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Empêche le défilement du corps quand le menu mobile est ouvert
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <style>{`
        /* Media Queries pour la Responsivité */
        .nav-desktop-list {
          display: flex;
        }
        .mobile-toggle-btn {
          display: flex;
        }
        .phone-text-desktop {
          display: inline;
        }

        @media (min-width: 992px) {
          .nav-desktop-list {
            display: flex !important;
          }
          .mobile-toggle-btn {
            display: none !important;
          }
        }

        @media (max-width: 991px) {
          .nav-desktop-list {
            display: none !important;
          }
          .nav-container-custom {
            padding: 12px 20px !important;
          }
        }

        @media (max-width: 576px) {
          .nav-container-custom {
            padding: 10px 15px !important;
          }
          .phone-text-desktop {
            display: none !important;
          }
          .phone-button-custom {
            padding: 8px 10px !important;
            border-radius: 50% !important;
          }
          .logo-brand-text {
            font-size: 16px !important;
          }
          .logo-subtext-text {
            font-size: 8px !important;
          }
        }

        /* Hover & Interactivité */
        .nav-link-hover {
          position: relative;
        }
        .nav-link-hover::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: #E2BAA9;
          transition: width 0.3s ease;
        }
        .nav-link-hover:hover::after {
          width: 100%;
        }
      `}</style>

      <nav
        className="nav-container-custom"
        style={{
          ...styles.navContainer,
          ...(isScrolled ? styles.navContainerScrolled : {}),
        }}
      >
        {/* Logo */}
        <div style={styles.logoContainer}>
          <Image
            src="/logoss.jpeg"
            alt="Secret Beauty & Spa"
            width={48}
            height={48}
            style={styles.logoImage}
            priority
          />
          <div style={styles.logoTextContainer}>
            <span className="logo-brand-text" style={styles.logoBrand}>
              Secret Beauty & Spa
            </span>
            <span className="logo-subtext-text" style={styles.logoSubtext}>
              DU SOIN AU BESOIN
            </span>
          </div>
        </div>

        {/* Navigation Desktop */}
        <ul className="nav-desktop-list" style={styles.navList}>
          {navLinks.map((link, index) => (
            <li key={index} style={styles.navItem}>
              <a
                href={link.href}
                className="nav-link-hover"
                style={{
                  ...styles.navLink,
                  ...(link.active ? styles.navLinkActive : {}),
                }}
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown size={14} style={styles.dropdownIcon} />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Boutons d'action */}
        <div style={styles.iconGroup}>
          <a
            href={`tel:${phoneNumber}`}
            className="phone-button-custom"
            style={styles.phoneButton}
            aria-label="Appeler Secret Beauty & Spa"
          >
            <Phone size={15} color="#2A2421" />
            <span className="phone-text-desktop" style={styles.phoneText}>
              {displayPhone}
            </span>
          </a>

          <button style={styles.iconButton} aria-label="Rechercher">
            <Search size={19} strokeWidth={1.8} color="#ffffff" />
          </button>

          <button
            className="mobile-toggle-btn"
            style={styles.iconButton}
            aria-label="Ouvrir le menu"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={22} strokeWidth={1.8} color="#ffffff" />
          </button>
        </div>
      </nav>

      {/* Overlay Mobile */}
      {isMobileMenuOpen && (
        <div
          style={styles.mobileOverlay}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Drawer Mobile */}
      <div
        style={{
          ...styles.mobileDrawer,
          transform: isMobileMenuOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <div style={styles.mobileHeader}>
          <div style={styles.logoContainerMobile}>
            <Image
              src="/logoss.jpeg"
              alt="Secret Beauty & Spa"
              width={40}
              height={40}
              style={styles.logoImage}
            />
            <div style={styles.logoTextContainer}>
              <span style={styles.logoBrandMobile}>Secret Beauty & Spa</span>
              <span style={styles.logoSubtextMobile}>DU SOIN AU BESOIN</span>
            </div>
          </div>
          <button
            style={styles.closeButton}
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Fermer le menu"
          >
            <X size={22} color="#2A2421" />
          </button>
        </div>

        <ul style={styles.mobileNavList}>
          {navLinks.map((link, index) => (
            <li key={index} style={styles.mobileNavItem}>
              <a
                href={link.href}
                style={{
                  ...styles.mobileNavLink,
                  ...(link.active ? styles.mobileNavLinkActive : {}),
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={16} />}
              </a>
            </li>
          ))}
        </ul>

        {/* Bouton d'appel mobile */}
        <div style={styles.mobilePhoneContainer}>
          <a href={`tel:${phoneNumber}`} style={styles.mobilePhoneButton}>
            <Phone size={16} color="#ffffff" />
            <span>Appeler au {displayPhone}</span>
          </a>
        </div>
      </div>
    </>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  navContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 40px",
    color: "white",
    backgroundColor: "transparent",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    boxSizing: "border-box",
    zIndex: 100,
    transition: "all 0.3s ease-in-out",
  },
  navContainerScrolled: {
    backgroundColor: "rgba(28, 22, 21, 0.95)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    padding: "10px 40px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    cursor: "pointer",
  },
  logoContainerMobile: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  logoImage: {
    borderRadius: "50%",
    objectFit: "cover",
  },
  logoTextContainer: {
    display: "flex",
    flexDirection: "column",
    lineHeight: "1.2",
  },
  logoBrand: {
    fontFamily: "var(--font-playfair), 'Playfair Display', serif",
    fontSize: "19px",
    fontWeight: "600",
    color: "#FFFFFF",
    letterSpacing: "0.5px",
  },
  logoSubtext: {
    fontFamily: "sans-serif",
    fontSize: "9px",
    fontWeight: "500",
    color: "#E2BAA9",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
  },
  logoBrandMobile: {
    fontFamily: "var(--font-playfair), 'Playfair Display', serif",
    fontSize: "15px",
    fontWeight: "600",
    color: "#2A2421",
  },
  logoSubtextMobile: {
    fontFamily: "sans-serif",
    fontSize: "8px",
    fontWeight: "500",
    color: "#B88E7D",
    letterSpacing: "1px",
    textTransform: "uppercase",
  },
  navList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    gap: "28px",
    alignItems: "center",
  },
  navItem: {
    position: "relative",
  },
  navLink: {
    textDecoration: "none",
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: "12px",
    fontWeight: "500",
    letterSpacing: "1px",
    textTransform: "uppercase",
    display: "flex",
    alignItems: "center",
    gap: "4px",
    transition: "color 0.3s ease",
  },
  navLinkActive: {
    color: "#E2BAA9",
    fontWeight: "600",
  },
  dropdownIcon: {
    marginTop: "1px",
  },
  iconGroup: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
  },
  phoneButton: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    backgroundColor: "#E2BAA9",
    color: "#2A2421",
    padding: "8px 16px",
    borderRadius: "20px",
    textDecoration: "none",
    fontSize: "12px",
    fontWeight: "600",
    transition: "transform 0.2s ease, background-color 0.3s ease",
  },
  phoneText: {
    color: "#2A2421",
  },
  iconButton: {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "6px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    transition: "background-color 0.2s ease",
  },
  mobileOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(4px)",
    WebkitBackdropFilter: "blur(4px)",
    zIndex: 998,
  },
  mobileDrawer: {
    position: "fixed",
    top: 0,
    right: 0,
    width: "80%",
    maxWidth: "320px",
    height: "100vh",
    backgroundColor: "#FAF7F5",
    zIndex: 999,
    padding: "25px 20px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
    boxShadow: "-5px 0 25px rgba(0, 0, 0, 0.15)",
    overflowY: "auto",
  },
  mobileHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
    paddingBottom: "15px",
    borderBottom: "1px solid #EAE3DE",
  },
  closeButton: {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "4px",
    display: "flex",
    alignItems: "center",
  },
  mobileNavList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },
  mobileNavItem: {
    width: "100%",
  },
  mobileNavLink: {
    textDecoration: "none",
    color: "#2A2421",
    fontSize: "13px",
    fontWeight: "600",
    letterSpacing: "1px",
    textTransform: "uppercase",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "6px 0",
  },
  mobileNavLinkActive: {
    color: "#B88E7D",
  },
  mobilePhoneContainer: {
    marginTop: "auto",
    paddingTop: "25px",
  },
  mobilePhoneButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    backgroundColor: "#2A2421",
    color: "#FFFFFF",
    padding: "12px",
    borderRadius: "25px",
    textDecoration: "none",
    fontSize: "13px",
    fontWeight: "500",
    width: "100%",
    boxSizing: "border-box",
  },
};

export default Nav;
