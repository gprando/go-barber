interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      // email válido que está na AWS
      email: 'gprando@gabrielprando.tech',
      name: 'gabriel prando',
    },
  },
} as IMailConfig;
