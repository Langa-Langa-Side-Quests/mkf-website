import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, GraduationCap, Users, ShieldAlert, Heart } from "lucide-react";

export default function Home() {
  // Balanced 7-image gallery
  const galleryImages = [
    { src: "/gallery/img1.jpg", alt: "Mama Kevina Memorial Gallery", className: "md:col-span-2 md:row-span-2", isPriority: true },
    { src: "/gallery/img2.jpg", alt: "Meeting with Donors Supporting Scholarships" },
    { src: "/gallery/img3.jpg", alt: "Mama Kevina Comprehensive Secondary School" },
    { src: "/gallery/img4.jpg", alt: "School Engagement and Activities" },
    { src: "/gallery/img7.jpg", alt: "Sister Clare Mary Busingye with Scholarship Children" },
    { src: "/gallery/img6.jpg", alt: "School Gardening Project", className: "md:row-span-2" },
    { src: "/gallery/img5.jpg", alt: "Vegetable Income Generating Project", className: "md:col-span-2" },
  ];

  return (
    <main className="w-full">
      {/* SECTION:Hero Block */}
      <section className="bg-gradient-to-b from-blue-50 via-white to-transparent py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <span className="text-emerald-600 font-bold tracking-widest text-xs uppercase px-3 py-1 bg-emerald-50 rounded-full border border-emerald-200">
            Ugandan Indigenous NGO
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Empowering Society to Break the <span className="text-blue-700">Cycle of Poverty</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Mama Kevina Foundation actively works to improve the lives of vulnerable communities particularly girls, young women, and youth by advancing education and vocational skills in Tororo District.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800 text-white shadow-md">
              <Link href="/work">Our Core Programs</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-slate-300 text-slate-700 hover:bg-slate-50">
              <Link href="/about">Read Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION:Quick Summary Banner */}
      <section className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-4">Our Core Approach</h2>
          <p className="text-blue-100 leading-relaxed text-base">
            Our target is to support education needs for children from ultra poor families and those orphaned while supporting families at community level to improve their livelihoods through climate smart agriculture and income generating activities as a sustainable solution in the long term.
          </p>
        </div>
      </section>

      {/* SECTION: Program Summary Overviews */}
      <section className="container mx-auto px-4 py-20 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl font-bold text-slate-900">What We Do</h2>
          <p className="text-slate-500">Four essential programs under our specialized Family Strengthening Care Model framework.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="flex flex-col justify-between hover:shadow-lg transition-shadow">
            <CardHeader>
              <BookOpen className="h-8 w-8 text-blue-700 mb-2" />
              <CardTitle className="text-lg">Child Sponsorship</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-600">
              Providing essential financial assistance including school fees, textbooks, uniforms, and stationery.
            </CardContent>
          </Card>

          <Card className="flex flex-col justify-between hover:shadow-lg transition-shadow">
            <CardHeader>
              <GraduationCap className="h-8 w-8 text-emerald-600 mb-2" />
              <CardTitle className="text-lg">Vocational Training</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-600">
              Nurturing talents outside traditional schooling with culinary, mechanics, and health support pathways.
            </CardContent>
          </Card>

          <Card className="flex flex-col justify-between hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="h-8 w-8 text-orange-600 mb-2" />
              <CardTitle className="text-lg">Parent Support</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-600">
              Empowering home spaces through parenting workshops, learning strategies, and advocacy.
            </CardContent>
          </Card>

          <Card className="flex flex-col justify-between hover:shadow-lg transition-shadow">
            <CardHeader>
              <ShieldAlert className="h-8 w-8 text-purple-600 mb-2" />
              <CardTitle className="text-lg">Family Strengthening</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-600">
              Economic empowerment via local VSLA savings, climate-smart farming, and child protection services.
            </CardContent>
          </Card>
        </div>
      </section>

   
     {/* SECTION: Leadership & Founder's Vision */}
      <section className="bg-white border-t border-slate-100 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Column 1: Editorial Text (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <span className="flex items-center gap-2 text-blue-700 font-semibold text-sm tracking-wide">
                <Heart className="h-4 w-4 fill-blue-100" /> Executive Leadership
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Led by Compassion, Guided by Faith
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Mama Kevina coordinates the Mama Kevina Foundation, carrying forward a legacy of hope and systemic empowerment. Under her leadership, the foundation focuses on practical interventions—such as child sponsorships, education support, and agricultural self-reliance.
              </p>
              <div className="border-l-4 border-emerald-500 pl-4 py-1 bg-slate-50 rounded-r-lg">
                <p className="text-slate-500 italic text-sm">
                  &ldquo;Our vision is a self-sustaining society where children, girls, and families have the tools to construct their own future with dignity.&rdquo;
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-12 gap-4 h-[420px]">
              {/* Tall Left Portrait */}
              <div className="col-span-6 relative rounded-2xl overflow-hidden shadow-md border border-slate-100">
                <Image 
                  src="/gallery/mama_kevina1.jpeg" 
                  alt="Mama Kevina standing"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 50vw, 35vw"
                />
              </div>
              
              <div className="col-span-6 grid grid-rows-2 gap-4">
                <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-100">
                  <Image 
                    src="/gallery/mama_kevina2.jpeg" 
                    alt="Mama Kevina working at her office desk"
                    fill
                    className="object-cover" 
                    sizes="(max-width: 1024px) 50vw, 35vw"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-100">
                  <Image 
                    src="/gallery/mama_kevina3.jpeg" 
                    alt="Mama Kevina coordinating daily records"
                    fill
                    className="object-cover" 
                    sizes="(max-width: 1024px) 50vw, 35vw"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      

      {/* SCTION: Asymmetric Masonry Impac Gallery */}
      <section className="bg-slate-50/60 border-t border-slate-100 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="text-3xl font-bold text-slate-900">Our Work In Action</h2>
            <p className="text-slate-500">Real glimpses into the daily field transformations happening across Tororo District.</p>
          </div>

          {/* Grid updated with CSS classes to fix the mobile-vs-desktop caption behavior */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[220px]">
            {galleryImages.map((img, idx) => (
              <div 
                key={idx} 
                className={`relative rounded-2xl overflow-hidden border border-slate-200/60 bg-slate-100 shadow-sm group hover:shadow-md transition-all ${img.className || ""}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  priority={img.isPriority || false}
                  loading={img.isPriority ? undefined : "lazy"}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent md:opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4 md:p-5">
                  <p className="text-white text-xs sm:text-sm font-medium tracking-wide translate-y-0 md:translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {img.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}