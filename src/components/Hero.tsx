"use client";

import React from "react";

const Hero: React.FC = () => {
  const heroBackgroundImage = "/h3.jpg";

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
            font-size: 14px !important;
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
              Ndiaye Fleuriste Family
            </span>

            {/* Titre principal */}
            <h1 className="hero-title" style={styles.title}>
              Sublimez Vos Moments Avec Nos Fleurs Fraîches
            </h1>

            {/* Description */}
            <p className="hero-description" style={styles.description}>
              Artisan fleuriste passionné, nous composons des bouquets uniques
              et sur-mesure pour célébrer tous vos événements. Découvrez la
              fraîcheur et la beauté de nos créations florales faites avec
              amour.
            </p>

            {/* Informations détaillées */}
            <div className="hero-info-row" style={styles.infoRow}>
              <div style={styles.infoItem}>
                <span style={styles.infoLabel}>Localisation</span>
                <span style={styles.infoValue}>Dakar, Sénégal</span>
              </div>
              <div style={styles.infoItem}>
                <span style={styles.infoLabel}>Contact Direct</span>
                <span style={styles.infoValue}>+221 77 158 60 51</span>
              </div>
            </div>

            {/* Bouton d'action */}
            <button className="hero-button" style={styles.getStartedButton}>
              COMMANDER UN BOUQUET
            </button>
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
      "radial-gradient(circle at left, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 100%)",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
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
    color: "#72B842", // Vert du logo
    fontSize: "16px",
    fontWeight: "600",
    letterSpacing: "1px",
    marginBottom: "10px",
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
    color: "rgba(255, 255, 255, 0.85)",
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
    color: "#72B842", // Vert du logo
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
  getStartedButton: {
    backgroundColor: "#72B842", // Vert du logo
    color: "white",
    border: "none",
    padding: "16px 36px",
    fontSize: "12px",
    fontWeight: "600",
    letterSpacing: "1.5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.2s ease",
    borderRadius: "2px",
  },
};

export default Hero;
