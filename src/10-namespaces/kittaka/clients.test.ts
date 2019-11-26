import { Aws } from './clients';

test("AwsClients#s3Client", () => {
  const secretkey = 'secretkey'
  const accessKey = 'accessKey'
  const s3Client = new Aws.S3Client(secretkey, accessKey);

  const bucket = 'cats'
  const key = 'TurkishAngora'
  expect(s3Client.getObjectUrl(bucket, key)).toBe('s3://' + bucket + '/' + key);
});

test("AwsClients#CloudWatchClient", () => {
  const secretkey = 'secretkey'
  const accessKey = 'accessKey'
  const cloudWatchClient = new Aws.CloudWatchClient(secretkey, accessKey);

  const key = 'cat'
  const val = 'TurkishAngora'
  expect(cloudWatchClient.putMetric({ key: key, val: val })).toBe('send to ' + key);
});

