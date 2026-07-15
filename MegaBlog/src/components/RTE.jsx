import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'


export default function RTE({ name, control, label, defaultvalue = "" }) {
    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1'>
                {label}
            </label>}

            <Controller
                name={name || "content"}
                control={control}
                render={({ field: { onChange } }) => (
                    <Editor
                        initialValue='dafault value'
                        init={
                            {
                                branding: false,
                                height: 500,
                                menubar: true,
                                plugin: [
                                    'advlist autolink lists link image charmap print preview anchor',
                                    'searchreplace visualblock code fullscreen ',
                                    'insertdatetime media table paste code help workcount'
                                ],
                                toolbar:
                                    'undo redo | formatselect | bold | italic | backcolor | forecolor| alignleft alignright aligncenter alignjustify | bullist numlist outdent indent | removeformat | help',
                            }

                        }
                        onEditorChange={onChange}
                    />
                )}
            />
        </div>
    )
}

// export default RTE
