import { component$ } from '@builder.io/qwik';
import { MenuKategori } from './menu-kategori';

export const Navbar = component$(() => {

    return (
        <header class="sticky top-0 z-40 flex-none mx-auto w-full bg-white border-b border-gray-200 dark:border-gray-600 dark:bg-gray-800">
            <div id="banner" class="z-50 py-1 px-4 w-full bg-gray-50 border border-b border-gray-200 dark:border-gray-600 dark:bg-gray-700">
                <div class="flex justify-between">
                    <div class="flex items-center">
                        <a href="/mobile-apps/" target="_blank" rel="noopener noreferrer" class="css-7k41it">Download Tokopedia App</a>
                    </div>
                    <div class="flex items-center space-x-4">
                        <a href="/about/" target="_blank" rel="noopener noreferrer" class="text-xs text-gray-500 hover:text-green-600" data-testid="btnHeaderAbout">Tentang Tokopedia</a>
                        <a href="/mitra" target="_blank" rel="noopener noreferrer" class="text-xs text-gray-500 hover:text-green-600" data-testid="btnHeaderMitra">Mitra Tokopedia</a>
                        <a href="https://seller.tokopedia.com/edu/mulai-berjualan/" target="_blank" rel="noopener noreferrer" class="text-xs text-gray-500 hover:text-green-600" data-testid="btnHeaderSellerEdu">Mulai Berjualan </a>
                        <a href="/promo/" class="text-xs text-gray-500 hover:text-green-600" target="_blank" rel="noopener noreferrer" data-testid="btnHeaderPromo">Promo</a>
                        <a href="/help/" target="_blank" rel="noopener noreferrer" class="text-xs text-gray-500 hover:text-green-600" data-testid="btnHeaderHelp">Tokopedia Care</a>
                    </div>
                </div>
            </div>
            <div class="flex py-3 px-3">
                <div class="flex items-start">
                    <button id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar" class="p-2 mr-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <svg id="toggleSidebarMobileHamburger" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        <svg id="toggleSidebarMobileClose" class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div class="flex justify-between items-center">
                        <a href="/" class="flex">
                            <img src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg" class="mr-3 h-8" alt="FlowBite Logo"></img>
                        </a>
                    </div>
                </div>
                <div class="flex items-start text-center pl-2 pt-2">
                    <button id="mega-menu-full-cta-dropdown-button" data-collapse-toggle="mega-menu-full-cta-dropdown" data-dropdown-placement="bottom" class="flex justify-between items-center text-sm py-2 pr-4 pl-3 w-full text-gray-600 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                        Kategori
                    </button>
                </div>
                <div class="flex-1 items-start px-4">
                    <form class="w-full">
                        <div class="flex">
                            <label htmlFor="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Your Email</label>
                            <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">Di Dilayani Tokopedia
                                <svg aria-hidden="true" class="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                            <div id="dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(897px, 5637px, 0px);">
                                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                                    <li>
                                        <button type="button" class="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Di Dilayani Tokopedia</button>
                                    </li>
                                    <li>
                                        <button type="button" class="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Di Tokopedia</button>
                                    </li>
                                </ul>
                            </div>
                            <div class="relative w-full">
                                <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Cari barang disini" required></input>
                                    <button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                        <span class="sr-only">Search</span>
                                    </button>
                            </div>
                        </div>
                    </form>
                    <div id="trending-popular-keywords" class="flex space-x-2">
                        <a class="text-sm text-gray-500 hover:text-green-500" href="https://www.tokopedia.com/find/rtx-3060ti">rtx 3060ti</a>
                        <a class="text-sm text-gray-500 hover:text-green-500" href="https://www.tokopedia.com/find/redmi-9a">redmi 9a</a>
                        <a class="text-sm text-gray-500 hover:text-green-500" href="https://www.tokopedia.com/find/whey-protein">whey protein</a>
                        <a class="text-sm text-gray-500 hover:text-green-500" href="https://www.tokopedia.com/find/masker-kn95">masker kn95</a>
                        <a class="text-sm text-gray-500 hover:text-green-500" href="https://www.tokopedia.com/find/masker-hijab">masker hijab</a>
                        <a class="text-sm text-gray-500 hover:text-green-500" href="https://www.tokopedia.com/find/lunch-box">lunch box</a>
                    </div>
                </div>

                <div>
                    <div class="flex items-start right-0">
                        <a href="" data-tooltip-target="tooltip-github-2" class="hidden sm:inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                            <span class="sr-only">View on Github</span>
                        </a>
                        <div id="tooltip-github-2" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip" data-popper-placement="top" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(977.91px, -62.3284px, 0px);">
                            View on Github
                            <div class="tooltip-arrow" data-popper-arrow="" style="position: absolute; left: 0px; transform: translate3d(59.4627px, 0px, 0px);"></div>
                        </div>
                        <a href='login' class="inline-flex items-center text-green-700 border-green-700 border-2 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center ml-3">Masuk</a>
                        <a href="/pro/#pricing" class="inline-flex items-center text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-3">Daftar</a>
                    </div>

                    <div id="ChooseAddressWidget" class="flex items-center justify-end right-0" data-testid="lcaWidgetWrapper">
                        <svg class="unf-icon" viewBox="0 0 24 24" width="14" height="14" fill="var(--color-icon-enabled, #2E3137)" style="display: inline-block; vertical-align: middle;"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.02 2.809A7.67 7.67 0 0112 2.24 7.67 7.67 0 0119.75 10c0 7.264-6.896 11.372-7.365 11.65a.81.81 0 01-.755.01l-.015-.01C11.146 21.373 4.25 17.265 4.25 10a7.67 7.67 0 014.77-7.191zM5.75 10c0 5.58 4.85 9.18 6.25 10.11 1.4-.93 6.25-4.55 6.25-10.11A6.188 6.188 0 0012 3.74 6.19 6.19 0 005.75 10zm4.168-3.129A3.75 3.75 0 0112 6.24 3.76 3.76 0 0115.75 10a3.75 3.75 0 11-5.832-3.129zm.83 4.99a2.25 2.25 0 102.503-3.74 2.25 2.25 0 00-2.502 3.74z"></path></svg>
                        <div class="flex items-center space-x-1" data-testid="lcaWidgetLabel">
                            <p data-unify="Typography" color="" class="text-gray-600 text-sm">Dikirim ke</p>
                            <p data-unify="Typography" class="text-gray-700 font-medium" color="">Jakarta Pusat</p>
                            <svg class="unf-icon" viewBox="0 0 24 24" width="14" height="14" fill="var(--color-icon-enabled, #2E3137)" style="display: inline-block; vertical-align: middle;"><path d="M12 15.25a.74.74 0 01-.53-.22l-5-5A.75.75 0 017.53 9L12 13.44 16.47 9a.75.75 0 011.06 1l-5 5a.74.74 0 01-.53.25z"></path></svg>
                        </div>
                    </div>
                </div>
            </div>

            <MenuKategori />

        </header>
    );
});

