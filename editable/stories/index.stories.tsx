import { chakra } from "../src/index"
import * as React from "react"
import { useEditable } from "../src/index"
import { Editable } from "../src/index"
import { EditableInput, EditablePreview, useEditableControls } from "../src/index"

import { themeDecorator } from "../../story-layout/src/index";

export default {
  title: "Editable",
  decorators: [themeDecorator],
}

export const UseEditableHook = () => {
  const {
    getInputProps,
    getPreviewProps,
    getCancelButtonProps,
    getSubmitButtonProps,
    isValueEmpty,
    isEditing,
    onEdit,
  } = useEditable({
    placeholder: "Title...",
    submitOnBlur: true,
    onCancel: () => console.log("cancel"),
    onSubmit: () => console.log("submit"),
  })

  return (
    <>
      <input
        style={{ width: "auto", background: "transparent" }}
        {...getInputProps()}
      />
      <span
        style={{ opacity: isValueEmpty ? 0.7 : 1 }}
        {...getPreviewProps()}
      />
      {!isEditing && <button onClick={onEdit}>Edit</button>}
      {isEditing && (
        <>
          <button {...getSubmitButtonProps()}>Save</button>
          <button {...getCancelButtonProps({ style: { padding: 10 } })}>
            Cancel
          </button>
        </>
      )}
    </>
  )
}

const EditableControls = () => {
  const {
    isEditing,
    getEditButtonProps,
    getSubmitButtonProps,
    getCancelButtonProps,
  } = useEditableControls()

  return (
    <div>
      {!isEditing ? (
        <button {...getEditButtonProps()}>Edit</button>
      ) : (
        <>
          <button {...getSubmitButtonProps()}>Save</button>
          <button {...getCancelButtonProps()}>Cancel</button>
        </>
      )}
    </div>
  )
}

export const Basic = () => (
  <Editable
    defaultValue="Rasengan ⚡️"
    fontSize="xl"
    textAlign="center"
    isPreviewFocusable={false}
    submitOnBlur={false}
    onChange={console.log}
  >
    <EditablePreview />
    <EditableInput />
    <EditableControls />
  </Editable>
)

export const CodeSandboxTopbar = () => {
  return (
    <chakra.div py="4" display="flex" alignItems="center">
      <chakra.p fontWeight="medium">My Sandboxes</chakra.p>
      <chakra.span mx="3">/</chakra.span>
      <Editable defaultValue="chakra-ui-demo">
        <EditableInput _focus={{ boxShadow: "none" }} />
        <EditablePreview />
      </Editable>
    </chakra.div>
  )
}
