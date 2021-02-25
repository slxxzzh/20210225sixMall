module.exports = app => {
  let mongoose = app.mongoose;
  let Schema = mongoose.Schema;
//   console.log(Schema)
  const backStageUserSchema = new Schema({
    // 用户名
    username: {
      type: String,
    },
    // 密码
    password: {
      type: String,
    },
  });
  return mongoose.model('Backstageuser', backStageUserSchema);
};

