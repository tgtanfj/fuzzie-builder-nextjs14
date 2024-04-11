import React from "react";
import Workflow from "./workflow";
import { onGetWorkflows } from "../_actions/workflow-connection";
import MoreCredits from "./more-credits";

type Props = {};

const Workflows = async (props: Props) => {
  const workflows = await onGetWorkflows();

  return (
    <div className="relative flex flex-col gap-4">
      <section className="flex flex-col m-2">
        <MoreCredits/>
        {workflows?.length ? (
          workflows.map((workflow) => (
            <Workflow key={workflow.id} {...workflow} />
          ))
        ) : (
          <div className="mt-28 text-muted-foreground flex items-center justify-center">
            No Workflows
          </div>
        )}
      </section>
    </div>
  );
};

export default Workflows;
