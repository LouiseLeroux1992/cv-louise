"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";

export function FeaturedWork() {
  const t = useTranslations("home");

  // Données placeholder - à remplacer par tes vraies réalisations
  const works = [
    {
      id: 1,
      title: "Application Web SaaS",
      category: "dev",
      image: null, // Placeholder
      description: "Plateforme de gestion pour entreprises",
    },
    {
      id: 2,
      title: "Site E-commerce",
      category: "dev",
      image: null,
      description: "Boutique en ligne moderne",
    },
    {
      id: 3,
      title: "Illustration éditoriale",
      category: "illustration",
      image: null,
      description: "Illustration pour magazine",
    },
    {
      id: 4,
      title: "Identité visuelle",
      category: "illustration",
      image: null,
      description: "Branding et illustrations",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("featuredTitle")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("featuredDescription")}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div
                className={`aspect-square rounded-xl overflow-hidden mb-4 ${
                  work.category === "dev"
                    ? "bg-primary/10"
                    : "bg-accent/20"
                } flex items-center justify-center`}
              >
                {/* Placeholder pour l'image */}
                <div className="text-center p-4">
                  {work.category === "dev" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="currentColor"
                      className="w-16 h-16 mx-auto text-primary/40 group-hover:text-primary/60 transition-colors"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="currentColor"
                      className="w-16 h-16 mx-auto text-accent/60 group-hover:text-accent/80 transition-colors"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  )}
                  <p className="text-xs text-muted-foreground mt-2">
                    {work.category === "dev" ? "Dev" : "Illustration"}
                  </p>
                </div>
              </div>
              <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                {work.title}
              </h3>
              <p className="text-sm text-muted-foreground">{work.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/services/developpement"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:bg-muted transition-colors font-medium"
          >
            {t("viewAllWork")}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
