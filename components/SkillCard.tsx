interface SkillCardProps {
  category: string;
  skills: string[];
}

export default function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
      <h3 className="text-xl font-bold text-blue-600 mb-3">{category}</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
