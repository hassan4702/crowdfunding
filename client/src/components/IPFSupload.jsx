// import { useStorageUpload  } from "@thirdweb-dev/react";
// import React, { useState } from "react";
// import { MediaRenderer } from "@thirdweb-dev/react";
// import { ThirdwebStorage   } from "@thirdweb-dev/storage";
// export default function upload() {
//   // const [file, setFile] = useState();
//   const { mutateAsync: upload } = useStorageUpload();
//   const [uri, seturi] = useState(null);
//   const files = [
//     readFileSync("../file1.jpg"),
//     readFileSync("../file2.jpg"),
//   ];
//   const uploadToIpfs = async () => {
//     const storage = new ThirdwebStorage({ clientId: "67f9d109194f7343d2c9a621f0ef549f" });
//     // readfilesync(file);
//     const uploadUrl = await storage.uploadBatch(file);
//     alert(uploadUrl);
//   };

//   return (
//     <>
//       {" "}
//       <div>
//         <input multiple type="file" onChange={(e) => setFile(e.target.files[0])} />
//         <button onClick={uploadToIpfs}>Upload</button>
//       </div>
//       <div>
//       {uri && ( 
//           <>
//             {uri}
//             <MediaRenderer src={uri} alt="image" />
//           </>
//         )}
//       </div>
//     </>
//   );
// }
    // Initialize your provider
import { input } from "@nextui-org/react";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
    // Upload files to IPFS
    import { useStorageUpload } from "@thirdweb-dev/react";

    // Render files from IPFS
    import { MediaRenderer } from "@thirdweb-dev/react";
    import { useState } from "react";

    export default function upload() {
    const { mutateAsync: upload } = useStorageUpload();
    const [files, setFiles] = useState([])
    const storage = new ThirdwebStorage({
      clientId: "67f9d109194f7343d2c9a621f0ef549f", // You can get one from dashboard settings
    });
    const uploadData = async () => {
        // Get any data that you want to upload'
        const dataToUpload = files;

        // And upload the data with the upload function
        const uris = await storage.upload({ data: dataToUpload , options: { uploadWithGatewayUrl: true }});
    }
    return (
      <>
        <input type="file" multiple onChange={(e) => setFiles(e.target.files)} />
        <button onClick={uploadData} >Upload</button>
        <MediaRenderer src="ipfs://QmW5V9bWvSxai1fNp8E6DbTBgWudihW4ks3jdRGiv4XmKV/0" />
        </>
    );
    }
