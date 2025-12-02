// HPI 1.5-V
import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BaseCrudService } from '@/integrations';
import { BrandPillars, RitualTeaBlends, Ingredients, EveningRitualSteps, WellnessBenefits, CustomerTestimonials, SustainabilityOriginPoints } from '@/entities';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Leaf, Droplets, Sun, Moon, Wind } from 'lucide-react';

// --- UTILITY COMPONENTS ---

// Mandatory AnimatedElement for scroll reveals
type AnimatedElementProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

const AnimatedElement: React.FC<AnimatedElementProps> = ({ children, className, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // Add a small delay via style if needed, or just let CSS handle it
        setTimeout(() => {
            element.classList.add('is-visible');
        }, delay);
        observer.unobserve(element);
      }
    }, { threshold: 0.1 });

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay]);

  return <div ref={ref} className={`opacity-0 translate-y-8 transition-all duration-1000 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${className || ''} [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0`}>{children}</div>;
};

// Custom Sticky Section Component for "The Ritual"
const StickyScrollSection = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative w-full">
            {children}
        </div>
    );
};

// --- MAIN COMPONENT ---

export default function HomePage() {
  // --- DATA FIDELITY PROTOCOL: CANONICAL DATA SOURCES ---
  const [brandPillars, setBrandPillars] = useState<BrandPillars[]>([]);
  const [teaBlends, setTeaBlends] = useState<RitualTeaBlends[]>([]);
  const [ingredients, setIngredients] = useState<Ingredients[]>([]);
  const [ritualSteps, setRitualSteps] = useState<EveningRitualSteps[]>([]);
  const [wellnessBenefits, setWellnessBenefits] = useState<WellnessBenefits[]>([]);
  const [testimonials, setTestimonials] = useState<CustomerTestimonials[]>([]);
  const [sustainabilityPoints, setSustainabilityPoints] = useState<SustainabilityOriginPoints[]>([]);

  // --- PRESERVE: ORIGINAL FETCHING LOGIC ---
  useEffect(() => {
    const fetchData = async () => {
      const [pillarsData, blendsData, ingredientsData, stepsData, benefitsData, testimonialsData, sustainabilityData] = await Promise.all([
        BaseCrudService.getAll<BrandPillars>('brandpillars'),
        BaseCrudService.getAll<RitualTeaBlends>('ritualteablends'),
        BaseCrudService.getAll<Ingredients>('ingredients'),
        BaseCrudService.getAll<EveningRitualSteps>('eveningritualsteps'),
        BaseCrudService.getAll<WellnessBenefits>('wellnessbenefits'),
        BaseCrudService.getAll<CustomerTestimonials>('customertestimonials'),
        BaseCrudService.getAll<SustainabilityOriginPoints>('sustainabilityoriginpoints'),
      ]);

      setBrandPillars(pillarsData.items.sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0)));
      setTeaBlends(blendsData.items.slice(0, 4));
      setIngredients(ingredientsData.items.slice(0, 6));
      setRitualSteps(stepsData.items.sort((a, b) => (a.stepNumber || 0) - (b.stepNumber || 0)));
      setWellnessBenefits(benefitsData.items.filter(b => b.isActive).sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0)).slice(0, 6));
      setTestimonials(testimonialsData.items);
      setSustainabilityPoints(sustainabilityData.items);
    };

    fetchData();
  }, []);

  // --- LOCAL STATE FOR INTERACTIVITY ---
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
      <div className="min-h-screen bg-warm-cream text-foreground font-paragraph overflow-clip selection:bg-primary/30 selection:text-foreground">
          {/* --- HERO SECTION: CINEMATIC IMMERSION --- */}
          <section className="relative h-[95vh] w-full overflow-hidden flex items-center justify-center">
            {/* Background Parallax Layer */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://static.wixstatic.com/media/b117e9_3d5a530246504ea09200601398049b03~mv2.gif"
                    className="w-full h-full object-cover object-center scale-105 animate-slow-zoom"
                    originWidth={960}
                    originHeight={540} />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-warm-cream via-transparent to-transparent opacity-20" />
            </div>

            {/* Content Layer */}
            <div className="relative z-10 text-center px-4 max-w-[100rem] mx-auto flex flex-col items-center">
                <AnimatedElement>
                    <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-xs font-medium tracking-[0.2em] text-white uppercase mb-6 backdrop-blur-sm">{"Est. ANCIENT INDIA"}</span>
                </AnimatedElement>
                
                <AnimatedElement delay={200}>
                    <div className="mb-8 gap-0 py-4 px-6" style={{ lineHeight: '0.8' }}>
                        <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold text-[#E8D5C4]" style={{
                          letterSpacing: '0.04em',
                          fontWeight: '700',
                          lineHeight: '0.8'
                        }}>
                            Saanjh
                        </h1>
                        <p className="font-heading text-2xl md:text-4xl font-light text-[#E8D5C4]" style={{
                          letterSpacing: '0.2em',
                          fontWeight: '300',
                          lineHeight: '0.8'
                        }}>
                            RITUALS
                        </p>
                    </div>
                </AnimatedElement>

                <AnimatedElement delay={400}>
                    <p className="font-paragraph text-lg md:text-2xl text-white/90 max-w-2xl mx-auto mb-12 font-light leading-relaxed drop-shadow-lg">
                        Ancestral botanicals meet golden-hour calm. <br className="hidden md:block"/>
                        Handcrafted blends for the modern soul.
                    </p>
                </AnimatedElement>

                <AnimatedElement delay={600}>
                    <div className="flex flex-col sm:flex-row gap-6 items-center">
                        <Link to="/store">
                            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-7 text-lg rounded-full transition-all duration-500 hover:scale-105 shadow-[0_0_30px_-10px_rgba(197,164,109,0.6)]">
                                Shop Ritual Blends
                            </Button>
                        </Link>
                        <div className="hidden sm:block w-px h-8 bg-white/30" />
                        <a href="#evening-ritual" className="group flex items-center gap-2 text-white hover:text-primary transition-colors duration-300">
                            <span className="text-lg border-b border-transparent group-hover:border-primary pb-1 text-secondary-foreground">{"Our Psychology"}</span>
                            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </AnimatedElement>
            </div>

          </section>
          {/* --- SAANJH RITUAL CALLOUT: PREMIUM SPLIT LAYOUT --- */}
          <section className="md:px-12 bg-warm-cream relative overflow-hidden py-0 px-12 pt-[100px] pr-12 pb-[45px] pl-12">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
                    {/* Left: Text Content */}
                    <div>
                        <AnimatedElement>
                            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-6 block">The Saanjh Ritual</span>
                            <h2 className="font-heading text-5xl md:text-7xl text-foreground leading-tight mb-10">
                                "In the quiet glow of evening, when the world softens and the sky turns gold, there exists a sacred pause."
                            </h2>
                        </AnimatedElement>
                        
                        <div className="space-y-6">
                            <AnimatedElement delay={200}>
                                <p className="text-xl text-foreground/85 leading-relaxed font-light">
                                    Saanjh—the golden hour—is more than a moment in time. It is a ritual of return, a gentle invitation to ground yourself in ancestral wisdom. We believe in the power of slowing down, of savoring the transition from day to night.
                                </p>
                            </AnimatedElement>
                            <AnimatedElement delay={400}>
                                <p className="text-xl text-foreground/85 leading-relaxed font-light">
                                    Each blend is a meditation, crafted from rare Ayurvedic botanicals sourced from the foothills of the Himalayas. We honor the slow, the sensory, the sacred. This is wellness as it was meant to be—rooted in heritage, elevated by intention.
                                </p>
                            </AnimatedElement>
                            <AnimatedElement delay={600}>
                                <p className="text-lg text-foreground/70 leading-relaxed italic border-l-4 border-primary pl-6 py-4">
                                    "Saanjh is not just about what you drink—it's about who you become when you pause, breathe, and reconnect with the ancient wisdom flowing through your veins."
                                </p>
                            </AnimatedElement>
                        </div>
                    </div>

                    {/* Right: Decorative Visual */}
                    <AnimatedElement delay={300} className="h-full">
                        <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://static.wixstatic.com/media/b117e9_10da8a33b781414794e9cc8274613802~mv2.png?originWidth=1664&originHeight=896"
                                alt="Golden hour ritual with chai steam and macro spices"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        </div>
                    </AnimatedElement>
                </div>
            </div>
          </section>
          {/* --- PILLARS SECTION: ICONOGRAPHY --- */}
          <section className="bg-white/50 border-y border-primary/10 py-0 px-4 pt-10 pr-4 pb-5 pl-4">
            <div className="max-w-[100rem] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-primary/10">
                    {brandPillars.map((pillar, index) => (
                        <AnimatedElement key={pillar._id} delay={index * 150} className="px-4 md:px-12 py-8 text-center group hover:bg-white transition-colors duration-500 rounded-2xl">
                            <div className="mb-8 flex justify-center">
                                <div className="w-20 h-20 rounded-full bg-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-primary/20">
                                    {pillar.pillarIcon ? (
                                        <Image
                                            src={pillar.pillarIcon}
                                            alt={pillar.pillarName || ''}
                                            className="w-10 h-10 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                                        />
                                    ) : (
                                        <Sun className="w-10 h-10 text-primary" />
                                    )}
                                </div>
                            </div>
                            <h3 className="font-heading text-2xl font-semibold text-foreground mb-4 tracking-wide">
                                {pillar.pillarName}
                            </h3>
                            <p className="font-paragraph text-base text-foreground/60 leading-relaxed mb-6">
                                {pillar.shortDescription}
                            </p>
                            {pillar.callToActionText && (
                                <span className="text-xs font-bold uppercase tracking-widest text-primary border-b border-primary/30 pb-1 group-hover:border-primary transition-colors">
                                    {pillar.callToActionText}
                                </span>
                            )}
                        </AnimatedElement>
                    ))}
                </div>
            </div>
          </section>
          {/* --- PRODUCT SHOWCASE: MAGAZINE SPREAD --- */}
          <section className="py-32 px-4 bg-warm-cream">
            <div className="max-w-[100rem] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 px-4">
                    <AnimatedElement>
                        <h2 className="font-heading text-5xl md:text-7xl text-foreground mb-4">
                            The Collection
                        </h2>
                        <p className="font-paragraph text-xl text-foreground/60 max-w-md">
                            Curated botanicals for your evening sanctuary.
                        </p>
                    </AnimatedElement>
                    <AnimatedElement delay={200}>
                        <Link to="/store">
                            <Button variant="outline" className="hidden md:flex border-foreground/20 hover:bg-foreground hover:text-white rounded-full px-8 py-6">
                                View All Blends <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                    </AnimatedElement>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 lg:gap-y-24">
                    {teaBlends.map((blend, index) => (
                        <AnimatedElement key={blend._id} delay={index * 100} className={`group ${index % 2 !== 0 ? 'md:translate-y-24' : ''}`}>
                            <Link to="/store" className="block">
                                <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-8 bg-[#F0EBE5]">
                                    {blend.mainImage && (
                                        <Image
                                            src={blend.mainImage}
                                            alt={blend.blendName || ''}
                                            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                                        />
                                    )}
                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                        <div className="bg-white/90 backdrop-blur-md px-8 py-4 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <span className="text-foreground font-medium tracking-widest uppercase text-sm">View Ritual</span>
                                        </div>
                                    </div>
                                    {/* Badge */}
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                                        <span className="text-xs font-bold tracking-wider uppercase text-foreground/80">{blend.healingUSP || 'Ritual Blend'}</span>
                                    </div>
                                </div>
                                
                                <div className="flex justify-between items-start border-t border-foreground/10 pt-6">
                                    <div>
                                        <h3 className="font-heading text-3xl font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                                            {blend.blendName}
                                        </h3>
                                        <p className="font-paragraph text-sm text-foreground/60 max-w-xs">
                                            {blend.keyBenefits}
                                        </p>
                                    </div>
                                    <span className="font-paragraph text-xl font-medium text-foreground">
                                        ${blend.price?.toFixed(2)}
                                    </span>
                                </div>
                            </Link>
                        </AnimatedElement>
                    ))}
                </div>
                
                <div className="mt-24 text-center md:hidden">
                    <Link to="/store">
                        <Button className="bg-foreground text-white rounded-full px-10 py-6 w-full">
                            View All Blends
                        </Button>
                    </Link>
                </div>
            </div>
          </section>
          {/* --- INGREDIENT ALCHEMY: HORIZONTAL SCROLL --- */}
          <section className="py-32 bg-dark-herbal-green text-warm-cream overflow-hidden">
            <div className="max-w-[100rem] mx-auto px-4 mb-16">
                <AnimatedElement>
                    <h2 className="font-heading text-5xl md:text-6xl mb-6">Botanical Alchemy</h2>
                    <p className="text-warm-cream/70 text-lg max-w-2xl">
                        We source only the finest, most potent ingredients from their native origins. 
                        Macro visions of nature's healing treasures.
                    </p>
                </AnimatedElement>
            </div>

            {/* Marquee-like effect wrapper */}
            <div className="relative w-full overflow-x-auto pb-12 hide-scrollbar cursor-grab active:cursor-grabbing">
                <div className="flex gap-6 px-4 md:px-12 w-max">
                    {ingredients.map((ingredient, index) => (
                        <div 
                            key={ingredient._id} 
                            className="relative w-[280px] md:w-[350px] aspect-[3/4] flex-shrink-0 group overflow-hidden rounded-xl bg-black/20"
                        >
                            {ingredient.macroImage && (
                                <Image
                                    src={ingredient.macroImage}
                                    alt={ingredient.ingredientName || ''}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                            <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-xs font-bold tracking-widest uppercase text-primary mb-2">{ingredient.origin}</p>
                                <h3 className="font-heading text-3xl text-white mb-2">{ingredient.ingredientName}</h3>
                                <p className="text-sm text-white/70 line-clamp-2 group-hover:line-clamp-none transition-all">
                                    {ingredient.botanicalName}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </section>
          {/* --- THE RITUAL: STICKY STEPS --- */}
          <section id="evening-ritual" className="py-32 px-4 bg-soft-rose-beige/30">
            <div className="max-w-[100rem] mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    {/* Sticky Header */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-32">
                            <AnimatedElement>
                                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">The Process</span>
                                <h2 className="font-heading text-5xl md:text-7xl text-foreground mb-8">
                                    The Evening <br/> Ritual
                                </h2>
                                <p className="text-lg text-foreground/70 mb-12 leading-relaxed">
                                    A sacred sequence designed to help you transition from the busyness of doing to the stillness of being. Follow these steps to unlock the full healing potential of your blend.
                                </p>
                                <Link to="/store">
                                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6">
                                        Start Your Ritual
                                    </Button>
                                </Link>
                            </AnimatedElement>
                        </div>
                    </div>

                    {/* Steps List */}
                    <div className="lg:w-2/3 flex flex-col gap-24 relative">
                        {/* Vertical Line */}
                        <div className="absolute left-8 top-8 bottom-8 w-px bg-primary/30 hidden md:block" />

                        {ritualSteps.map((step, index) => (
                            <AnimatedElement key={step._id} className="relative pl-0 md:pl-24">
                                {/* Step Number Indicator */}
                                <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 rounded-full bg-warm-cream border-2 border-primary items-center justify-center z-10">
                                    <span className="font-heading text-2xl text-primary font-bold">{step.stepNumber}</span>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-8 rounded-3xl shadow-sm border border-primary/10 hover:shadow-md transition-shadow duration-300">
                                    <div className="order-2 md:order-1">
                                        <span className="md:hidden text-primary font-bold text-xl mb-2 block">Step {step.stepNumber}</span>
                                        <h3 className="font-heading text-3xl font-semibold text-foreground mb-4">
                                            {step.stepTitle}
                                        </h3>
                                        <p className="text-foreground/70 mb-6 leading-relaxed">
                                            {step.stepDescription}
                                        </p>
                                        {step.ritualTip && (
                                            <div className="flex items-start gap-3 bg-primary/5 p-4 rounded-xl">
                                                <Star className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                                <p className="text-sm text-foreground/80 italic">
                                                    <span className="font-bold text-primary not-italic block text-xs uppercase tracking-wider mb-1">Ritual Tip</span>
                                                    {step.ritualTip}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="order-1 md:order-2">
                                        {step.illustration && (
                                            <div className="aspect-square rounded-2xl overflow-hidden bg-warm-cream">
                                                <Image
                                                    src={step.illustration}
                                                    alt={step.stepTitle || ''}
                                                    className="w-full h-full object-cover mix-blend-multiply opacity-90"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </AnimatedElement>
                        ))}
                    </div>
                </div>
            </div>
          </section>
          {/* --- WELLNESS BENEFITS: PREMIUM GRID CALLOUT --- */}
          <section className="py-40 px-6 md:px-12 bg-warm-cream relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <AnimatedElement>
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-6 block">Holistic Wellness</span>
                        <h2 className="font-heading text-5xl md:text-7xl text-foreground mb-8">
                            Holistic Harmony
                        </h2>
                        <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                            Beyond taste, our blends are crafted for feeling. Each botanical is selected for its targeted benefits—nourishing mind, body, and spirit with the wisdom of ancient Ayurvedic traditions.
                        </p>
                    </AnimatedElement>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {wellnessBenefits.map((benefit, index) => (
                        <AnimatedElement key={benefit._id} delay={index * 100}>
                            <div className="group h-full p-8 rounded-3xl border border-primary/20 bg-white hover:border-primary transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 flex flex-col items-center text-center hover:-translate-y-2">
                                <div className="mb-8 w-full h-56 overflow-hidden rounded-2xl bg-warm-cream">
                                    {benefit.benefitImage && (
                                        <Image
                                            src={benefit.benefitImage}
                                            alt={benefit.benefitTitle || ''}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    )}
                                </div>
                                <h3 className="font-heading text-3xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                                    {benefit.benefitTitle}
                                </h3>
                                <p className="text-foreground/70 leading-relaxed text-lg">
                                    {benefit.benefitDescription}
                                </p>
                            </div>
                        </AnimatedElement>
                    ))}
                </div>
            </div>
          </section>
          {/* --- TESTIMONIALS: ELEGANT CAROUSEL --- */}
          <section className="py-32 px-4 bg-foreground text-warm-cream overflow-hidden relative">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                 <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[128px]" />
                 <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-[128px]" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="font-heading text-4xl md:text-5xl text-primary mb-4">Ritual Stories</h2>
                </div>

                <div className="relative min-h-[400px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        {testimonials.length > 0 && (
                            <motion.div
                                key={activeTestimonial}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="text-center max-w-3xl mx-auto px-4"
                            >
                                <div className="mb-8 flex justify-center">
                                    <div className="w-24 h-24 rounded-full border-2 border-primary/30 p-1">
                                        {testimonials[activeTestimonial].customerImage ? (
                                            <Image
                                                src={testimonials[activeTestimonial].customerImage!}
                                                alt={testimonials[activeTestimonial].customerName || ''}
                                                className="w-full h-full rounded-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full rounded-full bg-primary/20 flex items-center justify-center text-primary text-2xl font-heading">
                                                {testimonials[activeTestimonial].customerName?.charAt(0)}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="mb-8">
                                    <Star className="w-6 h-6 text-primary inline-block mx-1 fill-primary" />
                                    <Star className="w-6 h-6 text-primary inline-block mx-1 fill-primary" />
                                    <Star className="w-6 h-6 text-primary inline-block mx-1 fill-primary" />
                                    <Star className="w-6 h-6 text-primary inline-block mx-1 fill-primary" />
                                    <Star className="w-6 h-6 text-primary inline-block mx-1 fill-primary" />
                                </div>
                                <h3 className="font-heading text-3xl md:text-5xl leading-tight mb-8 text-warm-cream">
                                    "{testimonials[activeTestimonial].quote}"
                                </h3>
                                <div>
                                    <p className="font-bold text-lg text-primary tracking-wide uppercase">
                                        {testimonials[activeTestimonial].customerName}
                                    </p>
                                    <p className="text-warm-cream/60 text-sm mt-1">
                                        {testimonials[activeTestimonial].customerTitle}
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <button 
                        onClick={prevTestimonial}
                        className="absolute left-0 top-1/2 -translate-y-1/2 p-4 text-warm-cream/50 hover:text-primary transition-colors hidden md:block"
                        aria-label="Previous testimonial"
                    >
                        <ArrowRight className="w-8 h-8 rotate-180" />
                    </button>
                    <button 
                        onClick={nextTestimonial}
                        className="absolute right-0 top-1/2 -translate-y-1/2 p-4 text-warm-cream/50 hover:text-primary transition-colors hidden md:block"
                        aria-label="Next testimonial"
                    >
                        <ArrowRight className="w-8 h-8" />
                    </button>
                </div>
                
                {/* Dots Indicator */}
                <div className="flex justify-center gap-3 mt-12">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveTestimonial(idx)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeTestimonial ? 'bg-primary w-8' : 'bg-warm-cream/30 hover:bg-warm-cream/50'}`}
                            aria-label={`Go to testimonial ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
          </section>
          {/* --- SUSTAINABILITY: PREMIUM CALLOUT --- */}
          <section className="py-40 px-6 md:px-12 bg-[#EBE5DE] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <AnimatedElement>
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-6 block">Our Commitment</span>
                        <h2 className="font-heading text-5xl md:text-7xl text-foreground mb-8">
                            Conscious Origin
                        </h2>
                        <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                            We honor the earth that nourishes us. Every botanical is sourced with intention, every partnership built on respect. Sustainability isn't a feature—it's the foundation of everything we create.
                        </p>
                    </AnimatedElement>
                    <AnimatedElement delay={200} className="mt-12">
                        <div className="flex justify-center gap-8">
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Leaf className="w-8 h-8 text-dark-herbal-green" />
                                </div>
                                <span className="text-sm font-bold uppercase tracking-widest text-foreground/70">Ethically Sourced</span>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Sun className="w-8 h-8 text-primary" />
                                </div>
                                <span className="text-sm font-bold uppercase tracking-widest text-foreground/70">Regenerative</span>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Droplets className="w-8 h-8 text-blue-900/60" />
                                </div>
                                <span className="text-sm font-bold uppercase tracking-widest text-foreground/70">Pure & Clean</span>
                            </div>
                        </div>
                    </AnimatedElement>
                </div>

                {sustainabilityPoints.map((point) => (
                    <div key={point._id} className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { title: point.point1Title, desc: point.point1Description, img: point.point1Image },
                            { title: point.point2Title, desc: point.point2Description, img: point.point2Image },
                            { title: point.point3Title, desc: point.point3Description, img: point.point3Image }
                        ].map((item, idx) => (
                            <AnimatedElement key={idx} delay={idx * 150} className="group">
                                <div className="mb-8 overflow-hidden rounded-3xl aspect-[4/3]">
                                    {item.img && (
                                        <Image
                                            src={item.img}
                                            alt={item.title || ''}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                                        />
                                    )}
                                </div>
                                <h3 className="font-heading text-3xl font-semibold text-foreground mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-foreground/70 leading-relaxed text-lg">
                                    {item.desc}
                                </p>
                            </AnimatedElement>
                        ))}
                    </div>
                ))}
            </div>
          </section>
          {/* --- EMAIL CAPTURE: THE FINAL INVITATION --- */}
          <section className="py-32 px-4 bg-foreground text-warm-cream relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
                 <Image 
                    src="https://static.wixstatic.com/media/b117e9_3ba3b9c2ab9343eb823e2c5d40193c31~mv2.png?originWidth=1152&originHeight=384"
                    alt="Texture"
                    className="w-full h-full object-cover"
                 />
            </div>
            
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <AnimatedElement>
                    <div className="w-16 h-16 mx-auto mb-8 border border-primary/30 rounded-full flex items-center justify-center">
                        <Moon className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="font-heading text-5xl md:text-7xl text-primary mb-6">
                        Join the Ritual Circle
                    </h2>
                    <p className="font-paragraph text-lg md:text-xl text-warm-cream/80 mb-12 max-w-2xl mx-auto font-light">
                        Receive our evening ritual guide, Ayurvedic teachings, and exclusive offerings delivered to your inbox.
                    </p>
                    
                    <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-1 px-6 py-4 rounded-full border border-white/20 bg-white/5 text-warm-cream placeholder:text-warm-cream/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        />
                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-4 text-lg rounded-full transition-transform hover:scale-105">
                            Begin
                        </Button>
                    </form>
                    
                    <p className="mt-8 text-xs text-warm-cream/40 uppercase tracking-widest">
                        Respecting your inbox and your peace.
                    </p>
                </AnimatedElement>
            </div>
          </section>
      </div>
  );
}
