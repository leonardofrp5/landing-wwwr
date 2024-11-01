import AWS from 'aws-sdk';
import { logger } from '@/lib/logger';

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'us-east-1'
});

const sns = new AWS.SNS();

export async function sendSMS(phoneNumber: string, message: string) {
  try {
    const params = {
      Message: message,
      PhoneNumber: `+57${phoneNumber}`,
      MessageAttributes: {
        'AWS.SNS.SMS.SMSType': {
          DataType: 'String',
          StringValue: 'Promotional'
        }
      }
    };

    const result = await sns.publish(params).promise();
    logger({ label: 'MESSAGE_SEND', trace: result });
    return true;
  } catch (error) {
    logger({ label: 'SMS_ERROR', trace: error });
    return false;
  }
}
