import ProjectList from '@/components/ProjectList';

const projects = [
  {
    title: 'DevFlow Sprint Tracker',
    description: 'A full-stack sprint management tool built for developer teams and software projects.',
    technologies: ['FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'Docker'],
    link: 'https://github.com/Masango-Dewheretsoko/devflow'
  },
  {
    title: 'HantaShield Analytics Hub',
    description: 'Epidemiological awareness dashboard built for localized health tracking and analytics.',
    technologies: ['Streamlit', 'Next.js', 'Python', 'Tailwind CSS'],
    link: 'https://github.com/Masango-Dewheretsoko/hantashield'
  }
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I'm a full-stack software developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}
