import { IMailProvider, IMessage } from '../IMailProvider'
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

export class MailtrapMailProvider implements IMailProvider {
  private transporter: Mail

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.NODEMAILER_HOST,
      port: Number(process.env.NODEMAILER_PORT),
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS
      }
    })
  }

  async sendMail(message: IMessage): Promise<void> {
    const recipients = Array.isArray(message.to) ? message.to : [message.to]

    await Promise.all(
      recipients.map(async (recipient) => {
        await this.transporter.sendMail({
          to: {
            name: recipient.name,
            address: recipient.email
          },
          from: {
            name: message.from.name,
            address: message.from.email
          },
          subject: message.subject,
          html: message.body
        })
      })
    )
  }
}
