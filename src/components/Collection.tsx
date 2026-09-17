"use client";

import React from "react";
import { Check } from "lucide-react";

interface CollectionCardProps {
  image: string;
  title: string;
  description: string;
  linkHref?: string;
}

const CollectionCard: React.FC<CollectionCardProps> = ({
  image,
  title,
  description,
  linkHref = "https://wa.me/221776913230",
}) => (
  <div className="collection-card" style={styles.card}>
    <div
      className="collection-card-image-wrapper"
      style={styles.cardImageWrapper}
    >
      <img src={image} alt={title} style={styles.cardImage} />
    </div>
    <div className="collection-card-content" style={styles.cardContent}>
      <h3 style={styles.cardTitle}>{title}</h3>
      <p style={styles.cardDescription}>{description}</p>
      <a
        href={linkHref}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.readMoreLink}
      >
        EN SAVOIR PLUS
      </a>
    </div>
  </div>
);

const Collection: React.FC = () => {
  const serviceList = [
    "Soin Visage Hydratant & Éclat",
    "Massage Relaxant aux Huiles Bio",
    "Rituel Hammam & Gommage Corps",
    "Manucure & Pédicure Spa",
    "Épilation Douce & Soins Apaisants",
  ];

  return (
    <section className="collection-section" style={styles.section}>
      <style>{`
        /* Media Queries pour la réactivité */
        @media (max-width: 1024px) {
          .collection-container {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 25px !important;
          }
          .collection-info-column {
            grid-column: span 2 !important;
            padding-right: 0 !important;
            margin-bottom: 10px !important;
          }
        }

        @media (max-width: 768px) {
          .collection-section {
            padding: 50px 20px !important;
          }
          .collection-container {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          .collection-info-column {
            grid-column: span 1 !important;
          }
          .collection-title {
            font-size: 28px !important;
          }
          .collection-card-image-wrapper {
            height: 220px !important;
          }
          .collection-card-content {
            padding: 20px !important;
          }
        }

        @media (max-width: 480px) {
          .collection-section {
            padding: 40px 15px !important;
          }
          .collection-title {
            font-size: 24px !important;
          }
          .collection-card-image-wrapper {
            height: 200px !important;
          }
        }
      `}</style>

      <div className="collection-container" style={styles.container}>
        {/* Colonne 1 : En-tête, Liste à puces & Bouton d'action */}
        <div className="collection-info-column" style={styles.infoColumn}>
          <div>
            <span style={styles.subtitle}>Nos Prestations</span>
            <h2 className="collection-title" style={styles.title}>
              Soins D'Exception
            </h2>
            <p style={styles.description}>
              Découvrez notre gamme complète de traitements conçus pour
              revitaliser votre corps et apaiser votre esprit dans une ambiance
              chaleureuse.
            </p>

            <ul style={styles.list}>
              {serviceList.map((item, index) => (
                <li key={index} style={styles.listItem}>
                  <Check size={14} color="#B88E7D" style={styles.checkIcon} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div style={styles.divider} />
            <a
              href="https://wa.me/221776913230"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.actionButton}
            >
              VOIR TOUS NOS SOINS
            </a>
          </div>
        </div>

        {/* Colonne 2 : Carte Soins du Visage */}
        <CollectionCard
          image="/c3.jpg"
          title="Rituels Visage & Éclat"
          description="Des soins ciblés pour nourrir, purifier et redonner une brillance naturelle et durable à votre teint."
        />

        {/* Colonne 3 : Carte Massages & Bien-être */}
        <CollectionCard
          image="/c4.jpg"
          title="Massages & Relaxation"
          description="Une expérience sensorielle profonde pour relâcher toutes les tensions musculaires et restaurer votre énergie."
        />
      </div>
    </section>
  );
};

// Styles en ligne
const styles: { [key: string]: React.CSSProperties } = {
  section: {
    padding: "80px 20px",
    backgroundColor: "#ffffff",
    fontFamily: "var(--font-playfair), 'Playfair Display', serif",
    color: "#2A2421",
    width: "100%",
    boxSizing: "border-box",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "30px",
    alignItems: "stretch",
  },

  /* Colonne d'information */
  infoColumn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingRight: "10px",
  },
  subtitle: {
    color: "#B88E7D",
    fontSize: "14px",
    fontWeight: "600",
    display: "block",
    marginBottom: "8px",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  title: {
    fontSize: "36px",
    fontWeight: "normal",
    lineHeight: "1.2",
    margin: "0 0 20px 0",
    color: "#2A2421",
  },
  description: {
    fontSize: "13px",
    lineHeight: "1.7",
    color: "#666666",
    marginBottom: "25px",
    fontFamily: "sans-serif",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: "0 0 25px 0",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "13px",
    color: "#444444",
    fontFamily: "sans-serif",
  },
  checkIcon: {
    flexShrink: 0,
  },
  divider: {
    height: "1px",
    backgroundColor: "#f0f0f0",
    marginBottom: "25px",
  },
  actionButton: {
    display: "block",
    backgroundColor: "#2A2421",
    color: "#ffffff",
    border: "none",
    padding: "16px 24px",
    fontSize: "12px",
    fontWeight: "600",
    letterSpacing: "1px",
    cursor: "pointer",
    width: "100%",
    textAlign: "center",
    textTransform: "uppercase",
    textDecoration: "none",
    borderRadius: "25px",
    boxSizing: "border-box",
    transition: "background-color 0.3s ease",
  },

  /* Cartes de collection */
  card: {
    backgroundColor: "#ffffff",
    boxShadow: "0 10px 30px rgba(42, 36, 33, 0.05)",
    display: "flex",
    flexDirection: "column",
    borderRadius: "6px",
    overflow: "hidden",
    border: "1px solid #FAF7F5",
  },
  cardImageWrapper: {
    width: "100%",
    height: "260px",
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  cardContent: {
    padding: "30px 25px",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
  cardTitle: {
    fontSize: "22px",
    fontWeight: "normal",
    margin: "0 0 15px 0",
    color: "#2A2421",
  },
  cardDescription: {
    fontSize: "13px",
    lineHeight: "1.7",
    color: "#666666",
    margin: "0 0 20px 0",
    fontFamily: "sans-serif",
    flexGrow: 1,
  },
  readMoreLink: {
    color: "#B88E7D",
    fontSize: "12px",
    fontWeight: "600",
    letterSpacing: "1px",
    textDecoration: "none",
    textTransform: "uppercase",
    marginTop: "auto",
  },
};

export default Collection;
