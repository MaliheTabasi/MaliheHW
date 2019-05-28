var validateObject = {
  firstName: {
    presence: {
      allowEmpty: false,
      message: '^.لطفا نام خود را وارد نمایید'
    },
    length: {
      minimum: 3,
      message: '^ .نام باید از دو حرف بیشتر باشد'
    }
  },

  lastName: {
    presence: {
      allowEmpty: false,
      message: '^.لطفا نام خانوادگی خود را وارد نمایید'
    },
    length: {
      minimum: 3,
      message: '^ .نام خانوادگی باید از دو حرف بیشتر باشد'
    }
    // // numericality : {
    //     numericality: false,
    // //     message: '^.لطفا نام خانوادگی بدون عدد وارد نمایید'
    // // }
  },
  email: {
    presence: {
      allowEmpty: false,
      message: '^ .ایمیل نمی تواند خالی باشد'
    },
    email: {
      message: '^.لطفا ایمیل معتبری  وارد نمایید'
    }

  },
  password: {
    presence: {
      allowEmpty: false,
      message: '^.رمز عبور نمی تواند خالی باشد'
    },
    length: {
      minimum: 6,
      message: '^ .رمز عبور باید بیشتر از پنج حرف باشد'
    }
  },
  reTypePassword: {
    presence: {
      allowEmpty: false,
      message: '^.رمز مجدد نمی تواند خالی باشد'
    },
    length: {
      minimum: 6,
      message: '^ .رمز عبور باید بیشتر از پنج حرف باشد'
    }
  },
  phoneNumber: {
    presence: {
      allowEmpty: false,
      message: '^.شماره ی تلفن همراه نمی تواند خالی باشد'
    },
    length: {
      is: 11,
      message: '^ .شماره تلفن همراه 11رقمی می باشد'
    },
    numericality: {
      onlyInteger: true,
      message: '^ .شماره تلفن همراه، عدد صحیح می باشد.'
    }
  }

}
export default validateObject
