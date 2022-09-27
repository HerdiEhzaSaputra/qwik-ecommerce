import { component$ } from '@builder.io/qwik';
import { BelanjaKonten } from './konten-kategori-utama/belanja';
import { BrandUnggulanKonten } from './konten-kategori-utama/brand-unggulan';
import { FeaturedKonten } from './konten-kategori-utama/featured';
import { HalalCornerKonten } from './konten-kategori-utama/halal-corner';
import { InvestasiAsuransiDanPinjamanKonten } from './konten-kategori-utama/investasi-asuransi-&-pinjaman';
import { LainnyaKonten } from './konten-kategori-utama/lainnya';
import { OsPopulerKonten } from './konten-kategori-utama/os-populer';
import { PajakKonten } from './konten-kategori-utama/pajak';
import { PendidikanKonten } from './konten-kategori-utama/pendidikan';
import { TagihanKonten } from './konten-kategori-utama/tagihan';
import { TopUpKonten } from './konten-kategori-utama/top-up';
import { TravelDanEntertainmentKonten } from './konten-kategori-utama/travel-&-entertainment';

export const MenuKategori = component$(() => {

    return (
        <div id="mega-menu-full-cta-dropdown" class="absolute hidden w-full overflow-hidden bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600">
            <div data-tabs-toggle="#categoryUtamaTabContent" role="tablist" 
                class="flex space-x-4 overflow-x-auto px-6">
                <button id="belanja-tab" data-tabs-target="#belanja" type="button" role="tab" aria-controls="belanja" aria-selected="false"
                        class="text-sm whitespace-nowrap py-4 px-6 text-green-600 border-b-2 border-green-500 hover:text-green-600 dark:hover:text-green-500">
                    Belanja
                </button>
                <button id="featured-tab" data-tabs-target="#featured" type="button" role="tab" aria-controls="featured" aria-selected="false"
                        class="text-sm whitespace-nowrap py-4 px-6 hover:text-green-600 dark:hover:text-green-500">
                    Featured
                </button>
                <button id="brandUnggulan-tab" data-tabs-target="#brandUnggulan" type="button" role="tab" aria-controls="brandUnggulan" aria-selected="false"
                        class="text-sm whitespace-nowrap py-4 px-6 hover:text-green-600 dark:hover:text-green-500">
                    Brand Unggulan
                </button>
                <button id="halalCorner-tab" data-tabs-target="#halalCorner" type="button" role="tab" aria-controls="halalCorner" aria-selected="false"
                        class="text-sm whitespace-nowrap py-4 px-6 hover:text-green-600 dark:hover:text-green-500">
                    Halal Corner
                </button>
                <button id="investasiAsuransiDanPinjaman-tab" data-tabs-target="#investasiAsuransiDanPinjaman" type="button" role="tab" aria-controls="investasiAsuransiDanPinjaman" aria-selected="false"
                        class="text-sm whitespace-nowrap py-4 px-6 hover:text-green-600 dark:hover:text-green-500">
                    Investasi Asuransi & Pinjaman
                </button>
                <button id="pajak-tab" data-tabs-target="#pajak" type="button" role="tab" aria-controls="pajak" aria-selected="false"
                        class="text-sm whitespace-nowrap py-4 px-6 hover:text-green-600 dark:hover:text-green-500">
                    Pajak
                </button>
                <button id="pendidikan-tab" data-tabs-target="#pendidikan" type="button" role="tab" aria-controls="pendidikan" aria-selected="false"
                        class="text-sm whitespace-nowrap py-4 px-6 hover:text-green-600 dark:hover:text-green-500">
                    Pendidikan
                </button>
                <button id="tagihan-tab" data-tabs-target="#tagihan" type="button" role="tab" aria-controls="tagihan" aria-selected="false"
                        class="text-sm whitespace-nowrap py-4 px-6 hover:text-green-600 dark:hover:text-green-500">
                    Tagihan
                </button>
                <button id="topUp-tab" data-tabs-target="#topUp" type="button" role="tab" aria-controls="topUp" aria-selected="false"
                        class="text-sm whitespace-nowrap py-4 px-6 hover:text-green-600 dark:hover:text-green-500">
                    Top-Up
                </button>
                <button id="travelDanEntertainment-tab" data-tabs-target="#travelDanEntertainment" type="button" role="tab" aria-controls="travelDanEntertainment" aria-selected="false"
                        class="text-sm whitespace-nowrap py-4 px-6 hover:text-green-600 dark:hover:text-green-500">
                    Travel & Entertainment
                </button>
                <button id="osPopuler-tab" data-tabs-target="#osPopuler" type="button" role="tab" aria-controls="osPopuler" aria-selected="false"
                        class="text-sm whitespace-nowrap py-4 px-6 hover:text-green-600 dark:hover:text-green-500">
                    OS Populer
                </button>
                <button id="lainnya-tab" data-tabs-target="#lainnya" type="button" role="tab" aria-controls="lainnya" aria-selected="false"
                        class="text-sm whitespace-nowrap py-4 px-6 hover:text-green-600 dark:hover:text-green-500">
                    Lainnya
                </button>
            </div>
            
            <div id="categoryUtamaTabContent" class="min-h-[25rem]">
                <BelanjaKonten />
                <FeaturedKonten />
                <BrandUnggulanKonten />
                <HalalCornerKonten />
                <InvestasiAsuransiDanPinjamanKonten />
                <PajakKonten />
                <PendidikanKonten />
                <TagihanKonten />
                <TopUpKonten />
                <TravelDanEntertainmentKonten />
                <OsPopulerKonten />
                <LainnyaKonten />
            </div>
        </div>
    );
});

