// tailwind.config.js
const { plugin } = require('twrnc');

module.exports = {
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        btn: {
          padding: 3,
          borderRadius: 10,
          textTranform: `uppercase`,
          backgroundColor: `#333`,
        },
        'resize-repeat': {
          resizeMode: `repeat`,
        },
      });
    }),
  ],
};