import React from "react"
import { useCMS, useForm,usePlugin } from "tinacms"

export const One = () => {
  const formConfig = {
    id: "one",
    label: "Edit 1st Page",
    fields: [
      { name: "name", label: "Name", component: "text" },
      { name: "oneLabel", label: "1st Label", component: "text" },
    ],
    initialValues: { name: "One", oneLabel: "1st" },
    onSubmit: (data) => {
      console.log("Submitting", data)
    },
  }
  const [data, form] = useForm(formConfig)
  usePlugin(form)

  return (
    <div>
      <p>{data.name}</p>
      <p>{data.oneLabel}</p>
    </div>
  )
}
