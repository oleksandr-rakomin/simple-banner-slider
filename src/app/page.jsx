import { Slider } from "@/app/slider";

import {
  angryPikachuPokemon,
  bulbasaurPokemon,
  meowthPokemon,
  nidoqueenPokemon,
} from "@/assets/images";

const sliderItemsList = [
  { id: 1, alt: "Angry pikachu pokemon", src: angryPikachuPokemon },
  { id: 2, alt: "Bulbasaur pokemon", src: bulbasaurPokemon },
  { id: 3, alt: "Meowth pokemon", src: meowthPokemon },
  { id: 4, alt: "Nidoqueen pokemon", src: nidoqueenPokemon },
];

const sliderHeight = "h-150";
const sizesImg = "800px";

export default function Home() {
  return (
    <div className="main-container flex gap-x-5 py-10 bg-red-200">
      <p className="flex-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        vestibulum magna dictum, convallis est vel, fermentum augue. Quisque
        facilisis et tortor eget sollicitudin. Vivamus pharetra tortor ante.
        Phasellus at porta quam. Nam ipsum mauris, maximus id varius nec,
        tincidunt condimentum mauris. Curabitur rutrum sed lorem vel suscipit.
        Vivamus venenatis felis eu ipsum iaculis tristique. Maecenas ut nulla id
        metus mollis malesuada. In malesuada, quam consectetur condimentum
        faucibus, sapien sapien suscipit ligula, ut auctor libero magna sed
        tellus. Vestibulum bibendum tortor ut malesuada lacinia. Phasellus
        tristique, sem eu aliquam tempus, massa lorem iaculis ante, in aliquet
        odio diam vel magna. Suspendisse potenti. Maecenas efficitur interdum
        dolor. Sed et nunc placerat, pellentesque felis in, tempor risus. Etiam
        tortor magna, euismod vel risus non, maximus vehicula est. Etiam et
        pulvinar enim. Pellentesque tincidunt massa ut erat mattis condimentum.
        Praesent tempor congue scelerisque. Phasellus ac blandit massa.
      </p>

      <Slider
        sliderItemsList={sliderItemsList}
        sliderHeight={sliderHeight}
        sizesImg={sizesImg}
      />
    </div>
  );
}
