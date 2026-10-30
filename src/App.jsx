import { useState } from 'react';
import { profile, projects, experience, skills, techColors } from './data';
import previews from './previews.json'; // lo genera scripts/fetch-previews.mjs

function Logo() {
  return (
    <svg className="logo" viewBox="0 0 32 32" width="34" height="34" aria-hidden="true">
      <rect width="32" height="32" rx="8" />
      <path d="M12 11l-5 5 5 5M25 11l-5 5 5 5M17.5 9l-3 14" />
    </svg>
  );
}

function Tag({ name }) {
  const color = techColors[name];
  return <li style={color ? { '--tag': color } : undefined}>{name}</li>;
}

function ProjectCard({ project }) {
  const { title, description, stack, url, image, color } = project;
  const [failed, setFailed] = useState(false);
  const src = image || previews[url];

  return (
    <a className="card" href={url} target="_blank" rel="noreferrer">
      <div className="card-thumb" style={{ background: color }}>
        <div className="card-bar" aria-hidden="true">
          <span /><span /><span />
        </div>
        {src && !failed ? (
          <img
            src={src}
            alt={`Vista previa de ${title}`}
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
          />
        ) : (
          <span className="card-initial" aria-hidden="true">
            {title.charAt(0)}
          </span>
        )}
      </div>
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <ul className="tags">
          {stack.map((s) => (
            <Tag key={s} name={s} />
          ))}
        </ul>
      </div>
    </a>
  );
}

export default function App() {
  return (
    <>
      <header className="topbar">
        <a href="#inicio" className="brand" aria-label="Inicio">
          <Logo />
        </a>
        <nav aria-label="Principal">
          <a href="#proyectos">Proyectos</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero">
          <h1>{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <p className="tagline">{profile.tagline}</p>
          <div className="actions">
            <a className="btn primary" href="#proyectos">Ver proyectos</a>
            <a className="btn" href={profile.cv} target="_blank" rel="noreferrer">Descargar CV</a>
          </div>
        </section>

        <section id="proyectos" className="section">
          <h2>Proyectos</h2>
          <div className="grid">
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </section>

        <section id="sobre-mi" className="section">
          <h2>Sobre mí</h2>
          <div className="about">
            <p>{profile.about}</p>
            <ul className="tags big">
              {skills.map((s) => (
                <Tag key={s} name={s} />
              ))}
            </ul>
          </div>
          <ul className="timeline">
            {experience.map((e) => (
              <li key={e.where}>
                <span className="when">{e.when}</span>
                <div>
                  <strong>{e.where}</strong>
                  <p>{e.what}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="contacto" className="section contact">
          <h2>Contacto</h2>
          <p>¿Tienes un proyecto o quieres que trabajemos juntos? Escríbeme.</p>
          <a className="mail" href={`mailto:${profile.email}`}>{profile.email}</a>
        </section>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}