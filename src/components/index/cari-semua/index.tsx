import { component$ } from '@builder.io/qwik';
import { FintechTab } from './fintech';
import { FoodVoucherTab } from './food-voucher';
import { HotelTab } from './hotel';
import { KartuPrakerjaTab } from './kartu-prakerja';
import { ProdukDigitalTab } from './produk-digital';
import { PromoTab } from './promo';
import { TiketKeretaTab } from './tiket-kereta';
import { TiketPesawatTab } from './tiket-pesawat';
import { TokopediaBlogTab } from './tokopedia-blog';
import { TokopediaFindTab } from './tokopedia-find';
import { TokopediaSalamTab } from './tokopedia-salam';

export const CariSemua = component$(() => {

    return (
        <>
            <div class="items-end flex mt-8 mb-4">
                <h2 class="text-2xl font-bold" data-testid="">Cari Semua di Tokopedia!</h2>
            </div>
            <div class="w-full bg-white dark:bg-gray-800 dark:border-gray-700">
                <ul class="flex flex-no-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
                    <li class="mr-1">
                        <button id="promo-tab" data-tabs-target="#promo" type="button" role="tab" aria-controls="promo" aria-selected="true" class="inline-block p-4 text-blue-600 rounded-tl-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500 hover:text-blue-600 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500">
                            Promo
                        </button>
                    </li>
                    <li class="mr-1">
                        <button id="tiketPesawat-tab" data-tabs-target="#tiketPesawat" type="button" role="tab" aria-controls="tiketPesawat" aria-selected="false" class="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700">
                            Tiket Pesawat
                        </button>
                    </li>
                    <li class="mr-1">
                        <button id="tiketKereta-tab" data-tabs-target="#tiketKereta" type="button" role="tab" aria-controls="tiketKereta" aria-selected="false" class="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700">
                            Tiket Kereta
                        </button>
                    </li>
                    <li class="mr-1">
                        <button id="hotel-tab" data-tabs-target="#hotel" type="button" role="tab" aria-controls="hotel" aria-selected="true" class="inline-block p-4 text-blue-600 rounded-tl-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500 hover:text-blue-600 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500">
                            Hotel
                        </button>
                    </li>
                    <li class="mr-1">
                        <button id="kartuPrakerja-tab" data-tabs-target="#kartuPrakerja" type="button" role="tab" aria-controls="kartuPrakerja" aria-selected="false" class="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700">
                            Kartu Prakerja
                        </button>
                    </li>
                    <li class="mr-1">
                        <button id="foodVoucher-tab" data-tabs-target="#foodVoucher" type="button" role="tab" aria-controls="foodVoucher" aria-selected="false" class="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700">
                            Food & Voucher
                        </button>
                    </li>
                    <li class="mr-1">
                        <button id="produkDigital-tab" data-tabs-target="#produkDigital" type="button" role="tab" aria-controls="produkDigital" aria-selected="true" class="inline-block p-4 text-blue-600 rounded-tl-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500 hover:text-blue-600 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500">
                            Produk Digital
                        </button>
                    </li>
                    <li class="mr-1">
                        <button id="fintech-tab" data-tabs-target="#fintech" type="button" role="tab" aria-controls="fintech" aria-selected="false" class="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700">
                            Fintech
                        </button>
                    </li>
                    <li class="mr-1">
                        <button id="tokopediaSalam-tab" data-tabs-target="#tokopediaSalam" type="button" role="tab" aria-controls="tokopediaSalam" aria-selected="false" class="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700">
                            Tokopedia Salam
                        </button>
                    </li>
                    <li class="mr-1">
                        <button id="tokopediaFind-tab" data-tabs-target="#tokopediaFind" type="button" role="tab" aria-controls="tokopediaFind" aria-selected="false" class="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700">
                            Tokopedia Find
                        </button>
                    </li>
                    <li class="mr-1">
                        <button id="tokopediaBlog-tab" data-tabs-target="#tokopediaBlog" type="button" role="tab" aria-controls="tokopediaBlog" aria-selected="false" class="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700">
                            Tokopedia Blog
                        </button>
                    </li>
                </ul>
                <div id="defaultTabContent">
                    <PromoTab />
                    <TiketPesawatTab />
                    <TiketKeretaTab />
                    <HotelTab />
                    <KartuPrakerjaTab />
                    <FoodVoucherTab />
                    <ProdukDigitalTab />
                    <FintechTab />
                    <TokopediaSalamTab />
                    <TokopediaFindTab />
                    <TokopediaBlogTab />
                </div>
            </div>
        </>
    );
});
