import React from "react"
import { useCMS, useForm,usePlugin } from "tinacms"

export const Two = () => {
  const formConfig = {
    id: "two",
    label: "Edit 2nd Page",
    fields: [
      { name: "name", label: "Name", component: "text" },
      { name: "twoLabel", label: "2nd Label", component: "text" },
    ],
    initialValues: { name: "Two", twoLabel: "2nd" },
    onSubmit: (data) => {
      console.log("Submitting", data)
    },
  }
  const [data, form] = useForm(formConfig)
  usePlugin(form)

  return (
    <div>
      <p>{data.name}</p>
      <p>{data.twoLabel}</p>
    </div>
  )
}
