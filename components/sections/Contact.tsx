"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { personalDetails } from "@/utils/data";
import { fadeInUp } from "@/utils/animations";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });

        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <section id="contact" className="py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeading
                    title="Get In Touch"
                    subtitle="Have a project in mind or want to discuss data? Let's connect."
                />

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                        <p className="text-muted-foreground mb-8">
                            I'm currently available for freelance projects and full-time opportunities.
                            Feel free to reach out via email or the contact form.
                        </p>

                        <div className="space-y-6">
                            <Card className="flex items-center gap-4 p-4 border-none bg-secondary/30">
                                <div className="bg-primary/10 p-3 rounded-full text-primary">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <div className="text-sm text-muted-foreground">Email</div>
                                    <a href={`mailto:${personalDetails.email}`} className="font-medium hover:text-primary transition-colors">
                                        {personalDetails.email}
                                    </a>
                                </div>
                            </Card>

                            <Card className="flex items-center gap-4 p-4 border-none bg-secondary/30">
                                <div className="bg-primary/10 p-3 rounded-full text-primary">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <div className="text-sm text-muted-foreground">Phone</div>
                                    <a href={`tel:${personalDetails.phone}`} className="font-medium hover:text-primary transition-colors">
                                        {personalDetails.phone}
                                    </a>
                                </div>
                            </Card>

                            <Card className="flex items-center gap-4 p-4 border-none bg-secondary/30">
                                <div className="bg-primary/10 p-3 rounded-full text-primary">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <div className="text-sm text-muted-foreground">Location</div>
                                    <div className="font-medium">{personalDetails.location}</div>
                                </div>
                            </Card>
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ delay: 0.2 }}
                    >
                        <Card className="p-8">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        placeholder="Your Name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                                        placeholder="How can I help you?"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 size={20} className="mr-2 animate-spin" />
                                            Sending...
                                        </>
                                    ) : isSubmitted ? (
                                        "Message Sent!"
                                    ) : (
                                        <>
                                            <Send size={20} className="mr-2" />
                                            Send Message
                                        </>
                                    )}
                                </Button>
                            </form>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
