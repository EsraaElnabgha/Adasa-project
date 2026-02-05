import React from 'react';

export default function About() {
  const teamMembers = [
    { name: "سالم أحمد", role: "مصور محترف", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" },
    { name: "محمد علي", role: "مصور بورتريه", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face" },
    { name: "إبراهيم حسن", role: "مصور طبيعة", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" },
    { name: "داود خالد", role: "مدرب تصوير", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face" },
    { name: "ليث محمود", role: "فنان بصري", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face" },
    { name: "جمال عبدالله", role: "مصور ومراجع تقني", img: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face" },
    { name: "خالد الفيصل", role: "مصور فلكي", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face" },
    { name: "نادر سعيد", role: "مصور شوارع", img: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100&h=100&fit=crop&crop=face" },
    { name: "هاني الشمري", role: "مصور طعام", img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop&crop=face" },
    { name: "عمر الراشد", role: "مصور حياة برية", img: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=face" },
    { name: "فارس العلي", role: "فنان فوتوغرافي", img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop&crop=face" },
    { name: "سامي الحربي", role: "خبير تعديل صور", img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&h=100&fit=crop&crop=face" },
    { name: "رامي الخطيب", role: "مصور ماكرو", img: "https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?w=100&h=100&fit=crop&crop=face" },
    { name: "باسم المصري", role: "مصور فني", img: "https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?w=100&h=100&fit=crop&crop=face" },
    { name: "منصور الزهراني", role: "مصور زفاف", img: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=100&h=100&fit=crop&crop=face" },
    { name: "فيصل الدوسري", role: "مصور جوي", img: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=100&h=100&fit=crop&crop=face" },
    { name: "لؤي الصالح", role: "مصور تجاري", img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=face" },
    { name: "طارق النعيمي", role: "مصور معماري", img: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=100&h=100&fit=crop&crop=face" },
    { name: "أحمد الشهري", role: "مصور رياضي", img: "https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?w=100&h=100&fit=crop&crop=face" },
    { name: "ماجد القحطاني", role: "مصور استوديو", img: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=100&h=100&fit=crop&crop=face" },
    { name: "ياسر العتيبي", role: "مصور رحالة", img: "https://images.unsplash.com/photo-1590086782957-93c06ef21604?w=100&h=100&fit=crop&crop=face" },
    { name: "دحام الحسيني", role: "فنان بصري", img: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=100&h=100&fit=crop&crop=face" },
    { name: "نايف المطيري", role: "مصور مواليد", img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop&crop=face" },
    { name: "عبدالله الغامدي", role: "مصور عقارات", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face" },
    { name: "كريم الفهد", role: "خبير تقني", img: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=100&h=100&fit=crop&crop=face" },
    { name: "سلطان الراجحي", role: "فنان تصوير", img: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=100&h=100&fit=crop&crop=face" }
  ];

  return (
    <div>
      <main className="flex-grow pt-20">
        <div className="bg-[#0a0a0a]">
          {/* Hero Section */}
          <section className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-[#0a0a0a]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-[100px]" />
              <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <span className="section-label inline-flex items-center gap-2 mb-6">
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                من نحن
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                مهمتنا هي <span className="gradient-text">الإعلام والإلهام</span>
              </h1>
              <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-12">
                مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                <div className="glass-card p-6">
                  <i className="fa-solid fa-users text-2xl text-orange-500 mb-2 block" />
                  <div className="text-3xl font-bold gradient-text mb-1">+2مليون</div>
                  <div className="text-sm text-neutral-500">قارئ شهرياً</div>
                </div>
                <div className="glass-card p-6">
                  <i className="fa-solid fa-newspaper text-2xl text-orange-500 mb-2 block" />
                  <div className="text-3xl font-bold gradient-text mb-1">+500</div>
                  <div className="text-sm text-neutral-500">مقالة منشورة</div>
                </div>
                <div className="glass-card p-6">
                  <i className="fa-solid fa-pen-nib text-2xl text-orange-500 mb-2 block" />
                  <div className="text-3xl font-bold gradient-text mb-1">+50</div>
                  <div className="text-sm text-neutral-500">كاتب خبير</div>
                </div>
                <div className="glass-card p-6">
                  <i className="fa-solid fa-book-open text-2xl text-orange-500 mb-2 block" />
                  <div className="text-3xl font-bold gradient-text mb-1">+15</div>
                  <div className="text-sm text-neutral-500">تصنيف</div>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-20 bg-[#111111] border-y border-[#262626]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                  <span className="w-1.5 h-8 bg-gradient-to-b from-orange-500 to-yellow-500 rounded-full" />
                  قيمنا
                  <span className="w-1.5 h-8 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full" />
                </h2>
                <p className="text-lg text-neutral-400 max-w-2xl mx-auto">المبادئ التي توجه كل ما نقوم بإنشائه</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <div className="relative">
                    <i className="fa-solid fa-bullseye text-4xl text-orange-500 mb-4 block" />
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">الجودة أولاً</h3>
                    <p className="text-neutral-400 text-sm">محتوى مدروس ومكتوب بخبرة</p>
                  </div>
                </div>
                <div className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-orange-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <div className="relative">
                    <i className="fa-solid fa-bolt text-4xl text-orange-500 mb-4 block" />
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">تركيز عملي</h3>
                    <p className="text-neutral-400 text-sm">أمثلة واقعية يمكنك تطبيقها اليوم</p>
                  </div>
                </div>
                <div className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <div className="relative">
                    <i className="fa-solid fa-handshake text-4xl text-orange-500 mb-4 block" />
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">المجتمع</h3>
                    <p className="text-neutral-400 text-sm">تعلم مع آلاف المصورين</p>
                  </div>
                </div>
                <div className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-orange-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <div className="relative">
                    <i className="fa-solid fa-arrows-rotate text-4xl text-orange-500 mb-4 block" />
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">دائماً محدث</h3>
                    <p className="text-neutral-400 text-sm">أحدث الاتجاهات وأفضل الممارسات</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="py-20 bg-[#0a0a0a]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <span className="section-label mb-4">فريقنا</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">تعرف على كتابنا</h2>
                <p className="text-lg text-neutral-400 max-w-2xl mx-auto">فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع.</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <div key={index} className="group bg-[#161616] rounded-2xl p-6 text-center border border-[#262626] hover:border-orange-500/30 transition-all duration-300">
                    <div className="relative inline-block mb-4">
                      <img alt={member.name} className="w-24 h-24 rounded-full object-cover ring-4 ring-[#262626] group-hover:ring-orange-500/30 transition-all" src={member.img} />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-500 rounded-full border-2 border-[#161616] flex items-center justify-center">
                        <i className="fa-solid fa-check text-white text-xs" />
                      </div>
                    </div>
                    <h3 className="font-bold text-white text-lg">{member.name}</h3>
                    <p className="text-orange-500 text-sm font-medium mb-4">{member.role}</p>
                    <div className="flex justify-center gap-3">
                      <a href="#" className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-orange-500 hover:text-white transition-colors">
                        <i className="fa-brands fa-x-twitter w-4 h-4" />
                      </a>
                      <a href="#" className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-neutral-700 hover:text-white transition-colors">
                        <i className="fa-brands fa-github w-4 h-4" />
                      </a>
                      <a href="#" className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-blue-600 hover:text-white transition-colors">
                        <i className="fa-brands fa-linkedin-in w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-br from-orange-600 via-orange-500 to-yellow-500 relative overflow-hidden">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-10 right-10 w-64 h-64 bg-white/20 rounded-full blur-[100px]" />
              <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/20 rounded-full blur-[80px]" />
            </div>

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">لديك أسئلة؟ دعنا نتحدث!</h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، أو تريد فقط إلقاء التحية، لا تتردد في التواصل.</p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="mailto:hello@adasah.com" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0a0a0a] text-white font-semibold rounded-xl hover:bg-neutral-900 transition-all duration-300 hover:-translate-y-0.5">
                  <i className="fa-solid fa-envelope w-5 h-5" />
                  تواصل معنا
                </a>
                <a className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white hover:text-[#0a0a0a] transition-all duration-300" href="/blog" data-discover="true">
                  تصفح المقالات
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
