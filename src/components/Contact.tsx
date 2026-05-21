"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Send,
  MapPin,
  Mail,
  Briefcase,
  Github,
  Linkedin,
} from "lucide-react";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [form, setForm] = useState<FormData>(initialForm);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = () => {
    const e: Partial<FormData> = {};

    if (!form.name.trim()) e.name = "Required";

    if (!form.email.trim()) {
      e.email = "Required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      e.email = "Invalid email";
    }

    if (!form.message.trim()) e.message = "Required";

    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errs = validate();

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setSending(true);

    setTimeout(() => {
      setSending(false);
      setForm(initialForm);

      toast.success("✅ Message sent successfully!", {
        description: "Thanks for reaching out. I'll respond soon.",
      });
    }, 1800);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    if (errors[e.target.name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [e.target.name]: undefined,
      }));
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-[1200px] mx-auto">
        <div ref={ref}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.12em] uppercase text-accent font-mono mb-3"
          >
            <span className="w-5 h-px bg-accent" />
            Contact
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-[clamp(2rem,5vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.03em] mb-3"
          >
            Let&apos;s Connect
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-[1.05rem] max-w-[620px] mb-12"
          >
            Interested in collaboration, opportunities,
            full-stack development, or simply discussing
            technology? Feel free to reach out.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >

            {[
              {
                icon: <Mail size={18} />,
                label: "Email",
                value: "uttamacharya520@gmail.com",
              },
              {
                icon: <MapPin size={18} />,
                label: "Location",
                value: "Darbhanga, Bihar, India",
              },
              {
                icon: <Briefcase size={18} />,
                label: "Status",
                value: "Open to Work",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4"
              >
                <div className="w-11 h-11 rounded-[10px] bg-[rgba(99,120,255,0.1)] border border-[rgba(99,120,255,0.3)] flex items-center justify-center text-accent flex-shrink-0">
                  {item.icon}
                </div>

                <div>
                  <div className="text-xs text-slate-500 font-mono uppercase tracking-wider">
                    {item.label}
                  </div>

                  <div className="text-[0.95rem] font-medium text-slate-100">
                    {item.value}
                  </div>
                </div>
              </div>
            ))}

            <div>
              <div className="text-xs text-slate-500 font-mono uppercase tracking-wider mb-3">
                Connect With Me
              </div>

              <div className="flex gap-3">
                {[
                  {
                    icon: <Github size={18} />,
                    href: "https://github.com/uttamacharya",
                    label: "GitHub",
                  },
                  {
                    icon: <Linkedin size={18} />,
                    href: "https://www.linkedin.com/in/uttam-acharya-270b6025b/",
                    label: "LinkedIn",
                  },
                  {
                    icon: <Mail size={18} />,
                    href: "mailto:uttamacharya520@gmail.com",
                    label: "Email",
                  },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-[10px] bg-surface border border-[rgba(99,120,255,0.15)] hover:border-[rgba(99,120,255,0.3)] flex items-center justify-center text-slate-400 hover:text-slate-100 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-surface border border-[rgba(99,120,255,0.15)] rounded-2xl p-8"
            >
              <div className="mb-4">
                <label className="block text-xs font-semibold text-slate-400 mb-1.5 tracking-wide">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`w-full bg-bg-3 border rounded-lg px-4 py-3 text-slate-100 placeholder-slate-600 text-sm outline-none transition-all duration-200 focus:border-accent ${
                    errors.name
                      ? "border-red-500"
                      : "border-[rgba(99,120,255,0.15)]"
                  }`}
                />

                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-xs font-semibold text-slate-400 mb-1.5 tracking-wide">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={`w-full bg-bg-3 border rounded-lg px-4 py-3 text-slate-100 placeholder-slate-600 text-sm outline-none transition-all duration-200 focus:border-accent ${
                    errors.email
                      ? "border-red-500"
                      : "border-[rgba(99,120,255,0.15)]"
                  }`}
                />

                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-xs font-semibold text-slate-400 mb-1.5 tracking-wide">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Collaboration / Opportunity"
                  className="w-full bg-bg-3 border border-[rgba(99,120,255,0.15)] rounded-lg px-4 py-3 text-slate-100 placeholder-slate-600 text-sm outline-none transition-all duration-200 focus:border-accent"
                />
              </div>

              <div className="mb-6">
                <label className="block text-xs font-semibold text-slate-400 mb-1.5 tracking-wide">
                  Message
                </label>

                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea..."
                  className={`w-full bg-bg-3 border rounded-lg px-4 py-3 text-slate-100 placeholder-slate-600 text-sm outline-none resize-none transition-all duration-200 focus:border-accent ${
                    errors.message
                      ? "border-red-500"
                      : "border-[rgba(99,120,255,0.15)]"
                  }`}
                />

                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.message}
                  </p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{
                  y: -1,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="w-full flex items-center justify-center gap-2 bg-accent text-white py-3 rounded-lg font-bold transition-all duration-200 cursor-pointer"
              >
                {sending ? (
                  <>⏳ Sending...</>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}