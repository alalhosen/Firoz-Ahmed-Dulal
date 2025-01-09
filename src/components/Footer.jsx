
const Footer = () => {
    return (
        <>
            <div className="flex justify-between">
                <div className="bg-gray-800 p-2 pl-4 pr-8 rounded-tr-full text-white">
                    <h2 className="text-yellow-500 font-bold">চেম্বারঃ------</h2>
                    <p>
                        ভোমরাঘাট বাজার,
                    </p>
                    <p>
                        রানীশংকৈল, ঠাকুরগাঁও।
                    </p>
                    <p>মোবাইলঃ ০১৭৫১৩৫৪২৯৬</p>
                </div>
                <div className="h-16 w-28 -mt-">
                    <img src="https://i.ibb.co.com/52dQwhz/doct.jpg" alt="" />
                </div>
                <div className="text-center p-2 pl-16 px-6 rounded-tl-full bg-amber-100">
                    <h3 className="underline font-bold">রোগী দেখার সময়ঃ-</h3>
                    <p>প্রতিদিন-</p>
                    <p>সকাল ৮টা-দুপুর ১২টা,</p>
                    <p>বিকাল ৪টা-রাত ৯টা পর্যন্ত।</p>
                </div>
            </div>
        </>
    );
};

export default Footer;