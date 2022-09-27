import { component$ } from '@builder.io/qwik';

export const TagihanKonten = component$(() => {

    return (
        <div id="tagihan" role="tabpanel" aria-labelledby="tagihan-tab" class="flex max-h-[25rem]">
            <div class="flex flex-col w-full justify-between px-8 space-y-4 py-5">
                <h1 class="text-xl font-bold">
                    Tagihan
                </h1>
                <div class="grid grid-cols-5 grid-rows-2 gap-y-2 gap-x-4">
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Air PDAM</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Angsuran Kredit</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">BPJS</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Bridestory Pay</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">E-Invoicing</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Gas PGN</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Internet & TV Kabel</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Langganan</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Listrik PLN</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Pascabayar</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Premi Asuransi</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Tagihan IPL</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Tagihan Kartu Kredit</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Telkom</p></a>
                </div>
            </div>
        </div>
    );
});

