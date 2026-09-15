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
  linkHref = "#",
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
      <a href={linkHref} style={styles.readMoreLink}>
        EN SAVOIR PLUS
      </a>
    </div>
  </div>
);

const Collection: React.FC = () => {
  const flowerList = [
    "Bouquet Éclat de Soleil",
    "Composition d'Alstroeméria",
    "Roses Blanches Royales",
    "Tulipes & Fleurs Champêtres",
    "Bouquet Douceur Rose",
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
            <span style={styles.subtitle}>Notre Collection</span>
            <h2 className="collection-title" style={styles.title}>
              Fleurs D'Exception
            </h2>
            <p style={styles.description}>
              Découvrez une sélection variée de bouquets soigneusement composés
              par nos artisans fleuristes pour illuminer toutes vos occasions.
            </p>

            <ul style={styles.list}>
              {flowerList.map((item, index) => (
                <li key={index} style={styles.listItem}>
                  <Check size={14} color="#72B842" style={styles.checkIcon} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div style={styles.divider} />
            <button style={styles.actionButton}>
              VOIR TOUTE LA COLLECTION
            </button>
          </div>
        </div>

        {/* Colonne 2 : Carte Élégance Rose */}
        <CollectionCard
          image="/c.jpg"
          title="Fleurs Douceur & Élégance"
          description="Une harmonie de nuances roses et délicates, idéale pour exprimer vos sentiments avec subtilité et tendresse."
        />

        {/* Colonne 3 : Carte Idées pour Mariage */}
        <CollectionCard
          image="/c2.jpg"
          title="Compositions Pour Mariages"
          description="Des arrangements floraux féeriques et sur-mesure pour sublimer le plus beau jour de votre vie."
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
    color: "#333333",
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
    color: "#72B842",
    fontSize: "15px",
    fontWeight: "600",
    display: "block",
    marginBottom: "8px",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  title: {
    fontSize: "36px",
    fontWeight: "normal",
    lineHeight: "1.2",
    margin: "0 0 20px 0",
    color: "#111111",
  },
  description: {
    fontSize: "13px",
    lineHeight: "1.7",
    color: "#777777",
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
    color: "#555555",
    fontFamily: "sans-serif",
  },
  checkIcon: {
    flexShrink: 0,
  },
  divider: {
    height: "1px",
    backgroundColor: "#eee",
    marginBottom: "25px",
  },
  actionButton: {
    backgroundColor: "#72B842",
    color: "#ffffff",
    border: "none",
    padding: "16px 24px",
    fontSize: "12px",
    fontWeight: "600",
    letterSpacing: "1px",
    cursor: "pointer",
    width: "100%",
    textTransform: "uppercase",
    transition: "background-color 0.3s ease",
  },

  /* Cartes de collection */
  card: {
    backgroundColor: "#ffffff",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
    display: "flex",
    flexDirection: "column",
    borderRadius: "2px",
    overflow: "hidden",
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
    color: "#222222",
  },
  cardDescription: {
    fontSize: "13px",
    lineHeight: "1.7",
    color: "#777777",
    margin: "0 0 20px 0",
    fontFamily: "sans-serif",
    flexGrow: 1,
  },
  readMoreLink: {
    color: "#72B842",
    fontSize: "12px",
    fontWeight: "600",
    letterSpacing: "1px",
    textDecoration: "none",
    textTransform: "uppercase",
    marginTop: "auto",
  },
};

export default Collection;
