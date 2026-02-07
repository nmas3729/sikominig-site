import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <section id="hero" className="relative min-h-[600px] overflow-hidden bg-[#e65c00] py-20">
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold uppercase leading-tight text-white md:text-5xl">
                We Support The <span className="block">Junior Mining</span>{" "}
                Sector
              </h1>
              <p className="mt-6 text-lg text-white/95">
                With accessible & sustainable mining services that guarantee
                success.
              </p>
              <Link
                href="#contact"
                className="mt-8 inline-block rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-[#e65c00]"
              >
                Contact
              </Link>
            </div>
            <div className="relative h-80 overflow-hidden rounded-tl-3xl rounded-bl-3xl md:h-96">
              <Image
                src="/images/banner-img.jpg"
                alt="Mining haul trucks at work"
                fill
                className="object-cover shadow-2xl"
                priority
              />
            </div>
          </div>
          {/* Accreditation / Partner logos */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-12 py-8">
            <Image
              src="/images/top-logo1.png"
              alt="Partner"
              width={100}
              height={50}
              className="object-contain"
            />
            <Image
              src="/images/top-logo2.png"
              alt="Partner"
              width={100}
              height={50}
              className="object-contain"
            />
            <Image
              src="/images/top-logo3.png"
              alt="Partner"
              width={100}
              height={50}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section id="vision" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative">
              <div className="relative h-80 overflow-hidden rounded-l-2xl rounded-tr-3xl md:h-96">
                <Image
                  src="/images/mission-img.jpg"
                  alt="Business professionals shaking hands"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -right-4 -top-4 -z-10 h-full w-full rounded-l-2xl rounded-tr-3xl bg-[#e65c00]/20" />
            </div>
            <div>
              <h2 className="text-2xl font-bold uppercase text-[#2a2a2a]">
                Our Mission <span className="font-extrabold">& Vision</span>
              </h2>
              <p className="mt-6 text-[#444] leading-relaxed">
                Our purpose is to facilitate the junior mining sector&apos;s
                growth, and to be leaders in supporting its total mining value
                chain, providing easy access to quality services it normally has
                difficulty accessing.
              </p>
              <p className="mt-4 text-[#444] leading-relaxed">
                Through partnerships with experienced companies and individuals,
                as well as the valuable skills we have amassed over 60 years, we
                have identified and filled the gaps that stifle the junior mining
                sector&apos;s progress. Siko Mining will provide what is needed
                to achieve sustainable success in this sector, in turn uplifting
                the lives of those involved and the communities around them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Access Offering Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-2xl font-bold uppercase text-[#2a2a2a]">
            We&apos;ll Give You <span className="text-[#e65c00]">Access To</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border-t-4 border-[#e65c00] bg-white p-8 shadow-md">
              <div className="mb-4 flex justify-center">
                <Image src="/images/help-logo1.png" alt="" width={64} height={64} className="object-contain" />
              </div>
              <h3 className="font-bold text-[#2a2a2a]">
                Contracting Expertise & Mining Consultancy
              </h3>
              <p className="mt-2 text-[#444]">
                60 years of combined practical experience, as well as the
                insights gained from our industry networking, makes us the best
                consultants.
              </p>
            </div>
            <div className="rounded-xl border-t-4 border-[#e65c00] bg-white p-8 shadow-md">
              <div className="mb-4 flex justify-center">
                <Image src="/images/help-logo2.svg" alt="" width={64} height={64} className="object-contain" />
              </div>
              <h3 className="font-bold text-[#2a2a2a]">
                Fine Coal & Pelletising Technology
              </h3>
              <p className="mt-2 text-[#444]">
                We&apos;ve got our own technology and our connections within the
                industry give us access to fine coal stocks.
              </p>
            </div>
            <div className="rounded-xl border-t-4 border-[#e65c00] bg-white p-8 shadow-md">
              <div className="mb-4 flex justify-center">
                <Image src="/images/help-logo3.svg" alt="" width={64} height={64} className="object-contain" />
              </div>
              <h3 className="font-bold text-[#2a2a2a]">
                Mining Project Management Skills
              </h3>
              <p className="mt-2 text-[#444]">
                Get expertise based on our extensive academic background, and the
                experience we gained assisting Eskom&apos;s cost-plus mines.
              </p>
            </div>
          </div>
          <div className="mt-12 flex items-center justify-center gap-4">
            <Image src="/images/quote-left.svg" alt="" width={32} height={32} className="opacity-50" />
            <blockquote className="max-w-3xl text-center italic text-[#444]">
              There are no secrets to success. It is the result of preparation,
              hard work, and learning from failure.
            </blockquote>
            <Image src="/images/quote-right.svg" alt="" width={32} height={32} className="opacity-50" />
          </div>
          <p className="mt-2 text-center font-medium text-[#444]">— Colin Powell</p>
        </div>
      </section>

      {/* 4. Services Section */}
      <section id="services" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-2xl font-bold uppercase text-[#2a2a2a]">
            Our <span className="text-[#e65c00]">Services</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border-t-4 border-[#e65c00] bg-white p-8 shadow-md">
              <div className="mb-4 flex justify-center">
                <Image src="/images/services-logo4.png" alt="" width={64} height={64} className="object-contain" />
              </div>
              <h3 className="font-bold text-[#2a2a2a]">Rehabilitation</h3>
              <p className="mt-2 text-[#444]">
                We are fully equipped to carry out mine rehabilitation as an
                essential part of the mining process.
              </p>
            </div>
            <div className="rounded-xl border-t-4 border-[#e65c00] bg-white p-8 shadow-md">
              <div className="mb-4 flex justify-center">
                <Image src="/images/services-logo1.png" alt="" width={64} height={64} className="object-contain" />
              </div>
              <h3 className="font-bold text-[#2a2a2a]">
                Dry Bulk Commodity Transportation & Material
              </h3>
              <p className="mt-2 text-[#444]">
                Our association with the biggest coal transporters, Eskom, gives
                us experience in transporting bulk commodities, as well as
                handling material, e.g. crushing, screening and conveying.
              </p>
            </div>
            <div className="rounded-xl border-t-4 border-[#e65c00] bg-white p-8 shadow-md">
              <div className="mb-4 flex justify-center">
                <Image src="/images/services-logo3.png" alt="" width={64} height={64} className="object-contain" />
              </div>
              <h3 className="font-bold text-[#2a2a2a]">Commodity Trading</h3>
              <p className="mt-2 text-[#444]">
                We have strong capabilities in commodity trading, with a
                particular focus on coal. Our team brings deep expertise in
                market analysis, contract structuring, and risk management
                across the coal value chain. This enables us to navigate complex
                markets and deliver consistent value to our trading partners.
              </p>
            </div>
            <div className="rounded-xl border-t-4 border-[#e65c00] bg-white p-8 shadow-md md:col-span-2 lg:col-span-1 lg:col-start-2">
              <div className="mb-4 flex justify-center">
                <Image src="/images/services-logo3.png" alt="" width={64} height={64} className="object-contain" />
              </div>
              <h3 className="font-bold text-[#2a2a2a]">Mining</h3>
              <p className="mt-2 text-[#444]">
                We are actively pursuing our own permits, prospecting rights, and
                mining rights as part of our strategic growth in the sector. Our
                team is experienced in navigating regulatory frameworks and
                geological assessments to secure and develop viable mining
                assets. This approach reflects our commitment to building a
                strong, self-sustaining mining portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Stats Section */}
      <section className="relative bg-gray-100 py-20">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "url('/images/stats-bg.png')",
            backgroundSize: "cover",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-2xl font-bold uppercase text-[#2a2a2a]">
            Our <span className="text-[#e65c00]">Stats</span>
          </h2>
          <div className="grid gap-8 text-center md:grid-cols-4">
            <div>
              <p className="text-4xl font-bold text-[#e65c00]">+/-1MT</p>
              <p className="mt-2 text-[#2a2a2a]">Tons of Coal Moved</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#e65c00]">90%</p>
              <p className="mt-2 text-[#2a2a2a]">Output Efficiency</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#e65c00]">10/10</p>
              <p className="mt-2 text-[#2a2a2a]">Client Satisfaction</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#e65c00]">+90</p>
              <p className="mt-2 text-[#2a2a2a]">Years in the Business</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Media Section */}
      <section
        id="media"
        className="py-16 md:py-24"
        style={{
          background:
            "linear-gradient(to bottom right, #f8fafc, #e5e7eb)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-2xl font-bold uppercase text-[#1f2937] md:text-3xl">
            Our Media
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-xl bg-white/30 p-2 shadow-lg backdrop-blur-sm transition-shadow hover:shadow-xl">
              <video
                src="/images/Mining.mp4"
                controls
                muted
                loop
                playsInline
                poster="https://placehold.co/1200x675/1e293b/ffffff?text=Siko+Mining+Services"
                className="h-full w-full rounded-lg object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="overflow-hidden rounded-xl bg-white/30 p-2 shadow-lg backdrop-blur-sm transition-shadow hover:shadow-xl">
              <video
                src="/images/WhatsApp Video 2025-06-20 at 4.14.30 PM.mp4"
                controls
                muted
                loop
                playsInline
                poster="https://placehold.co/1200x675/374151/ffffff?text=Our+Technology"
                className="h-full w-full rounded-lg object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="overflow-hidden rounded-xl bg-white/30 p-2 shadow-lg backdrop-blur-sm transition-shadow hover:shadow-xl">
              <video
                src="/images/WhatsApp Video 2025-07-12 at 3.02.25 PM.mp4"
                controls
                muted
                loop
                playsInline
                poster="https://placehold.co/1200x675/374151/ffffff?text=Our+Technology"
                className="h-full w-full rounded-lg object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <h3 className="mb-6 mt-12 text-center text-xl font-bold text-[#1f2937]">
            Our Gallery
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="group relative h-64 overflow-hidden rounded-xl bg-white/30 p-2 shadow-lg backdrop-blur-sm transition-transform hover:-translate-y-1 hover:shadow-xl">
              <Image
                src="/images/WhatsApp Image 2025-07-02 at 4.34.49 PM.jpeg"
                alt="Siko Mining Team"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="group relative h-64 overflow-hidden rounded-xl bg-white/30 p-2 shadow-lg backdrop-blur-sm transition-transform hover:-translate-y-1 hover:shadow-xl">
              <Image
                src="/images/WhatsApp Image 2025-07-04 at 1.00.16 PM.jpeg"
                alt="Mining Operations"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="group relative h-64 overflow-hidden rounded-xl bg-white/30 p-2 shadow-lg backdrop-blur-sm transition-transform hover:-translate-y-1 hover:shadow-xl">
              <Image
                src="/images/we-img.jpg"
                alt="Site Visit"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/30 text-lg font-semibold text-white">
                Site Visit
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Partners Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-2xl font-bold uppercase text-[#2a2a2a]">
            We&apos;ve Worked <span className="text-[#e65c00]">With</span>
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-12">
            <Image
              src="/images/worked-logo1.png"
              alt="Partner"
              width={120}
              height={60}
              className="object-contain"
            />
            <Image
              src="/images/worked-logo2.png"
              alt="Partner"
              width={120}
              height={60}
              className="object-contain"
            />
            <Image
              src="/images/worked-logo3.png"
              alt="Partner"
              width={120}
              height={60}
              className="object-contain"
            />
            <Image
              src="/images/worked-logo4.png"
              alt="Partner"
              width={120}
              height={60}
              className="object-contain"
            />
            <Image
              src="/images/worked-logo5.png"
              alt="Partner"
              width={120}
              height={60}
              className="object-contain"
            />
            <Image
              src="/images/worked-logo6.png"
              alt="Partner"
              width={120}
              height={60}
              className="object-contain"
            />
            <Image
              src="/images/JAE-PNG-CHECK.png"
              alt="Partner"
              width={120}
              height={60}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* 8. About / Who Are We */}
      <section id="about" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-2xl font-bold uppercase text-[#2a2a2a]">
            Who Are <span className="text-[#e65c00]">We?</span>
          </h2>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="text-[#444] leading-relaxed">
                Siko Mining Services Pty Ltd (&quot;SMS&quot;) is a level 2
                BBBEE-compliant mining entity.
              </p>
              <p className="mt-4 text-[#444] leading-relaxed">
                With over 60 years of experience in the mining sector, SMS has
                identified major gaps over the years, particularly within the
                Junior Mining sector.
              </p>
              <Link
                href="#contact"
                className="mt-6 inline-block border-b-2 border-[#e65c00] font-medium text-[#2a2a2a] hover:text-[#e65c00]"
              >
                Read More
              </Link>
            </div>
            <div className="relative">
              <div className="relative h-80 overflow-hidden rounded-r-2xl rounded-tl-3xl border-l-4 border-t-4 border-[#e65c00] md:h-96">
                <Image
                  src="/images/we-img.jpg"
                  alt="Hands holding raw mineral ore"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Team Section - alternating layout per reference */}
      <section id="founder" className="bg-[#faf8f5] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-2xl font-bold uppercase text-[#2a2a2a]">
            Meet The <span className="text-[#e65c00]">Team</span>
          </h2>
          <div className="space-y-16">
            {/* Bonani - image left, text right */}
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div className="relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-l-2xl rounded-tr-3xl">
                  <Image src="/images/tm-img.png" alt="Bonani Siko" fill className="object-cover" />
                </div>
                <div className="absolute -right-2 -top-2 -z-10 h-full w-full rounded-l-2xl rounded-tr-3xl bg-[#e65c00]/20" />
              </div>
              <div className="rounded-xl bg-white p-8 shadow-md">
                <p className="text-sm font-semibold uppercase text-[#e65c00]">CEO / Executive Director</p>
                <h3 className="mt-2 text-2xl font-bold text-[#2a2a2a]">Bonani Siko</h3>
                <p className="mt-4 text-[#444]">
                  Bonani Siko is a qualified Mining Engineer with a National Diploma in Coal Mining, a National Higher Diploma in Coal Mining, a B-Tech in Mining Engineering at the University of Johannesburg (UJ), as well as a certificate from an executive development program with the University of Cape Town (UCT). He further has a mine manager&apos;s certificate of competency with South Africa&apos;s Department of Mining Resources (DMR).
                </p>
                <button className="mt-4 border-b-2 border-[#e65c00] font-medium text-[#2a2a2a] hover:text-[#e65c00]">Read More</button>
              </div>
            </div>
            {/* Gomotsegang - image left, text right */}
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div className="relative md:order-1">
                <div className="relative aspect-[4/5] overflow-hidden rounded-l-2xl rounded-tr-3xl">
                  <Image src="/images/Gomo.jpeg" alt="Gomotsegang Tlhasi" fill className="object-cover" />
                </div>
                <div className="absolute -right-2 -top-2 -z-10 h-full w-full rounded-l-2xl rounded-tr-3xl bg-[#e65c00]/20" />
              </div>
              <div className="rounded-xl bg-white p-8 shadow-md md:order-2">
                <p className="text-sm font-semibold uppercase text-[#e65c00]">HR Director</p>
                <h3 className="mt-2 text-2xl font-bold text-[#2a2a2a]">Gomotsegang Tlhasi</h3>
                <p className="mt-4 text-[#444]">
                  Gomotsegang Tlhasi is a seasoned HR Practitioner and entrepreneur with over 15 years of experience in the mining industry. She holds academic qualifications in Retail Business Management and Human Resources Management.
                </p>
                <button className="mt-4 border-b-2 border-[#e65c00] font-medium text-[#2a2a2a] hover:text-[#e65c00]">Read More</button>
              </div>
            </div>
            {/* Fungai - text left, image right */}
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div className="order-2 rounded-xl bg-white p-8 shadow-md md:order-1">
                <p className="text-sm font-semibold uppercase text-[#e65c00]">Finance Director</p>
                <h3 className="mt-2 text-2xl font-bold text-[#2a2a2a]">Fungai Blake CA(SA)</h3>
                <p className="mt-4 text-[#444]">
                  Fungai Blake is a Chartered Accountant (SA) with a strong academic foundation, holding a Bachelor&apos;s degree in Accounting from the University of Cape Town and a Higher Diploma in Tax Law from the University of Johannesburg.
                </p>
                <button className="mt-4 border-b-2 border-[#e65c00] font-medium text-[#2a2a2a] hover:text-[#e65c00]">Read More</button>
              </div>
              <div className="relative order-1 md:order-2">
                <div className="relative aspect-[4/5] overflow-hidden rounded-r-2xl rounded-tl-3xl">
                  <Image src="/images/Fungi.jpeg" alt="Fungai Blake" fill className="object-cover" />
                </div>
                <div className="absolute -left-2 -top-2 -z-10 h-full w-full rounded-r-2xl rounded-tl-3xl bg-[#e65c00]/20" />
              </div>
            </div>
            {/* Martin - text left, image right */}
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div className="order-2 rounded-xl bg-white p-8 shadow-md md:order-1">
                <p className="text-sm font-semibold uppercase text-[#e65c00]">Non-Executive Director</p>
                <h3 className="mt-2 text-2xl font-bold text-[#2a2a2a]">Martin Makoni</h3>
                <p className="mt-4 text-[#444]">
                  Martin Makoni graduated from the University of Zimbabwe in 1981. He has a BSc in Mechanical Engineering, Honors, and an MSc in Industrial and Administrative Sciences from City University, England. He has 37 years&apos; experience in the mining industry.
                </p>
                <button className="mt-4 border-b-2 border-[#e65c00] font-medium text-[#2a2a2a] hover:text-[#e65c00]">Read More</button>
              </div>
              <div className="relative order-1 md:order-2">
                <div className="relative aspect-[4/5] overflow-hidden rounded-r-2xl rounded-tl-3xl">
                  <Image src="/images/team-img2.jpg" alt="Martin Makoni" fill className="object-cover" />
                </div>
                <div className="absolute -left-2 -top-2 -z-10 h-full w-full rounded-r-2xl rounded-tl-3xl bg-[#e65c00]/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Contact Section */}
      <section id="contact" className="relative bg-[#e65c00] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-2xl font-bold uppercase text-white md:text-3xl">
            Get in Touch With Us!
          </h2>
          <div className="grid gap-12 md:grid-cols-2">
            <form className="flex flex-col gap-4 rounded-2xl bg-white p-8 shadow-xl">
              <input
                type="text"
                name="Name"
                placeholder="Enter Your Name"
                className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-[#2a2a2a] placeholder-gray-500"
              />
              <input
                type="email"
                name="Email"
                placeholder="Enter Your Email"
                className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-[#2a2a2a] placeholder-gray-500"
              />
              <textarea
                name="Message"
                placeholder="Message..."
                rows={4}
                className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-[#2a2a2a] placeholder-gray-500"
              />
              <button
                type="submit"
                className="w-fit rounded-lg bg-gradient-to-r from-[#e65c00] to-[#ff8533] px-8 py-4 font-semibold text-white shadow-lg transition-opacity hover:opacity-95"
              >
                Submit
              </button>
            </form>
            <div className="text-white">
              <p className="mb-6 text-white/95">
                Fill in your details below to schedule a free consultation to
                discuss a strategy forward.
              </p>
              <div className="space-y-6">
                <div>
                  <h5 className="font-bold uppercase">Mail Us</h5>
                  <a
                    href="mailto:info@sikomining.co.za"
                    className="text-white/95 hover:underline"
                  >
                    info@sikomining.co.za
                  </a>
                </div>
                <div>
                  <h5 className="font-bold uppercase">Call Us</h5>
                  <a
                    href="tel:+270820977916"
                    className="text-white/95 hover:underline"
                  >
                    0820977916
                  </a>
                </div>
                <div>
                  <h5 className="font-bold uppercase">Location</h5>
                  <p className="text-white/95">
                    210 Pilgrims Rest, Reedstream Park,
                    <br />
                    Rietspruit, Mpumalanga, South Africa 2231
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
