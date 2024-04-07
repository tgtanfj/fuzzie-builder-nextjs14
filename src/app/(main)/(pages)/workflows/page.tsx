import React from 'react'
import WorkflowsButton from './_components/workflows-button'
import Workflows from './_components'

type Props = {}

const WorkFlowspage = (props: Props) => {
  return (
    <div className="relative flex flex-col">
      <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
        Workflows
        <WorkflowsButton/>
      </h1>
      <Workflows/>
      <Workflows/>
      <Workflows/>
      <Workflows/>
      <Workflows/>
      <Workflows/>
      <Workflows/>
      <Workflows/>
    </div>
  )
}

export default WorkFlowspage