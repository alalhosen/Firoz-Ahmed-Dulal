
const Header = () => {
    return (

        <div className=" m-8 p-2 flex border-lime-400 border-solid border-2">
            <div>
                <img className="bg-" src="https://i.ibb.co.com/kmh559c/mother2.jpg" alt="" />
            </div>
            <div className="bg-pink-50 p-2 text-right rounded-bl-full">
                <h1 className="text-2xl pt-2 text-red-600 font-bold">ডাঃ মোঃ ফিরোজ আহমেদ</h1>
                <h3 className="py-2">
                    ডি. এম. এফ ( ঢাকা )
                </h3>
                <h4>
                    এফ. টি. সি ( আঃ সঃ হাঃ ঠাকুরগাঁও )
                </h4>
            </div>
        </div>
    );
};

export default Header;