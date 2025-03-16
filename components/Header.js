import React from 'react';

const Header = () => {
    return (
        <div className="bg-gradient-to-r from-orange-500 to-black p-4 text-center text-white">
            <img
                className="w-12 h-12 rounded-full mb-2 bg-white p-1"
                src="https://lh3.googleusercontent.com/p/AF1QipNIy1hOiVkDmucVFCYUFuTSgReYrDV-lLcuOIy2=s680-w680-h510"
                alt="Venkatesh Super Market Logo"
            />
            <h1 className="text-lg font-bold">Venkatesh Super Market</h1>
            <p className="text-sm opacity-90">A Tradition of Quality in Murum</p>
        </div>
    );
};

export default Header;