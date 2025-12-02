import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BaseCrudService } from '@/integrations';
import { JournalArticles } from '@/entities';
import { Image } from '@/components/ui/image';
import { Calendar, Clock } from 'lucide-react';
import { format } from 'date-fns';

export default function JournalPage() {
  const [articles, setArticles] = useState<JournalArticles[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const { items } = await BaseCrudService.getAll<JournalArticles>('journalarticles');
      const sortedArticles = items.sort((a, b) => {
        const dateA = a.publishDate ? new Date(a.publishDate).getTime() : 0;
        const dateB = b.publishDate ? new Date(b.publishDate).getTime() : 0;
        return dateB - dateA;
      });
      setArticles(sortedArticles);
    };

    fetchArticles();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="https://static.wixstatic.com/media/b117e9_b76ea2ddb0664255af3cd98a7f9005c4~mv2.png?originWidth=1920&originHeight=512"
          alt="Journal and wellness articles"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center px-4"
          >
            <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4">
              The Journal
            </h1>
            <p className="font-paragraph text-xl md:text-2xl text-white/90">
              Wisdom, rituals, and reflections on slow living
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 px-4">
        <div className="max-w-[100rem] mx-auto">
          {articles.length === 0 ? (
            <div className="text-center py-16">
              <p className="font-paragraph text-lg text-foreground/60">
                No articles published yet. Check back soon for wellness wisdom and ritual insights.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {articles.map((article, index) => (
                <motion.article
                  key={article._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={`/journal/${article._id}`}>
                    <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                      {article.featureImage ? (
                        <Image
                          src={article.featureImage}
                          alt={article.title || 'Journal article'}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                          <span className="font-heading text-4xl text-primary">Saanjh</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="flex items-center gap-4 mb-3 text-sm text-foreground/60">
                      {article.publishDate && (
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span className="font-paragraph">
                            {format(new Date(article.publishDate), 'MMM dd, yyyy')}
                          </span>
                        </div>
                      )}
                      {article.readTime && (
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span className="font-paragraph">{article.readTime} min read</span>
                        </div>
                      )}
                    </div>

                    <h2 className="font-heading text-3xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {article.title}
                    </h2>

                    {article.excerpt && (
                      <p className="font-paragraph text-base text-foreground/70 mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                    )}

                    {article.author && (
                      <p className="font-paragraph text-sm text-foreground/60">
                        By {article.author}
                      </p>
                    )}
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 px-4 bg-soft-rose-beige">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
              Stay Connected
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 mb-8">
              Receive our latest articles, ritual guides, and Ayurvedic wisdom directly to your inbox
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-4 rounded-lg border-2 border-primary bg-white text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg rounded-lg font-paragraph transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
