"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { experience } from "@/utils/data";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import { Calendar, MapPin } from "lucide-react";

export function Experience() {
    return (
        <section id="experience" className="py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeading
                    title="Professional Experience"
                    subtitle="My journey in the data analytics field."
                />

                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="relative border-l-2 border-primary/20 ml-4 md:ml-0 space-y-12"
                    >
                        {experience.map((job, index) => (
                            <motion.div key={job.id} variants={fadeInUp} className="relative pl-8 md:pl-0">
                                {/* Timeline Dot */}
                                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                                <div className={`md:flex gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                                    {/* Date for Desktop */}
                                    <div className={`hidden md:block w-1/2 pt-1 ${index % 2 === 0 ? "text-left pl-8" : "text-right pr-8"}`}>
                                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-sm font-medium text-muted-foreground">
                                            <Calendar size={14} />
                                            {job.period}
                                        </span>
                                    </div>

                                    {/* Content Card */}
                                    <div className={`md:w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                                        {/* Date for Mobile */}
                                        <div className="md:hidden mb-2">
                                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-sm font-medium text-muted-foreground">
                                                <Calendar size={14} />
                                                {job.period}
                                            </span>
                                        </div>

                                        <Card className="p-6 relative hover:border-primary/50 transition-colors">
                                            <h3 className="text-xl font-bold text-primary mb-1">{job.role}</h3>
                                            <h4 className="text-lg font-medium mb-2">{job.company}</h4>

                                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                                                <MapPin size={14} />
                                                {job.location}
                                            </div>

                                            <p className="text-muted-foreground leading-relaxed">
                                                {job.description}
                                            </p>
                                        </Card>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
