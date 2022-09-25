import { component$ } from '@builder.io/qwik';
import { Produk } from './partials/produk';

export const KategoriNav = component$(() => {

    return (
        <div class="bg-white flex flex-col items-center">
            <div class="w-full bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700">
                <ul class="sticky top-[115px] bg-white inline-flex w-full overflow-x-auto gap-2" id="tesTab" data-tabs-toggle="#tesTabContent" role="tablist">
                    <li class="mr-2">
                        <button id="forYou-tab" data-tabs-target="#forYou" type="button" role="tab" aria-controls="forYou" aria-selected="true" 
                                class="text-white items-start flex p-2 bg-[url(https://images.tokopedia.net/img/cache/100/attachment/2019/10/8/40768394/40768394_8989ef25-ee3b-4510-89bb-fc894078954c.jpg)] bg-cover font-medium rounded-lg text-base h-[64px] w-[216px] text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            forYou
                        </button>
                    </li>
                    <li class="mr-2">
                        <button id="galeriFashion-tab" data-tabs-target="#galeriFashion" type="button" role="tab" aria-controls="galeriFashion" aria-selected="false" 
                                class="text-white items-start flex p-2 bg-[url(https://images.tokopedia.net/img/cache/100/ndZFpx/2022/8/24/742f69e3-0c62-4b68-9faa-7fda65a70b5e.jpg)] bg-cover font-medium rounded-lg text-base h-[64px] w-[216px] text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            galeriFashion
                        </button>
                    </li>
                    <li class="mr-2">
                        <button id="spesialWib-tab" data-tabs-target="#spesialWib" type="button" role="tab" aria-controls="spesialWib" aria-selected="false" 
                                class="text-white items-start flex p-2 bg-[url(https://images.tokopedia.net/img/cache/100/ndZFpx/2022/9/24/9617d36a-b9aa-4c62-b279-dfa3521c51f5.jpg)] bg-cover font-medium rounded-lg text-base h-[64px] w-[216px] text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Facts
                        </button>
                    </li>
                    <li>
                        <button id="spesialDiskon-tab" data-tabs-target="#spesialDiskon" type="button" role="tab" aria-controls="spesialDiskon" aria-selected="false" 
                                class="text-white items-start flex p-2 bg-[url(https://images.tokopedia.net/img/cache/100/attachment/2019/10/8/40768394/40768394_1629133d-4c08-467c-aed0-bd8e82c7ea40.jpg)] bg-cover font-medium rounded-lg text-base h-[64px] w-[216px] text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Special Discount
                        </button>
                    </li>
                    <li>
                        <button id="handphone-tab" data-tabs-target="#handphone" type="button" role="tab" aria-controls="handphone" aria-selected="false"
                            class="text-white items-start flex p-2 bg-[url(https://images.tokopedia.net/img/cache/100/attachment/2019/11/7/75545163/75545163_f6ac6050-3872-48e8-b445-02a33e346061.jpg)] bg-cover font-medium rounded-lg text-base h-[64px] w-[216px] text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Handphone
                        </button>
                    </li>
                    <li>
                        <button id="dress-tab" data-tabs-target="#dress" type="button" role="tab" aria-controls="dress" aria-selected="false" 
                            class="text-white items-start flex p-2 bg-[url(https://images.tokopedia.net/img/cache/100/attachment/2019/10/23/40768394/40768394_6a24460c-fbc2-40ab-bea6-3e557474f1d7.jpg)] bg-cover font-medium rounded-lg text-base h-[64px] w-[216px] text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Dress
                        </button>
                    </li>
                    <li>
                        <button id="furniture-tab" data-tabs-target="#furniture" type="button" role="tab" aria-controls="furniture" aria-selected="false" 
                            class="text-white items-start flex p-2 bg-[url(https://images.tokopedia.net/img/cache/100/attachment/2019/10/23/40768394/40768394_7c9ad641-8a48-4b63-a4cc-cae37bbcaae1.jpg)] bg-cover font-medium rounded-lg text-base h-[64px] w-[216px] text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Furniture
                        </button>
                    </li>
                </ul>
                <div id="tesTabContent">
                    <div class="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800 hidden" id="forYou" role="tabpanel" aria-labelledby="forYou-tab">
                        <Produk />
                    </div>
                    <div class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="galeriFashion" role="tabpanel" aria-labelledby="galeriFashion-tab">
                        <Produk />
                    </div>
                    <div class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="spesialWib" role="tabpanel" aria-labelledby="spesialWib-tab">
                        <Produk />
                    </div>
                    <div class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="spesialDiskon" role="tabpanel" aria-labelledby="spesialDiskon-tab">
                        <Produk />
                    </div>
                    <div class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="handphone" role="tabpanel" aria-labelledby="handphone-tab">
                        <Produk />
                    </div>
                    <div class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="dress" role="tabpanel" aria-labelledby="dress-tab">
                        <Produk />
                    </div>
                    <div class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="furniture" role="tabpanel" aria-labelledby="furniture-tab">
                        <Produk />
                    </div>
                </div>
            </div>

            <button type="button" class="text-green-500 bg-white border border-green-500 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                Muat Lebih Banyak
            </button>

        </div>

    );
});
