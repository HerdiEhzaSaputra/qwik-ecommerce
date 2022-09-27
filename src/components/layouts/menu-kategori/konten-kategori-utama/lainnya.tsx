import { component$ } from '@builder.io/qwik';

export const LainnyaKonten = component$(() => {

    return (
        <div id="lainnya" role="tabpanel" aria-labelledby="lainnya-tab" class="flex max-h-[25rem]">
            <div class="flex flex-col w-full justify-between px-8 space-y-4 py-5">
                <h1 class="text-xl font-bold">
                    Lainnya
                </h1>
                <div class="grid grid-cols-5 grid-rows-2 gap-y-2 gap-x-4">
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Belanja di Kotamu</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Info Covid-19</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Donasi</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Pasang Internet & TV Kabel</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Tokopedia Clean</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Tokopedia Print</p></a>
                </div>
            </div>
        </div>
    );
});

