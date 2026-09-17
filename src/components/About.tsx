"use client";

import React from "react";
import { Play, Sparkles, HeartHandshake } from "lucide-react";

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
            padding: 60px 20px 100px 20px !important;
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
            padding: 50px 20px 120px 20px !important;
          }
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

      {/* SECTION 1: À Propos de Secret Beauty & Spa */}
      <section className="about-section" style={styles.section}>
        <div className="about-container" style={styles.container}>
          {/* Colonne Gauche - Cartes & Caractéristiques */}
          <div style={styles.leftColumn}>
            {/* Carte Vidéo "Soins d'Exception" */}
            <div className="video-card" style={styles.videoCard}>
              <div className="video-thumbnail" style={styles.videoThumbnail}>
                <img
                  src="/ab.jpg"
                  alt="Soins d'Exception Secret Beauty & Spa"
                  style={styles.thumbnailImage}
                />
                <button
                  style={styles.playButton}
                  aria-label="Regarder la présentation"
                >
                  <Play
                    size={20}
                    fill="#2A2421"
                    color="#2A2421"
                    style={{ marginLeft: "3px" }}
                  />
                </button>
              </div>
              <div
                className="video-card-content"
                style={styles.videoCardContent}
              >
                <h3 style={styles.cardTitle}>Soins & Relaxation</h3>
                <p style={styles.cardText}>
                  Une sélection rigoureuse de produits haut de gamme et de
                  techniques apaisantes pour sublimer votre peau au quotidien.
                </p>
                <a href="#services" style={styles.readMoreLink}>
                  EN SAVOIR PLUS
                </a>
              </div>
            </div>

            {/* Grille des 2 sous-fonctionnalités */}
            <div className="features-grid" style={styles.featuresGrid}>
              {/* Produits & Soins Bio */}
              <div style={styles.featureItem}>
                <div style={styles.iconWrapper}>
                  <Sparkles size={36} color="#B88E7D" strokeWidth={1.2} />
                </div>
                <h4 style={styles.featureTitle}>Éclat & Pureté</h4>
                <p style={styles.featureText}>
                  Des protocoles de soins ciblés pour revitaliser le teint et
                  apporter une fraîcheur naturelle durable.
                </p>
                <a href="#" style={styles.readMoreLink}>
                  EN SAVOIR PLUS
                </a>
              </div>

              {/* Expérience Sur-Mesure */}
              <div style={styles.featureItem}>
                <div style={styles.iconWrapper}>
                  <HeartHandshake size={36} color="#B88E7D" strokeWidth={1.2} />
                </div>
                <h4 style={styles.featureTitle}>Accompagnement</h4>
                <p style={styles.featureText}>
                  Un diagnostic personnalisé pour répondre précisément aux
                  besoins uniques de votre peau et de votre corps.
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
              Un Sanctuaires de Sérénité Dédié à Votre Beauté
            </h2>

            <p style={styles.paragraph}>
              Au cœur de notre institut, nous concevons le bien-être comme un
              art de vivre. Secret Beauty & Spa est né de la volonté d'offrir
              une parenthèse de douceur loin du stress quotidien.
            </p>

            <p style={styles.paragraph}>
              Chaque rituel est méticuleusement préparé pour répondre au slogan
              « Du Soin au Besoin ». Nos praticiennes expérimentées utilisent
              des gestes précis et des soins de haute qualité pour révéler votre
              éclat naturel.
            </p>

            {/* Pied de section : Nom & Signature */}
            <div className="signature-row" style={styles.signatureRow}>
              <div>
                <h5 style={styles.authorName}>L'Équipe Institut</h5>
                <span style={styles.authorRole}>
                  Maison Secret Beauty & Spa
                </span>
              </div>
              <div style={styles.signatureGraphic}>Secret Beauty & Spa</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Notre Philosophie */}
      <section className="story-section" style={styles.storySection}>
        <div className="story-container" style={styles.storyContainer}>
          {/* Bloc Texte */}
          <div className="story-text-card" style={styles.storyTextCard}>
            <span style={styles.subtitle}>Notre Philosophie</span>
            <h2 className="story-title" style={styles.storyTitle}>
              Une Palette de Massages et Traitments Esthétiques
            </h2>

            <p style={styles.paragraph}>
              Guidés par l'exigence du détail et l'écoute attentive, nous
              proposons une large carte de soins allant des rituels relaxation
              aux soins esthétiques avancés.
            </p>

            <p style={styles.paragraph}>
              Que ce soit pour préparer un événement particulier, vous détendre
              après une longue semaine ou prendre soin de vous régulièrement,
              notre centre s'adapte à vos besoins.
            </p>

            <p style={styles.paragraph}>
              Laissez-vous transporter par une atmosphère apaisante et des
              senteurs délicates pensées pour le bien-être de vos sens.
            </p>

            <a
              href="https://wa.me/221776913230"
              target="_blank"
              rel="noopener noreferrer"
              className="story-button"
              style={styles.storyButton}
            >
              PRENDRE RENDEZ-VOUS
            </a>
          </div>

          {/* Collage de photos */}
          <div className="story-image-collage" style={styles.storyImageCollage}>
            <div
              className="photo-top-left"
              style={{ ...styles.photoFrame, ...styles.photoTopLeft }}
            >
              <img
                src="/ab2.jpeg"
                alt="Massage apaisant"
                style={styles.collageImg}
              />
            </div>

            <div
              className="photo-right"
              style={{ ...styles.photoFrame, ...styles.photoRight }}
            >
              <img
                src="/ab3.jpg"
                alt="Soin du visage"
                style={styles.collageImg}
              />
            </div>

            <div
              className="photo-bottom-center"
              style={{ ...styles.photoFrame, ...styles.photoBottomCenter }}
            >
              <img
                src="/ab4.jpg"
                alt="Espace relaxation Spa"
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
    color: "#2A2421",
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
    boxShadow: "0 10px 30px rgba(42, 36, 33, 0.06)",
    borderRadius: "6px",
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
    backgroundColor: "#E2BAA9",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(226, 186, 169, 0.5)",
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
    color: "#2A2421",
  },
  cardText: {
    fontSize: "13px",
    lineHeight: "1.6",
    color: "#666666",
    margin: "0 0 15px 0",
    fontFamily: "sans-serif",
  },
  readMoreLink: {
    color: "#B88E7D",
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
    color: "#2A2421",
  },
  featureText: {
    fontSize: "13px",
    lineHeight: "1.6",
    color: "#666666",
    margin: "0 0 15px 0",
    fontFamily: "sans-serif",
  },
  /* Textes Généraux */
  subtitle: {
    color: "#B88E7D",
    fontSize: "14px",
    fontWeight: "600",
    display: "block",
    marginBottom: "10px",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  mainTitle: {
    fontSize: "38px",
    fontWeight: "normal",
    lineHeight: "1.25",
    margin: "0 0 25px 0",
    color: "#2A2421",
  },
  paragraph: {
    fontSize: "13px",
    lineHeight: "1.8",
    color: "#555555",
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
    color: "#2A2421",
  },
  authorRole: {
    fontSize: "12px",
    color: "#B88E7D",
    fontFamily: "sans-serif",
    fontWeight: "500",
  },
  signatureGraphic: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "22px",
    fontStyle: "italic",
    color: "#B88E7D",
    opacity: 0.8,
  },

  /* SECTION 2: OUR STORY STYLES */
  storySection: {
    padding: "100px 20px",
    backgroundColor: "#FAF7F5",
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
    padding: "50px 50px 30px 50px",
    boxShadow: "0 10px 40px rgba(42, 36, 33, 0.05)",
    width: "520px",
    zIndex: 2,
    position: "relative",
    borderRadius: "4px",
  },
  storyTitle: {
    fontSize: "36px",
    fontWeight: "normal",
    lineHeight: "1.2",
    margin: "0 0 25px 0",
    color: "#2A2421",
  },
  storyButton: {
    display: "inline-block",
    backgroundColor: "#2A2421",
    color: "#ffffff",
    border: "none",
    padding: "16px 32px",
    fontSize: "12px",
    fontWeight: "600",
    letterSpacing: "1.5px",
    cursor: "pointer",
    marginTop: "15px",
    transform: "translateY(25px)",
    borderRadius: "20px",
    textDecoration: "none",
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
    borderRadius: "4px",
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
