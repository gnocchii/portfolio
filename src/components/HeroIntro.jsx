import './HeroIntro.css'

function HeroIntro() {
  return (
    <div className="hero-intro">
      <h2 className="intro-greeting">Hey there! I'm Melody 👋</h2>
      <p className="intro-text">
        A product designer who loves turning complex problems into delightful experiences.
        Currently crafting beautiful interfaces and leading design systems that scale.
      </p>
      <div className="social-buttons">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn linkedin"
          aria-label="LinkedIn"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
          <span>LinkedIn</span>
        </a>
        <a
          href="https://dribbble.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn dribbble"
          aria-label="Dribbble"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path>
            <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>
            <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path>
          </svg>
          <span>Dribbble</span>
        </a>
        <a
          href="https://behance.net"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn behance"
          aria-label="Behance"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.5 11.5h-3v-3h3v3zm0-4.5h-3v-1.5h3V7zM13.5 7h3v1.5h-3V7zm-6 7.5h3v3h-3v-3zm6 0h3v3h-3v-3zm-6-6h3v3h-3v-3z"/>
            <path d="M20.5 3h-17A1.5 1.5 0 0 0 2 4.5v15A1.5 1.5 0 0 0 3.5 21h17a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 20.5 3zm-3 13.5h-4.125v-1.5h4.125v1.5zm0-3h-4.125v-1.5h4.125v1.5zm0-3h-4.125V9h4.125v1.5zM10 16.5H5.5v-9H10v9z"/>
          </svg>
          <span>Behance</span>
        </a>
        <a
          href="mailto:hello@melody.com"
          className="social-btn email"
          aria-label="Email"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          <span>Email</span>
        </a>
      </div>
    </div>
  )
}

export default HeroIntro
