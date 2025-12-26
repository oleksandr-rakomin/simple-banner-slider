import { BannerSlider } from "@/app/banner-slider";

import {
  absol,
  angryPikachu,
  articuno,
  bulbasaur,
  butterfree,
  chansey,
  charizard,
  meowth,
  moltres,
  nidoqueen,
  persian,
  squirtle,
} from "@/assets/images/pokemon";

const sliderItemsList = [
  { id: 1, src: absol, alt: "Absol pokemon" },
  { id: 2, src: angryPikachu, alt: "Angry pikachu pokemon" },
  { id: 3, src: articuno, alt: "Articuno pokemon" },
  { id: 4, src: bulbasaur, alt: "Bulbasaur pokemon" },
  { id: 5, src: butterfree, alt: "Butterfree pokemon" },
  { id: 6, src: chansey, alt: "Chansey pokemon" },
  { id: 7, src: charizard, alt: "Charizard pokemon" },
  { id: 8, src: meowth, alt: "Meowth pokemon" },
  { id: 9, src: moltres, alt: "Moltres pokemon" },
  { id: 10, src: nidoqueen, alt: "Nidoqueen pokemon" },
  { id: 11, src: persian, alt: "Persian pokemon" },
  { id: 12, src: squirtle, alt: "Squirtle pokemon" },
];

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

      <BannerSlider sliderItemsList={sliderItemsList} />
    </div>
  );
}
