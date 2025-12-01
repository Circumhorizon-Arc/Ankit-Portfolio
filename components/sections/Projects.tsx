"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { projects } from "@/utils/data";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import { ExternalLink, BarChart3 } from "lucide-react";

export function Projects() {
    return (
        <section id="projects" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeading
                    title="Featured Projects"
                    subtitle="A selection of data analytics projects showcasing my problem-solving abilities."
                />

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project) => (
                        <motion.div key={project.id} variants={fadeInUp}>
                            <Card className="h-full flex flex-col overflow-hidden group p-0 border-0 shadow-md">
                                <div className="relative h-48 w-full bg-muted overflow-hidden">
                                    {/* Placeholder for project image */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                                        <BarChart3 size={48} className="text-muted-foreground/50" />
                                    </div>
                                    {/* If you have real images:
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  /> 
                  */}
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <Button variant="outline" size="sm" className="text-white border-white hover:bg-white/20">
                                            View Case Study
                                        </Button>
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow bg-card">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tools.map((tool, idx) => (
                                            <span
                                                key={idx}
                                                className="text-xs font-medium px-2 py-1 bg-secondary rounded-md text-secondary-foreground"
                                            >
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-muted-foreground text-sm mb-6 flex-grow">
                                        {project.description}
                                    </p>
                                    <Button variant="ghost" size="sm" className="w-full justify-between group/btn">
                                        View Details
                                        <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-12 text-center">
                    <Button variant="outline" size="lg" onClick={() => window.open("https://github.com/ankitmishra", "_blank")}>
                        View More on GitHub
                    </Button>
                </div>
            </div>
        </section>
    );
}
