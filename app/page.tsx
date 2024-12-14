"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { tools } from "@/lib/tools";

export default function Home() {
  const categories = Array.from(new Set(tools.map(tool => tool.category)));

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-6">Web Developer Tools</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Optimize, protect, and debug your code with our powerful suite of tools
          </p>
        </motion.div>

        {categories.map((category, categoryIndex) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools
                .filter(tool => tool.category === category)
                .map((tool, index) => {
                  const Icon = tool.icon;
                  return (
                    <motion.div
                      key={tool.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (index * 0.1) }}
                    >
                      <Link href={tool.href}>
                        <div className="bg-card hover:bg-accent transition-colors duration-300 rounded-lg p-6 h-full cursor-pointer">
                          <div className="mb-4 text-primary">
                            <Icon className="w-8 h-8" />
                          </div>
                          <h2 className="text-xl font-semibold mb-2">{tool.title}</h2>
                          <p className="text-muted-foreground">{tool.description}</p>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}