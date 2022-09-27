import { component$ } from '@builder.io/qwik';

export const TopUpKonten = component$(() => {

    return (
        <div id="topUp" role="tabpanel" aria-labelledby="topUp-tab" class="flex max-h-[25rem]">
            <div class="flex flex-col w-full justify-between px-8 space-y-4 py-5">
                <h1 class="text-xl font-bold">
                    Top-Up
                </h1>
                <div class="grid grid-cols-5 grid-rows-2 gap-y-2 gap-x-4">
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Paket Data</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Pulsa</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Roaming</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Uang Elektronik</p></a>
                </div>
            </div>
        </div>
    );
});

