import React from 'react';
import { Code2, Wrench, Cloud, Zap } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Array<{
    name: string;
    level: number;
  }>;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'フロントエンド',
    icon: <Code2 className="w-6 h-6" />,
    skills: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'Tailwind', level: 85 }
    ]
  },
  {
    title: 'バックエンド',
    icon: <Wrench className="w-6 h-6" />,
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'SQL', level: 75 },
      { name: 'MongoDB', level: 70 }
    ]
  },
  {
    title: 'その他',
    icon: <Cloud className="w-6 h-6" />,
    skills: [
      { name: 'AWS', level: 80 },
      { name: 'Docker', level: 75 },
      { name: 'Git', level: 85 },
      { name: 'CI/CD', level: 70 }
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="space-y-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          スキル
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold">{category.title}</h3>
            </div>
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-600">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}