import { component$ } from '@builder.io/qwik';

export const FeaturedKonten = component$(() => {

    return (
        <div id="featured" role="tabpanel" aria-labelledby="featured-tab" class="flex max-h-[25rem]">
            <div class="flex flex-col w-full justify-between px-8 space-y-4 py-5">
                <h1 class="text-xl font-bold">
                    Featured
                </h1>
                <div class="grid grid-cols-5 grid-rows-2 gap-y-2 gap-x-4">
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Dilayani Tokopedia</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Misi Seru</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Tokopedia Sehat</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Tokopedia Affiliate</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Uang Elektronik</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Tagihan Kartu Kredit</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Promo</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Komputer & Laptop</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Tukar Tambah</p></a>
                </div>
            </div>
        </div>
    );
});

