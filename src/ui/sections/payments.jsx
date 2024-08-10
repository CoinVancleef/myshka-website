import boosty from "../../assets/icons/boosty.png";
import tether from "../../assets/icons/tether-usdt.png";
import paypal from "../../assets/icons/paypal.png";

export function Payments() {
  return (
    <>
      <h2 className="text-5xl max-sm:text-3xl text-center">Payments</h2>
      <div className="flex flex-col gap-3 w-full p-5 bg-gray-600 bg-opacity-50 text-gray-200 border-2 rounded-md border-gray-500">
        <p className="text-2xl max-sm:text-xl text-center">
          There are three ways I accept payments, so please choose whatever
          you're most comfortable with 💖
        </p>
        <ul className="flex flex-col gap-2">
          <li className="flex items-center">
            <img
              className="w-12 h-12 max-sm:w-8 max-sm:h-8"
              src={paypal}
              alt="paypal"
            />
            <p>- through Paypal.</p>
          </li>
          <li className="flex items-center">
            <img
              className="w-12 h-12 max-sm:w-8 max-sm:h-8"
              src={tether}
              alt="tether-usdt"
            />
            <p>
              - USDT (TRC20). Crypto is the best option for me, I offer a 5%
              discount if you choose to pay this way 💘
            </p>
          </li>
          <li className="flex items-center">
            <a target="_blank" rel="noreferrer" href="https://boosty.to/mysh">
              <img
                className="w-12 h-14 max-sm:w-8 max-sm:h-8"
                src={boosty}
                alt="boosty"
              />
            </a>
            <p> - through Boosty.</p>
          </li>
        </ul>
        <p className="text-2xl max-sm:text-xl text-center">
          Contact me on{" "}
          <a
            className="underline"
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/sleepymausu"
          >
            Twitter
          </a>{" "}
          first before you make any payments!
        </p>
      </div>
    </>
  );
}
