import { useState } from 'react';
import { MapPin, ArrowUpRight, Send } from 'lucide-react';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { siteData } from '../config/siteData';

export default function Contact() {
    const [status, setStatus] = useState('idle');
    const handleSubmit = async event => {
        event.preventDefault();
        if (status === 'sending') return;
        const form = event.currentTarget;
        const values = Object.fromEntries(new FormData(form));
        setStatus('sending');
        try {
            const response = await fetch('https://formspree.io/f/mjknzoel', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify(values),
            });
            if (!response.ok) throw new Error('Message delivery failed');
            form.reset();
            setStatus('success');
        } catch {
            setStatus('error');
        }
    };

    return <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-start">
            <div><p className="eyebrow mb-4">Get in touch</p>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Let's build something together.</h2>
                <p className="text-zinc-400 leading-relaxed max-w-lg">Have a software development opportunity or a project in mind? I'd be happy to hear from you.</p>
                <p className="text-zinc-400 flex items-center gap-2 mt-6 text-sm"><MapPin size={16} />{siteData.location}</p>
            <div className="divide-y divide-white/10 border-y border-white/10 mt-8">
                {siteData.social.map(s => <a href={s.url} key={s.name} target={s.name === 'Email' ? undefined : '_blank'} rel="noopener noreferrer" className="flex items-center justify-between gap-3 py-6 group">
                    <span><span className="block text-xs text-zinc-400 mb-2">{s.name}</span><span className="text-link break-all">{s.name === 'Email' ? siteData.email : s.name === 'GitHub' ? 'Explore my code' : 'Connect on LinkedIn'}</span></span>
                    <ArrowUpRight size={20} className="shrink-0 text-zinc-400 group-hover:text-white" />
                </a>)}
            </div>
            </div>
            <form onSubmit={handleSubmit} aria-labelledby="message-heading" aria-busy={status === 'sending'} className="bg-surface border border-white/10 rounded-xl p-6 md:p-8">
                <h3 id="message-heading" className="text-xl font-semibold mb-6">Send a message</h3>
                <fieldset disabled={status === 'sending'} className="space-y-5 disabled:opacity-70">
                    <div className="grid sm:grid-cols-2 gap-5">
                        <div><label htmlFor="contact-name" className="block text-sm text-zinc-300 mb-2">Name</label><input id="contact-name" name="name" autoComplete="name" required maxLength={120} className="contact-input" placeholder="Your name" /></div>
                        <div><label htmlFor="contact-email" className="block text-sm text-zinc-300 mb-2">Email</label><input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} className="contact-input" placeholder="you@example.com" /></div>
                    </div>
                    <div><label htmlFor="contact-subject" className="block text-sm text-zinc-300 mb-2">Subject</label><input id="contact-subject" name="subject" required maxLength={200} className="contact-input" placeholder="What would you like to discuss?" /></div>
                    <div><label htmlFor="contact-message" className="block text-sm text-zinc-300 mb-2">Message</label><textarea id="contact-message" name="message" required maxLength={10000} rows={5} className="contact-input resize-y min-h-32" placeholder="Tell me about your project or opportunity…" /></div>
                    <button type="submit" className="button button-primary w-full disabled:cursor-wait">{status === 'sending' ? 'Sending…' : <>Send message <Send size={16} aria-hidden="true" /></>}</button>
                </fieldset>
                <div aria-live="polite" aria-atomic="true" className="text-sm leading-relaxed text-zinc-300">
                    {status === 'success' && <p className="mt-5">Thanks for your message. I’ll get back to you soon.</p>}
                    {status === 'error' && <p className="mt-5">Your message couldn’t be sent. Please try again or <a className="underline underline-offset-4" href={`mailto:${siteData.email}`}>email me directly</a>. Your message is still in the form.</p>}
                </div>
            </form>
        </div>
    </SectionWrapper>;
}
