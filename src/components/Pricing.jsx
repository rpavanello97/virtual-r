import { CheckCircle2 } from "lucide-react";
import { pricingOptions, labels } from "../constants";

/**
 * Pricing component that renders a section with pricing options.
 *
 * The component renders a heading and a list of pricing options. Each option
 * includes a title, price, and list of features. The component also includes
 * a call-to-action button.
 *
 * @returns {JSX.Element} A section with pricing options.
 */
const Pricing = () => {
  return (
    <div id="pricingId" className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        {labels.pricing.pricing}
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-4xl mb-8">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
                    {labels.pricing.mostPopular}
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">{labels.pricing.month}</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
              >
                {labels.pricing.subscribe}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
