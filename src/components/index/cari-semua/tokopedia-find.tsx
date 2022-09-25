import { component$ } from '@builder.io/qwik';

export const TokopediaFindTab = component$(() => {

    return (
        <div
            id="tokopediaFind"
            role="tabpanel"
            aria-labelledby="tokopediaFind-tab"
            class="grid grid-cols-4 gap-x-8 bg-white rounded-lg p-4 dark:bg-gray-800 hidden"
        >
            <a href="" class="border-b py-2 text-sm hover:text-green-500">Masker Terlengkap</a>
            <a href="" class="border-b py-2 text-sm hover:text-green-500">Masker Kain Terlengkap</a>
            <a href="" class="border-b py-2 text-sm hover:text-green-500">Face Shield Terlengkap</a>
            <a href="" class="border-b py-2 text-sm hover:text-green-500">Smartphone Samsung Terbaru</a>
            <a href="" class="border-b py-2 text-sm hover:text-green-500">iPhone Terbaru</a>
            <a href="" class="border-b py-2 text-sm hover:text-green-500">Smartphone Oppo Terbaru</a>
            <a href="" class="border-b py-2 text-sm hover:text-green-500">Smartphone Realme Terbaru</a>
            <a href="" class="border-b py-2 text-sm hover:text-green-500">Aneka Tanaman Hias Terbaru</a>
            <a href="" class="border-b py-2 text-sm hover:text-green-500">Aneka Sepeda Lipat Terbaru</a>
        </div>
    );
});
