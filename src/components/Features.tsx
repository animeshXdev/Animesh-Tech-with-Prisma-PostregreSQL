// app/components/FeaturesSection.tsx
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, MonitorSmartphone, GaugeCircle, Zap, Lightbulb } from "lucide-react";

const features = [
  {
    title: "High Performance",
    description: "Optimized and blazing fast websites that deliver great user experience across all devices.",
    icon: <GaugeCircle className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Responsive Design",
    description: "Flawless layout adapts to any screen size, ensuring accessibility on all devices.",
    icon: <MonitorSmartphone className="w-8 h-8 text-green-500" />,
  },
  {
    title: "Top-notch Security",
    description: "Industry standard security practices to keep your data safe and protected.",
    icon: <ShieldCheck className="w-8 h-8 text-red-500" />,
  },
  {
    title: "Creative Aesthetics",
    description: "Beautiful, modern, and clean design that leaves a lasting impression.",
    icon: <Sparkles className="w-8 h-8 text-purple-500" />,
  },
  {
    title: "Lightning Speed",
    description: "Fast load times and instant interactions using modern technologies and best practices.",
    icon: <Zap className="w-8 h-8 text-yellow-500" />,
  },
  {
    title: "Innovative Ideas",
    description: "Tailor-made solutions with unique and innovative ideas that stand out from the crowd.",
    icon: <Lightbulb className="w-8 h-8 text-amber-500" />,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function FeaturesSection() {
  return (
    <section className="w-full  items-center py-20 px-4 md:px-16 bg-white dark:bg-neutral-900" id="features">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">What I Offer</h2>
        <p className="text-muted-foreground mb-12 text-lg">
          My web development services combine performance, design, and innovation to build impactful digital experiences.
        </p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="hover:shadow-xl transition-all duration-300 h-full">
                <CardHeader className="flex flex-row items-center gap-4">
                  {feature.icon}
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
