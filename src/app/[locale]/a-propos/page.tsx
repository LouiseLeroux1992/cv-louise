"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { experiences } from "@/data/experiences";
import { education } from "@/data/education";
import { skillCategories } from "@/data/skills";

export default function About() {
  const t = useTranslations("about");

  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("title")}</h1>
          <p className="text-xl text-muted-foreground">{t("description")}</p>
        </motion.div>
      </section>

      {/* About me */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-6"
            >
              {t("whoAmI")}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="prose prose-lg text-muted-foreground"
            >
              <p>{t("bio")}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12"
          >
            {t("experienceTitle")}
          </motion.h2>
          <div className="max-w-3xl space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-primary/30"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary" />
                <div className="text-sm text-primary font-medium mb-1">
                  {exp.period}
                </div>
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-muted-foreground mb-2">{exp.company}</p>
                <p className="text-sm text-muted-foreground">{exp.description}</p>
                {exp.technologies && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12"
          >
            {t("educationTitle")}
          </motion.h2>
          <div className="max-w-3xl space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-background border border-border"
              >
                <div className="text-sm text-primary font-medium mb-1">
                  {edu.period}
                </div>
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-muted-foreground">{edu.school}</p>
                {edu.description && (
                  <p className="text-sm text-muted-foreground mt-2 whitespace-pre-line">
                    {edu.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12"
          >
            {t("skillsTitle")}
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold mb-4 text-primary">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-lg bg-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CV */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-4">{t("downloadTitle")}</h2>
            <p className="text-muted-foreground mb-8">{t("downloadDescription")}</p>
            <a
              href="/cv-louise-leroux.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-all font-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              {t("downloadButton")}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
