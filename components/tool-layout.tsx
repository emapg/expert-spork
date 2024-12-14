"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tool } from "@/lib/tools";

interface ToolLayoutProps {
  tool: Tool;
  children: React.ReactNode;
  about: React.ReactNode;
  features: React.ReactNode;
  howTo: React.ReactNode;
}

export function ToolLayout({ tool, children, about, features, howTo }: ToolLayoutProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-6">{tool.title}</h1>

        <Tabs defaultValue="tool">
          <TabsList>
            <TabsTrigger value="tool">Tool</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="how-to">How to Use</TabsTrigger>
          </TabsList>

          <TabsContent value="tool">
            <Card className="p-6">
              {children}
            </Card>
          </TabsContent>

          <TabsContent value="about">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">About {tool.title}</h2>
              {about}
            </Card>
          </TabsContent>

          <TabsContent value="features">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Features</h2>
              {features}
            </Card>
          </TabsContent>

          <TabsContent value="how-to">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">How to Use</h2>
              {howTo}
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}