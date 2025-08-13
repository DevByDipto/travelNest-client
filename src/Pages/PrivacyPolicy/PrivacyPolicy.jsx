// src/pages/PrivacyPolicy.jsx
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className=" bg-gray-50 dark:bg-[#1D232A] text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4 pb-16 pt-28 md:pb-32 md:pt-44">
        <div className="max-w-4xl mx-auto bg-white dark:bg-[#182432] shadow-lg rounded-2xl p-8 md:p-12">
          <h1 className="text-2xl md:text-3xl font-semibold mb-4">Privacy Policy</h1>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            We respect your privacy. This policy explains what information we collect and how we use it.
            {/* বাংলা: আমরা আপনার গোপনীয়তাকে সম্মান করি। কোন ডাটা সংগ্রহ করা হয় এবং কিভাবে ব্যবহার করা হবে তা এখানে বর্ণনা করা আছে। */}
          </p>

          <section className="mt-6">
            <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
            <ul className="list-disc pl-6 leading-relaxed text-gray-700 dark:text-gray-300">
              <li>Personal data you provide (name, email, phone).</li>
              {/* বাংলা: আপনি যে ব্যক্তিগত তথ্য দেন (নাম, ইমেইল, ফোন)। */}
              <li>Booking data (itineraries, payment receipts).</li>
              {/* বাংলা: বুকিং সংক্রান্ত তথ্য (ইটিনারারি, পেমেন্ট রসিদ)। */}
              <li>Usage data (pages visited, device info).</li>
              {/* বাংলা: ব্যবহারের ডাটা (কোন পেজ দেখা হয়েছে, ডিভাইস তথ্য)। */}
            </ul>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold mb-2">2. How We Use Data</h2>
            <p className="leading-relaxed text-gray-700 dark:text-gray-300">
              To provide services, process bookings, send confirmations, and improve the product.
              {/* বাংলা: সার্ভিস প্রদান, বুকিং প্রসেস, কনফার্মেশন পাঠানো ও প্রোডাক্ট উন্নত করার জন্য ডাটা ব্যবহার করা হয়। */}
            </p>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold mb-2">3. Third-Party Services</h2>
            <p className="leading-relaxed text-gray-700 dark:text-gray-300">
              We use payment processors and analytics providers; they may collect limited data as per their policies.
              {/* বাংলা: আমরা পেমেন্ট প্রসেসর ও অ্যানালাইটিক্স সার্ভিস ব্যবহার করি; তাদেরও সীমিত ডাটা সংগ্রহ থাকে তাদের নীতিমালা অনুযায়ী। */}
            </p>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold mb-2">4. Your Rights</h2>
            <p className="leading-relaxed text-gray-700 dark:text-gray-300">
              You can request access, correction, or deletion of your personal data by contacting us.
              {/* বাংলা: আপনি আপনার ব্যক্তিগত ডাটা দেখার, সংশোধন বা মুছার অনুরোধ করতে পারবেন আমাদের সাথে যোগাযোগ করে। */}
            </p>
          </section>

          <div className="mt-8 border-t pt-6 text-sm text-gray-600 dark:text-gray-400">
            <p>Contact: <a href="mailto:privacy@travel-guru.example" className="underline">privacy@travel-guru.example</a></p>
            {/* বাংলা: যোগাযোগ: privacy@travel-guru.example */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
