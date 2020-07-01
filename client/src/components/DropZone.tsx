import * as React from "react";
import { FieldProps } from "formik";
import {DropzoneArea} from 'material-ui-dropzone'

 const DropZone: React.SFC<FieldProps<any>> = ({
  field: { name },
  form: { setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  return (
    <DropzoneArea
    acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
      dropzoneText={"Drag and drop an image here or click"}
      onDrop={([file]) => {
        setFieldValue(name, file);
      }}
      {...props}
    >
     
    </DropzoneArea>
  );
};
export default DropZone


