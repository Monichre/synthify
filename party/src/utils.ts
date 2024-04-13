import * as Y from "yjs";
import { fromUint8Array, toUint8Array } from "js-base64";
export type Project = {
  id: string;
  title: string;
  data: string;
};
type TrpcResponse<T> = {
  result: {
    data: T;
  };
};
export const getProject = async (
  projectId: string,
  userToken: string
): Promise<Project> => {
  // @ts-ignore
  const backend = BACKEND_HOST;
  return new Promise(async (resolve, reject) => {
    const url = `${backend}/trpc/project.getProjectWithToken?input=${encodeURIComponent(
      JSON.stringify({
        project: projectId,
        token: userToken,
      })
    )}`;

    fetch(url)
      .then(async (res) => {
        if (res.ok) {
          const data = await res.json();
          resolve((data as TrpcResponse<Project>).result.data);
        } else {
          reject("error");
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
};

export const updateProjectData = async (
  projectId: string,
  userToken: string,
  data: string
): Promise<Project> => {
  // @ts-ignore
  const backend = BACKEND_HOST;
  return new Promise(async (resolve, reject) => {
    const url = `${backend}/trpc/project.updateProjectDataWithToken?input=${encodeURIComponent(
      JSON.stringify({
        project: projectId,
        token: userToken,
        data,
      })
    )}`;

    fetch(url)
      .then(async (res) => {
        if (res.ok) {
          resolve(await res.json());
        } else {
          reject("error");
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
};

export function serializeYDoc(yDoc: Y.Doc) {
  const documentState = Y.encodeStateAsUpdate(yDoc);
  const base64Encoded = fromUint8Array(documentState);
  return base64Encoded;
}

export function deserializeYDoc(base64YDoc: string) {
  const binaryEncoded = toUint8Array(base64YDoc);
  const deserializedYDoc = new Y.Doc();
  Y.applyUpdate(deserializedYDoc, binaryEncoded);
  return deserializedYDoc;
}