import { component$ } from '@builder.io/qwik';

export const PajakKonten = component$(() => {

    return (
        <div id="pajak" role="tabpanel" aria-labelledby="pajak-tab" class="flex max-h-[25rem]">
            <div class="flex flex-col w-full justify-between px-8 space-y-4 py-5">
                <h1 class="text-xl font-bold">
                    Pajak
                </h1>
                <div class="grid grid-cols-5 grid-rows-2 gap-y-2 gap-x-4">
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Pajak Daerah Lainnya</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">E-Samsat</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Pajak PBB</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Penerimaan Negara</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Retribusi</p></a>
                </div>
            </div>
        </div>
    );
});

