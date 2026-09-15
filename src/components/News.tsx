"use client";

import React from "react";
import { Calendar } from "lucide-react";

interface RecentArticle {
  title: string;
  date: string;
}

interface MainArticle {
  category: string;
  title: string;
  date: string;
  description: string;
  image: string;
}

const News: React.FC = () => {
  const recentArticles: RecentArticle[] = [
    {
      title: "Sublimez vos gâteaux d'exception avec des fleurs fraîches",
      date: "12 Mai 2024",
    },
    {
      title: "Comment intégrer l'art floral dans votre quotidien",
      date: "28 Avril 2024",
    },
    {
      title: "Les secrets pour réussir la création d'un bouquet d'anniversaire",
      date: "15 Avril 2024",
    },
  ];

  const mainArticles: MainArticle[] = [
    {
      category: "Décoration",
      title: "Sublimez vos gâteaux d'exception avec des fleurs fraîches",
      date: "12 Mai 2024",
      description:
        "Découvrez nos conseils d'experts pour associer élégance florale et création pâtissière lors de vos événements inoubliables...",
      image: "/new.jpg",
    },
    {
      category: "Cérémonie",
      title: "Comment intégrer l'art floral dans votre quotidien",
      date: "28 Avril 2024",
      description:
        "Des conseils simples et inspirants pour apporter de la fraîcheur, des couleurs et du bien-être dans votre intérieur au quotidien...",
      image: "/new2.jpg",
    },
  ];

  return (
    <section className="news-section" style={styles.section}>
      <style>{`
        /* Media Queries pour le Responsive */
        @media (max-width: 1024px) {
          .news-header {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 20px !important;
          }
          .news-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 25px !important;
          }
          .news-recent-card {
            grid-column: span 2 !important;
          }
        }

        @media (max-width: 768px) {
          .news-section {
            padding: 50px 20px !important;
          }
          .news-grid {
            grid-template-columns: 1fr !important;
            gap: 35px !important;
          }
          .news-recent-card {
            grid-column: span 1 !important;
          }
          .news-title {
            font-size: 30px !important;
          }
          .news-all-btn {
            width: 100% !important;
            text-align: center !important;
          }
          .news-image-wrapper {
            height: 220px !important;
          }
        }

        @media (max-width: 480px) {
          .news-section {
            padding: 40px 15px !important;
          }
          .news-title {
            font-size: 26px !important;
          }
          .news-recent-card {
            padding: 25px 20px !important;
          }
          .news-image-wrapper {
            height: 190px !important;
          }
        }
      `}</style>

      <div style={styles.container}>
        {/* En-tête de la section */}
        <div className="news-header" style={styles.header}>
          <div>
            <span style={styles.subtitle}>Dernières Actualités</span>
            <h2 className="news-title" style={styles.title}>
              Conseils & Articles
            </h2>
          </div>
          <button className="news-all-btn" style={styles.allNewsBtn}>
            TOUS LES ARTICLES
          </button>
        </div>

        {/* Grille principale */}
        <div className="news-grid" style={styles.grid}>
          {/* Colonne Gauche: Articles Récents */}
          <div className="news-recent-card" style={styles.recentNewsCard}>
            <div>
              <h3 style={styles.recentNewsTitle}>Articles Récents</h3>

              <div style={styles.recentList}>
                {recentArticles.map((item, index) => (
                  <div key={index} style={styles.recentItem}>
                    <h4 style={styles.recentItemTitle}>{item.title}</h4>
                    <div style={styles.dateRow}>
                      <Calendar size={13} color="#bbb" />
                      <span style={styles.dateText}>{item.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button style={styles.loadMoreBtn}>CHARGER PLUS</button>
          </div>

          {/* Colonne Centre & Droite: Cartes Articles Principales */}
          {mainArticles.map((article, index) => (
            <article key={index} style={styles.articleCard}>
              <div className="news-image-wrapper" style={styles.imageWrapper}>
                <img
                  src={article.image}
                  alt={article.title}
                  style={styles.articleImage}
                />
              </div>
              <div style={styles.articleContent}>
                <span style={styles.categoryTag}>{article.category}</span>

                <h3 style={styles.articleTitle}>{article.title}</h3>

                <div style={styles.dateRow}>
                  <Calendar size={13} color="#bbb" />
                  <span style={styles.dateText}>{article.date}</span>
                </div>

                <p style={styles.articleDescription}>{article.description}</p>

                <a href="#" style={styles.readMoreLink}>
                  LIRE LA SUITE
                </a>
              </div>
            </article>
          ))}
        </div>
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
  },
  /* En-tête */
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: "40px",
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
    fontSize: "40px",
    fontWeight: "normal",
    margin: 0,
    color: "#111111",
  },
  allNewsBtn: {
    backgroundColor: "#72B842",
    color: "#ffffff",
    border: "none",
    padding: "14px 32px",
    fontSize: "12px",
    fontWeight: "600",
    letterSpacing: "1px",
    cursor: "pointer",
    textTransform: "uppercase",
    transition: "background-color 0.3s ease",
  },

  /* Grille à 3 colonnes */
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1.1fr 1.1fr",
    gap: "30px",
    alignItems: "stretch",
  },

  /* Colonne Articles Récents */
  recentNewsCard: {
    backgroundColor: "#ffffff",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
    border: "1px solid #f0f0f0",
    padding: "35px 30px 25px 30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "2px",
  },
  recentNewsTitle: {
    fontSize: "24px",
    fontWeight: "normal",
    margin: "0 0 25px 0",
    color: "#222222",
  },
  recentList: {
    display: "flex",
    flexDirection: "column",
    gap: "25px",
    marginBottom: "30px",
  },
  recentItem: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  recentItemTitle: {
    fontSize: "15px",
    fontWeight: "normal",
    lineHeight: "1.4",
    margin: 0,
    color: "#333333",
    cursor: "pointer",
  },
  dateRow: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    marginTop: "4px",
  },
  dateText: {
    fontSize: "12px",
    color: "#aaaaaa",
    fontFamily: "sans-serif",
  },
  loadMoreBtn: {
    backgroundColor: "#72B842",
    color: "#ffffff",
    border: "none",
    padding: "14px",
    fontSize: "11px",
    fontWeight: "600",
    letterSpacing: "1px",
    cursor: "pointer",
    width: "100%",
    textTransform: "uppercase",
    transition: "background-color 0.3s ease",
  },

  /* Cartes Articles Principales */
  articleCard: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffffff",
  },
  imageWrapper: {
    width: "100%",
    height: "250px",
    overflow: "hidden",
    marginBottom: "20px",
  },
  articleImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  articleContent: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
  categoryTag: {
    color: "#72B842",
    fontSize: "13px",
    fontWeight: "600",
    marginBottom: "10px",
    display: "inline-block",
  },
  articleTitle: {
    fontSize: "22px",
    fontWeight: "normal",
    lineHeight: "1.3",
    margin: "0 0 10px 0",
    color: "#222222",
  },
  articleDescription: {
    fontSize: "13px",
    lineHeight: "1.7",
    color: "#777777",
    margin: "15px 0 20px 0",
    fontFamily: "sans-serif",
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

export default News;
