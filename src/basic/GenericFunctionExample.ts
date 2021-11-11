function KeyValuePair<TKey, TValue>(key: TKey, value: TValue) {}

interface IStream {
    ReadStream() : Int8Array
}

class Data<T extends IStream> {
    ReadStream(stream : T) {
        let output = stream.ReadStream();
        console.log(output.byteLength);
    }
}

class WebStream implements IStream {
    ReadStream(): Int8Array {
        let array: Int8Array = new Int8Array(8);
        for (let index : number =0; index < array.length; index++) {
            array[index] = index + 3;
        }
        return array;
    }
}

class DickStream implements IStream {
    ReadStream(): Int8Array {
        let array: Int8Array = new Int8Array(20);
        for (let index : number = 0; index < array.length; index++ ) {
            array[index] = index + 3;
        }
        return array;
    }
}

const webStream = new Data<WebStream>();
const dickStream = new Data<DickStream>();

webStream.ReadStream(new WebStream());
dickStream.ReadStream(new DickStream());