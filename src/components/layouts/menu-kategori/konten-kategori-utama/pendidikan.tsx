import { component$ } from '@builder.io/qwik';

export const PendidikanKonten = component$(() => {

    return (
        <div id="pendidikan" role="tabpanel" aria-labelledby="pendidikan-tab" class="flex max-h-[25rem]">
            <div class="flex flex-col w-full justify-between px-8 space-y-4 py-5">
                <h1 class="text-xl font-bold">
                    Pendidikan
                </h1>
                <div class="grid grid-cols-5 grid-rows-2 gap-y-2 gap-x-4">
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Belajar</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Biaya Pendidikan</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Kartu Prakerja</p></a>
                </div>
            </div>
        </div>
    );
});

