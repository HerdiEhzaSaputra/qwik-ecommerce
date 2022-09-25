import { component$ } from '@builder.io/qwik';

export const GambarKemudahanTokopedia = component$(() => {

    return (
        <>
            <div class="flex flex-nowrap space-x-8 mt-6 mb-24">
                <div class="flex max-w-[33.33333333333333%]" data-testid="divHomeTrustFactorTransparent">
                    <a
                        class="flex"
                        href="https://www.tokopedia.com/bantuan/217217006-ketahui-sistem-reputasi/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <div class="w-[160px]">
                            <img
                                crossOrigin="anonymous"
                                class="success fade"
                                src="https://images.tokopedia.net/seocontent/SEOcontent2.jpg?ect=4g"
                                title=""
                                alt="Temukan Produk dari Ribuan Toko / Online Shop terpercaya se Indonesia, dan baca review nya di Tokopedia" />
                        </div>
                        <div class="ml-4 flex flex-col justify-around text-left">
                            <h3
                                data-unify="Typography"
                                class="font-bold text-[#00aa5b]"
                                data-testid="btnFooterReputation1">
                                Transparan
                            </h3>
                            <p data-unify="Typography" class="text-sm text-gray-500">
                                Pembayaran Anda baru diteruskan ke penjual setelah barang Anda terima
                            </p>
                        </div>
                    </a>
                </div>
                <div class="flex max-w-[33.33333333333333%]" data-testid="divHomeTrustFactorSafe">
                    <a
                        class="flex"
                        href="https://www.tokopedia.com/panduan-keamanan/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <div class="w-[160px]">
                            <img
                                crossOrigin="anonymous"
                                class="success fade"
                                src="https://images.tokopedia.net/seocontent/SEOcontent3.jpg?ect=4g"
                                title=""
                                alt="Belanja Online Aman, Bebas Penipuan di Tokopedia" />
                        </div>
                        <div class="ml-4 flex flex-col justify-around text-left">
                            <h3
                                data-unify="Typography"
                                class="font-bold text-[#00aa5b]"
                                data-testid="btnFooterReputation2">
                                Aman
                            </h3>
                            <p data-unify="Typography" class="text-sm text-gray-500">
                                Bandingkan review untuk berbagai online shop terpercaya se-Indonesia
                            </p>
                        </div>
                    </a>
                </div>
                <div class="flex max-w-[33.33333333333333%]" data-testid="divHomeTrustFactorEscrow">
                    <a
                        class="flex"
                        href="https://www.tokopedia.com/help/article/metode-bayar-di-tokopedia"
                        target="_blank"
                        rel="noopener noreferrer">
                        <div class="w-[160px]">
                            <img
                                crossOrigin="anonymous"
                                class="success fade"
                                src="https://images.tokopedia.net/seocontent/SEOcontent4.jpg?ect=4g"
                                title=""
                                alt="Belanja produk apa saja di Tokopedia, gratis tanpa biaya tambahan" />
                        </div>
                        <div class="ml-4 flex flex-col justify-around text-left">
                            <h3
                                data-unify="Typography"
                                class="font-bold text-[#00aa5b]"
                                data-testid="btnFooterReputation3">
                                Fasilitas Escrow Gratis
                            </h3>
                            <p data-unify="Typography" class="text-sm text-gray-500">
                                Fasilitas Escrow (Rekening Bersama) Tokopedia tidak dikenakan biaya
                                tambahan
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
});
