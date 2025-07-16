import { MagicCard } from "@/components/magicui/magic-card";

export default function Home() {
  return (
    <main>
      <MagicCard gradientColor="bg-gradient-to-r from-purple-500 to-pink-500" className="rounded-2xl max-w-auto" >
        <div className="p-4">
          <p>Hello World</p>
          <span>Hover me</span>
        </div>
      </MagicCard>
    </main>
  )
}
