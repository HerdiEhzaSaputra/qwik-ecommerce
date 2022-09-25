import { component$, Slot } from '@builder.io/qwik';
import { Footer } from '~/components/layouts/footer';
import { Navbar } from '~/components/layouts/navbar';

export default component$(() => {
  return (
    <>
      <Navbar />
      <main>
        <section>
          <Slot />
        </section>
      </main>

      <hr class="bg-gray-200 mt-6 mb-6" />
      
      <Footer />
    </>
  );
});
