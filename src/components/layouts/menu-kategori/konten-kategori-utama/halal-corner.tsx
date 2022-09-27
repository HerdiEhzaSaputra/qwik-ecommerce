import { component$ } from '@builder.io/qwik';

export const HalalCornerKonten = component$(() => {

    return (
        <div id="halalCorner" role="tabpanel" aria-labelledby="halalCorner-tab" class="flex max-h-[25rem]">
            <div class="flex flex-col w-full justify-between px-8 space-y-4 py-5">
                <h1 class="text-xl font-bold">
                    Halal Corner
                </h1>
                <div class="grid grid-cols-5 grid-rows-2 gap-y-2 gap-x-4">
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Tokopedia Salam</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Zakat Fitrah</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Wakaf</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Reksadana Syariah</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Donasi</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Zakat</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Kecantikan Halal</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Kesehatan Halal</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Makanan & Minuman Halal</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Fashion Muslim</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Perlengkapan Ibadah</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Al Qur'an</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Jadwal Sholat</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Qurban</p></a>
                </div>
            </div>
        </div>
    );
});

