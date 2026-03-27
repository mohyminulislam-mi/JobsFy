import React from "react";
import Link from "next/link";
import {
    ArrowRight,
    ChartLine,
    ChartNoAxesCombined,
    Handshake,
    Headset,
    Laptop,
    NotebookPen,
    Palette,
    UsersRound,
} from "lucide-react";

const categories = [
    { name: "Design & Creative", count: "1,240", icon: Palette, query: 'Design' },
    { name: "Development & IT", count: "3,150", icon: Laptop, query: 'Development' },
    { name: "Marketing", count: "850", icon: ChartLine, query: 'Marketing' },
    { name: "Data Science", count: "420", icon: ChartNoAxesCombined, query: 'Data Science' },
    { name: "Writing & Translation", count: "930", icon: NotebookPen, query: 'Marketing' },
    { name: "Customer Support", count: "540", icon: Headset, query: 'Management' },
    { name: "Sales", count: "1,100", icon: Handshake, query: 'Management' },
    { name: "HR & Recruiting", count: "310", icon: UsersRound, query: 'HR' },
];

const Popular = () => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Categories</h2>
                        <p className="text-lg text-gray-600">Explore jobs across various trending industries.</p>
                    </div>
                    <Link href="/jobs" className="hidden md:flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                        Explore All <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {categories.map((cat) => (
                        <Link
                            href={`/jobs?category=${encodeURIComponent(cat.query)}`}
                            key={cat.name}
                            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-soft hover:border-primary-100 transition-all flex flex-col gap-4 group cursor-pointer"
                        >
                            <div className="text-3xl bg-gray-50 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                < cat.icon />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors">{cat.name}</h4>
                                <p className="text-sm text-gray-500 mt-1">{cat.count} jobs available</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Popular;