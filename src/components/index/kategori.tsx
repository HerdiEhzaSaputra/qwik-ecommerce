import { component$ } from '@builder.io/qwik';

export const KategoriPilihan = component$(() => {

    return (
        <div class="rounded-lg shadow-lg">
            <div class="flex mb-8 md:mb-8">
                <section class="w-1/2 flex flex-col justify-center items-center p-4 bg-white dark:bg-gray-800 dark:border-gray-700">
                    <div class="selft-start justify-start text-start mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">Kategori Pilihan</h3>
                    </div>
                    <div class="flex justify-center items-center space-x-3">
                        <div data-testid="sldrHomeKategoriPilihan" class="flex gap-2 overflow-x-auto">
                                <div class="border rounded-lg" data-index="0">
                                    <a data-testid="imgHomeKategoriPilihan#4"
                                        href="https://www.tokopedia.com/p/fashion-wanita/sepatu-wanita/flat-shoes-wanita">
                                        <img alt="" src="https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/9/3127195/3127195_76d08c44-8194-4454-9fb0-1e7a64b656aa.jpg"></img>
                                    </a>
                                </div>
                                <div class="border rounded-lg" data-index="1">
                                    <a data-testid="imgHomeKategoriPilihan#5"
                                        href="https://www.tokopedia.com/p/dapur/penyimpanan-makanan/toples">
                                        <img alt="" src="https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/9/3127195/3127195_cfe03d9c-d79f-4327-8247-458429e1b116.jpg"></img>
                                    </a>
                                </div>
                                <div class="border rounded-lg" data-index="2">
                                    <a data-testid="imgHomeKategoriPilihan#6"
                                        href="https://www.tokopedia.com/p/komputer-aksesoris/harddisk-flashdisk">
                                        <img alt="" src="https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/11/3127195/3127195_2883bb63-8f91-4c9c-a423-d68b22e51b78.jpg"></img>
                                    </a>
                                </div>
                                <div class="border rounded-lg" data-index="3">
                                    <a data-testid="imgHomeKategoriPilihan#1"
                                        href="https://www.tokopedia.com/p/makanan-minuman/makanan-kering">
                                        <img alt="" src="https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/9/3127195/3127195_e5b3e074-c897-4cf0-9ced-5572d0538e7c.jpg"></img>
                                    </a>
                                </div>
                                <div class="border rounded-lg" data-index="4">
                                    <a data-testid="imgHomeKategoriPilihan#2"
                                        href="https://www.tokopedia.com/p/mainan-hobi/figure/action-figure">
                                        <img alt="" src="https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/9/3127195/3127195_c6f70915-577f-4cd4-834c-daf892265ef0.jpg"></img>
                                    </a>
                                </div>
                                <div class="border rounded-lg" data-index="5">
                                    <a data-testid="imgHomeKategoriPilihan#3"
                                        href="https://www.tokopedia.com/p/fashion-pria/tas/tas-selempang">
                                        <img alt="" src="https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/9/3127195/3127195_d7c67b76-9ff4-46f9-93a3-ec4be4918439.jpg"></img>
                                    </a>
                                </div>
                                <div class="border rounded-lg" data-index="6">
                                    <a data-testid="imgHomeKategoriPilihan#4"
                                        href="https://www.tokopedia.com/p/fashion-wanita/sepatu-wanita/flat-shoes-wanita">
                                        <img alt="" src="https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/9/3127195/3127195_76d08c44-8194-4454-9fb0-1e7a64b656aa.jpg"></img>
                                    </a>
                                </div>
                                <div class="border rounded-lg" data-index="7">
                                    <a data-testid="imgHomeKategoriPilihan#5"
                                        href="https://www.tokopedia.com/p/dapur/penyimpanan-makanan/toples">
                                        <img alt="" src="https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/9/3127195/3127195_cfe03d9c-d79f-4327-8247-458429e1b116.jpg"></img>
                                    </a>
                                </div>
                                <div class="border rounded-lg" data-index="8">
                                    <a data-testid="imgHomeKategoriPilihan#6"
                                        href="https://www.tokopedia.com/p/komputer-aksesoris/harddisk-flashdisk">
                                        <img alt="" src="https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/11/3127195/3127195_2883bb63-8f91-4c9c-a423-d68b22e51b78.jpg"></img>
                                    </a>
                                </div>
                                <div class="border rounded-lg" data-index="9">
                                    <a data-testid="imgHomeKategoriPilihan#1"
                                        href="https://www.tokopedia.com/p/makanan-minuman/makanan-kering">
                                        <img alt="" src="https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/9/3127195/3127195_e5b3e074-c897-4cf0-9ced-5572d0538e7c.jpg"></img>
                                    </a>
                                </div>
                        </div>
                    </div>
                </section>
                <section class="w-1/2 flex flex-col justify-center items-center p-4 bg-white dark:bg-gray-800 dark:border-gray-700">
                    <div class="justify-center text-start mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400 inline-flex items-center">
                        <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">Top Up & Tagihan</h3>
                        <a class="self-center hover:text-[#12883d] text-[#03ac0e]" href="/top-up-tagihan" target="_self" rel="noopener noreferrer" data-testid="lnkHomeDigitalWidgetViewMore">Lihat Semua</a>
                    </div>
                    <div class="flex justify-center items-center space-x-3 w-full">
                        <div class="min-w-full bg-white rounded-lg border dark:bg-gray-800 dark:border-gray-700">
                            <ul class="flex flex-wrap justify-around text-sm font-medium text-center text-gray-500 bg-gray-50 rounded-t-lg border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
                                <li class="mr-2">
                                    <button id="pulsa-tab" data-tabs-target="#pulsa" type="button" role="tab" aria-controls="pulsa" aria-selected="true" class="inline-block p-4 text-blue-600 rounded-tl-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500">Pulsa</button>
                                </li>
                                <li class="mr-2">
                                    <button id="paket-data-tab" data-tabs-target="#paket-data" type="button" role="tab" aria-controls="paket-data" aria-selected="false" class="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300">Paket Data</button>
                                </li>
                                <li class="mr-2">
                                    <button id="flight-tab" data-tabs-target="#flight" type="button" role="tab" aria-controls="flight" aria-selected="false" class="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300">Flight</button>
                                </li>
                                <li class="mr-2">
                                    <button id="listrik-tab" data-tabs-target="#listrik" type="button" role="tab" aria-controls="listrik" aria-selected="false" class="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300">Flight</button>
                                </li>
                            </ul>
                            <div id="defaultTabContent">
                                <div class="min-w-full hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="pulsa" role="tabpanel" aria-labelledby="pulsa-tab">
                                    <form>
                                        <div class="flex gap-4 items-end">
                                            <div>
                                                <label htmlFor="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nomor Telepon</label>
                                                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-[0.560rem] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="081234567890" required></input>
                                            </div>
                                            <div>
                                                <label htmlFor="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nominal</label>
                                                <button id="dropdownDefault" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Pilih nominal <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                                                <div id="dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 overflow-y-auto max-h-[228px]">
                                                    <ul role="listbox" class="cpy-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                                                        <li class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" data-testid="Rp1.800"><button type="button" role="option"><span>1.000 - Rp1.800</span></button></li>
                                                        <li class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" data-testid="Rp2.500"><button type="button" role="option"><span>2.000 - Rp2.500</span></button></li>
                                                        <li class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" data-testid="Rp3.500"><button type="button" role="option"><span>3.000 - Rp3.500</span></button></li>
                                                        <li class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" data-testid="Rp6.500"><button type="button" role="option"><span>5.000 - Rp6.500</span></button></li>
                                                        <li class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" data-testid="Rp8.800"><button type="button" role="option"><span>8.000 - Rp8.800</span></button></li>
                                                        <li class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" data-testid="Rp11.500"><button type="button" role="option"><span>10.000 - Rp11.500</span></button></li>
                                                        <li class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" data-testid="Rp15.500"><button type="button" role="option"><span>15.000 - Rp15.500</span></button></li>
                                                        <li class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" data-testid="Rp21.100"><button type="button" role="option"><span>20.000 - Rp21.100</span></button></li>
                                                        <li class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" data-testid="Rp25.000"><button type="button" role="option"><span>25.000 - Rp25.000</span></button></li>
                                                        <li class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" data-testid="Rp30.000"><button type="button" role="option"><span>30.000 - Rp30.000</span></button></li>
                                                        <li class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" data-testid="Rp50.000"><button type="button" role="option"><span>50.000 - Rp50.000</span></button></li>
                                                        <li class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" data-testid="Rp100.000"><button type="button" role="option"><span>100.000 - Rp100.000</span></button></li>
                                                        <li class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" data-testid="Rp150.000"><button type="button" role="option"><span>150.000 - Rp150.000</span></button></li>
                                                        <li class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" data-testid="Rp200.000"><button type="button" role="option"><span>200.000 - Rp200.000</span></button></li>
                                                        <li class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" data-testid="Rp300.000"><button type="button" role="option"><span>300.000 - Rp300.000</span></button></li>
                                                        <li class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" data-testid="Rp500.000"><button type="button" role="option"><span>500.000 - Rp500.000</span></button></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div>
                                                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Beli</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div class="min-w-full hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="paket-data" role="tabpanel" aria-labelledby="paket-data-tab">
                                    <form>
                                        <div class="flex gap-4 items-end">
                                            <div>
                                                <label htmlFor="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nomor Telepon</label>
                                                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-[0.560rem] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="081234567890" required></input>
                                            </div>
                                            <div>
                                                <label htmlFor="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nominal</label>
                                                <button id="dropdownDefault" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Pilih nominal <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                                                <div id="dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                                                    <ul role="listbox" class="cpy-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                                                        <li class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" data-testid="Rp1.800"><button type="button" role="option"><span>1.000 - Rp1.800</span></button></li>
                                                        <li class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" data-testid="Rp2.500"><button type="button" role="option"><span>2.000 - Rp2.500</span></button></li>
                                                        <li class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" data-testid="Rp3.500"><button type="button" role="option"><span>3.000 - Rp3.500</span></button></li>
                                                        <li class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" data-testid="Rp6.500"><button type="button" role="option"><span>5.000 - Rp6.500</span></button></li>
                                                        <li class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" data-testid="Rp8.800"><button type="button" role="option"><span>8.000 - Rp8.800</span></button></li>
                                                        <li class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" data-testid="Rp11.500"><button type="button" role="option"><span>10.000 - Rp11.500</span></button></li>
                                                        <li class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" data-testid="Rp15.500"><button type="button" role="option"><span>15.000 - Rp15.500</span></button></li>
                                                        <li class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" data-testid="Rp21.100"><button type="button" role="option"><span>20.000 - Rp21.100</span></button></li>
                                                        <li class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" data-testid="Rp25.000"><button type="button" role="option"><span>25.000 - Rp25.000</span></button></li>
                                                        <li class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" data-testid="Rp30.000"><button type="button" role="option"><span>30.000 - Rp30.000</span></button></li>
                                                        <li class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" data-testid="Rp50.000"><button type="button" role="option"><span>50.000 - Rp50.000</span></button></li>
                                                        <li class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" data-testid="Rp100.000"><button type="button" role="option"><span>100.000 - Rp100.000</span></button></li>
                                                        <li class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" data-testid="Rp150.000"><button type="button" role="option"><span>150.000 - Rp150.000</span></button></li>
                                                        <li class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" data-testid="Rp200.000"><button type="button" role="option"><span>200.000 - Rp200.000</span></button></li>
                                                        <li class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" data-testid="Rp300.000"><button type="button" role="option"><span>300.000 - Rp300.000</span></button></li>
                                                        <li class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" data-testid="Rp500.000"><button type="button" role="option"><span>500.000 - Rp500.000</span></button></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div>
                                                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Beli</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div class="min-w-full hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="flight" role="tabpanel" aria-labelledby="flight-tab">
                                    <dl class="grid grid-cols-2 gap-8 p-4 mx-auto max-w-screen-xl text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
                                        <div class="flex flex-col">
                                            <dt class="mb-2 text-3xl font-extrabold">73M+</dt>
                                            <dd class="font-light text-gray-500 dark:text-gray-400">Developers</dd>
                                        </div>
                                        <div class="flex flex-col">
                                            <dt class="mb-2 text-3xl font-extrabold">100M+</dt>
                                            <dd class="font-light text-gray-500 dark:text-gray-400">Public repositories</dd>
                                        </div>
                                        <div class="flex flex-col">
                                            <dt class="mb-2 text-3xl font-extrabold">1000s</dt>
                                            <dd class="font-light text-gray-500 dark:text-gray-400">Open source projects</dd>
                                        </div>
                                    </dl>
                                </div>
                                <div class="min-w-full hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="listrik" role="tabpanel" aria-labelledby="listrik-tab">
                                    <dl class="grid grid-cols-2 gap-8 p-4 mx-auto max-w-screen-xl text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
                                        <div class="flex flex-col">
                                            <dt class="mb-2 text-3xl font-extrabold">73M+</dt>
                                            <dd class="font-light text-gray-500 dark:text-gray-400">Developers</dd>
                                        </div>
                                        <div class="flex flex-col">
                                            <dt class="mb-2 text-3xl font-extrabold">100M+</dt>
                                            <dd class="font-light text-gray-500 dark:text-gray-400">Public repositories</dd>
                                        </div>
                                        <div class="flex flex-col">
                                            <dt class="mb-2 text-3xl font-extrabold">1000s</dt>
                                            <dd class="font-light text-gray-500 dark:text-gray-400">Open source projects</dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div class="flex">
                <div class="css-1cysb4j">
                    <div
                        class="css-1jke4yk"
                        data-testid="tblHomeDynamicIcon"
                        data-ssr="dynamicIconHomeSSR">
                        <div class="flex gap-2" aria-label="dynamic icon wrapper" role="region">
                            <a
                                href="https://www.tokopedia.com/p?nref=chead"
                                class="inline-flex items-center py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                role="button"
                                data-testid="icnHomeDynamicIcon#1">
                                <img class="w-6 h-6"
                                    src="https://images.tokopedia.net/img/cache/100-square/iEWsxH/2021/10/5/461aa510-5537-41b7-92d4-684d39c9930e.png"
                                    alt="icon-Kategori" />
                                <span>Kategori</span>
                            </a>
                            <a
                                href="https://www.tokopedia.com/p/handphone-tablet?source=homepage.dynamic_icon.0.680"
                                class="inline-flex items-center py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                role="button"
                                data-testid="icnHomeDynamicIcon#2">
                                <img class="w-6 h-6"
                                    src="https://images.tokopedia.net/img/cache/100-square/iEWsxH/2021/10/5/a809e96e-3c18-4e63-ac83-8deb9b4c1b1c.png"
                                    alt="icon-Handphone &amp; Tablet" />
                                <span>Handphone &amp; Tablet</span>
                            </a>
                            <a
                                href="https://www.tokopedia.com/top-up-tagihan"
                                class="inline-flex items-center py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                role="button"
                                data-testid="icnHomeDynamicIcon#3">
                                <img class="w-6 h-6"
                                    src="https://images.tokopedia.net/img/cache/100-square/iEWsxH/2021/10/5/75f2fb8a-a4ca-4cd6-a166-7279daef1d5b.png"
                                    alt="icon-Top-Up &amp; Tagihan" />
                                <span>Top-Up &amp; Tagihan</span>
                            </a>
                            <a
                                href="https://www.tokopedia.com/travel-entertainment"
                                class="inline-flex items-center py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                role="button"
                                data-testid="icnHomeDynamicIcon#4">
                                <img class="w-6 h-6"
                                    src="https://images.tokopedia.net/img/cache/100-square/iEWsxH/2021/10/6/b5af3e8e-bc2e-48b4-8d00-6d49ec8f4d50.png"
                                    alt="icon-Travel &amp; Entertainment" />
                                <span>Travel &amp; Entertainment</span>
                            </a>
                            <a
                                href="https://www.tokopedia.com/p/perawatan-hewan?source=homepage.dynamic_icon.0.717"
                                class="inline-flex items-center py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                role="button"
                                data-testid="icnHomeDynamicIcon#5">
                                <img class="w-6 h-6"
                                    src="https://images.tokopedia.net/img/cache/100-square/iEWsxH/2021/10/6/65d13c55-c5c6-4ece-b957-99912c3f8f3c.png"
                                    alt="icon-Perawatan Hewan" />
                                <span>Perawatan Hewan</span>
                            </a>
                            <a
                                href="https://www.tokopedia.com/discovery/keuangan?source=homepage.dynamic_icon.0.613"
                                class="inline-flex items-center py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                role="button"
                                data-testid="icnHomeDynamicIcon#6">
                                <img class="w-6 h-6"
                                    src="https://images.tokopedia.net/img/cache/100-square/iEWsxH/2021/10/6/b5a8add5-ed3f-400b-8f98-f484d22af153.png"
                                    alt="icon-Keuangan" />
                                <span>Keuangan</span>
                            </a>
                            <a
                                href="https://www.tokopedia.com/p/komputer-laptop?source=homepage.dynamic_icon.0.703"
                                class="inline-flex items-center py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                role="button"
                                data-testid="icnHomeDynamicIcon#7">
                                <img class="w-6 h-6"
                                    src="https://images.tokopedia.net/img/cache/100-square/iEWsxH/2021/10/5/be48df38-d1e5-48ba-92c4-5644f4c2939b.png"
                                    alt="icon-Komputer &amp; Laptop" />
                                <span>Komputer &amp; Laptop</span>
                            </a>
                            <span class="css-14x38u6"></span>
                        </div>
                        <button
                            class="css-w19pdw"
                            type="button"
                            aria-label="arrow prev"
                            data-testid="sldrHomeDynamicIconLeft">
                        </button>
                        <button
                            class="css-cgkxq4"
                            type="button"
                            aria-label="arrow next"
                            data-testid="sldrHomeDynamicIconRight">
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
});
