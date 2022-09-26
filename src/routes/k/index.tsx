import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
    return (
        <>
            <div class="px-8">
                <header class="win-nav z-30 w-full px-2 py-4 bg-white sm:px-4">
                    <div class="flex space-x-2">
                        <div class="css-7uvuex">
                            <div class="css-1ez3kt7">
                                <span>Kategori</span>
                            </div>
                        </div>
                        <div class="flex space-x-2">
                            <button data-testid="btnCDirectoryA" class="css-eudr7k" type="button" value="A" disabled>A</button>
                            <button data-testid="btnCDirectoryB" class="css-eudr7k" type="button" value="B">B</button>
                            <button data-testid="btnCDirectoryC" class="css-eudr7k" type="button" value="C" disabled>C</button>
                            <button data-testid="btnCDirectoryD" class="css-eudr7k" type="button" value="D">D</button>
                            <button data-testid="btnCDirectoryE" class="css-eudr7k" type="button" value="E">E</button>
                            <button data-testid="btnCDirectoryF" class="css-eudr7k" type="button" value="F">F</button>
                            <button data-testid="btnCDirectoryG" class="css-eudr7k" type="button" value="G">G</button>
                            <button data-testid="btnCDirectoryH" class="css-eudr7k" type="button" value="H">H</button>
                            <button data-testid="btnCDirectoryI" class="css-eudr7k" type="button" value="I">I</button>
                            <button data-testid="btnCDirectoryJ" class="css-eudr7k" type="button" value="J" disabled>J</button>
                            <button data-testid="btnCDirectoryK" class="css-eudr7k" type="button" value="K">K</button>
                            <button data-testid="btnCDirectoryL" class="css-eudr7k" type="button" value="L">L</button>
                            <button data-testid="btnCDirectoryM" class="css-eudr7k" type="button" value="M">M</button>
                            <button data-testid="btnCDirectoryN" class="css-eudr7k" type="button" value="N" disabled>N</button>
                            <button data-testid="btnCDirectoryO" class="css-eudr7k" type="button" value="O">O</button>
                            <button data-testid="btnCDirectoryP" class="css-eudr7k" type="button" value="P">P</button>
                            <button data-testid="btnCDirectoryQ" class="css-eudr7k" type="button" value="Q" disabled>Q</button>
                            <button data-testid="btnCDirectoryR" class="css-eudr7k" type="button" value="R">R</button>
                            <button data-testid="btnCDirectoryS" class="css-eudr7k" type="button" value="S" disabled>S</button>
                            <button data-testid="btnCDirectoryT" class="css-eudr7k" type="button" value="T">T</button>
                            <button data-testid="btnCDirectoryU" class="css-eudr7k" type="button" value="U" disabled>U</button>
                            <button data-testid="btnCDirectoryV" class="css-eudr7k" type="button" value="V" disabled>V</button>
                            <button data-testid="btnCDirectoryW" class="css-eudr7k" type="button" value="W">W</button>
                            <button data-testid="btnCDirectoryX" class="css-eudr7k" type="button" value="X" disabled>X</button>
                            <button data-testid="btnCDirectoryY" class="css-eudr7k" type="button" value="Y" disabled>Y</button>
                            <button data-testid="btnCDirectoryZ" class="css-eudr7k" type="button" value="Z" disabled>Z</button>
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
});

export const head: DocumentHead = {
    title: 'Welcome to Qwik',
};