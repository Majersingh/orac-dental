'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function ThankYouPage() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/");
    }, 5000); // Redirect after 5 seconds

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-pink-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-10 rounded-2xl shadow-lg border-2 border-pink-200 text-center max-w-md w-full"
      >
        <h1 className="text-3xl font-bold text-[#d72660] mb-4">Thank You!</h1>
        <p className="text-gray-700 mb-4">
          Your message has been submitted successfully.
        </p>
        <p className="text-sm text-gray-500">
          Redirecting to homepage in 5 seconds...
        </p>
      </motion.div>
    </section>
  );
}
