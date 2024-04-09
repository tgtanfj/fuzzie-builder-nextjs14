import React from "react";
import Workflow from "./workflow";
import { onGetWorkflow } from "../_actions/workflow-connection";

type Props = {};

const Workflows = async (props: Props) => {
  const workflows = await onGetWorkflow();

  return (
    <div className="relative flex flex-col gap-4">
      <section className="flex flex-col m-2">
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
