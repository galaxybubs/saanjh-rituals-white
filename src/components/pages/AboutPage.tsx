import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="https://static.wixstatic.com/media/b117e9_5f6f2eb45f914273a727e0253263d229~mv2.png?originWidth=1280&originHeight=704"
          alt="Golden chai steam and ritual hands"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold text-white text-center px-4"
          >
            Our Story
          </motion.h1>
        </div>
      </section>

      {/* Brand Origin */}
      <section className="py-24 px-4">
        <div className="max-w-[100rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
                Born from Golden Hour
              </h2>
              <p className="font-paragraph text-lg text-foreground/80 mb-6 leading-relaxed">
                Saanjh Rituals was born from a longing to reclaim the sacred pause—the golden hour when day surrenders to night, and the world exhales. In the chaos of modern life, we sought to create a sanctuary, a ritual of return to ancestral wisdom.
              </p>
              <p className="font-paragraph text-lg text-foreground/80 mb-6 leading-relaxed">
                Drawing from the ancient healing traditions of Ayurveda, we curate rare botanicals from the foothills of the Himalayas, each chosen for its ability to ground, restore, and elevate. Our blends are not just tea—they are ceremonies, invitations to slow down and reconnect with the rhythms of nature.
              </p>
              <p className="font-paragraph text-lg text-foreground/80 leading-relaxed">
                Saanjh is more than a brand. It is a movement toward intentional living, a celebration of heritage, and a commitment to wellness that honors both body and spirit.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="https://static.wixstatic.com/media/b117e9_c11da3e25bea447a816db57d025aecb5~mv2.png?originWidth=960&originHeight=704"
                alt="Saanjh brand origin story"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-24 px-4 bg-soft-rose-beige">
        <div className="max-w-[100rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <Image
                src="https://static.wixstatic.com/media/b117e9_8945bef55e654907945c0e37e370fd88~mv2.png?originWidth=960&originHeight=704"
                alt="Founder story and heritage"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
                A Heritage Reimagined
              </h2>
              <p className="font-paragraph text-lg text-foreground/80 mb-6 leading-relaxed">
                Growing up in a household where chai was more than a beverage—it was a ritual, a conversation, a moment of stillness—I witnessed the transformative power of intentional pauses. My grandmother would blend her own spices, each ingredient chosen with care, each cup brewed with devotion.
              </p>
              <p className="font-paragraph text-lg text-foreground/80 mb-6 leading-relaxed">
                Years later, living in a world that glorifies busyness, I found myself yearning for those golden-hour moments. I began studying Ayurveda, traveling to remote villages in India, learning from herbalists who had preserved ancient knowledge for generations.
              </p>
              <p className="font-paragraph text-lg text-foreground/80 leading-relaxed">
                Saanjh Rituals is my offering to you—a bridge between the wisdom of the past and the needs of the present. Each blend is a love letter to heritage, a reminder that wellness is not a trend, but a timeless practice.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ingredient Philosophy */}
      <section className="py-24 px-4">
        <div className="max-w-[100rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our Ingredient Philosophy
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-3xl mx-auto">
              Every botanical is a story, every blend a meditation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-heading text-3xl font-semibold text-foreground mb-4">
                Sourced with Intention
              </h3>
              <p className="font-paragraph text-base text-foreground/80 mb-4 leading-relaxed">
                We partner with small-scale farmers and herbalists in the Himalayan foothills, ensuring that every ingredient is harvested sustainably and ethically. Our botanicals are wild-crafted or organically grown, free from pesticides and chemicals.
              </p>
              <p className="font-paragraph text-base text-foreground/80 leading-relaxed">
                From ashwagandha roots that calm the nervous system to tulsi leaves that purify the spirit, each ingredient is chosen for its healing properties and its connection to Ayurvedic tradition.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="https://static.wixstatic.com/media/b117e9_ea5289798e6348ab9a602b2487ffc00d~mv2.png?originWidth=960&originHeight=704"
                alt="Ingredient sourcing and botanicals"
                className="w-full h-auto rounded-2xl"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1"
            >
              <Image
                src="https://static.wixstatic.com/media/b117e9_55a136a05d16461797b3e58f5326d0ce~mv2.png?originWidth=960&originHeight=704"
                alt="Ingredient quality and craftsmanship"
                className="w-full h-auto rounded-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2"
            >
              <h3 className="font-heading text-3xl font-semibold text-foreground mb-4">
                Crafted with Care
              </h3>
              <p className="font-paragraph text-base text-foreground/80 mb-4 leading-relaxed">
                Our blends are hand-crafted in small batches, ensuring freshness and potency. We honor the traditional methods of Ayurvedic preparation, allowing each botanical to express its full healing potential.
              </p>
              <p className="font-paragraph text-base text-foreground/80 leading-relaxed">
                No artificial flavors, no fillers, no shortcuts. Just pure, potent botanicals blended with intention and reverence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ritual Philosophy */}
      <section className="py-24 px-4 bg-warm-cream">
        <div className="max-w-[100rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
              The Ritual Philosophy
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-3xl mx-auto">
              Wellness is not a destination, but a daily practice
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h3 className="font-heading text-3xl font-semibold text-foreground mb-4 text-center">
                The Sacred Pause
              </h3>
              <p className="font-paragraph text-lg text-foreground/80 leading-relaxed text-center">
                In Ayurveda, the evening is a time of transition—a sacred pause between the activity of day and the rest of night. This is when we ground ourselves, release what no longer serves us, and prepare for renewal. Our rituals honor this liminal space, inviting you to slow down and reconnect with your inner wisdom.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <h3 className="font-heading text-3xl font-semibold text-foreground mb-4 text-center">
                Sensory Wellness
              </h3>
              <p className="font-paragraph text-lg text-foreground/80 leading-relaxed text-center">
                Our approach to wellness is deeply sensory. We believe that healing happens not just through what we consume, but through how we engage with it. The warmth of the cup in your hands, the aroma of spices unfurling, the first sip that grounds you—these are the moments that transform a simple act into a sacred ritual.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="font-heading text-3xl font-semibold text-foreground mb-4 text-center">
                Inclusive Healing
              </h3>
              <p className="font-paragraph text-lg text-foreground/80 leading-relaxed text-center">
                Wellness should be accessible to all. While our blends are rooted in ancient Indian traditions, they are designed for modern lives—busy, complex, and beautifully diverse. Whether you're seeking calm after a long day, support for digestion, or simply a moment of beauty, our rituals welcome you exactly as you are.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary/20 to-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
              Welcome to the Circle
            </h2>
            <p className="font-paragraph text-xl text-foreground/80 leading-relaxed mb-8">
              At Saanjh Rituals, you are not just a customer—you are part of a community that values slowness, intention, and the healing power of nature. We invite you to join us in honoring the golden hour, in reclaiming the sacred pause, and in discovering the transformative power of ritual.
            </p>
            <p className="font-paragraph text-2xl text-primary font-semibold italic">
              May your evenings be golden, your rituals be sacred, and your wellness be timeless.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
