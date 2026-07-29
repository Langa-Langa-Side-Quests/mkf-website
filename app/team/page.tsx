import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Quote } from "lucide-react";

export default function TeamPage() {
  const team = [
    {
      src: "/gallery/ikalet-bernadette.jpeg",
      name: "Sr. Ikalet Bernadette",
      role: "Co-Founder",
      bio: "A Sister of St. Francis congregation and secondary school head teacher, Sr. Ikalet Bernadette has dedicated her life to serving poor and marginalized communities through social entrepreneurship and education scholarships.",
    },
    {
      src: "/gallery/mathias-mangeni.jpeg",
      name: "Mr. Mathias Mangeni",
      role: "Leadership Team",
      bio: "A committed member of the Mama Kevina Foundation leadership, contributing to the strategic direction and community-driven programmes that advance the foundation's mission across Tororo District.",
    },
    {
      src: "/gallery/akello-mary.jpeg",
      name: "Sr. Akello Mary",
      role: "Board Member",
      bio: "Serving on the foundation's board, Sr. Akello Mary provides governance and oversight that ensures the organisation remains accountable, transparent, and true to its community-centered values.",
    },
  ];

  return (
    <main className="w-full">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-blue-50 via-white to-transparent py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center space-y-4">
          <span className="text-blue-700 font-bold tracking-widest text-xs uppercase px-3 py-1 bg-blue-50 rounded-full border border-blue-200">
            Our People
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Meet the Team Behind the Foundation
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            The Mama Kevina Foundation is driven by compassionate leaders, educators, and community advocates committed to breaking the cycle of poverty through education and family strengthening.
          </p>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="bg-white border-t border-slate-100 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Portrait */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-slate-100">
                <Image
                  src="/gallery/mama_kevina1.jpeg"
                  alt="Mama Kevina, Founder of the Mama Kevina Foundation"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-7 space-y-6">
              <span className="flex items-center gap-2 text-emerald-600 font-semibold text-sm tracking-wide">
                <Heart className="h-4 w-4 fill-emerald-100" /> Founder
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Mama Kevina
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Mama Kevina is the founder of the Mama Kevina Foundation. She coordinates the foundation's work, carrying forward a legacy of hope and systemic empowerment. Under her leadership, the foundation focuses on practical interventions — child sponsorships, education support, and agricultural self-reliance — that uplift vulnerable children, girls, and families across Tororo District.
              </p>
              <div className="relative border-l-4 border-emerald-500 pl-6 py-3 bg-slate-50 rounded-r-xl">
                <Quote className="absolute -top-2 -left-2 h-6 w-6 text-emerald-200 rotate-180" />
                <p className="text-slate-700 italic text-base leading-relaxed">
                  &ldquo;Our vision is a self-sustaining society where children, girls, and families have the tools to construct their own future with dignity.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="bg-slate-50/60 border-t border-slate-100 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="text-3xl font-bold text-slate-900">Leadership & Board</h2>
            <p className="text-slate-500">The dedicated people guiding our mission forward.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="overflow-hidden rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                  <Image
                    src={member.src}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 space-y-2">
                  <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                  <p className="text-sm font-semibold text-blue-700">{member.role}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}