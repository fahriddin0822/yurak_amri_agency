const ResultNumbers = () => {
    return (
        <div className="wrapper bg-gray-50 max-w-screen">
            <div className="text-center animate-fade-in mt-20 w-full max-w-7xl px-4 sm:px-6 md:px-6 lg:px-8 mx-auto">
                {/* Stats Section */}
                <div className="bg-white pt-10">
                    <div className="w-full max-w-7xl px-4 sm:px-6 md:px-12 lg:px-20 mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-yellow-600 mb-2">160</div>
                                <div className="text-gray-600 text-md">Konteyner uylar</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-yellow-600 mb-2">30</div>
                                <div className="text-gray-600 text-md">"25+" Jannatdagi qasrlar</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-yellow-600 mb-2">15,000+</div>
                                <div className="text-gray-600 text-md">Yordam ro'yxatidagi oilalar</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-yellow-600 mb-2">$1M+</div>
                                <div className="text-gray-600 text-md">3 yil ichida olingan xayriya</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Comments Section */}
                <div className="wrapper bg-gray-50 pb-20">
                    <div className="wrapper bg-white rounded-br-3xl rounded-bl-3xl shadow-sm w-full p-14">
                        <h2 className="text-xl font-sans text-gray-900 tracking-wider mb-10 uppercase">
                            Jamoamizga qo'shiling
                        </h2>

                        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
                            {[
                                {
                                    name: "Jamila",
                                    text: "Yurak amri bizning oilamizga eng muhtoj odamlarga berish qobiliyatini berdi. Bizning pulimiz o'zgarib borayotganini ko'rish bizning sovg'amizni inqilob qildi.",
                                    image: "https://ichef.bbci.co.uk/news/480/cpsprodpb/16A6B/production/_107897729_elmira.png.webp",
                                },
                                {
                                    name: "Maqsud",
                                    text: "Hayotimda ko'rgan yoki ishtirok etgan eng yaxshi xayriya donatsiya vositasi. Yurak amri mening asosiy manbaim.",
                                    image: "https://photos.spareroom.com/images/flatshare/listings/large/20/25/202544101.jpg",
                                },
                                {
                                    name: "Dilshoda",
                                    text: "Yurak amri men va erim uchun juda ijobiy bo'ldi. Men haqiqatan ham bizning saxiyligimizdan foyda ko'rgan odamlarni ko'rishni yaxshi ko'raman.",
                                    image: "https://unsdg.un.org/sites/default/files/styles/hero_header_2xl_1x/public/2023-03/Ziynegul.JPG?itok=FdKh0UNZ",
                                },
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col justify-between items-center text-center bg-white rounded-xl p-4 h-full min-h-[340px]">
                                    <div>
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-20 h-20 mx-auto mb-4 rounded-xl object-cover"
                                        />
                                        <p className="text-gray-700 italic mb-4 text-lg">"{item.text}"</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900 text-lg">{item.name}</p>
                                        <div className="flex justify-center mt-2">
                                            {Array(5)
                                                .fill(0)
                                                .map((_, i) => (
                                                    <span key={i} className="text-yellow-400 text-2xl">★</span>
                                                ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultNumbers;
