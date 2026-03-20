import React from "react";
import Link from "next/link";
import {
  Image as ImageIcon,
  Video,
  Calendar,
  Type,
  MoreHorizontal,
  ThumbsUp,
  MessageCircle,
  Share2,
  Send,
  Plus,
  Briefcase,
  UserPlus,
} from "lucide-react";

const SocialFeedPage = () => {
  return (
    <div className="bg-gray-50 flex-grow py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">
        {/* Left Sidebar (Desktop) */}
        <div className="hidden lg:block lg:w-1/4">
          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden sticky top-24">
            <div className="h-20 bg-gradient-to-r from-primary-400 to-indigo-500"></div>
            <div className="px-6 pb-6 relative">
              <div className="w-20 h-20 rounded-full border-4 border-white bg-gray-200 absolute -top-10 left-1/2 -translate-x-1/2 overflow-hidden flex items-center justify-center">
                <img
                  src="https://i.pravatar.cc/150?img=11"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-14 text-center">
                <h3 className="text-lg font-bold text-gray-900">
                  Alex Frontend
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  Senior UI/UX Engineer at Designify
                </p>
                <div className="text-sm border-t border-gray-100 pt-4 flex justify-between text-gray-600 mb-2">
                  <span>Profile viewers</span>
                  <span className="font-bold text-primary-600">324</span>
                </div>
                <div className="text-sm flex justify-between text-gray-600">
                  <span>Post impressions</span>
                  <span className="font-bold text-primary-600">1,209</span>
                </div>
              </div>
              <Link
                href="/profile"
                className="w-full mt-6 bg-gray-50 text-gray-700 py-2 rounded-xl font-medium block text-center border border-gray-200 hover:bg-gray-100 transition-colors"
              >
                My Profile
              </Link>
            </div>
          </div>
        </div>

        {/* Main Feed */}
        <div className="lg:w-2/4 flex flex-col gap-6">
          {/* Create Post Box */}
          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
            <div className="flex gap-4 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-gray-100">
                <img
                  src="https://i.pravatar.cc/150?img=11"
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="flex-1 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-full px-6 text-left text-gray-500 font-medium transition-colors">
                Start a post, share your thoughts...
              </button>
            </div>

            <div className="flex justify-between items-center pt-2">
              <div className="flex gap-2">
                <button className="flex items-center gap-2 p-2 hover:bg-blue-50 text-blue-600 rounded-xl transition-colors font-medium text-sm">
                  <ImageIcon className="w-5 h-5" /> Media
                </button>
                <button className="flex items-center gap-2 p-2 hover:bg-green-50 text-green-600 rounded-xl transition-colors font-medium text-sm hidden sm:flex">
                  <Calendar className="w-5 h-5" /> Event
                </button>
                <button className="flex items-center gap-2 p-2 hover:bg-orange-50 text-orange-600 rounded-xl transition-colors font-medium text-sm">
                  <Type className="w-5 h-5" /> Article
                </button>
              </div>
              <button className="bg-primary-600 text-white px-6 py-2 rounded-xl font-semibold shadow-soft hover:bg-primary-700 transition-colors">
                Post
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 text-xs font-semibold text-gray-400 uppercase tracking-widest my-2">
            <div className="flex-1 border-t border-gray-200"></div>
            Sort by: Top{" "}
            <MoreHorizontal className="w-4 h-4 ml-1 cursor-pointer" />
          </div>

          {/* Feed Posts */}
          {[1, 2, 3].map((post) => (
            <div
              key={post}
              className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden"
            >
              <div className="p-6 pb-2">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-100 flex-shrink-0">
                      <img
                        src={`https://i.pravatar.cc/150?img=${post + 20}`}
                        alt="User"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 leading-tight">
                        Sarah Jenkins
                      </h4>
                      <p className="text-gray-500 text-xs">
                        React Developer | UI Enthusiast
                      </p>
                      <p className="text-gray-400 text-xs mt-0.5">
                        {post * 2} hours ago &bull; 🌎
                      </p>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600 p-1">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-gray-700 mb-4 whitespace-pre-line leading-relaxed text-sm md:text-base">
                  Just launched my latest side project built with Next.js 14,
                  Tailwind, and Supabase! 🚀
                  {"\n\n"}
                  The new app router is incredibly powerful once you get used to
                  the mental model. State management feels much more natural now
                  with server components taking on the heavy lifting.
                  {"\n\n"}
                  Check it out and let me know your thoughts! 👇
                </p>
              </div>

              {/* Post Image Container */}
              <div className="w-full h-72 bg-gray-100 border-y border-gray-100 flex items-center justify-center overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${post * 42}/800/600`}
                  alt="Post media"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 px-6 pt-2">
                <div className="flex justify-between items-center text-gray-500 text-xs border-b border-gray-100 pb-3 mb-2 pt-2">
                  <span className="flex items-center gap-1">
                    <ThumbsUp className="w-3 h-3 fill-primary-600 text-primary-600" />{" "}
                    {post * 42 + 15}
                  </span>
                  <span>
                    {post * 8 + 3} comments &bull; {post + 1} shares
                  </span>
                </div>

                <div className="flex justify-between md:justify-start md:gap-8 pt-1">
                  <button className="flex items-center gap-2 p-2 hover:bg-gray-50 text-gray-600 rounded-lg transition-colors font-medium text-sm flex-1 md:flex-none justify-center">
                    <ThumbsUp className="w-5 h-5" /> Like
                  </button>
                  <button className="flex items-center gap-2 p-2 hover:bg-gray-50 text-gray-600 rounded-lg transition-colors font-medium text-sm flex-1 md:flex-none justify-center">
                    <MessageCircle className="w-5 h-5" /> Comment
                  </button>
                  <button className="flex items-center gap-2 p-2 hover:bg-gray-50 text-gray-600 rounded-lg transition-colors font-medium text-sm flex-1 md:flex-none justify-center">
                    <Share2 className="w-5 h-5" /> Share
                  </button>
                  <button className="flex items-center gap-2 p-2 hover:bg-gray-50 text-gray-600 rounded-lg transition-colors font-medium text-sm flex-1 md:flex-none justify-center">
                    <Send className="w-5 h-5" /> Send
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Sidebar */}
        <div className="lg:w-1/4 flex flex-col gap-6 w-full">
          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6 sticky top-24">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              Trending on Jobfy <Briefcase className="w-5 h-5 text-gray-400" />
            </h3>
            <ul className="space-y-4">
              {[
                { title: "#ReactDevelopers", jobs: "2,401 open roles" },
                { title: "#RemoteWork", jobs: "15,200 open roles" },
                { title: "UX Design Trends 2024", jobs: "12k discussions" },
                { title: "#AIinTech", jobs: "5,000 open roles" },
              ].map((trend, idx) => (
                <li key={idx} className="group cursor-pointer">
                  <p className="font-semibold text-gray-800 text-sm group-hover:text-primary-600 transition-colors">
                    {trend.title}
                  </p>
                  <p className="text-gray-500 text-xs mt-0.5">{trend.jobs}</p>
                </li>
              ))}
            </ul>
            <button className="text-primary-600 hover:text-primary-700 font-semibold text-sm mt-6 flex items-center gap-1 transition-colors">
              Show more <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6 sticky top-[380px]">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              Add to your feed <UserPlus className="w-5 h-5 text-gray-400" />
            </h3>
            <ul className="space-y-4">
              {[1, 2, 3].map((user) => (
                <li key={user} className="flex gap-3">
                  <img
                    src={`https://i.pravatar.cc/150?img=${user + 50}`}
                    alt="User"
                    className="w-10 h-10 rounded-full object-cover border border-gray-100"
                  />
                  <div>
                    <h5 className="font-bold text-sm text-gray-900 leading-tight">
                      David Miller
                    </h5>
                    <p className="text-xs text-gray-500 line-clamp-1 mb-1">
                      Recruiter at Google
                    </p>
                    <button className="flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors">
                      <Plus className="w-3 h-3" /> Follow
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <button className="text-primary-600 hover:text-primary-700 font-semibold text-sm mt-6 flex items-center gap-1 transition-colors">
              View all recommendations <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SocialFeedPage;
