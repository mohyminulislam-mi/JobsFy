import { Briefcase, MessageSquare, Users, Zap } from "lucide-react";

const Features = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything you need to succeed</h2>
                    <p className="text-lg text-gray-600">Our platform brings together the best tools for job seekers and employers in one seamless experience.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100 hover:shadow-soft-lg hover:-translate-y-1 transition-all group">
                        <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <Briefcase className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Job Marketplace</h3>
                        <p className="text-gray-600">Access thousands of job listings from top companies or post your own to hire the best talent.</p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100 hover:shadow-soft-lg hover:-translate-y-1 transition-all group">
                        <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                            <Users className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Social Job Feed</h3>
                        <p className="text-gray-600">Network with professionals, share your achievements, and discover opportunities organically.</p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100 hover:shadow-soft-lg hover:-translate-y-1 transition-all group">
                        <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                            <Zap className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">AI Assistant</h3>
                        <p className="text-gray-600">Get AI-powered resume tips, interview prep, and personalized job matching recommendations.</p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100 hover:shadow-soft-lg hover:-translate-y-1 transition-all group">
                        <div className="w-14 h-14 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                            <MessageSquare className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Real-time Chat</h3>
                        <p className="text-gray-600">Communicate instantly with employers or candidates through our built-in secure messaging platform.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;