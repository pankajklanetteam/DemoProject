const mongoose = require("mongoose");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const ProfileSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    gender: {
      type: String,
      required: false,
      lowercase: true,
      trim: true,
    },

    dob: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    username: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
    token: {
      type: String,
    },
  },
  { timestamps: true }
);

ProfileSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, "secret key");
  user.tokens = user.tokens.concat({ token });
  await user.save();

  return token;
};

ProfileSchema.statics.findByCredentials = async (email, password) => {
  const user = await Profile.findOne({ email });
  console.log("user is : " ,user)
  if (!user) {
    throw new Error("Invalid Credentails");
  }
  
  const isMatch = await bcrypt.compare(password, user.password);
  console.log("user password is  : ", password)
  console.log("user password  : ", user.password)
  console.log("value of isMatch is : ", isMatch);
  
  if (!isMatch) {
    throw new Error("Invalid Credentails1");
  }
  return user;
};


ProfileSchema.pre("save", async function (next) {
  const user = this;
  console.log(user.isModified , "is")
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;
