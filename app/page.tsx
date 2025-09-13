import Header from "@/components/Header"
import Card from "@/components/Card"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-6 max-w-5xl mx-auto w-full">
        <h2 className="text-2xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card title="Project Alpha" subtitle="Frontend • React" />
          <Card title="Project Beta" subtitle="Design • Figma" />
          <Card title="Project Gamma" subtitle="Mobile • React Native" />
          <Card title="Project Delta" subtitle="Fullstack • Node" />
        </div>
      </main>
    </div>
  )
}
