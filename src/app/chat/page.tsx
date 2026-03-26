import React from 'react';
import { Search, Phone, Video, MoreVertical, Send, Paperclip, Smile, Image as ImageIcon, CheckCheck } from 'lucide-react';

export default function ChatPage() {
  const users = [
    { id: 1, name: 'Jessica Parker', role: 'Technical Recruiter at Google', msg: 'That sounds great! When are you free?', time: '10:42 AM', unread: 2, online: true, img: 12 },
    { id: 2, name: 'TechCorp Eng Team', role: 'Group Chat', msg: 'Anna: Could you share the latest...', time: 'Yesterday', unread: 0, online: false, img: 21 },
    { id: 3, name: 'Michael Chen', role: 'Senior UX Designer', msg: 'Thanks for the quick response.', time: 'Tuesday', unread: 0, online: true, img: 32 },
    { id: 4, name: 'Sarah Jenkins', role: 'Frontend Developer', msg: 'Are you open to freelance work?', time: 'Monday', unread: 0, online: false, img: 45 },
    { id: 5, name: 'David Miller', role: 'Hiring Manager', msg: 'Lets schedule a quick 15 min call.', time: 'Monday', unread: 0, online: true, img: 55 },
  ];

  return (
    <div className="bg-gray-50 flex-grow py-8 h-[calc(100vh-64px)] overflow-hidden flex flex-col">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 h-full flex flex-col md:flex-row gap-6">
        
        {/* Left Sidebar (User List) */}
        <div className="w-full md:w-1/3 lg:w-1/4 bg-white rounded-2xl shadow-soft border border-gray-100 flex flex-col h-full overflow-hidden shrink-0">
          <div className="p-4 border-b border-gray-100">
            <h2 className="font-bold text-xl text-gray-900 mb-4">Messages</h2>
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search messages..." 
                className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-colors"
              />
            </div>
          </div>
          
          <div className="overflow-y-auto flex-grow scrollbar-hide">
            {users.map((user) => (
              <div key={user.id} className={`p-4 border-b border-gray-50 flex gap-3 cursor-pointer transition-colors ${user.id === 1 ? 'bg-primary-50 border-l-4 border-l-primary-600' : 'hover:bg-gray-50'}`}>
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-100">
                    <img src={`https://i.pravatar.cc/150?img=${user.img}`} alt={user.name} className="w-full h-full object-cover" />
                  </div>
                  {user.online && (
                    <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex justify-between items-baseline mb-0.5">
                    <h4 className="font-bold text-gray-900 text-sm truncate pr-2">{user.name}</h4>
                    <span className={`text-xs whitespace-nowrap ${user.unread > 0 ? 'text-primary-600 font-bold' : 'text-gray-400'}`}>{user.time}</span>
                  </div>
                  <p className="text-xs text-gray-500 truncate mb-1">{user.role}</p>
                  <div className="flex justify-between items-center">
                    <p className={`text-sm truncate pr-2 ${user.unread > 0 ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>{user.msg}</p>
                    {user.unread > 0 && (
                      <span className="w-5 h-5 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                        {user.unread}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right Chat Window */}
        <div className="hidden md:flex flex-col flex-grow bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden relative">
          
          {/* Header */}
          <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-white/80 backdrop-blur-md z-10 sticky top-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-100">
                  <img src="https://i.pravatar.cc/150?img=12" alt="Jessica" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Jessica Parker</h3>
                <p className="text-xs text-gray-500 font-medium">Active now</p>
              </div>
            </div>
            <div className="flex gap-1">
              <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <Phone className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <Video className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Detailed Messages */}
          <div className="flex-grow p-6 overflow-y-auto flex flex-col gap-6 custom-scrollbar scrollbar-hide bg-gray-50/50">
            <div className="text-center">
              <span className="bg-gray-100 text-gray-500 px-3 py-1 text-xs rounded-full font-medium">Yesterday</span>
            </div>
            
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 mt-auto mb-1">
                <img src="https://i.pravatar.cc/150?img=12" alt="Jessica" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-1 items-start max-w-[75%]">
                <div className="bg-white text-gray-800 p-3.5 rounded-2xl rounded-bl-sm border border-gray-100 shadow-sm text-sm">
                  Hi there! We reviewed your application for the Senior Frontend Engineer role and we were very impressed.
                </div>
                <span className="text-xs text-gray-400 ml-1">10:40 AM</span>
              </div>
            </div>

            <div className="flex gap-4 flex-row-reverse relative group">
              <div className="flex flex-col gap-1 items-end max-w-[75%]">
                <div className="bg-primary-600 text-white p-3.5 rounded-2xl rounded-br-sm shadow-md text-sm">
                  Thank you, Jessica! I'm really excited about the opportunity to join the team.
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-400 mr-1">
                  10:41 AM <CheckCheck className="w-3.5 h-3.5 text-primary-500" />
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 mt-auto mb-1">
                <img src="https://i.pravatar.cc/150?img=12" alt="Jessica" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-1 items-start max-w-[75%]">
                <div className="bg-white text-gray-800 p-3.5 rounded-2xl rounded-bl-sm border border-gray-100 shadow-sm text-sm">
                  That sounds great! When are you free for a technical interview next week?
                </div>
                <span className="text-xs text-gray-400 ml-1">10:42 AM</span>
              </div>
            </div>
          </div>
          
          {/* Input Area */}
          <div className="p-4 border-t border-gray-100 bg-white">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl flex items-end p-2 transition-colors focus-within:bg-white focus-within:ring-2 focus-within:border-transparent focus-within:ring-primary-500 shadow-sm">
              <div className="flex pb-2 px-1">
                <button className="p-1.5 text-gray-400 hover:text-primary-600 transition-colors">
                  <Paperclip className="w-5 h-5" />
                </button>
                <button className="p-1.5 text-gray-400 hover:text-primary-600 transition-colors">
                  <ImageIcon className="w-5 h-5" />
                </button>
              </div>
              <textarea 
                rows={1}
                placeholder="Type your message..." 
                className="w-full bg-transparent border-none py-3 px-3 text-gray-900 focus:outline-none focus:ring-0 resize-none max-h-32"
                style={{ minHeight: '44px' }}
              ></textarea>
              <div className="flex pb-1.5 pr-1 gap-1">
                <button className="p-2 text-gray-400 hover:text-primary-600 transition-colors">
                  <Smile className="w-5 h-5" />
                </button>
                <button className="p-2 bg-primary-600 hover:bg-primary-700 text-white rounded-xl transition-all shadow-md hover:-translate-y-0.5 shrink-0">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  );
}
