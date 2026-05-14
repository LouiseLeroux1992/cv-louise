"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Contact() {
  return (
    <>
      <ContactHeader />
      <ContactBody />
    </>
  );
}

function ContactHeader() {
  const t = useTranslations("contact");

  return (
    <header className="px-5 md:px-8 pt-8 md:pt-12 pb-7 md:pb-9 border-b border-ink bg-paper">
      <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute">
        Rubrique 06 · Correspondance
      </span>
      <h1 className="font-display text-[clamp(64px,12vw,170px)] leading-[0.88] tracking-[-0.005em] m-0 mt-4 uppercase text-ink">
        <em className="font-serif italic font-normal normal-case tracking-[-0.03em] text-dark">
          Écrire
        </em>
        <br />
        {t("title")}
      </h1>
      <p className="font-serif italic text-lg md:text-xl leading-[1.4] mt-6 max-w-[600px] text-dark m-0">
        {t("description")}
      </p>
    </header>
  );
}

function ContactBody() {
  const t = useTranslations("contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "dev",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi");
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "dev", message: "" });
    } catch {
      setError("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="px-5 md:px-8 pt-10 md:pt-16 pb-10 md:pb-16 bg-paper border-b border-ink">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_360px] gap-10 md:gap-16 max-w-[1200px]">
        {/* Form */}
        <div>
          <h2 className="font-serif font-medium text-[clamp(32px,4vw,56px)] leading-[1] m-0 mb-6 md:mb-8 text-ink">
            {t("formTitle")}
          </h2>

          {isSubmitted ? (
            <div className="border-2 border-ink bg-primary p-6 md:p-8">
              <h3 className="font-display text-2xl uppercase text-ink m-0 mb-2">
                {t("successTitle")}
              </h3>
              <p className="font-serif italic text-lg text-dark m-0">
                {t("successMessage")}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 md:gap-6">
              {error && (
                <div className="border border-ink bg-cream p-4 font-mono text-[11px] tracking-[0.1em] uppercase text-ink">
                  {error}
                </div>
              )}

              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute">
                  {t("form.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-ink bg-paper font-serif text-base text-ink focus:outline-none focus:ring-1 focus:ring-dark"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute">
                  {t("form.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-ink bg-paper font-serif text-base text-ink focus:outline-none focus:ring-1 focus:ring-dark"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute">
                  {t("form.subject")}
                </label>
                <select
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 border border-ink bg-paper font-serif text-base text-ink focus:outline-none focus:ring-1 focus:ring-dark appearance-none"
                >
                  <option value="dev">{t("form.subjects.dev")}</option>
                  <option value="illustration">{t("form.subjects.illustration")}</option>
                  <option value="other">{t("form.subjects.other")}</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute">
                  {t("form.message")}
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-ink bg-paper font-serif text-base text-ink focus:outline-none focus:ring-1 focus:ring-dark resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-ink text-cream border-none px-6 py-4 font-display text-base tracking-[0.12em] uppercase flex items-center justify-between transition-all hover:bg-dark disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? t("form.sending") : t("form.send")}</span>
                <span className="font-sans">→</span>
              </button>
            </form>
          )}
        </div>

        {/* Sidebar */}
        <aside className="flex flex-col gap-8">
          {/* Contact info */}
          <div className="bg-fog p-5 md:p-6 flex flex-col gap-4">
            <h3 className="font-display text-lg tracking-[0.04em] uppercase text-ink m-0">
              {t("infoTitle")}
            </h3>
            <div className="flex flex-col gap-3 font-mono text-[11px] tracking-[0.1em] uppercase">
              <div className="flex flex-col gap-0.5">
                <span className="text-mute">{t("info.email")}</span>
                <a href="mailto:louiseleroux1992@gmail.com" className="text-ink no-underline hover:text-dark">
                  louiseleroux1992@gmail.com
                </a>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-mute">{t("info.location")}</span>
                <span className="text-ink">Île-de-France</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-3">
            <h3 className="font-display text-lg tracking-[0.04em] uppercase text-ink m-0">
              {t("socialTitle")}
            </h3>
            <div className="flex flex-col gap-0 border-t border-ink">
              {[
                { name: "GitHub", handle: "LouiseLeroux1992", url: "https://github.com/LouiseLeroux1992" },
                { name: "LinkedIn", handle: "louise-leroux-dev", url: "https://www.linkedin.com/in/louise-leroux-dev/" },
                { name: "Instagram", handle: "@louise.maviepassionnante", url: "https://www.instagram.com/louise.maviepassionnante" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-baseline py-3 border-b border-ink no-underline text-ink transition-all hover:bg-fog hover:px-3"
                >
                  <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-mute">
                    {link.name}
                  </span>
                  <span className="font-serif italic text-base text-ink">
                    {link.handle}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
