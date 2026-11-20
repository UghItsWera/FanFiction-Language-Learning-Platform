
import { useState } from "react";
import {
  Search,
  BookOpen,
  Bookmark,
  Sparkles,
  Sun,
  Moon,
  ChevronRight,
  Heart,
  Feather,
  Globe2,
  Library,
  Languages,
  ArrowRight,
  Menu,
} from "lucide-react";

import "./App.scss";

const stories = [
  {
    id: 1,
    title: "Judiths Bad Idea",
    author: "Mira Winters",
    genre: "Fantasy",
    language: "English",
    description: "A forgotten kingdom. An impossible prophecy. A girl who was never meant to survive.",
    cover: "emerald",
    rating: "4.9",
    chapters: 24,
    featured: true,
  },
  {
    id: 2,
    title: "Letters from Winter",
    author: "Elena Volkova",
    genre: "Romance",
    language: "Russian",
    description: "Somewhere between the snow and the silence, two strangers find each other.",
    cover: "winter",
    rating: "4.8",
    chapters: 18,
  },
  {
    id: 3,
    title: "The Last Library",
    author: "Theo Ashford",
    genre: "Fantasy",
    language: "English",
    description: "In a world where books are forbidden, one library holds every forgotten story.",
    cover: "library",
    rating: "4.7",
    chapters: 31,
  },
  {
    id: 4,
    title: "Flores de Medianoche",
    author: "Lucía Reyes",
    genre: "Mystery",
    language: "Spanish",
    description: "Every midnight, a flower appears outside her door. Every morning, someone disappears.",
    cover: "flowers",
    rating: "4.9",
    chapters: 12,
  },
];

const genres = ["All stories", "Fantasy", "Romance", "Mystery", "Adventure", "Sci-Fi"];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeGenre, setActiveGenre] = useState("All stories");
  const [search, setSearch] = useState("");

  const filteredStories = stories.filter((story) => {
    const matchesGenre =
      activeGenre === "All stories" || story.genre === activeGenre;

    const matchesSearch =
      story.title.toLowerCase().includes(search.toLowerCase()) ||
      story.author.toLowerCase().includes(search.toLowerCase()) ||
      story.language.toLowerCase().includes(search.toLowerCase());

    return matchesGenre && matchesSearch;
  });

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      <header className="navbar">
        <a href="#" className="brand">
          <span className="brand-icon"><BookOpen size={23} /></span>
          <span>fable<span className="brand-accent">lingo</span></span>
        </a>

        <nav className="nav-links">
          <a href="#discover" className="active">Discover</a>
          <a href="#library">My Library</a>
          <a href="#learning">My Learning</a>
          <a href="#community">Community</a>
        </nav>

        <div className="nav-actions">
          <button
            className="icon-button theme-button"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={19} /> : <Moon size={19} />}
          </button>
          <button className="login-button">Log in</button>
          <button className="signup-button">Get started <ArrowRight size={15} /></button>
        </div>

        <button className="mobile-menu icon-button" aria-label="Open menu">
          <Menu size={22} />
        </button>
      </header>

      <main>
        <section className="hero" id="discover">
          <div className="hero-decoration decoration-one">✧</div>
          <div className="hero-decoration decoration-two">✦</div>

          <div className="hero-content">
            <div className="eyebrow">
              <Sparkles size={14} />
              A WORLD OF STORIES AWAITS
            </div>

            <h1>
              Every story opens
              <br />
              <span>a new world.</span>
            </h1>

            <p>
              Discover stories in different languages, fall in love with
              new characters, and learn something along the way.
            </p>

            <div className="hero-search">
              <Search size={19} />
              <input
                type="text"
                placeholder="Search stories, authors, languages..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button onClick={() => document.getElementById("stories").scrollIntoView({ behavior: "smooth" })}>
                Explore
              </button>
            </div>

            <div className="hero-note">
              <Globe2 size={15} />
              <span>Stories from around the world, in your own time.</span>
            </div>
          </div>

          <div className="hero-art">
            <div className="floating-note note-top">
              <Sparkles size={15} /> Read. Discover. Learn.
            </div>
            <div className="hero-book book-back">
              <div className="book-back-art">✧</div>
            </div>
            <div className="hero-book book-front">
              <div className="book-cover-content">
                <span className="cover-kicker">A TALE OF MAGIC</span>
                <span className="cover-title">The<br />Secret<br />Garden</span>
                <span className="cover-author">A. WILLOW</span>
                <span className="cover-flower">✿</span>
              </div>
            </div>
            <div className="floating-note note-bottom">
              <Heart size={15} /> Your next favourite story
            </div>
          </div>
        </section>

        <section className="benefits">
          <div className="benefit">
            <span className="benefit-icon pink"><BookOpen size={19} /></span>
            <div><strong>Stories worth getting lost in</strong><span>Original fiction and fanfiction</span></div>
          </div>
          <div className="benefit">
            <span className="benefit-icon lavender"><Languages size={19} /></span>
            <div><strong>Learn as you read</strong><span>Translations when you need them</span></div>
          </div>
          <div className="benefit">
            <span className="benefit-icon sage"><Bookmark size={19} /></span>
            <div><strong>Keep every discovery</strong><span>Build your personal vocabulary</span></div>
          </div>
        </section>

        <section className="stories-section" id="stories">
          <div className="section-heading">
            <div>
              <span className="section-kicker">FIND YOUR NEXT OBSESSION</span>
              <h2>Stories to fall into <span>♡</span></h2>
              <p>Little worlds, big feelings, and something new to learn.</p>
            </div>
            <a href="#stories" className="view-all">View all stories <ChevronRight size={17} /></a>
          </div>

          <div className="genre-filters">
            {genres.map((genre) => (
              <button
                key={genre}
                className={activeGenre === genre ? "genre active" : "genre"}
                onClick={() => setActiveGenre(genre)}
              >
                {genre}
              </button>
            ))}
          </div>

          <div className="story-grid">
            {filteredStories.map((story) => (
              <article className="story-card" key={story.id}>
                <div className={`story-cover ${story.cover}`}>
                  <div className="cover-ornament">✧</div>
                  <span className="cover-category">{story.genre}</span>
                  <h3>{story.title}</h3>
                  <span className="cover-author">{story.author}</span>
                  <span className="cover-decoration">✿</span>
                  <button className="save-button" aria-label={`Save ${story.title}`}>
                    <Bookmark size={17} />
                  </button>
                </div>

                <div className="story-info">
                  <div className="story-meta">
                    <span><Globe2 size={13} /> {story.language}</span>
                    <span className="rating">★ {story.rating}</span>
                  </div>
                  <h3>{story.title}</h3>
                  <span className="story-author">by {story.author}</span>
                  <p>{story.description}</p>
                  <div className="story-footer">
                    <span>{story.chapters} chapters</span>
                    <button aria-label={`Explore ${story.title}`}><ArrowRight size={17} /></button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredStories.length === 0 && (
            <div className="empty-state">
              <BookOpen size={28} />
              <p>No stories found. Try another search or genre.</p>
            </div>
          )}
        </section>

        <section className="reading-banner" id="learning">
          <div className="banner-icon"><Feather size={28} /></div>
          <div className="banner-content">
            <span className="section-kicker">A DIFFERENT WAY TO LEARN</span>
            <h2>Read a little. Learn a lot.</h2>
            <p>
              Found a word you don't recognise? Select it to see its
              translation, understand its meaning, and save it for later.
              No interruptions. Just you and the story.
            </p>
            <button className="banner-button">
              Discover how it works <ArrowRight size={16} />
            </button>
          </div>
          <div className="translation-preview">
            <div className="preview-label"><Languages size={14} /> ASSISTED READING</div>
            <div className="preview-original">
              Она посмотрела на <span>звёзды</span> и улыбнулась.
            </div>
            <div className="preview-translation">
              She looked at the <strong>stars</strong> and smiled.
            </div>
            <div className="preview-definition">
              <span>звёзды</span>
              <span>noun · plural</span>
              <strong>stars</strong>
              <small>Russian → English</small>
            </div>
          </div>
        </section>

        <section className="bottom-cta" id="community">
          <div className="cta-sparkle">✧</div>
          <span className="section-kicker">YOUR NEXT CHAPTER STARTS HERE</span>
          <h2>There is a story waiting for you.</h2>
          <p>Find your people, discover new worlds, and let curiosity lead the way.</p>
          <button className="signup-button">Join the library <ArrowRight size={16} /></button>
        </section>
      </main>

      <footer className="footer">
        <a href="#" className="brand">
          <span className="brand-icon"><BookOpen size={20} /></span>
          <span>fable<span className="brand-accent">lingo</span></span>
        </a>
        <span>Made for the love of stories and languages. <span>♡</span></span>
        <span>© 2026 Fablelingo</span>
      </footer>
    </div>
  );
}

export default App;
