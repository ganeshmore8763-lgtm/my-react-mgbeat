import "./App.css";
import Navbar from "./header";

const BEATS = [
  {
    title: "Lil Baby x MC Stan Type Beat | Instrumental Beat",
    artist: "MgBeat808",
    year: "2026",
    coverImage: "https://i.ytimg.com/vi/6x8N2pwiQuw/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=6x8N2pwiQuw",
  },
  {
    title: "Kasam Trap Beat 2026 | Bollywood Emotional Sample",
    artist: "MgBeat808",
    year: "2026",
    coverImage: "https://i.ytimg.com/vi/7_DLlDAw13o/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=7_DLlDAw13o",
  },
  {
    title: "MC Stan Type Beat x Bollywood Sampled Beat",
    artist: "MgBeat808",
    year: "2026",
    coverImage: "https://i.ytimg.com/vi/MQBL87Vd09Y/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=MQBL87Vd09Y",
  },
  {
    title: "Kantara Sampled Beat | Tribal Trap Type",
    artist: "MgBeat808",
    year: "2025",
    coverImage: "https://i.ytimg.com/vi/YY6xKrAjjq0/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=YY6xKrAjjq0",
  },
  {
    title: "Travis Scott Type Beat 2025 | Dark and Bouncy",
    artist: "MgBeat808",
    year: "2025",
    coverImage: "https://i.ytimg.com/vi/lG2Zlohi4Q4/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=lG2Zlohi4Q4",
  },
  {
    title: "Kehna Hi Kya Drill Beat | Bollywood Sampled",
    artist: "MgBeat808",
    year: "2024",
    coverImage: "https://i.ytimg.com/vi/DpFjQ4YX7sg/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=DpFjQ4YX7sg",
  },
  {
    title: "Drill Beat Immortal | UK Drill",
    artist: "MgBeat808",
    year: "2022",
    coverImage: "https://i.ytimg.com/vi/EP6uJOwjanA/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=EP6uJOwjanA",
  },
  {
    title: "Yedi Ki Chadar Type Beat | Marathi Sampled Beat",
    artist: "MgBeat808",
    year: "2023",
    coverImage: "https://i.ytimg.com/vi/Q7X3mM9RVcE/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=Q7X3mM9RVcE",
  },
];

const CREDITS = [
  {
    title: "Barood Rap Song - RD Music | Prod. by MgBeat",
    artist: "MGBeat",
    year: "2026",
    hue: 8,
    coverImage: "/images/barrod-song.png",
    videoUrl: "https://youtu.be/rOgvaKvsQF4?si=DH-35Bt4NGyli8dL",
  },
  {
    title: "Bewafa - RD Music | Prod. by MgBeat",
    artist: "MGBeat",
    year: "2025",
    hue: 34,
    coverImage: "https://i.ytimg.com/vi/p6wol0i1Y90/hqdefault.jpg",
    videoUrl: "https://youtu.be/p6wol0i1Y90?si=2jM19PnI-RDl82na",
  },
  {
    title: "Keheli Eyy Reet - Savar Music | Prod. by MgBeat",
    artist: "MGBeat",
    year: "2025",
    hue: 196,
    coverImage: "https://i.ytimg.com/vi/J_Xm437SxgE/hqdefault.jpg",
    videoUrl: "https://youtu.be/J_Xm437SxgE?si=coSrkkDSGzCNYCI-",
  },
  {
    title: "Ohli Walo Dil - Savar Music | Prod. by MgBeat",
    artist: "MGBeat",
    year: "2025",
    hue: 122,
    coverImage: "https://i.ytimg.com/vi/wNJDb8sVuZQ/hqdefault.jpg",
    videoUrl: "https://youtu.be/wNJDb8sVuZQ?si=v3E6yq1woNc3rInR",
  },
  {
    title: "Poyri Tu Mast (Part 2) - V Brothers Music | Beat Arranged by MgBeat",
    artist: "MGBeat",
    year: "2025",
    hue: 268,
    coverImage: "https://i.ytimg.com/vi/E5dXT7__OyE/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=E5dXT7__OyE",
  },
  {
    title: "Aadivasi Ne Jaat Mari - S. S. Pawara | Prod. by MgBeat",
    artist: "MGBeat",
    year: "2025",
    hue: 316,
    coverImage: "https://i.ytimg.com/vi/v4hLXamRV3A/hqdefault.jpg",
    videoUrl: "https://youtu.be/v4hLXamRV3A?si=_zuGoSt8JM-NzJi0",
  },
  {
    title: "INTRO OSHO - HipHop39 | Prod. by MgBeat",
    artist: "MGBeat",
    year: "2024",
    hue: 52,
    coverImage: "https://i2.ytimg.com/vi/5adi1w9ERKg/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=5adi1w9ERKg",
  },
  {
    title: "Ranbhumi - Dinesh Valvi x MgBeat | HipHop39",
    artist: "MGBeat",
    year: "2024",
    hue: 14,
    coverImage: "https://i3.ytimg.com/vi/N87CtgIyf5o/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=N87CtgIyf5o",
  },
  {
    title: "Khel - Aniruddh x MgBeat | HipHop39",
    artist: "MGBeat",
    year: "2024",
    hue: 214,
    coverImage: "https://i2.ytimg.com/vi/q-JwyLCkW6E/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=q-JwyLCkW6E",
  },
  {
    title: "Hurt Kari - Sumit Valvi x MgBeat | HipHop39",
    artist: "MGBeat",
    year: "2024",
    hue: 286,
    coverImage: "https://i2.ytimg.com/vi/I2xNY4RnN3c/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=I2xNY4RnN3c",
  },
  {
    title: "Shebudpus - Raja Phantha x MgBeat | HipHop39",
    artist: "MGBeat",
    year: "2024",
    hue: 168,
    coverImage: "https://i1.ytimg.com/vi/8TsZMQYuS44/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=8TsZMQYuS44",
  },
  {
    title: "Lover - Bhil Tiger x MgBeat | HipHop39",
    artist: "MGBeat",
    year: "2024",
    hue: 338,
    coverImage: "https://i3.ytimg.com/vi/NU8n-Xv-OAI/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=NU8n-Xv-OAI",
  },
  {
    title: "Legacy of 39 - Savar Music x MgBeat | HipHop39",
    artist: "MGBeat",
    year: "2024",
    hue: 196,
    coverImage: "https://i3.ytimg.com/vi/2m8YLv6IFeo/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=2m8YLv6IFeo",
  },
  { title: "Night Parade", artist: "MGBeat x Aira", year: "2026", hue: 205 },
  { title: "Afterglow", artist: "MGBeat x Nox", year: "2025", hue: 12 },
  { title: "Steel Heart", artist: "Ryen", year: "2025", hue: 154 },
  { title: "Shadowed", artist: "Luma", year: "2025", hue: 286 },
  { title: "Motion Blur", artist: "Wex", year: "2024", hue: 40 },
  { title: "No Sleep", artist: "Cane", year: "2024", hue: 330 },
  { title: "Empty Rooms", artist: "Irah", year: "2024", hue: 185 },
  { title: "Titan", artist: "Zane", year: "2023", hue: 250 },
];

const LINKTREE_CONTACTS = [
  {
    label: "Spotify",
    url: "https://open.spotify.com/artist/30KEXDYF7qImNbKUZnGM0d?si=oYUgmm4hQ36JczlWZfzEZw",
    icon: "https://cdn.simpleicons.org/spotify/1DB954",
  },
  {
    label: "Apple Music",
    url: "https://music.apple.com/in/artist/mgbeat/1777043053",
    icon: "https://cdn.simpleicons.org/applemusic/FA243C",
  },
  {
    label: "SoundCloud",
    url: "https://soundcloud.app.goo.gl/Eh8dk",
    icon: "https://cdn.simpleicons.org/soundcloud/FF5500",
  },
  {
    label: "Beat YouTube Channel",
    url: "https://www.youtube.com/@Mgbeat808",
    icon: "https://cdn.simpleicons.org/youtube/FF0000",
  },
  {
    label: "Songs YouTube Channel",
    url: "https://www.youtube.com/channel/UC9pVwC1I4cCwYL9Rb6fvT9w",
    icon: "https://cdn.simpleicons.org/youtube/FF0000",
  },
  {
    label: "Twitter",
    url: "https://twitter.com/_Mgbeat808?s=09",
    icon: "https://cdn.simpleicons.org/x/FFFFFF",
  },
  {
    label: "Facebook",
    url: "https://www.facebook.com/Mgbeat808/?notif_id=1625142663300472&notif_t=page_delete&ref=notif",
    icon: "https://cdn.simpleicons.org/facebook/1877F2",
  },
];

function App() {
  return (
    <div className="app" id="home">
      <Navbar />

      <main className="page-shell">
        <section className="hero" id="music">
          <p className="hero-kicker">MIX * MASTER</p>
          <h1>Producer and mix engineer crafting high-impact records.</h1>
          <p className="hero-copy">
            MGBeat helps artists translate rough ideas into polished releases with
            clean low-end, emotional dynamics, and competitive loudness.
          </p>
          <a className="hero-link" href="#beats">
            Explore Beats
          </a>
        </section>

        <section className="section-block" id="credits">
          <h2>Credits</h2>
          <div className="credits-grid">
            {CREDITS.filter((entry) => entry.videoUrl).map((entry) => (
              <article key={`${entry.title}-${entry.artist}`} className="credit-card">
                {entry.coverImage && (
                  <div
                    className="credit-cover credit-cover-image"
                    style={{ backgroundImage: `url(${entry.coverImage})` }}
                  />
                )}
                <h3>{entry.title}</h3>
                <p>{entry.artist}</p>
                <span>{entry.year}</span>
                {entry.videoUrl && (
                  <a
                    className="credit-video-link"
                    href={entry.videoUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Watch on YouTube
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="section-block beats-block" id="beats">
          <h2>Beats</h2>
          <p className="section-intro">
            Latest drops from the official YouTube channel @Mgbeat808.
          </p>
          <div className="beats-grid">
            {BEATS.map((beat) => (
              <article key={`${beat.title}-${beat.artist}`} className="beat-card">
                <div className="beat-cover" style={{ backgroundImage: `url(${beat.coverImage})` }} />
                <h3>{beat.title}</h3>
                <p>{beat.artist}</p>
                <span>{beat.year}</span>
                <a className="credit-video-link" href={beat.videoUrl} rel="noreferrer" target="_blank">
                  Listen on YouTube
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block contact-block" id="contact">
          <h2>Let&apos;s work together</h2>
          <a className="mail-link" href="mailto:ganeshmore8763@gmail.com">
            ganeshmore8763@gmail.com
          </a>
          <div className="contact-links">
            {LINKTREE_CONTACTS.map((item) => (
              <a
                key={item.label}
                className="contact-pill"
                href={item.url}
                rel="noreferrer"
                target="_blank"
              >
                <img alt="" aria-hidden="true" className="contact-pill-icon" src={item.icon} />
                {item.label}
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>(c) MgBeat 2026</p>
      </footer>
    </div>
  );
}

export default App;
