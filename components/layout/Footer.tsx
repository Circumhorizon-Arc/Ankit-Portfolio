"use client";

import { personalDetails } from "@/utils/data";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-secondary/30 border-t border-border py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-heading font-bold mb-2">Ankit Mishra</h3>
                        <p className="text-muted-foreground mb-4 max-w-xs mx-auto md:mx-0">
                            Turning raw data into meaningful insights through visualization and storytelling.
                        </p>
                        <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-muted-foreground">
                            <MapPin size={16} />
                            <span>{personalDetails.location}</span>
                        </div>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-4">
                        <div className="flex gap-4">
                            <a
                                href={personalDetails.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-background rounded-full hover:text-primary hover:shadow-md transition-all"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href={personalDetails.social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-background rounded-full hover:text-primary hover:shadow-md transition-all"
                                aria-label="GitHub"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href={`mailto:${personalDetails.email}`}
                                className="p-2 bg-background rounded-full hover:text-primary hover:shadow-md transition-all"
                                aria-label="Email"
                            >
                                <Mail size={20} />
                            </a>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            &copy; {currentYear} Ankit Mishra. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
