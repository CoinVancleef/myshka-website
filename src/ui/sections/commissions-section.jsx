import tsukasa1 from "../../assets/commissions/tsukasa1.jpg";
import tsukasa2 from "../../assets/commissions/tsukasa2.jpg";
import mokouball from "../../assets/commissions/mokouball.jpg";
import background from "../../assets/commissions/background.png";
import hinatori from "../../assets/art/hinatori.jpg";
import commission125404954 from "../../assets/commissions/125404954_p0.png";

export function CommissionSection() {
  return (
    <div className="flex flex-col gap-5 w-full max-w-[1200px] justify-center items-center max-sm:px-2">
      <div className="text-4xl max-sm:text-2xl">Commissioned works</div>
      <div className="flex flex-col gap-3 items-center text-2xl max-sm:text-xl">
        <p>Tsukasa jumping into snow!</p>
        <img className="w-full max-w-[900px]" src={tsukasa1} alt="tsukasa1" />
        <img className="w-full max-w-[900px]" src={tsukasa2} alt="tsukasa2" />
        <p>Background for a game</p>
        <img src={background} alt="background" />
        <p>Mokou ballin'</p>
        <img className="w-full max-w-[800px]" src={mokouball} alt="mokouball" />
        <p className="text-center">Hina and Nitori with cute sukusuku</p>
        <img src={hinatori} alt="hinatori" />
        <p className="text-center">Tsukasa phone wallpaper</p>
        <img
          className="w-full max-w-[450px]"
          src={commission125404954}
          alt="commission"
        />
      </div>
    </div>
  );
}
