import Link from "next/link";
import { SiteFooter, SiteHeader } from "./site-chrome";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="home-stage">
        <p className="kicker home-kicker">Floral design · Northern Virginia</p>
        <div className="home-title" aria-label="Flowers, composed">
          <span>FLO</span><span>WERS</span><i>composed</i>
        </div>
        <figure className="home-image">
          <img src="/IMG_0642.jpg" alt="Sculptural seasonal floral arrangement" />
          <figcaption> Contemporary / Revolved / One of one</figcaption>
        </figure>
        <Link className="orbit-link" href="/work"><span>Enter the studio</span><b>↗</b></Link>
        <span className="edition">Setare Studies · No. 01</span>
      </section>
      <SiteFooter />
    </main>
  );
}
