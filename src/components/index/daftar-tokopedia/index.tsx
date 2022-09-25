import { component$ } from '@builder.io/qwik';

export const DaftarTokopedia = component$(() => {

    return (
        <>
            <div class="mt-6 flex justify-between">
                <div class="space-y-5">
                    <h2 data-unify="Typography" class="text-[#FFA615] font-bold text-md">
                        Punya Toko Online? Buka cabangnya di Tokopedia</h2>
                    <p data-unify="Typography" class="text-gray-500 text-sm">
                        <span>Mudah, nyaman dan bebas Biaya Layanan Transaksi. </span>
                        <span class="font-semibold">GRATIS!</span>
                    </p>
                    <p data-unify="Typography" class="space-x-3">
                        <button data-unify="Button" type="button" class="text-white font-semibold px-4 h-10 rounded-lg bg-[#03ac0e] hover:bg-[#12883d]">
                            <span>
                                <a class="css-1felriy" href="https://www.tokopedia.com/buka-toko-online-gratis" target="_blank"
                                    rel="noopener noreferrer" data-testid="lnkHomeOpenShop">
                                    Buka Toko GRATIS
                                </a>
                            </span>
                        </button>
                        <a class="text-[#00aa5b] hover:text-[#ff7f17] text-sm font-medium" href="https://seller.tokopedia.com/mulai-berjualan/" target="_blank"
                            rel="noopener noreferrer" data-testid="lnkHomeOpenShopInfo">
                            Pelajari lebih lanjut
                        </a>
                    </p>
                </div>
                <a class="px-1" href="https://seller.tokopedia.com/mulai-berjualan/">
                    <div class="w-[440px] h-[126px]">
                        <img crossOrigin="anonymous" class="success fade" src="https://images.tokopedia.net/seocontent/SEOcontent1.jpg?ect=4g" title="" alt="shop-image"></img>
                    </div>
                </a>
            </div>

        </>
    );
});
