import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import blogsData from "../../data/posts.json";

export default function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const blogId = parseInt(id);
  const blog = blogsData.find((p) => p.id === blogId);

  // Redirect or show error if not found
  useEffect(() => {
    if (!blog && id) {
      // navigate("/not-found"); // Or handle gracefully
    }
  }, [ blog, id, navigate ]);

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">المقال غير موجود</h2>
          <Link to="/blog" className="text-orange-500 hover:text-orange-400">
            العودة للمدونة
          </Link>
        </div>
      </div>
    );
  }

  // Find related articles (same category, excluding current)
  const relatedArticles = blogsData
    .filter((p) => p.category === blog.category && p.id !== blog.id)
    .slice(0, 3);

  return (
    <div>
      <main className="flex-grow pt-20">
        <article className="bg-[#0a0a0a] min-h-screen">
          {/* Hero Section */}
          <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
            <img
              alt={blog.title}
              className="absolute inset-0 w-full h-full object-cover"
              src={blog.image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/30 to-transparent" />

            {/* Breadcrumb */}
            <div className="absolute top-8 right-8 left-8">
              <nav className="inline-flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-md rounded-full text-sm border border-white/10">
                <Link
                  className="text-white/70 hover:text-white transition-colors"
                  to="/"
                >
                  <i className="fa-solid fa-home" />
                </Link>
                <i className="fa-solid fa-chevron-left text-white/30 text-xs" />
                <Link
                  className="text-white/70 hover:text-white transition-colors"
                  to="/blog"
                >
                  المدونة
                </Link>
                <i className="fa-solid fa-chevron-left text-white/30 text-xs" />
                <span className="text-orange-400 font-medium truncate max-w-[200px]">
                  {blog.category}
                </span>
              </nav>
            </div>

            {/* Header Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="max-w-5xl mx-auto">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <Link
                    className="px-4 py-2 bg-orange-500 text-white text-sm font-bold rounded-full hover:bg-orange-600 transition-colors"
                    to={`/blog?category=${encodeURIComponent(blog.category)}`}
                  >
                    {blog.category}
                  </Link>
                  <div className="flex items-center gap-4 text-white/70 text-sm">
                    <span className="flex items-center gap-2">
                      <i className="fa-regular fa-calendar" />
                      {blog.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <i className="fa-regular fa-clock" />
                      {blog.readTime}
                    </span>
                  </div>
                </div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
                  {blog.title}
                </h1>
                <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 w-fit">
                  <img
                    alt={blog.author}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-orange-500/50"
                    src={blog.authorImage}
                  />
                  <div>
                    <p className="font-bold text-white">{blog.author}</p>
                    <p className="text-sm text-white/60">{blog.authorRole}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid lg:grid-cols-[1fr_300px] gap-12">
              <div className="order-2 lg:order-1">
                {/* Quote / Intro */}
                <div className="p-6 bg-gradient-to-r from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20 mb-10">
                  <p className="text-lg text-neutral-200 leading-relaxed italic">
                    "{blog.desc}"
                  </p>
                </div>

                {/* Content Body - Using dummy sections for now as JSON only has desc */}
                <div className="prose-custom">
                  <p className="text-neutral-300 leading-relaxed mb-6 text-lg">
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-14 mb-6 flex items-center gap-4">
                    <span className="flex items-center justify-center w-10 h-10 bg-orange-500/10 rounded-xl border border-orange-500/30">
                      <i className="fa-solid fa-camera text-orange-500" />
                    </span>
                    تفاصيل أكثر
                  </h2>
                  <p className="text-neutral-300 leading-relaxed mb-6 text-lg">
                    إذا (بالمعنى الحرفي للكلمة) نظرت إلى الأشياء من منظور مختلف، فستبدأ في رؤية إمكانيات جديدة.
                  </p>
                </div>

                {/* Tags (Horizontal List) */}
                <div className="mt-14 p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                      <i className="fa-solid fa-tags text-orange-500" />
                    </div>
                    <h3 className="font-bold text-white">الوسوم</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-[#1a1a1a] text-neutral-400 text-sm rounded-full border border-[#262626]">#{blog.category}</span>
                    <span className="px-4 py-2 bg-[#1a1a1a] text-neutral-400 text-sm rounded-full border border-[#262626]">#تصوير</span>
                  </div>
                </div>

                {/* Share Icons */}
                <div className="mt-6 p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                        <i className="fa-solid fa-share-nodes text-orange-500" />
                      </div>
                      <h3 className="font-bold text-white">شارك المقال</h3>
                    </div>
                    <div className="flex gap-2">
                      <button className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#1da1f2] hover:text-white transition-all">
                        <i className="fa-brands fa-x-twitter" />
                      </button>
                      {/* Other share buttons... */}
                    </div>
                  </div>
                </div>

              </div>

              {/* Sidebar */}
              <aside className="order-1 lg:order-2">
                <div className="lg:sticky lg:top-24 space-y-6">
                  {/* Info Cards */}
                  <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">
                        <i className="fa-regular fa-clock text-orange-500 text-xl mb-2" />
                        <p className="text-white font-bold">{blog.readTime}</p>
                        <p className="text-neutral-500 text-xs">وقت القراءة</p>
                      </div>
                      <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">
                        <i className="fa-regular fa-calendar text-orange-500 text-xl mb-2" />
                        <p className="text-white font-bold text-sm">{blog.date}</p>
                        <p className="text-neutral-500 text-xs">تاريخ النشر</p>
                      </div>
                    </div>
                  </div>

                  {/* Newsletter */}
                  <div className="p-6 bg-gradient-to-br from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20">
                    <div className="text-center">
                      <h3 className="font-bold text-white mb-2">لا تفوّت جديدنا</h3>
                      <Link className="block w-full py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors text-center" to="/blog">
                        تصفح المزيد
                      </Link>
                    </div>
                  </div>
                </div>
              </aside>
            </div>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <div className="mt-20 pt-12 border-t border-[#262626]">
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-4">
                    <span className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center border border-orange-500/30">
                      <i className="fa-solid fa-images text-orange-500 text-xl" />
                    </span>
                    <div>
                      <h2 className="text-2xl font-bold text-white">مقالات قد تعجبك</h2>
                      <p className="text-neutral-500 text-sm">استكشف المزيد من المحتوى المميز</p>
                    </div>
                  </div>
                  <Link
                    className="hidden sm:flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors group"
                    to="/blog"
                  >
                    عرض الكل
                    <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform" />
                  </Link>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedArticles.map((article) => (
                    <Link
                      key={article.id}
                      className="group relative bg-[#111111] rounded-2xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500"
                      to={`/blog/${article.id}`}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          src={article.image}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent" />
                        <span className="absolute top-4 right-4 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                          {article.category}
                        </span>
                      </div>
                      <div className="p-5">
                        <h3 className="font-bold text-white group-hover:text-orange-500 transition-colors line-clamp-2 mb-3">
                          {article.title}
                        </h3>
                        <div className="flex items-center justify-between text-sm text-neutral-500">
                          <span className="flex items-center gap-2">
                            <img
                              alt={article.author}
                              className="w-6 h-6 rounded-full"
                              src={article.authorImage}
                            />
                            {article.author}
                          </span>
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </main>
    </div>
  );
}
