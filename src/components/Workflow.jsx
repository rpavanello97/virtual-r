import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems, labels } from "../constants";

/**
 * Workflow component
 *
 * This component renders a section that displays the workflow of using the
 * application. It includes a heading, an image, and a list of features.
 *
 * @returns {JSX.Element} The Workflow component
 */
const Workflow = () => {
  return (
    <div id="workflowId" className="mt-20">

      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        {labels.workflow.h2text}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          {labels.workflow.h2text2}
        </span>
      </h2>

      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img src={codeImg} alt="Coding" />
        </div>

        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>

    </div>
  );
};

export default Workflow;
