'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Search, MapPin, Filter, Clock, DollarSign, Bookmark, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Job } from '@/lib/db';

const JOB_TYPES = ['Full-time', 'Part-time', 'Remote', 'Contract', 'Freelance'];
const SALARY_RANGES = [
    { label: '$0 – $50k', min: 0, max: 50000 },
    { label: '$50k – $100k', min: 50000, max: 100000 },
    { label: '$100k – $150k', min: 100000, max: 150000 },
    { label: '$150k+', min: 150000, max: Infinity },
];
const JOBS_PER_PAGE = 10;

const JobsList = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Input state (synced with URL on mount)
    const [titleInput, setTitleInput] = useState('');
    const [locationInput, setLocationInput] = useState('');
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [selectedSalary, setSelectedSalary] = useState<string | null>(null);

    // Data state
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    // Sync inputs from URL params on first load
    useEffect(() => {
        setTitleInput(searchParams.get('title') || '');
        setLocationInput(searchParams.get('location') || '');
        const cat = searchParams.get('category');
        // no type param in URL but category is handled server-side
        void cat;
    }, [searchParams]);  // eslint-disable-line react-hooks/exhaustive-deps

    // Fetch jobs whenever relevant filters change
    const fetchJobs = useCallback(() => {
        setLoading(true);
        const params = new URLSearchParams();
        const title = searchParams.get('title') || titleInput;
        const location = searchParams.get('location') || locationInput;
        const category = searchParams.get('category') || '';

        if (title) params.set('title', title);
        if (location) params.set('location', location);
        if (category) params.set('category', category);
        if (selectedTypes.length === 1) params.set('type', selectedTypes[0]);

        fetch(`/api/jobs?${params.toString()}`)
            .then((r) => r.json())
            .then((data: Job[]) => {
                let filtered = data;
                // Client-side salary filter
                if (selectedSalary) {
                    const range = SALARY_RANGES.find((r) => r.label === selectedSalary);
                    if (range) {
                        filtered = filtered.filter(
                            (j) => j.budgetMin >= range.min && j.budgetMin < range.max
                        );
                    }
                }
                setJobs(filtered);
                setCurrentPage(1);
            })
            .catch(() => setJobs([]))
            .finally(() => setLoading(false));
    }, [searchParams, titleInput, locationInput, selectedTypes, selectedSalary]);

    useEffect(() => {
        fetchJobs();
    }, [fetchJobs]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const params = new URLSearchParams();
        if (titleInput) params.set('title', titleInput);
        if (locationInput) params.set('location', locationInput);
        const category = searchParams.get('category');
        if (category) params.set('category', category);
        router.push(`/jobs?${params.toString()}`);
    };

    const toggleType = (type: string) => {
        setSelectedTypes((prev) =>
            prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
        );
    };

    const clearFilters = () => {
        setSelectedTypes([]);
        setSelectedSalary(null);
        setTitleInput('');
        setLocationInput('');
        router.push('/jobs');
    };

    // Pagination
    const totalPages = Math.ceil(jobs.length / JOBS_PER_PAGE);
    const paginatedJobs = jobs.slice(
        (currentPage - 1) * JOBS_PER_PAGE,
        currentPage * JOBS_PER_PAGE
    );
    const activeCategory = searchParams.get('category');
    const hasFilters = titleInput || locationInput || selectedTypes.length > 0 || selectedSalary || activeCategory;

    return (
        <div className="bg-gray-50 flex-grow py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Top Search Bar */}
                <form onSubmit={handleSearch} className="bg-white rounded-2xl shadow-soft p-4 flex flex-col md:flex-row gap-4 mb-8">
                    <div className="flex-1 flex items-center bg-gray-50 rounded-xl px-4 py-2 border border-gray-100">
                        <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        <input
                            id="jobs-title-input"
                            type="text"
                            placeholder="Search for jobs..."
                            value={titleInput}
                            onChange={(e) => setTitleInput(e.target.value)}
                            className="w-full bg-transparent border-none focus:ring-0 px-4 py-2 text-gray-900"
                        />
                    </div>
                    <div className="flex-1 flex items-center bg-gray-50 rounded-xl px-4 py-2 border border-gray-100">
                        <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        <input
                            id="jobs-location-input"
                            type="text"
                            placeholder="Location..."
                            value={locationInput}
                            onChange={(e) => setLocationInput(e.target.value)}
                            className="w-full bg-transparent border-none focus:ring-0 px-4 py-2 text-gray-900"
                        />
                    </div>
                    <button
                        id="jobs-search-btn"
                        type="submit"
                        className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-xl font-semibold transition-all w-full md:w-auto"
                    >
                        Search
                    </button>
                </form>

                {/* Active filters bar */}
                {hasFilters && (
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                        {activeCategory && (
                            <span className="bg-primary-50 text-primary-700 border border-primary-200 text-xs font-semibold px-3 py-1 rounded-full">
                                Category: {activeCategory}
                            </span>
                        )}
                        {titleInput && (
                            <span className="bg-blue-50 text-blue-700 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">
                                Title: {titleInput}
                            </span>
                        )}
                        {locationInput && (
                            <span className="bg-green-50 text-green-700 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">
                                Location: {locationInput}
                            </span>
                        )}
                        {selectedTypes.map((t) => (
                            <span key={t} className="bg-purple-50 text-purple-700 border border-purple-200 text-xs font-semibold px-3 py-1 rounded-full">
                                {t}
                            </span>
                        ))}
                        <button
                            onClick={clearFilters}
                            className="flex items-center gap-1 text-xs font-semibold text-gray-500 hover:text-red-500 transition-colors ml-2"
                        >
                            <X className="w-3 h-3" /> Clear all
                        </button>
                    </div>
                )}

                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Sidebar */}
                    <div className="lg:w-1/4">
                        <div className="bg-white rounded-2xl shadow-soft p-6 border border-gray-100 sticky top-24">
                            <div className="flex items-center gap-2 font-bold text-lg mb-6 text-gray-900">
                                <Filter className="w-5 h-5" /> Filters
                            </div>

                            {/* Job Type */}
                            <div className="mb-6">
                                <h3 className="font-semibold text-gray-900 mb-3">Job Type</h3>
                                <div className="space-y-3">
                                    {JOB_TYPES.map((type) => (
                                        <label key={type} className="flex items-center gap-3 cursor-pointer group">
                                            <input
                                                type="checkbox"
                                                checked={selectedTypes.includes(type)}
                                                onChange={() => toggleType(type)}
                                                className="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                            />
                                            <span className="text-gray-600 group-hover:text-primary-600 transition-colors">{type}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Salary Range */}
                            <div className="border-t border-gray-100 pt-6 mb-6">
                                <h3 className="font-semibold text-gray-900 mb-3">Salary Range</h3>
                                <div className="space-y-3">
                                    {SALARY_RANGES.map(({ label }) => (
                                        <label key={label} className="flex items-center gap-3 cursor-pointer group">
                                            <input
                                                type="radio"
                                                name="salary"
                                                checked={selectedSalary === label}
                                                onChange={() => setSelectedSalary(selectedSalary === label ? null : label)}
                                                className="w-4 h-4 border-gray-300 text-primary-600 focus:ring-primary-500"
                                            />
                                            <span className="text-gray-600 group-hover:text-primary-600 transition-colors">{label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Reset */}
                            <button
                                onClick={clearFilters}
                                className="w-full text-sm text-primary-600 font-semibold hover:text-primary-800 transition-colors text-left"
                            >
                                Reset all filters
                            </button>
                        </div>
                    </div>

                    {/* Job List */}
                    <div className="lg:w-3/4 flex flex-col gap-6">
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-xl font-bold text-gray-900">
                                {loading ? 'Loading...' : `Showing ${jobs.length} Job${jobs.length !== 1 ? 's' : ''}`}
                            </h2>
                            <select className="bg-white border text-sm border-gray-200 text-gray-700 rounded-lg px-3 py-2 focus:ring-primary-500">
                                <option>Sort by: Newest</option>
                                <option>Sort by: Salary</option>
                                <option>Sort by: Relevance</option>
                            </select>
                        </div>

                        {loading ? (
                            <div className="space-y-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6 animate-pulse">
                                        <div className="flex gap-4">
                                            <div className="w-16 h-16 bg-gray-200 rounded-xl flex-shrink-0" />
                                            <div className="flex-1 space-y-3">
                                                <div className="h-5 bg-gray-200 rounded w-3/4" />
                                                <div className="h-4 bg-gray-100 rounded w-1/2" />
                                                <div className="h-4 bg-gray-100 rounded w-full" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : paginatedJobs.length === 0 ? (
                            <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
                                <div className="text-5xl mb-4">🔍</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">No jobs found</h3>
                                <p className="text-gray-500 mb-6">Try adjusting your search or filters to find what you&apos;re looking for.</p>
                                <button onClick={clearFilters} className="bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors">
                                    Clear Filters
                                </button>
                            </div>
                        ) : (
                            paginatedJobs.map((job) => (
                                <div key={job.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-soft-lg hover:border-primary-100 transition-all flex flex-col md:flex-row gap-6 group">
                                    {/* Logo */}
                                    <div className="w-16 h-16 bg-gray-50 rounded-xl flex-shrink-0 flex items-center justify-center font-bold text-2xl text-primary-600 border border-gray-100 overflow-hidden">
                                        <img src={job.logo} alt={job.company} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                                    </div>

                                    <div className="flex-grow">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <Link href={`/jobs/${job.id}`} className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors block mb-1">
                                                    {job.title}
                                                </Link>
                                                <p className="text-primary-600 font-medium text-sm">{job.company}</p>
                                            </div>
                                            <button className="text-gray-400 hover:text-primary-500 transition-colors bg-gray-50 p-2 rounded-lg">
                                                <Bookmark className="w-5 h-5" />
                                            </button>
                                        </div>

                                        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                                            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {job.location}</span>
                                            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {job.type}</span>
                                            <span className="flex items-center gap-1.5"><DollarSign className="w-4 h-4" /> {job.budget}</span>
                                        </div>

                                        <p className="text-gray-600 text-sm line-clamp-2 mb-4">{job.description}</p>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {job.requirements.map((req) => (
                                                <span key={req} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-xs font-medium">
                                                    {req}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex justify-between items-center border-t border-gray-100 pt-4 mt-auto">
                                            <span className="text-xs text-gray-400">{job.postedAt}</span>
                                            <Link href={`/jobs/${job.id}`} className="bg-primary-50 text-primary-600 hover:bg-primary-600 hover:text-white px-5 py-2 rounded-lg font-medium transition-colors">
                                                Apply Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}

                        {/* Pagination */}
                        {!loading && totalPages > 1 && (
                            <div className="flex justify-center items-center mt-8 gap-2">
                                <button
                                    id="jobs-prev-btn"
                                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                                    disabled={currentPage === 1}
                                    className="w-10 h-10 rounded-lg flex items-center justify-center border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                                >
                                    <ChevronLeft className="w-4 h-4" />
                                </button>

                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                    <button
                                        key={page}
                                        id={`jobs-page-${page}-btn`}
                                        onClick={() => setCurrentPage(page)}
                                        className={`w-10 h-10 rounded-lg flex items-center justify-center font-medium transition-colors ${currentPage === page
                                            ? 'bg-primary-600 text-white shadow-soft'
                                            : 'border border-gray-200 text-gray-600 hover:bg-gray-50'
                                            }`}
                                    >
                                        {page}
                                    </button>
                                ))}

                                <button
                                    id="jobs-next-btn"
                                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                                    disabled={currentPage === totalPages}
                                    className="w-10 h-10 rounded-lg flex items-center justify-center border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                                >
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        )}

                        {/* Page info */}
                        {!loading && jobs.length > 0 && (
                            <p className="text-center text-sm text-gray-400 mt-2">
                                Showing {(currentPage - 1) * JOBS_PER_PAGE + 1}–{Math.min(currentPage * JOBS_PER_PAGE, jobs.length)} of {jobs.length} jobs
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobsList;