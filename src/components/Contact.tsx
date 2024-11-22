import React from 'react';
import { Github, Mail, ExternalLink, MessageCircle } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="space-y-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          連絡先
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          お気軽にご連絡ください。プロジェクトの相談やコラボレーションのご提案をお待ちしています。
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
        <a 
          href="mailto:yourname@example.com"
          className="flex items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
        >
          <div className="p-3 bg-blue-100 rounded-xl text-blue-600 mr-4">
            <Mail className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold mb-1 group-hover:text-blue-600 transition-colors">メール</h3>
            <p className="text-gray-600">yourname@example.com</p>
          </div>
          <ExternalLink className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>

        <a 
          href="https://github.com/Shinjiro-okajima"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
        >
          <div className="p-3 bg-blue-100 rounded-xl text-blue-600 mr-4">
            <Github className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold mb-1 group-hover:text-blue-600 transition-colors">GitHub</h3>
            <p className="text-gray-600">@Shinjiro-okajima</p>
          </div>
          <ExternalLink className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
      </div>

      <div className="mt-12 text-center">
        <a 
          href="#"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:shadow-lg transition-shadow"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          メッセージを送る
        </a>
      </div>
    </section>
  );
}