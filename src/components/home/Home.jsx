import React from 'react';
import { Link } from 'react-router-dom';
import blogsData from '../../data/posts.json';

export default function Home() {
  // Select specific articles for sections
  const featuredArticles = blogsData.slice(0, 3);
  const latestArticles = blogsData.slice(3, 6);

  const categories = [
    { id: 'إضاءة', icon: 'fa-sun', count: 3, gradient: 'from-orange-500 to-yellow-500' },
    { id: 'بورتريه', icon: 'fa-user', count: 3, gradient: 'from-orange-600 to-orange-400' },
    { id: 'مناظر طبيعية', icon: 'fa-mountain-sun', count: 2, gradient: 'from-orange-500 to-yellow-500' },
    { id: 'تقنيات', icon: 'fa-sliders', count: 5, gradient: 'from-orange-500 to-yellow-500' },
    { id: 'معدات', icon: 'fa-camera', count: 3, gradient: 'from-orange-500 to-yellow-500' },
  ];

  return (
    <div>
      <main className="flex-grow pt-20">
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a0a0a]">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl blob" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl blob" style={{ animationDelay: '-2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center max-w-4xl mx-auto">
              <div className="section-label inline-flex items-center gap-2 mb-8 animate-fade-in">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
                </span>
                <span className="text-sm font-medium text-neutral-300">مرحباً بك في عدسة</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                اكتشف <span className="gradient-text">فن</span><br />التصوير الفوتوغرافي
              </h1>

              <p className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                <Link className="btn-primary inline-flex items-center justify-center gap-2 group" to="/blog" data-discover="true">
                  <span>استكشف المقالات</span>
                  <i className="fa-solid fa-arrow-left w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                </Link>
                <Link className="btn-secondary inline-flex items-center justify-center gap-2" to="/about" data-discover="true">
                  <i className="fa-solid fa-circle-info w-5 h-5" />
                  <span>اعرف المزيد</span>
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                <div className="glass-card p-4 hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0ms' }}>
                  <i className="fa-solid fa-newspaper text-2xl text-orange-500 mb-1" />
                  <p className="text-2xl md:text-3xl font-bold gradient-text">+50</p>
                  <p className="text-neutral-500 text-sm">مقالة</p>
                </div>
                <div className="glass-card p-4 hover:scale-105 transition-transform duration-300" style={{ animationDelay: '100ms' }}>
                  <i className="fa-solid fa-users text-2xl text-orange-500 mb-1" />
                  <p className="text-2xl md:text-3xl font-bold gradient-text">+10ألف</p>
                  <p className="text-neutral-500 text-sm">قارئ</p>
                </div>
                <div className="glass-card p-4 hover:scale-105 transition-transform duration-300" style={{ animationDelay: '200ms' }}>
                  <i className="fa-solid fa-folder-open text-2xl text-orange-500 mb-1" />
                  <p className="text-2xl md:text-3xl font-bold gradient-text">4</p>
                  <p className="text-neutral-500 text-sm">تصنيفات</p>
                </div>
                <div className="glass-card p-4 hover:scale-105 transition-transform duration-300" style={{ animationDelay: '300ms' }}>
                  <i className="fa-solid fa-pen-nib text-2xl text-orange-500 mb-1" />
                  <p className="text-2xl md:text-3xl font-bold gradient-text">6</p>
                  <p className="text-neutral-500 text-sm">كاتب</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-500/5 to-transparent" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
              <div>
                <span className="section-label mb-4">
                  <span className="relative flex h-2 w-2 ml-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
                  </span>
                  مميز
                </span>
                <h2 className="section-title text-white">مقالات مختارة</h2>
                <p className="section-subtitle max-w-lg">محتوى منتقى لبدء رحلة تعلمك</p>
              </div>
              <Link className="group inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5" to="/blog" data-discover="true">
                عرض الكل
                <i className="fa-solid fa-chevron-left w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="space-y-8">
              {featuredArticles.map((article, index) => (
                <article key={article.id} className="group relative bg-[#161616] rounded-3xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500" style={{ animationDelay: `${index * 150}ms` }}>
                  <Link className="block" to={`/blog/${article.id}`} data-discover="true">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="relative h-72 md:h-[400px] overflow-hidden">
                        <img alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" src={article.image} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute top-4 right-4">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xs font-semibold rounded-full">
                            <i className="fa-solid fa-star w-3.5 h-3.5" />
                            مميز
                          </span>
                        </div>
                      </div>
                      <div className="p-8 md:p-10 flex flex-col justify-center bg-[#161616]">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">{article.category}</span>
                          <span className="flex items-center gap-1 text-sm text-neutral-500">
                            <i className="fa-regular fa-clock w-4 h-4" />
                            {article.readTime}
                          </span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors duration-300 leading-tight">{article.title}</h2>
                        <p className="text-neutral-400 mb-6 line-clamp-3 leading-relaxed">{article.desc}</p>
                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              <img alt={article.author} className="w-12 h-12 rounded-full object-cover ring-2 ring-[#262626] shadow-md" src={article.authorImage} />
                              <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-[#161616]" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-white">{article.author}</p>
                              <p className="text-xs text-neutral-500">{article.date}</p>
                            </div>
                          </div>
                          <span className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                            اقرأ المقال
                            <i className="fa-solid fa-arrow-left w-5 h-5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#111111] relative border-y border-[#262626]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="section-label mb-4">
                <span className="relative flex h-2 w-2 ml-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
                </span>
                التصنيفات
              </span>
              <h2 className="section-title text-white">استكشف حسب الموضوع</h2>
              <p className="section-subtitle max-w-lg mx-auto">اعثر على محتوى مصمم حسب اهتماماتك</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {categories.map((cat, index) => (
                <Link key={cat.id} className="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1" to={`/blog?category=${encodeURIComponent(cat.id)}`} data-discover="true" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                      <i className={`fa-solid ${cat.icon} text-xl text-orange-500 group-hover:text-white transition-colors duration-300`} />
                    </div>
                    <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">{cat.id}</h3>
                    <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">{cat.count} مقالة</p>
                    <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">
                      <i className="fa-solid fa-chevron-left w-4 h-4 text-white" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-orange-500/5 to-transparent" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
              <div>
                <span className="section-label mb-4">
                  <span className="relative flex h-2 w-2 ml-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
                  </span>
                  الأحدث
                </span>
                <h2 className="section-title text-white">أحدث المقالات</h2>
                <p className="section-subtitle max-w-lg">محتوى جديد طازج من المطبعة</p>
              </div>
              <Link className="group inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-400 transition-colors" to="/blog" data-discover="true">
                عرض جميع المقالات
                <i className="fa-solid fa-arrow-left w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestArticles.map((article, index) => (
                <article key={article.id} className="group card overflow-hidden" style={{ animationDelay: `${index * 100}ms` }}>
                  <Link className="block" to={`/blog/${article.id}`} data-discover="true">
                    <div className="relative h-52 overflow-hidden">
                      <img alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" src={article.image} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-4 right-4"><span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">{article.category}</span></div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
                        <span className="flex items-center gap-1">
                          <i className="fa-regular fa-clock w-4 h-4" />
                          {article.readTime}
                        </span>
                        <span className="w-1 h-1 bg-neutral-600 rounded-full" /><span>{article.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">{article.title}</h3>
                      <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">{article.desc}</p>
                      <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
                        <div className="flex items-center gap-3">
                          <img alt={article.author} className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]" src={article.authorImage} />
                          <div><p className="text-sm font-medium text-white">{article.author}</p><p className="text-xs text-neutral-500">{article.authorRole}</p></div>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                          <i className="fa-solid fa-arrow-left w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 relative overflow-hidden bg-[#0a0a0a]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/10 rounded-full blur-3xl" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#161616] rounded-3xl border border-[#262626] p-8 md:p-12 lg:p-16 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fa-solid fa-envelope w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">اشترك في <span className="gradient-text">نشرتنا الإخبارية</span></h2>
              <p className="text-neutral-400 text-lg mb-8 max-w-xl mx-auto">احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني</p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-6">
                <input placeholder="أدخل بريدك الإلكتروني" className="flex-1 px-5 py-4 rounded-xl bg-[#0a0a0a] border border-[#262626] focus:outline-none focus:border-orange-500/50 text-white placeholder-neutral-500 transition-colors" type="email" />
                <button type="submit" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300">اشترك الآن</button>
              </form>
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-neutral-500">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2 space-x-reverse">
                    <img className="w-8 h-8 rounded-full border-2 border-[#161616]" alt="" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face" />
                    <img className="w-8 h-8 rounded-full border-2 border-[#161616]" alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face" />
                    <img className="w-8 h-8 rounded-full border-2 border-[#161616]" alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" />
                  </div>
                  <span>انضم لـ <span className="text-white font-medium">+10,000</span> مصور</span>
                </div>
                <span className="hidden sm:inline text-[#262626]">•</span>
                <span>بدون إزعاج</span>
                <span className="hidden sm:inline text-[#262626]">•</span>
                <span>إلغاء الاشتراك في أي وقت</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
