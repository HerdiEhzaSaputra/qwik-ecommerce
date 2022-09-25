import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';
import { CariSemua } from '~/components/index/cari-semua';
import { Carousel } from '~/components/index/carousel';
import { Cod } from '~/components/index/cod';
import { DaftarTokopedia } from '~/components/index/daftar-tokopedia';
import { KemudahanJualanTokopedia } from '~/components/index/daftar-tokopedia/kemudahan';
import { ElektronikPilihan } from '~/components/index/elektronik';
import { KategoriPilihan } from '~/components/index/kategori';
import { KategoriNav } from '~/components/index/kategori-button';
import { OfficialStore } from '~/components/index/official-store';
import { Produk } from '~/components/index/partials/produk';
import { Traktiran } from '~/components/index/traktiran';

export default component$(() => {
  return (
    <>
      <div class="px-8">
        <Carousel />

        <KategoriPilihan />

        <Traktiran />

        <hr class="relative h-[0.10rem] bg-gray-200 mt-6 mb-4" />

        <OfficialStore />

        <hr class="relative h-[0.10rem] bg-gray-200 mt-6 mb-4" />

        <Cod />

        <hr class="relative h-[0.10rem] bg-gray-200 mt-6 mb-4" />

        <ElektronikPilihan />

        <hr class="relative h-[0.10rem] bg-gray-200 mt-6 mb-4" />

        <KategoriNav />

        <CariSemua />

        <DaftarTokopedia />
        
        <hr class="relative h-[0.10rem] border-dashed mt-6 mb-4" />

        <KemudahanJualanTokopedia />

        {/* <Link class="mindblow" href="/flower">
          Blow my mind 🤯
        </Link> */}
      </div>   
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
};
