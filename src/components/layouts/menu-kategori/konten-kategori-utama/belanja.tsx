import { component$ } from '@builder.io/qwik';

export const BelanjaKonten = component$(() => {

    return (
        <div id="belanja" role="tabpanel" aria-labelledby="belanja-tab" class="flex max-h-[28rem]">
            <aside class="w-64" aria-label="Sidebar">
                <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
                    <ul id="categoryTab" data-tabs-toggle="#categoryTabContent" role="tablist" class="space-y-2">
                        <li>
                            <a href="#" id="buku-tab" data-tabs-target="#buku" type="button" role="tab" aria-controls="buku" aria-selected="false"
                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span class="ml-3">
                                    Buku
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#" id="dapur-tab" data-tabs-target="#dapur" type="button" role="tab" aria-controls="dapur" aria-selected="false"
                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span class="ml-3">
                                    Dapur
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span class="ml-3">
                                    Elektronik
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span class="ml-3">
                                    Fashion Anak & Bayi
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span class="ml-3">
                                    Fashion Muslim
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span class="ml-3">
                                    Fashion Pria
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span class="ml-3">
                                    Fashion Wanita
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span class="ml-3">
                                    Film & Musik
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span class="ml-3">
                                    Gaming
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span class="ml-3">
                                    Handphone & Tablet
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span class="ml-3">
                                    Ibu & Bayi
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span class="ml-3">
                                    Kamera
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span class="ml-3">
                                    Kecantikan
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span class="ml-3">
                                    Kesehatan
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span class="ml-3">
                                    Komputer & Laptop
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span class="ml-3">
                                    Logam Mulia
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span class="ml-3">
                                    Mainan & Hobi
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span class="ml-3">
                                    Makanan & Minuman
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span class="ml-3">
                                    Office & Stationery
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span class="ml-3">
                                    Olahraga
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span class="ml-3">
                                    Otomotif
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span class="ml-3">
                                    Perawatan Hewan
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span class="ml-3">
                                    Perawatan Tubuh
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span class="ml-3">
                                    Perlengkapan Pesta & Craft
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span class="ml-3">
                                    Pertukangan
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span class="ml-3">
                                    Produk Lainnya
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span class="ml-3">
                                    Properti
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span class="ml-3">
                                    Rumah Tangga
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span class="ml-3">
                                    Tour & Travel
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span class="ml-3">
                                    Wedding
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
            <div id="myTabContent" class="py-5 px-4 mx-auto text-sm text-gray-500 dark:text-gray-400 md:px-6">
                <div class="space-y-4 sm:mb-4 md:mb-0" aria-labelledby="mega-menu-full-cta-button">
                    <div id="buku" role="tabpanel" aria-labelledby="buku-tab">
                        <a href="#" class="hover:text-green-500"><h1 class="text-xl font-bold">Buku</h1></a>
                        <ul class="flex flex-nowrap">
                            <li>
                                <a href="#" class="hover:text-green-500"><h5 class="text-md font-bold">Arsitektur & Desain</h5></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Bangunan</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Codes & Standars</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Dekorasi & Ornamen</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Desain Dapur</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Desain Kamar</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Desain Ruang Keluarga</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Desain Ruang Tamu</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Desain Rumah</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Interior & Eksterior</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Metode & Material Bangunan</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Taman</p></a>

                                <a href="#" class="hover:text-green-500"><h5 class="text-md font-bold">Buku Hukum</h5></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Gender & Hukum</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Hukum Dagang</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Hukum Internasional</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Hukum Perdata</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Hukum Pidana</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Kemanusiaan</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Politik & Hukum</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Kumpulan Peraturan Perundang-Undangan</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">UUD 1945</p></a>

                                <a href="#" class="hover:text-green-500"><h5 class="text-md font-bold">Buku Import</h5></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Agriculture Book Import</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Art & Novel Import</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Child & Teenager Book Import</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Computer Book Import</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Economy Book Import</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Feminity Book Import</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Health Book Import</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Hobby & Interest Book Import</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Language Book Import</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Law Book Import</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Management & Business Book Import</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Medical Book Import</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Political Social Book Import</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Psychology & Education Book Import</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Reference & Dictionary Book Import</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Religion & Philosophy Book Import</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">School Book Import</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Secretarial Book Import</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Self Development Book Import</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Technique Book Import</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Tourism & Map Book Import</p></a>
                            </li>
                            <li>
                                <a href="#" class="hover:text-green-500"><h5 class="text-md font-bold">Buku Masakan</h5></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Resep Kue</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Resep Makanan Bayi & Balita</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Resep Makanan Diet</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Resep Masakan</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Resep Minuman & Dessert</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Resep Pastry</p></a>

                                <a href="#" class="hover:text-green-500"><h5 class="text-md font-bold">Buku Persiapan Ujian</h5></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Persiapan TPA & Psikotest</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Persiapan Tes CPNS</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Persiapan Tes TOEFL & IELTS</p></a>

                                <a href="#" class="hover:text-green-500"><h5 class="text-md font-bold">Buku Remaja dan Anak</h5></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Aktivitas</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Cerita Anak</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Dongeng</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Dunia Pengetahuan</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Fabel</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Islami Anak</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Keterampilan Anak</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Mewarnai</p></a>

                                <a href="#" class="hover:text-green-500"><h5 class="text-md font-bold">Ekonomi & Bisnis</h5></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Akuntansi</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Bisnis</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Ekonomi</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Kesekretariatan</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Manajemen</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Pariwisata</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Perbankan</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Perhotelan</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Perpajakan</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Statistik</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Usaha Kecil & Kewirausahaan</p></a>

                                <a href="#" class="hover:text-green-500"><h5 class="text-md font-bold">Hobi</h5></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Alam</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Fotografi</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Hewan Peliharaan</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Hiburan</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Humor</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Keterampilan</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Kuliner</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Musik & Lagu</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Olahraga</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Otomotif</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Permainan</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Seni</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Tanaman</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Travel</p></a>
                            </li>
                            <li>
                                <a href="#" class="hover:text-green-500"><h5 class="text-md font-bold">Kamus & Bahasa Asing</h5></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Bahasa Arab</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Bahasa Indonesia</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Bahasa Inggris</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Bahasa Jawa</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Bahasa Jepang</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Bahasa Jerman</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Bahasa Korea</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Bahasa Mandarin</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Bahasa Perancis</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Basa Sunda</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Kamus Bahasa Lainnya</p></a>

                                <a href="#" class="hover:text-green-500"><h5 class="text-md font-bold">Kedokteran</h5></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Farmasi</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Kedokteran Spesialis</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Kedokteran Umum</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Psikiatri</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Kamus Istilah Kedokteran</p></a>

                                <a href="#" class="hover:text-green-500"><h5 class="text-md font-bold">Keluarga</h5></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Bimbingan Orang Tua</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Nama-nama Bayi</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Pendidikan Keluarga</p></a>

                                <a href="#" class="hover:text-green-500"><h5 class="text-md font-bold">Kesehatan & Gaya Hidup</h5></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Diet</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Gizi & Nutrisi</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Kesehatan Anak</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Kesehatan Masyarakat</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Kesehatan Pria</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Latihan & Kebugaran</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Pengobatan Alternatif</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Sports & Adventure</p></a>

                                <a href="#" class="hover:text-green-500"><h5 class="text-md font-bold">Kewanitaan</h5></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Busana</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Kecantikan</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Kehamilan & Menyusui</p></a>

                                <a href="#" class="hover:text-green-500"><h5 class="text-md font-bold">Komik</h5></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Komik Anak</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Komik Asing</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Komik Dewasa</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Komik Islami</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Komik Langka</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Komik Manga</p></a>

                                <a href="#" class="hover:text-green-500"><h5 class="text-md font-bold">Komputer & Internet</h5></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Database</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Design Graphics</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Hardware</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Internet & Web</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Microsoft Office</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Mobile & Gadget</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Programming</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Sistem Operasi</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Social Media</p></a>
                            </li>
                            <li>
                                <a href="#" class="hover:text-green-500"><h5 class="text-md font-bold">Lainnya</h5></a>

                                <a href="#" class="hover:text-green-500"><h5 class="text-md font-bold">Majalah</h5></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Katalog</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Koran</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Majalah Anak</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Majalah Desain</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Majalah Design Interior</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Majalah Fashion</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Majalah Musik</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Majalah Olahraga</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Majalah Otomotif</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Majalah Politik, Ekonomi, dan Bisnis</p></a>

                                <a href="#" class="hover:text-green-500"><h5 class="text-md font-bold">Novel & Sastra</h5></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Roman</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Fantasi</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Fiksi Puisi</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Kisah Nyata</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Kritik Sastra</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Literatur Fiksi</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Misteri</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Naskah</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Novel Indonesia</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Novel Remaja</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Novel Terjemahan</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Puisi</p></a>

                                <a href="#" class="hover:text-green-500"><h5 class="text-md font-bold">Pendidikan</h5></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Atlas</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Bimbingan Belajar</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku SD Kelas 1</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku SD Kelas 2</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku SD Kelas 3</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku SD Kelas 4</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku SD Kelas 5</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku SD Kelas 6</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku SMA Kelas 1</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku SMA Kelas 2</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku SMA Kelas 3</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku SMP Kelas 1</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku SMP Kelas 2</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku SMP Kelas 3</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Saku Pramuka</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Ensiklopedia</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Kumpulan Soal SD</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Kumpulan Soal SMA</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Kumpulan Soal SMP</p></a>

                                <a href="#" class="hover:text-green-500"><h5 class="text-md font-bold">Pengembangan Diri & Karir</h5></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Kesuksesan</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Leadership Kepemimpinan</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Self Improvement & Development</p></a>
                            </li>
                            <li>
                                <a href="#" class="hover:text-green-500"><h5 class="text-md font-bold">Pertanian</h5></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Agribisnis</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Bioteknologi Pertanian</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Pengembangan Pertanian</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Peternakan</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Tanaman & Kebun</p></a>

                                <a href="#" class="hover:text-green-500"><h5 class="text-md font-bold">Religi & Spiritual</h5></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Al-Quran</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Alkitab</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Agama Buddha</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Agama Hindu</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Agama Islam</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Agama Katolik</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Agama Khong Hu Chu</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Agama Kristen</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Filosofi</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Filsafat</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Kepercayaan</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Spiritual</p></a>

                                <a href="#" class="hover:text-green-500"><h5 class="text-md font-bold">Sosial Politik</h5></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Autobiografi</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Biografi</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Jurnalisme</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Komunikasi</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Lingkungan Hidup</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Politik</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Sejarah</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Sosial Budaya</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Ilmu Media Komunikasi</p></a>

                                <a href="#" class="hover:text-green-500"><h5 class="text-md font-bold">Teknik & Sains</h5></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Astronomi & Luar Angkasa</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Biologi</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Elektro</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Engineering</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Fisika</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Geografi</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Geologi</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Ilmiah</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Kimia</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Robotika</p></a>
                                <a href="#" class="hover:text-green-500"><p class="text-sm">Buku Sipil</p></a>
                            </li>
                        </ul>
                    </div>
                    <ul id="dapur" role="tabpanel" aria-labelledby="dapur-tab">
                        <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                            dapur content
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
});

