import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Linkedin, Github } from 'lucide-react';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { MagneticButton } from '../components/ui/MagneticButton';
import { siteData } from '../config/siteData';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch(`https://formspree.io/f/mjknzoel`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formState)
            });

            if (response.ok) {
                setIsSuccess(true);
                setFormState({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setIsSuccess(false), 5000);
            } else {
                alert("Oops! There was a problem submitting your form. Please check your Form ID.");
            }
        } catch (error) {
            alert("Oops! There was a problem submitting your form.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="pt-10 min-h-[calc(100vh-80px)] flex items-center">
            <SectionWrapper className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-3xl md:text-4xl font-bold mb-6"
                        >
                            Let's build something <span className="text-primary">together</span>.
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-400 text-lg mb-12"
                        >
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </motion.p>

                        <div className="space-y-6">
                            <motion.a
                                href={`mailto:${siteData.email}`}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="flex items-center gap-4 p-4 bg-surface/50 rounded-xl border border-white/5 hover:border-primary/30 transition-colors group"
                            >
                                <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-medium text-white">Email Me</h3>
                                    <p className="text-gray-400">{siteData.email}</p>
                                </div>
                            </motion.a>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex items-center gap-4 p-4 bg-surface/50 rounded-xl border border-white/5"
                            >
                                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-medium text-white">Location</h3>
                                    <p className="text-gray-400">{siteData.location}</p>
                                </div>
                            </motion.div>

                            <motion.a
                                href={siteData.social.find(s => s.name === 'LinkedIn')?.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex items-center gap-4 p-4 bg-surface/50 rounded-xl border border-white/5 hover:border-primary/30 transition-colors group"
                            >
                                <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                                    <Linkedin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-medium text-white">LinkedIn</h3>
                                    <p className="text-gray-400">Connect with me</p>
                                </div>
                            </motion.a>

                            <motion.a
                                href={siteData.social.find(s => s.name === 'GitHub')?.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex items-center gap-4 p-4 bg-surface/50 rounded-xl border border-white/5 hover:border-primary/30 transition-colors group"
                            >
                                <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                                    <Github size={24} />
                                </div>
                                <div>
                                    <h3 className="font-medium text-white">Github</h3>
                                    <p className="text-gray-400">Build with me</p>
                                </div>
                            </motion.a>




                        </div>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-surface p-8 rounded-3xl border border-white/10 shadow-2xl"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-400">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formState.name}
                                        onChange={e => setFormState({ ...formState, name: e.target.value })}
                                        className="w-full px-4 py-3 bg-background rounded-lg border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-500"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-400">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formState.email}
                                        onChange={e => setFormState({ ...formState, email: e.target.value })}
                                        className="w-full px-4 py-3 bg-background rounded-lg border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-500"
                                        placeholder="Your Email"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-gray-400">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    required
                                    value={formState.subject}
                                    onChange={e => setFormState({ ...formState, subject: e.target.value })}
                                    className="w-full px-4 py-3 bg-background rounded-lg border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-500"
                                    placeholder="Subject"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    value={formState.message}
                                    onChange={e => setFormState({ ...formState, message: e.target.value })}
                                    className="w-full px-4 py-3 bg-background rounded-lg border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none placeholder:text-gray-500"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <MagneticButton
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-transparent border border-white/20 text-white rounded-xl font-semibold text-lg transition-all hover:bg-white/10 flex items-center justify-center gap-2 backdrop-blur-sm disabled:opacity-100 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : isSuccess ? (
                                    "Message Sent!"
                                ) : (
                                    <>
                                        Send Message <Send size={20} />
                                    </>
                                )}
                            </MagneticButton>
                        </form>
                    </motion.div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default Contact;
