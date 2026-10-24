import { useEffect, useState } from 'react';

const ENDPOINT = 'https://formspree.io/f/xljjdgjj';
const DELAY_MS = 5000; 

function ContactForm() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (sessionStorage.getItem('contactClosed')) return;
        const timer = setTimeout(() => setIsOpen(true), DELAY_MS);
        return () => clearTimeout(timer); 
    }, []);

    const close = () => {
        setIsOpen(false);
        sessionStorage.setItem('contactClosed', '1');
    };

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-[100] grid place-items-center bg-black/60 px-4">
                    <div className="w-full max-w-md rounded-lg bg-white p-6 text-black">
                        <h2 className="mb-4 text-xl font-bold">Зворотний зв'язок</h2>
                        <form action={ENDPOINT} method="POST" className="grid gap-3">
                            <label className="grid gap-1">Ім’я
                                <input type="text" name="name" required className="rounded border border-gray-400 p-2" />
                            </label>
                            <label className="grid gap-1">Email
                                <input type="email" name="email" required className="rounded border border-gray-400 p-2" />
                            </label>
                            <label className="grid gap-1">Номер телефону
                                <input type="tel" name="phone" required className="rounded border border-gray-400 p-2" />
                            </label>
                            <label className="grid gap-1">Повідомлення
                                <textarea name="message" rows="4" required className="rounded border border-gray-400 p-2" />
                            </label>
                            <div className="flex gap-3">
                                <button type="submit" className="rounded bg-[#9d5bff] px-4 py-2 text-white">Надіслати</button>
                                <button type="button" onClick={close} className="rounded border border-gray-400 px-4 py-2">Закрити</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default ContactForm;
