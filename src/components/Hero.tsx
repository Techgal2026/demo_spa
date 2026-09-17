"use client";

import React from "react";

const Hero: React.FC = () => {
  const heroBackgroundImage = "/hero.png";
  const phoneNumber = "776913230";
  const displayPhone = "+221 77 691 32 30";

  return (
    <>
      <style>{`
        /* Styles Responsive Media Queries */
        @media (max-width: 1024px) {
          .hero-title {
            font-size: 46px !important;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            min-height: 100vh !important;
            height: auto !important;
            padding: 120px 0 60px 0 !important;
          }
          .hero-content-wrapper {
            padding: 0 20px !important;
          }
          .hero-title {
            font-size: 36px !important;
            margin-bottom: 20px !important;
          }
          .hero-description {
            font-size: 15px !important;
            margin-bottom: 30px !important;
          }
          .hero-info-row {
            gap: 25px !important;
            margin-bottom: 30px !important;
          }
          .hero-button {
            width: 100% !important;
            text-align: center !important;
            padding: 16px 20px !important;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 28px !important;
            line-height: 1.3 !important;
          }
          .hero-subtitle {
            font-size: 13px !important;
          }
          .hero-info-row {
            flex-direction: column !important;
            gap: 15px !important;
          }
        }
      `}</style>

      <section
        className="hero-section"
        style={{
          ...styles.heroSection,
          backgroundImage: `url(${heroBackgroundImage})`,
        }}
      >
        {/* Superposition sombre (Overlay) */}
        <div style={styles.heroOverlay}></div>

        {/* Conteneur de contenu aligné à gauche */}
        <div className="hero-content-wrapper" style={styles.heroContentWrapper}>
          <div style={styles.heroContent}>
            {/* Sous-titre */}
            <span className="hero-subtitle" style={styles.subtitle}>
              Secret Beauty & Spa • Du Soin au Besoin
            </span>

            {/* Titre principal */}
            <h1 className="hero-title" style={styles.title}>
              Révélez Votre Beauté & Sublimez Votre Bien-Être
            </h1>

            {/* Description */}
            <p className="hero-description" style={styles.description}>
              Offrez-vous un moment d'exception dédié à la relaxation et aux
              soins du corps. Nos spécialistes vous accompagnent avec des
              prestations sur-mesure pour régénérer votre peau et apaiser votre
              esprit.
            </p>

            {/* Informations détaillées */}
            <div className="hero-info-row" style={styles.infoRow}>
              <div style={styles.infoItem}>
                <span style={styles.infoLabel}>Localisation</span>
                <span style={styles.infoValue}>Dakar, Sénégal</span>
              </div>
              <div style={styles.infoItem}>
                <span style={styles.infoLabel}>Réservation / Contact</span>
                <a href={`tel:${phoneNumber}`} style={styles.infoValueLink}>
                  {displayPhone}
                </a>
              </div>
            </div>

            {/* Bouton d'action */}
            <a
              href={`https://wa.me/221${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button"
              style={styles.getStartedButton}
            >
              RÉSERVER UN SOIN
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

// Styles en ligne principaux
const styles: { [key: string]: React.CSSProperties } = {
  heroSection: {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    color: "white",
    fontFamily: "var(--font-playfair), 'Playfair Display', serif",
    boxSizing: "border-box",
  },
  heroOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "radial-gradient(circle at left, rgba(28,22,21,0.85) 0%, rgba(28,22,21,0.4) 100%)",
    backgroundColor: "rgba(28, 22, 21, 0.5)",
    zIndex: 1,
  },
  heroContentWrapper: {
    maxWidth: "1200px",
    width: "100%",
    margin: "0 auto",
    padding: "0 40px",
    zIndex: 2,
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "flex-start",
  },
  heroContent: {
    maxWidth: "600px",
    width: "100%",
    textAlign: "left",
  },
  subtitle: {
    color: "#E2BAA9", // Vieux rose doux du logo
    fontSize: "15px",
    fontWeight: "600",
    letterSpacing: "1.5px",
    marginBottom: "12px",
    display: "inline-block",
    textTransform: "uppercase",
  },
  title: {
    fontSize: "58px",
    fontWeight: "normal",
    lineHeight: "1.2",
    margin: "0 0 25px 0",
  },
  description: {
    color: "rgba(255, 255, 255, 0.88)",
    fontSize: "16px",
    lineHeight: "1.7",
    maxWidth: "500px",
    margin: "0 0 40px 0",
    fontFamily: "sans-serif",
  },
  infoRow: {
    display: "flex",
    gap: "60px",
    marginBottom: "40px",
    flexWrap: "wrap",
  },
  infoItem: {
    display: "flex",
    flexDirection: "column",
  },
  infoLabel: {
    color: "#E2BAA9", // Vieux rose doux du logo
    fontSize: "13px",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    marginBottom: "5px",
    fontFamily: "sans-serif",
  },
  infoValue: {
    fontSize: "14px",
    color: "rgba(255, 255, 255, 0.95)",
    fontFamily: "sans-serif",
  },
  infoValueLink: {
    fontSize: "14px",
    color: "rgba(255, 255, 255, 0.95)",
    fontFamily: "sans-serif",
    textDecoration: "none",
  },
  getStartedButton: {
    display: "inline-block",
    backgroundColor: "#E2BAA9", // Vieux rose
    color: "#2A2421",
    border: "none",
    padding: "16px 36px",
    fontSize: "12px",
    fontWeight: "700",
    letterSpacing: "1.5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.2s ease",
    borderRadius: "25px",
    textDecoration: "none",
  },
};

export default Hero;
