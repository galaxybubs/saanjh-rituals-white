import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BaseCrudService } from '@/integrations';
import { JournalArticles } from '@/entities';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { format } from 'date-fns';

export default function JournalArticlePage() {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<JournalArticles | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      if (id) {
        const articleData = await BaseCrudService.getById<JournalArticles>('journalarticles', id);
        setArticle(articleData);
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="font-paragraph text-lg text-foreground/60">Loading article...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="max-w-5xl mx-auto px-4 pt-8">
        <Link to="/journal">
          <Button variant="ghost" className="text-foreground hover:text-primary">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Journal
          </Button>
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-5xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Meta Information */}
          <div className="flex items-center gap-6 mb-6 text-sm text-foreground/60">
            {article.publishDate && (
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="font-paragraph">
                  {format(new Date(article.publishDate), 'MMMM dd, yyyy')}
                </span>
              </div>
            )}
            {article.readTime && (
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="font-paragraph">{article.readTime} min read</span>
              </div>
            )}
            {article.author && (
              <span className="font-paragraph">By {article.author}</span>
            )}
          </div>

          {/* Title */}
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8">
            {article.title}
          </h1>

          {/* Excerpt */}
          {article.excerpt && (
            <p className="font-paragraph text-xl text-foreground/80 mb-12 leading-relaxed">
              {article.excerpt}
            </p>
          )}

          {/* Feature Image */}
          {article.featureImage && (
            <div className="mb-12 rounded-2xl overflow-hidden">
              <Image
                src={article.featureImage}
                alt={article.title || 'Article feature image'}
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="font-paragraph text-lg text-foreground/80 leading-relaxed whitespace-pre-line">
              {article.content}
            </div>
          </div>
        </motion.div>
      </article>

      {/* Newsletter CTA */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Enjoyed this article?
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 mb-8">
              Subscribe to receive more wellness wisdom and ritual insights
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-4 rounded-lg border-2 border-primary bg-white text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg rounded-lg">
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
