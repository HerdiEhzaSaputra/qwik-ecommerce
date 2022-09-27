import { component$ } from '@builder.io/qwik';

export const TravelDanEntertainmentKonten = component$(() => {

    return (
        <div id="travelDanEntertainment" role="tabpanel" aria-labelledby="travelDanEntertainment-tab" class="flex max-h-[25rem]">
            <div class="flex flex-col w-full justify-between px-8 space-y-4 py-5">
                <h1 class="text-xl font-bold">
                    Travel & Entertainment
                </h1>
                <div class="grid grid-cols-5 grid-rows-2 gap-y-2 gap-x-4">
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Food & Voucher</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Hiburan</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Hotel</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">M.Tix XXI</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Streaming</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Tiket Event</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Tiket Kereta Api</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Tiket Pesawat</p></a>
                    <a href="#" class="hover:text-green-500"><p class="text-sm">Voucher Game</p></a>
                </div>
            </div>
        </div>
    );
});

