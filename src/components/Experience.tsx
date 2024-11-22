import React from 'react';
import { Briefcase, Calendar, Building, ChevronRight } from 'lucide-react';

interface Experience {
  title: string;
  role: string;
  company: string;
  description: string;
  period: string;
}

const experiences: Experience[] = [
  {
    title: '大規模システムのバックエンド開発',
    role: 'ソフトウェアエンジニア',
    company: 'ABCテクノロジー',
    description: '〇〇というアプリのシステムの設計に従事。大規模なデータ処理システムの設計と実装を担当。',
    period: '2022 - Present'
  },
  {
    title: 'IoTプロジェクトリード',
    role: 'テックリード',
    company: 'XYZソリューションズ',
    description: 'スマートホームシステムの開発をリード。10人規模のチームをマネジメント。',
    period: '2020 - 2022'
  }
];

export function Experience() {
  return (
    <section id="experience" className="space-y-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          職務経験
        </h2>
      </div>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-gray-600">{exp.role}</p>
                </div>
              </div>
              <div className="mt-4 md:mt-0 flex items-center space-x-4 text-gray-500">
                <div className="flex items-center">
                  <Building className="w-4 h-4 mr-2" />
                  {exp.company}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {exp.period}
                </div>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}