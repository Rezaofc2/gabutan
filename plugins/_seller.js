export async function before(m) {
  let user = global.db.data.users[m.sender];
  if (user && user.seller && user.sellerTime && (new Date() >= user.sellerTime)) {
    user.seller = false;
    user.sellerTime = 0;
    await m.reply('waktu seller panel kamu habis');
  }
};



