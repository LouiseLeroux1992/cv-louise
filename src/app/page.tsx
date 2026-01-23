export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl text-center space-y-8">
        <h1 className="text-4xl font-bold">
          Louise Leroux
        </h1>
        <p className="text-xl text-muted-foreground">
          Développeuse Freelance & Illustratrice
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <div className="p-4 rounded-lg bg-primary text-primary-foreground">
            Primary (Dusty Denim)
          </div>
          <div className="p-4 rounded-lg bg-secondary text-secondary-foreground">
            Secondary (Olive Leaf)
          </div>
          <div className="p-4 rounded-lg bg-accent text-accent-foreground">
            Accent (Pastel Petal)
          </div>
        </div>

        <p className="text-sm text-muted-foreground mt-8">
          Site en construction - Étape 1 terminée
        </p>
      </div>
    </main>
  );
}
