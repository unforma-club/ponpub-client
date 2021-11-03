import { FileOutput } from "./types/file";

export const readInput = (files: Array<File>) => {
    return Promise.all(
        files.map((file) => {
            const fileReader = new FileReader();
            return new Promise<FileOutput>((resolve, reject) => {
                fileReader.onload = (e) => {
                    resolve({
                        name: file.name,
                        size: file.size,
                        type: file.type,
                        url: e.target!.result!.toString(),
                        destination: "",
                    });
                };
                fileReader.onerror = () =>
                    reject("Error while reading font file");
                fileReader.readAsDataURL(file);
            });
        })
    );
};
