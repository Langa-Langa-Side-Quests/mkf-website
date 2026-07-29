import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  GraduationCap, 
  Briefcase, 
  Users, 
  ShieldCheck, 
  HeartHandshake, 
  CheckCircle2, 
  Wrench, 
  Utensils, 
  HeartPulse 
} from "lucide-react";

const karamojaImages = [
  { src: "/gallery/karamoja-child.jpeg", alt: "School feeding programme supporting a child in Karamoja" },
  { src: "/gallery/karamoja-guy.jpeg", alt: "School feeding programme beneficiary in Karamoja" },
  { src: "/gallery/karamoja-children.jpeg", alt: "Children benefiting from the school feeding programme in Karamoja" },
];

export default function WorkPage() {
  return (
    <main className="container mx-auto px-4 py-16 max-w-5xl space-y-12">
      {/* Header Section */}
      <div className="space-y-4 text-center">
        <span className="text-xs font-bold text-blue-700 tracking-widest uppercase bg-blue-50 px-3 py-1 rounded-full">
          Strategic Interventions
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Our Core Programs
        </h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-base leading-relaxed">
          Mama Kevina Foundation impacts lives through direct service delivery, sensitizations, community advocacy, and the professional management of educational initiatives.
        </p>
      </div>

      {/* Tabs Container */}
      <Tabs defaultValue="education" className="w-full">
      <TabsList className="flex mdx:grid w-full md:grid-cols-4 !h-auto p-1.5 bg-slate-100/80 border border-slate-200/60 rounded-2xl gap-1.5 overflow-x-auto justify-start md:justify-center whitespace-nowrap scrollbar-none">
    <TabsTrigger value="education" className="py-3 px-4 text-xs md:text-sm font-semibold gap-2 rounded-xl transition-all shrink-0 flex items-center">
      <GraduationCap className="h-4 w-4 shrink-0" />
      Child Sponsorship
    </TabsTrigger>
    <TabsTrigger value="vocational" className="py-3 px-4 text-xs md:text-sm font-semibold gap-2 rounded-xl transition-all shrink-0 flex items-center">
      <Briefcase className="h-4 w-4 shrink-0" />
      Vocational Skills
    </TabsTrigger>
    <TabsTrigger value="parent" className="py-3 px-4 text-xs md:text-sm font-semibold gap-2 rounded-xl transition-all shrink-0 flex items-center">
      <Users className="h-4 w-4 shrink-0" />
      Parent Support
    </TabsTrigger>
    <TabsTrigger value="family" className="py-3 px-4 text-xs md:text-sm font-semibold gap-2 rounded-xl transition-all shrink-0 flex items-center">
      <ShieldCheck className="h-4 w-4 shrink-0" />
      Family Strength
    </TabsTrigger>
  </TabsList>
        {/* 1. Child Sponsorship Content */}
        <TabsContent value="education" className="mt-8 focus-visible:outline-none">
          <Card className="border border-slate-100 shadow-sm rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-50/50 via-transparent to-transparent p-6 md:p-8">
              <CardTitle className="text-2xl font-bold text-slate-900">Child Education Sponsorship Program</CardTitle>
              <CardDescription className="text-base text-slate-500 mt-1">
                Education is a catalyst for change, and every child should have the opportunity to experience it.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 md:p-8 pt-0 space-y-6 text-slate-600 leading-relaxed">
              <p>
                Through the Child Education Sponsorship Program, we carefully select non-school-going and never-been-to-school children who are eager to learn but lack the economic means to attend. Sponsors provide essential financial assistance, encompassing school fees, textbooks, stationery, uniforms, and other necessary supplies. This comprehensive support ensures that children are equipped to fully engage in their educational pursuits.
              </p>
              <div className="flex gap-4 p-5 rounded-2xl border border-blue-100 bg-blue-50/40">
                <HeartHandshake className="h-6 w-6 text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-bold mb-1">Connection of Hope</strong>
                  <p className="text-sm">
                    Sponsors develop personal relationships with the children they support. We provide regular updates, letters, and virtual interactions allowing sponsors to witness the tangible impact of their structural contributions.
                  </p>
                </div>
              </div>

              {/* School Feeding in Karamoja — photo evidence strip */}
              <div className="space-y-3 pt-2">
                <h4 className="font-bold text-slate-900 text-base">School Feeding in Karamoja</h4>
                <p className="text-sm text-slate-500">
                  Our education programme supports school feeding initiatives in Karamoja, ensuring children are nourished and ready to learn.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {karamojaImages.map((img) => (
                    <div key={img.src} className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-100 shadow-sm group">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, 33vw"
                        className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                        <p className="text-white text-xs font-medium">{img.alt}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 2. Vocational Training Content */}
        <TabsContent value="vocational" className="mt-8 focus-visible:outline-none">
          <Card className="border border-slate-100 shadow-sm rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-emerald-50/50 via-transparent to-transparent p-6 md:p-8">
              <CardTitle className="text-2xl font-bold text-slate-900">Vocational Training & Life Skills</CardTitle>
              <CardDescription className="text-base text-slate-500 mt-1">
                Empowering young individuals with practical expertise to foster sustainable local livelihoods.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 md:p-8 pt-0 space-y-6 text-slate-600 leading-relaxed">
              <p>
                Recognizing that traditional schooling might not suit every child, this pioneering initiative introduces a dynamic approach that empowers young individuals with practical skills, fostering sustainable livelihoods, independent employment, and holistic personal growth.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-2">
                <div className="p-5 border border-slate-100 rounded-xl bg-slate-50/50 space-y-2">
                  <Utensils className="h-5 w-5 text-emerald-600" />
                  <h4 className="font-bold text-slate-900">Hospitality & Culinary Arts</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">This pathway equips students with skills in cooking, baking, and hospitality management, preparing them for careers in the hospitality industry, restaurants, and catering services.</p>
                </div>
                <div className="p-5 border border-slate-100 rounded-xl bg-slate-50/50 space-y-2">
                  <Wrench className="h-5 w-5 text-emerald-600" />
                  <h4 className="font-bold text-slate-900">Automotive Mechanics</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">This pathway equips students with skills in cooking, baking, and hospitality management, preparing them for careers in the hospitality industry, restaurants, and catering services..</p>
                </div>
                <div className="p-5 border border-slate-100 rounded-xl bg-slate-50/50 space-y-2">
                  <HeartPulse className="h-5 w-5 text-emerald-600" />
                  <h4 className="font-bold text-slate-900">Healthcare Support</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Foundational instruction for nursing assistants, medical aides, and community health deployment infrastructure.</p>
                </div>
              </div>

              <p className="text-sm bg-slate-50 border border-slate-100 p-4 rounded-xl">
                <strong className="text-slate-900">Holistic Life Skills Integration:</strong> Beyond technical trades, this curriculum provides communication metrics, logical problem-solving systems, financial literacy, and collaborative interpersonal skills essential for running modern businesses.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 3. Parent Support Content */}
        <TabsContent value="parent" className="mt-8 focus-visible:outline-none">
          <Card className="border border-slate-100 shadow-sm rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-orange-50/40 via-transparent to-transparent p-6 md:p-8">
              <CardTitle className="text-2xl font-bold text-slate-900">Parent Education & Support Program</CardTitle>
              <CardDescription className="text-base text-slate-500 mt-1">
                Bridging structural gaps between home environments and institutional academic spaces.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 md:p-8 pt-0 space-y-6 text-slate-600 leading-relaxed">
              <p>
                Recognizing the profound influence parents and primary caregivers maintain over a student&apos;s development pathway, this initiative firmly unites parents with educators. By facilitating immersive workshops and educational sessions, we equip parents to become active partners in learning.
              </p>
              
              <div className="space-y-3">
                 <div className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
                  <p className="text-sm"><strong className="text-slate-900">Parent-Centered Approach:</strong> involving them in the process, this initiative acknowledges their pivotal role in shaping a child’s learning experience.</p>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
                  <p className="text-sm"><strong className="text-slate-900">Workshops & Awareness Sessions:</strong> Overturning myths surrounding systemic blockages while embedding methods to properly monitor student retention markers.</p>
                </div>
                 <div className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
                  <p className="text-sm"><strong className="text-slate-900">Building Awareness:</strong> Through interactive sessions, parents discover how education not only empowers their childiren but also strengthens communities and paves the way for a brighter future.</p>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
                  <p className="text-sm"><strong className="text-slate-900">Supporting Learning at Home:</strong> Supplying practical frameworks ranging from cooperative household reading systems to stimulating natural exploration tendencies.</p>
                </div>
                 <div className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
                  <p className="text-sm"><strong className="text-slate-900">Creating Positive Change:</strong> By involving parents in the educational journey, parents embrace their role, they uplift their families, communities, and the entire society.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 4. Family Strengthening Content */}
        <TabsContent value="family" className="mt-8 focus-visible:outline-none">
          <Card className="border border-slate-100 shadow-sm rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-purple-50/40 via-transparent to-transparent p-6 md:p-8">
              <CardTitle className="text-2xl font-bold text-slate-900">Family Strengthening Programme</CardTitle>
              <CardDescription className="text-base text-slate-500 mt-1">
                Supporting the fundamental unit of society to proactively prevent child neglect and forced separation.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 md:p-8 pt-0 space-y-6 text-slate-600 leading-relaxed">
              <p>
                Mama Kevina Foundation holds that the family is the fundamental unit of society and the natural environment for the growth and well-being of all its members, particularly children. Children at risk of losing primary parental care remain the intentional focal target of this system.
              </p>
              <p>
                MKF deploys key specialized systems enabling households to securely maintain care responsibilities. Our essential services architecture features:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Economic empowerment via structural Income Generating Activities",
                  "Implementation of climate-smart agricultural frameworks",
                  "Saving culture development via community VSLAs",
                  "Prevention of SGBV and deployment of safeguarding networks",
                  "Targeted mental health and deep psychosocial counseling loops"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3.5 border border-slate-100 rounded-xl bg-slate-50/60 text-sm font-medium text-slate-800">
                    <CheckCircle2 className="h-4 w-4 text-purple-600 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}