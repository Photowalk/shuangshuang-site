"use client";

import Image from "next/image";
import { DeviceFrame } from "@/components/site/DeviceFrame";

const heroCards = [
  {
    src: "/site-assets/emu_query_now.png",
    alt: "ShuangShuang query page",
    labelCn: "查询首页",
    labelEn: "Query home",
    className: "heroCard heroCardLeft",
  },
  {
    src: "/site-assets/pron_check.png",
    alt: "ShuangShuang pronunciation result page",
    labelCn: "点击发音",
    labelEn: "Tap to speak",
    className: "heroCard heroCardCenter",
  },
  {
    src: "/site-assets/emulator_wotd_listen2.png",
    alt: "ShuangShuang WOTD listening page",
    labelCn: "每日一次",
    labelEn: "Daily ritual",
    className: "heroCard heroCardRight",
  },
];

const featureCards = [
  {
    id: "daily",
    eyebrow: "Daily Ritual",
    title: "每天一个自然的开始。",
    lead: "Word of the Day 不是一张装饰卡片，而是把学习动作轻轻推开的起点。",
    body: [
      "今天学什么，不需要先想。打开应用，就已经有一个入口在等你。",
      "点进讲解，继续往下听；从单词进入听力，而不是从功能菜单进入功能菜单。",
    ],
    image: "/site-assets/emulator_wotd_listen2.png",
    labelCn: "每日一次",
    labelEn: "A natural start",
    tone: "teal",
  },
  {
    id: "lookup",
    eyebrow: "Lookup That Speaks",
    title: "查到，马上就能听到。",
    lead: "结果页里的英式和美式发音不是附加说明，而是查词动作本身的一部分。",
    body: [
      "你不用切到别的页面，也不用再找一个播放入口。",
      "音标、释义、发音落在同一块信息里，理解会更连贯。",
    ],
    image: "/site-assets/pron_check.png",
    labelCn: "结果发音",
    labelEn: "UK / US playback",
    tone: "slate",
  },
  {
    id: "listen",
    eyebrow: "Listen With Context",
    title: "不是孤立播放器，是理解界面。",
    lead: "ShuangShuang 把听力、字幕、查词放在同一条路径里，让理解比切换页面更自然。",
    body: [
      "字幕不是摆设。它可以高亮、跳转、继续引导回查词。",
      "从一句话听不懂，到一个词查明白，中间不需要重新组织你的注意力。",
    ],
    image: "/site-assets/emu_query_now.png",
    labelCn: "听力联动",
    labelEn: "Context-led listening",
    tone: "mist",
  },
  {
    id: "system",
    eyebrow: "A Calm Learning System",
    title: "所有功能，最后变成一种节奏。",
    lead: "查询、每日一次、听力、历史记录和更新体验不是碎片，而是一套平静连续的学习流。",
    body: [
      "它不会不停打断你，不会到处堆按钮，也不会把重要操作做得很吵。",
      "产品的存在感降低以后，真正留下来的才是每天都愿意继续的节奏。",
    ],
    image: "/site-assets/about_page_check.png",
    labelCn: "平静系统",
    labelEn: "Calm by default",
    tone: "cream",
  },
];

const statCards = [
  { value: "WOTD", captionCn: "每天都有自然入口", captionEn: "A daily starting point" },
  { value: "UK / US", captionCn: "结果页直接发音", captionEn: "Direct pronunciation playback" },
  { value: "字幕联动", captionCn: "查词与听力连续衔接", captionEn: "Listening linked to lookup" },
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
        <div className="topbar">
          <div className="wordmark">
            <div className="wordmarkIcon">
              <Image
                src="/site-assets/logo-current.png"
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
          <p className="topbarMeta">A private Android learning product shaped around calm daily use.</p>
        </div>

        <section className="heroLayout">
          <div className="heroCopy">
            <p className="eyebrow">Calm English, Every Day</p>
            <h1 className="heroTitle">把查词、发音与听力，放进同一条安静的学习流里。</h1>
            <p className="heroLeadCn">
              ShuangShuang 不是把很多英语功能塞进一页里，而是把每天真正会发生的动作，排成一条顺手、连续、可回来的路径。
            </p>
            <p className="heroLeadEn">
              Word of the Day, tap-to-speak lookup, and subtitle-led listening in one quiet flow.
            </p>
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
              向下看
              <span>Scroll</span>
            </button>
          </div>

          <div className="heroVisual">
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
          </div>
        </section>
      </header>

      <section className="storyBand" aria-label="Product rhythm overview">
        <div className="storyMosaic">
          <div className="storyPanel storyPanelLeft">
            <Image
              src="/site-assets/emulator_wotd_listen2.png"
              alt="Word of the Day detail"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="storyPanelImage"
            />
          </div>
          <div className="storyPanel storyPanelCenter">
            <Image
              src="/site-assets/pron_check.png"
              alt="Pronunciation result"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="storyPanelImage storyPanelImageCenter"
            />
          </div>
          <div className="storyPanel storyPanelRight">
            <Image
              src="/site-assets/emu_query_now.png"
              alt="Listening interface"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="storyPanelImage"
            />
          </div>
          <div className="storyCopy">
            <p className="storyOverline">A calm learning rhythm</p>
            <h2 className="storyTitle">每天一个入口，顺手一查，继续往下听。</h2>
            <p className="storyLead">
              From a daily word to a spoken result, then into listening with context.
            </p>
          </div>
        </div>
      </section>

      {featureCards.map((section, index) => (
        <section
          id={section.id}
          key={section.id}
          className={`featureSection tone-${section.tone} ${index % 2 === 1 ? "featureReverse" : ""}`}
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
        </section>
      ))}

      <footer className="siteFooter">
        <p className="footerOverline">ShuangShuang</p>
        <h2 className="footerTitle">把学习做得更连贯，比把功能做得更多更重要。</h2>
        <p className="footerBody">
          Built from the current Android release line. Designed as a product story, not a download funnel.
        </p>
        <p className="footerMeta">Product page concept · Release line 2026.03.15.2</p>
      </footer>
    </main>
  );
}
