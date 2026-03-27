import { Star } from "lucide-react";
import React from "react";

const Testimonials = () => {
  return (
    <section className="py-24 bg-primary-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[140%] bg-primary-800 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[140%] bg-indigo-800 rounded-full blur-3xl opacity-50" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by talents and employers
          </h2>
          <p className="text-lg text-primary-200">
            See what our community has to say about their experience on Jobfy.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Jenkins",
              role: "Frontend Engineer",
              text: "Jobfy made my job search incredibly smooth. The AI features helped me optimize my resume and I landed my dream role in just two weeks!",
            },
            {
              name: "Michael Chen",
              role: "Design Lead at TechCorp",
              text: "As a hiring manager, the quality of candidates on Jobfy is unmatched. The platform's filtering and social features give us great insight into potential hires.",
            },
            {
              name: "Elena Rodriguez",
              role: "Freelance Copywriter",
              text: "The freelance marketplace here is bustling. I love how easy it is to manage proposals and communicate with clients all in one place.",
            },
          ].map((t, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
            >
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-lg italic mb-6 leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center font-bold text-xl">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-primary-200 text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
