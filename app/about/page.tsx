import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center w-full px-4 md:px-6 lg:px-8 py-12">
      <div className="max-w-7xl w-full space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-7xl">
            About Us
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Crafting beauty through handmade floral arrangements, one stitch at
            a time
          </p>
        </div>

        {/* Our Story Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="/about/workshop.jpg"
              alt="Our Workshop"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold font-montserrat">
              Our Story
            </h2>
            <p className="text-gray-600">
              Founded in 2020, Crochet Creations began as a small passion
              project that blossomed into something extraordinary. Our journey
              started with a simple idea: to create lasting floral beauty
              through the art of crochet.
            </p>
            <p className="text-gray-600">
              What sets us apart is our dedication to craftsmanship and
              attention to detail. Each flower is meticulously crafted by hand,
              ensuring that every petal and leaf captures the essence of
              nature's beauty.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-[#F5F5F5] p-8 md:p-12 rounded-2xl">
          <h2 className="text-3xl font-semibold font-montserrat text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Craftsmanship</h3>
              <p className="text-gray-600">
                We believe in creating pieces that showcase the highest level of
                artistry and attention to detail.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
              <p className="text-gray-600">
                Our creations are eco-friendly, lasting alternatives to
                traditional cut flowers, reducing waste and environmental
                impact.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continuously explore new techniques and designs to bring
                fresh, creative ideas to life.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center space-y-8">
          <h2 className="text-3xl font-semibold font-montserrat">Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Behind every beautiful creation is a team of passionate artisans
            dedicated to bringing joy through their craft. Our diverse team
            combines traditional techniques with modern design sensibilities.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {/* Add team member cards here when photos are available */}
          </div>
        </div>
      </div>
    </div>
  );
}
