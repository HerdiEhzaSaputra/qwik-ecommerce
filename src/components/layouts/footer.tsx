import { component$ } from '@builder.io/qwik';

export const Footer = component$(() => {

    return (
        <>
            <div class="mb-20">

                <div class="flex justify-around">
                    <div class="space-y-4">
                        <nav class="tokopedia" aria-label="Footer">
                            <p data-unify="Typography" class="font-bold text-md mb-2">
                                Tokopedia
                            </p>
                            <ul class="space-y-2">
                                <li class="text-gray-500 text-sm">
                                    <a class="hover:text-green-500" href="https://www.tokopedia.com/about/">Tentang Tokopedia</a>
                                </li>
                                <li class="text-gray-500 text-sm">
                                    <a class="hover:text-green-500"
                                        href="https://www.tokopedia.com/perlindungan-kekayaan-intelektual">Hak Kekayaan
                                        Intelektual</a>
                                </li>
                                <li class="text-gray-500 text-sm">
                                    <a class="hover:text-green-500" href="https://www.tokopedia.com/careers/">Karir</a>
                                </li>
                                <li class="text-gray-500 text-sm">
                                    <a class="hover:text-green-500" href="https://www.tokopedia.com/blog/">Blog</a>
                                </li>
                                <li class="text-gray-500 text-sm">
                                    <a class="hover:text-green-500" href="https://www.bridestory.com/">Bridestory</a>
                                </li>
                                <li class="text-gray-500 text-sm">
                                    <a class="hover:text-green-500"
                                        href="https://www.tokopedia.com/discovery/tokopedia-parents">Tokopedia Parents</a>
                                </li>
                                <li class="text-gray-500 text-sm">
                                    <a class="hover:text-green-500" href="https://mitra.tokopedia.com/blog">Mitra Blog</a>
                                </li>
                                <li class="text-gray-500 text-sm">
                                    <a class="hover:text-green-500" href="https://affiliate.tokopedia.com/">Tokopedia Affiliate
                                        Program</a>
                                </li>
                                <li class="text-gray-500 text-sm">
                                    <a class="hover:text-green-500" href="https://www.tokopedia.com/partner">Tokopedia B2B Digital</a>
                                </li>
                            </ul>
                        </nav>
                        <nav class="beli" aria-label="Footer">
                            <p data-unify="Typography" class="font-bold text-md mb-2">
                                Beli
                            </p>
                            <ul class="space-y-2">
                                <li class="text-gray-500 text-sm">
                                    <a class="hover:text-green-500" href="https://www.tokopedia.com/daftar-halaman/">Tagihan &amp; Top
                                        Up</a>
                                </li>
                                <li class="text-gray-500 text-sm">
                                    <a class="hover:text-green-500" href="https://www.tokopedia.com/discovery/tukar-tambah">Tukar Tambah
                                        Handphone</a>
                                </li>
                                <li class="text-gray-500 text-sm">
                                    <a class="hover:text-green-500" href="https://www.tokopedia.com/cod">Tokopedia COD</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="space-y-4">
                        <nav class="jual" aria-label="Footer">
                            <p data-unify="Typography" class="font-bold text-md mb-2">
                                Jual
                            </p>
                            <ul class="space-y-2">
                                <li class="text-gray-500 text-sm">
                                    <a class="hover:text-green-500" href="https://seller.tokopedia.com/edu/">Pusat Edukasi Seller</a>
                                </li>
                                <li class="text-gray-500 text-sm">
                                    <a class="hover:text-green-500" href="https://www.tokopedia.com/mitra-toppers/?nref=mtfoot">Mitra
                                        Toppers</a>
                                </li>
                                <li class="text-gray-500 text-sm">
                                    <a class="hover:text-green-500" href="https://seller.tokopedia.com/edu/official-store/">Daftar
                                        Official Store</a>
                                </li>
                            </ul>
                        </nav>
                        <nav class="bantuan" aria-label="Footer">
                            <p data-unify="Typography" class="font-bold text-md mb-2">
                                Bantuan dan Panduan
                            </p>
                            <ul class="space-y-2">
                                <li class="text-gray-500 text-sm">
                                    <a class="hover:text-green-500" href="https://www.tokopedia.com/help?nref=helpfooter">Tokopedia
                                        Care</a>
                                </li>
                                <li class="text-gray-500 text-sm">
                                    <a class="hover:text-green-500" href="https://www.tokopedia.com/terms">Syarat dan Ketentuan</a>
                                </li>
                                <li class="text-gray-500 text-sm">
                                    <a class="hover:text-green-500" href="https://www.tokopedia.com/privacy">Kebijakan Privasi</a>
                                </li>
                                <li class="text-gray-500 text-sm">
                                    <a class="hover:text-green-500" href="https://mitra.tokopedia.com/">Mitra</a>
                                </li>
                            </ul>
                        </nav>
                        <nav class="keamanan" aria-label="Footer">
                            <p data-unify="Typography" class="font-bold text-md mb-2">
                                Keamanan &amp; Privasi
                            </p>
                            <ul class="flex space-x-2">
                                <li class="items-center">
                                    <a href="https://seal.controlcase.com/index.php?page=showCert&amp;cId=3968489199" rel="noopener noreferrer" target="_blank">
                                        <img class="w-[70.99px] h-[48px]" src="https://images.tokopedia.net/img/unify/icon_pci_license.webp"></img>    
                                    </a>
                                </li>
                                <li class="items-center">
                                    <a href="https://verifeyedirectory.bsigroup.com/Profile/PT_TOK-0047786234-000" rel="noopener noreferrer" target="_blank">
                                        <img class="w-[94.65px] h-[48px]" src="https://images.tokopedia.net/img/unify/icon_bsi_license_hd.png"></img>    
                                    </a>
                                </li>
                                <li class="items-center">
                                    <a href="https://verifeyedirectory.bsigroup.com/Profile/PT_TOK-0047786234-000" rel="noopener noreferrer" target="_blank">
                                        <img class="w-[94.65px] h-[48px]" src="https://images.tokopedia.net/img/unify/icon_bsi_license_hd_2.png"></img>    
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <nav class=" " aria-label="Footer">
                        <p data-unify="Typography" class="font-bold text-md mb-2">
                            Ikuti Kami
                        </p>
                        <ul class="flex gap-4">
                            <li class="flex">
                                <a href="https://www.facebook.com/tokopedia" rel="noopener noreferrer" target="_blank"><img
                                    src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/90f8d7cf.svg"
                                    alt="icon-facebook" /></a>
                            </li>
                            <li class="flex">
                                <a href="https://www.twitter.com/tokopedia" rel="noopener noreferrer" target="_blank"><img
                                    src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/bb6967ee.svg"
                                    alt="icon-twitter" /></a>
                            </li>
                            <li class="flex">
                                <a href="https://www.pinterest.com/tokopedia" rel="noopener noreferrer" target="_blank"><img
                                    src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/c6c3a108.svg"
                                    alt="icon-pinterest" /></a>
                            </li>
                            <li class="flex">
                                <a href="https://www.instagram.com/tokopedia" rel="noopener noreferrer" target="_blank"><img
                                    src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/6bbf7298.svg"
                                    alt="icon-instagram" /></a>
                            </li>
                        </ul>
                    </nav>
                    <div class="flex flex-col justify-center">
                        <div class="w-[460px] h-[223px]">
                            <img src="https://images.tokopedia.net/img/unify/il-footer-3.png"></img>
                        </div>
                        <div class="flex justify-center my-[16px]">
                            <a target="_blank" rel="noopener noreferrer"
                                href="https://play.google.com/store/apps/details?id=com.tokopedia.tkpd&amp;hl=en"
                                class="w-[135px]" aria-label="Download Tokopedia from Play Store"
                                style="margin-right: 8px;">&nbsp;
                                <img src="https://ecs7.tokopedia.net/assets-unify/img/ic-download-android.svg"></img>
                            </a>
                            <a target="_blank" rel="noopener noreferrer"
                                href="https://apps.apple.com/id/app/tokopedia/id1001394201" class="w-[125px]"
                                aria-label="Download Tokopedia from AppStore">&nbsp;
                                <img src="https://ecs7.tokopedia.net/assets-unify/img/ic-download-ios.svg"></img>
                            </a>
                        </div>
                        <div class="text-center font-bold text-gray-500" style="flex-direction: row; margin: 16px 0px;">
                            <span>© 2009 - 2022, PT. Tokopedia.</span>
                        </div>
                        <div class="text-center" data-unify="ContentSwitcher" role="tablist">
                            <div class="inline-flex rounded-md shadow-sm bg-gray-100 p-1" role="group">
                                <button type="button" class="!bg-[#03ac0e] text-white py-1 px-4 text-sm font-bold bg-transparent rounded-lg dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                                    Indonesia
                                </button>
                                <button type="button" class="py-1 px-4 text-sm font-bold text-gray-400 bg-transparent rounded-lg dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                                    English
                                </button>
                            </div>
                            <div class="css-1fo82ql e1faqyf31"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
});
