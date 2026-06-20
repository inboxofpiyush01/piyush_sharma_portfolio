import { useState } from "react";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const onChange = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (loading) return;
    if (!form.name.trim() || !form.email.trim() || form.message.trim().length < 5) {
      toast.error("Please fill in name, email and a longer message.");
      return;
    }
    setLoading(true);
    try {
      // Build a clean email body
      const subject =
        form.subject?.trim() || `Portfolio enquiry from ${form.name}`;
      const bodyLines = [
        `Hi Piyush,`,
        ``,
        form.message.trim(),
        ``,
        `---`,
        `From: ${form.name}`,
        `Email: ${form.email}`,
        form.company ? `Company: ${form.company}` : null,
        `(Sent from piyushsharma.dev portfolio contact form)`,
      ].filter(Boolean);

      const href = `mailto:${profile.email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

      // Open the user's default mail client
      window.location.href = href;

      toast.success(
        "Your email client is opening — please press Send to deliver your message."
      );
      // Don't clear the form immediately in case the client doesn't open
      setTimeout(() => setLoading(false), 1500);
    } catch (err) {
      toast.error(
        `Couldn't open your email app. Please email me directly: ${profile.email}`
      );
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-24 md:py-32 bg-[#0a0a0c] overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-glow-orange opacity-50 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="overline">// let&apos;s talk</p>
          <h2 className="mt-4 section-title text-white">
            Let&apos;s build <br />
            something <span className="text-gold">real.</span>
          </h2>
          <p className="mt-6 text-gray-400 max-w-md text-base">
            Hiring for an AI / Automation role? Have a project in mind? Drop me a
            message — I usually reply within 24 hours.
          </p>

          <div className="mt-10 space-y-5">
            <a
              href={`mailto:${profile.email}`}
              data-testid="contact-email"
              className="flex items-center gap-4 group"
            >
              <div className="w-11 h-11 rounded-full border border-gold/30 bg-gold/5 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-colors">
                <Mail size={16} className="text-gold group-hover:text-black" />
              </div>
              <div>
                <p className="font-mono-tech text-[10px] uppercase tracking-wider text-gray-500">
                  Email
                </p>
                <p className="text-white group-hover:text-gold transition-colors">
                  {profile.email}
                </p>
              </div>
            </a>
            <a
              href={`tel:${profile.phone}`}
              data-testid="contact-phone"
              className="flex items-center gap-4 group"
            >
              <div className="w-11 h-11 rounded-full border border-gold/30 bg-gold/5 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-colors">
                <Phone size={16} className="text-gold group-hover:text-black" />
              </div>
              <div>
                <p className="font-mono-tech text-[10px] uppercase tracking-wider text-gray-500">
                  Phone
                </p>
                <p className="text-white group-hover:text-gold transition-colors">
                  {profile.phone}
                </p>
              </div>
            </a>
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full border border-gold/30 bg-gold/5 flex items-center justify-center">
                <MapPin size={16} className="text-gold" />
              </div>
              <div>
                <p className="font-mono-tech text-[10px] uppercase tracking-wider text-gray-500">
                  Location
                </p>
                <p className="text-white">{profile.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                data-testid="contact-linkedin"
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-colors"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                data-testid="contact-github"
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-colors"
              >
                <Github size={16} />
              </a>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          data-testid="contact-form"
          className="lg:col-span-7 glass-card p-6 md:p-10 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field
              label="Your name"
              required
              testid="contact-name"
              value={form.name}
              onChange={onChange("name")}
              placeholder="Jane Doe"
            />
            <Field
              label="Email"
              required
              testid="contact-email-input"
              type="email"
              value={form.email}
              onChange={onChange("email")}
              placeholder="jane@company.com"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <Field
              label="Company"
              testid="contact-company"
              value={form.company}
              onChange={onChange("company")}
              placeholder="Acme Inc."
            />
            <Field
              label="Subject"
              testid="contact-subject"
              value={form.subject}
              onChange={onChange("subject")}
              placeholder="Hiring for Sr. AI Engineer"
            />
          </div>
          <div>
            <label className="font-mono-tech text-[10px] tracking-wider uppercase text-gray-500 mb-2 block">
              Message *
            </label>
            <textarea
              required
              data-testid="contact-message"
              rows={6}
              value={form.message}
              onChange={onChange("message")}
              placeholder="Tell me about the role, project or idea…"
              className="w-full bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-gray-600 focus:border-gold/60 focus:outline-none transition-colors text-sm resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            data-testid="contact-submit"
            className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <Send size={16} /> {loading ? "Opening email…" : "Send Message"}
          </button>
          <p className="mt-3 font-mono-tech text-[10px] text-gray-500 uppercase tracking-wider">
            opens your email client · message pre-filled
          </p>
        </form>
      </div>
    </section>
  );
}

const Field = ({ label, testid, required, type = "text", ...rest }) => (
  <div>
    <label className="font-mono-tech text-[10px] tracking-wider uppercase text-gray-500 mb-2 block">
      {label} {required && "*"}
    </label>
    <input
      type={type}
      required={required}
      data-testid={testid}
      className="w-full bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-gray-600 focus:border-gold/60 focus:outline-none transition-colors text-sm"
      {...rest}
    />
  </div>
);
