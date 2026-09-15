"use client";

import React, { useState, useEffect } from "react";
import { Search, Menu, X, ChevronDown } from "lucide-react";

interface NavLink {
  name: string;
  href: string;
  active?: boolean;
  hasDropdown?: boolean;
}

const Nav: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const navLinks: NavLink[] = [
    { name: "ACCUEIL", href: "#", active: true },
    { name: "À PROPOS", href: "#" },
    { name: "SERVICES", href: "#", hasDropdown: true },
    { name: "ACTUALITÉS", href: "#", hasDropdown: true },
    { name: "CONTACT", href: "#" },
  ];

  // Détecte le scroll pour opacifier le menu
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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
        .nav-desktop-list {
          display: flex;
        }
        .mobile-toggle-btn {
          display: flex;
        }

        @media (min-width: 900px) {
          .nav-desktop-list {
            display: flex !important;
          }
          .mobile-toggle-btn {
            display: none !important;
          }
        }

        @media (max-width: 899px) {
          .nav-desktop-list {
            display: none !important;
          }
        }
      `}</style>

      <nav
        style={{
          ...styles.navContainer,
          ...(isScrolled ? styles.navContainerScrolled : {}),
        }}
      >
        {/* Logo */}
        <div style={styles.logoContainer}>
          <span style={styles.logoBrand}>Ndiaye</span>
          <span style={styles.logoSubtext}>Fleuriste Family</span>
        </div>

        {/* Navigation Desktop */}
        <ul className="nav-desktop-list" style={styles.navList}>
          {navLinks.map((link, index) => (
            <li key={index} style={styles.navItem}>
              <a
                href={link.href}
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
          <button style={styles.iconButton} aria-label="Rechercher">
            <Search size={20} strokeWidth={1.5} />
          </button>

          <button
            className="mobile-toggle-btn"
            style={styles.iconButton}
            aria-label="Ouvrir le menu"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={22} strokeWidth={1.5} />
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
          <div style={styles.logoContainer}>
            <span style={styles.logoBrand}>Ndiaye</span>
            <span style={styles.logoSubtext}>Fleuriste Family</span>
          </div>
          <button
            style={styles.closeButton}
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Fermer le menu"
          >
            <X size={24} color="#111111" />
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
      </div>
    </>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  navContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    color: "white",
    backgroundColor: "transparent",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    boxSizing: "border-box",
    zIndex: 100,
    transition: "background-color 0.3s ease, padding 0.3s ease",
  },
  navContainerScrolled: {
    backgroundColor: "rgba(17, 17, 17, 0.95)",
    backdropFilter: "blur(8px)",
    padding: "15px 40px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
  },
  logoContainer: {
    display: "flex",
    flexDirection: "column",
    lineHeight: "1.1",
    cursor: "pointer",
  },
  logoBrand: {
    fontFamily: "'Playball', 'Great Vibes', cursive",
    fontSize: "28px",
    fontWeight: "normal",
    color: "#FFFFFF",
  },
  logoSubtext: {
    fontFamily: "'Inter', sans-serif",
    fontSize: "12px",
    fontWeight: "600",
    color: "#72B842",
    letterSpacing: "0.5px",
    marginTop: "-4px",
  },
  navList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    gap: "30px",
    alignItems: "center",
  },
  navItem: {
    position: "relative",
  },
  navLink: {
    textDecoration: "none",
    color: "rgba(255, 255, 255, 0.85)",
    fontSize: "13px",
    fontWeight: "500",
    letterSpacing: "1px",
    textTransform: "uppercase",
    display: "flex",
    alignItems: "center",
    gap: "4px",
    transition: "color 0.3s ease",
  },
  navLinkActive: {
    color: "#72B842",
    fontWeight: "600",
  },
  dropdownIcon: {
    marginTop: "1px",
  },
  iconGroup: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
  },
  iconButton: {
    background: "none",
    border: "none",
    color: "white",
    cursor: "pointer",
    padding: "4px",
    opacity: 0.9,
    display: "flex",
    alignItems: "center",
  },
  mobileOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    backdropFilter: "blur(3px)",
    zIndex: 998,
  },
  mobileDrawer: {
    position: "fixed",
    top: 0,
    right: 0,
    width: "280px",
    height: "100vh",
    backgroundColor: "#ffffff",
    zIndex: 999,
    padding: "25px 20px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.3s ease-in-out",
    boxShadow: "-5px 0 25px rgba(0, 0, 0, 0.2)",
  },
  mobileHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "35px",
    paddingBottom: "15px",
    borderBottom: "1px solid #eeeeee",
  },
  closeButton: {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "4px",
  },
  mobileNavList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  mobileNavItem: {
    width: "100%",
  },
  mobileNavLink: {
    textDecoration: "none",
    color: "#333333",
    fontSize: "14px",
    fontWeight: "600",
    letterSpacing: "1px",
    textTransform: "uppercase",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  mobileNavLinkActive: {
    color: "#72B842",
  },
};

export default Nav;
