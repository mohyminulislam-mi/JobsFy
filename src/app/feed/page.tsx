'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  MoreHorizontal, ThumbsUp, MessageCircle, Share2, Send,
  Plus, Briefcase, UserPlus, Loader2
} from 'lucide-react';

interface Post {
  id: string;
  authorId: string;
  authorName: string;
  authorAvatar: string;
  content: string;
  likes: number;
  comments: number;
  createdAt: string;
}

function timeAgo(isoString: string): string {
  const diff = Date.now() - new Date(isoString).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
}

export default function SocialFeedPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [postContent, setPostContent] = useState('');
  const [isPosting, setIsPosting] = useState(false);
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());
  const [isExpanded, setIsExpanded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch posts on mount
  useEffect(() => {
    setLoading(true);
    fetch('/api/posts')
      .then((r) => r.json())
      .then((data: Post[]) => setPosts(data))
      .catch(() => setError('Failed to load posts. Please refresh.'))
      .finally(() => setLoading(false));
  }, []);

  const handleCreatePost = async () => {
    if (!postContent.trim() || isPosting) return;

    const optimisticPost: Post = {
      id: `optimistic-${Date.now()}`,
      authorId: '1',
      authorName: 'Current User',
      authorAvatar: 'https://i.pravatar.cc/150?u=current_user',
      content: postContent,
      likes: 0,
      comments: 0,
      createdAt: new Date().toISOString(),
    };

    // Optimistic update - immediately show at top
    setPosts((prev) => [optimisticPost, ...prev]);
    const savedContent = postContent;
    setPostContent('');
    setIsExpanded(false);
    setIsPosting(true);

    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: savedContent }),
      });
      const confirmed: Post = await res.json();
      // Replace optimistic post with real one
      setPosts((prev) =>
        prev.map((p) => (p.id === optimisticPost.id ? confirmed : p))
      );
    } catch {
      // Rollback on failure
      setPosts((prev) => prev.filter((p) => p.id !== optimisticPost.id));
      setPostContent(savedContent);
      setError('Failed to publish post. Please try again.');
    } finally {
      setIsPosting(false);
    }
  };

  const handleLike = (postId: string) => {
    setLikedPosts((prev) => {
      const next = new Set(prev);
      if (next.has(postId)) {
        next.delete(postId);
        setPosts((p) => p.map((post) => post.id === postId ? { ...post, likes: post.likes - 1 } : post));
      } else {
        next.add(postId);
        setPosts((p) => p.map((post) => post.id === postId ? { ...post, likes: post.likes + 1 } : post));
      }
      return next;
    });
  };

  return (
    <div className="bg-gray-50 flex-grow py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">

        {/* Left Sidebar */}
        <div className="hidden lg:block lg:w-1/4">
          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden sticky top-24">
            <div className="h-20 bg-gradient-to-r from-primary-400 to-indigo-500" />
            <div className="px-6 pb-6 relative">
              <div className="w-20 h-20 rounded-full border-4 border-white bg-gray-200 absolute -top-10 left-1/2 -translate-x-1/2 overflow-hidden">
                <img src="https://i.pravatar.cc/150?u=current_user" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div className="pt-14 text-center">
                <h3 className="text-lg font-bold text-gray-900">Current User</h3>
                <p className="text-gray-500 text-sm mb-4">Senior Software Engineer</p>
                <div className="text-sm border-t border-gray-100 pt-4 flex justify-between text-gray-600 mb-2">
                  <span>Profile viewers</span>
                  <span className="font-bold text-primary-600">324</span>
                </div>
                <div className="text-sm flex justify-between text-gray-600">
                  <span>Post impressions</span>
                  <span className="font-bold text-primary-600">1,209</span>
                </div>
              </div>
              <Link href="/profile" className="w-full mt-6 bg-gray-50 text-gray-700 py-2 rounded-xl font-medium block text-center border border-gray-200 hover:bg-gray-100 transition-colors">
                My Profile
              </Link>
            </div>
          </div>
        </div>

        {/* Main Feed */}
        <div className="lg:w-2/4 flex flex-col gap-6">

          {/* Error banner */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 rounded-2xl px-6 py-4 text-sm font-medium flex justify-between items-center">
              {error}
              <button onClick={() => setError(null)} className="ml-4 text-red-400 hover:text-red-600">✕</button>
            </div>
          )}

          {/* Create Post */}
          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
            <div className="flex gap-4 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-gray-100">
                <img src="https://i.pravatar.cc/150?u=current_user" alt="User" className="w-full h-full object-cover" />
              </div>
              {!isExpanded ? (
                <button
                  id="feed-open-post-btn"
                  onClick={() => setIsExpanded(true)}
                  className="flex-1 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-full px-6 text-left text-gray-500 font-medium transition-colors py-3"
                >
                  Start a post, share your thoughts...
                </button>
              ) : (
                <textarea
                  id="feed-post-textarea"
                  autoFocus
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                  placeholder="What do you want to talk about?"
                  rows={4}
                  className="flex-1 bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 text-gray-900 placeholder-gray-400 resize-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-sm"
                />
              )}
            </div>

            {isExpanded && (
              <div className="flex justify-between items-center pt-2">
                <button
                  onClick={() => { setIsExpanded(false); setPostContent(''); }}
                  className="text-sm text-gray-500 hover:text-gray-700 font-medium px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  id="feed-submit-post-btn"
                  onClick={handleCreatePost}
                  disabled={!postContent.trim() || isPosting}
                  className="bg-primary-600 text-white px-6 py-2 rounded-xl font-semibold shadow-soft hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isPosting ? <><Loader2 className="w-4 h-4 animate-spin" /> Posting...</> : 'Post'}
                </button>
              </div>
            )}
          </div>

          {/* Sort indicator */}
          <div className="flex items-center gap-4 text-xs font-semibold text-gray-400 uppercase tracking-widest my-2">
            <div className="flex-1 border-t border-gray-200" />
            Sort by: Top <MoreHorizontal className="w-4 h-4 ml-1 cursor-pointer" />
          </div>

          {/* Posts */}
          {loading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6 animate-pulse">
                  <div className="flex gap-3 mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0" />
                    <div className="flex-1 space-y-2 pt-1">
                      <div className="h-4 bg-gray-200 rounded w-1/3" />
                      <div className="h-3 bg-gray-100 rounded w-1/4" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-100 rounded w-full" />
                    <div className="h-4 bg-gray-100 rounded w-5/6" />
                  </div>
                </div>
              ))}
            </div>
          ) : posts.length === 0 ? (
            <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
              <div className="text-5xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No posts yet</h3>
              <p className="text-gray-500">Be the first to share something with your network!</p>
            </div>
          ) : (
            posts.map((post) => (
              <div key={post.id} className={`bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden transition-all ${post.id.startsWith('optimistic-') ? 'border-primary-200 ring-1 ring-primary-100' : ''}`}>
                <div className="p-6 pb-2">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-100 flex-shrink-0">
                        <img src={post.authorAvatar} alt={post.authorName} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 leading-tight">{post.authorName}</h4>
                        {post.id.startsWith('optimistic-') ? (
                          <p className="text-xs text-primary-500 font-medium mt-0.5 flex items-center gap-1">
                            <Loader2 className="w-3 h-3 animate-spin" /> Publishing...
                          </p>
                        ) : (
                          <p className="text-gray-400 text-xs mt-0.5">{timeAgo(post.createdAt)}</p>
                        )}
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 p-1">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </div>

                  <p className="text-gray-700 mb-4 whitespace-pre-line leading-relaxed text-sm md:text-base">
                    {post.content}
                  </p>
                </div>

                <div className="p-4 px-6 pt-2">
                  <div className="flex justify-between items-center text-gray-500 text-xs border-b border-gray-100 pb-3 mb-2 pt-2">
                    <span className="flex items-center gap-1">
                      <ThumbsUp className={`w-3 h-3 ${likedPosts.has(post.id) ? 'fill-primary-600 text-primary-600' : ''}`} />
                      {post.likes}
                    </span>
                    <span>{post.comments} comments</span>
                  </div>

                  <div className="flex justify-between md:justify-start md:gap-8 pt-1">
                    <button
                      onClick={() => handleLike(post.id)}
                      className={`flex items-center gap-2 p-2 rounded-lg transition-colors font-medium text-sm flex-1 md:flex-none justify-center ${
                        likedPosts.has(post.id)
                          ? 'text-primary-600 hover:bg-primary-50'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <ThumbsUp className={`w-5 h-5 ${likedPosts.has(post.id) ? 'fill-primary-600' : ''}`} />
                      {likedPosts.has(post.id) ? 'Liked' : 'Like'}
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
            ))
          )}
        </div>

        {/* Right Sidebar */}
        <div className="lg:w-1/4 flex flex-col gap-6 w-full">
          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6 sticky top-24">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              Trending on Jobfy <Briefcase className="w-5 h-5 text-gray-400" />
            </h3>
            <ul className="space-y-4">
              {[
                { title: '#ReactDevelopers', jobs: '2,401 open roles' },
                { title: '#RemoteWork', jobs: '15,200 open roles' },
                { title: 'UX Design Trends 2025', jobs: '12k discussions' },
                { title: '#AIinTech', jobs: '5,000 open roles' },
              ].map((trend, idx) => (
                <li key={idx} className="group cursor-pointer">
                  <p className="font-semibold text-gray-800 text-sm group-hover:text-primary-600 transition-colors">{trend.title}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{trend.jobs}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6 sticky top-[380px]">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              Add to your feed <UserPlus className="w-5 h-5 text-gray-400" />
            </h3>
            <ul className="space-y-4">
              {[1, 2, 3].map((user) => (
                <li key={user} className="flex gap-3">
                  <img src={`https://i.pravatar.cc/150?img=${user + 50}`} alt="Suggested user" className="w-10 h-10 rounded-full object-cover border border-gray-100" />
                  <div>
                    <h5 className="font-bold text-sm text-gray-900 leading-tight">David Miller</h5>
                    <p className="text-xs text-gray-500 line-clamp-1 mb-1">Recruiter at Google</p>
                    <button className="flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors">
                      <Plus className="w-3 h-3" /> Follow
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
