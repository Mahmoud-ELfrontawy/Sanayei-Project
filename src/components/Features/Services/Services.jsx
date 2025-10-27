// Services.jsx
import { useMemo, useState, useEffect } from "react";
import servicesData from "./ServicesData";
import ServiceCard from "./ServiceCard";
import "./services.css";

const unique = (arr, key) => [...new Set(arr.map((i) => i[key]))];

export default function Services() {
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("all");
    const [city, setCity] = useState("all");
    const [artisan, setArtisan] = useState("all");
    const [debounced, setDebounced] = useState(query);

    useEffect(() => {
        const t = setTimeout(() => setDebounced(query), 280);
        return () => clearTimeout(t);
    }, [query]);

    const categories = useMemo(() => ["all", ...unique(servicesData, "category")], []);
    const cities = useMemo(() => ["all", ...unique(servicesData, "city")], []);
    const artisans = useMemo(() => ["all", ...unique(servicesData, "artisan")], []);

    const filtered = useMemo(() => {
        return servicesData.filter((s) => {
            const q = debounced.trim().toLowerCase();
            const matchesQuery =
                q === "" ||
                s.title.toLowerCase().includes(q) ||
                s.desc.toLowerCase().includes(q) ||
                s.category.toLowerCase().includes(q);

            const matchesCategory = category === "all" || s.category === category;
            const matchesCity = city === "all" || s.city === city;
            const matchesArtisan = artisan === "all" || s.artisan === artisan;

            return matchesQuery && matchesCategory && matchesCity && matchesArtisan;
        });
    }, [debounced, category, city, artisan]);

    const onSearchClick = (e) => {
        e.preventDefault();
        // filtering is live; button kept for UX
    };

    return (
        <section className="sanayee-root container mx-auto px-4 py-10">
            <div className="sanayee-head">
                <p className="sanayee-head__label">خدماتنا</p>
                <h2 className="sanayee-head__title">اختر الخدمة اللي تناسبك</h2>
            </div>

            <form className="sanayee-filters" onSubmit={onSearchClick} dir="rtl">
                <div className="sanayee-search-input">
                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="ابحث عن الحرفة"
                        aria-label="ابحث عن الحرفة"
                    />
                </div>

                <select value={category} onChange={(e) => setCategory(e.target.value)} className="sanayee-select">
                    {categories.map((c) => (
                        <option key={c} value={c}>
                            {c === "all" ? "اختر الحرفة" : c}
                        </option>
                    ))}
                </select>

                <select value={artisan} onChange={(e) => setArtisan(e.target.value)} className="sanayee-select">
                    {artisans.map((a) => (
                        <option key={a} value={a}>
                            {a === "all" ? "اختر الصنايعي" : a}
                        </option>
                    ))}
                </select>

                <select value={city} onChange={(e) => setCity(e.target.value)} className="sanayee-select">
                    {cities.map((ct) => (
                        <option key={ct} value={ct}>
                            {ct === "all" ? "اختر المحافظة/العنوان" : ct}
                        </option>
                    ))}
                </select>

                <button
                    type="button"
                    className="sanayee-reset-btn"
                    onClick={() => {
                        setQuery("");
                        setCategory("all");
                        setArtisan("all");
                        setCity("all");
                    }}
                >
                    إعادة ضبط
                </button>
            </form>

            <div className="sanayee-grid" role="list">
                {filtered.length ? (
                    filtered.map((item) => <ServiceCard key={item.id} item={item} />)
                ) : (
                    <div className="sanayee-empty">لا توجد نتائج</div>
                )}
            </div>
        </section>
    );
}
