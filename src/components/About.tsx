"use client";

import React from "react";
import { Play, CircleDollarSign, Flower2 } from "lucide-react";

const About: React.FC = () => {
  return (
    <div style={styles.pageWrapper}>
      <style>{`
        /* Styles Responsive Media Queries */
        @media (max-width: 1024px) {
          .about-container {
            flex-direction: column !important;
            gap: 40px !important;
          }
          .about-right-column {
            padding-left: 0 !important;
          }
          .story-container {
            flex-direction: column !important;
            gap: 40px !important;
          }
          .story-text-card {
            width: 100% !important;
            box-sizing: border-box !important;
            padding: 40px 30px !important;
          }
          .story-button {
            transform: translateY(0) !important;
            margin-top: 15px !important;
          }
          .story-section {
            padding: 60px 20px 100px 20px !important; /* Section élargie pour éviter le débordement */
          }
          .story-image-collage {
            margin-left: 0 !important;
            width: 100% !important;
            height: 480px !important;
          }
        }

        @media (max-width: 768px) {
          .about-section {
            padding: 50px 20px !important;
          }
          .video-card {
            flex-direction: column !important;
          }
          .video-thumbnail {
            width: 100% !important;
            height: 200px !important;
          }
          .video-card-content {
            width: 100% !important;
            box-sizing: border-box !important;
            padding: 20px !important;
          }
          .features-grid {
            flex-direction: column !important;
            gap: 25px !important;
          }
          .main-title, .story-title {
            font-size: 28px !important;
          }
          .story-section {
            padding: 50px 20px 120px 20px !important; /* Élargissement supplémentaire en bas */
          }
          
          /* Conservation du style de superposition initial ajusté pour mobile */
          .story-image-collage {
            height: 420px !important;
            position: relative !important;
            width: 100% !important;
            margin-top: 20px !important;
          }
          .photo-top-left {
            top: 0 !important;
            left: 0 !important;
            width: 58% !important;
            height: 220px !important;
          }
          .photo-right {
            top: 40px !important;
            right: 0 !important;
            width: 58% !important;
            height: 240px !important;
          }
          .photo-bottom-center {
            bottom: 0 !important;
            left: 20% !important;
            width: 60% !important;
            height: 210px !important;
          }
        }

        @media (max-width: 480px) {
          .story-section {
            padding: 40px 15px 110px 15px !important;
          }
          .signature-row {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 15px !important;
          }
          .story-text-card {
            padding: 25px 20px !important;
          }
          .story-button {
            width: 100% !important;
            text-align: center !important;
          }
          .story-image-collage {
            height: 350px !important;
          }
          .photo-top-left {
            height: 180px !important;
          }
          .photo-right {
            height: 200px !important;
          }
          .photo-bottom-center {
            height: 180px !important;
          }
        }
      `}</style>

      {/* SECTION 1: À Propos de Ndiaye Fleuriste & Carte Vidéo */}
      <section className="about-section" style={styles.section}>
        <div className="about-container" style={styles.container}>
          {/* Colonne Gauche - Cartes & Caractéristiques */}
          <div style={styles.leftColumn}>
            {/* Carte Principale "Fleurs Fraîches" avec Vidéo */}
            <div className="video-card" style={styles.videoCard}>
              <div className="video-thumbnail" style={styles.videoThumbnail}>
                <img
                  src="/a.jpg"
                  alt="Fleurs Fraîches Ndiaye Fleuriste"
                  style={styles.thumbnailImage}
                />
                <button
                  style={styles.playButton}
                  aria-label="Regarder la vidéo"
                >
                  <Play
                    size={20}
                    fill="white"
                    color="white"
                    style={{ marginLeft: "3px" }}
                  />
                </button>
              </div>
              <div
                className="video-card-content"
                style={styles.videoCardContent}
              >
                <h3 style={styles.cardTitle}>Fleurs Fraîches</h3>
                <p style={styles.cardText}>
                  Nos fleurs sont sélectionnées chaque matin avec soin pour vous
                  garantir un éclat d'exception et une fraîcheur durable.
                </p>
                <a href="#" style={styles.readMoreLink}>
                  EN SAVOIR PLUS
                </a>
              </div>
            </div>

            {/* Grille des 2 sous-fonctionnalités */}
            <div className="features-grid" style={styles.featuresGrid}>
              {/* Meilleurs Tarifs */}
              <div style={styles.featureItem}>
                <div style={styles.iconWrapper}>
                  <CircleDollarSign
                    size={36}
                    color="#72B842"
                    strokeWidth={1.2}
                  />
                </div>
                <h4 style={styles.featureTitle}>Prix Accessible</h4>
                <p style={styles.featureText}>
                  Des compositions florales de haute qualité adaptées à tous vos
                  budgets pour embellir tous vos événements.
                </p>
                <a href="#" style={styles.readMoreLink}>
                  EN SAVOIR PLUS
                </a>
              </div>

              {/* Couronnes & Bouquets */}
              <div style={styles.featureItem}>
                <div style={styles.iconWrapper}>
                  <Flower2 size={36} color="#72B842" strokeWidth={1.2} />
                </div>
                <h4 style={styles.featureTitle}>Créations Sur-Mesure</h4>
                <p style={styles.featureText}>
                  Bouquets de mariage, couronnes décoratives et arrangements
                  personnalisés confectionnés sur demande.
                </p>
                <a href="#" style={styles.readMoreLink}>
                  EN SAVOIR PLUS
                </a>
              </div>
            </div>
          </div>

          {/* Colonne Droite - Présentation & Signature */}
          <div className="about-right-column" style={styles.rightColumn}>
            <span style={styles.subtitle}>À Propos de Nous</span>
            <h2 className="main-title" style={styles.mainTitle}>
              Des Décorations Florales Élégantes Inspirées par la Nature
            </h2>

            <p style={styles.paragraph}>
              Depuis notre atelier familial, nous mettons notre passion au
              service de la fleuristerie. Chaque arrangement est une œuvre d'art
              pensée pour transmettre vos émotions, célébrer la joie et sublimer
              vos espaces de vie.
            </p>

            <p style={styles.paragraph}>
              Chez Ndiaye Fleuriste Family, nous travaillons avec une attention
              particulière portée au détail, en combinant harmonieusement
              variétés locales et exotiques pour créer des bouquets uniques et
              mémorables.
            </p>

            {/* Pied de section : Nom & Signature */}
            <div className="signature-row" style={styles.signatureRow}>
              <div>
                <h5 style={styles.authorName}>Fondateur Ndiaye</h5>
                <span style={styles.authorRole}>
                  Maison Ndiaye Fleuriste Family
                </span>
              </div>
              <div style={styles.signatureGraphic}>Ndiaye Fleuriste</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Notre Histoire */}
      <section className="story-section" style={styles.storySection}>
        <div className="story-container" style={styles.storyContainer}>
          {/* Bloc Texte (Carte Blanche avec ombre) */}
          <div className="story-text-card" style={styles.storyTextCard}>
            <span style={styles.subtitle}>Notre Histoire</span>
            <h2 className="story-title" style={styles.storyTitle}>
              Une Large Gamme de Fleurs & Plantes pour Chaque Occasion
            </h2>

            <p style={styles.paragraph}>
              Née d'un savoir-faire familial transmis au fil des années, notre
              boutique est devenue une référence locale pour les amoureux de la
              nature et du végétal.
            </p>

            <p style={styles.paragraph}>
              Qu'il s'agisse d'un anniversaire, d'un mariage, d'un remerciement
              ou d'un hommage, nous vous accompagnons dans le choix des plus
              belles compositions.
            </p>

            <p style={styles.paragraph}>
              Faites confiance à notre équipe pour livrer la beauté naturelle
              directement chez vous avec la plus grande délicatesse.
            </p>

            <button className="story-button" style={styles.storyButton}>
              DÉCOUVRIR NDIAYE FLEURISTE
            </button>
          </div>

          {/* Composition de photos superposées */}
          <div className="story-image-collage" style={styles.storyImageCollage}>
            {/* Image 1: Haut / Gauche */}
            <div
              className="photo-top-left"
              style={{ ...styles.photoFrame, ...styles.photoTopLeft }}
            >
              <img
                src="/a2.jpg"
                alt="Roses en vase"
                style={styles.collageImg}
              />
            </div>

            {/* Image 2: Droite */}
            <div
              className="photo-right"
              style={{ ...styles.photoFrame, ...styles.photoRight }}
            >
              <img
                src="/a3.jpeg"
                alt="Bouquet de fleurs"
                style={styles.collageImg}
              />
            </div>

            {/* Image 3: Bas / Centre */}
            <div
              className="photo-bottom-center"
              style={{ ...styles.photoFrame, ...styles.photoBottomCenter }}
            >
              <img
                src="/a4.jpeg"
                alt="Préparation d'un bouquet de roses"
                style={styles.collageImg}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Styles en ligne
const styles: { [key: string]: React.CSSProperties } = {
  pageWrapper: {
    backgroundColor: "#ffffff",
    fontFamily: "var(--font-playfair), 'Playfair Display', serif",
    color: "#333333",
    width: "100%",
    overflowX: "hidden",
  },
  section: {
    padding: "80px 20px",
    width: "100%",
    boxSizing: "border-box",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    gap: "60px",
    alignItems: "flex-start",
  },
  leftColumn: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    gap: "40px",
    width: "100%",
  },
  rightColumn: {
    flex: "1",
    paddingLeft: "20px",
    width: "100%",
  },
  /* Styles Carte Vidéo */
  videoCard: {
    display: "flex",
    backgroundColor: "#ffffff",
    boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
    borderRadius: "4px",
    overflow: "hidden",
  },
  videoThumbnail: {
    position: "relative",
    width: "45%",
    minHeight: "180px",
  },
  thumbnailImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  playButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "46px",
    height: "46px",
    borderRadius: "50%",
    backgroundColor: "#72B842",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(114, 184, 66, 0.4)",
  },
  videoCardContent: {
    width: "55%",
    padding: "30px 25px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  cardTitle: {
    fontSize: "22px",
    fontWeight: "normal",
    margin: "0 0 12px 0",
    color: "#222222",
  },
  cardText: {
    fontSize: "13px",
    lineHeight: "1.6",
    color: "#777777",
    margin: "0 0 15px 0",
    fontFamily: "sans-serif",
  },
  readMoreLink: {
    color: "#72B842",
    fontSize: "12px",
    fontWeight: "600",
    letterSpacing: "1px",
    textDecoration: "none",
    display: "inline-block",
  },
  /* Grille des caractéristiques */
  featuresGrid: {
    display: "flex",
    gap: "30px",
  },
  featureItem: {
    flex: "1",
  },
  iconWrapper: {
    marginBottom: "15px",
  },
  featureTitle: {
    fontSize: "20px",
    fontWeight: "normal",
    margin: "0 0 12px 0",
    color: "#222222",
  },
  featureText: {
    fontSize: "13px",
    lineHeight: "1.6",
    color: "#777777",
    margin: "0 0 15px 0",
    fontFamily: "sans-serif",
  },
  /* Textes Généraux */
  subtitle: {
    color: "#72B842",
    fontSize: "15px",
    fontWeight: "600",
    display: "block",
    marginBottom: "10px",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  mainTitle: {
    fontSize: "38px",
    fontWeight: "normal",
    lineHeight: "1.25",
    margin: "0 0 25px 0",
    color: "#111111",
  },
  paragraph: {
    fontSize: "13px",
    lineHeight: "1.8",
    color: "#666666",
    marginBottom: "20px",
    fontFamily: "sans-serif",
  },
  signatureRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "35px",
    paddingTop: "10px",
  },
  authorName: {
    fontSize: "18px",
    fontWeight: "normal",
    margin: "0 0 4px 0",
    color: "#222222",
  },
  authorRole: {
    fontSize: "12px",
    color: "#72B842",
    fontFamily: "sans-serif",
    fontWeight: "500",
  },
  signatureGraphic: {
    fontFamily: "'Playball', 'Caveat', 'Dancing Script', cursive",
    fontSize: "32px",
    color: "#555555",
    opacity: 0.8,
  },

  /* SECTION 2: OUR STORY STYLES */
  storySection: {
    padding: "100px 20px",
    backgroundColor: "#fcfcfc",
    width: "100%",
    boxSizing: "border-box",
  },
  storyContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    position: "relative",
    alignItems: "center",
    width: "100%",
    boxSizing: "border-box",
  },
  storyTextCard: {
    backgroundColor: "#ffffff",
    padding: "50px 50px 0px 50px",
    boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
    width: "520px",
    zIndex: 2,
    position: "relative",
  },
  storyTitle: {
    fontSize: "36px",
    fontWeight: "normal",
    lineHeight: "1.2",
    margin: "0 0 25px 0",
    color: "#111111",
  },
  storyButton: {
    backgroundColor: "#72B842",
    color: "white",
    border: "none",
    padding: "16px 32px",
    fontSize: "12px",
    fontWeight: "600",
    letterSpacing: "1.5px",
    cursor: "pointer",
    marginTop: "15px",
    transform: "translateY(25px)",
  },
  storyImageCollage: {
    flex: 1,
    position: "relative",
    height: "550px",
    marginLeft: "-40px",
    boxSizing: "border-box",
  },
  photoFrame: {
    position: "absolute",
    backgroundColor: "#ffffff",
    padding: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    boxSizing: "border-box",
  },
  collageImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  photoTopLeft: {
    top: 0,
    left: "60px",
    width: "270px",
    height: "270px",
    zIndex: 1,
  },
  photoRight: {
    top: "80px",
    right: 0,
    width: "280px",
    height: "290px",
    zIndex: 2,
  },
  photoBottomCenter: {
    bottom: 0,
    left: "150px",
    width: "240px",
    height: "250px",
    zIndex: 3,
  },
};

export default About;
