import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const MENU_DATA = [
  {
    id: "hookah",
    title: "قسم الاراكيل",
    subtitle: "Hookah / Shisha",
    items: [
      { name: "نعناع", price: 2000 },
      { name: "ليمون نعناع", price: 2000 },
      { name: "علك نعناع", price: 2000 },
      { name: "انكليزي", price: 2000 },
      { name: "تفاحتين", price: 2000 },
      { name: "تفاحتين النخلة", price: 3000 },
    ],
  },
  {
    id: "german-hookah",
    title: "الارجيلة الالماني",
    subtitle: "German Hookah",
    items: [
      { name: "ديجافو", price: 3000 },
      { name: "باونتي", price: 3000 },
      { name: "معجنات", price: 3000 },
      { name: "انكليزي", price: 3000 },
      { name: "بغدادي", price: 3000 },
      { name: "نعناع", price: 3000 },
      { name: "خوخ", price: 3000 },
      { name: "عنب ونعناع", price: 3000 },
      { name: "حمضيات", price: 3000 },
      { name: "ليمون ونعناع", price: 3000 },
      { name: "علك ونعناع", price: 3000 },
      { name: "جيران", price: 3000 },
      { name: "برتقال", price: 3000 },
      { name: "تفاحتين النخلة", price: 3000 },
    ],
  },
  {
    id: "hot-coffee",
    title: "القهوة الساخنة",
    subtitle: "Hot Coffee",
    items: [
      { name: "قهوة سادة", price: 1000 },
      { name: "قهوة وسط", price: 1000 },
      { name: "قهوة حلوة", price: 1000 },
      { name: "قهوة بستاشيو", price: 1500 },
      { name: "قهوة تركية", price: 1500 },
    ],
  },
  {
    id: "specialty-coffee",
    title: "القهوة المختصة",
    subtitle: "Specialty Coffee",
    items: [
      { name: "اسبريسو سنكل", price: 2500 },
      { name: "اسبريسو دبل", price: 3000 },
      { name: "لاتيه", price: 3000 },
      { name: "موكا", price: 3000 },
      { name: "وايت موكا", price: 3000 },
      { name: "كورتادو", price: 3000 },
      { name: "فلات وايت", price: 3000 },
      { name: "سبانش لاتيه", price: 3000 },
      { name: "افوكادو", price: 4000 },
    ],
  },
  {
    id: "iced-coffee",
    title: "القهوة الباردة",
    subtitle: "Iced Coffee",
    items: [
      { name: "ايس سبانش", price: 3000 },
      { name: "ايس لاتيه", price: 3000 },
      { name: "ايس بستاشيو لاتيه", price: 3000 },
      { name: "ايس موكا", price: 3000 },
      { name: "ايس وايت موكا", price: 3000 },
      { name: "امريكانو", price: 3000 },
      { name: "كراميل مكياتو", price: 3500 },
      { name: "شوكولا مثلجة", price: 3000 },
      { name: "لاتيه بستاشيو", price: 3500 },
    ],
  },
  {
    id: "crepes",
    title: "كريب - حلا",
    subtitle: "Crepes",
    items: [
      { name: "فواكه", price: 4000 },
      { name: "بستاشيو", price: 4000 },
      { name: "صاج كريب", price: 4000 },
      { name: "كريب لوتس", price: 4000 },
      { name: "سوشي كريب", price: 4000 },
      { name: "فوتوتشيني كريب", price: 4000 },
      { name: "جيران لغم", price: 5000 },
    ],
  },
  {
    id: "waffles",
    title: "وافل - حلا",
    subtitle: "Waffles",
    items: [
      { name: "وافل فواكه", price: 4000 },
      { name: "وافل بستاشيو", price: 4000 },
      { name: "وافل لوتس", price: 4000 },
    ],
  },
  {
    id: "desserts",
    title: "حلويات",
    subtitle: "Desserts",
    items: [
      { name: "قطعة كيك", price: 1500 },
      { name: "حلا كاسة", price: 1500 },
      { name: "بان كيك", price: 4000 },
      { name: "مني بان كيك", price: 4000 },
    ],
  },
  {
    id: "fresh-juices",
    title: "العصائر",
    subtitle: "Fresh Juices",
    items: [
      { name: "برتقال", price: 1500 },
      { name: "موز", price: 1500 },
      { name: "بطيخ", price: 1500 },
      { name: "ليمون", price: 2500 },
      { name: "ليمون ونعناع", price: 2500 },
      { name: "برتقال وليمون", price: 2500 },
      { name: "برتقال وجزر", price: 2500 },
      { name: "كيوي ليمون", price: 2500 },
      { name: "فراولة", price: 2500 },
      { name: "موز فراولة", price: 2500 },
      { name: "نوتيلا فراولة", price: 2500 },
      { name: "مشمش", price: 2500 },
      { name: "رمان", price: 2500 },
      { name: "مانكا", price: 3000 },
      { name: "اناناس", price: 3000 },
      { name: "خوخ", price: 3000 },
      { name: "كيوي", price: 3000 },
      { name: "موز ملكي بالمكسرات", price: 3000 },
      { name: "موز اوريو", price: 3000 },
      { name: "موز بستاشيو", price: 3000 },
      { name: "موز بالعسل والمكسرات", price: 4000 },
      { name: "كوكتيل", price: 3000 },
    ],
  },
  {
    id: "smoothies",
    title: "سموذي",
    subtitle: "Smoothies",
    items: [
      { name: "اناناس", price: 3000 },
      { name: "مانكا", price: 3000 },
      { name: "خوخ", price: 3000 },
      { name: "حمضيات", price: 3000 },
      { name: "بلوبيري", price: 3000 },
      { name: "فراولة", price: 3000 },
      { name: "فراولة ونوتيلا", price: 3000 },
    ],
  },
  {
    id: "mojitos",
    title: "موهيتو",
    subtitle: "Mojitos",
    items: [
      { name: "ليمون ونعناع", price: 2500 },
      { name: "فراولة", price: 2500 },
      { name: "مكس توت", price: 2500 },
      { name: "مانكا", price: 2500 },
      { name: "بلوبيري", price: 2500 },
      { name: "خوخ", price: 2500 },
      { name: "بلو كراساو", price: 2500 },
    ],
  },
  {
    id: "milkshakes",
    title: "ميلك شيك",
    subtitle: "Milkshakes",
    items: [
      { name: "كيت كات", price: 3000 },
      { name: "اوريو", price: 3000 },
      { name: "نوتيلا", price: 3000 },
      { name: "بستاشيو", price: 3000 },
    ],
  },
  {
    id: "hot-drinks",
    title: "المشروبات الساخنة",
    subtitle: "Hot Drinks",
    items: [
      { name: "شاي", price: 500 },
      { name: "شاي دبل", price: 1000 },
      { name: "حامض", price: 500 },
      { name: "حامض دبل", price: 1000 },
      { name: "شاي حليب", price: 1000 },
      { name: "هوت شوكليت", price: 2000 },
      { name: "كابتشينو", price: 1000 },
      { name: "هوت لوتس", price: 2000 },
    ],
  },
  {
    id: "cold-drinks",
    title: "المشروبات الباردة",
    subtitle: "Cold Drinks",
    items: [
      { name: "ماء", price: 250 },
      { name: "ماء 750 زجاج", price: 1500 },
      { name: "كلاص ثلج وليمون", price: 250 },
      { name: "بيبسي", price: 500 },
      { name: "بيبسي دايت", price: 500 },
      { name: "مكسيكي", price: 2000 },
      { name: "مكسيكي رمان", price: 2000 },
    ],
  },
  {
    id: "snacks",
    title: "كرزات وشيبس",
    subtitle: "Snacks",
    items: [
      { name: "كرزات", price: 1000 },
      { name: "شيبس", price: 1000 },
    ],
  },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(MENU_DATA[0].id);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isClickScrolling = useRef(false);
  const clickScrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    document.documentElement.classList.add("dark");
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "ar";
    document.body.classList.add("bg-background");

    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;

        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          const mostVisible = visibleEntries.reduce((prev, current) =>
            prev.intersectionRatio > current.intersectionRatio ? prev : current
          );
          setActiveCategory(mostVisible.target.id);

          const activePill = document.getElementById(`pill-${mostVisible.target.id}`);
          if (activePill && scrollContainerRef.current) {
            activePill.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    MENU_DATA.forEach((category) => {
      const element = document.getElementById(category.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToCategory = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      isClickScrolling.current = true;
      setActiveCategory(id);

      const activePill = document.getElementById(`pill-${id}`);
      if (activePill && scrollContainerRef.current) {
        activePill.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }

      const yOffset = -120;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });

      if (clickScrollTimer.current) clearTimeout(clickScrollTimer.current);
      clickScrollTimer.current = setTimeout(() => {
        isClickScrolling.current = false;
      }, 800);
    }
  };

  return (
    <div className="min-h-[100dvh] w-full text-foreground pb-20 font-[family-name:var(--font-arabic)] selection:bg-primary selection:text-primary-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/5 border-t-0 border-l-0 border-r-0">
        <div className="flex flex-col items-center justify-center pt-5 pb-3">
          <h1 className="text-4xl font-bold text-primary tracking-wide drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">
            جيران
          </h1>
          <p className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground mt-1 font-sans">
            Executive Lounge
          </p>
        </div>

        {/* Category Navigation */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto hide-scrollbar gap-3 px-4 py-3 snap-x snap-mandatory"
          dir="rtl"
        >
          {MENU_DATA.map((category) => (
            <button
              key={category.id}
              id={`pill-${category.id}`}
              onClick={() => scrollToCategory(category.id)}
              className={`snap-center shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                activeCategory === category.id
                  ? "bg-accent text-accent-foreground shadow-[0_0_12px_rgba(127,219,255,0.3)]"
                  : "bg-white/5 text-muted-foreground hover:bg-white/10"
              }`}
              data-testid={`nav-pill-${category.id}`}
            >
              {category.title}
            </button>
          ))}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-36 px-4 max-w-2xl mx-auto space-y-12">
        {MENU_DATA.map((category) => (
          <section key={category.id} id={category.id} className="scroll-m-32">
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-bold text-primary mb-1">{category.title}</h2>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-sans" dir="ltr">
                {category.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {category.items.map((item, index) => (
                <motion.div
                  key={`${category.id}-${index}`}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.2, delay: index * 0.03 }}
                  className="glass-card rounded-xl p-4 flex items-center justify-between group hover:border-primary/40 transition-colors"
                  data-testid={`menu-item-${item.name}`}
                >
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold text-foreground/90 group-hover:text-white transition-colors">
                      {item.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 font-sans font-medium text-primary bg-primary/10 px-3 py-1 rounded-lg">
                    <span>{item.price.toLocaleString()}</span>
                    <span className="text-xs ml-1 opacity-80" dir="rtl">د.ع</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Footer decorative */}
      <footer className="mt-16 py-8 text-center border-t border-white/5 mx-4 max-w-2xl sm:mx-auto">
        <p className="text-muted-foreground text-sm font-sans">
          &copy; {new Date().getFullYear()} Jeeran Lounge
        </p>
      </footer>
    </div>
  );
}
