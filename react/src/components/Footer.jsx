import { useEffect, useState } from 'react';

function Footer() {
    const [info, setInfo] = useState({ userAgent: '', platform: '' });

    useEffect(() => {
        localStorage.setItem('userAgent', navigator.userAgent);
        localStorage.setItem('platform', navigator.platform);

        setInfo({
            userAgent: localStorage.getItem('userAgent'),
            platform: localStorage.getItem('platform'),
        });
    }, []);
    return (
        <footer className="text-center p-6 mt-8 border-t border-white-200">
            <p className="text-white-500 italic">To be continued.. :)</p>
            <div className="mt-4 text-xs opacity-80 break-words">
                <p>userAgent: {info.userAgent}</p>
                <p>platform: {info.platform}</p>
            </div>
        </footer>
    );
}

export default Footer;
