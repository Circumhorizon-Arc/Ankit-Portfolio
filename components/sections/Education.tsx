"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { education } from "@/utils/data";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import { GraduationCap, Award } from "lucide-react";

export function Education() {
    return (
        <section id="education" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeading
                    title="Education & Certifications"
                    subtitle="My academic foundation and continuous learning journey."
                />

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
                >
                    {education.map((edu, index) => (
                        <motion.div key={edu.id} variants={fadeInUp}>
                            <Card className="h-full p-6 hover:border-primary/50 transition-colors">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                        {index === 0 ? <GraduationCap size={24} /> : <Award size={24} />}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                                        <h4 className="text-lg font-medium text-muted-foreground mb-2">{edu.institution}</h4>
                                        <div className="inline-block px-2 py-1 bg-secondary rounded text-xs font-medium mb-3">
                                            {edu.period}
                                        </div>
                                        <p className="text-muted-foreground text-sm">
                                            {edu.description}
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
