import { useStorageUpload } from "@thirdweb-dev/react";
import React, { useState } from "react";
import { MediaRenderer } from "@thirdweb-dev/react";
export default function upload() {
  const [file, setFile] = useState();
  const { mutateAsync: upload } = useStorageUpload();
  const [uri, seturi] = useState(null);
  const uploadToIpfs = async () => {
    const uploadUrl = await upload({
      data: [file],
      options: { uploadWithGatewayUrl: true },
    });
    alert(uploadUrl);
  };

  return (
    <>
      {" "}
      <div>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button onClick={uploadToIpfs}>Upload</button>
      </div>
      <div>
      {uri && ( 
          <>
            {uri}
            <MediaRenderer src={uri} alt="image" />
          </>
        )}
      </div>
    </>
  );
}
