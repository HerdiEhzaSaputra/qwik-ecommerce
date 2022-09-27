import { component$ } from '@builder.io/qwik';
import ProdukJson from '../../db/bayar-di-tempat.json'

export const Cod = component$(() => {
    const produkBayarDitempat = ProdukJson;

    return (
        <>
            <div class="flex items-end gap-4" data-testid="divBasicLayout">
                <div class="items-end flex gap-4">
                    <h2 class="text-2xl font-bold" data-testid="">Bayar di tempat &lt; 49rb</h2>
                </div>
            </div>
            <div class="flex gap-2 overflow-x-auto">

                {produkBayarDitempat.map((produk) => (
                    <div class="min-w-[10rem] bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <a href='#'>
                            <img class="p-2 rounded-t-lg" src={produk.foto_produk} alt="product image" />
                            <div class="px-2 pb-2 space-y-1">
                                <h5 class="truncate tracking-tight text-gray-900 dark:text-white">{produk.nama_produk}</h5>
                                <div class="flex justify-between items-center">
                                    <span class="text-xl font-medium text-gray-900 dark:text-white">{produk.harga_produk}</span>
                                </div>
                                <div class="flex justify-between items-center">
                                    <div class="css-yaxhi2 full" data-productinfo="true"><div id="" class="css-1ktbh56" data-testid="shopWrapper"><i class="css-1y28ufk" aria-label="Official Store" data-testid=""></i><div class="css-1rn0irl"><span class="prd_link-shop-loc css-1kdc32b" data-testid="">{produk.daerah_penjual}</span><span class="prd_link-shop-name css-1kdc32b hidden" data-testid=""></span></div></div></div>
                                </div>
                                <div class="flex items-center gap-[0.3rem]">
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <span class="text-sm text-gray-600">{produk.rating_produk}</span>
                                    <span class="text-sm text-gray-600">|</span>
                                    <span class="text-sm text-gray-600">{produk.produk_terjual}</span>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
                
            </div>
        </>
    );
});
