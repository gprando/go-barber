/* eslint-disable no-console */
import { inject, injectable } from 'tsyringe';

import nodemailer, { Transporter } from 'nodemailer';
import IMailProvider from '../models/IMailProvider';
import ISendMailDTO from '../dtos/ISendMailDTO';
import IMailTemplateProvider from '../../MailTemplateProvider/models/IMailTemplateProvider';

@injectable()
export default class EtherealMailProvider implements IMailProvider {
  private client: Transporter;

  constructor(
    @inject('MailTemplateProvider')
    private mailTemplateProvider: IMailTemplateProvider,
  ) {
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'rene20@ethereal.email',
        pass: '3E85Rvymxtve2NGDA7',
      },
    });

    this.client = transporter;
  }

  public async sendMail({
    to,
    subject,
    from,
    templateData,
  }: ISendMailDTO): Promise<void> {
    const message = await this.client.sendMail({
      from: {
        name: from?.name || 'Equipe GoBarber',
        address: from?.email || 'equipe@gobarber.com.br',
      },
      to: {
        name: to.name,
        address: to.email,
      },
      subject,
      text: 'teste',
      html: await this.mailTemplateProvider.parse(templateData),
    });
    console.log('Message sent: %s', message.messageId);

    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));
  }
}
