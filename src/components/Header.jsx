
const Header = () => {
    return (

        <div className="bg mt-8 p-2 flex justify-between border-lime-300 border-solid border-2">
            <div>
                <img className="h-40 w-40 rounded-full" src="https://i.ibb.co.com/ZV24hMs/mother1.jpg" alt="" />
            </div>
            <img className="w-20  p-2" src="https://i.ibb.co.com/d6n4LFK/stethDH.gif" alt="" />
            <div className="bg-pink-50 p-2 pl-8 text-right rounded-bl-full">
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