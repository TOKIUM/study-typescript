export namespace Aws {
  export class S3Client {
    secretkey: string;
    accessKey: string;

    constructor (secretkey: string, accessKey: string) {
      this.secretkey = secretkey;
      this.accessKey = accessKey;
    }

    getObjectUrl(bucket: string, key: string): string {
      return 's3://' + bucket + '/' + key; // 実際は違うけどね...
    }
  }

  // namespace だけを export しても中身はされてないらしい
  export class CloudWatchClient {
    secretkey: string;
    accessKey: string;

    constructor (secretkey: string, accessKey: string) {
      this.secretkey = secretkey;
      this.accessKey = accessKey;
    }

    putMetric(data: { key: string, val: string }): string {
      return 'send to ' + data.key;
    }
  }
}

export namespace DK {
  export namespace Api {
    export const getExpenseAmount = (id: string): number => {
      return 108; // 100円均一
    }
  }
}
