"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { personalDetails } from "@/utils/data";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import { MapPin, Mail } from "lucide-react";

export function About() {
    return (
        <section id="about" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeading
                    title="About Me"
                    subtitle="Get to know more about my background, hobbies, and what drives me."
                />

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h3 className="text-2xl font-bold mb-4">
                            I'm <span className="text-primary">{personalDetails.name}</span>, a Data Analyst based in {personalDetails.location}.
                        </h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            {personalDetails.bio}
                        </p>
                        <p className="text-muted-foreground mb-8 leading-relaxed">
                            Born in the historic city of <strong>{personalDetails.birthplace}</strong>, I've always been fascinated by stories. Now, I tell stories through data, finding patterns in chaos and clarity in complexity. My approach combines technical precision with creative problem-solving.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            <div className="flex items-center gap-3">
                                <div className="bg-primary/10 p-2 rounded-lg text-primary">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <div className="text-xs text-muted-foreground">Location</div>
                                    <div className="font-medium">{personalDetails.location}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-primary/10 p-2 rounded-lg text-primary">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <div className="text-xs text-muted-foreground">Email</div>
                                    <div className="font-medium">ankit@example.com</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid gap-6"
                    >
                        <h4 className="text-xl font-bold mb-2">My Interests & Hobbies</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {personalDetails.hobbies.map((hobby, index) => (
                                <Card key={index} className="flex items-center gap-4 p-4 hover:border-primary/50 transition-colors">
                                    <div className="bg-accent/10 p-3 rounded-full text-accent">
                                        <hobby.icon size={24} />
                                    </div>
                                    <div>
                                        <h5 className="font-medium">{hobby.name}</h5>
                                    </div>
                                </Card>
                            ))}
                        </div>

                        <Card className="mt-4 bg-gradient-to-br from-primary/5 to-accent/5 border-none">
                            <h4 className="text-lg font-bold mb-2">My Philosophy</h4>
                            <p className="text-sm text-muted-foreground italic">
                                "Data is not just numbers; it's the voice of your business waiting to be heard. I help you listen."
                            </p>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
