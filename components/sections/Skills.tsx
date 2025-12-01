"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { skills } from "@/utils/data";
import { fadeInUp, staggerContainer } from "@/utils/animations";

export function Skills() {
    return (
        <section id="skills" className="py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeading
                    title="Technical Skills"
                    subtitle="A comprehensive toolkit for data analysis, visualization, and machine learning."
                />

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {skills.map((skillGroup, index) => (
                        <motion.div key={index} variants={fadeInUp}>
                            <Card className="h-full hover:border-primary transition-colors duration-300">
                                <h3 className="text-xl font-bold mb-4 text-primary border-b border-border pb-2">
                                    {skillGroup.category}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {skillGroup.items.map((skill, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Optional: Add a chart or visual representation here later */}
                <motion.div
                    className="mt-12 p-6 bg-secondary/20 rounded-2xl border border-border/50 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <p className="text-muted-foreground">
                        Always learning and adapting to new technologies in the data landscape.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
