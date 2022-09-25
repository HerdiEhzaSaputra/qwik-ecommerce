import { component$ } from '@builder.io/qwik';

export const KartuPrakerjaTab = component$(() => {

    return (
        <div
            id="kartuPrakerja"
            role="tabpanel"
            aria-labelledby="kartuPrakerja-tab"
            class="grid grid-cols-4 gap-x-8 bg-white rounded-lg p-4 dark:bg-gray-800 hidden"
        >
            <a href="" class="border-b py-2 text-sm hover:text-green-500">Luar Sekolah</a>
            <a href="" class="border-b py-2 text-sm hover:text-green-500">Haruka Edu</a>
            <a href="" class="border-b py-2 text-sm hover:text-green-500">Cakap</a>
            <a href="" class="border-b py-2 text-sm hover:text-green-500">Skill Academy</a>
            <a href="" class="border-b py-2 text-sm hover:text-green-500">Arkademi</a>
            <a href="" class="border-b py-2 text-sm hover:text-green-500">Hacktiv8</a>
            <a href="" class="border-b py-2 text-sm hover:text-green-500">Baking World</a>
            <a href="" class="border-b py-2 text-sm hover:text-green-500">Studilmu</a>
            <a href="" class="border-b py-2 text-sm hover:text-green-500">Rumah Siap Kerja</a>
            <a href="" class="border-b py-2 text-sm hover:text-green-500">Hellomotion Academy</a>
        </div>
    );
});
