// src/pages/TermsAndConditions.jsx
import React from "react";

const TermsAndConditions = () => {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 md:p-12">
          {/* শিরোনাম / Title */}
          <h1 className="text-2xl md:text-3xl font-semibold mb-4">
            Terms & Conditions
            <span className="block text-sm text-gray-500 dark:text-gray-400">
              (Last updated: August 11, 2025) {/* Update date as needed */}
            </span>
          </h1>

          {/* সারাংশ / Summary */}
          <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">
            Welcome to Travel Nest. By using our services you agree to these Terms & Conditions.
            {/* বাংলা: Travel Nest-তে স্বাগতম । আমাদের সার্ভিস ব্যবহার করলে আপনি এই শর্তাবলীতে সম্মত হবেন। */}
          </p>

          {/* Sections */}
          <section className="mt-8">
            <h2 className="text-xl font-semibold mb-2">1. Use of Service</h2>
            <p className="leading-relaxed text-gray-700 dark:text-gray-300">
              You must be at least 18 years old to make a booking. Use of this website must comply with local laws.
              {/* বাংলা: বুকিং করার জন্য আপনার বয়স ন্যূনতম ১৮ বছর হতে হবে। এই ওয়েবসাইট ব্যবহার স্থানীয় আইন মেনে করতে হবে। */}
            </p>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold mb-2">2. Bookings & Payments</h2>
            <p className="leading-relaxed text-gray-700 dark:text-gray-300">
              Bookings are subject to availability. Payments are processed through third-party gateways; Travel Nest is not responsible for gateway failures.
              {/* বাংলা: বুকিং উপলব্ধতার ওপর নির্ভরশীল। পেমেন্ট থার্ড-পার্টি গেটওয়ের মাধ্যমে হবে; Travel Nest গেটওয়ে ব্যর্থতার জন্য দায়ী নয়। */}
            </p>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold mb-2">3. Cancellation & Refund</h2>
            <p className="leading-relaxed text-gray-700 dark:text-gray-300">
              Cancellation policies vary by partner. Refund requests will be evaluated per booking rules.
              {/* বাংলা: ক্যান্সেলেশন পলিসি পার্টনার অনুযায়ী ভিন্ন হবে। রিফান্ড অনুরোধ বুকিং রুল অনুযায়ী মূল্যায়ন করা হবে। */}
            </p>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold mb-2">4. Limitation of Liability</h2>
            <p className="leading-relaxed text-gray-700 dark:text-gray-300">
              Travel Nest will not be liable for indirect damages, losses due to third-party providers, or force majeure events.
              {/* বাংলা: Travel Nest পারোক্ষ ক্ষতি, থার্ড-পার্টি সেবাদাতা কারনে ক্ষতি বা ফোর্স মেজর ইভেন্টের জন্য দায়ী নয়। */}
            </p>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold mb-2">5. Changes to Terms</h2>
            <p className="leading-relaxed text-gray-700 dark:text-gray-300">
              We may update these terms; changes will be posted here with an updated date.
              {/* বাংলা: আমরা শর্তাবলী পরিবর্তন করতে পারি; পরিবর্তন এখানে প্রকাশ করা হবে এবং তারিখ আপডেট থাকবে। */}
            </p>
          </section>

          <div className="mt-8 border-t pt-6 text-sm text-gray-600 dark:text-gray-400">
            <p>If you have questions, contact us at <a href="mailto:support@travel-guru.example" className="underline">support@travel-guru.example</a>.</p>
            {/* বাংলা: কোন প্রশ্ন থাকলে আমাদেরকে ইমেইল করো: support@travel-guru.example */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default TermsAndConditions;
