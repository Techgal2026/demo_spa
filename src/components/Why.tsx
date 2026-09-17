"use client";

import React from "react";

interface ProgressItem {
  label: string;
  percentage: number;
}

const Why: React.FC = () => {
  const skills: ProgressItem[] = [
    { label: "Clients Satisfaits", percentage: 98 },
    { label: "Qualité des Soins & Produits Bio", percentage: 100 },
    { label: "Soins Sur-Mesure Réussis", percentage: 95 },
    { label: "Respect des Rendez-vous & Ponctualité", percentage: 96 },
  ];

  const bgImage = "/hero.png";

  return (
    <>
      <style>{`
        /* Media Queries pour la réactivité */
        @media (max-width: 1024px) {
          .why-content-column {
            max-width: 100% !important;
            flex: 1 !important;
          }
          .why-title {
            font-size: 34px !important;
          }
        }

        @media (max-width: 768px) {
          .why-section {
            padding: 60px 20px !important;
            min-height: auto !important;
          }
          .why-overlay {
            background: rgba(42, 36, 33, 0.85) !important; /* Renforcement du voile sur mobile */
          }
          .why-title {
            font-size: 28px !important;
            margin-bottom: 18px !important;
          }
          .why-description {
            font-size: 14px !important;
            margin-bottom: 30px !important;
          }
          .why-content-column {
            margin-left: 0 !important;
          }
        }

        @media (max-width: 480px) {
          .why-title {
            font-size: 24px !important;
            line-height: 1.3 !important;
          }
          .why-subtitle {
            font-size: 13px !important;
          }
        }
      `}</style>

      <section
        className="why-section"
        style={{
          ...styles.section,
          backgroundImage: `url(${bgImage})`,
        }}
      >
        {/* Superposition pour garantir la lisibilité des textes */}
        <div className="why-overlay" style={styles.overlay} />

        <div style={styles.container}>
          {/* Espaceur à gauche pour laisser apparaître l'image de fond */}
          <div style={styles.leftSpace} />

          {/* Bloc de contenu à droite */}
          <div className="why-content-column" style={styles.contentColumn}>
            <span className="why-subtitle" style={styles.subtitle}>
              Pourquoi Nous Choisir
            </span>

            <h2 className="why-title" style={styles.title}>
              L'Excellence du Soin au Service de Votre Bien-Être
            </h2>

            <p className="why-description" style={styles.description}>
              Chez Secret Beauty & Spa, nous plaçons la satisfaction et le
              confort de nos clients au centre de nos attentions. Grâce à nos
              produits haut de gamme et notre savoir-faire unique, nous vous
              garantissons une expérience apaisante et revitalisante à chaque
              visite.
            </p>

            {/* Liste des barres de progression */}
            <div style={styles.progressList}>
              {skills.map((item, index) => (
                <div key={index} style={styles.progressItem}>
                  <div style={styles.progressHeader}>
                    <span style={styles.progressLabel}>{item.label}</span>
                    <span style={styles.progressPercentage}>
                      {item.percentage}%
                    </span>
                  </div>

                  {/* Barre de fond */}
                  <div style={styles.progressBarBg}>
                    {/* Barre de progression Rose/Nude Secret Beauty */}
                    <div
                      style={{
                        ...styles.progressBarFill,
                        width: `${item.percentage}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Styles en ligne
const styles: { [key: string]: React.CSSProperties } = {
  section: {
    position: "relative",
    width: "100%",
    minHeight: "600px",
    backgroundSize: "cover",
    backgroundPosition: "center left",
    backgroundColor: "#2A2421",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    padding: "80px 20px",
    boxSizing: "border-box",
    fontFamily: "var(--font-playfair), 'Playfair Display', serif",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(42, 36, 33, 0.55)",
    background:
      "linear-gradient(to right, rgba(42, 36, 33, 0.3) 0%, rgba(42, 36, 33, 0.9) 60%)",
    zIndex: 1,
  },
  container: {
    position: "relative",
    zIndex: 2,
    maxWidth: "1200px",
    width: "100%",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
  },
  leftSpace: {
    flex: "1",
    display: "none",
  },
  contentColumn: {
    flex: "1.2",
    maxWidth: "620px",
    marginLeft: "auto",
    width: "100%",
  },
  subtitle: {
    color: "#B88E7D", // Accent Nude / Rosé
    fontSize: "14px",
    fontWeight: "600",
    display: "block",
    marginBottom: "10px",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  title: {
    fontSize: "40px",
    fontWeight: "normal",
    lineHeight: "1.25",
    margin: "0 0 25px 0",
    color: "#ffffff",
  },
  description: {
    fontSize: "13px",
    lineHeight: "1.8",
    color: "rgba(255, 255, 255, 0.85)",
    marginBottom: "40px",
    fontFamily: "sans-serif",
  },
  progressList: {
    display: "flex",
    flexDirection: "column",
    gap: "22px",
  },
  progressItem: {
    width: "100%",
  },
  progressHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "6px",
  },
  progressLabel: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#ffffff",
    fontFamily: "sans-serif",
  },
  progressPercentage: {
    fontSize: "13px",
    fontWeight: "bold",
    color: "#E2BAA9",
    fontFamily: "sans-serif",
  },
  progressBarBg: {
    width: "100%",
    height: "2px",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    position: "relative",
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#B88E7D",
    transition: "width 1s ease-in-out",
  },
};

export default Why;
