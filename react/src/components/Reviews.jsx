import { useEffect, useState } from 'react';

const VARIANT = 2; 

function Reviews() {
    const [comments, setComments] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`)
            .then((response) => {
                if (!response.ok) throw new Error('HTTP ' + response.status);
                return response.json();
            })
            .then((data) => setComments(data))
            .catch((err) => setError(err.message));
    }, []);

    return (
        <section className="bg-black/10 p-6 rounded-xl border-l-4 border-[#4da6ff] shadow-md">
            <h2 className="text-2xl font-bold text-[#4da6ff] mb-4 text-center">Відгуки попередніх роботодавців</h2>
            {error && <p>Не вдалося завантажити відгуки: {error}</p>}
            {!error && comments.length === 0 && <p className="text-center">Завантаження відгуків…</p>}
            <div className="flex flex-col gap-4">
                {comments.map((c) => (
                    <article key={c.id} className="rounded-lg bg-white/5 p-4">
                        <h3 className="font-bold text-purple-200">{c.name}</h3>
                        <p className="text-sm text-sky-300 mb-2">{c.email}</p>
                        <p>{c.body}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Reviews;
