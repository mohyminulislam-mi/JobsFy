import Link from "next/link"

const FeedFrofile = () => {
    return (
        <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden sticky top-24 z-10">
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
    )
}

export default FeedFrofile