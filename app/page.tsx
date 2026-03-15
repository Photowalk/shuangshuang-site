"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { DeviceFrame } from "@/components/site/DeviceFrame";
import { siteCopy } from "@/content/site-copy";

const easing = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easing },
  },
};

const heroCards = [
  {
    src: "/site-assets/emu_query_now.png",
    alt: "ShuangShuang query page",
    labelCn: "????",
    labelEn: "Query home",
    className: "heroCard heroCardLeft",
  },
  {
    src: "/site-assets/pron_check.png",
    alt: "ShuangShuang pronunciation result page",
    labelCn: "????",
    labelEn: "Tap to speak",
    className: "heroCard heroCardCenter",
  },
  {
    src: "/site-assets/emulator_wotd_listen2.png",
    alt: "ShuangShuang WOTD listening page",
    labelCn: "????",
    labelEn: "Daily ritual",
    className: "heroCard heroCardRight",
  },
];

const featureCards = [
  {
    id: "daily",
    eyebrow: "Daily Ritual",
    title: "?????????????????",
    lead: "Word of the Day ??????????????????????????????",
    body: [
      "???????????????????????????????",
      "? WOTD ?????????????????????????????????",
    ],
    image: "/site-assets/emulator_wotd_listen2.png",
    labelCn: "Word of the Day",
    labelEn: "A natural start",
    tone: "teal",
  },
  {
    id: "lookup",
    eyebrow: "Lookup That Speaks",
    title: "??????????????",
    lead: "????????????????????????????????????????",
    body: [
      "????????????????????????",
      "???????????????????????",
    ],
    image: "/site-assets/pron_check.png",
    labelCn: "????",
    labelEn: "UK / US playback",
    tone: "slate",
  },
  {
    id: "listen",
    eyebrow: "Listen With Context",
    title: "????????????????????",
    lead: "ShuangShuang ????????????????????????????????????",
    body: [
      "???????????????????????????????",
      "????????????????????????????????",
    ],
    image: "/site-assets/emu_query_now.png",
    labelCn: "????",
    labelEn: "Context-led listening",
    tone: "mist",
  },
  {
    id: "system",
    eyebrow: "A Calm Learning System",
    title: "?????????????????????",
    lead: "????????????????????????????????????????????????",
    body: [
      "???????????????????????????????????",
      "???????????? CTA????????????????",
    ],
    image: "/site-assets/about_page_check.png",
    labelCn: "????",
    labelEn: "Calm by default",
    tone: "cream",
  },
];

const statCards = [
  { value: "WOTD", captionCn: "????????", captionEn: "A daily starting point" },
  { value: "UK / US", captionCn: "???????", captionEn: "Direct pronunciation playback" },
  { value: "????", captionCn: "?????????", captionEn: "Listening linked to lookup" },
];

export default function Home() {
  const scrollToFirstSection = () => {
    const target = document.getElementById("daily");
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="siteShell">
      <div className="siteBackdrop" />
      <header className="heroSection">
        <motion.div
          className="topbar"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <div className="wordmark">
            <div className="wordmarkIcon">
              <Image
                src="/site-assets/logo-foreground.png"
                alt="ShuangShuang logo"
                fill
                sizes="56px"
                priority
              />
            </div>
            <div>
              <p className="wordmarkName">ShuangShuang</p>
              <p className="wordmarkTag">A calm English flow</p>
            </div>
          </div>
          <p className="topbarMeta">An Android product page for a private learning app</p>
        </motion.div>

        <section className="heroLayout">
          <motion.div
            className="heroCopy"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <p className="eyebrow">{siteCopy.hero.eyebrow}</p>
            <h1 className="heroTitle">{siteCopy.hero.title}</h1>
            <p className="heroLeadCn">{siteCopy.hero.leadCn}</p>
            <p className="heroLeadEn">{siteCopy.hero.leadEn}</p>
            <div className="heroStats">
              {statCards.map((card) => (
                <div key={card.value} className="statCard">
                  <span className="statValue">{card.value}</span>
                  <p className="statCaptionCn">{card.captionCn}</p>
                  <p className="statCaptionEn">{card.captionEn}</p>
                </div>
              ))}
            </div>
            <button type="button" className="scrollButton" onClick={scrollToFirstSection}>
              ????
              <span>Scroll</span>
            </button>
          </motion.div>

          <motion.div
            className="heroVisual"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: easing }}
          >
            <div className="heroHalo heroHaloPrimary" />
            <div className="heroHalo heroHaloSecondary" />
            {heroCards.map((card) => (
              <DeviceFrame
                key={card.alt}
                src={card.src}
                alt={card.alt}
                labelCn={card.labelCn}
                labelEn={card.labelEn}
                className={card.className}
                priority
              />
            ))}
          </motion.div>
        </section>
      </header>

      <section className="bannerStrip" aria-hidden="true">
        <div className="bannerMedia">
          <Image
            src="/site-assets/logo-source.png"
            alt=""
            fill
            sizes="100vw"
            className="bannerImage"
          />
        </div>
      </section>

      {featureCards.map((section, index) => (
        <motion.section
          id={section.id}
          key={section.id}
          className={`featureSection tone-${section.tone} ${index % 2 === 1 ? "featureReverse" : ""}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <div className="featureCopy">
            <p className="eyebrow">{section.eyebrow}</p>
            <h2 className="sectionTitle">{section.title}</h2>
            <p className="sectionLead">{section.lead}</p>
            <div className="sectionBody">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="featureVisual">
            <div className="featureGlow" />
            <DeviceFrame
              src={section.image}
              alt={section.title}
              labelCn={section.labelCn}
              labelEn={section.labelEn}
              priority={index < 2}
              className="featureDevice"
            />
          </div>
        </motion.section>
      ))}

      <motion.footer
        className="siteFooter"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
      >
        <p className="footerOverline">ShuangShuang</p>
        <h2 className="footerTitle">??????????????????????????</h2>
        <p className="footerBody">
          Built from the current Android release line. Designed as a focused product story, not a download funnel.
        </p>
        <p className="footerMeta">Product page concept ? Release line 2026.03.15.2</p>
      </motion.footer>
    </main>
  );
}
