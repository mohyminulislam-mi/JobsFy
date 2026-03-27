import { Briefcase, MoreHorizontal } from "lucide-react";

const TrendingJobs = () => {
    return (
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
    );
};

export default TrendingJobs;