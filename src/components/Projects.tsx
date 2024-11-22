import React from 'react';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  tags: string[];
}

const projects: Project[] = [
  {
    name: 'タスク管理アプリ',
    description: 'チームメンバー間のタスク共有と進捗管理が簡単に行えるアプリケーション。リアルタイム同期機能を実装し、チーム間のコミュニケーションを円滑化。',
    githubUrl: '#',
    liveUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'TypeScript', 'Firebase']
  },
  {
    name: 'IoTホームセキュリティシステム',
    description: 'IoTデバイスを使用してホームセキュリティを強化するシステム。センサーデータのリアルタイム分析と通知機能を実装。',
    githubUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
    tags: ['IoT', 'Python', 'AWS']
  }
];

export function Projects() {
  return (
    <section id="projects" className="space-y-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          プロジェクト
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
          >
            {project.imageUrl && (
              <div className="relative">
                <img 
                  src={project.imageUrl} 
                  alt={project.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            )}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                {project.name}
                <ArrowUpRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl}
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}