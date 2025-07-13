module.exports = () => ({
    upload: {
      config: {
        provider: 'local',
        providerOptions: {
          sizeLimit: 1000000, // лимит в байтах (1MB), можешь увеличить при необходимости
        },
      },
    },
  });
  