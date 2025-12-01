"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { personalDetails } from "@/utils/data";
import { ArrowRight, Download } from "lucide-react";
import { fadeInUp, fadeIn } from "@/utils/animations";

export function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Animated Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-background via-background to-primary/5 dark:from-background dark:via-background dark:to-primary/10" />
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
            </div>

            <div className="container mx-auto px-4 md:px-6 flex flex-col-reverse md:flex-row items-center gap-12">
                <div className="flex-1 text-center md:text-left">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="space-y-6"
                    >
                        <motion.div
                            className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            Data Analyst Portfolio
                        </motion.div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight">
                            Hi, I'm <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                                {personalDetails.name}
                            </span>
                        </h1>

                        <div className="text-xl md:text-2xl text-muted-foreground h-[60px] md:h-[40px]">
                            <TypeAnimation
                                sequence={[
                                    "Data Analyst",
                                    2000,
                                    "Insight Generator",
                                    2000,
                                    "Storyteller with Data",
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </div>

                        <p className="text-lg text-muted-foreground max-w-lg mx-auto md:mx-0">
                            {personalDetails.tagline} Transforming complex datasets into actionable business strategies.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
                            <Button
                                size="lg"
                                onClick={() => window.open("/resume.html", "_blank")}
                                className="w-full sm:w-auto gap-2"
                            >
                                <Download size={20} />
                                Download Resume
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                href="#projects"
                                className="w-full sm:w-auto gap-2"
                            >
                                View Projects
                                <ArrowRight size={20} />
                            </Button>
                        </div>
                    </motion.div>
                </div>

                <div className="flex-1 flex justify-center md:justify-end">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full opacity-20 blur-2xl animate-pulse" />
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl">
                            <Image
                                src="/images/avatar.png"
                                alt="Ankit Mishra"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
