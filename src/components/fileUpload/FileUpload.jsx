import React from "react";
import "./FileUpload.css";

const FileUpload = (props) => {
  return (
    <div>
      <form>
        <div>  
          <input type="file" id="file" onChange={props.onChange} />
          <label htmlFor="file"> </label>
        </div>
        <button onClick={props.method} value="Télécharger">
          Télécharger
        </button>
      </form>
      {props.fileName ? (
        <div>
          <img src={props.filePath} alt='fileUploaded' />
        </div>
      ) : null}
    </div>
  );
};

export default FileUpload;