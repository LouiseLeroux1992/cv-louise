import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <div className="max-w-2xl text-center space-y-8">
        <h1 className="text-4xl font-bold">Louise Leroux</h1>
        <p className="text-xl text-muted-foreground">
          Développeuse Freelance & Illustratrice
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <div className="p-4 rounded-lg bg-primary text-primary-foreground">
            Primary (Dusty Denim)
          </div>
          <div className="p-4 rounded-lg bg-secondary text-secondary-foreground">
            Secondary (Olive Leaf / Pastel Petal)
          </div>
          <div className="p-4 rounded-lg bg-accent text-accent-foreground">
            Accent (Pastel Petal / Olive Leaf)
          </div>
        </div>

        <p className="text-sm text-muted-foreground mt-8">
          Clique sur l&apos;icône en haut à droite pour basculer entre le mode
          clair et sombre
        </p>
      </div>
    </main>
  );
}
