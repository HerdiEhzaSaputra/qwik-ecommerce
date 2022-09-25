import { component$, useClientEffect$, useStore } from '@builder.io/qwik';
// import { CountDown } from './copy';

export const CountDown = component$(() => {
    const time = new Date;

    interface state {
        hour: number,
        minute: number,
        second: number,

    }

    const state = useStore({
        hour: 1,
        minute: 2,
        second: 3,
        // hour: time.getHours(),
        // minute: time.getMinutes(),
        // second: time.getSeconds(),
    });

    useClientEffect$(() => {
        const interval = setInterval(() => {
            if (state.hour != 0) {
                state.second--;
                if (state.second == '0') {
                    state.minute--
                    state.second = 60
                }
                if (state.minute == '0') {
                    state.hour--
                    state.minute = 60
                }
                if (state.hour == '0') {
                    state.hour = 0
                    state.minute = 0
                    state.second = 0
                }
            }
        }, 1000);
        return () => clearInterval(interval);
    });

    return (
        <>
            <div>{state.hour} : {state.minute} : {state.second}</div>
        </>
    );
});

export const Traktiran = component$(() => {

    return (
        <>
            <div class="flex items-end gap-4" data-testid="divBasicLayout">
                <div class="items-end flex gap-4">
                    <h2 class="text-2xl font-bold" data-testid="">Traktiran Pengguna Baru</h2>
                    <h2 class="text-gray-500" data-testid="">Berakhir Dalam</h2>
                </div>

                <CountDown />

                <div class="css-fcoe5x">
                    <a class="text-base font-bold text-green-600"
                        href="https://www.tokopedia.com/discovery/pengguna-baru?componentID=79759&amp;source=homepage.left_carousel.0.222808"
                        target="_self"
                        rel="noopener noreferrer"
                        data-testid="aLinkHeader"
                    >
                        Lihat Semua
                    </a>
                </div>
            </div>
            <div class="flex gap-2">
                <div class="w-[13rem] bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <a href='#'>
                        <img class="p-2 rounded-t-lg" src="https://images.tokopedia.net/img/cache/300-square/VqbcmM/2022/9/2/a568b771-1dc6-466f-89e1-a5e7429a73be.jpg" alt="product image" />
                        <div class="px-2 pb-2 space-y-1">
                            <h5 class="tracking-tight text-gray-900 dark:text-white">Stop Kontak 4 Lubang plus Kabel 3 Meter SNI Dexta</h5>
                            <div class="flex justify-between items-center">
                                <span class="text-xl font-medium text-gray-900 dark:text-white">Rp 0</span>
                            </div>
                            <div class="flex justify-start items-center">
                                <span class="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-1 py-0.5 rounded dark:bg-red-200 dark:text-red-900">100%</span>
                                <span class="text-xs line-through text-gray-500 dark:text-white">Rp 25.000</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="css-yaxhi2 full" data-productinfo="true"><div id="" class="css-1ktbh56" data-testid="shopWrapper"><i class="css-1y28ufk" aria-label="Official Store" data-testid=""></i><div class="css-1rn0irl"><span class="prd_link-shop-loc css-1kdc32b" data-testid="">Kota Palembang</span><span class="prd_link-shop-name css-1kdc32b hidden" data-testid=""></span></div></div></div>
                            </div>
                            <div class="flex flex-col justify-between items-start">
                                <div class="w-full bg-gray-200 rounded-full h-[0.280rem] dark:bg-gray-700">
                                    <div class="bg-red-600 h-[0.280rem] rounded-full dark:bg-red-500" style="width: 85%"></div>
                                </div>
                                <span class="text-xs mt-1 font-semibold">Segera Habis</span>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="w-[13rem] bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <a href='#'>
                        <img class="p-2 rounded-t-lg" src="https://images.tokopedia.net/img/cache/300-square/VqbcmM/2022/9/2/a568b771-1dc6-466f-89e1-a5e7429a73be.jpg" alt="product image" />
                        <div class="px-2 pb-2 space-y-1">
                            <h5 class="tracking-tight text-gray-900 dark:text-white">Stop Kontak 4 Lubang plus Kabel 3 Meter SNI Dexta</h5>
                            <div class="flex justify-between items-center">
                                <span class="text-xl font-medium text-gray-900 dark:text-white">Rp 0</span>
                            </div>
                            <div class="flex justify-start items-center">
                                <span class="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-1 py-0.5 rounded dark:bg-red-200 dark:text-red-900">100%</span>
                                <span class="text-xs line-through text-gray-500 dark:text-white">Rp 25.000</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="css-yaxhi2 full" data-productinfo="true"><div id="" class="css-1ktbh56" data-testid="shopWrapper"><i class="css-1y28ufk" aria-label="Official Store" data-testid=""></i><div class="css-1rn0irl"><span class="prd_link-shop-loc css-1kdc32b" data-testid="">Kota Palembang</span><span class="prd_link-shop-name css-1kdc32b hidden" data-testid=""></span></div></div></div>
                            </div>
                            <div class="flex flex-col justify-between items-start">
                                <div class="w-full bg-gray-200 rounded-full h-[0.280rem] dark:bg-gray-700">
                                    <div class="bg-red-600 h-[0.280rem] rounded-full dark:bg-red-500" style="width: 85%"></div>
                                </div>
                                <span class="text-xs mt-1 font-semibold">Segera Habis</span>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="w-[13rem] bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <a href='#'>
                        <img class="p-2 rounded-t-lg" src="https://images.tokopedia.net/img/cache/300-square/VqbcmM/2022/9/2/a568b771-1dc6-466f-89e1-a5e7429a73be.jpg" alt="product image" />
                        <div class="px-2 pb-2 space-y-1">
                            <h5 class="tracking-tight text-gray-900 dark:text-white">Stop Kontak 4 Lubang plus Kabel 3 Meter SNI Dexta</h5>
                            <div class="flex justify-between items-center">
                                <span class="text-xl font-medium text-gray-900 dark:text-white">Rp 0</span>
                            </div>
                            <div class="flex justify-start items-center">
                                <span class="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-1 py-0.5 rounded dark:bg-red-200 dark:text-red-900">100%</span>
                                <span class="text-xs line-through text-gray-500 dark:text-white">Rp 25.000</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="css-yaxhi2 full" data-productinfo="true"><div id="" class="css-1ktbh56" data-testid="shopWrapper"><i class="css-1y28ufk" aria-label="Official Store" data-testid=""></i><div class="css-1rn0irl"><span class="prd_link-shop-loc css-1kdc32b" data-testid="">Kota Palembang</span><span class="prd_link-shop-name css-1kdc32b hidden" data-testid=""></span></div></div></div>
                            </div>
                            <div class="flex flex-col justify-between items-start">
                                <div class="w-full bg-gray-200 rounded-full h-[0.280rem] dark:bg-gray-700">
                                    <div class="bg-red-600 h-[0.280rem] rounded-full dark:bg-red-500" style="width: 85%"></div>
                                </div>
                                <span class="text-xs mt-1 font-semibold">Segera Habis</span>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="w-[13rem] bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <a href='#'>
                        <img class="p-2 rounded-t-lg" src="https://images.tokopedia.net/img/cache/300-square/VqbcmM/2022/9/2/a568b771-1dc6-466f-89e1-a5e7429a73be.jpg" alt="product image" />
                        <div class="px-2 pb-2 space-y-1">
                            <h5 class="tracking-tight text-gray-900 dark:text-white">Stop Kontak 4 Lubang plus Kabel 3 Meter SNI Dexta</h5>
                            <div class="flex justify-between items-center">
                                <span class="text-xl font-medium text-gray-900 dark:text-white">Rp 0</span>
                            </div>
                            <div class="flex justify-start items-center">
                                <span class="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-1 py-0.5 rounded dark:bg-red-200 dark:text-red-900">100%</span>
                                <span class="text-xs line-through text-gray-500 dark:text-white">Rp 25.000</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="css-yaxhi2 full" data-productinfo="true"><div id="" class="css-1ktbh56" data-testid="shopWrapper"><i class="css-1y28ufk" aria-label="Official Store" data-testid=""></i><div class="css-1rn0irl"><span class="prd_link-shop-loc css-1kdc32b" data-testid="">Kota Palembang</span><span class="prd_link-shop-name css-1kdc32b hidden" data-testid=""></span></div></div></div>
                            </div>
                            <div class="flex flex-col justify-between items-start">
                                <div class="w-full bg-gray-200 rounded-full h-[0.280rem] dark:bg-gray-700">
                                    <div class="bg-red-600 h-[0.280rem] rounded-full dark:bg-red-500" style="width: 85%"></div>
                                </div>
                                <span class="text-xs mt-1 font-semibold">Segera Habis</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
});
