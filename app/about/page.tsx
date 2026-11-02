import SkillCard from '@/components/SkillCard';

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-700 mb-8">
        I am a software engineering student specializing in building modular full-stack architectures using Python frameworks and modern JavaScript ecosystems.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        <SkillCard 
          category="Web Stack & Frameworks" 
          skills={['Next.js', 'React', 'FastAPI', 'Tailwind CSS', 'TypeScript']} 
        />
        <SkillCard 
          category="Databases & DevOps" 
          skills={['PostgreSQL', 'MongoDB Atlas', 'Docker', 'Vercel', 'Render']} 
        />
      </div>
    </main>
  );
}
