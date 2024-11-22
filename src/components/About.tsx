import React from 'react';
import { Dumbbell, Cpu, Code, Trophy } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: <Dumbbell className="w-6 h-6" />,
      title: "ボクシング選手",
      description: "日本ランク9位"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "IoT専門家",
      description: "デバイス開発のスペシャリスト"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "エンジニア",
      description: "フルスタック開発"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "実績",
      description: "多数のIoTプロジェクトを完遂"
    }
  ];

  return (
    <section id="about" className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          IoTの専門家として活動しています。技術とスポーツの両立を目指し、
          ボクシングを週3回行いながら、最新のテクノロジーにも常にキャッチアップしています。
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {highlights.map((item, index) => (
          <div 
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}